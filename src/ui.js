import { CARS, UPGRADES, upgradeCost, estimatePower, buildSpec, PAINTS, carById } from "./data.js";
import { money, fmtTime } from "./save.js";

const $ = (id) => document.getElementById(id);

export class UI {
  constructor(game) {
    this.game = game;
    this.el = {
      boot: $("boot"),
      menu: $("menu"),
      garage: $("garage"),
      help: $("help"),
      hud: $("hud"),
      results: $("results"),
      money: $("menu-money"),
      money2: $("menu-best"),
      wins: $("menu-wins"),
      best2: $("menu-best-2"),
      record: $("menu-record"),
      carName: $("menu-car-name"),
      carClass: $("menu-car-class"),
      carStats: $("menu-car-stats"),
      rival: $("menu-rival"),
      rivalLine: $("menu-rival-line"),
      rivalTime: $("menu-rival-time"),
      garageMoney: $("garage-money"),
      carList: $("car-list"),
      paintList: $("paint-list"),
      upgradeList: $("upgrade-list"),
      tree: [$("t1"), $("t2"), $("t3")],
      treeGreen: $("tg"),
      treeRed: $("tr"),
      timer: $("hud-timer"),
      phase: $("hud-phase"),
      speed: $("hud-speed"),
      gear: $("hud-gear"),
      gearHint: $("gear-hint"),
      rpm: $("rpm-fill"),
      dist: $("hud-dist"),
      gapYou: $("gap-you-car"),
      gapRival: $("gap-rival-car"),
      launch: $("launch-prompt"),
      launchBig: document.querySelector(".lp-big"),
      launchLine: document.querySelector(".lp-line"),
      toast: $("hud-toast"),
      foul: $("foul-banner"),
      rivalName: $("hud-rival-name"),
      resTitle: $("res-title"),
      resKicker: $("res-kicker"),
      resSub: $("res-sub"),
      resET: $("res-et"),
      resReaction: $("res-reaction"),
      resSpeed: $("res-speed"),
      resRivalET: $("res-rival-et"),
      resMoney: $("res-money"),
      resRecord: $("res-record"),
      wheelPad: $("wheel-pad"),
      wheelKnob: $("wheel-knob"),
      gas: $("btn-gas"),
      clutch: $("btn-brake"),
      shiftUp: $("btn-shift-up"),
      shiftDown: $("btn-shift-down"),
      sound: $("btn-sound"),
    };
    this.toastTimer = 0;
    this._bindStatic();
  }

  _bindStatic() {
    const g = this.game;
    $("btn-boot").addEventListener("click", () => g.boot());
    $("btn-race").addEventListener("click", () => g.startRace());
    $("btn-garage").addEventListener("click", () => g.openGarage());
    $("btn-garage-2").addEventListener("click", () => g.openGarage());
    $("btn-help").addEventListener("click", () => g.openHelp());
    $("btn-res-again").addEventListener("click", () => g.startRace());
    $("btn-res-garage").addEventListener("click", () => g.openGarage());
    $("btn-res-menu").addEventListener("click", () => g.openMenu());
    $("btn-cam").addEventListener("click", () => g.toggleCamera());
    this.el.sound.addEventListener("click", () => g.toggleSound());
    for (const btn of document.querySelectorAll("[data-close]")) {
      btn.addEventListener("click", () => g.closePanel(btn.dataset.close));
    }
  }

  show(name) {
    const screens = ["boot", "menu", "garage", "help", "results"];
    for (const s of screens) this.el[s].classList.toggle("hidden", s !== name);
    this.el.hud.classList.toggle("hidden", name !== "race");
  }

  updateMenu(save, rival) {
    const car = carById(save.selected);
    const up = save.upgrades[car.id] || {};
    const power = estimatePower(car, up);
    this.el.money.textContent = money(save.money);
    this.el.wins.textContent = save.wins;
    this.el.carName.textContent = car.name;
    this.el.carClass.textContent = car.klass;
    this.el.carStats.innerHTML = `
      <div><b>${power}</b><small>CAVALOS</small></div>
      <div><b>${Math.round(buildSpec(car, up).mass)}</b><small>KG</small></div>
      <div><b>${save.bestET ? fmtTime(save.bestET).replace("s", "") : "—"}</b><small>MELHOR ET</small></div>`;
    this.el.best2.textContent = save.bestET ? fmtTime(save.bestET) : "—";
    this.el.record.textContent = save.races ? `${save.races} corridas · ${save.wins} vitórias` : "sem registro";
    this.el.rival.textContent = rival.name;
    this.el.rivalLine.textContent = rival.quote;
    this.el.rivalTime.textContent = `ET alvo ${rival.target.toFixed(2)}s`;
    this.el.sound.textContent = save.sound ? "🔊" : "🔇";
  }

