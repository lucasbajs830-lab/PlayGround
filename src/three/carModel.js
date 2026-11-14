import * as THREE from "three";
import { RoundedBoxGeometry } from "three/addons/geometries/RoundedBoxGeometry.js";
import { glowTexture } from "./textures.js";

const PAINT_CACHE = new Map();

function paintMaterial(hex) {
  return new THREE.MeshStandardMaterial({
    color: new THREE.Color(hex),
    metalness: 0.22,
    roughness: 0.42,
    envMapIntensity: 0.55,
  });
}

const mats = {
  dark: new THREE.MeshStandardMaterial({ color: 0x0b0b0f, roughness: 0.7, metalness: 0.3 }),
  trim: new THREE.MeshStandardMaterial({ color: 0x17171d, roughness: 0.45, metalness: 0.7 }),
  chrome: new THREE.MeshStandardMaterial({ color: 0xc9ccd6, roughness: 0.18, metalness: 1 }),
  tire: new THREE.MeshStandardMaterial({ color: 0x0a0a0c, roughness: 0.95, metalness: 0 }),
  rim: new THREE.MeshStandardMaterial({ color: 0x70747f, roughness: 0.34, metalness: 0.92 }),
  rimDark: new THREE.MeshStandardMaterial({ color: 0x363a44, roughness: 0.4, metalness: 0.8 }),
  glass: new THREE.MeshPhysicalMaterial({
    color: 0x1c3042,
    metalness: 0.45,
    roughness: 0.05,
    transparent: true,
    opacity: 0.74,
    side: THREE.DoubleSide,
    depthWrite: false,
    envMapIntensity: 2.4,
  }),
  interior: new THREE.MeshStandardMaterial({ color: 0x07070a, roughness: 1, metalness: 0, envMapIntensity: 0.15 }),
  seat: new THREE.MeshStandardMaterial({ color: 0x1b1416, roughness: 0.95, envMapIntensity: 0.2 }),
  seatRed: new THREE.MeshStandardMaterial({ color: 0x4a1018, roughness: 0.9, envMapIntensity: 0.2 }),
  headlight: new THREE.MeshStandardMaterial({ color: 0xfff6d8, emissive: 0xfff0c0, emissiveIntensity: 4, roughness: 0.2 }),
  taillight: new THREE.MeshStandardMaterial({ color: 0x420008, emissive: 0xff1020, emissiveIntensity: 0.9, roughness: 0.25 }),
  amber: new THREE.MeshStandardMaterial({ color: 0x3a1b00, emissive: 0xff8a00, emissiveIntensity: 1.2, roughness: 0.3 }),
};

function mesh(geo, mat, parent, cast = true) {
  const m = new THREE.Mesh(geo, mat);
  m.castShadow = cast;
  m.receiveShadow = true;
  parent.add(m);
  return m;
}

function wheel(x, z, side, front) {
  const g = new THREE.Group();
  g.position.set(x, 0.345, z);
  const steerGroup = new THREE.Group();
  const spin = new THREE.Group();
  g.add(steerGroup);
  steerGroup.add(spin);

  const r = 0.345;
  const width = 0.29;
  const tireGeo = new THREE.CylinderGeometry(r, r, width, 28, 1);
  tireGeo.rotateZ(Math.PI / 2);
  mesh(tireGeo, mats.tire, spin);

  // sulcos
  const groove = new THREE.MeshStandardMaterial({ color: 0x1d1d22, roughness: 0.9 });
  for (let i = -2; i <= 2; i++) {
    const ring = new THREE.Mesh(new THREE.TorusGeometry(r * 0.9, 0.012, 6, 36), groove);
    ring.rotation.y = Math.PI / 2;
    ring.position.x = i * 0.055;
    spin.add(ring);
  }

  const rimGeo = new THREE.CylinderGeometry(r * 0.63, r * 0.63, width + 0.02, 24);
  rimGeo.rotateZ(Math.PI / 2);
  mesh(rimGeo, mats.rimDark, spin, false);
  const face = new THREE.CylinderGeometry(r * 0.64, r * 0.64, 0.03, 24);
  face.rotateZ(Math.PI / 2);
  const faceMesh = mesh(face, mats.rim, spin, false);
  faceMesh.position.x = side * (width / 2 + 0.005);

  // raios
  const spokeMat = mats.rim;
  for (let i = 0; i < 5; i++) {
    const a = (i / 5) * Math.PI * 2;
    const sp = new THREE.Mesh(new THREE.BoxGeometry(0.035, r * 1.1, 0.075), spokeMat);
    sp.position.set(side * (width / 2 + 0.03), Math.sin(a) * 0.02, 0);
    sp.rotation.x = a;
    spin.add(sp);
  }
  const cap = new THREE.Mesh(new THREE.CylinderGeometry(0.055, 0.055, 0.04, 16), mats.chrome);
  cap.rotation.z = Math.PI / 2;
  cap.position.x = side * (width / 2 + 0.02);
  spin.add(cap);

  // pinça de freio
  const caliper = new THREE.Mesh(new THREE.BoxGeometry(0.05, 0.16, 0.1), new THREE.MeshStandardMaterial({ color: 0xff4a12, roughness: 0.4, metalness: 0.4 }));
  caliper.position.set(side * 0.02, 0.16, 0.08);
  steerGroup.add(caliper);

  return { group: g, steerGroup, spin, side, front };
}

