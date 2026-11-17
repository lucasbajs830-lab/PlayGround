import * as THREE from "three";
import { RoundedBoxGeometry } from "three/addons/geometries/RoundedBoxGeometry.js";
import {
  glowTexture,
  carbonTexture,
  suedeTexture,
  gaugeTexture,
  badgeTexture,
  windowNetTexture,
  matTexture,
  dashScreenTexture,
} from "./textures.js";

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

// ---------- IK simples de dois ossos para os braços do piloto ----------
const LIMB_UP = new THREE.Vector3(0, 1, 0);

function orientLimb(m, a, b) {
  const dx = b.x - a.x, dy = b.y - a.y, dz = b.z - a.z;
  const len = Math.hypot(dx, dy, dz);
  if (len < 1e-5) return;
  m.position.set((a.x + b.x) / 2, (a.y + b.y) / 2, (a.z + b.z) / 2);
  m.quaternion.setFromUnitVectors(LIMB_UP, new THREE.Vector3(dx / len, dy / len, dz / len));
  m.scale.y = len / (m.userData.baseLen || 1);
}

function solveElbow(shoulder, target, l1, l2, pole, out) {
  const dx = target.x - shoulder.x, dy = target.y - shoulder.y, dz = target.z - shoulder.z;
  let dist = Math.hypot(dx, dy, dz);
  dist = Math.min(Math.max(dist, 0.001), l1 + l2 - 0.002);
  const ux = dx / dist, uy = dy / dist, uz = dz / dist;
  const a = (l1 * l1 - l2 * l2 + dist * dist) / (2 * dist);
  const h = Math.sqrt(Math.max(0, l1 * l1 - a * a));
  let px = pole.x - ux * (pole.x * ux + pole.y * uy + pole.z * uz);
  let py = pole.y - uy * (pole.x * ux + pole.y * uy + pole.z * uz);
  let pz = pole.z - uz * (pole.x * ux + pole.y * uy + pole.z * uz);
  const pl = Math.hypot(px, py, pz) || 1;
  px /= pl; py /= pl; pz /= pl;
  out.set(shoulder.x + ux * a + px * h, shoulder.y + uy * a + py * h, shoulder.z + uz * a + pz * h);
  return out;
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
export function createCarModel({ paint = "#ff5a12", interior = false, plate = "DB", kit = "muscle" } = {}) {
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

  // kits inspirados no pack de ruas
  if (kit === "hotrod") {
    // blower gigante saindo do capô
    const blower = mesh(new RoundedBoxGeometry(0.46, 0.24, 0.5, 3, 0.05), mats.chrome, body);
    blower.position.set(0, 1.27, 1.24);
    const intake = mesh(new RoundedBoxGeometry(0.56, 0.1, 0.56, 2, 0.03), accent, body);
    intake.position.set(0, 1.4, 1.24);
    const mouth = mesh(new THREE.BoxGeometry(0.42, 0.08, 0.04), new THREE.MeshStandardMaterial({ color: 0x050508, roughness: 0.7 }), body, false);
    mouth.position.set(0, 1.4, 1.52);
    const belt = mesh(new THREE.CylinderGeometry(0.04, 0.04, 0.06, 12), mats.chrome, body, false);
    belt.rotation.z = Math.PI / 2;
    belt.position.set(0, 1.2, 1.0);
    scoop.visible = false;
    scoopMouth.visible = false;
  } else if (kit === "gt") {
    scoop.scale.set(1.15, 0.8, 1.15);
    scoopMouth.scale.set(1.2, 1, 1);
  }

  if (kit === "gt" || kit === "street" || kit === "oval") {
    // para-lamas largos
    for (const [sx, z] of [[-1, 1.43], [1, 1.43], [-1, -1.45], [1, -1.45]]) {
      const flare = mesh(new RoundedBoxGeometry(0.26, 0.13, 0.95, 2, 0.05), paintMat, body);
      flare.position.set(sx * 0.93, 0.82, z);
      flare.rotation.z = sx * -0.12;
    }
  }

  // aerofólio
  if (kit !== "oval") {
    const wing = mesh(new RoundedBoxGeometry(1.62, 0.055, 0.34, 2, 0.02), accent, body);
    wing.position.set(0, kit === "gt" ? 1.22 : 1.13, -2.0);
    if (kit === "gt") wing.scale.set(1.08, 1.3, 1);
    for (const sx of [-1, 1]) {
      const strut = mesh(new THREE.BoxGeometry(0.05, 0.18, 0.14), accent, body);
      strut.position.set(sx * 0.56, kit === "gt" ? 1.12 : 1.03, -2.0);
    }
  } else {
    // lip pequeno no porta-malas
    const lip = mesh(new THREE.BoxGeometry(1.5, 0.04, 0.16), accent, body);
    lip.position.set(0, 1.05, -2.28);
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
  roofParts.push(roof, scoop, scoopMouth);
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

  // o forro do teto é criado junto com o restante do interior (abaixo)

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

  // cowl escuro na base do para-brisa, aberto no centro para não tapar a tela
  const cowlMat = new THREE.MeshStandardMaterial({ color: 0x08080b, roughness: 0.85 });
  for (const sx of [-1, 1]) {
    const cowl = mesh(new THREE.BoxGeometry(0.55, 0.035, 0.22), cowlMat, body, false);
    cowl.position.set(sx * 0.535, 1.09, 0.46);
  }

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
  let dashScreen = null;
  let mirrorGlass = null;
  let driver = null;
  let setGear = () => {};
  const driverSeatParts = [];
  const floorMatParts = [];
  const needles = { tach: null, speed: null };
  const shiftLights = [];
  if (interior) {
    // materiais do acabamento: alcântara, fibra de carbono, couro e alumínio escovado
    const suede = new THREE.MeshStandardMaterial({
      map: suedeTexture("charcoal", [27, 25, 31], 12),
      roughness: 0.97,
      metalness: 0.02,
      envMapIntensity: 0.16,
    });
    const suedeRed = new THREE.MeshStandardMaterial({
      map: suedeTexture("red", [62, 13, 22], 15),
      roughness: 0.95,
      metalness: 0.02,
      envMapIntensity: 0.16,
    });
    const carbon = new THREE.MeshStandardMaterial({
      map: carbonTexture(),
      color: 0x8d8d95,
      roughness: 0.5,
      metalness: 0.4,
      envMapIntensity: 0.45,
    });
    const leather = new THREE.MeshStandardMaterial({ color: 0x131317, roughness: 0.78, metalness: 0.06, envMapIntensity: 0.2 });
    const brushed = new THREE.MeshStandardMaterial({ color: 0x9aa1ad, roughness: 0.3, metalness: 0.95, envMapIntensity: 1.1 });
    const rubber = new THREE.MeshStandardMaterial({ color: 0x0a0a0c, roughness: 0.96 });
    const beltMat = new THREE.MeshStandardMaterial({ color: 0xb3121f, roughness: 0.92, envMapIntensity: 0.18 });
    const cageMat = new THREE.MeshStandardMaterial({ color: 0x23252c, roughness: 0.38, metalness: 0.85, envMapIntensity: 0.85 });
    const padMat = new THREE.MeshStandardMaterial({ color: 0x141419, roughness: 0.95 });
    const redMat = new THREE.MeshStandardMaterial({ color: 0xb3121f, roughness: 0.5, metalness: 0.25 });

    // ---- painel ----
    const dashMatte = new THREE.MeshStandardMaterial({
      map: carbonTexture(),
      color: 0x53535c,
      roughness: 0.84,
      metalness: 0.14,
      envMapIntensity: 0.22,
    });
    const dash = mesh(new RoundedBoxGeometry(1.6, 0.16, 0.5, 4, 0.035), suede, body);
    dash.position.set(0, 0.95, 0.61);
    const dashTop = mesh(new RoundedBoxGeometry(1.44, 0.03, 0.36, 3, 0.012), dashMatte, body);
    dashTop.position.set(0, 1.045, 0.62);
    dashTop.rotation.x = -0.11;

    // friso de couro com costura vermelha na parte de baixo do painel
    const kneePad = mesh(new RoundedBoxGeometry(1.42, 0.075, 0.03, 2, 0.012), leather, body, false);
    kneePad.position.set(0, 0.885, 0.35);
    const stitch = mesh(new THREE.BoxGeometry(1.36, 0.006, 0.006), redMat, body, false);
    stitch.position.set(0, 0.906, 0.343);

    // aplique do passageiro
    const passTrim = mesh(new RoundedBoxGeometry(0.5, 0.018, 0.28, 2, 0.008), carbon, body, false);
    passTrim.position.set(0.4, 1.062, 0.62);
    passTrim.rotation.x = -0.1;
    const dashBadge = new THREE.Mesh(
      new THREE.PlaneGeometry(0.17, 0.17),
      new THREE.MeshBasicMaterial({ map: badgeTexture("DB"), transparent: true })
    );
    dashBadge.position.set(0.4, 0.995, 0.346);
    dashBadge.rotation.y = Math.PI;
    body.add(dashBadge);

    // saídas de ar
    for (const sx of [-1, 1]) {
      const vent = mesh(new RoundedBoxGeometry(0.2, 0.09, 0.05, 2, 0.02), carbon, body, false);
      vent.position.set(sx * 0.6, 0.985, 0.352);
      const hole = new THREE.Mesh(new THREE.PlaneGeometry(0.15, 0.05), new THREE.MeshBasicMaterial({ color: 0x050507 }));
      hole.position.set(sx * 0.6, 0.985, 0.338);
      hole.rotation.y = Math.PI;
      body.add(hole);
      for (let i = -1; i <= 1; i++) {
        const slat = mesh(new THREE.BoxGeometry(0.14, 0.008, 0.01), brushed, body, false);
        slat.position.set(sx * 0.6, 0.985 + i * 0.015, 0.334);
      }
    }

    // central multimídia montada entre o painel e o console
    const centerPanel = mesh(new RoundedBoxGeometry(0.38, 0.19, 0.06, 2, 0.02), carbon, body, false);
    centerPanel.position.set(0, 1.075, 0.4);
    centerPanel.rotation.set(0.34, 0, 0);
    const screenHood = mesh(new RoundedBoxGeometry(0.4, 0.03, 0.11, 2, 0.012), suede, body, false);
    screenHood.position.set(0, 1.152, 0.373);
    screenHood.rotation.x = 0.34;
    dashScreen = new THREE.Mesh(
      new THREE.PlaneGeometry(0.34, 0.124),
      new THREE.MeshBasicMaterial({ map: dashScreenTexture(), color: 0xb4c0c9 })
    );
    dashScreen.position.set(0, 1.081, 0.352);
    dashScreen.rotation.set(0.34, Math.PI, 0);
    body.add(dashScreen);
    const screenGlow = new THREE.Mesh(
      new THREE.PlaneGeometry(0.26, 0.012),
      new THREE.MeshBasicMaterial({ color: 0x2fd8ff, transparent: true, opacity: 0.55 })
    );
    screenGlow.position.set(0, 1.019, 0.36);
    screenGlow.rotation.set(0.34, Math.PI, 0);
    body.add(screenGlow);
    for (const x of [-0.23, 0.23]) {
      const knob = new THREE.Mesh(new THREE.CylinderGeometry(0.018, 0.02, 0.024, 12), brushed);
      knob.rotation.x = Math.PI / 2;
      knob.position.set(x, 0.925, 0.352);
      body.add(knob);
    }

    // ---- quadro de instrumentos ----
    // o grupo gira 180° para ficar de frente para o motorista (câmera em -Z)
    const cluster = new THREE.Group();
    cluster.position.set(-0.355, 1.016, 0.355);
    cluster.rotation.set(0.18, Math.PI, 0);
    body.add(cluster);

    const clusterPanel = new THREE.Mesh(new THREE.BoxGeometry(0.56, 0.21, 0.03), carbon);
    cluster.add(clusterPanel);

    for (const [i, x] of [-0.15, 0.15].entries()) {
      const ring = new THREE.Mesh(new THREE.TorusGeometry(0.071, 0.006, 8, 28), brushed);
      ring.position.set(x, 0, 0.02);
      cluster.add(ring);
      const dial = new THREE.Mesh(
        new THREE.CircleGeometry(0.068, 28),
        new THREE.MeshBasicMaterial({ map: gaugeTexture(i === 0 ? "tach" : "speed"), transparent: true })
      );
      dial.position.set(x, 0, 0.017);
      cluster.add(dial);
      const needle = new THREE.Mesh(
        new THREE.BoxGeometry(0.006, 0.055, 0.004),
        new THREE.MeshBasicMaterial({ color: i === 0 ? 0xff3b2f : 0xffd319 })
      );
      needle.geometry.translate(0, 0.025, 0);
      needle.position.set(x, 0, 0.026);
      needle.rotation.z = 2.25;
      cluster.add(needle);
      if (i === 0) needles.tach = needle;
      else needles.speed = needle;
    }

    // luzes de advertência
    const ledMat = new THREE.MeshBasicMaterial({ color: 0x37e6ff });
    for (let i = 0; i < 3; i++) {
      const led = new THREE.Mesh(new THREE.CircleGeometry(0.0075, 8), ledMat);
      led.position.set(-0.065 + i * 0.065, -0.075, 0.026);
      cluster.add(led);
    }

    // shift light no topo do quadro
    const shiftBar = mesh(new RoundedBoxGeometry(0.34, 0.05, 0.026, 2, 0.01), padMat, body, false);
    shiftBar.position.set(-0.37, 1.125, 0.352);
    for (let i = 0; i < 6; i++) {
      const led = new THREE.Mesh(
        new THREE.CircleGeometry(0.0105, 10),
        new THREE.MeshBasicMaterial({ color: 0x2a1114 })
      );
      led.position.set(-0.475 + i * 0.042, 1.121, 0.335);
      led.rotation.y = Math.PI;
      led.userData.on = i < 3 ? 0x33ff66 : i < 5 ? 0xffb020 : 0xff2a14;
      body.add(led);
      shiftLights.push(led);
    }

    // ---- volante flat-bottom ----
    steeringWheel = new THREE.Group();
    steeringWheel.position.set(-0.37, 0.842, 0.315);
    steeringWheel.rotation.x = -0.38;
    body.add(steeringWheel);

    const wheelSuede = new THREE.MeshStandardMaterial({
      map: suedeTexture("wheel", [72, 66, 76], 16),
      roughness: 0.86,
      metalness: 0.04,
    });
    const rim = new THREE.Mesh(new THREE.TorusGeometry(0.155, 0.024, 12, 44, Math.PI * 1.66), wheelSuede);
    rim.rotation.z = -Math.PI / 3; // abre o vão embaixo (flat bottom)
    steeringWheel.add(rim);
    const flatBar = new THREE.Mesh(new THREE.BoxGeometry(0.158, 0.024, 0.022), wheelSuede);
    flatBar.position.set(0, -0.136, 0);
    steeringWheel.add(flatBar);

    for (const a of [0, Math.PI, -Math.PI / 2]) {
      const spoke = new THREE.Mesh(new THREE.BoxGeometry(0.028, 0.15, 0.012), brushed);
      spoke.position.set(Math.cos(a) * 0.07, Math.sin(a) * 0.07, 0);
      spoke.rotation.z = a - Math.PI / 2;
      steeringWheel.add(spoke);
    }
    const hub = new THREE.Mesh(new THREE.CylinderGeometry(0.047, 0.05, 0.035, 16), padMat);
    hub.rotation.x = Math.PI / 2;
    hub.position.z = -0.012;
    steeringWheel.add(hub);
    const hubBadge = new THREE.Mesh(
      new THREE.CircleGeometry(0.036, 20),
      new THREE.MeshBasicMaterial({ map: badgeTexture("DB"), transparent: true })
    );
    hubBadge.position.z = -0.032;
    hubBadge.rotation.y = Math.PI;
    steeringWheel.add(hubBadge);
    const marker = new THREE.Mesh(new THREE.BoxGeometry(0.075, 0.02, 0.014), new THREE.MeshBasicMaterial({ color: 0xffd319 }));
    marker.position.set(0, 0.155, 0.004);
    steeringWheel.add(marker);
    const markerRed = new THREE.Mesh(new THREE.BoxGeometry(0.032, 0.034, 0.012), new THREE.MeshBasicMaterial({ color: 0xff3b2f }));
    markerRed.position.set(0, 0.132, 0.004);
    steeringWheel.add(markerRed);

    // borboletas de troca
    for (const sx of [-1, 1]) {
      const paddle = mesh(new THREE.BoxGeometry(0.065, 0.05, 0.01), carbon, steeringWheel, false);
      paddle.position.set(sx * 0.132, -0.032, 0.03);
    }

    // coluna de direção
    const column = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.045, 0.3, 12), padMat);
    column.rotation.x = Math.PI / 2;
    column.position.set(-0.37, 0.94, 0.43);
    body.add(column);
    const shroud = mesh(new RoundedBoxGeometry(0.14, 0.1, 0.2, 2, 0.03), padMat, body, false);
    shroud.position.set(-0.37, 0.955, 0.43);
    shroud.rotation.x = -0.2;
    // alavancas de seta e limpador
    for (const sx of [-1, 1]) {
      const stalk = new THREE.Mesh(new THREE.CylinderGeometry(0.006, 0.008, 0.16, 8), padMat);
      stalk.rotation.z = Math.PI / 2;
      stalk.rotation.y = sx * 0.3;
      stalk.position.set(-0.37 + sx * 0.11, 0.985, 0.45);
      body.add(stalk);
    }

    // ---- assoalho e console ----
    const tub = mesh(new RoundedBoxGeometry(1.52, 0.05, 1.08, 2, 0.03), mats.interior, body, false);
    tub.position.set(0, 0.918, -0.04);
    const mats2 = new THREE.MeshStandardMaterial({ map: matTexture(), roughness: 1, metalness: 0 });
    for (const sx of [-0.37, 0.4]) {
      const mat = new THREE.Mesh(new THREE.PlaneGeometry(0.48, 0.66), mats2);
      mat.rotation.x = -Math.PI / 2;
      mat.position.set(sx, 0.947, -0.16);
      body.add(mat);
      floorMatParts.push(mat);
    }

    const consoleBox = mesh(new RoundedBoxGeometry(0.28, 0.22, 0.78, 3, 0.06), suede, body, false);
    consoleBox.position.set(0, 0.93, -0.05);
    const consoleTrim = mesh(new RoundedBoxGeometry(0.24, 0.018, 0.62, 2, 0.008), carbon, body, false);
    consoleTrim.position.set(0, 1.028, -0.03);
    consoleTrim.rotation.x = -0.02;

    // painel de interruptores
    for (let i = 0; i < 4; i++) {
      const toggle = new THREE.Mesh(new THREE.CylinderGeometry(0.008, 0.008, 0.03, 8), brushed);
      toggle.position.set(-0.07 + i * 0.047, 1.045, -0.16);
      body.add(toggle);
      const tip = new THREE.Mesh(new THREE.SphereGeometry(0.009, 8, 6), i === 0 ? redMat : padMat);
      tip.position.set(-0.07 + i * 0.047, 1.061, -0.16);
      body.add(tip);
    }

    // alavanca de câmbio com coifa
    const boot = new THREE.Mesh(new THREE.ConeGeometry(0.055, 0.13, 12), leather);
    boot.position.set(0.06, 0.985, 0.1);
    body.add(boot);
    const lever = new THREE.Mesh(new THREE.CylinderGeometry(0.011, 0.013, 0.2, 8), brushed);
    lever.position.set(0.06, 1.03, 0.11);
    lever.rotation.x = 0.22;
    body.add(lever);
    const knob = new THREE.Mesh(new RoundedBoxGeometry(0.042, 0.078, 0.038, 2, 0.018), new THREE.MeshStandardMaterial({ color: 0x16161b, roughness: 0.38, metalness: 0.2 }));
    knob.position.set(0.06, 1.085, 0.13);
    knob.rotation.x = 0.22;
    body.add(knob);

    // freio de mão
    const handBrake = new THREE.Mesh(new THREE.CylinderGeometry(0.013, 0.016, 0.24, 10), brushed);
    handBrake.position.set(0.06, 1.0, -0.28);
    handBrake.rotation.x = 1.15;
    body.add(handBrake);
    const grip = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.02, 0.08, 10), padMat);
    grip.position.set(0.06, 1.055, -0.35);
    grip.rotation.x = 1.15;
    body.add(grip);

    // extintor no lado do passageiro
    const bottle = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.05, 0.32, 14), redMat);
    bottle.position.set(0.45, 1.0, -0.3);
    bottle.rotation.x = 0.16;
    body.add(bottle);
    const nozzle = new THREE.Mesh(new THREE.CylinderGeometry(0.012, 0.012, 0.06, 8), padMat);
    nozzle.position.set(0.45, 1.18, -0.27);
    body.add(nozzle);

    // ---- bancos concha ----
    for (const [sx, mat, belt] of [[-0.37, suedeRed, beltMat], [0.4, suede, null]]) {
      const mine = sx < 0 ? driverSeatParts : null;
      const add = (m) => { if (mine) mine.push(m); return m; };
      const base = add(mesh(new RoundedBoxGeometry(0.5, 0.15, 0.54, 3, 0.06), mat, body));
      base.position.set(sx, 0.99, -0.42);
      for (const bx of [-1, 1]) {
        const bolster = add(mesh(new RoundedBoxGeometry(0.09, 0.12, 0.5, 2, 0.03), mat, body));
        bolster.position.set(sx + bx * 0.23, 1.035, -0.4);
        bolster.rotation.z = bx * 0.12;
      }
      const back = add(mesh(new RoundedBoxGeometry(0.46, 0.5, 0.15, 3, 0.06), mat, body));
      back.position.set(sx, 1.16, -0.72);
      back.rotation.x = -0.14;
      for (const bx of [-1, 1]) {
        const side = add(mesh(new RoundedBoxGeometry(0.085, 0.42, 0.17, 2, 0.04), mat, body));
        side.position.set(sx + bx * 0.2, 1.15, -0.7);
        side.rotation.x = -0.14;
        side.rotation.z = bx * 0.1;
      }
      const head = add(mesh(new RoundedBoxGeometry(0.28, 0.13, 0.12, 2, 0.05), mat, body));
      head.position.set(sx, 1.375, -0.775);
      head.rotation.x = -0.14;
      for (const hx of [-1, 1]) {
        const slot = add(mesh(new THREE.BoxGeometry(0.055, 0.045, 0.02), padMat, body, false));
        slot.position.set(sx + hx * 0.1, 1.3, -0.795);
        slot.rotation.x = -0.14;
      }
      for (const rx of [-1, 1]) {
        const rail = add(mesh(new THREE.BoxGeometry(0.05, 0.04, 0.5), brushed, body, false));
        rail.position.set(sx + rx * 0.16, 0.932, -0.4);
      }
      if (belt) {
        for (const bx of [-1, 1]) {
          const strap = add(mesh(new THREE.BoxGeometry(0.055, 0.34, 0.008), belt, body, false));
          strap.position.set(sx + bx * 0.145, 1.19, -0.628);
          strap.rotation.z = -bx * 0.15;
        }
        const lap = add(mesh(new THREE.BoxGeometry(0.4, 0.05, 0.008), belt, body, false));
        lap.position.set(sx, 1.015, -0.56);
        const buckle = add(mesh(new THREE.BoxGeometry(0.07, 0.05, 0.02), brushed, body, false));
        buckle.position.set(sx, 1.015, -0.55);
      }
    }

    // ---- piloto (corpo, braços com IK e troca de marcha) ----
    const suit = new THREE.MeshStandardMaterial({ color: 0x2a3654, roughness: 0.74, metalness: 0.08, envMapIntensity: 0.45 });
    const suitRed = new THREE.MeshStandardMaterial({ color: 0x9c1020, roughness: 0.8, metalness: 0.05 });
    const glove = new THREE.MeshStandardMaterial({ color: 0xc01824, roughness: 0.36, metalness: 0.12 });
    const helmetMat = new THREE.MeshStandardMaterial({ color: 0xe9e7e0, roughness: 0.26, metalness: 0.18, envMapIntensity: 1.0 });
    const visorMat = new THREE.MeshPhysicalMaterial({
      color: 0x0a1622, roughness: 0.04, metalness: 0.9,
      envMapIntensity: 1.5, transparent: true, opacity: 0.92,
    });

    const driverGroup = new THREE.Group();
    driverGroup.position.set(-0.37, 0, 0);
    body.add(driverGroup);

    const torsoGroup = new THREE.Group();
    driverGroup.add(torsoGroup);
    const torso = mesh(new RoundedBoxGeometry(0.36, 0.42, 0.26, 3, 0.06), suit, torsoGroup);
    torso.position.set(0, 1.1, -0.34);
    torso.rotation.x = -0.18;
    const chestStripe = mesh(new THREE.BoxGeometry(0.05, 0.4, 0.012), suitRed, torsoGroup, false);
    chestStripe.position.set(0, 1.1, -0.208);
    chestStripe.rotation.x = -0.18;
    for (const sx of [-1, 1]) {
      const strap = mesh(new THREE.BoxGeometry(0.045, 0.34, 0.012), beltMat, torsoGroup, false);
      strap.position.set(sx * 0.085, 1.13, -0.2);
      strap.rotation.z = sx * 0.16;
      strap.rotation.x = -0.18;
    }
    const beltBuckle = mesh(new THREE.BoxGeometry(0.085, 0.05, 0.02), brushed, torsoGroup, false);
    beltBuckle.position.set(0, 1.02, -0.215);
    const lapBelt = mesh(new THREE.BoxGeometry(0.34, 0.045, 0.012), beltMat, torsoGroup, false);
    lapBelt.position.set(0, 1.005, -0.225);

    const headGroup = new THREE.Group();
    driverGroup.add(headGroup);
    const neck = new THREE.Mesh(new THREE.CylinderGeometry(0.044, 0.05, 0.09, 10), suit);
    neck.position.set(0, 1.235, -0.305);
    headGroup.add(neck);
    const helmet = mesh(new THREE.SphereGeometry(0.103, 20, 16), helmetMat, headGroup);
    helmet.position.set(0, 1.305, -0.305);
    helmet.scale.set(0.96, 1, 1.04);
    const helmetStripe = mesh(new THREE.BoxGeometry(0.05, 0.012, 0.19), suitRed, headGroup, false);
    helmetStripe.position.set(0, 1.402, -0.305);
    const visor = new THREE.Mesh(new RoundedBoxGeometry(0.14, 0.062, 0.026, 2, 0.012), visorMat);
    visor.position.set(0, 1.318, -0.196);
    visor.rotation.x = -0.12;
    headGroup.add(visor);
    const chinVent = new THREE.Mesh(new THREE.BoxGeometry(0.075, 0.028, 0.02), padMat);
    chinVent.position.set(0, 1.268, -0.207);
    headGroup.add(chinVent);
    const helmetVent = mesh(new THREE.BoxGeometry(0.055, 0.012, 0.09), padMat, headGroup, false);
    helmetVent.position.set(0, 1.408, -0.29);

    // braços: ombro -> cotovelo -> mão (IK de dois ossos)
    const armSpec = [
      { base: Math.PI, sx: -1, pole: new THREE.Vector3(-0.32, -1, -0.12) },
      { base: 0, sx: 1, pole: new THREE.Vector3(0.32, -1, -0.12) },
    ];
    const arms = armSpec.map(({ base, sx, pole }) => {
      const group = new THREE.Group();
      driverGroup.add(group);
      const upperGeo = new THREE.CylinderGeometry(0.046, 0.04, 1, 10);
      const upper = new THREE.Mesh(upperGeo, suit);
      upper.userData.baseLen = 1;
      group.add(upper);
      const lowerGeo = new THREE.CylinderGeometry(0.04, 0.033, 1, 10);
      const lower = new THREE.Mesh(lowerGeo, suit);
      lower.userData.baseLen = 1;
      group.add(lower);
      const elbowJoint = new THREE.Mesh(new THREE.SphereGeometry(0.04, 10, 8), suit);
      group.add(elbowJoint);
      const shoulderJoint = new THREE.Mesh(new THREE.SphereGeometry(0.05, 10, 8), suit);
      group.add(shoulderJoint);
      const cuff = new THREE.Mesh(new THREE.CylinderGeometry(0.049, 0.049, 0.05, 10), suitRed);
      cuff.userData.baseLen = 1;
      group.add(cuff);
      const hand = new THREE.Mesh(new RoundedBoxGeometry(0.095, 0.072, 0.115, 2, 0.028), glove);
      group.add(hand);
      return {
        base, arm: group, upper, lower, elbowJoint, shoulderJoint, cuff, hand, pole,
        shoulder: new THREE.Vector3(sx * 0.19, 1.225, -0.3),
        length: 0.42,
      };
    });

    const wheelEuler = new THREE.Euler(-0.38, 0, 0, "XYZ");
    const rimTarget = new THREE.Vector3();
    const elbowPoint = new THREE.Vector3();
    const handTarget = new THREE.Vector3();
    const knobTarget = new THREE.Vector3(0.43, 1.085, 0.13);

    driver = {
      group: driverGroup,
      arms,
      head: headGroup,
      torso: torsoGroup,
      shiftTimer: 0,
      shift() {
        this.shiftTimer = 0.42;
      },
      update(dt, info = {}) {
        this.shiftTimer = Math.max(0, this.shiftTimer - (dt || 0));
        const prog = this.shiftTimer > 0 ? 1 - this.shiftTimer / 0.42 : 0;
        const reach = Math.sin(Math.PI * Math.min(1, prog));
        const rot = Math.max(-1, Math.min(1, info.steer || 0));
        wheelEuler.set(-0.38, 0, rot, "XYZ");

        for (const a of arms) {
          // mão esquerda sempre no aro; direita saqueia para a alavanca
          rimTarget.set(Math.cos(a.base) * 0.16, Math.sin(a.base) * 0.16, -0.014).applyEuler(wheelEuler);
          rimTarget.x += 0;
          rimTarget.y += 0.842;
          rimTarget.z += 0.315;
          if (a.base === 0) {
            handTarget.copy(rimTarget).lerp(knobTarget, reach);
          } else {
            handTarget.copy(rimTarget);
          }
          solveElbow(a.shoulder, handTarget, a.length, a.length, a.pole, elbowPoint);
          orientLimb(a.upper, a.shoulder, elbowPoint);
          orientLimb(a.lower, elbowPoint, handTarget);
          a.elbowJoint.position.copy(elbowPoint);
          a.shoulderJoint.position.copy(a.shoulder);
          a.cuff.position.copy(handTarget).lerp(elbowPoint, 0.12);
          a.cuff.quaternion.copy(a.lower.quaternion);
          a.hand.position.copy(handTarget);
          a.hand.quaternion.copy(a.lower.quaternion);
        }
        // respiração discreta
        const bob = Math.sin((info.time || 0) * 1.9) * 0.0022;
        headGroup.position.y = bob;
        torsoGroup.position.y = bob * 0.45;
      },
    };

    // ---- visor de marcha em cima do volante ----
    const gearCanvas = document.createElement("canvas");
    gearCanvas.width = 160;
    gearCanvas.height = 112;
    const gearCtx = gearCanvas.getContext("2d");
    const gearTex = new THREE.CanvasTexture(gearCanvas);
    gearTex.colorSpace = THREE.SRGBColorSpace;
    gearTex.minFilter = THREE.LinearFilter;
    gearTex.magFilter = THREE.LinearFilter;
    gearTex.generateMipmaps = false;
    let shownGear = 0;
    setGear = (n) => {
      if (n === shownGear) return;
      shownGear = n;
      gearCtx.fillStyle = "#050609";
      gearCtx.fillRect(0, 0, 160, 112);
      gearCtx.strokeStyle = "rgba(55,230,255,0.35)";
      gearCtx.lineWidth = 3;
      gearCtx.strokeRect(5, 5, 150, 102);
      gearCtx.textAlign = "center";
      gearCtx.fillStyle = "#37e6ff";
      gearCtx.font = "700 13px Arial, Helvetica, sans-serif";
      gearCtx.fillText("MARCHA", 80, 24);
      gearCtx.fillStyle = "#ffd319";
      gearCtx.shadowColor = "#ff8a1a";
      gearCtx.shadowBlur = 16;
      gearCtx.font = "italic 900 72px Arial, Helvetica, sans-serif";
      gearCtx.fillText(String(n), 80, 93);
      gearCtx.shadowBlur = 0;
      gearTex.needsUpdate = true;
    };
    setGear(1, true);

    const gearGroup = new THREE.Group();
    gearGroup.position.set(-0.37, 1.072, 0.292);
    gearGroup.rotation.x = -0.24;
    body.add(gearGroup);
    const gearPod = mesh(new RoundedBoxGeometry(0.19, 0.13, 0.05, 2, 0.02), padMat, gearGroup, false);
    const gearScreen = new THREE.Mesh(
      new THREE.PlaneGeometry(0.155, 0.102),
      new THREE.MeshBasicMaterial({ map: gearTex, toneMapped: false })
    );
    gearScreen.position.z = -0.027;
    gearScreen.rotation.y = Math.PI;
    gearGroup.add(gearScreen);
    for (let i = 0; i < 4; i++) {
      const led = new THREE.Mesh(
        new THREE.CircleGeometry(0.0072, 10),
        new THREE.MeshBasicMaterial({ color: 0x241114 })
      );
      led.position.set(-0.054 + i * 0.036, 0.074, -0.027);
      led.rotation.y = Math.PI;
      led.userData.on = i < 2 ? 0x33ff66 : i < 3 ? 0xffb020 : 0xff2a14;
      gearGroup.add(led);
      shiftLights.push(led);
    }

    // ---- gaiola de segurança ----
    const tube = (len, r = 0.028) => new THREE.CylinderGeometry(r, r, len, 10);
    for (const sx of [-1, 1]) {
      const hoop = new THREE.Mesh(tube(0.56), cageMat);
      hoop.position.set(sx * 0.62, 1.16, -0.98);
      body.add(hoop);
      const brace = new THREE.Mesh(tube(0.58), cageMat);
      brace.position.set(sx * 0.6, 1.22, -1.07);
      brace.rotation.x = 0.5;
      body.add(brace);
    }
    const hoopTop = new THREE.Mesh(tube(1.24), cageMat);
    hoopTop.rotation.z = Math.PI / 2;
    hoopTop.position.set(0, 1.44, -0.98);
    body.add(hoopTop);
    const harnessBar = new THREE.Mesh(tube(1.24), cageMat);
    harnessBar.rotation.z = Math.PI / 2;
    harnessBar.position.set(0, 1.3, -0.93);
    body.add(harnessBar);
    for (const sx of [-1, 1]) {
      const doorBar = new THREE.Mesh(tube(1.1, 0.024), cageMat);
      doorBar.rotation.x = Math.PI / 2;
      doorBar.position.set(sx * 0.665, 1.02, -0.32);
      body.add(doorBar);
      const pad = new THREE.Mesh(tube(0.34, 0.04), padMat);
      pad.rotation.x = Math.PI / 2;
      pad.position.set(sx * 0.665, 1.02, -0.18);
      body.add(pad);
      const diag = new THREE.Mesh(tube(0.72, 0.024), cageMat);
      diag.position.set(sx * 0.665, 1.15, -0.72);
      diag.rotation.x = 0.72;
      body.add(diag);
    }

    // ---- portas, rede e teto ----
    for (const sx of [-1, 1]) {
      const door = mesh(new RoundedBoxGeometry(0.05, 0.44, 1.45, 2, 0.02), suede, body);
      door.position.set(sx * 0.72, 0.97, -0.25);
      const armrest = mesh(new RoundedBoxGeometry(0.12, 0.06, 0.5, 2, 0.025), leather, body, false);
      armrest.position.set(sx * 0.66, 1.0, -0.05);
      const switches = mesh(new RoundedBoxGeometry(0.1, 0.014, 0.12, 2, 0.006), carbon, body, false);
      switches.position.set(sx * 0.655, 1.035, 0.06);
      const pull = mesh(new RoundedBoxGeometry(0.03, 0.026, 0.13, 2, 0.008), padMat, body, false);
      pull.position.set(sx * 0.702, 1.06, 0.1);
      const seam = mesh(new THREE.BoxGeometry(0.004, 0.004, 1.1), redMat, body, false);
      seam.position.set(sx * 0.7, 1.115, -0.28);
      const speaker = new THREE.Mesh(new THREE.CylinderGeometry(0.075, 0.075, 0.02, 20), rubber);
      speaker.rotation.z = Math.PI / 2;
      speaker.position.set(sx * 0.695, 0.93, 0.02);
      body.add(speaker);
      const speakerRing = new THREE.Mesh(new THREE.TorusGeometry(0.075, 0.008, 6, 22), brushed);
      speakerRing.rotation.y = Math.PI / 2;
      speakerRing.position.set(sx * 0.69, 0.93, 0.02);
      body.add(speakerRing);
    }

    const net = new THREE.Mesh(
      new THREE.PlaneGeometry(1.18, 0.4),
      new THREE.MeshBasicMaterial({ map: windowNetTexture(), transparent: true, side: THREE.DoubleSide, depthWrite: false })
    );
    net.rotation.y = Math.PI / 2;
    net.position.set(-0.735, 1.2, -0.34);
    body.add(net);
    const netRod = new THREE.Mesh(new THREE.CylinderGeometry(0.008, 0.008, 1.2, 8), brushed);
    netRod.rotation.x = Math.PI / 2;
    netRod.position.set(-0.735, 1.405, -0.34);
    body.add(netRod);

    const headliner = mesh(new THREE.BoxGeometry(1.38, 0.02, 1.58), suede, body, false);
    headliner.position.set(0, 1.408, -0.42);

    // retrovisor interno com vidro
    const mirror = mesh(new RoundedBoxGeometry(0.2, 0.055, 0.04, 2, 0.015), padMat, body, false);
    mirror.position.set(0, 1.402, 0.375);
    mirror.rotation.x = -0.2;
    mirrorGlass = new THREE.Mesh(
      new THREE.PlaneGeometry(0.17, 0.038),
      new THREE.MeshStandardMaterial({ color: 0x27384a, roughness: 0.08, metalness: 1, envMapIntensity: 1.6 })
    );
    mirrorGlass.position.set(0, 1.402, 0.351);
    mirrorGlass.rotation.y = Math.PI;
    body.add(mirrorGlass);
    const mirrorStem = mesh(new THREE.BoxGeometry(0.022, 0.07, 0.022), padMat, body, false);
    mirrorStem.position.set(0, 1.432, 0.39);

    // luz interna suave para a cabine não ficar um buraco negro à noite
    const cabinLight = new THREE.PointLight(0xc3d4ef, 0.7, 2.4, 2);
    cabinLight.position.set(0, 1.3, -0.42);
    body.add(cabinLight);
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
    shiftLights,
    driver,
    driverSeatParts,
    floorMatParts,
    setGear,
    dashScreen,
    mirrorGlass,
    exhaustTips,
    setPaint,
  };
}
