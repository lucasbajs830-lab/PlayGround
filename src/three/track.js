import * as THREE from "three";
import {
  asphaltTexture, checkerTexture, bannerTexture, signTexture,
  windowsTexture, glowTexture, lightPoolTexture, crowdTexture,
} from "./textures.js";

// Circuito de rua: reta de largada, curvas que exigem freio e reta final.
// A pista é gerada a partir de uma spline; a física segue o comprimento de arco.
const HALF = 7.2; // meia largura do asfalto
const WALL = HALF + 1.05;
const LANE = 2.15;

// x, z — o carro anda no sentido +Z no início.
const CONTROL = [
  [0, -80], [0, -20], [0, 40], [0, 120], [0, 200], [0, 270],
  [10, 320], [38, 352], [78, 362],
  [118, 360], [152, 352],
  [178, 334], [186, 306], [200, 282], [226, 274],
  [262, 280], [298, 296],
  [322, 320], [350, 334], [382, 330],
  [410, 322], [438, 300], [450, 270], [446, 238], [424, 216], [394, 212],
  [358, 210], [318, 212], [282, 218],
  [252, 228], [228, 240],
  [204, 238], [184, 232], [168, 220], [158, 202], [154, 180],
  [152, 150], [150, 120], [148, 90], [148, 60],
  [156, 40], [176, 28], [200, 26],
  [240, 26], [280, 32],
  [312, 48], [344, 54], [378, 48], [400, 30], [430, 22], [470, 20], [510, 26],
  [540, 36], [560, 50], [572, 74], [576, 102],
  [578, 140], [580, 180],
  [592, 212], [614, 232], [642, 238],
  [690, 240], [740, 236],
  [800, 228], [860, 214], [920, 206], [980, 208],
];

const G = 9.81;
const V_MAX = 86; // m/s (~310 km/h)
const LAT_ACC = 10.4; // aderência lateral usada pela linha ideal
const BRAKE_ACC = 7.0;
const ACCEL_ACC = 3.1;

