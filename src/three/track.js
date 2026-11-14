import * as THREE from "three";
import {
  asphaltTexture, checkerTexture, bannerTexture, signTexture,
  windowsTexture, glowTexture, lightPoolTexture, crowdTexture,
} from "./textures.js";

const LANE = 4.2;
const FINISH = 402.336;

export function buildTrack() {
  const group = new THREE.Group();
  const animated = [];

  // ---- chão ----
  const ground = new THREE.Mesh(
    new THREE.PlaneGeometry(900, 1200),
    new THREE.MeshStandardMaterial({ color: 0x090a0f, roughness: 1, metalness: 0 })
  );
  ground.rotation.x = -Math.PI / 2;
  ground.position.set(0, -0.04, 220);
  ground.receiveShadow = true;
  group.add(ground);

  // faixa de asfalto
  const asphalt = asphaltTexture();
  const strip = new THREE.Mesh(
    new THREE.PlaneGeometry(20, 620),
    new THREE.MeshStandardMaterial({ map: asphalt, color: 0xa7a7b0, roughness: 0.92, metalness: 0.02 })
  );
  strip.rotation.x = -Math.PI / 2;
  strip.position.set(0, 0, 240);
  strip.receiveShadow = true;
  group.add(strip);

  // acostamento / concreto
  for (const sx of [-1, 1]) {
    const shoulder = new THREE.Mesh(
      new THREE.PlaneGeometry(6, 620),
      new THREE.MeshStandardMaterial({ color: 0x15151b, roughness: 0.95 })
    );
    shoulder.rotation.x = -Math.PI / 2;
    shoulder.position.set(sx * 13, -0.01, 240);
    group.add(shoulder);
  }

  // área de fuga
  const sand = new THREE.Mesh(
    new THREE.PlaneGeometry(30, 120),
    new THREE.MeshStandardMaterial({ color: 0x3a3026, roughness: 1 })
  );
  sand.rotation.x = -Math.PI / 2;
  sand.position.set(0, -0.005, 530);
  group.add(sand);

  // ---- linhas ----
  const lineMat = new THREE.MeshStandardMaterial({ color: 0xdad7cc, roughness: 0.7, emissive: 0x2a2a26, emissiveIntensity: 0.4 });
  const yellowMat = new THREE.MeshStandardMaterial({ color: 0xd6b227, roughness: 0.75, emissive: 0x3a2c00, emissiveIntensity: 0.5 });

  for (const sx of [-1, 1]) {
    const edge = new THREE.Mesh(new THREE.PlaneGeometry(0.16, 600), lineMat);
    edge.rotation.x = -Math.PI / 2;
    edge.position.set(sx * 9.7, 0.012, 240);
    group.add(edge);
  }
  for (const x of [-0.16, 0.16]) {
    const center = new THREE.Mesh(new THREE.PlaneGeometry(0.1, 600), yellowMat);
    center.rotation.x = -Math.PI / 2;
    center.position.set(x, 0.013, 240);
    group.add(center);
  }

  // linha de largada e chegada
  const checker = checkerTexture();
  for (const [z, w] of [[0, 20], [FINISH, 20]]) {
    const line = new THREE.Mesh(
      new THREE.PlaneGeometry(w, 1.1),
      new THREE.MeshBasicMaterial({ map: checker })
    );
    line.rotation.x = -Math.PI / 2;
    line.position.set(0, 0.02, z);
    group.add(line);
  }

  // posições de largada
  for (const lane of [-1, 1]) {
    const box = new THREE.Mesh(
      new THREE.PlaneGeometry(1.2, 6),
      new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.07 })
    );
    box.rotation.x = -Math.PI / 2;
    box.position.set(lane * LANE, 0.015, -3.5);
    group.add(box);
  }

  // ---- muros e placas ----
  const railMat = new THREE.MeshStandardMaterial({ color: 0x23242c, roughness: 0.55, metalness: 0.6 });
  for (const sx of [-1, 1]) {
    const rail = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.85, 560), railMat);
    rail.position.set(sx * 11.8, 0.42, 220);
    rail.castShadow = false;
    rail.receiveShadow = true;
    group.add(rail);
    const railTop = new THREE.Mesh(new THREE.BoxGeometry(0.26, 0.09, 560), new THREE.MeshStandardMaterial({ color: 0x44454f, roughness: 0.4, metalness: 0.7 }));
    railTop.position.set(sx * 11.8, 0.87, 220);
    group.add(railTop);
    // postes do guard-rail
    for (let z = -20; z < 500; z += 12) {
      const post = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.85, 0.1), railMat);
      post.position.set(sx * 11.95, 0.42, z);
      group.add(post);
    }
  }

  // banners nos muros
  const bannerTexts = [
    ["DRAG BRASIL", "#0b0b12", "#ffd319", "#ff5a12"],
    ["NITRO", "#101018", "#37e6ff", "#1b63ff"],
    ["TURBO", "#120c08", "#ff8a3d", "#ff5a12"],
    ["GASOLINA", "#0b0f0c", "#2dff86", "#1f9c55"],
    ["PNEU FUDIDO", "#0e0a12", "#e8e6df", "#8c2bff"],
    ["402 METROS", "#0f0b0b", "#ff2e4d", "#7d0719"],
  ];
  for (let i = 0; i < 18; i++) {
    const z = -16 + i * 26;
    if (z > 410) break;
    const tex = bannerTexture(...bannerTexts[i % bannerTexts.length]);
    for (const sx of [-1, 1]) {
      if ((i + (sx > 0 ? 1 : 0)) % 3 === 0) continue;
      const sign = new THREE.Mesh(
        new THREE.PlaneGeometry(9, 0.8),
        new THREE.MeshBasicMaterial({ map: tex, transparent: true })
      );
      sign.position.set(sx * 11.7, 0.48, z);
      sign.rotation.y = sx > 0 ? -Math.PI / 2 : Math.PI / 2;
      group.add(sign);
    }
  }

  // ---- postes de iluminação ----
  const poolTex = lightPoolTexture();
  const poleMat = new THREE.MeshStandardMaterial({ color: 0x1d1e25, roughness: 0.6, metalness: 0.6 });
  const bulbMat = new THREE.MeshStandardMaterial({ color: 0xfff4d0, emissive: 0xfff1c8, emissiveIntensity: 4.5, roughness: 0.3 });
  const glowTex = glowTexture();
  for (let z = -30; z < 480; z += 48) {
    for (const sx of [-1, 1]) {
      const x = sx * 15.5;
      const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.14, 0.2, 9, 8), poleMat);
      pole.position.set(x, 4.5, z);
      group.add(pole);
      const arm = new THREE.Mesh(new THREE.BoxGeometry(2.4, 0.12, 0.12), poleMat);
      arm.position.set(x - sx * 1.1, 8.9, z);
      group.add(arm);
      const lamp = new THREE.Mesh(new THREE.BoxGeometry(1.1, 0.12, 0.5), bulbMat);
      lamp.position.set(x - sx * 2.1, 8.82, z);
      group.add(lamp);
      const halo = new THREE.Sprite(new THREE.SpriteMaterial({
        map: glowTex, color: 0xffe6b0, transparent: true, opacity: 0.55,
        blending: THREE.AdditiveBlending, depthWrite: false,
      }));
      halo.scale.set(7, 5, 1);
      halo.position.set(x - sx * 2.1, 8.6, z);
      group.add(halo);

      const pool = new THREE.Mesh(
        new THREE.PlaneGeometry(26, 26),
        new THREE.MeshBasicMaterial({ map: poolTex, transparent: true, opacity: 0.4, blending: THREE.AdditiveBlending, depthWrite: false })
      );
      pool.rotation.x = -Math.PI / 2;
      pool.position.set(x - sx * 3, 0.03, z);
      group.add(pool);
    }
  }

  // luzes de verdade perto do jogador (baratas)
  const lightZ = [10, 150, 300, 405];
  for (const z of lightZ) {
    const pl = new THREE.PointLight(0xffe3b0, 320, 75, 2);
    pl.position.set(0, 9, z);
    group.add(pl);
  }

  // ---- arquibancada ----
  const standMat = new THREE.MeshStandardMaterial({ color: 0x121219, roughness: 0.9 });
  const crowd = crowdTexture();
  const crowdMat = new THREE.MeshBasicMaterial({ map: crowd, transparent: true, opacity: 0.55, color: 0x8a8a99 });
  for (const sx of [-1, 1]) {
    const stand = new THREE.Group();
    for (let i = 0; i < 5; i++) {
      const step = new THREE.Mesh(new THREE.BoxGeometry(6, 1.1, 2.6), standMat);
      step.position.set(sx * (24 + i * 1.9), 0.55 + i * 1.1, -8);
      step.receiveShadow = true;
      stand.add(step);
      const people = new THREE.Mesh(new THREE.PlaneGeometry(26, 1.0), crowdMat);
      people.rotation.y = sx > 0 ? -Math.PI / 2 : Math.PI / 2;
      people.position.set(sx * (23 + i * 1.9), 1.0 + i * 1.1, -8);
      stand.add(people);
    }
    const roof = new THREE.Mesh(new THREE.BoxGeometry(10, 0.16, 28), standMat);
    roof.position.set(sx * 28, 8.6, -8);
    stand.add(roof);
    for (let z = -20; z <= 4; z += 12) {
      const col = new THREE.Mesh(new THREE.BoxGeometry(0.24, 8.5, 0.24), standMat);
      col.position.set(sx * 23, 4.3, z);
      stand.add(col);
    }
    group.add(stand);
  }

  // ---- letreiro de entrada ----
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
  lc.fillText("A R R A N C A D A   N O T U R N A", 512, 208);
  const logoTex = new THREE.CanvasTexture(logoCanvas);
  logoTex.colorSpace = THREE.SRGBColorSpace;
  const logo = new THREE.Mesh(new THREE.PlaneGeometry(24, 6), new THREE.MeshBasicMaterial({ map: logoTex, transparent: true }));
  logo.position.set(0, 9, -42);
  group.add(logo);
  const logoGlow = new THREE.Sprite(new THREE.SpriteMaterial({ map: glowTex, color: 0xff8a2a, transparent: true, opacity: 0.55, blending: THREE.AdditiveBlending, depthWrite: false }));
  logoGlow.scale.set(34, 16, 1);
  logoGlow.position.set(0, 9, -43);
  group.add(logoGlow);
  for (const sx of [-1, 1]) {
    const leg = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.28, 9, 8), poleMat);
    leg.position.set(sx * 11, 4.5, -42.5);
    group.add(leg);
  }

  // ---- placas de distância ----
  const distSigns = [
    [100, "100m"],
    [200, "200m"],
    [300, "300m"],
  ];
  for (const [z, txt] of distSigns) {
    const tex = signTexture(txt, "DISTÂNCIA");
    for (const sx of [-1, 1]) {
      const panel = new THREE.Mesh(new THREE.PlaneGeometry(2.4, 2.4), new THREE.MeshBasicMaterial({ map: tex }));
      panel.position.set(sx * 12.6, 2.1, z);
      panel.rotation.y = sx > 0 ? -Math.PI / 3 : Math.PI / 3;
      group.add(panel);
      const post = new THREE.Mesh(new THREE.BoxGeometry(0.12, 1.3, 0.12), railMat);
      post.position.set(sx * 12.6, 0.65, z);
      group.add(post);
    }
  }

  // ---- pórtico de chegada ----
  const finishBanner = bannerTexture("CHEGADA · 402 m", "#0a0a10", "#ffd319", "#ff2e4d");
  for (const sx of [-1, 1]) {
    const pillar = new THREE.Mesh(new THREE.BoxGeometry(0.55, 8, 0.55), railMat);
    pillar.position.set(sx * 11, 4, FINISH);
    pillar.castShadow = true;
    group.add(pillar);
  }
  const truss = new THREE.Mesh(new THREE.BoxGeometry(22.5, 0.4, 0.5), railMat);
  truss.position.set(0, 7.9, FINISH);
  group.add(truss);
  const fb = new THREE.Mesh(new THREE.PlaneGeometry(15, 2.6), new THREE.MeshBasicMaterial({ map: finishBanner, transparent: true }));
  fb.position.set(0, 6.6, FINISH - 0.32);
  fb.rotation.y = Math.PI;
  group.add(fb);
  const finishLights = [];
  for (let i = 0; i < 9; i++) {
    const bulb = new THREE.Mesh(new THREE.SphereGeometry(0.16, 8, 8), new THREE.MeshBasicMaterial({ color: 0xffd319 }));
    bulb.position.set(-7 + i * 1.75, 8.15, FINISH - 0.3);
    group.add(bulb);
    finishLights.push(bulb);
  }

  // ---- barreira final ----
  for (let i = 0; i < 16; i++) {
    const barrier = new THREE.Mesh(new THREE.BoxGeometry(1.4, 0.55, 0.6), new THREE.MeshStandardMaterial({ color: i % 2 ? 0xc9c6ba : 0x18181f, roughness: 0.8 }));
    barrier.position.set(-11 + i * 1.45, 0.28, 545);
    group.add(barrier);
  }

  // ---- árvore de largada ----
  const tree = new THREE.Group();
  tree.position.set(0, 0, 11.5);
  tree.scale.set(1.15, 1, 1.15);
  const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.075, 0.1, 3.2, 8), new THREE.MeshStandardMaterial({ color: 0x15151c, roughness: 0.5, metalness: 0.7 }));
  pole.position.y = 1.6;
  tree.add(pole);
  const base = new THREE.Mesh(new THREE.BoxGeometry(0.8, 0.12, 0.8), railMat);
  base.position.y = 0.06;
  tree.add(base);
  const face = new THREE.Mesh(new THREE.BoxGeometry(0.46, 1.95, 0.16), new THREE.MeshStandardMaterial({ color: 0x08080c, roughness: 0.35, metalness: 0.4 }));
  face.position.set(0, 2.35, 0.02);
  tree.add(face);

  const bulbGeo = new THREE.SphereGeometry(0.135, 12, 12);
  const treeBulbs = {};
  function addBulb(key, y, color) {
    const mat = new THREE.MeshStandardMaterial({ color: 0x15151c, emissive: color, emissiveIntensity: 0.06, roughness: 0.25 });
    const b = new THREE.Mesh(bulbGeo, mat);
    b.position.set(0, y, 0.13);
    tree.add(b);
    const halo = new THREE.Sprite(new THREE.SpriteMaterial({
      map: glowTex, color, transparent: true, opacity: 0,
      blending: THREE.AdditiveBlending, depthWrite: false,
    }));
    halo.scale.set(0.52, 0.52, 1);
    halo.position.set(0, y, 0.22);
    tree.add(halo);
    treeBulbs[key] = { mesh: b, mat, halo, color };
    return b;
  }
  addBulb("a1", 3.02, 0xffa400);
  addBulb("a2", 2.76, 0xffa400);
  addBulb("a3", 2.5, 0xffa400);
  addBulb("green", 2.18, 0x2dff86);
  addBulb("red", 1.86, 0xff2e4d);
  group.add(tree);

  // placar lateral
  const tower = new THREE.Group();
  const towerBody = new THREE.Mesh(new THREE.BoxGeometry(1.6, 3.4, 1.2), new THREE.MeshStandardMaterial({ color: 0x0e0e15, roughness: 0.6, metalness: 0.3 }));
  towerBody.position.y = 1.7;
  tower.add(towerBody);
  const screen = new THREE.Mesh(new THREE.PlaneGeometry(1.25, 0.9), new THREE.MeshBasicMaterial({ color: 0x08131a }));
  screen.position.set(0, 2.55, 0.605);
  tower.add(screen);
  tower.position.set(-14.5, 0, 3.5);
  tower.rotation.y = 0.25;
  group.add(tower);

  // ---- céu noturno ----
  const starsGeo = new THREE.BufferGeometry();
  const starCount = 900;
  const positions = new Float32Array(starCount * 3);
  const sizes = new Float32Array(starCount);
  for (let i = 0; i < starCount; i++) {
    const r = 300 + Math.random() * 500;
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.random() * Math.PI * 0.42;
    positions[i * 3] = Math.cos(theta) * Math.cos(phi) * r;
    positions[i * 3 + 1] = Math.sin(phi) * r + 30;
    positions[i * 3 + 2] = Math.sin(theta) * Math.cos(phi) * r + 200;
    sizes[i] = Math.random();
  }
  starsGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
  starsGeo.setAttribute("aSize", new THREE.BufferAttribute(sizes, 1));
  const starsMat = new THREE.PointsMaterial({ color: 0xcfd8ff, size: 1.6, sizeAttenuation: true, transparent: true, opacity: 0.75, depthWrite: false, fog: false });
  const stars = new THREE.Points(starsGeo, starsMat);
  group.add(stars);

  // lua
  const moon = new THREE.Mesh(new THREE.CircleGeometry(19, 40), new THREE.MeshBasicMaterial({ color: 0xf4eeda, fog: false }));
  moon.position.set(-150, 120, -260);
  moon.lookAt(0, 30, 0);
  group.add(moon);
  const moonGlow = new THREE.Sprite(new THREE.SpriteMaterial({ map: glowTex, color: 0xcfd8ff, transparent: true, opacity: 0.6, blending: THREE.AdditiveBlending, depthWrite: false, fog: false }));
  moonGlow.scale.set(110, 110, 1);
  moonGlow.position.set(-150, 120, -262);
  group.add(moonGlow);

  // ---- skyline ----
  const winTex = windowsTexture();
  const buildings = new THREE.Group();
  const rr = (a, b) => a + Math.random() * (b - a);
  for (let i = 0; i < 26; i++) {
    const w = rr(10, 24);
    const d = rr(10, 22);
    const h = rr(18, 70);
    const mat = new THREE.MeshStandardMaterial({
      color: 0x0a0b12,
      roughness: 0.9,
      metalness: 0.2,
      map: winTex,
      emissiveMap: winTex,
      emissive: 0xffffff,
      emissiveIntensity: 0.65,
    });
    const b = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), mat);
    const side = Math.floor(Math.random() * 4);
    let x, z;
    if (side === 0) { x = rr(-320, -140); z = rr(-160, 400); }
    else if (side === 1) { x = rr(140, 320); z = rr(-160, 400); }
    else if (side === 2) { x = rr(-220, 220); z = rr(-330, -150); }
    else { x = rr(-220, 220); z = rr(430, 540); }
    b.position.set(x, h / 2 - 0.5, z);
    buildings.add(b);
  }
  group.add(buildings);

  // árvores/arbustos simples nas laterais
  const bushMat = new THREE.MeshStandardMaterial({ color: 0x0a1310, roughness: 1 });
  for (let i = 0; i < 60; i++) {
    const sx = Math.random() < 0.5 ? -1 : 1;
    const bush = new THREE.Mesh(new THREE.SphereGeometry(rr(1, 2.6), 6, 5), bushMat);
    bush.position.set(sx * rr(17, 45), rr(0.4, 1.2), rr(-60, 470));
    bush.scale.y = rr(0.7, 1.5);
    group.add(bush);
  }

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

  function update(t) {
    // leve cintilação nos letreiros
    const glowA = 0.45 + Math.sin(t * 1.7) * 0.08;
    logoGlow.material.opacity = glowA;
    for (const b of finishLights) {
      b.material.color.setHSL(0.13, 1, 0.55 + Math.sin(t * 3 + b.position.x) * 0.05);
    }
  }

  return {
    group,
    setTree,
    update,
    LANE,
    FINISH,
    treePosition: new THREE.Vector3(0, 2.4, 11.5),
  };
}
