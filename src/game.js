import * as THREE from "three";
import { RoomEnvironment } from "three/addons/environments/RoomEnvironment.js";
import { createCarModel } from "./three/carModel.js";
import { buildTrack } from "./three/track.js";
import { Effects } from "./three/effects.js";
import { DragSim, clamp, QUARTER_MILE } from "./physics.js";
import {
  CARS, RIVALS, PAINTS, RIVAL_PAINTS, UPGRADES, upgradeCost,
  buildSpec, carById,
} from "./data.js";
import { loadSave, persist, money } from "./save.js";
import { GameAudio } from "./audio.js";
import { UI } from "./ui.js";

const LANE = 4.2;
const START_Z = -1.43;
const FINISH = QUARTER_MILE;
const RIVAL_POWER = [0.78, 0.87, 0.95, 1.0, 1.05, 1.1, 1.15, 1.22];

const dt = 1 / 120;

function simulateTargetET(spec) {
  const sim = new DragSim(spec);
  for (let i = 0; i < 240; i++) {
    const thr = sim.engineRpm < spec.launchRpm ? 1 : 0.15;
    sim.step(dt, { throttle: thr, clutch: true }, true);
    if (sim.engineRpm >= spec.launchRpm) break;
  }
  let t = 0;
  let guard = 0;
  while (sim.distance < FINISH && guard++ < 120 * 22) {
    const thr = sim.wheelspin > 0.6 ? 0.65 : 1;
    sim.step(dt, { throttle: thr, clutch: false }, false);
    sim.autoShift();
    t += dt;
  }
  return t;
}

export class Game {
  constructor() {
    this.save = loadSave();
    this.audio = new GameAudio();
    this.save.sound = this.save.sound !== false;
    this.audio.muted = !this.save.sound;
    this.time = 0;
    this.mode = "boot";
    this.cameraMode = "cockpit";
    this.phase = "idle";
    this.steer = 0;
    this.steerTarget = 0;
    this.wheelPointer = null;
    this.keys = {};
    this.touchGas = false;
    this.touchClutch = false;
    this.treeBeeped = [false, false, false];
    this.rivalTargetCache = new Map();
    this.smokeAcc = 0;
    this.simAcc = 0;
    this.launchPromptVisible = false;
    this.autoShift = true;
    this.ui = null;

    this.initGraphics();
    this.initTrack();
    this.initCars();
    this.initInput();
    this.ui = new UI(this);
    this.audio.setMuted(!this.save.sound);
    this.ui.updateMenu(this.save, this.nextRival());
    this.openMenu(true);
    this.resize();
    window.addEventListener("resize", () => this.resize());

    this.last = performance.now();
    requestAnimationFrame((t) => this.frame(t));

    // modo de teste: ?autostart corre direto após o boot
    if (new URLSearchParams(location.search).has("autostart")) {
      setTimeout(() => {
        if (this.mode === "boot") this.boot();
        setTimeout(() => this.startRace(), 120);
      }, 300);
    }
  }