export function buildTrack() {
  const group = new THREE.Group();
  const sky = new THREE.Group();
  group.add(sky);

  const curve = new THREE.CatmullRomCurve3(
    CONTROL.map(([x, z]) => new THREE.Vector3(x, 0, z)),
    false,
    "centripetal",
    0.5
  );

  const total = curve.getLength();
  const N = Math.max(500, Math.round(total / 2));
  const ds = total / N;
  const pts = curve.getSpacedPoints(N);

  const tanX = new Float32Array(N + 1);
  const tanZ = new Float32Array(N + 1);
  const heading = new Float32Array(N + 1);
  const rawK = new Float32Array(N + 1);
  const kappa = new Float32Array(N + 1);
  for (let i = 0; i <= N; i++) {
    const a = pts[Math.max(0, i - 1)];
    const b = pts[Math.min(N, i + 1)];
    let tx = b.x - a.x;
    let tz = b.z - a.z;
    const l = Math.hypot(tx, tz) || 1;
    tx /= l; tz /= l;
    tanX[i] = tx; tanZ[i] = tz;
    heading[i] = Math.atan2(tx, tz);
  }
  // curvatura com sinal (positiva = curva para a direita)
  for (let i = 0; i <= N; i++) {
    const a = heading[Math.max(0, i - 1)];
    const b = heading[Math.min(N, i + 1)];
    let d = b - a;
    while (d > Math.PI) d -= Math.PI * 2;
    while (d < -Math.PI) d += Math.PI * 2;
    rawK[i] = d / (2 * ds);
  }
  for (let i = 0; i <= N; i++) {
    let sum = 0, wsum = 0;
    for (let j = -4; j <= 4; j++) {
      const idx = Math.max(0, Math.min(N, i + j));
      const w = 5 - Math.abs(j);
      sum += rawK[idx] * w;
      wsum += w;
    }
    kappa[i] = sum / wsum;
  }

  // ---------- linha de largada / chegada ----------
  let startIdx = 0;
  let best = Infinity;
  for (let i = 0; i <= N; i++) {
    const d = pts[i].x * pts[i].x + pts[i].z * pts[i].z;
    if (d < best) { best = d; startIdx = i; }
  }
  const START_S = startIdx * ds;
  const FINISH_S = Math.max(START_S + 900, total - 150);
  const finishIdx = Math.min(N, Math.round(FINISH_S / ds));
  const RACE_LENGTH = FINISH_S - START_S;

  // ---------- perfil de velocidade / linha de freio ----------
  const profile = new Float32Array(N + 1);
  const lineState = new Uint8Array(N + 1); // 0 mantém, 1 freia, 2 acelera
  for (let i = 0; i <= N; i++) {
    const k = Math.abs(kappa[i]);
    const vc = k > 1e-4 ? Math.sqrt(LAT_ACC / k) : V_MAX;
    profile[i] = Math.min(V_MAX, vc);
  }
  for (let i = finishIdx - 1; i >= 0; i--) {
    profile[i] = Math.min(profile[i], Math.sqrt(profile[i + 1] * profile[i + 1] + 2 * BRAKE_ACC * ds));
  }
  for (let i = startIdx + 1; i <= finishIdx; i++) {
    profile[i] = Math.min(profile[i], Math.sqrt(profile[i - 1] * profile[i - 1] + 2 * ACCEL_ACC * ds));
  }
  for (let i = 0; i <= N; i++) {
    const next = profile[Math.min(N, i + 1)];
    const dv = next - profile[i];
    lineState[i] = dv < -0.045 ? 1 : dv > 0.045 ? 2 : 0;
  }

  // deslocamento da linha ideal: por dentro da curva
  const lineOff = new Float32Array(N + 1);
  for (let i = 0; i <= N; i++) {
    let sum = 0;
    for (let j = -5; j <= 5; j++) sum += kappa[Math.max(0, Math.min(N, i + j))];
    lineOff[i] = Math.max(-2.4, Math.min(2.4, (sum / 11) * 120));
  }

  // curvas (para o HUD de aviso)
  const corners = [];
  let inCorner = false;
  let corner = null;
  for (let i = startIdx; i <= N; i++) {
    const k = Math.abs(kappa[i]);
    if (k > 0.0105) {
      if (!inCorner) {
        inCorner = true;
        corner = { entry: i * ds, apex: i * ds, exit: i * ds, radius: 1 / k, dir: Math.sign(kappa[i]), speed: profile[i] };
      }
      if (k > 1 / corner.radius) {
        corner.radius = 1 / k;
        corner.apex = i * ds;
        corner.speed = profile[i];
      }
      corner.exit = i * ds;
    } else if (inCorner) {
      inCorner = false;
      if (corner.exit - corner.entry > 14) corners.push(corner);
    }
  }
  if (inCorner) corners.push(corner);

  // ---------- helpers de geometria ----------
  const lerp = (a, b, t) => a + (b - a) * t;

  function frameAt(sWorld, out = {}) {
    const u = Math.max(0, Math.min(N - 0.0001, sWorld / ds));
    const i = Math.floor(u);
    const f = u - i;
    const tx = lerp(tanX[i], tanX[i + 1], f);
    const tz = lerp(tanZ[i], tanZ[i + 1], f);
    const inv = 1 / (Math.hypot(tx, tz) || 1);
    out.x = lerp(pts[i].x, pts[i + 1].x, f);
    out.z = lerp(pts[i].z, pts[i + 1].z, f);
    out.tx = tx * inv;
    out.tz = tz * inv;
    out.nx = out.tz; // normal à direita
    out.nz = -out.tx;
    out.heading = Math.atan2(out.tx, out.tz);
    out.kappa = lerp(kappa[i], kappa[i + 1], f);
    out.s = sWorld;
    return out;
  }

  function strip(offset, width, y, uvScale = 0) {
    const positions = [];
    const uvs = [];
    const indices = [];
    for (let i = 0; i <= N; i++) {
      const nx = tanZ[i];
      const nz = -tanX[i];
      const cx = pts[i].x + nx * offset;
      const cz = pts[i].z + nz * offset;
      positions.push(cx + nx * (-width / 2), y, cz + nz * (-width / 2));
      positions.push(cx + nx * (width / 2), y, cz + nz * (width / 2));
      uvs.push(0, i * ds * (uvScale || 1 / 9), 1, i * ds * (uvScale || 1 / 9));
      if (i < N) {
        const a = i * 2;
        indices.push(a, a + 2, a + 1, a + 1, a + 2, a + 3);
      }
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.Float32BufferAttribute(positions, 3));
    geo.setAttribute("uv", new THREE.Float32BufferAttribute(uvs, 2));
    geo.setIndex(indices);
    geo.computeVertexNormals();
    return geo;
  }

  function wallStrip(offset, height, y0 = 0) {
    const positions = [];
    const uvs = [];
    const indices = [];
    for (let i = 0; i <= N; i++) {
      const nx = tanZ[i];
      const nz = -tanX[i];
      const cx = pts[i].x + nx * offset;
      const cz = pts[i].z + nz * offset;
      positions.push(cx, y0, cz);
      positions.push(cx, y0 + height, cz);
      uvs.push(i * ds * 0.2, 0, i * ds * 0.2, 1);
      if (i < N) {
        const a = i * 2;
        indices.push(a, a + 1, a + 2, a + 1, a + 3, a + 2);
      }
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.Float32BufferAttribute(positions, 3));
    geo.setAttribute("uv", new THREE.Float32BufferAttribute(uvs, 2));
    geo.setIndex(indices);
    geo.computeVertexNormals();
    return geo;
  }

  // ---------- chão ----------
  const bounds = new THREE.Box3().setFromPoints(pts);
  const centerX = (bounds.min.x + bounds.max.x) / 2;
  const centerZ = (bounds.min.z + bounds.max.z) / 2;
  const sizeX = bounds.max.x - bounds.min.x + 900;
  const sizeZ = bounds.max.z - bounds.min.z + 900;
  const ground = new THREE.Mesh(
    new THREE.PlaneGeometry(sizeX, sizeZ),
    new THREE.MeshStandardMaterial({ color: 0x08090e, roughness: 1, metalness: 0 })
  );
  ground.rotation.x = -Math.PI / 2;
  ground.position.set(centerX, -0.06, centerZ);
  ground.receiveShadow = true;
  group.add(ground);

  // ombreira
  const shoulder = new THREE.Mesh(
    strip(0, HALF * 2 + 9, -0.015),
    new THREE.MeshStandardMaterial({ color: 0x14141b, roughness: 0.97 })
  );
  shoulder.receiveShadow = true;
  group.add(shoulder);

  // asfalto
  const asphalt = asphaltTexture();
  asphalt.wrapS = asphalt.wrapT = THREE.RepeatWrapping;
  const road = new THREE.Mesh(
    strip(0, HALF * 2, 0),
    new THREE.MeshStandardMaterial({ map: asphalt, color: 0xa9a9b2, roughness: 0.92, metalness: 0.02 })
  );
  road.receiveShadow = true;
  group.add(road);

  // faixas
  const whiteMat = new THREE.MeshStandardMaterial({ color: 0xd9d6c9, roughness: 0.7, emissive: 0x22221e, emissiveIntensity: 0.5 });
  const yellowMat = new THREE.MeshStandardMaterial({ color: 0xd8b42a, roughness: 0.7, emissive: 0x3a2c00, emissiveIntensity: 0.6 });
  for (const sx of [-1, 1]) {
    const edge = new THREE.Mesh(strip(sx * (HALF - 0.35), 0.16, 0.012), whiteMat);
    group.add(edge);
    const curb = curbMesh(sx * (HALF + 0.42), 0.85);
    group.add(curb);
  }
  for (const offset of [-0.18, 0.18]) {
    group.add(new THREE.Mesh(strip(offset, 0.1, 0.013), yellowMat));
  }

  // zebra de largada/chegada
  const checker = checkerTexture();
  for (const sWorld of [START_S, FINISH_S]) {
    const f = frameAt(sWorld);
    const g = new THREE.Group();
    g.position.set(f.x, 0.02, f.z);
    g.rotation.y = f.heading;
    const line = new THREE.Mesh(
      new THREE.PlaneGeometry(HALF * 2, 1.2),
      new THREE.MeshBasicMaterial({ map: checker })
    );
    line.rotation.x = -Math.PI / 2;
    g.add(line);
    group.add(g);
  }

  function curbMesh(offset, width) {
    const positions = [];
    const colors = [];
    const indices = [];
    for (let i = 0; i <= N; i++) {
      const nx = tanZ[i];
      const nz = -tanX[i];
      const cx = pts[i].x + nx * offset;
      const cz = pts[i].z + nz * offset;
      positions.push(cx + nx * (-width / 2), 0.018, cz + nz * (-width / 2));
      positions.push(cx + nx * (width / 2), 0.018, cz + nz * (width / 2));
      const on = Math.floor((i * ds) / 3) % 2 === 0;
      const c = on ? [0.85, 0.11, 0.12] : [0.8, 0.78, 0.74];
      colors.push(...c, ...c);
      if (i < N) {
        const a = i * 2;
        indices.push(a, a + 2, a + 1, a + 1, a + 2, a + 3);
      }
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.Float32BufferAttribute(positions, 3));
    geo.setAttribute("color", new THREE.Float32BufferAttribute(colors, 3));
    geo.setIndex(indices);
    geo.computeVertexNormals();
    return new THREE.Mesh(geo, new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.75 }));
  }

  // linha de freio / aceleração pintada no asfalto
  {
    const positions = [];
    const colors = [];
    const indices = [];
    for (let i = 0; i <= finishIdx; i++) {
      const nx = tanZ[i];
      const nz = -tanX[i];
      const cx = pts[i].x + nx * lineOff[i];
      const cz = pts[i].z + nz * lineOff[i];
      const w = 0.19;
      positions.push(cx + nx * -w, 0.035, cz + nz * -w, cx + nx * w, 0.035, cz + nz * w);
      const st = lineState[i];
      const c = st === 1 ? [1.0, 0.10, 0.07] : st === 2 ? [0.10, 1.0, 0.34] : [1.0, 0.62, 0.06];
      const a = st === 0 ? 0.28 : 0.85;
      colors.push(c[0] * a, c[1] * a, c[2] * a, c[0] * a, c[1] * a, c[2] * a);
      if (i < finishIdx) {
        const a2 = i * 2;
        indices.push(a2, a2 + 2, a2 + 1, a2 + 1, a2 + 2, a2 + 3);
      }
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.Float32BufferAttribute(positions, 3));
    geo.setAttribute("color", new THREE.Float32BufferAttribute(colors, 3));
    geo.setIndex(indices);
    const mat = new THREE.MeshBasicMaterial({
      vertexColors: true, transparent: true, opacity: 0.9, depthWrite: false,
      blending: THREE.AdditiveBlending, toneMapped: false,
    });
    const line = new THREE.Mesh(geo, mat);
    line.renderOrder = 2;
    group.add(line);
  }

  // ---------- muros ----------
  const railMat = new THREE.MeshStandardMaterial({ color: 0x23242c, roughness: 0.55, metalness: 0.6, side: THREE.DoubleSide });
  const chromeMat = new THREE.MeshStandardMaterial({ color: 0x50525d, roughness: 0.32, metalness: 0.85 });
  for (const sx of [-1, 1]) {
    const wall = new THREE.Mesh(wallStrip(sx * WALL, 0.95), railMat);
    wall.receiveShadow = true;
    group.add(wall);
    const rail = new THREE.Mesh(strip(sx * WALL, 0.32, 0.96), chromeMat);
    group.add(rail);
    // refletores a cada 20 m
    for (let s = START_S - 50; s < FINISH_S + 60; s += 40) {
      const f = frameAt(s);
      const refl = new THREE.Mesh(
        new THREE.BoxGeometry(0.26, 0.08, 0.05),
        new THREE.MeshBasicMaterial({ color: sx > 0 ? 0xffd319 : 0x37e6ff })
      );
      refl.position.set(f.x + f.nx * (sx * (WALL - 0.03)), 0.72, f.z + f.nz * (sx * (WALL - 0.03)));
      refl.rotation.y = f.heading;
      group.add(refl);
    }
  }

  // ---------- letreiros nos muros ----------
  const bannerTexts = [
    ["DRAG BRASIL", "#0b0b12", "#ffd319", "#ff5a12"],
    ["RUA É RUA", "#101018", "#37e6ff", "#1b63ff"],
    ["TURBO", "#120c08", "#ff8a3d", "#ff5a12"],
    ["FREIA ANTES", "#0b0f0c", "#2dff86", "#1f9c55"],
    ["SEM MEDO", "#0e0a12", "#e8e6df", "#8c2bff"],
    ["ÚLTIMA RETA", "#0f0b0b", "#ff2e4d", "#7d0719"],
  ];
  for (let i = 0; i < 34; i++) {
    const s = START_S - 20 + i * Math.max(34, RACE_LENGTH / 30);
    if (s > FINISH_S + 30) break;
    const f = frameAt(s);
    const side = i % 2 ? 1 : -1;
    const g = new THREE.Group();
    g.position.set(f.x, 0, f.z);
    g.rotation.y = f.heading;
    const sign = new THREE.Mesh(
      new THREE.PlaneGeometry(7.5, 0.7),
      new THREE.MeshBasicMaterial({ map: bannerTexture(...bannerTexts[i % bannerTexts.length]), transparent: true })
    );
    sign.position.set(side * (WALL - 0.02), 0.5, 0);
    sign.rotation.y = side > 0 ? -Math.PI / 2 : Math.PI / 2;
    g.add(sign);
    group.add(g);
  }

  // ---------- postes de luz ----------
  const poolTex = lightPoolTexture();
  const glowTex = glowTexture();
  const poleMat = new THREE.MeshStandardMaterial({ color: 0x1d1e25, roughness: 0.6, metalness: 0.6 });
  const bulbMat = new THREE.MeshStandardMaterial({ color: 0xfff4d0, emissive: 0xfff1c8, emissiveIntensity: 4.2, roughness: 0.3 });
  let lightCount = 0;
  for (let s = START_S - 60; s < FINISH_S + 120; s += 52) {
    const f = frameAt(s);
    for (const sx of [-1, 1]) {
      if ((Math.round(s / 52) + (sx > 0 ? 1 : 0)) % 2 === 0) continue;
      const g = new THREE.Group();
      g.position.set(f.x + f.nx * (sx * (WALL + 3.6)), 0, f.z + f.nz * (sx * (WALL + 3.6)));
      g.rotation.y = f.heading;
      const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.18, 8.6, 8), poleMat);
      pole.position.y = 4.3;
      g.add(pole);
      const arm = new THREE.Mesh(new THREE.BoxGeometry(-sx * 2.2, 0.1, 0.1), poleMat);
      arm.position.set(-sx * 1.05, 8.5, 0);
      g.add(arm);
      const lamp = new THREE.Mesh(new THREE.BoxGeometry(1.1, 0.1, 0.46), bulbMat);
      lamp.position.set(-sx * 2.0, 8.44, 0);
      g.add(lamp);
      const halo = new THREE.Sprite(new THREE.SpriteMaterial({
        map: glowTex, color: 0xffe6b0, transparent: true, opacity: 0.55,
        blending: THREE.AdditiveBlending, depthWrite: false,
      }));
      halo.scale.set(7, 5, 1);
      halo.position.set(-sx * 2.0, 8.2, 0);
      g.add(halo);
      const pool = new THREE.Mesh(
        new THREE.PlaneGeometry(24, 24),
        new THREE.MeshBasicMaterial({ map: poolTex, transparent: true, opacity: 0.35, blending: THREE.AdditiveBlending, depthWrite: false })
      );
      pool.rotation.x = -Math.PI / 2;
      pool.position.set(-sx * 2.4, 0.03, 0);
      g.add(pool);
      group.add(g);
      if (lightCount++ % 8 === 0 && Math.abs(s - START_S) < RACE_LENGTH) {
        const pl = new THREE.PointLight(0xffe3b0, 260, 60, 2);
        pl.position.set(f.x + f.nx * (sx * (WALL + 2)), 8.2, f.z + f.nz * (sx * (WALL + 2)));
        group.add(pl);
      }
    }
  }

  // ---------- placas de freada ----------
  const brakeBoards = [];
  for (let i = startIdx + 8; i < finishIdx - 8; i++) {
    if (lineState[i] !== 1 || lineState[i - 1] === 1) continue;
    if (profile[i] > 27) continue;
    if (brakeBoards.some((b) => Math.abs(b - i * ds) < 90)) continue;
    brakeBoards.push(i * ds);
    if (brakeBoards.length >= 7) break;
  }
  for (const s of brakeBoards) {
    const f = frameAt(s - 16);
    const tex = signTexture("FREIA", `${Math.round(profile[Math.round(s / ds)] * 3.6)} km/h`);
    for (const sx of [-1, 1]) {
      const g = new THREE.Group();
      g.position.set(f.x, 0, f.z);
      g.rotation.y = f.heading;
      const panel = new THREE.Mesh(
        new THREE.PlaneGeometry(2.3, 2.3),
        new THREE.MeshBasicMaterial({ map: tex, transparent: true })
      );
      panel.position.set(sx * (WALL + 1.0), 2.0, 0);
      panel.rotation.y = sx > 0 ? -Math.PI / 2 : Math.PI / 2;
      g.add(panel);
      const post = new THREE.Mesh(new THREE.BoxGeometry(0.12, 1.0, 0.12), railMat);
      post.position.set(sx * (WALL + 1.0), 0.5, 0);
      g.add(post);
      group.add(g);
    }
  }

  // ---------- placas de distância ----------
  for (let m = 300; m < RACE_LENGTH; m += 300) {
    const f = frameAt(START_S + m);
    const tex = signTexture(`${m}m`, "CORRIDA DE RUA");
    for (const sx of [-1, 1]) {
      const panel = new THREE.Mesh(new THREE.PlaneGeometry(2.1, 2.1), new THREE.MeshBasicMaterial({ map: tex }));
      panel.position.set(f.x + f.nx * (sx * (WALL + 1.0)), 1.9, f.z + f.nz * (sx * (WALL + 1.0)));
      panel.rotation.y = f.heading + (sx > 0 ? -Math.PI / 2 : Math.PI / 2);
      group.add(panel);
    }
  }

  // ---------- árvore de largada ----------
  const treeGroup = new THREE.Group();
  const startFrame = frameAt(START_S + 11.5);
  treeGroup.position.set(startFrame.x, 0, startFrame.z);
  treeGroup.rotation.y = startFrame.heading;
  treeGroup.scale.set(1.15, 1, 1.15);
  const treePole = new THREE.Mesh(new THREE.CylinderGeometry(0.075, 0.1, 3.2, 8), new THREE.MeshStandardMaterial({ color: 0x15151c, roughness: 0.5, metalness: 0.7 }));
  treePole.position.y = 1.6;
  treeGroup.add(treePole);
  const treeBase = new THREE.Mesh(new THREE.BoxGeometry(0.8, 0.12, 0.8), railMat);
  treeBase.position.y = 0.06;
  treeGroup.add(treeBase);
  const treeFace = new THREE.Mesh(new THREE.BoxGeometry(0.46, 1.95, 0.16), new THREE.MeshStandardMaterial({ color: 0x08080c, roughness: 0.35, metalness: 0.4 }));
  treeFace.position.set(0, 2.35, 0.02);
  treeGroup.add(treeFace);

  const bulbGeo = new THREE.SphereGeometry(0.135, 12, 12);
  const treeBulbs = {};
  function addBulb(key, y, color) {
    const mat = new THREE.MeshStandardMaterial({ color: 0x15151c, emissive: color, emissiveIntensity: 0.06, roughness: 0.25 });
    const b = new THREE.Mesh(bulbGeo, mat);
    b.position.set(0, y, 0.13);
    treeGroup.add(b);
    const halo = new THREE.Sprite(new THREE.SpriteMaterial({
      map: glowTex, color, transparent: true, opacity: 0,
      blending: THREE.AdditiveBlending, depthWrite: false,
    }));
    halo.scale.set(0.52, 0.52, 1);
    halo.position.set(0, y, 0.22);
    treeGroup.add(halo);
    treeBulbs[key] = { mesh: b, mat, halo, color };
  }
  addBulb("a1", 3.02, 0xffa400);
  addBulb("a2", 2.76, 0xffa400);
  addBulb("a3", 2.5, 0xffa400);
  addBulb("green", 2.18, 0x2dff86);
  addBulb("red", 1.86, 0xff2e4d);
  group.add(treeGroup);

  // ---------- pórtico de largada ----------
  {
    const f = frameAt(START_S - 1);
    const g = new THREE.Group();
    g.position.set(f.x, 0, f.z);
    g.rotation.y = f.heading;
    for (const sx of [-1, 1]) {
      const pillar = new THREE.Mesh(new THREE.BoxGeometry(0.45, 7.4, 0.45), railMat);
      pillar.position.set(sx * (WALL + 1.4), 3.7, 0);
      pillar.castShadow = true;
      g.add(pillar);
    }
    const truss = new THREE.Mesh(new THREE.BoxGeometry((WALL + 1.4) * 2 + 0.5, 0.35, 0.45), railMat);
    truss.position.y = 7.3;
    g.add(truss);
    const logoCanvas = document.createElement("canvas");
    logoCanvas.width = 1024;
    logoCanvas.height = 256;
    const lc = logoCanvas.getContext("2d");
    lc.fillStyle = "#06060a";
    lc.fillRect(0, 0, 1024, 256);
    lc.strokeStyle = "#ff5a12";
    lc.lineWidth = 8;
    lc.strokeRect(8, 8, 1008, 240);
    lc.fillStyle = "#ffd319";
    lc.font = "italic 900 132px Arial, Helvetica, sans-serif";
    lc.textAlign = "center";
    lc.textBaseline = "middle";
    lc.fillText("DRAG BRASIL", 512, 118);
    lc.fillStyle = "#ff5a12";
    lc.font = "700 30px Arial, Helvetica, sans-serif";
    lc.fillText("R U A   ·   S E M   L I M I T E", 512, 208);
    const logoTex = new THREE.CanvasTexture(logoCanvas);
    logoTex.colorSpace = THREE.SRGBColorSpace;
    const logo = new THREE.Mesh(new THREE.PlaneGeometry(13, 3.2), new THREE.MeshBasicMaterial({ map: logoTex, transparent: true }));
    logo.position.set(0, 5.6, -0.28);
    logo.rotation.y = Math.PI;
    g.add(logo);
    const logoGlow = new THREE.Sprite(new THREE.SpriteMaterial({ map: glowTex, color: 0xff8a2a, transparent: true, opacity: 0.5, blending: THREE.AdditiveBlending, depthWrite: false }));
    logoGlow.scale.set(20, 9, 1);
    logoGlow.position.set(0, 5.6, -0.4);
    g.add(logoGlow);
    group.add(g);
    group.userData.logoGlow = logoGlow;
  }

  // ---------- pórtico de chegada ----------
  const finishBanner = bannerTexture(`CHEGADA · ${(RACE_LENGTH / 1000).toFixed(2)} km`, "#0a0a10", "#ffd319", "#ff2e4d");
  const finishLights = [];
  {
    const f = frameAt(FINISH_S);
    const g = new THREE.Group();
    g.position.set(f.x, 0, f.z);
    g.rotation.y = f.heading;
    for (const sx of [-1, 1]) {
      const pillar = new THREE.Mesh(new THREE.BoxGeometry(0.55, 8, 0.55), railMat);
      pillar.position.set(sx * (WALL + 0.2), 4, 0);
      pillar.castShadow = true;
      g.add(pillar);
    }
    const truss = new THREE.Mesh(new THREE.BoxGeometry(WALL * 2 + 2, 0.4, 0.5), railMat);
    truss.position.y = 7.9;
    g.add(truss);
    const fb = new THREE.Mesh(new THREE.PlaneGeometry(15, 2.5), new THREE.MeshBasicMaterial({ map: finishBanner, transparent: true }));
    fb.position.set(0, 6.55, -0.3);
    fb.rotation.y = Math.PI;
    g.add(fb);
    for (let i = 0; i < 9; i++) {
      const bulb = new THREE.Mesh(new THREE.SphereGeometry(0.15, 8, 8), new THREE.MeshBasicMaterial({ color: 0xffd319 }));
      bulb.position.set(-7 + i * 1.75, 8.12, -0.28);
      g.add(bulb);
      finishLights.push(bulb);
    }
    group.add(g);
  }

  // ---------- arquibancada na largada ----------
  const standMat = new THREE.MeshStandardMaterial({ color: 0x121219, roughness: 0.9 });
  const crowd = crowdTexture();
  const crowdMat = new THREE.MeshBasicMaterial({ map: crowd, transparent: true, opacity: 0.55, color: 0x8a8a99 });
  {
    const f = frameAt(START_S - 12);
    for (const sx of [-1, 1]) {
      const g = new THREE.Group();
      g.position.set(f.x, 0, f.z);
      g.rotation.y = f.heading;
      for (let i = 0; i < 4; i++) {
        const step = new THREE.Mesh(new THREE.BoxGeometry(5, 1.0, 2.4), standMat);
        step.position.set(sx * (WALL + 7 + i * 1.8), 0.5 + i * 1.0, 0);
        step.receiveShadow = true;
        g.add(step);
        const people = new THREE.Mesh(new THREE.PlaneGeometry(24, 0.9), crowdMat);
        people.rotation.y = sx > 0 ? -Math.PI / 2 : Math.PI / 2;
        people.position.set(sx * (WALL + 6 + i * 1.8), 0.95 + i * 1.0, 0);
        g.add(people);
      }
      group.add(g);
    }
  }

  // ---------- prédios da cidade ----------
  const winTex = windowsTexture();
  const buildingMats = [0.55, 0.8, 1.1].map((e) => new THREE.MeshStandardMaterial({
    color: 0x0a0b12, roughness: 0.9, metalness: 0.2,
    map: winTex, emissiveMap: winTex, emissive: 0xffffff, emissiveIntensity: e,
  }));
  const rr = (a, b) => a + Math.random() * (b - a);
  for (let i = 0; i < 46; i++) {
    const s = START_S - 60 + (RACE_LENGTH + 160) * (i / 45) + rr(-30, 30);
    const f = frameAt(Math.max(0, Math.min(total - 10, s)));
    const side = i % 2 ? 1 : -1;
    const dist = rr(20, 48);
    const w = rr(9, 22);
    const d = rr(9, 20);
    const h = rr(13, 58);
    const b = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), buildingMats[i % 3]);
    b.position.set(f.x + f.nx * side * dist, h / 2 - 0.5, f.z + f.nz * side * dist);
    b.rotation.y = f.heading + rr(-0.25, 0.25);
    group.add(b);
    // base iluminada (loja)
    const base = new THREE.Mesh(
      new THREE.BoxGeometry(w * 0.9, 1.6, 0.15),
      new THREE.MeshBasicMaterial({ color: i % 3 === 0 ? 0xffb15a : i % 3 === 1 ? 0x37e6ff : 0xff5a12, transparent: true, opacity: 0.45 })
    );
    base.position.set(f.x + f.nx * side * (dist - d / 2 - 0.1), 1.2, f.z + f.nz * side * (dist - d / 2 - 0.1));
    base.rotation.y = f.heading;
    group.add(base);
  }

  // ---------- céu ----------
  const starsGeo = new THREE.BufferGeometry();
  const starCount = 800;
  const starPos = new Float32Array(starCount * 3);
  for (let i = 0; i < starCount; i++) {
    const r = 320 + Math.random() * 520;
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.random() * Math.PI * 0.42;
    starPos[i * 3] = Math.cos(theta) * Math.cos(phi) * r;
    starPos[i * 3 + 1] = Math.sin(phi) * r + 30;
    starPos[i * 3 + 2] = Math.sin(theta) * Math.cos(phi) * r;
  }
  starsGeo.setAttribute("position", new THREE.BufferAttribute(starPos, 3));
  const stars = new THREE.Points(starsGeo, new THREE.PointsMaterial({ color: 0xcfd8ff, size: 1.7, sizeAttenuation: true, transparent: true, opacity: 0.75, depthWrite: false, fog: false }));
  sky.add(stars);

  const moon = new THREE.Mesh(new THREE.CircleGeometry(16, 40), new THREE.MeshBasicMaterial({ color: 0xf4eeda, fog: false }));
  moon.position.set(-150, 120, -260);
  moon.lookAt(0, 30, 0);
  sky.add(moon);
  const moonGlow = new THREE.Sprite(new THREE.SpriteMaterial({ map: glowTex, color: 0xcfd8ff, transparent: true, opacity: 0.6, blending: THREE.AdditiveBlending, depthWrite: false, fog: false }));
  moonGlow.scale.set(100, 100, 1);
  moonGlow.position.set(-150, 120, -262);
  sky.add(moonGlow);

  // ---------- estado / API ----------
  let treeState = { a: [false, false, false], green: false, red: false };
  function setTree(state) {
    treeState = state;
    const ambers = ["a1", "a2", "a3"];
    for (let i = 0; i < 3; i++) {
      const b = treeBulbs[ambers[i]];
      const on = !!state.a[i];
      b.mat.emissiveIntensity = on ? 7 : 0.06;
      b.halo.material.opacity = on ? 0.85 : 0;
    }
    for (const key of ["green", "red"]) {
      const b = treeBulbs[key];
      const on = key === "green" ? !!state.green : !!state.red;
      b.mat.emissiveIntensity = on ? 7 : 0.05;
      b.halo.material.opacity = on ? 0.9 : 0;
    }
  }
  setTree(treeState);

  const tmpFrame = {};
  function speedAt(sWorld) {
    const idx = Math.max(0, Math.min(N, Math.round(sWorld / ds)));
    return profile[idx];
  }
  function stateAt(sWorld) {
    const idx = Math.max(0, Math.min(N, Math.round(sWorld / ds)));
    return lineState[idx];
  }
  function nextCorner(sWorld) {
    let out = null;
    for (const c of corners) {
      if (c.exit > sWorld + 4) {
        if (!out || c.entry < out.entry) out = c;
      }
    }
    return out;
  }
  function placeAt(obj, sWorld, lateral, bank = 0) {
    const f = frameAt(sWorld);
    obj.position.set(f.x + f.nx * lateral, 0, f.z + f.nz * lateral);
    obj.rotation.set(0, f.heading, bank, "YXZ");
    return f;
  }

  const startF = frameAt(START_S);
  const api = {
    group,
    sky,
    setTree,
    update(t) {
      if (group.userData.logoGlow) group.userData.logoGlow.material.opacity = 0.45 + Math.sin(t * 1.7) * 0.08;
      for (const b of finishLights) b.material.color.setHSL(0.13, 1, 0.55 + Math.sin(t * 3 + b.position.x) * 0.05);
    },
    LANE,
    HALF_WIDTH: HALF,
    LENGTH: total,
    START_S,
    FINISH_S,
    FINISH: RACE_LENGTH,
    frameAt,
    speedAt,
    stateAt,
    nextCorner,
    placeAt,
    corners,
    startPos: { x: startF.x, z: startF.z, heading: startF.heading },
    treePosition: new THREE.Vector3(startFrame.x, 2.4, startFrame.z),
    raceLine: { profiles: profile, states: lineState, ds },
  };
  return api;
}
