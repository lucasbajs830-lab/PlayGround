import * as THREE from "three";

/**
 * Telas vivas da cabine.
 *
 * O PrismTextureStreamer troca a textura das telas do caminhão por um feed ao
 * vivo no ETS2. Aqui a mesma ideia roda no navegador, sem DLL: a tela central
 * recebe um canvas redesenhado em tempo real e o retrovisor interno recebe o
 * render de uma câmera traseira (render-to-texture).
 */

const W = 512;
const H = 186;

const CYAN = "#2fd8ff";
const YELLOW = "#ffd319";
const RED = "#ff3b2f";
const WHITE = "#eaf6ff";
const DIM = "rgba(160,180,196,0.65)";

export class TelemetryScreen {
  constructor() {
    this.canvas = document.createElement("canvas");
    this.canvas.width = W;
    this.canvas.height = H;
    this.ctx = this.canvas.getContext("2d");

    this.texture = new THREE.CanvasTexture(this.canvas);
    this.texture.colorSpace = THREE.SRGBColorSpace;
    this.texture.minFilter = THREE.LinearFilter;
    this.texture.magFilter = THREE.LinearFilter;
    this.texture.generateMipmaps = false;
    this.texture.anisotropy = 4;

    this.material = new THREE.MeshBasicMaterial({ map: this.texture, toneMapped: false });
    this._last = "";
  }

