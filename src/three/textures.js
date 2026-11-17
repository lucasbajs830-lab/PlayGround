import * as THREE from "three";

const cache = new Map();

export function canvasTex(key, w, h, draw, opts = {}) {
  if (cache.has(key)) return cache.get(key);
  const c = document.createElement("canvas");
  c.width = w;
  c.height = h;
  const ctx = c.getContext("2d");
  draw(ctx, w, h);
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  t.anisotropy = 8;
  if (opts.repeat) {
    t.wrapS = t.wrapT = THREE.RepeatWrapping;
    t.repeat.set(opts.repeat[0], opts.repeat[1]);
  }
  cache.set(key, t);
  return t;
}

export function asphaltTexture() {
  return canvasTex("asphalt", 512, 512, (ctx, w, h) => {
    ctx.fillStyle = "#1a1a20";
    ctx.fillRect(0, 0, w, h);
    const img = ctx.getImageData(0, 0, w, h);
    const d = img.data;
    for (let i = 0; i < d.length; i += 4) {
      const n = (Math.random() - 0.5) * 34;
      d[i] += n;
      d[i + 1] += n;
      d[i + 2] += n + 2;
    }
    ctx.putImageData(img, 0, 0);
    // agregado graúdo
    for (let i = 0; i < 900; i++) {
      const g = 30 + Math.random() * 50;
      ctx.fillStyle = `rgba(${g},${g},${g + 4},${0.25 + Math.random() * 0.4})`;
      ctx.beginPath();
      ctx.arc(Math.random() * w, Math.random() * h, 0.6 + Math.random() * 1.7, 0, 7);
      ctx.fill();
    }
    // marcas de borracha
    for (let i = 0; i < 22; i++) {
      ctx.strokeStyle = `rgba(0,0,0,${0.05 + Math.random() * 0.15})`;
      ctx.lineWidth = 2 + Math.random() * 9;
      const x = Math.random() * w;
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.bezierCurveTo(x + 20, h * 0.3, x - 30, h * 0.6, x + 10, h);
      ctx.stroke();
    }
    // emendas
    ctx.strokeStyle = "rgba(0,0,0,0.25)";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(0, h * 0.5);
    ctx.lineTo(w, h * 0.5);
    ctx.stroke();
  }, { repeat: [4, 90] });
}

export function checkerTexture() {
  return canvasTex("checker", 256, 64, (ctx, w, h) => {
    const s = 32;
    for (let y = 0; y < h; y += s) {
      for (let x = 0; x < w; x += s) {
        ctx.fillStyle = ((x / s + y / s) | 0) % 2 === 0 ? "#f2f0e8" : "#101014";
        ctx.fillRect(x, y, s, s);
      }
    }
  });
}

export function bannerTexture(text, bg = "#0b0b12", fg = "#ffd319", accent = "#ff5a12") {
  return canvasTex(`banner:${text}:${bg}:${fg}`, 512, 128, (ctx, w, h) => {
    ctx.fillStyle = bg;
    ctx.fillRect(0, 0, w, h);
    ctx.fillStyle = accent;
    ctx.fillRect(0, 0, 14, h);
    ctx.fillRect(w - 14, 0, 14, h);
    ctx.strokeStyle = "rgba(255,255,255,0.15)";
    ctx.lineWidth = 3;
    ctx.strokeRect(8, 8, w - 16, h - 16);
    ctx.fillStyle = fg;
    ctx.font = "italic 900 62px Arial, Helvetica, sans-serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(text, w / 2, h / 2 + 4);
  });
}

export function signTexture(text, sub = "") {
  return canvasTex(`sign:${text}:${sub}`, 256, 256, (ctx, w, h) => {
    ctx.fillStyle = "#0c0c12";
    ctx.fillRect(0, 0, w, h);
    ctx.strokeStyle = "#ffd319";
    ctx.lineWidth = 8;
    ctx.strokeRect(10, 10, w - 20, h - 20);
    ctx.fillStyle = "#ffd319";
    ctx.font = "italic 900 84px Arial, Helvetica, sans-serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(text, w / 2, h / 2 - 24);
    ctx.fillStyle = "#cfcdd6";
    ctx.font = "700 26px Arial, Helvetica, sans-serif";
    ctx.fillText(sub, w / 2, h / 2 + 52);
  });
}