  renderGarage(save) {
    const g = this.game;
    this.el.garageMoney.textContent = Math.round(save.money).toLocaleString("pt-BR");
    // carros
    this.el.carList.innerHTML = "";
    for (const car of CARS) {
      const owned = save.ownedCars.includes(car.id);
      const active = save.selected === car.id;
      const up = save.upgrades[car.id] || {};
      const power = estimatePower(car, up);
      const row = document.createElement("div");
      row.className = `car-row${active ? " active" : ""}${owned ? "" : " locked"}`;
      row.innerHTML = `
        <div>
          <h4>${car.name} <span class="tag">${car.klass}</span></h4>
          <div class="spec">${power} cv · ${Math.round(buildSpec(car, up).mass)} kg · ${car.tagline}</div>
        </div>
        <div class="car-action ${active ? "equipped" : owned ? "" : "buy"}">
          ${active ? "EM USO" : owned ? "USAR" : money(car.price)}
        </div>`;
      row.addEventListener("click", () => g.selectCar(car.id));
      this.el.carList.appendChild(row);
    }
    // pintura
    this.el.paintList.innerHTML = "";
    const car = carById(save.selected);
    const paintId = save.paints[car.id] || "laranja";
    for (const p of PAINTS) {
      const sw = document.createElement("div");
      sw.className = `paint-swatch${paintId === p.id ? " active" : ""}`;
      sw.style.background = `radial-gradient(circle at 35% 28%, ${lighten(p.hex, 0.35)}, ${p.hex} 58%, ${darken(p.hex, 0.45)})`;
      sw.title = p.name;
      sw.addEventListener("click", () => g.setPaint(car.id, p.id));
      this.el.paintList.appendChild(sw);
    }
    // upgrades
    this.el.upgradeList.innerHTML = "";
    const ups = save.upgrades[car.id] || {};
    for (const upg of UPGRADES) {
      const lvl = ups[upg.id] | 0;
      const max = lvl >= upg.max;
      const cost = upgradeCost(upg, lvl);
      const row = document.createElement("div");
      row.className = "upgrade-row";
      const pips = Array.from({ length: upg.max }, (_, i) => `<i class="${i < lvl ? "on" : ""}"></i>`).join("");
      row.innerHTML = `
        <div class="upgrade-head"><h4>${upg.name}</h4><span class="lvl">NÍVEL ${lvl}/${upg.max}</span></div>
        <div class="pips">${pips}</div>
        <div class="upgrade-foot">
          <div class="upgrade-desc">${upg.desc}<br>${upg.effect}</div>
          <button class="upgrade-btn ${max ? "max" : ""}" ${max ? "disabled" : ""}>
            ${max ? "NO MÁXIMO" : money(cost)}
          </button>
        </div>`;
      if (!max) {
        row.querySelector("button").addEventListener("click", () => g.buyUpgrade(upg.id));
      }
      this.el.upgradeList.appendChild(row);
    }
  }

  showHUD(rivalName) {
    this.show("race");
    this.el.rivalName.textContent = rivalName;
    this.el.foul.classList.add("hidden");
    this.el.launch.classList.add("hidden");
    this.setTree([false, false, false], false, false);
    this.setTimer(0);
    this.setSpeed(0);
    this.setGear(1, "EMBREIE + ACELERE", 0);
    this.setGap(0, 0, 402.336);
    this.setPhase("PREPARE-SE");
    this.toast("");
  }

  setTree(ambers, green, red) {
    this.el.tree.forEach((t, i) => t.classList.toggle("on", !!ambers[i]));
    this.el.treeGreen.classList.toggle("on", !!green);
    this.el.treeRed.classList.toggle("on", !!red);
  }

  setPhase(text) {
    this.el.phase.textContent = text;
  }

  setTimer(t) {
    this.el.timer.textContent = t >= 0 ? t.toFixed(3) : "0.000";
  }

