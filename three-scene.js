import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.180.0/build/three.module.js';

const shell = document.querySelector('#game-shell');
const canvas = document.createElement('canvas');
canvas.id = 'world3d';
canvas.setAttribute('aria-hidden', 'true');
shell.insertBefore(canvas, shell.querySelector('.vignette'));

let renderer;
try {
  renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: false, powerPreference: 'high-performance' });
} catch (error) {
  console.error('ARCANA 3D could not initialize WebGL:', error);
  canvas.remove();
}
if (renderer) {
  renderer.setPixelRatio(Math.min(devicePixelRatio || 1, 1.5));
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.12;
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;

  const scene = new THREE.Scene();
  scene.background = new THREE.Color('#344b45');
  scene.fog = new THREE.Fog('#344b45', 18, 38);
  const camera = new THREE.PerspectiveCamera(76, innerWidth / innerHeight, 0.08, 90);
  camera.rotation.order = 'YXZ';
  scene.add(camera);

  const hemi = new THREE.HemisphereLight('#d9e8d0', '#342b26', 2.0);
  scene.add(hemi);
  const sun = new THREE.DirectionalLight('#ffe4b2', 3.2);
  sun.position.set(-8, 15, 7);
  sun.castShadow = true;
  sun.shadow.mapSize.set(1024, 1024);
  sun.shadow.camera.left = -18; sun.shadow.camera.right = 18;
  sun.shadow.camera.top = 18; sun.shadow.camera.bottom = -18;
  sun.shadow.bias = -0.0004;
  scene.add(sun);

  const arena = new THREE.Group(); scene.add(arena);
  const actors = new Map();
  const spellEffects = [];
  let effectSources = new WeakSet();
  const mapLooks = [
    { sky: '#344b45', fog: '#344b45', floor: '#46543a', floor2: '#303c2c', stone: '#687653', dark: '#414d3c', accent: '#a6cf83', trunk: '#574638', leaf: '#526b42' },
    { sky: '#596267', fog: '#716455', floor: '#806b4b', floor2: '#66543c', stone: '#a68a60', dark: '#786346', accent: '#efd08b', trunk: '#65503a', leaf: '#77724c' },
    { sky: '#392f3a', fog: '#50352f', floor: '#594137', floor2: '#3e302c', stone: '#81594a', dark: '#5d4038', accent: '#ff9461', trunk: '#4d3731', leaf: '#754339' }
  ];
  let builtMap = -1;

  function mat(color, roughness = 0.92, extra = {}) {
    return new THREE.MeshStandardMaterial({ color, roughness, ...extra });
  }
  function makeSurfaceTexture(kind, seed) {
    const size = 128, canvas = document.createElement('canvas');
    canvas.width = canvas.height = size;
    const ctx = canvas.getContext('2d'), image = ctx.createImageData(size, size);
    for (let y = 0; y < size; y++) for (let x = 0; x < size; x++) {
      const broad = Math.sin((x + seed) * Math.PI / 32) * Math.cos((y - seed) * Math.PI / 32);
      const grain = Math.sin((x * 7 + y * 13 + seed) * Math.PI / 16) * Math.cos((x * 11 - y * 5) * Math.PI / 16);
      const fleck = Math.sin((x * 23 + y * 17 + seed) * Math.PI / 32);
      const value = Math.max(150, Math.min(255, Math.round(224 + broad * (kind === 'stone' ? 16 : 10) + grain * 11 + fleck * 5)));
      const i = (y * size + x) * 4;
      image.data[i] = image.data[i + 1] = image.data[i + 2] = value;
      image.data[i + 3] = 255;
    }
    ctx.putImageData(image, 0, 0);
    const color = new THREE.CanvasTexture(canvas), bump = new THREE.CanvasTexture(canvas);
    color.colorSpace = THREE.SRGBColorSpace;
    for (const texture of [color, bump]) {
      texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
      texture.anisotropy = Math.min(4, renderer.capabilities.getMaxAnisotropy());
      texture.generateMipmaps = true;
    }
    return { color, bump };
  }
  const stoneTexture = makeSurfaceTexture('stone', 17);
  const earthTexture = makeSurfaceTexture('earth', 41);
  function box(parent, x, y, z, sx, sy, sz, material, shadow = true) {
    const mesh = new THREE.Mesh(new THREE.BoxGeometry(sx, sy, sz), material);
    mesh.position.set(x, y, z); mesh.castShadow = shadow; mesh.receiveShadow = true; parent.add(mesh);
    return mesh;
  }
  function rebuild(data) {
    while (arena.children.length) {
      const object = arena.children.pop();
      object.traverse?.(node => { node.geometry?.dispose(); if (Array.isArray(node.material)) node.material.forEach(m => m.dispose()); else node.material?.dispose(); });
    }
    actors.clear(); spellEffects.length = 0; effectSources = new WeakSet();
    const look = mapLooks[data.mapIndex || 0];
    scene.background.set(look.sky); scene.fog.color.set(look.fog);
    const floorMat = mat(look.floor, 1, { map: earthTexture.color, bumpMap: earthTexture.bump, bumpScale: .055 });
    earthTexture.color.repeat.set(13, 13); earthTexture.bump.repeat.set(13, 13);
    const floor2Mat = mat(look.floor2, 1);
    const stoneMat = mat(look.stone, .94, { map: stoneTexture.color, bumpMap: stoneTexture.bump, bumpScale: .075 });
    const darkMat = mat(look.dark, .96, { map: stoneTexture.color, bumpMap: stoneTexture.bump, bumpScale: .06 });
    const trimMat = mat(look.accent, .72, { emissive: look.accent, emissiveIntensity: .12 });
    const floor = new THREE.Mesh(new THREE.PlaneGeometry(data.world[0].length, data.world.length), floorMat);
    floor.rotation.x = -Math.PI / 2; floor.position.set(data.world[0].length / 2, -.06, data.world.length / 2); floor.receiveShadow = true; arena.add(floor);
    // Broad, subtle ground tiles give the arena scale and make movement legible in 3D.
    for (let z = 1; z < data.world.length - 1; z += 2) for (let x = 1; x < data.world[z].length - 1; x += 2) {
      if (((x * 7 + z * 11 + data.mapIndex * 3) % 9) < 3) {
        const tile = new THREE.Mesh(new THREE.PlaneGeometry(1.9, 1.9), floor2Mat);
        tile.rotation.x = -Math.PI / 2; tile.position.set(x + .5, -.045, z + .5); tile.receiveShadow = true; arena.add(tile);
      }
    }
    for (let z = 0; z < data.world.length; z++) for (let x = 0; x < data.world[z].length; x++) {
      const type = data.world[z][x]; if (!type) continue;
      if (type === 2) {
        const trunk = new THREE.Mesh(new THREE.CylinderGeometry(.13, .2, 1.15, 6), mat(look.trunk));
        trunk.position.set(x + .5, .57, z + .5); trunk.castShadow = true; trunk.receiveShadow = true; arena.add(trunk);
        const crown = new THREE.Mesh(new THREE.ConeGeometry(.68, 1.5, 7), mat(look.leaf));
        crown.position.set(x + .5, 1.65, z + .5); crown.castShadow = true; crown.receiveShadow = true; arena.add(crown);
        const crown2 = new THREE.Mesh(new THREE.ConeGeometry(.46, 1.15, 7), mat(look.accent));
        crown2.position.set(x + .5, 2.12, z + .5); crown2.castShadow = true; arena.add(crown2);
      } else {
        const height = type === 1 ? 1.2 : 1.82;
        box(arena, x + .5, height / 2, z + .5, .96, height, .96, type === 3 ? darkMat : stoneMat);
        if (type === 3) box(arena, x + .5, height + .035, z + .5, 1.02, .08, 1.02, trimMat, false);
        else if (type === 1) box(arena, x + .5, height - .08, z + .5, .98, .13, .98, darkMat, false);
      }
    }
    // Fine, flush-inlaid rune rings give the spawn a focal point without obstructing play.
    const cx = data.world[0].length / 2, cz = data.world.length / 2;
    const runeMat = new THREE.MeshStandardMaterial({ color: look.accent, roughness: .8, emissive: look.accent, emissiveIntensity: .08 });
    for (const radius of [1.35, 2.15]) {
      const rune = new THREE.Mesh(new THREE.TorusGeometry(radius, .025, 5, 64), runeMat);
      rune.rotation.x = -Math.PI / 2; rune.position.set(cx, .008, cz); arena.add(rune);
    }
    for (let i = 0; i < 8; i++) {
      const angle = i * Math.PI / 4;
      const rune = new THREE.Mesh(new THREE.BoxGeometry(.48, .018, .035), runeMat);
      rune.position.set(cx + Math.cos(angle) * 1.75, .008, cz + Math.sin(angle) * 1.75);
      rune.rotation.y = -angle; arena.add(rune);
    }
    builtMap = data.mapIndex || 0;
  }

  const orbGeometry = new THREE.SphereGeometry(.12, 12, 8);
  function makeWizard(id, classIndex, color) {
    const group = new THREE.Group();
    const robeMat = mat(color), skinMat = mat('#d5b995'), hatMat = mat('#41362f'), staffMat = mat('#765c3e');
    const robe = new THREE.Mesh(new THREE.ConeGeometry(.36, 1.05, 7), robeMat); robe.position.y = .57; robe.castShadow = true; group.add(robe);
    const head = new THREE.Mesh(new THREE.SphereGeometry(.19, 12, 9), skinMat); head.position.y = 1.19; head.castShadow = true; group.add(head);
    const hat = new THREE.Mesh(new THREE.ConeGeometry(.25, .48, 7), hatMat); hat.position.y = 1.49; hat.castShadow = true; group.add(hat);
    const brim = new THREE.Mesh(new THREE.CylinderGeometry(.34, .34, .045, 8), hatMat); brim.position.y = 1.31; group.add(brim);
    const staff = new THREE.Mesh(new THREE.CylinderGeometry(.035, .045, .94, 6), staffMat); staff.position.set(.35, .57, -.03); staff.rotation.z = -.1; staff.castShadow = true; group.add(staff);
    const orbMat = new THREE.MeshStandardMaterial({ color: ['#f49a63', '#8ed8eb', '#c6a0fa'][classIndex || 0], emissive: ['#f49a63', '#8ed8eb', '#c6a0fa'][classIndex || 0], emissiveIntensity: 2.5, roughness: .25 });
    const orb = new THREE.Mesh(orbGeometry, orbMat); orb.position.set(.36, 1.08, -.03); group.add(orb);
    const shadow = new THREE.Mesh(new THREE.CircleGeometry(.38, 16), new THREE.MeshBasicMaterial({ color: '#080c09', transparent: true, opacity: .35, depthWrite: false }));
    shadow.rotation.x = -Math.PI / 2; shadow.position.y = .015; group.add(shadow);
    const iceRing = new THREE.Mesh(new THREE.TorusGeometry(.48, .025, 5, 24), new THREE.MeshBasicMaterial({ color: '#a7efff', transparent: true, opacity: .78, depthWrite: false }));
    iceRing.rotation.x = Math.PI / 2; iceRing.position.y = .3; iceRing.visible = false; group.add(iceRing);
    group.userData = { id, robe, orb, shadow, iceRing, baseY: 0 }; arena.add(group); actors.set(id, group); return group;
  }
  function buildEffects(data) {
    for (const effect of data.effects || []) {
      if (!effect.x || effect.type === 'cast' || effectSources.has(effect)) continue;
      effectSources.add(effect);
      const color = effect.color || '#e6c77c';
      const mesh = new THREE.Mesh(new THREE.SphereGeometry(effect.type === 'boom' ? .26 : .13, 12, 8), new THREE.MeshBasicMaterial({ color, transparent: true, opacity: .82 }));
      mesh.position.set(effect.x, .85, effect.z); mesh.userData = { t: effect.t, max: effect.max, color, type: effect.type };
      arena.add(mesh); spellEffects.push(mesh);
    }
  }

  // First-person forearm, wand and focus crystal are attached to the moving camera.
  const hand = new THREE.Group(); camera.add(hand); hand.position.set(.43, -.45, -.7); hand.scale.setScalar(.66);
  const sleeve = new THREE.Mesh(new THREE.CylinderGeometry(.105, .17, .46, 8), mat('#3c302b')); sleeve.rotation.z = -.62; sleeve.position.set(-.03, -.14, .02); hand.add(sleeve);
  const arm = new THREE.Mesh(new THREE.CylinderGeometry(.085, .1, .34, 8), mat('#c39879')); arm.rotation.z = -.58; arm.position.set(-.02, .09, -.04); hand.add(arm);
  const wand = new THREE.Mesh(new THREE.CylinderGeometry(.018, .027, .61, 7), mat('#765c3e')); wand.rotation.z = -.38; wand.position.set(.13, .11, -.1); hand.add(wand);
  const focusMat = new THREE.MeshStandardMaterial({ color: '#f49a63', emissive: '#f49a63', emissiveIntensity: 3, roughness: .2 });
  const focus = new THREE.Mesh(new THREE.OctahedronGeometry(.095, 0), focusMat); focus.position.set(.23, .42, -.1); hand.add(focus);
  const handLight = new THREE.PointLight('#f49a63', 1.5, 2.4); handLight.position.copy(focus.position); hand.add(handLight);

  function resize() {
    if (!renderer) return;
    renderer.setSize(innerWidth, innerHeight, false);
    camera.aspect = innerWidth / innerHeight; camera.updateProjectionMatrix();
  }
  addEventListener('resize', resize); resize();

  let previousState = '';
  function render(data) {
    if (!data) return;
    const active = data.state === 'playing' || data.state === 'over';
    canvas.classList.toggle('visible', active);
    document.querySelector('#game').classList.toggle('covered-by-3d', active);
    if (!active) { previousState = data.state; return; }
    if (builtMap !== data.mapIndex || previousState === 'menu') rebuild(data);
    previousState = data.state;
    const look = mapLooks[data.mapIndex || 0];
    const player = data.player;
    if (!player) return;
    camera.position.set(player.x, 1.62 + (player.jump || 0), player.z);
    camera.rotation.order = 'YXZ';
    camera.rotation.y = -player.a - Math.PI / 2;
    const flip = player.flipTime > 0 ? Math.max(0, Math.min(1, (0.72 - player.flipTime) / .72)) : 0;
    // Pitch the first-person view through a full forward rotation for the second-jump somersault.
    camera.rotation.x = flip * Math.PI * 2;
    camera.rotation.z = flip ? Math.sin(flip * Math.PI) * .08 : 0;
    const moving = Math.hypot(player.vx || 0, player.vz || 0);
    hand.position.y = -.45 + Math.sin(data.elapsed * 9) * Math.min(.018, moving * .006) - Math.min(.08, (player.jump || 0) * .035);
    hand.rotation.z = -.08 + Math.sin(data.elapsed * 7) * .025;
    focusMat.color.set(data.classColor); focusMat.emissive.set(data.classColor);
    handLight.color.set(data.classColor);
    const cast = data.effects?.some(effect => effect.type === 'cast');
    hand.scale.setScalar(cast ? .75 : .66);
    hand.rotation.x = cast ? -.18 : 0;
    sun.position.set(player.x - 8, 15, player.z + 7);
    scene.fog.color.set(look.fog);

    const aliveIds = new Set();
    for (const enemy of data.enemies || []) {
      if (!enemy.alive) continue;
      const id = `bot-${enemy.id}`; aliveIds.add(id);
      const wizard = actors.get(id) || makeWizard(id, enemy.cls, enemy.color);
      wizard.position.set(enemy.x, enemy.jump || 0, enemy.z); wizard.rotation.y = -enemy.a - Math.PI / 2;
      const frozen = enemy.freeze > 0;
      wizard.userData.robe.material.emissive.set(frozen ? '#80dff5' : enemy.flash > 0 ? '#ffffff' : '#000000');
      wizard.userData.robe.material.emissiveIntensity = frozen ? .72 : enemy.flash > 0 ? .9 : 0;
      wizard.userData.orb.material.emissiveIntensity = frozen ? 4 : 2.5;
      wizard.userData.iceRing.visible = frozen;
      wizard.userData.iceRing.rotation.z = data.elapsed * 1.8;
      wizard.scale.setScalar(enemy.hp < 35 ? .92 : 1);
    }
    for (const [id, wizard] of actors) if (id !== 'player' && !aliveIds.has(id)) { arena.remove(wizard); actors.delete(id); }
    // Gentle, physically grounded spell bursts; expire their meshes independently of the game data.
    buildEffects(data);
    for (let i = spellEffects.length - 1; i >= 0; i--) {
      const mesh = spellEffects[i];
      if (!arena.children.includes(mesh)) { spellEffects.splice(i, 1); continue; }
      mesh.userData.t -= data.dt;
      const k = Math.max(0, mesh.userData.t / mesh.userData.max);
      mesh.material.opacity = k * .8; mesh.scale.setScalar(1 + (1 - k) * (mesh.userData.type === 'boom' ? 3.2 : 1.4));
      if (mesh.userData.t <= 0) { arena.remove(mesh); mesh.geometry.dispose(); mesh.material.dispose(); spellEffects.splice(i, 1); }
    }
    renderer.render(scene, camera);
  }
  window.arcana3D = { render };
}
