import * as THREE from "three";
import { smokeTexture, glowTexture } from "./textures.js";

function makePoints(count, texture, { additive = false, color = 0xffffff } = {}) {
  const geo = new THREE.BufferGeometry();
  const positions = new Float32Array(count * 3);
  const sizes = new Float32Array(count);
  const alphas = new Float32Array(count);
  for (let i = 0; i < count; i++) positions[i * 3 + 1] = -1000;
  geo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
  geo.setAttribute("aSize", new THREE.BufferAttribute(sizes, 1));
  geo.setAttribute("aAlpha", new THREE.BufferAttribute(alphas, 1));

  const mat = new THREE.ShaderMaterial({
    uniforms: {
      uTex: { value: texture },
      uColor: { value: new THREE.Color(color) },
      uScale: { value: 1 },
    },
    vertexShader: `
      attribute float aSize;
      attribute float aAlpha;
      varying float vAlpha;
      uniform float uScale;
      void main() {
        vAlpha = aAlpha;
        vec4 mv = modelViewMatrix * vec4(position, 1.0);
        gl_PointSize = aSize * uScale * (280.0 / max(-mv.z, 0.1));
        gl_Position = projectionMatrix * mv;
      }
    `,
    fragmentShader: `
      uniform sampler2D uTex;
      uniform vec3 uColor;
      varying float vAlpha;
      void main() {
        vec4 t = texture2D(uTex, gl_PointCoord);
        gl_FragColor = vec4(uColor, t.a * vAlpha);
      }
    `,
    transparent: true,
    depthWrite: false,
    blending: additive ? THREE.AdditiveBlending : THREE.NormalBlending,
  });
  const points = new THREE.Points(geo, mat);
  points.frustumCulled = false;
  return { geo, mat, points, positions, sizes, alphas, count };
}

export class Effects {
  constructor(scene) {
    this.scene = scene;
    this.smoke = makePoints(320, smokeTexture(), { color: 0xd7d9e2 });
    this.smoke.mat.uniforms.uScale.value = 1;
    scene.add(this.smoke.points);

    this.fire = makePoints(120, glowTexture(), { additive: true, color: 0xff9a3a });
    scene.add(this.fire.points);

    this.smokeParts = Array.from({ length: this.smoke.count }, () => ({ alive: false, x: 0, y: 0, z: 0, vx: 0, vy: 0, vz: 0, life: 0, max: 1, size: 1 }));
    this.fireParts = Array.from({ length: this.fire.count }, () => ({ alive: false, x: 0, y: 0, z: 0, vx: 0, vy: 0, vz: 0, life: 0, max: 1, size: 1 }));
    this.si = 0;
    this.fi = 0;
    this._tmp = new THREE.Vector3();
  }

  emitSmoke(pos, intensity = 1, dir = null) {
    for (let n = 0; n < Math.max(1, Math.round(intensity * 2)); n++) {
      const p = this.smokeParts[this.si];
      this.si = (this.si + 1) % this.smokeParts.length;
      p.alive = true;
      p.x = pos.x + (Math.random() - 0.5) * 0.3;
      p.y = pos.y + Math.random() * 0.12;
      p.z = pos.z + (Math.random() - 0.5) * 0.3;
      const spread = 0.5 + intensity * 1.2;
      p.vx = (Math.random() - 0.5) * spread + (dir ? dir.x * intensity * 0.6 : 0);
      p.vy = 0.3 + Math.random() * 0.7;
      p.vz = (Math.random() - 0.5) * spread + (dir ? dir.z * intensity * 0.6 : 0);
      p.max = 1.1 + Math.random() * 1.5;
      p.life = p.max;
      p.size = 26 + Math.random() * 26 + intensity * 16;
    }
  }

  emitBackfire(pos, dir) {
    for (let n = 0; n < 5; n++) {
      const p = this.fireParts[this.fi];
      this.fi = (this.fi + 1) % this.fireParts.length;
      p.alive = true;
      p.x = pos.x;
      p.y = pos.y;
      p.z = pos.z;
      p.vx = (Math.random() - 0.5) * 1.4 + dir.x * 3;
      p.vy = (Math.random() - 0.5) * 0.8 + 0.3;
      p.vz = (Math.random() - 0.5) * 1.4 + dir.z * 3;
      p.max = 0.16 + Math.random() * 0.16;
      p.life = p.max;
      p.size = 14 + Math.random() * 16;
    }
  }

  update(dt) {
    const dtc = Math.min(dt, 0.05);
    const s = this.smoke;
    for (let i = 0; i < s.count; i++) {
      const p = this.smokeParts[i];
      if (!p.alive) {
        s.alphas[i] = 0;
        continue;
      }
      p.life -= dtc;
      if (p.life <= 0) {
        p.alive = false;
        s.alphas[i] = 0;
        continue;
      }
      p.x += p.vx * dtc;
      p.y += p.vy * dtc;
      p.z += p.vz * dtc;
      p.vy += 0.55 * dtc;
      p.vx *= 1 - dtc * 1.6;
      p.vz *= 1 - dtc * 1.6;
      const t = p.life / p.max;
      s.positions[i * 3] = p.x;
      s.positions[i * 3 + 1] = p.y;
      s.positions[i * 3 + 2] = p.z;
      s.sizes[i] = p.size * (1.4 - t * 0.5);
      s.alphas[i] = Math.min(1, t * 1.8) * 0.30;
    }
    s.geo.attributes.position.needsUpdate = true;
    s.geo.attributes.aSize.needsUpdate = true;
    s.geo.attributes.aAlpha.needsUpdate = true;

    const f = this.fire;
    for (let i = 0; i < f.count; i++) {
      const p = this.fireParts[i];
      if (!p.alive) {
        f.alphas[i] = 0;
        continue;
      }
      p.life -= dtc;
      if (p.life <= 0) {
        p.alive = false;
        f.alphas[i] = 0;
        continue;
      }
      p.x += p.vx * dtc;
      p.y += p.vy * dtc;
      p.z += p.vz * dtc;
      p.vx *= 1 - dtc * 4;
      p.vy *= 1 - dtc * 3;
      p.vz *= 1 - dtc * 4;
      const t = p.life / p.max;
      f.positions[i * 3] = p.x;
      f.positions[i * 3 + 1] = p.y;
      f.positions[i * 3 + 2] = p.z;
      f.sizes[i] = p.size * (0.6 + t * 0.9);
      f.alphas[i] = t;
    }
    f.geo.attributes.position.needsUpdate = true;
    f.geo.attributes.aSize.needsUpdate = true;
    f.geo.attributes.aAlpha.needsUpdate = true;
  }

  clear() {
    for (const p of this.smokeParts) p.alive = false;
    for (const p of this.fireParts) p.alive = false;
    for (let i = 0; i < this.smoke.count; i++) this.smoke.alphas[i] = 0;
    for (let i = 0; i < this.fire.count; i++) this.fire.alphas[i] = 0;
    this.smoke.geo.attributes.aAlpha.needsUpdate = true;
    this.fire.geo.attributes.aAlpha.needsUpdate = true;
  }
}
