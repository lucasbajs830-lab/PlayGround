// Simulação longitudinal de arrancada — sem dependências, roda no jogo e em testes.
// Unidades: metros, segundos, kg, N.m.

const RHO = 1.225;
const G = 9.81;

export function clamp(v, a, b) {
  return v < a ? a : v > b ? b : v;
}
export function lerp(a, b, t) {
  return a + (b - a) * t;
}

export class DragSim {
  constructor(spec) {
    this.spec = spec;
    this.reset();
  }

  reset() {
    const s = this.spec;
    this.speed = 0;
    this.distance = 0;
    this.gear = 1;
    this.engineRpm = s.idle;
    this.throttle = 0;
    this.clutch = true;
    this.steer = 0;
    this.brake = 0;
    this.accel = 0;
    this.wheelspin = 0; // 0..1 visual/áudio
    this.tireTemp = 0.25;
    this.shiftTimer = 0;
    this.shiftCount = 0;
    this.bogTimer = 0;
    this.clutchSlip = 0;
    this.releaseRpm = 0;
    this.releaseQuality = 1;
    this.lateral = 0;
    this.lateralV = 0;
    this.odo = 0;
    this.launched = false;
    this.justReleased = false;
    this.justShifted = false;
    this.hitWall = false;
    this.redlineCut = 0;
    this.prevClutch = true;
    this.wheelRpm = 0;
    this.time = 0;
  }

  get ratio() {
    return this.spec.gears[this.gear - 1] * this.spec.finalDrive;
  }

  get speedKmh() {
    return this.speed * 3.6;
  }

  get rpmNorm() {
    return clamp((this.engineRpm - this.spec.idle) / (this.spec.redline - this.spec.idle), 0, 1.12);
  }

  torqueAt(rpm) {
    const s = this.spec;
    const x = clamp(rpm / s.peakRpm, 0.12, 1.6);
    let f = 1 - 0.52 * Math.pow(x - 1, 2);
    if (x > 1.32) f *= clamp(1 - (x - 1.32) * 0.9, 0.35, 1);
    if (rpm > s.redline) {
      // limitador
      f *= 0.25;
    }
    return Math.max(30, s.torque * f);
  }

  shiftUp() {
    if (this.gear < this.spec.gears.length && this.shiftTimer <= 0) {
      this.gear++;
      this.shiftTimer = 0.13;
      this.shiftCount++;
      this.justShifted = true;
      return true;
    }
    return false;
  }

  shiftDown() {
    if (this.gear > 1 && this.shiftTimer <= 0) {
      this.gear--;
      this.shiftTimer = 0.13;
      this.justShifted = true;
      return true;
    }
    return false;
  }

  autoShift() {
    if (this.shiftTimer > 0) return;
    // usa o giro das rodas (não o flare de patinação) para decidir a troca
    const rpm = this.wheelRpm || this.engineRpm;
    if (rpm > this.spec.redline - 260 && this.gear < this.spec.gears.length) {
      this.shiftUp();
    } else if (rpm < this.spec.peakRpm * 0.42 && this.gear > 1 && this.speed < 20) {
      this.shiftDown();
    }
  }