/**
 * Constrói um carro low-poly estilizado. Frente = +Z, largura = X.
 */
export function createCarModel({ paint = "#ff5a12", interior = false, plate = "DB" } = {}) {
  const root = new THREE.Group();
  const body = new THREE.Group();
  root.add(body);

  const paintMat = paintMaterial(paint);
  const paintDark = new THREE.MeshStandardMaterial({ color: 0x08080b, roughness: 0.65, metalness: 0.4 });
  const accent = new THREE.MeshStandardMaterial({ color: 0x0e0e13, roughness: 0.5, metalness: 0.6 });

  // ---- chassi / corpo ----
  const main = new RoundedBoxGeometry(1.94, 0.56, 4.55, 4, 0.09);
  const mainMesh = mesh(main, paintMat, body);
  mainMesh.position.set(0, 0.63, 0);

  const midFront = new RoundedBoxGeometry(1.88, 0.3, 1.05, 3, 0.07);
  const midFrontMesh = mesh(midFront, paintMat, body);
  midFrontMesh.position.set(0, 0.9, 1.4);

  const midRear = new RoundedBoxGeometry(1.88, 0.3, 0.95, 3, 0.07);
  const midRearMesh = mesh(midRear, paintMat, body);
  midRearMesh.position.set(0, 0.9, -1.475);

  // ombreiras / cintura das portas (deixam a cabine aberta para o interior)
  for (const sx of [-1, 1]) {
    const rail = mesh(new RoundedBoxGeometry(0.16, 0.3, 1.9, 2, 0.05), paintMat, body);
    rail.position.set(sx * 0.86, 0.9, -0.05);
  }

  // capô dianteiro e tampa traseira em preto fosco (estilo fibra)
  const topMat = new THREE.MeshStandardMaterial({ color: 0x141419, roughness: 0.62, metalness: 0.25, envMapIntensity: 0.3 });
  const hood = new RoundedBoxGeometry(1.82, 0.16, 1.75, 3, 0.055);
  const hoodMesh = mesh(hood, topMat, body);
  hoodMesh.position.set(0, 0.99, 1.4);
  hoodMesh.rotation.x = -0.012;

  const deck = new RoundedBoxGeometry(1.8, 0.14, 1.5, 3, 0.05);
  const deckMesh = mesh(deck, topMat, body);
  deckMesh.position.set(0, 0.985, -1.62);

  // para-choques
  const fBumper = new RoundedBoxGeometry(1.92, 0.26, 0.22, 3, 0.06);
  const fBump = mesh(fBumper, paintMat, body);
  fBump.position.set(0, 0.6, 2.28);
  const rBumper = new RoundedBoxGeometry(1.9, 0.28, 0.2, 3, 0.06);
  const rBump = mesh(rBumper, paintMat, body);
  rBump.position.set(0, 0.62, -2.26);

  // saias laterais
  for (const sx of [-1, 1]) {
    const skirt = mesh(new RoundedBoxGeometry(0.13, 0.16, 3.1, 2, 0.03), accent, body);
    skirt.position.set(sx * 0.92, 0.38, -0.05);
  }

  // grade / boca
  const grille = mesh(new RoundedBoxGeometry(1.34, 0.2, 0.08, 2, 0.03), paintDark, body, false);
  grille.position.set(0, 0.72, 2.36);
  const grilleIn = mesh(new RoundedBoxGeometry(1.12, 0.13, 0.02, 2, 0.02), new THREE.MeshStandardMaterial({ color: 0x050508, roughness: 0.9 }), body, false);
  grilleIn.position.set(0, 0.72, 2.4);

  // faróis
  for (const sx of [-1, 1]) {
    const hl = mesh(new RoundedBoxGeometry(0.44, 0.17, 0.08, 3, 0.035), mats.headlight, body, false);
    hl.position.set(sx * 0.6, 0.88, 2.34);
    const glow = new THREE.Sprite(new THREE.SpriteMaterial({
      map: glowTexture(), color: 0xffe9b0, transparent: true, opacity: 0.6,
      blending: THREE.AdditiveBlending, depthWrite: false,
    }));
    glow.scale.set(1.1, 1.1, 1);
    glow.position.set(sx * 0.6, 0.88, 2.43);
    body.add(glow);

    // lanternas
    const tl = mesh(new RoundedBoxGeometry(0.38, 0.14, 0.06, 2, 0.03), mats.taillight, body, false);
    tl.position.set(sx * 0.66, 0.9, -2.31);
  }
  // barra de led traseira
  const ledBar = mesh(new RoundedBoxGeometry(1.45, 0.045, 0.04, 2, 0.015), mats.taillight, body, false);
  ledBar.position.set(0, 0.83, -2.33);

  // grade traseira
  const rearPanel = mesh(new RoundedBoxGeometry(1.5, 0.24, 0.04, 2, 0.02), paintDark, body, false);
  rearPanel.position.set(0, 0.64, -2.34);

  // scoop no capô
  const scoop = mesh(new RoundedBoxGeometry(0.54, 0.07, 0.56, 3, 0.03), paintMat, body);
  scoop.position.set(0, 1.09, 1.24);
  const scoopMouth = mesh(new THREE.BoxGeometry(0.4, 0.05, 0.03), new THREE.MeshStandardMaterial({ color: 0x050508, roughness: 0.8 }), body, false);
  scoopMouth.position.set(0, 1.08, 1.5);

  // aerofólio
  const wing = mesh(new RoundedBoxGeometry(1.62, 0.055, 0.34, 2, 0.02), accent, body);
  wing.position.set(0, 1.13, -2.0);
  for (const sx of [-1, 1]) {
    const strut = mesh(new THREE.BoxGeometry(0.05, 0.18, 0.14), accent, body);
    strut.position.set(sx * 0.56, 1.03, -2.0);
  }

  // retrovisores
  for (const sx of [-1, 1]) {
    const m = mesh(new RoundedBoxGeometry(0.22, 0.1, 0.13, 2, 0.03), paintMat, body);
    m.position.set(sx * 1.01, 1.03, 0.5);
    const arm = mesh(new THREE.BoxGeometry(0.12, 0.03, 0.04), accent, body);
    arm.position.set(sx * 0.94, 0.98, 0.5);
  }

  // escapamentos
  const exhaustTips = [];
  for (const sx of [-1, 1]) {
    const tip = mesh(new THREE.CylinderGeometry(0.056, 0.062, 0.22, 14), mats.chrome, body, false);
    tip.rotation.x = Math.PI / 2;
    tip.position.set(sx * 0.58, 0.38, -2.36);
    exhaustTips.push(tip);
    const inner = mesh(new THREE.CylinderGeometry(0.042, 0.042, 0.06, 12), new THREE.MeshBasicMaterial({ color: 0x050505 }), body, false);
    inner.rotation.x = Math.PI / 2;
    inner.position.set(sx * 0.58, 0.38, -2.45);
  }

  // ---- cabine ----
  const roofParts = [];
  const sideGlassParts = [];
  const roof = mesh(new RoundedBoxGeometry(1.5, 0.07, 1.72, 3, 0.03), topMat, body);
  roofParts.push(roof);
  roof.position.set(0, 1.455, -0.42);

  // travessa superior do para-brisa: fica visível no cockpit e sustenta o retrovisor
  const header = mesh(new RoundedBoxGeometry(1.5, 0.06, 0.1, 2, 0.02), accent, body);
  header.position.set(0, 1.445, 0.44);

  const glassMat = mats.glass;
  let windshieldGlass = null;
  let windshieldGroup = null;
  for (const [z, tilt, len] of [[0.58, -0.46, 0.62], [-1.28, 0.5, 0.6]]) {
    const wg = new THREE.Group();
    wg.position.set(0, 1.22, z);
    wg.rotation.x = tilt;
    body.add(wg);
    const glass = new THREE.Mesh(new THREE.PlaneGeometry(1.5, len), glassMat);
    glass.userData.windshield = z > 0;
    wg.add(glass);
    if (z > 0) {
      windshieldGlass = glass;
      windshieldGroup = wg;
    }
    // moldura preta pra dar leitura ao vidro
    const trimMat = new THREE.MeshStandardMaterial({ color: 0x08080b, roughness: 0.5, metalness: 0.4 });
    for (const yy of [len / 2, -len / 2]) {
      const bar = new THREE.Mesh(new THREE.BoxGeometry(1.56, 0.045, 0.035), trimMat);
      bar.position.set(0, yy, 0.002);
      wg.add(bar);
    }
    for (const xx of [-0.76, 0.76]) {
      const bar = new THREE.Mesh(new THREE.BoxGeometry(0.04, len + 0.045, 0.035), trimMat);
      bar.position.set(xx, 0, 0.002);
      wg.add(bar);
    }
  }
  for (const sx of [-1, 1]) {
    const sideGlass = new THREE.Mesh(new THREE.PlaneGeometry(1.62, 0.42), glassMat);
    sideGlass.position.set(sx * 0.755, 1.21, -0.38);
    sideGlass.rotation.y = sx * Math.PI / 2;
    body.add(sideGlass);
    sideGlassParts.push(sideGlass);
    // colunas A e B
    for (const zz of [0.58, -1.28]) {
      const pillar = mesh(new THREE.BoxGeometry(0.055, 0.54, 0.08), accent, body);
      pillar.position.set(sx * 0.75, 1.22, zz);
      pillar.rotation.x = zz > 0 ? -0.42 : 0.42;
    }
    const sill = mesh(new THREE.BoxGeometry(0.05, 0.045, 1.62), accent, body);
    sill.position.set(sx * 0.757, 1.42, -0.38);
  }

  // forro do teto (fecha a cabine por dentro)
  const headliner = mesh(new THREE.BoxGeometry(1.38, 0.02, 1.58), mats.interior, body, false);
  headliner.position.set(0, 1.412, -0.42);
  roofParts.push(headliner);

  // vincos de porta e maçanetas
  for (const sx of [-1, 1]) {
    for (const zz of [0.52, -1.2]) {
      const seam = mesh(new THREE.BoxGeometry(0.012, 0.48, 0.018), accent, body, false);
      seam.position.set(sx * 0.955, 0.62, zz);
    }
    const handle = mesh(new RoundedBoxGeometry(0.16, 0.045, 0.05, 2, 0.015), mats.chrome, body, false);
    handle.position.set(sx * 0.975, 0.78, -0.62);
  }

  // faixa no teto
  const stripeMat = new THREE.MeshStandardMaterial({ color: 0x2c2c36, roughness: 0.55, metalness: 0.4 });
  for (const sx of [-0.55, 0.55]) {
    const roofStripe = mesh(new THREE.BoxGeometry(0.17, 0.014, 1.66), stripeMat, body, false);
    roofStripe.position.set(sx, 1.493, -0.42);
    roofParts.push(roofStripe);
    const hoodStripe = mesh(new THREE.BoxGeometry(0.17, 0.014, 1.72), stripeMat, body, false);
    hoodStripe.position.set(sx, 1.075, 1.4);
    const deckStripe = mesh(new THREE.BoxGeometry(0.17, 0.014, 1.36), stripeMat, body, false);
    deckStripe.position.set(sx, 1.06, -1.62);
  }

  // cowl escuro na base do para-brisa
  const cowl = mesh(new THREE.BoxGeometry(1.62, 0.035, 0.22), new THREE.MeshStandardMaterial({ color: 0x08080b, roughness: 0.85 }), body, false);
  cowl.position.set(0, 1.09, 0.46);

  // sombra de contato
  const shadow = new THREE.Mesh(
    new THREE.PlaneGeometry(2.7, 5.2),
    new THREE.MeshBasicMaterial({ color: 0x000000, transparent: true, opacity: 0.55, depthWrite: false })
  );
  shadow.rotation.x = -Math.PI / 2;
  shadow.position.y = 0.012;
  shadow.material.alphaMap = glowTexture();
  shadow.material.opacity = 0.55;
  root.add(shadow);

  // ---- interior ----
  let steeringWheel = null;
  const needles = { tach: null, speed: null };
  if (interior) {
    const dash = mesh(new RoundedBoxGeometry(1.58, 0.18, 0.44, 3, 0.04), mats.interior, body);
    dash.position.set(0, 0.95, 0.63);
    const dashMat = new THREE.MeshStandardMaterial({ color: 0x060608, roughness: 1, metalness: 0, envMapIntensity: 0.12 });
    const dashTop = mesh(new RoundedBoxGeometry(1.4, 0.05, 0.42, 2, 0.02), dashMat, body);
    dashTop.position.set(0, 1.055, 0.61);
    dashTop.rotation.x = -0.1;

    // assoalho escuro: cobre o topo pintado do chassi dentro da cabine
    const tub = mesh(new RoundedBoxGeometry(1.52, 0.05, 1.08, 2, 0.03), mats.interior, body, false);
    tub.position.set(0, 0.918, -0.04);
    const consoleBox = mesh(new RoundedBoxGeometry(0.26, 0.2, 0.72, 2, 0.06), mats.interior, body, false);
    consoleBox.position.set(0, 0.99, 0.04);
    const consoleTrim = mesh(new RoundedBoxGeometry(0.2, 0.025, 0.5, 2, 0.01), mats.rimDark, body, false);
    consoleTrim.position.set(0, 1.092, 0.02);

    // detalhes do painel: saídas de ar e central multimídia
    const ventMat = new THREE.MeshStandardMaterial({ color: 0x050506, roughness: 0.55, metalness: 0.5 });
    for (const sx of [-1, 1]) {
      const vent = mesh(new RoundedBoxGeometry(0.2, 0.085, 0.04, 2, 0.015), ventMat, body, false);
      vent.position.set(sx * 0.58, 1.005, 0.405);
    }
    const centerScreen = new THREE.Mesh(
      new THREE.PlaneGeometry(0.26, 0.13),
      new THREE.MeshBasicMaterial({ color: 0x0a1c26 })
    );
    centerScreen.position.set(0, 1.01, 0.408);
    centerScreen.rotation.y = Math.PI;
    body.add(centerScreen);
    const screenGlow = new THREE.Mesh(
      new THREE.PlaneGeometry(0.2, 0.02),
      new THREE.MeshBasicMaterial({ color: 0x2fd8ff, transparent: true, opacity: 0.65 })
    );
    screenGlow.position.set(0, 1.005, 0.406);
    screenGlow.rotation.y = Math.PI;
    body.add(screenGlow);

    // painel de instrumentos
    const cluster = new THREE.Group();
    cluster.position.set(-0.37, 0.99, 0.385);
    cluster.rotation.x = -0.28;
    body.add(cluster);
    const clusterPanel = new THREE.Mesh(new THREE.BoxGeometry(0.62, 0.19, 0.04), new THREE.MeshStandardMaterial({ color: 0x08080b, roughness: 0.5 }));
    cluster.add(clusterPanel);
    for (const [i, x] of [-0.155, 0.155].entries()) {
      const ring = new THREE.Mesh(new THREE.TorusGeometry(0.077, 0.007, 6, 24), mats.chrome);
      ring.position.set(x, 0, -0.028);
      cluster.add(ring);
      const dial = new THREE.Mesh(new THREE.CircleGeometry(0.071, 24), new THREE.MeshBasicMaterial({ color: 0x11131c }));
      dial.position.set(x, 0, -0.03);
      cluster.add(dial);
      const needle = new THREE.Mesh(new THREE.BoxGeometry(0.008, 0.062, 0.004), new THREE.MeshBasicMaterial({ color: i === 0 ? 0xff3b2f : 0xffd319 }));
      needle.geometry.translate(0, 0.028, 0);
      needle.position.set(x, 0, -0.036);
      needle.rotation.z = 2.2;
      cluster.add(needle);
      if (i === 0) needles.tach = needle;
      else needles.speed = needle;
    }
    // luzes do painel
    const ledMat = new THREE.MeshBasicMaterial({ color: 0x37e6ff });
    for (let i = 0; i < 3; i++) {
      const led = new THREE.Mesh(new THREE.CircleGeometry(0.008, 8), ledMat);
      led.position.set(-0.1 + i * 0.05, -0.075, -0.035);
      cluster.add(led);
    }

    // volante
    steeringWheel = new THREE.Group();
    steeringWheel.position.set(-0.37, 0.99, 0.33);
    steeringWheel.rotation.x = -0.5;
    body.add(steeringWheel);
    const rim = new THREE.Mesh(new THREE.TorusGeometry(0.155, 0.021, 10, 32), new THREE.MeshStandardMaterial({ color: 0x0d0d10, roughness: 0.55, metalness: 0.2 }));
    steeringWheel.add(rim);
    for (let i = 0; i < 3; i++) {
      const a = (i / 3) * Math.PI * 2 + Math.PI / 6;
      const spoke = new THREE.Mesh(new THREE.BoxGeometry(0.035, 0.13, 0.014), mats.chrome);
      spoke.position.set(Math.cos(a) * 0.07, Math.sin(a) * 0.07, 0);
      spoke.rotation.z = a + Math.PI / 2;
      steeringWheel.add(spoke);
    }
    const hub = new THREE.Mesh(new THREE.CylinderGeometry(0.045, 0.045, 0.025, 14), mats.rimDark);
    hub.rotation.x = Math.PI / 2;
    steeringWheel.add(hub);
    // marcador amarelo no topo do volante
    const marker = new THREE.Mesh(new THREE.BoxGeometry(0.035, 0.02, 0.012), new THREE.MeshBasicMaterial({ color: 0xffd319 }));
    marker.position.set(0, 0.155, 0);
    steeringWheel.add(marker);

    // alavanca
    const lever = new THREE.Mesh(new THREE.CylinderGeometry(0.014, 0.018, 0.24, 8), mats.chrome);
    lever.position.set(0.03, 0.98, 0.28);
    lever.rotation.x = 0.25;
    body.add(lever);
    const knob = new THREE.Mesh(new THREE.SphereGeometry(0.042, 12, 10), new THREE.MeshStandardMaterial({ color: 0xff5a12, roughness: 0.35 }));
    knob.position.set(0.03, 1.1, 0.31);
    body.add(knob);

    // bancos
    for (const [sx, mat] of [[-0.37, mats.seatRed], [0.4, mats.seat]]) {
      const base = mesh(new RoundedBoxGeometry(0.52, 0.16, 0.55, 2, 0.05), mat, body);
      base.position.set(sx, 1.0, -0.42);
      const back = mesh(new RoundedBoxGeometry(0.52, 0.56, 0.17, 2, 0.07), mat, body);
      back.position.set(sx, 1.12, -0.74);
      back.rotation.x = -0.12;
      const head = mesh(new RoundedBoxGeometry(0.3, 0.14, 0.13, 2, 0.05), mat, body);
      head.position.set(sx, 1.35, -0.78);
      head.rotation.x = -0.12;
    }

    // painéis de porta
    for (const sx of [-1, 1]) {
      const door = mesh(new RoundedBoxGeometry(0.08, 0.4, 1.5, 2, 0.03), mats.interior, body);
      door.position.set(sx * 0.72, 0.96, -0.25);
    }

    // retrovisor interno
    const mirror = mesh(new RoundedBoxGeometry(0.2, 0.055, 0.04, 2, 0.015), mats.interior, body, false);
    mirror.position.set(0, 1.38, 0.34);
    mirror.rotation.x = -0.2;
    const mirrorStem = mesh(new THREE.BoxGeometry(0.022, 0.07, 0.022), mats.interior, body, false);
    mirrorStem.position.set(0, 1.415, 0.35);

  }

  // ---- rodas ----
  const wheels = [
    wheel(-0.88, 1.43, -1, true),
    wheel(0.88, 1.43, 1, true),
    wheel(-0.91, -1.45, -1, false),
    wheel(0.91, -1.45, 1, false),
  ];
  for (const w of wheels) root.add(w.group);

  // ---- luzes de freio ----
  const tailMats = [];
  body.traverse((o) => {
    if (o.isMesh && o.material === mats.taillight) tailMats.push(o.material);
  });

  function setPaint(hex) {
    paintMat.color.set(hex);
  }

  return {
    root,
    body,
    wheels,
    paintMat,
    windshieldGlass,
    windshieldGroup,
    sideGlassParts,
    roofParts,
    steeringWheel,
    needles,
    exhaustTips,
    setPaint,
  };
}