  setSpeed(kmh) {
    this.el.speed.textContent = Math.max(0, Math.round(kmh));
  }

  setGear(gear, hint, rpmNorm) {
    this.el.gear.textContent = gear;
    if (hint != null) this.el.gearHint.textContent = hint;
    this.el.rpm.style.width = `${Math.min(112, rpmNorm * 100)}%`;
  }

  setDist(d) {
    this.el.dist.textContent = Math.max(0, Math.round(402.336 - d));
  }

  setGap(playerDist, rivalDist, finish) {
    const p = Math.max(0, Math.min(1, playerDist / finish));
    const r = Math.max(0, Math.min(1, rivalDist / finish));
    this.el.gapYou.style.left = `${p * 92}%`;
    this.el.gapRival.style.left = `${r * 92}%`;
  }

  showLaunch(show) {
    this.el.launch.classList.toggle("hidden", !show);
  }

  setLaunchText(line, big) {
    this.el.launchLine.textContent = line;
    this.el.launchBig.textContent = big;
  }

  toast(text, ms = 1100) {
    this.el.toast.textContent = text;
    this.el.toast.classList.toggle("show", !!text);
    clearTimeout(this.toastTimer);
    if (text) this.toastTimer = setTimeout(() => this.el.toast.classList.remove("show"), ms);
  }

  showFoul(show) {
    this.el.foul.classList.toggle("hidden", !show);
  }

  setWheel(steer) {
    this.el.wheelPad.style.setProperty("--rot", `${steer * 90}deg`);
    this.el.wheelKnob.style.transform = `translate(${steer * 36}px, 0)`;
  }

  setPedals(throttle, clutch) {
    this.el.gas.classList.toggle("active", throttle > 0.1);
    this.el.clutch.classList.toggle("active", !!clutch);
  }

  showResults(r) {
    this.show("results");
    this.el.results.classList.toggle("lose", !r.win);
    this.el.resTitle.textContent = r.foul ? "QUEIMOU" : r.win ? "VITÓRIA" : "DERROTA";
    this.el.resKicker.textContent = r.kicker || (r.foul ? "DESCLASSIFICADO" : "RESULTADO OFICIAL");
    this.el.resSub.textContent = r.sub || (r.foul
      ? "Você soltou a embreagem antes do verde. O fiscal não perdoou."
      : r.win
        ? `Você cruzou ${r.margin > 0 ? r.margin.toFixed(3) + "s" : "na frente"} antes do rival.`
        : r.dnf
          ? "O carro não cruzou a linha. Ajuste o setup e tente de novo."
          : `Faltaram ${r.margin.toFixed(3)}s para pegar o ${r.rivalName}.`);
    this.el.resET.textContent = r.et ? r.et.toFixed(3) : "DNF";
    this.el.resReaction.textContent = r.reaction != null ? r.reaction.toFixed(3) + "s" : "—";
    this.el.resSpeed.textContent = Math.round(r.trap || 0);
    this.el.resRivalET.textContent = r.rivalET ? r.rivalET.toFixed(3) : "DNF";
    this.el.resMoney.textContent = (r.prize >= 0 ? "+ " : "− ") + money(Math.abs(r.prize));
    this.el.resMoney.style.color = r.prize >= 0 ? "var(--green)" : "var(--red)";
    this.el.resRecord.classList.toggle("hidden", !r.record);
  }
}

function clamp255(v) {
  return Math.max(0, Math.min(255, Math.round(v)));
}
function lighten(hex, amt) {
  const c = hex.replace("#", "");
  const r = clamp255(parseInt(c.slice(0, 2), 16) + 255 * amt);
  const g = clamp255(parseInt(c.slice(2, 4), 16) + 255 * amt);
  const b = clamp255(parseInt(c.slice(4, 6), 16) + 255 * amt);
  return `rgb(${r},${g},${b})`;
}
function darken(hex, amt) {
  const c = hex.replace("#", "");
  const r = clamp255(parseInt(c.slice(0, 2), 16) * (1 - amt));
  const g = clamp255(parseInt(c.slice(2, 4), 16) * (1 - amt));
  const b = clamp255(parseInt(c.slice(4, 6), 16) * (1 - amt));
  return `rgb(${r},${g},${b})`;
}