  draw(state) {
    const ctx = this.ctx;
    const t = state.time || 0;
    const racing = state.mode === "race" || state.mode === "result";
    const speed = Math.max(0, Math.round(state.speed || 0));
    const rpm = Math.max(0, Math.min(1, state.rpm || 0));
    const gear = state.gear || 1;
    const dist = Math.max(0, state.distance || 0);
    const finish = state.finish || 402.336;
    const gap = state.gap;
    const et = state.et;

    // fundo + grade
    ctx.fillStyle = "#04121a";
    ctx.fillRect(0, 0, W, H);
    ctx.strokeStyle = "rgba(47,216,255,0.06)";
    ctx.lineWidth = 1;
    for (let x = 0; x < W; x += 16) {
      ctx.beginPath();
      ctx.moveTo(x + 0.5, 0);
      ctx.lineTo(x + 0.5, H);
      ctx.stroke();
    }
    for (let y = 0; y < H; y += 16) {
      ctx.beginPath();
      ctx.moveTo(0, y + 0.5);
      ctx.lineTo(W, y + 0.5);
      ctx.stroke();
    }

    // brilho superior (efeito de vidro)
    const glow = ctx.createLinearGradient(0, 0, 0, H);
    glow.addColorStop(0, "rgba(120,210,255,0.10)");
    glow.addColorStop(0.5, "rgba(120,210,255,0.02)");
    glow.addColorStop(1, "rgba(0,0,0,0.25)");
    ctx.fillStyle = glow;
    ctx.fillRect(0, 0, W, H);

    // cabeçalho
    ctx.textBaseline = "alphabetic";
    ctx.textAlign = "left";
    ctx.fillStyle = CYAN;
    ctx.font = "italic 900 15px Arial, Helvetica, sans-serif";
    ctx.fillText("DRAG BRASIL", 16, 24);

    ctx.textAlign = "right";
    ctx.fillStyle = racing ? YELLOW : CYAN;
    ctx.font = "700 14px Arial, Helvetica, sans-serif";
    const status = racing
      ? state.et != null ? `FIM · ${state.et.toFixed(3)}s` : state.phase || "CORRIDA"
      : "MOTOR PRONTO";
    ctx.fillText(status, W - 16, 24);

    // linha divisória
    ctx.strokeStyle = "rgba(47,216,255,0.22)";
    ctx.beginPath();
    ctx.moveTo(16, 34);
    ctx.lineTo(W - 16, 34);
    ctx.stroke();

    // velocidade
    ctx.textAlign = "left";
    ctx.fillStyle = WHITE;
    ctx.font = "italic 900 78px Arial, Helvetica, sans-serif";
    ctx.fillText(String(speed), 18, 118);
    ctx.fillStyle = CYAN;
    ctx.font = "italic 900 16px Arial, Helvetica, sans-serif";
    ctx.fillText("KM/H", 20, 142);

    // distância / tempo
    ctx.fillStyle = DIM;
    ctx.font = "700 14px Arial, Helvetica, sans-serif";
    const meters = `${Math.min(Math.round(dist), Math.round(finish))} / ${Math.round(finish)} M`;
    ctx.fillText(meters, 20, 168);
    if (gap != null && et == null) {
      ctx.fillStyle = gap >= 0 ? "#6dff9a" : "#ff8a6d";
      ctx.font = "700 14px Arial, Helvetica, sans-serif";
      const sign = gap >= 0 ? "+" : "−";
      ctx.fillText(`RIVAL ${sign}${Math.abs(gap).toFixed(0)} M`, 178, 168);
    }

    // rpm: barra segmentada
    const barX = 250;
    const barW = 244;
    const segs = 16;
    const gapPx = 2;
    const segW = (barW - gapPx * (segs - 1)) / segs;
    ctx.fillStyle = "rgba(47,216,255,0.14)";
    ctx.fillRect(barX, 56, barW, 22);
    for (let i = 0; i < segs; i++) {
      const on = i / segs < rpm;
      if (!on) continue;
      const f = i / (segs - 1);
      ctx.fillStyle = f > 0.86 ? RED : f > 0.68 ? YELLOW : CYAN;
      ctx.fillRect(barX + i * (segW + gapPx), 56, segW, 22);
    }
    // marcador de shift
    if (rpm > 0.965 && Math.floor(t * 12) % 2 === 0) {
      ctx.strokeStyle = RED;
      ctx.lineWidth = 2;
      ctx.strokeRect(barX - 2, 54, barW + 4, 26);
    }

    ctx.textAlign = "left";
    ctx.fillStyle = DIM;
    ctx.font = "700 13px Arial, Helvetica, sans-serif";
    ctx.fillText("RPM", barX, 98);
    ctx.fillStyle = WHITE;
    ctx.font = "italic 900 18px Arial, Helvetica, sans-serif";
    ctx.fillText(`${Math.round(rpm * 9)}.0k`, barX + 38, 98);

    // marcha (fica antes da borda direita, que o painel cobre um pouco)
    ctx.textAlign = "left";
    ctx.fillStyle = DIM;
    ctx.font = "700 13px Arial, Helvetica, sans-serif";
    ctx.fillText("MARCHA", 366, 100);
    ctx.fillStyle = YELLOW;
    ctx.font = "italic 900 54px Arial, Helvetica, sans-serif";
    ctx.fillText(String(gear), 366, 152);

    // varredura de tela
    const scanY = Math.floor(((t * 0.35) % 1) * H);
    ctx.fillStyle = "rgba(120,210,255,0.05)";
    ctx.fillRect(0, scanY, W, 2);

    // moldura
    ctx.strokeStyle = "rgba(47,216,255,0.35)";
    ctx.lineWidth = 2;
    ctx.strokeRect(1, 1, W - 2, H - 2);

    this.texture.needsUpdate = true;
  }
}

export class MirrorFeed {
  constructor(renderer, scene) {
    this.renderer = renderer;
    this.scene = scene;
    this.width = 384;
    this.height = 128;

    this.target = new THREE.WebGLRenderTarget(this.width, this.height, {
      depthBuffer: true,
      stencilBuffer: false,
    });
    this.target.texture.colorSpace = THREE.SRGBColorSpace;
    this.target.texture.minFilter = THREE.LinearFilter;
    this.target.texture.magFilter = THREE.LinearFilter;
    // como o vidro do retrovisor já é desenhado de frente para o motorista,
    // inverter o mapa dá o efeito de espelho
    this.target.texture.wrapS = THREE.ClampToEdgeWrapping;
    this.target.texture.wrapT = THREE.ClampToEdgeWrapping;
    this.target.texture.repeat.x = -1;
    this.target.texture.offset.x = 1;

    this.camera = new THREE.PerspectiveCamera(46, this.width / this.height, 0.1, 420);
    this.lights = [];
    this.material = new THREE.MeshBasicMaterial({ map: this.target.texture, toneMapped: false });
    this.material.color.setScalar(1.2);
  }