  /**
   * @param dt segundos
   * @param input {throttle, clutch, steer, brake}
   * @param locked true durante a árvore de largada (carro preso na faixa)
   */
  step(dt, input = {}, locked = false) {
    dt = Math.min(dt, 1 / 30);
    const s = this.spec;
    this.time += dt;
    this.justReleased = false;
    this.justShifted = false;
    this.hitWall = false;

    this.throttle = clamp(input.throttle || 0, 0, 1);
    const clutchNow = !!input.clutch;
    this.steer = clamp(input.steer || 0, -1, 1);
    this.brake = clamp(input.brake || 0, 0, 1);

    if (this.prevClutch && !clutchNow) {
      this.justReleased = true;
      this.releaseRpm = this.engineRpm;
      this.clutchSlip = 0.65;
      const ideal = s.launchRpm;
      const over = clamp((this.releaseRpm - ideal - 900) / 2800, 0, 1);
      const under = this.releaseRpm < ideal - 1400;
      this.releaseQuality = (1 - over * 0.24) * (under ? 0.82 : 1);
      if (under) this.bogTimer = 0.55;
      if (this.speed > 0.4) this.launched = true;
    }
    this.prevClutch = clutchNow;
    this.clutch = clutchNow;

    this.shiftTimer = Math.max(0, this.shiftTimer - dt);
    this.bogTimer = Math.max(0, this.bogTimer - dt);
    if (this.clutchSlip > 0) this.clutchSlip = Math.max(0, this.clutchSlip - dt);

    const wheelRps = this.speed / (2 * Math.PI * s.wheelRadius);
    const rpmFromWheel = wheelRps * this.ratio * 60;
    this.wheelRpm = rpmFromWheel;

    // ---- motor ----
    if (locked) {
      // Com a embreagem pressionada o motor gira livre; sem ela, fica em marcha
      // lenta contra o freio de largada (e a saída fica "murcha").
      let target = s.idle;
      if (this.clutch && this.throttle > 0.03) target = s.idle + this.throttle * (s.redline - s.idle);
      this.engineRpm += (target - this.engineRpm) * Math.min(1, dt * 2.4);
      this.engineRpm = clamp(this.engineRpm, s.idle, s.redline);
      this.speed = 0;
      this.accel = 0;
      this.wheelspin *= Math.exp(-dt * 5);
      this.tireTemp = Math.max(0.2, this.tireTemp - dt * 0.05);
      return;
    }

    if (this.clutch) {
      // pedal de embreagem pressionado = motor livre, sem força nas rodas
      const target = this.throttle > 0.03 ? s.idle + this.throttle * (s.redline - s.idle) : s.idle;
      this.engineRpm += (target - this.engineRpm) * Math.min(1, dt * 3.0);
      this.engineRpm = clamp(this.engineRpm, s.idle, s.redline);
      this.wheelspin *= Math.exp(-dt * 4);
      this.accel = 0;
      // ainda anda por inércia
      this.applyResistance(dt, false);
      return;
    }

    // embreagem solta: motor acoplado (com escorregão inicial)
    let rpm = rpmFromWheel;
    if (this.clutchSlip > 0) {
      const t = 1 - this.clutchSlip / 0.65;
      rpm = lerp(this.releaseRpm, Math.max(rpmFromWheel, s.idle), t * t);
    }
    if (this.wheelspin > 0.35) {
      rpm = Math.max(rpm, Math.min(s.redline + 150, rpmFromWheel + this.wheelspin * 2200));
    }
    if (this.shiftTimer > 0) rpm = Math.max(rpm, rpmFromWheel);
    this.engineRpm = clamp(Math.max(rpm, this.speed > 1 ? s.idle : s.idle), s.idle, s.redline + 150);

    // ---- força ----
    let torque = this.torqueAt(this.engineRpm) * this.throttle;
    if (this.shiftTimer > 0) torque *= 0.06; // corte de ignição na troca
    if (this.bogTimer > 0) torque *= 0.55;
    if (this.throttle < 0.03) torque *= 0.15;

    let force = (torque * this.ratio * 0.9) / s.wheelRadius;

    // aderência do eixo traseiro + transferência de peso
    const loadTransfer = s.mass * clamp(this.accel, -12, 18) * 0.15;
    const rearLoad = Math.max(s.mass * G * 0.4, s.mass * G * 0.56 + loadTransfer);
    const mu = s.grip * (0.93 + this.tireTemp * 0.07) * this.releaseQuality;
    const traction = mu * rearLoad;

    let slipTarget = 0;
    if (force > traction && this.throttle > 0.15) {
      force = traction * 0.74;
      slipTarget = 1;
    } else {
      slipTarget = clamp((force / Math.max(traction, 1)) * 0.45, 0, 0.8);
    }
    if (this.wheelspin > 0.7 && this.speed < 8) slipTarget = Math.max(slipTarget, 0.85);

    this.wheelspin += (slipTarget - this.wheelspin) * Math.min(1, dt * 7);
    this.tireTemp = clamp(this.tireTemp + this.wheelspin * dt * 0.09, 0.2, 1);

    let resistance = 0.5 * RHO * s.cdA * this.speed * this.speed + 0.014 * s.mass * G;
    if (this.throttle < 0.04) resistance += s.mass * 0.45;
    force -= resistance;

    if (this.brake > 0 && this.speed > 0.2) {
      force -= this.brake * s.mass * 11;
    }
    if (this.speed < 0.01 && force < 0) force = 0;

    this.accel = force / s.mass;
    const prevSpeed = this.speed;
    this.speed = Math.max(0, this.speed + this.accel * dt);
    const avg = (prevSpeed + this.speed) * 0.5;
    this.distance += avg * dt;
    this.odo += avg * dt;

    // ---- volante / faixa ----
    if (this.speed > 1) {
      this.lateralV += this.steer * this.speed * 0.30 * dt;
    }
    this.lateralV *= Math.exp(-dt * 2.1);
    this.lateral += this.lateralV * dt;
    if (Math.abs(this.lateral) > 2.9) {
      this.lateral = clamp(this.lateral, -2.9, 2.9);
      this.lateralV *= -0.25;
      this.speed *= 0.992;
      this.hitWall = true;
    }

    // velocímetro/limite de giro
    if (this.engineRpm >= s.redline) this.redlineCut = 1;
    else this.redlineCut = Math.max(0, this.redlineCut - dt * 4);
  }

  applyResistance(dt, moving = true) {
    if (this.speed <= 0) {
      this.speed = 0;
      return;
    }
    const s = this.spec;
    const res = (0.5 * RHO * s.cdA * this.speed * this.speed + 0.014 * s.mass * G) / s.mass;
    this.speed = Math.max(0, this.speed - res * dt);
    this.distance += this.speed * dt;
    this.odo += this.speed * dt;
    if (this.speed > 0.5) {
      this.lateralV *= Math.exp(-dt * 2.5);
      this.lateral += this.lateralV * dt;
    }
  }
}

export const QUARTER_MILE = 402.336;
export const EIGHTH_MILE = 201.168;
