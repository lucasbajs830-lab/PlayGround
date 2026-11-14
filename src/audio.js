// Motor sonoro 100% sintetizado (WebAudio) — nenhum arquivo de áudio necessário.

function noiseBuffer(ctx, seconds = 2) {
  const len = Math.floor(ctx.sampleRate * seconds);
  const buf = ctx.createBuffer(1, len, ctx.sampleRate);
  const d = buf.getChannelData(0);
  let last = 0;
  for (let i = 0; i < len; i++) {
    const white = Math.random() * 2 - 1;
    last = (last + 0.02 * white) / 1.02;
    d[i] = last * 3.2;
  }
  return buf;
}

export class GameAudio {
  constructor() {
    this.ctx = null;
    this.muted = false;
    this.ready = false;
    this.lastPop = 0;
  }

  async init() {
    if (this.ready) {
      if (this.ctx.state === "suspended") await this.ctx.resume();
      return;
    }
    const Ctx = window.AudioContext || window.webkitAudioContext;
    if (!Ctx) return;
    const ctx = new Ctx();
    this.ctx = ctx;
    await ctx.resume();

    this.master = ctx.createGain();
    this.master.gain.value = this.muted ? 0 : 0.85;
    const comp = ctx.createDynamicsCompressor();
    comp.threshold.value = -18;
    comp.knee.value = 20;
    comp.ratio.value = 5;
    comp.attack.value = 0.005;
    comp.release.value = 0.18;
    this.master.connect(comp);
    comp.connect(ctx.destination);

    this.noiseBuf = noiseBuffer(ctx, 2.5);

    // ---- motor ----
    this.engineGain = ctx.createGain();
    this.engineGain.gain.value = 0.0;
    this.engineFilter = ctx.createBiquadFilter();
    this.engineFilter.type = "lowpass";
    this.engineFilter.frequency.value = 600;
    this.engineFilter.Q.value = 1.4;
    this.engineGain.connect(this.engineFilter);
    this.engineFilter.connect(this.master);

    const mk = (type, gain, oct = 1) => {
      const o = ctx.createOscillator();
      o.type = type;
      o.frequency.value = 40 * oct;
      const g = ctx.createGain();
      g.gain.value = gain;
      o.connect(g);
      g.connect(this.engineGain);
      o.start();
      return { o, g, oct };
    };
    this.oscs = [mk("sawtooth", 0.5), mk("sawtooth", 0.35, 1.01), mk("square", 0.14, 2), mk("sine", 0.5, 0.5)];

    // aspereza do escape
    this.exhaustNoise = ctx.createBufferSource();
    this.exhaustNoise.buffer = this.noiseBuf;
    this.exhaustNoise.loop = true;
    this.exhaustFilter = ctx.createBiquadFilter();
    this.exhaustFilter.type = "bandpass";
    this.exhaustFilter.frequency.value = 260;
    this.exhaustFilter.Q.value = 0.9;
    this.exhaustGain = ctx.createGain();
    this.exhaustGain.gain.value = 0.0;
    this.exhaustNoise.connect(this.exhaustFilter);
    this.exhaustFilter.connect(this.exhaustGain);
    this.exhaustGain.connect(this.master);
    this.exhaustNoise.start();

    // ---- turbo ----
    this.turboOsc = ctx.createOscillator();
    this.turboOsc.type = "sine";
    this.turboOsc.frequency.value = 1800;
    this.turboGain = ctx.createGain();
    this.turboGain.gain.value = 0;
    this.turboOsc.connect(this.turboGain);
    this.turboGain.connect(this.master);
    this.turboOsc.start();

    // ---- pneus ----
    this.tireNoise = ctx.createBufferSource();
    this.tireNoise.buffer = this.noiseBuf;
    this.tireNoise.loop = true;
    this.tireFilter = ctx.createBiquadFilter();
    this.tireFilter.type = "bandpass";
    this.tireFilter.frequency.value = 2100;
    this.tireFilter.Q.value = 9;
    this.tireGain = ctx.createGain();
    this.tireGain.gain.value = 0;
    this.tireNoise.connect(this.tireFilter);
    this.tireFilter.connect(this.tireGain);
    this.tireGain.connect(this.master);
    this.tireNoise.start();

    // ---- vento ----
    this.windNoise = ctx.createBufferSource();
    this.windNoise.buffer = this.noiseBuf;
    this.windNoise.loop = true;
    this.windFilter = ctx.createBiquadFilter();
    this.windFilter.type = "lowpass";
    this.windFilter.frequency.value = 500;
    this.windGain = ctx.createGain();
    this.windGain.gain.value = 0;
    this.windNoise.connect(this.windFilter);
    this.windFilter.connect(this.windGain);
    this.windGain.connect(this.master);
    this.windNoise.start();

    // ---- torcida ----
    this.crowdNoise = ctx.createBufferSource();
    this.crowdNoise.buffer = this.noiseBuf;
    this.crowdNoise.loop = true;
    this.crowdFilter = ctx.createBiquadFilter();
    this.crowdFilter.type = "bandpass";
    this.crowdFilter.frequency.value = 650;
    this.crowdFilter.Q.value = 0.6;
    this.crowdGain = ctx.createGain();
    this.crowdGain.gain.value = 0.012;
    this.crowdNoise.connect(this.crowdFilter);
    this.crowdFilter.connect(this.crowdGain);
    this.crowdGain.connect(this.master);
    this.crowdNoise.start();

    this.ready = true;
  }