  update(playerGroup) {
    const p = playerGroup.position;
    this.camera.position.set(p.x, 1.42, p.z - 2.5);
    this.camera.lookAt(p.x, 0.75, p.z - 30);
    this.camera.updateMatrixWorld();

    if (!this.lights.length) {
      this.scene.traverse((o) => {
        if (o.isLight) this.lights.push([o, o.intensity]);
      });
    }

    const renderer = this.renderer;
    const prevTarget = renderer.getRenderTarget();
    const prevShadowAuto = renderer.shadowMap.autoUpdate;
    const prevVisible = playerGroup.visible;
    const prevExposure = renderer.toneMappingExposure;

    // o próprio carro não aparece no retrovisor e evita feedback com a textura
    playerGroup.visible = false;
    renderer.shadowMap.autoUpdate = false;
    // a rua atrás do carro é bem mais escura que a pista à frente:
    // sobe a exposição e a luz ambiente só durante esse render
    renderer.toneMappingExposure = prevExposure * 1.7;
    for (const [light] of this.lights) light.intensity *= 2.6;
    renderer.setRenderTarget(this.target);
    renderer.render(this.scene, this.camera);
    renderer.setRenderTarget(prevTarget);
    for (const [light, intensity] of this.lights) light.intensity = intensity;
    renderer.toneMappingExposure = prevExposure;
    renderer.shadowMap.autoUpdate = prevShadowAuto;
    playerGroup.visible = prevVisible;
  }
}

/**
 * Captura de janela/aba/tela ao vivo — o equivalente no navegador ao que o
 * PrismTextureStreamer faz no ETS2 com o hook de DirectX: pega uma fonte
 * externa e usa como textura das telas da cabine.
 *
 * Usa getDisplayMedia (escolha da janela pelo próprio navegador) e faz o blit
 * dos quadros em dois canvases, um por tela, como o Prism faz no Prism3D.
 * "contain" mostra a janela inteira com tarjas; "cover" preenche a tela e corta
 * as bordas. A taxa é limitada pelo fps escolhido no painel.
 */
export class WindowFeed {
  constructor() {
    this.stream = null;
    this.active = false;
    this.fps = 15;
    this.fit = "contain";
    this.onchange = null;
    this.onmeta = null;
    this._last = 0;
    this._ended = this._ended.bind(this);

    this.video = document.createElement("video");
    this.video.muted = true;
    this.video.playsInline = true;
    this.video.autoplay = true;
    this.video.setAttribute("playsinline", "");
    this.video.addEventListener("loadedmetadata", () => this._onMeta());
    this.video.addEventListener("resize", () => this._onMeta());

    this.dashCanvas = this._canvas(512, 186);
    this.mirrorCanvas = this._canvas(512, 114);
    this.dashTexture = this._texture(this.dashCanvas);
    this.mirrorTexture = this._texture(this.mirrorCanvas);

    this.dashMaterial = new THREE.MeshBasicMaterial({ map: this.dashTexture, toneMapped: false });
    this.mirrorMaterial = new THREE.MeshBasicMaterial({ map: this.mirrorTexture, toneMapped: false });
    // a cabine é escura: dá um ganho para a tela continuar legível
    this.dashMaterial.color.setScalar(1.25);
    this.mirrorMaterial.color.setScalar(1.25);
  }

  _canvas(w, h) {
    const canvas = document.createElement("canvas");
    canvas.width = w;
    canvas.height = h;
    const ctx = canvas.getContext("2d");
    ctx.fillStyle = "#04121a";
    ctx.fillRect(0, 0, w, h);
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = "high";
    return canvas;
  }

  _texture(canvas) {
    const tex = new THREE.CanvasTexture(canvas);
    tex.colorSpace = THREE.SRGBColorSpace;
    tex.minFilter = THREE.LinearFilter;
    tex.magFilter = THREE.LinearFilter;
    tex.generateMipmaps = false;
    return tex;
  }