  // ---------- setup ----------
  initGraphics() {
    const canvas = document.getElementById("scene");
    this.renderer = new THREE.WebGLRenderer({ canvas, antialias: true, powerPreference: "high-performance" });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.75));
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFShadowMap;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.18;
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;

    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x05060c);
    this.scene.fog = new THREE.FogExp2(0x05060c, 0.0048);

    const pmrem = new THREE.PMREMGenerator(this.renderer);
    this.scene.environment = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
    this.scene.environmentIntensity = 0.45;

    this.camera = new THREE.PerspectiveCamera(68, window.innerWidth / window.innerHeight, 0.06, 1100);
    this.camera.position.set(12, 4, 8);

    this.hemi = new THREE.HemisphereLight(0x33436b, 0x07070b, 0.85);
    this.scene.add(this.hemi);

    this.moon = new THREE.DirectionalLight(0xa8bcff, 1.25);
    this.moon.position.set(30, 60, -20);
    this.moon.castShadow = true;
    this.moon.shadow.mapSize.set(2048, 2048);
    this.moon.shadow.camera.left = -35;
    this.moon.shadow.camera.right = 35;
    this.moon.shadow.camera.top = 35;
    this.moon.shadow.camera.bottom = -35;
    this.moon.shadow.camera.near = 1;
    this.moon.shadow.camera.far = 200;
    this.moon.shadow.bias = -0.0006;
    this.moon.shadow.normalBias = 0.02;
    this.scene.add(this.moon);
    this.moonTarget = new THREE.Object3D();
    this.scene.add(this.moonTarget);
    this.moon.target = this.moonTarget;

    this.warm = new THREE.PointLight(0xffc98a, 45, 40, 2);
    this.warm.position.set(0, 9, 4);
    this.scene.add(this.warm);

    this.speedlines = document.getElementById("speedlines");

    // reduz qualidade se estiver muito lento
    this.frameTimes = [];
    this.quality = 1;
  }

  initTrack() {
    this.track = buildTrack();
    this.scene.add(this.track.group);
    this.track.setTree({ a: [false, false, false], green: false, red: false });
    this.effects = new Effects(this.scene);
  }

  initCars() {
    this.playerGroup = new THREE.Group();
    this.scene.add(this.playerGroup);
    this.playerModel = null;

    this.rivalModels = {};
    for (const car of CARS) {
      const model = createCarModel({ paint: "#25c45b", interior: false });
      const group = new THREE.Group();
      group.add(model.root);
      group.visible = false;
      this.scene.add(group);
      this.rivalModels[car.id] = { model, group };
    }

    this.rebuildPlayerCar();
    this.playerGroup.position.set(LANE, 0, START_Z);
  }

  rebuildPlayerCar() {
    const save = this.save;
    const car = carById(save.selected);
    const paint = PAINTS.find((p) => p.id === save.paints[car.id])?.hex || "#ff5a12";
    if (this.playerModel) {
      this.playerGroup.remove(this.playerModel.root);
      this.playerModel.root.traverse((o) => {
        if (o.isMesh && o.geometry) o.geometry.dispose();
      });
      this.playerModel = null;
    }
    this.playerModel = createCarModel({ paint, interior: true });
    this.playerGroup.add(this.playerModel.root);
    this.playerSpec = buildSpec(car, save.upgrades[car.id] || {});
    this.playerSim = new DragSim(this.playerSpec);
  }

  nextRival() {
    const idx = clamp(this.save.careerWins, 0, RIVALS.length - 1);
    const base = RIVALS[idx];
    const extraCycles = Math.max(0, this.save.careerWins - (RIVALS.length - 1));
    const power = RIVAL_POWER[idx] + extraCycles * 0.035;
    const info = { ...base, power, idx };
    info.target = this.rivalTarget(info);
    return info;
  }

  rivalTarget(info) {
    const key = `${info.car}:${JSON.stringify(info.upgrades)}:${info.power.toFixed(3)}`;
    if (this.rivalTargetCache.has(key)) return this.rivalTargetCache.get(key);
    const spec = buildSpec(carById(info.car), info.upgrades);
    spec.torque *= info.power;
    const t = simulateTargetET(spec);
    this.rivalTargetCache.set(key, t);
    return t;
  }

  // ---------- input ----------
  initInput() {
    const bindHold = (el, down, up) => {
      if (!el) return;
      const d = (e) => {
        e.preventDefault();
        try { el.setPointerCapture(e.pointerId); } catch { /* ignore */ }
        down();
      };
      const u = () => up();
      el.addEventListener("pointerdown", d);
      el.addEventListener("pointerup", u);
      el.addEventListener("pointercancel", u);
      el.addEventListener("lostpointercapture", u);
    };

    bindHold(document.getElementById("btn-gas"), () => {
      this.touchGas = true;
    }, () => {
      this.touchGas = false;
    });
    bindHold(document.getElementById("btn-brake"), () => {
      this.touchClutch = true;
    }, () => {
      this.touchClutch = false;
    });

    const shiftUp = document.getElementById("btn-shift-up");
    const shiftDown = document.getElementById("btn-shift-down");
    const pressShift = (dir) => (e) => {
      e.preventDefault();
      this.tryShift(dir);
    };
    shiftUp.addEventListener("pointerdown", pressShift(1));
    shiftDown.addEventListener("pointerdown", pressShift(-1));
    const autoBtn = document.getElementById("btn-auto");
    autoBtn.classList.toggle("on", this.autoShift);
    autoBtn.addEventListener("pointerdown", (e) => {
      e.preventDefault();
      this.autoShift = !this.autoShift;
      autoBtn.classList.toggle("on", this.autoShift);
      this.audio.ui();
    });

    const pad = document.getElementById("wheel-pad");
    const updateWheel = (e) => {
      const r = pad.getBoundingClientRect();
      const dx = (e.clientX - (r.left + r.width / 2)) / (r.width * 0.5);
      this.steerTarget = clamp(dx * 1.15, -1, 1);
    };
    pad.addEventListener("pointerdown", (e) => {
      e.preventDefault();
      this.wheelPointer = e.pointerId;
      try { pad.setPointerCapture(e.pointerId); } catch { /* ignore */ }
      updateWheel(e);
    });
    pad.addEventListener("pointermove", (e) => {
      if (this.wheelPointer === e.pointerId) updateWheel(e);
    });
    const releaseWheel = () => {
      this.wheelPointer = null;
      this.steerTarget = 0;
    };
    pad.addEventListener("pointerup", releaseWheel);
    pad.addEventListener("pointercancel", releaseWheel);
    pad.addEventListener("lostpointercapture", releaseWheel);

    window.addEventListener("keydown", (e) => {
      if (["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", "Space"].includes(e.code)) e.preventDefault();
      this.keys[e.code] = true;
      if (e.repeat) return;
      if (e.code === "KeyC") this.toggleCamera();
      if (e.code === "ShiftLeft" || e.code === "ShiftRight" || e.code === "KeyE") this.tryShift(1);
      if (e.code === "ControlLeft" || e.code === "ControlRight" || e.code === "KeyQ") this.tryShift(-1);
      if (e.code === "Escape") {
        if (this.mode === "race") this.openMenu();
        else if (this.mode === "garage" || this.mode === "help") this.openMenu();
      }
    });
    window.addEventListener("keyup", (e) => {
      this.keys[e.code] = false;
    });
    window.addEventListener("blur", () => {
      this.keys = {};
      this.touchGas = false;
      this.touchClutch = false;
    });
    // evita menu de contexto ao segurar os pedais
    document.querySelectorAll(".pedal, .shift-btn, .wheel-pad").forEach((el) => {
      el.addEventListener("contextmenu", (e) => e.preventDefault());
    });
  }

  tryShift(dir) {
    if (this.mode !== "race" || !this.greenReached || this.playerFinished) return;
    const sim = this.playerSim;
    const ok = dir > 0 ? sim.shiftUp() : sim.shiftDown();
    if (ok) {
      this.audio.pop(0.6);
      this.audio.whoosh();
      this.spawnBackfire();
    }
  }

  playerInput() {
    const k = this.keys;
    let throttle = k.KeyW || k.ArrowUp || this.touchGas ? 1 : 0;
    let clutch = k.KeyS || k.ArrowDown || k.Space || this.touchClutch;
    let brake = 0;
    if (this.playerFinished) {
      throttle = 0;
      clutch = false;
      brake = 1;
    }
    return { throttle, clutch: !!clutch, steer: this.steer, brake };
  }

  playerClutchPressed() {
    const k = this.keys;
    return !!(k.KeyS || k.ArrowDown || k.Space || this.touchClutch);
  }

  // ---------- camera ----------
  toggleCamera() {
    if (this.mode !== "race" && this.mode !== "result") return;
    this.cameraMode = this.cameraMode === "cockpit" ? "chase" : "cockpit";
    this.audio.ui();
  }

  updateCamera(rdt) {
    const cam = this.camera;
    const px = this.playerGroup.position.x;
    const pz = this.playerGroup.position.z;
    const t = this.time;

    const inside = this.mode === "race" && this.cameraMode === "cockpit";
    if (this.playerModel?.windshieldGroup) this.playerModel.windshieldGroup.visible = !inside;
    if (this.playerModel?.windshieldGlass) this.playerModel.windshieldGlass.visible = !inside;
    if (this.playerModel?.sideGlassParts) for (const m of this.playerModel.sideGlassParts) m.visible = !inside;
    if (this.playerModel?.roofParts) for (const m of this.playerModel.roofParts) m.visible = !inside;
    if (this.mode === "menu" || this.mode === "boot" || this.mode === "help") {
      const a = 0.68 + Math.sin(t * 0.11) * 0.22;
      const r = 8.6;
      const target = new THREE.Vector3(px + Math.sin(a) * r, 2.85 + Math.sin(t * 0.19) * 0.12, pz + Math.cos(a) * r);
      cam.position.lerp(target, 1 - Math.exp(-rdt * 2.2));
      cam.lookAt(px, 0.82, pz + 0.15);
      cam.fov += (58 - cam.fov) * Math.min(1, rdt * 2);
      cam.updateProjectionMatrix();
      return;
    }

    if (this.mode === "garage") {
      const a = 1.02 + Math.sin(t * 0.1) * 0.1;
      const r = 7.6;
      const target = new THREE.Vector3(px + Math.sin(a) * r, 2.15, pz + Math.cos(a) * r);
      cam.position.lerp(target, 1 - Math.exp(-rdt * 2.4));
      cam.lookAt(px, 0.78, pz + 0.1);
      cam.fov += (52 - cam.fov) * Math.min(1, rdt * 2);
      cam.updateProjectionMatrix();
      return;
    }

    if (this.mode === "result") {
      const a = 0.9 + t * 0.12;
      const r = 8.6;
      cam.position.lerp(new THREE.Vector3(px + Math.sin(a) * r, 2.6, pz + Math.cos(a) * r), 1 - Math.exp(-rdt * 2));
      cam.lookAt(px, 0.9, pz + 0.4);
      cam.fov += (52 - cam.fov) * Math.min(1, rdt * 2);
      cam.updateProjectionMatrix();
      return;
    }

    // race
    const sim = this.playerSim;
    this.playerGroup.updateMatrixWorld(true);
    const speedN = Math.min(1, sim.speed / 75);
    if (this.cameraMode === "chase") {
      const back = 7.4 + speedN * 1.8;
      const target = this.playerGroup.localToWorld(new THREE.Vector3(0, 2.55 + speedN * 0.2, -back));
      cam.position.lerp(target, 1 - Math.exp(-rdt * 5));
      const look = this.playerGroup.localToWorld(new THREE.Vector3(0, 1.0, 1.6));
      cam.lookAt(look);
      cam.fov += (60 + speedN * 16 - cam.fov) * Math.min(1, rdt * 4);
      cam.updateProjectionMatrix();
      return;
    }

    // cockpit
    const accel = sim.accel;
    const shake = Math.min(0.02, sim.speed * 0.00007 + sim.wheelspin * 0.01);
    const base = this.playerGroup.localToWorld(new THREE.Vector3(-0.37, 1.235, -0.2));
    base.x += Math.sin(t * 53) * shake;
    base.y += Math.sin(t * 61 + 1.3) * shake * 0.7;
    base.z += Math.cos(t * 47) * shake * 0.5;
    cam.position.copy(base);
    const pitch = -0.055 - accel * 0.0035 + Math.sin(t * 44) * shake * 0.35;
    const roll = -this.steer * 0.035 * speedN + Math.sin(t * 37) * shake * 0.3;
    const yaw = this.steer * 0.05 * speedN;
    cam.rotation.set(pitch, Math.PI + yaw, roll, "YXZ");
    const fov = 66 + speedN * 17 + Math.min(4, sim.wheelspin * 4);
    cam.fov += (fov - cam.fov) * Math.min(1, rdt * 4);
    cam.updateProjectionMatrix();
  }

  resize() {
    const w = window.innerWidth;
    const h = window.innerHeight;
    this.camera.aspect = w / h;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(w, h);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, this.quality >= 1 ? 1.75 : 1.0));
    const portrait = h > w * 1.05 && window.matchMedia("(pointer: coarse)").matches;
    document.getElementById("rotate-hint").classList.toggle("hidden", !portrait);
  }

  // ---------- menu / garage ----------
  boot() {
    this.audio.init();
    this.save.sound = this.save.sound !== false;
    this.audio.setMuted(!this.save.sound);
    this.ui.show("menu");
    this.mode = "menu";
    this.positionForShowroom();
    this.ui.updateMenu(this.save, this.nextRival());
    this.audio.ui();
  }

  positionForShowroom() {
    this.playerSim.reset();
    this.playerSim.clutch = true;
    this.playerSim.prevClutch = true;
    this.playerGroup.position.set(LANE, 0, START_Z);
    this.playerGroup.rotation.set(0, 0, 0);
    this.track.setTree({ a: [false, false, false], green: false, red: false });
    this.effects.clear();
    this.ui.showLaunch(false);
    this.ui.showFoul(false);
    for (const key of Object.keys(this.rivalModels)) this.rivalModels[key].group.visible = false;
  }

  openMenu(fromBoot = false) {
    if (!fromBoot && this.mode === "menu") return;
    this.mode = "menu";
    this.phase = "idle";
    this.greenReached = false;
    this.playerFinished = false;
    this.rivalFinished = false;
    this.positionForShowroom();
    if (!fromBoot) this.ui.show("menu");
    this.ui.updateMenu(this.save, this.nextRival());
    this.speedlines.style.opacity = "0";
  }

  openGarage() {
    this.mode = "garage";
    this.positionForShowroom();
    this.ui.show("garage");
    this.ui.renderGarage(this.save);
    this.audio.ui();
  }

  openHelp() {
    this.mode = "help";
    this.ui.show("help");
    this.audio.ui();
  }

  closePanel() {
    this.openMenu();
  }

  selectCar(id) {
    const save = this.save;
    const car = carById(id);
    const owned = save.ownedCars.includes(id);
    if (!owned) {
      if (save.money < car.price) {
        this.uiToast(`Faltam ${money(car.price - save.money)} pra levar o ${car.name}.`);
        return;
      }
      save.money -= car.price;
      save.ownedCars.push(id);
      save.paints[id] = PAINTS[CARS.indexOf(car) % PAINTS.length].id;
      if (!save.upgrades[id]) save.upgrades[id] = { engine: 0, tires: 0, weight: 0, gearbox: 0 };
      save.selected = id;
      persist(save);
      this.rebuildPlayerCar();
      this.ui.renderGarage(save);
      this.uiToast(`${car.name} comprado!`);
      this.audio.ui();
      return;
    }
    if (save.selected === id) return;
    save.selected = id;
    persist(save);
    this.rebuildPlayerCar();
    this.ui.renderGarage(save);
    this.ui.updateMenu(save, this.nextRival());
    this.audio.ui();
  }

  setPaint(carId, paintId) {
    this.save.paints[carId] = paintId;
    persist(this.save);
    if (carId === this.save.selected && this.playerModel) {
      const p = PAINTS.find((x) => x.id === paintId);
      if (p) this.playerModel.setPaint(p.hex);
    }
    this.ui.renderGarage(this.save);
    const p = PAINTS.find((x) => x.id === paintId);
    this.uiToast(`Pintura: ${p ? p.name : paintId}`);
    this.audio.ui();
  }

  buyUpgrade(id) {
    const save = this.save;
    const carId = save.selected;
    const upg = UPGRADES.find((u) => u.id === id);
    if (!upg) return;
    const ups = save.upgrades[carId] || (save.upgrades[carId] = { engine: 0, tires: 0, weight: 0, gearbox: 0 });
    const lvl = ups[id] | 0;
    if (lvl >= upg.max) return;
    const cost = upgradeCost(upg, lvl);
    if (save.money < cost) {
      this.uiToast(`Sem caixa. Faltam ${money(cost - save.money)}.`);
      return;
    }
    save.money -= cost;
    ups[id] = lvl + 1;
    persist(save);
    this.playerSpec = buildSpec(carById(carId), ups);
    this.ui.renderGarage(save);
    this.ui.updateMenu(save, this.nextRival());
    this.uiToast(`${upg.name} nível ${lvl + 1} instalado.`);
    this.audio.ui();
  }

  toggleSound() {
    this.save.sound = !this.save.sound;
    persist(this.save);
    if (this.save.sound) this.audio.init();
    this.audio.setMuted(!this.save.sound);
    document.getElementById("btn-sound").textContent = this.save.sound ? "🔊" : "🔇";
  }

  uiToast(text) {
    const el = document.getElementById("ui-toast");
    el.textContent = text;
    el.classList.add("show");
    clearTimeout(this._uiToastTimer);
    this._uiToastTimer = setTimeout(() => el.classList.remove("show"), 1900);
  }

  // ---------- corrida ----------
  startRace() {
    this.audio.init();
    this.audio.ui();
    this.mode = "race";
    this.phase = "staging";
    this.cameraMode = "cockpit";
    this.raceClock = 0;
    this.simAcc = 0;
    this.greenReached = false;
    this.greenClock = null;
    this.foul = false;
    this.playerRunStart = null;
    this.playerReaction = null;
    this.playerFinished = false;
    this.rivalFinished = false;
    this.playerET = null;
    this.playerTrap = 0;
    this.rivalET = null;
    this.rivalTrap = 0;
    this.endScheduled = null;
    this.launchPromptVisible = false;
    this.lastClutch = false;
    this.smokeAcc = 0;
    this.treeBeeped = [false, false, false];
    this.greenBeeped = false;
    this.treeStart = 1.25 + Math.random() * 0.65;
    this.amberTimes = [this.treeStart, this.treeStart + 0.6, this.treeStart + 1.2];
    this.greenAt = this.treeStart + 1.72;

    const info = this.nextRival();
    this.rivalInfo = info;
    this.rivalReaction = 0.15 + Math.random() * 0.13 + Math.max(0, (1 - info.idx / 8)) * 0.05;

    // specs e sims
    this.playerSpec = buildSpec(carById(this.save.selected), this.save.upgrades[this.save.selected] || {});
    this.playerSim = new DragSim(this.playerSpec);
    const rspec = buildSpec(carById(info.car), info.upgrades);
    rspec.torque *= info.power;
    this.rivalSpec = rspec;
    this.rivalSim = new DragSim(rspec);

    // modelos
    this.playerSim.reset();
    this.playerSim.clutch = true;
    this.playerSim.prevClutch = true;
    this.playerGroup.position.set(LANE, 0, START_Z);
    this.playerModel.setPaint(PAINTS.find((p) => p.id === (this.save.paints[this.save.selected] || "laranja"))?.hex || "#ff5a12");
    const rivalEntry = this.rivalModels[info.car];
    for (const key of Object.keys(this.rivalModels)) this.rivalModels[key].group.visible = key === info.car;
    rivalEntry.model.setPaint(RIVAL_PAINTS[info.idx % RIVAL_PAINTS.length]);
    rivalEntry.group.visible = true;
    rivalEntry.group.position.set(-LANE, 0, START_Z);

    this.track.setTree({ a: [false, false, false], green: false, red: false });
    this.effects.clear();
    this.ui.showHUD(info.name);
    this.ui.setPhase("PREPARE-SE");
    this.ui.setLaunchText("A LUZ VERDE ACENDEU", "ACELERA!");
    this.ui.showLaunch(false);
    this.ui.showFoul(false);
    this.speedlines.style.opacity = "0";
    this.steer = 0;
    this.steerTarget = 0;
  }

  updateTree() {
    if (!this.greenReached) {
      const t = this.raceClock;
      const ambers = this.amberTimes.map((at) => t >= at);
      this.track.setTree({ a: ambers, green: false, red: this.foul });
      this.ui.setTree(ambers, false, this.foul);
      for (let i = 0; i < 3; i++) {
        if (!this.treeBeeped[i] && t >= this.amberTimes[i]) {
          this.treeBeeped[i] = true;
          if (!this.foul) this.audio.beep(620 + i * 45, 0.08, 0.12, "square");
        }
      }
      if (t >= this.treeStart && this.phase === "staging") {
        this.phase = "tree";
        this.ui.setPhase("LUZES ACESAS");
      }
      if (t >= this.greenAt) this.onGreen();
    } else {
      this.track.setTree({ a: [false, false, false], green: !this.foul, red: this.foul });
      this.ui.setTree([false, false, false], !this.foul, this.foul);
    }
  }

  onGreen() {
    if (this.greenReached) return;
    this.greenReached = true;
    this.greenClock = this.raceClock;
    this.phase = "racing";
    this.ui.setPhase(this.foul ? "QUEIMOU" : "VAI!");
    if (!this.foul) {
      this.audio.beep(980, 0.25, 0.18, "square");
      this.ui.showLaunch(true);
      this.ui.setLaunchText("SOLTE A EMBREAGEM E PISA", "VAI!");
      this.ui.toast("VERDE! SOLTA A EMBREAGEM", 900);
    }
  }

  registerFoul() {
    this.foul = true;
    this.ui.showFoul(true);
    this.ui.showLaunch(false);
    this.ui.setPhase("QUEIMOU");
    this.audio.foul();
  }

  stepRace(h) {
    if (this.mode !== "race") return;
    if (this.phase === "idle") return;

    const pin = !this.greenReached;
    const pInput = this.playerInput();
    const clutchNow = this.playerClutchPressed();

    if (!this.greenReached && !this.foul && this.lastClutch && !clutchNow && pInput.throttle > 0.15) {
      this.registerFoul();
    }
    this.lastClutch = clutchNow;

    this.playerSim.step(h, pInput, pin);
    if (this.autoShift && this.greenReached && !this.playerFinished) {
      const before = this.playerSim.gear;
      this.playerSim.autoShift();
      if (this.playerSim.gear !== before) {
        this.audio.pop(0.6);
        this.audio.whoosh();
        this.spawnBackfire();
      }
    }

    // rival
    const rSim = this.rivalSim;
    const locked = !this.greenReached;
    const rThrottle = rSim.engineRpm < this.rivalSpec.launchRpm ? 1 : 0.15;
    let rInput;
    if (locked) {
      rInput = { throttle: rThrottle, clutch: true, steer: 0, brake: 0 };
    } else if (this.raceClock < this.greenClock + this.rivalReaction) {
      rInput = { throttle: rThrottle, clutch: true, steer: 0, brake: 0 };
    } else {
      const thr = rSim.wheelspin > 0.6 ? 0.65 : 1;
      rInput = { throttle: thr, clutch: false, steer: 0, brake: this.rivalFinished ? 1 : 0 };
    }
    rSim.step(h, rInput, locked);
    if (this.greenReached && !this.rivalFinished && !locked) {
      const before = rSim.gear;
      rSim.autoShift();
      if (rSim.gear !== before) this.spawnBackfire(true);
    }

    // chegadas
    if (!this.playerFinished && this.playerSim.distance >= FINISH) {
      this.playerFinished = true;
      this.playerFinishClock = this.raceClock;
      this.playerET = this.playerRunStart != null ? this.raceClock - this.playerRunStart : null;
      this.playerTrap = this.playerSim.speedKmh;
      this.ui.toast(`CHEGOU! ${this.playerET ? this.playerET.toFixed(3) + "s" : ""}`, 1600);
      this.audio.pop(1);
    }
    if (!this.rivalFinished && rSim.distance >= FINISH) {
      this.rivalFinished = true;
      this.rivalFinishClock = this.raceClock;
      this.rivalET = this.raceClock - (this.greenClock + this.rivalReaction);
      this.rivalTrap = rSim.speedKmh;
    }
  }

  spawnBackfire(rival = false) {
    const model = rival ? this.rivalModels[this.rivalInfo?.car]?.model : this.playerModel;
    if (!model) return;
    const pos = new THREE.Vector3();
    for (const tip of model.exhaustTips) {
      tip.getWorldPosition(pos);
      this.effects.emitBackfire(pos, new THREE.Vector3(0, 0.2, -1));
    }
  }

  updateRace(rdt) {
    this.raceClock += rdt;
    this.updateTree();

    if (this.greenReached && !this.playerRunStart && this.playerSim.speed > 0.25) {
      this.playerRunStart = this.raceClock;
      this.playerReaction = this.raceClock - this.greenClock;
      this.launchPromptVisible = false;
      this.ui.showLaunch(false);
      if (!this.foul) {
        const rt = this.playerReaction;
        const label = rt < 0.16 ? "LARGADA PERFEITA" : rt < 0.34 ? "BOA LARGADA" : "SAIU ATRASADO";
        this.ui.toast(`${label} · ${rt.toFixed(3)}s`, 1300);
        if (rt < 0.16) this.audio.beep(1200, 0.12, 0.1, "triangle");
      }
    }

    // fim de corrida
    if (this.playerFinished && this.rivalFinished && this.endScheduled == null) {
      this.endScheduled = this.raceClock;
    }
    if (this.playerFinished && !this.rivalFinished && this.raceClock - this.playerFinishClock > 5 && this.endScheduled == null) {
      this.endScheduled = this.raceClock;
    }
    if (!this.playerFinished && this.raceClock - this.greenClock > 20 && this.endScheduled == null) {
      this.endScheduled = this.raceClock;
    }
    if (this.endScheduled != null && this.raceClock - this.endScheduled > 1.3) {
      this.finishRace();
    }
  }

  finishRace() {
    if (this.mode !== "race") return;
    this.mode = "result";
    this.cameraMode = "chase";
    const totalPlayer = this.playerFinished ? this.playerFinishClock - this.greenClock : Infinity;
    const totalRival = this.rivalFinished ? this.rivalFinishClock - this.greenClock : Infinity;
    const dnf = !this.playerFinished;
    const win = !this.foul && !dnf && totalPlayer < totalRival;
    const margin = win
      ? Math.max(0, (this.rivalFinished ? totalRival : totalPlayer + 1) - totalPlayer)
      : this.rivalFinished ? Math.abs(totalPlayer - totalRival) : 0;

    const info = this.rivalInfo;
    let prize = 0;
    if (!this.foul && !dnf) prize = win ? info.reward : Math.round(info.reward * 0.2);
    const prevBest = this.save.bestET;
    const record = !this.foul && !dnf && this.playerET != null && (prevBest == null || this.playerET < prevBest);

    if (!this.foul && !dnf) {
      this.save.races++;
      if (win) {
        this.save.wins++;
        this.save.careerWins++;
      } else {
        this.save.losses++;
      }
      if (this.playerET != null && (this.save.bestET == null || this.playerET < this.save.bestET)) this.save.bestET = this.playerET;
      if (this.playerTrap && (this.save.bestTrap == null || this.playerTrap > this.save.bestTrap)) this.save.bestTrap = this.playerTrap;
    } else {
      this.save.races++;
      this.save.losses++;
    }
    const champion = win && this.save.careerWins === RIVALS.length;
    if (champion) prize += 5000;
    this.save.money += prize;
    persist(this.save);

    const playedChampion = win && this.save.careerWins >= RIVALS.length;
    this.ui.showResults({
      win,
      foul: this.foul,
      dnf,
      et: this.playerET,
      reaction: this.playerReaction,
      trap: this.playerTrap,
      rivalET: this.rivalET,
      rivalName: info.name,
      margin,
      prize,
      record,
      kicker: champion ? "CAMPEÃO DA TEMPORADA" : this.foul ? "DESCLASSIFICADO" : "RESULTADO OFICIAL",
      sub: champion
        ? "Você limpou a fila inteira. O asfalto agora tem dono — e é você."
        : playedChampion && win
          ? "O rei caiu de novo. A fila vai ficar brava e voltar mais forte."
          : this.foul
            ? "Você soltou a embreagem antes do verde. O fiscal não perdoou."
            : undefined,
    });
    if (this.foul) this.audio.foul();
    else if (win) this.audio.win();
    else this.audio.lose();
    this.speedlines.style.opacity = "0";
    this.ui.showFoul(false);
  }

  // ---------- loop ----------
  updateCarVisuals(rdt) {
    const p = this.playerModel;
    if (p) {
      const sim = this.playerSim;
      this.playerGroup.position.set(LANE + sim.lateral, 0, START_Z + sim.distance);
      const spin = (sim.speed / this.playerSpec.wheelRadius) * rdt;
      for (const w of p.wheels) {
        w.spin.rotation.x -= spin;
        w.steerGroup.rotation.y = w.front ? this.steer * 0.42 : 0;
      }
      if (p.steeringWheel) p.steeringWheel.rotation.z = this.steer * 1.0;
      if (p.needles.tach) p.needles.tach.rotation.z = 2.25 - sim.rpmNorm * 4.5;
      if (p.needles.speed) p.needles.speed.rotation.z = 2.25 - Math.min(1, sim.speedKmh / 240) * 4.5;

      // fumaça de pneu
      if (sim.wheelspin > 0.38 && Math.random() < sim.wheelspin) {
        const pos = new THREE.Vector3();
        for (const w of p.wheels) {
          if (w.front) continue;
          w.group.getWorldPosition(pos);
          pos.y = 0.06;
          this.effects.emitSmoke(pos, sim.wheelspin);
        }
      }
    }

    if (this.rivalInfo) {
      const entry = this.rivalModels[this.rivalInfo.car];
      if (entry && entry.group.visible) {
        const rsim = this.rivalSim;
        entry.group.position.set(-LANE + rsim.lateral, 0, START_Z + rsim.distance);
        const spin = (rsim.speed / this.rivalSpec.wheelRadius) * rdt;
        for (const w of entry.model.wheels) w.spin.rotation.x -= spin;
        if (rsim.wheelspin > 0.4 && Math.random() < rsim.wheelspin * 0.7) {
          const pos = new THREE.Vector3();
          for (const w of entry.model.wheels) {
            if (w.front) continue;
            w.group.getWorldPosition(pos);
            pos.y = 0.05;
            this.effects.emitSmoke(pos, rsim.wheelspin * 0.8);
          }
        }
      }
    }

    // luz de freio
    const braking = this.mode === "race" && (this.playerFinished || this.playerSim.brake > 0.1);
    // material compartilhado: acende as lanternas de todos os carros
    if (p) {
      p.root.traverse((o) => {
        if (o.isMesh && o.material && o.material.emissive && o.material.emissive.r > 0.5 && o.material.emissive.g < 0.2) {
          o.material.emissiveIntensity = braking ? 3.2 : 0.9;
        }
      });
    }
  }

  updateHud() {
    const sim = this.playerSim;
    if (!sim) return;
    this.ui.setSpeed(sim.speedKmh);
    let hint = "SEGURE O GÁS";
    let phase = this.ui.el.phase.textContent;
    if (this.mode === "race") {
      if (!this.greenReached) {
        hint = "EMBREIE + ACELERE";
        this.ui.setPhase(this.foul ? "QUEIMOU" : this.phase === "tree" ? "LUZES ACESAS" : "PREPARE-SE");
      } else if (this.playerFinished) {
        hint = "FIM";
        this.ui.setPhase("FIM");
      } else if (!this.playerRunStart) {
        hint = "SOLTE A EMBREAGEM";
        this.ui.setPhase(this.foul ? "QUEIMOU" : "VAI!");
        const showPrompt = !this.foul && this.playerSim.speed < 0.25;
        this.ui.showLaunch(showPrompt);
        if (showPrompt) {
          this.ui.setLaunchText("SOLTE A EMBREAGEM E PISA", "VAI!");
        }
      } else {
        hint = sim.wheelspin > 0.66 ? "PNEU CANTANDO" : this.autoShift ? "CÂMBIO AUTO" : sim.rpmNorm > 0.82 ? "▲ TROCA A MARCHA" : "SEGURE O GÁS";
        this.ui.setPhase("CORRIDA");
      }
    }
    this.ui.setGear(sim.gear, hint, sim.rpmNorm);
    this.ui.setTimer(this.playerRunStart ? (this.playerFinished ? this.playerET : this.raceClock - this.playerRunStart) : 0);
    this.ui.setDist(sim.distance);
    if (this.rivalSim) this.ui.setGap(sim.distance, this.rivalSim.distance, FINISH);
    this.ui.setPedals(this.touchGas || this.keys.KeyW || this.keys.ArrowUp, this.playerClutchPressed());
    this.ui.setWheel(this.steer);

    const kmh = sim.speedKmh;
    const op = this.mode === "race" ? clamp((kmh - 75) / 150, 0, 0.55) : 0;
    this.speedlines.style.opacity = String(op);
  }

  frame(now) {
    const rdt = Math.min(0.05, Math.max(0.0001, (now - this.last) / 1000));
    this.last = now;
    this.time += rdt;

    // input de direção suave
    const keyboardSteer =
      (this.keys.ArrowRight || this.keys.KeyD ? 1 : 0) + (this.keys.ArrowLeft || this.keys.KeyA ? -1 : 0);
    const target = keyboardSteer !== 0 ? keyboardSteer : this.steerTarget;
    this.steer += (target - this.steer) * Math.min(1, rdt * 9);
    if (Math.abs(this.steer) < 0.002) this.steer = 0;

    if (this.mode === "race") {
      this.updateRace(rdt);
      this.simAcc += rdt;
      let steps = 0;
      while (this.simAcc >= dt && steps < 10) {
        this.stepRace(dt);
        this.simAcc -= dt;
        steps++;
      }
    }

    this.updateCarVisuals(rdt);
    this.updateCamera(rdt);
    this.effects.update(rdt);
    this.track.update(this.time);

    if (this.mode === "race") this.updateHud();
    else if (this.mode === "result") {
      this.ui.setSpeed(this.playerSim.speedKmh);
      this.ui.setWheel(this.steer);
    }

    const focused = this.moonTarget.position;
    focused.set(this.playerGroup.position.x, 0, this.playerGroup.position.z);
    this.moon.position.set(focused.x + 28, 60, focused.z - 18);
    this.moonTarget.updateMatrixWorld();

    const audioState = {
      rpm: this.playerSim ? this.playerSim.engineRpm : 850,
      rpmNorm: this.playerSim ? this.playerSim.rpmNorm : 0,
      throttle: this.mode === "race" ? this.playerInput().throttle : 0,
      speed: this.playerSim ? this.playerSim.speed : 0,
      slip: this.playerSim ? this.playerSim.wheelspin : 0,
      racing: this.mode === "race",
    };
    this.audio.update(audioState);

    this.renderer.render(this.scene, this.camera);

    // perf simples
    this.frameTimes.push(rdt);
    if (this.frameTimes.length > 90) this.frameTimes.shift();
    if (this.frameTimes.length === 90 && this.time > 4) {
      const avg = this.frameTimes.reduce((a, b) => a + b, 0) / this.frameTimes.length;
      if (!location.search.includes("hq") && avg > 0.045 && this.quality > 0.5) {
        this.quality = 0.5;
        this.renderer.setPixelRatio(1);
        this.frameTimes.length = 0;
      }
    }

    requestAnimationFrame((t) => this.frame(t));
  }
}