  setMuted(m) {
    this.muted = m;
    if (!this.ready || !this.master) return;
    this.master.gain.setTargetAtTime(m ? 0 : 0.85, this.ctx.currentTime, 0.03);
  }

  update(s) {
    if (!this.ready) return;
    const t = this.ctx.currentTime;
    const rpm = s.rpm || 850;
    const norm = Math.max(0, Math.min(1.15, s.rpmNorm || 0));
    const f = Math.max(22, (rpm / 60) * 2.15);
    for (const { o, oct } of this.oscs) {
      o.frequency.setTargetAtTime(f * oct, t, 0.02);
    }
    const running = s.racing ? 1 : 0.45;
    const load = s.racing ? (0.35 + 0.65 * (s.throttle || 0)) : 0.2;
    const eg = running * load * (0.055 + norm * 0.075);
    this.engineGain.gain.setTargetAtTime(eg, t, 0.045);
    this.engineFilter.frequency.setTargetAtTime(260 + norm * 1200 + (s.throttle || 0) * 700, t, 0.05);
    this.exhaustGain.gain.setTargetAtTime((s.racing ? 0.035 : 0.01) * (0.35 + (s.throttle || 0)) * (0.5 + norm * 0.8), t, 0.06);

    const turbo = s.racing ? Math.max(0, norm - 0.4) * (0.6 + (s.throttle || 0)) : 0;
    this.turboOsc.frequency.setTargetAtTime(1500 + norm * 2700, t, 0.06);
    this.turboGain.gain.setTargetAtTime(turbo * 0.02, t, 0.08);

    const slip = Math.min(1, s.slip || 0);
    this.tireGain.gain.setTargetAtTime(slip * 0.15, t, 0.05);
    this.tireFilter.frequency.setTargetAtTime(1650 + slip * 900, t, 0.1);

    this.windFilter.frequency.setTargetAtTime(380 + Math.min(1, (s.speed || 0) / 80) * 900, t, 0.2);
    this.windGain.gain.setTargetAtTime(Math.min(0.09, (s.speed || 0) * 0.0014), t, 0.15);
  }