  get videoSize() {
    return { width: this.video.videoWidth || 0, height: this.video.videoHeight || 0 };
  }

  _onMeta() {
    this.onmeta?.(this.videoSize);
    this._last = 0;
  }

  /** Abre o seletor de janela do navegador. */
  async start({ fps = 15, fit = "contain" } = {}) {
    if (!navigator.mediaDevices?.getDisplayMedia) {
      const err = new Error("captura de tela não suportada neste navegador");
      err.code = "unsupported";
      throw err;
    }
    const stream = await navigator.mediaDevices.getDisplayMedia({
      video: {
        frameRate: { ideal: fps, max: fps },
        width: { ideal: 1920 },
        height: { ideal: 1080 },
      },
      audio: false,
    });
    this.attach(stream);
    this.setFps(fps);
    this.fit = fit;
    return stream;
  }

  /** Liga uma fonte já existente (getDisplayMedia, canvas.captureStream...). */
  attach(stream) {
    this.detach();
    if (!stream) return;
    this.stream = stream;
    this.video.srcObject = stream;
    this.video.play().catch(() => { /* autoplay bloqueado: fica no último quadro */ });
    this.active = true;
    for (const track of stream.getVideoTracks()) track.addEventListener("ended", this._ended);
    this._last = 0;
    this.onchange?.("start");
  }

  _ended() {
    if (!this.active) return;
    this.stop("ended");
  }

  setFps(fps) {
    this.fps = Math.max(1, Math.min(60, Number(fps) || 15));
    for (const track of this.stream?.getVideoTracks() || []) {
      track.applyConstraints({ frameRate: { ideal: this.fps, max: this.fps } }).catch(() => { /* fonte fixa */ });
    }
  }

  setFit(fit) {
    this.fit = fit === "cover" ? "cover" : "contain";
  }

  /** Desenha o quadro atual nas texturas das duas telas (limitado pelo fps). */
  update(now = performance.now()) {
    if (!this.active || this.video.readyState < 2) return;
    const step = 1000 / this.fps;
    if (now - this._last < step) return;
    this._last = now;
    if (this._blit(this.dashCanvas)) this.dashTexture.needsUpdate = true;
    if (this._blit(this.mirrorCanvas)) this.mirrorTexture.needsUpdate = true;
  }

  _blit(canvas) {
    const vw = this.video.videoWidth;
    const vh = this.video.videoHeight;
    if (!vw || !vh) return false;
    const ctx = canvas.getContext("2d");
    const cw = canvas.width;
    const ch = canvas.height;

    // escala sem distorcer: "contain" mostra tudo, "cover" preenche e corta
    const cover = this.fit === "cover";
    const scale = cover ? Math.max(cw / vw, ch / vh) : Math.min(cw / vw, ch / vh);
    const dw = vw * scale;
    const dh = vh * scale;
    const dx = (cw - dw) / 2;
    const dy = (ch - dh) / 2;

    ctx.fillStyle = "#030b11";
    ctx.fillRect(0, 0, cw, ch);
    ctx.save();
    try {
      ctx.drawImage(this.video, dx, dy, dw, dh);
    } catch {
      ctx.restore();
      return false;
    }
    // brilho de vidro no topo, como nas telas do jogo
    const glow = ctx.createLinearGradient(0, 0, 0, ch);
    glow.addColorStop(0, "rgba(190,235,255,0.10)");
    glow.addColorStop(0.45, "rgba(190,235,255,0.02)");
    glow.addColorStop(1, "rgba(0,0,0,0.18)");
    ctx.fillStyle = glow;
    ctx.fillRect(0, 0, cw, ch);
    ctx.restore();
    return true;
  }

  stop(reason = "stop") {
    this.detach();
    this.onchange?.(reason);
  }

  detach() {
    if (this.stream) {
      for (const track of this.stream.getTracks()) {
        track.removeEventListener("ended", this._ended);
        track.stop();
      }
    }
    this.stream = null;
    this.video.srcObject = null;
    this.active = false;
  }
}
