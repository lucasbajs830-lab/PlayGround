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