  beep(freq = 700, dur = 0.09, vol = 0.16, type = "square") {
    if (!this.ready) return;
    const ctx = this.ctx;
    const o = ctx.createOscillator();
    o.type = type;
    o.frequency.value = freq;
    const g = ctx.createGain();
    g.gain.setValueAtTime(0.0001, ctx.currentTime);
    g.gain.exponentialRampToValueAtTime(vol, ctx.currentTime + 0.01);
    g.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + dur);
    o.connect(g);
    g.connect(this.master);
    o.start();
    o.stop(ctx.currentTime + dur + 0.02);
  }

  pop(strength = 1) {
    if (!this.ready) return;
    const ctx = this.ctx;
    const t = ctx.currentTime;
    if (t - this.lastPop < 0.035) return;
    this.lastPop = t;

    const src = ctx.createBufferSource();
    src.buffer = this.noiseBuf;
    src.playbackRate.value = 0.7 + Math.random() * 0.6;
    const f = ctx.createBiquadFilter();
    f.type = "lowpass";
    f.frequency.setValueAtTime(1200, t);
    f.frequency.exponentialRampToValueAtTime(260, t + 0.14);
    const g = ctx.createGain();
    g.gain.setValueAtTime(0.34 * strength, t);
    g.gain.exponentialRampToValueAtTime(0.001, t + 0.17);
    src.connect(f);
    f.connect(g);
    g.connect(this.master);
    src.start(t);
    src.stop(t + 0.2);

    const thump = ctx.createOscillator();
    thump.type = "sine";
    thump.frequency.setValueAtTime(110, t);
    thump.frequency.exponentialRampToValueAtTime(45, t + 0.12);
    const tg = ctx.createGain();
    tg.gain.setValueAtTime(0.22 * strength, t);
    tg.gain.exponentialRampToValueAtTime(0.001, t + 0.15);
    thump.connect(tg);
    tg.connect(this.master);
    thump.start(t);
    thump.stop(t + 0.16);
  }

  whoosh() {
    if (!this.ready) return;
    const ctx = this.ctx;
    const t = ctx.currentTime;
    const src = ctx.createBufferSource();
    src.buffer = this.noiseBuf;
    src.playbackRate.value = 1.4;
    const f = ctx.createBiquadFilter();
    f.type = "bandpass";
    f.frequency.setValueAtTime(2400, t);
    f.frequency.exponentialRampToValueAtTime(700, t + 0.3);
    f.Q.value = 1.5;
    const g = ctx.createGain();
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(0.09, t + 0.03);
    g.gain.exponentialRampToValueAtTime(0.0001, t + 0.32);
    src.connect(f);
    f.connect(g);
    g.connect(this.master);
    src.start(t);
    src.stop(t + 0.34);
  }

  foul() {
    if (!this.ready) return;
    const ctx = this.ctx;
    const t = ctx.currentTime;
    const o = ctx.createOscillator();
    o.type = "sawtooth";
    o.frequency.value = 120;
    const g = ctx.createGain();
    g.gain.setValueAtTime(0.12, t);
    g.gain.setValueAtTime(0.12, t + 0.3);
    g.gain.exponentialRampToValueAtTime(0.001, t + 0.5);
    o.connect(g);
    g.connect(this.master);
    o.start(t);
    o.stop(t + 0.52);
  }

  win() {
    if (!this.ready) return;
    const notes = [523.25, 659.25, 783.99, 1046.5];
    notes.forEach((f, i) => {
      const ctx = this.ctx;
      const t = ctx.currentTime + i * 0.09;
      const o = ctx.createOscillator();
      o.type = "triangle";
      o.frequency.value = f;
      const g = ctx.createGain();
      g.gain.setValueAtTime(0.0001, t);
      g.gain.exponentialRampToValueAtTime(0.16, t + 0.02);
      g.gain.exponentialRampToValueAtTime(0.0001, t + 0.45);
      o.connect(g);
      g.connect(this.master);
      o.start(t);
      o.stop(t + 0.5);
    });
    // torcida
    const ctx = this.ctx;
    const t = ctx.currentTime;
    const src = ctx.createBufferSource();
    src.buffer = this.noiseBuf;
    src.loop = true;
    src.playbackRate.value = 1.1;
    const f = ctx.createBiquadFilter();
    f.type = "bandpass";
    f.frequency.value = 900;
    f.Q.value = 0.7;
    const g = ctx.createGain();
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(0.07, t + 0.2);
    g.gain.exponentialRampToValueAtTime(0.0001, t + 1.9);
    src.connect(f);
    f.connect(g);
    g.connect(this.master);
    src.start(t);
    src.stop(t + 2);
  }

  lose() {
    if (!this.ready) return;
    const ctx = this.ctx;
    [220, 174.6].forEach((fr, i) => {
      const t = ctx.currentTime + i * 0.18;
      const o = ctx.createOscillator();
      o.type = "sawtooth";
      o.frequency.value = fr;
      const g = ctx.createGain();
      g.gain.setValueAtTime(0.0001, t);
      g.gain.exponentialRampToValueAtTime(0.08, t + 0.02);
      g.gain.exponentialRampToValueAtTime(0.0001, t + 0.5);
      o.connect(g);
      g.connect(this.master);
      o.start(t);
      o.stop(t + 0.52);
    });
  }

  ui() {
    this.beep(950, 0.045, 0.05, "triangle");
  }
}