export function windowsTexture() {
  return canvasTex("windows", 128, 256, (ctx, w, h) => {
    ctx.fillStyle = "#070810";
    ctx.fillRect(0, 0, w, h);
    const cols = 10;
    const rows = 22;
    const cw = w / cols;
    const ch = h / rows;
    for (let y = 0; y < rows; y++) {
      for (let x = 0; x < cols; x++) {
        if (Math.random() < 0.28) {
          const warm = Math.random() < 0.7;
          ctx.fillStyle = warm
            ? `rgba(255,${180 + Math.random() * 50},${90 + Math.random() * 60},${0.35 + Math.random() * 0.5})`
            : `rgba(120,200,255,${0.25 + Math.random() * 0.4})`;
          ctx.fillRect(x * cw + cw * 0.18, y * ch + ch * 0.22, cw * 0.58, ch * 0.48);
        }
      }
    }
  }, { repeat: [1, 1] });
}

export function glowTexture() {
  return canvasTex("glow", 128, 128, (ctx, w, h) => {
    const g = ctx.createRadialGradient(w / 2, h / 2, 2, w / 2, h / 2, w / 2);
    g.addColorStop(0, "rgba(255,255,255,1)");
    g.addColorStop(0.18, "rgba(255,255,255,0.75)");
    g.addColorStop(0.45, "rgba(255,255,255,0.22)");
    g.addColorStop(1, "rgba(255,255,255,0)");
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, w, h);
  });
}

export function smokeTexture() {
  return canvasTex("smoke", 128, 128, (ctx, w, h) => {
    const g = ctx.createRadialGradient(w / 2, h / 2, 4, w / 2, h / 2, w / 2);
    g.addColorStop(0, "rgba(255,255,255,0.85)");
    g.addColorStop(0.35, "rgba(235,235,245,0.45)");
    g.addColorStop(0.7, "rgba(200,200,215,0.12)");
    g.addColorStop(1, "rgba(190,190,210,0)");
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, w, h);
  });
}

export function lightPoolTexture() {
  return canvasTex("pool", 256, 256, (ctx, w, h) => {
    const g = ctx.createRadialGradient(w / 2, h / 2, 4, w / 2, h / 2, w / 2);
    g.addColorStop(0, "rgba(255,240,200,0.55)");
    g.addColorStop(0.4, "rgba(255,220,160,0.2)");
    g.addColorStop(1, "rgba(255,210,150,0)");
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, w, h);
  });
}

export function crowdTexture() {
  return canvasTex("crowd", 256, 64, (ctx, w, h) => {
    ctx.fillStyle = "#07070c";
    ctx.fillRect(0, 0, w, h);
    const colors = ["#ffd319", "#ff5a12", "#2dff86", "#37e6ff", "#ff2e4d", "#e8e6df", "#8c2bff"];
    for (let i = 0; i < 420; i++) {
      ctx.fillStyle = colors[(Math.random() * colors.length) | 0];
      ctx.globalAlpha = 0.25 + Math.random() * 0.5;
      const r = 1.5 + Math.random() * 2.5;
      ctx.beginPath();
      ctx.arc(Math.random() * w, Math.random() * h, r, 0, 7);
      ctx.fill();
    }
    ctx.globalAlpha = 1;
  }, { repeat: [6, 1] });
}

/* ---------- interiores ---------- */

/** Fibra de carbono trançada (2x2), usada no painel e no console. */
export function carbonTexture() {
  return canvasTex("carbon", 128, 128, (ctx, w, h) => {
    ctx.fillStyle = "#0b0b0f";
    ctx.fillRect(0, 0, w, h);
    const s = 8;
    for (let y = 0; y < h; y += s) {
      for (let x = 0; x < w; x += s) {
        const on = ((x / s + y / s) & 1) === 0;
        const g = ctx.createLinearGradient(x, y, x + s, y + s);
        if (on) {
          g.addColorStop(0, "#22222a");
          g.addColorStop(0.55, "#15151b");
          g.addColorStop(1, "#0d0d12");
        } else {
          g.addColorStop(0, "#101015");
          g.addColorStop(0.55, "#1b1b23");
          g.addColorStop(1, "#0a0a0e");
        }
        ctx.fillStyle = g;
        ctx.fillRect(x, y, s, s);
        ctx.fillStyle = on ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.22)";
        ctx.fillRect(x, y, s, 1);
      }
    }
  }, { repeat: [3, 3] });
}

/** Suede/alcântara: base fosca com grão fino, sem brilho. */
export function suedeTexture(key, base = [24, 22, 26], spread = 13) {
  return canvasTex(`suede:${key}`, 128, 128, (ctx, w, h) => {
    ctx.fillStyle = `rgb(${base[0]},${base[1]},${base[2]})`;
    ctx.fillRect(0, 0, w, h);
    const img = ctx.getImageData(0, 0, w, h);
    const d = img.data;
    for (let i = 0; i < d.length; i += 4) {
      const n = (Math.random() - 0.5) * spread * 2;
      d[i] = Math.max(0, Math.min(255, d[i] + n + 1));
      d[i + 1] = Math.max(0, Math.min(255, d[i + 1] + n));
      d[i + 2] = Math.max(0, Math.min(255, d[i + 2] + n + 2));
    }
    ctx.putImageData(img, 0, 0);
    for (let i = 0; i < 120; i++) {
      ctx.fillStyle = `rgba(255,255,255,${0.01 + Math.random() * 0.02})`;
      ctx.beginPath();
      ctx.arc(Math.random() * w, Math.random() * h, 1 + Math.random() * 3, 0, 7);
      ctx.fill();
    }
  }, { repeat: [2, 2] });
}

/** Face de mostrador: marcações, números e zona vermelha. */
export function gaugeTexture(kind = "tach") {
  const tach = kind === "tach";
  const steps = tach ? 9 : 6;
  const labels = tach
    ? Array.from({ length: steps + 1 }, (_, i) => String(i))
    : Array.from({ length: steps + 1 }, (_, i) => String(i * 40));
  return canvasTex(`gauge:${kind}`, 256, 256, (ctx, w, h) => {
    const cx = w / 2;
    const cy = h / 2;
    const R = w / 2 - 5;
    ctx.clearRect(0, 0, w, h);
    const face = ctx.createRadialGradient(cx, cy - 26, 8, cx, cy, R);
    face.addColorStop(0, "#1c2030");
    face.addColorStop(0.7, "#0a0b11");
    face.addColorStop(1, "#05060a");
    ctx.fillStyle = face;
    ctx.beginPath();
    ctx.arc(cx, cy, R, 0, Math.PI * 2);
    ctx.fill();

    const a0 = 2.25 + Math.PI / 2;
    const a1 = -2.25 + Math.PI / 2;
    const sweep = a0 - a1;

    // zona vermelha
    if (tach) {
      const rs = a0 - sweep * 0.74;
      ctx.strokeStyle = "#ff2a18";
      ctx.lineWidth = 11;
      ctx.beginPath();
      ctx.arc(cx, cy, R - 15, -rs, -a1, false);
      ctx.stroke();
    }
    // arco externo
    ctx.strokeStyle = "rgba(190,196,210,0.55)";
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.arc(cx, cy, R - 4, -a0, -a1, false);
    ctx.stroke();

    for (let i = 0; i <= steps * 5; i++) {
      const t = i / (steps * 5);
      const a = a0 - sweep * t;
      const major = i % 5 === 0;
      const r0 = R - (major ? 30 : 21);
      const r1 = R - 12;
      ctx.strokeStyle = major ? "#eef1f7" : "rgba(200,205,220,0.45)";
      ctx.lineWidth = major ? 4 : 2;
      ctx.beginPath();
      ctx.moveTo(cx + Math.cos(a) * r0, cy - Math.sin(a) * r0);
      ctx.lineTo(cx + Math.cos(a) * r1, cy - Math.sin(a) * r1);
      ctx.stroke();

      if (major) {
        const num = labels[Math.round(t * steps)];
        const nr = R - 48;
        ctx.fillStyle = t > 0.74 && tach ? "#ff6a4d" : "#f2f4fa";
        ctx.font = "italic 900 30px Arial, Helvetica, sans-serif";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(num, cx + Math.cos(a) * nr, cy - Math.sin(a) * nr);
      }
    }

    ctx.fillStyle = "rgba(220,225,235,0.55)";
    ctx.font = "700 15px Arial, Helvetica, sans-serif";
    ctx.textAlign = "center";
    ctx.fillText(tach ? "RPM x1000" : "KM/H", cx, cy + R * 0.52);
  });
}

/** Emblema redondo "DB" para o cubo do volante e cintos. */
export function badgeTexture(text = "DB") {
  return canvasTex(`badge:${text}`, 128, 128, (ctx, w, h) => {
    ctx.clearRect(0, 0, w, h);
    ctx.fillStyle = "#0b0b10";
    ctx.beginPath();
    ctx.arc(w / 2, h / 2, w / 2 - 2, 0, 7);
    ctx.fill();
    ctx.strokeStyle = "#ffd319";
    ctx.lineWidth = 7;
    ctx.beginPath();
    ctx.arc(w / 2, h / 2, w / 2 - 7, 0, 7);
    ctx.stroke();
    ctx.fillStyle = "#ffd319";
    ctx.font = "italic 900 54px Arial, Helvetica, sans-serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(text, w / 2, h / 2 + 3);
  });
}

/** Rede de janela: grade com fundo transparente. */
export function windowNetTexture() {
  return canvasTex("windownet", 256, 256, (ctx, w, h) => {
    ctx.clearRect(0, 0, w, h);
    ctx.strokeStyle = "#33333c";
    ctx.lineWidth = 4;
    for (let x = 20; x < w; x += 38) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, h);
      ctx.stroke();
    }
    for (let y = 20; y < h; y += 38) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(w, y);
      ctx.stroke();
    }
    ctx.lineWidth = 12;
    ctx.strokeRect(6, 6, w - 12, h - 12);
    ctx.fillStyle = "#b3121f";
    ctx.fillRect(0, 0, w, 7);
  });
}

/** Tapete com logo, usado no assoalho. */
export function matTexture() {
  return canvasTex("floormat", 256, 128, (ctx, w, h) => {
    ctx.fillStyle = "#0a0a0d";
    ctx.fillRect(0, 0, w, h);
    ctx.strokeStyle = "rgba(255,211,25,0.5)";
    ctx.lineWidth = 3;
    ctx.strokeRect(10, 10, w - 20, h - 20);
    ctx.fillStyle = "rgba(255,211,25,0.75)";
    ctx.font = "italic 900 40px Arial, Helvetica, sans-serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText("DRAG BRASIL", w / 2, h / 2 + 2);
  }, { repeat: [1, 1] });
}

/** Tela do painel central (telemetria estilizada). */
export function dashScreenTexture() {
  return canvasTex("dashscreen", 256, 128, (ctx, w, h) => {
    ctx.fillStyle = "#04121a";
    ctx.fillRect(0, 0, w, h);
    ctx.strokeStyle = "rgba(47,216,255,0.18)";
    ctx.lineWidth = 1;
    for (let x = 0; x < w; x += 16) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, h);
      ctx.stroke();
    }
    for (let y = 0; y < h; y += 16) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(w, y);
      ctx.stroke();
    }
    ctx.fillStyle = "#2fd8ff";
    ctx.font = "italic 900 34px Arial, Helvetica, sans-serif";
    ctx.textAlign = "left";
    ctx.textBaseline = "middle";
    ctx.fillText("DRAG", 16, 36);
    ctx.fillStyle = "#ffd319";
    ctx.fillText("BRASIL", 16, 72);
    ctx.fillStyle = "#2fd8ff";
    ctx.fillRect(16, 98, 150, 8);
    ctx.fillStyle = "rgba(47,216,255,0.35)";
    ctx.fillRect(170, 98, 66, 8);
  });
}
