const KEY = "dragbrasil.save.v1";

const defaultUpgrades = () => ({ engine: 0, tires: 0, weight: 0, gearbox: 0 });

export function defaultSave() {
  return {
    money: 1500,
    ownedCars: ["falcao"],
    selected: "falcao",
    paints: { falcao: "laranja" },
    upgrades: { falcao: defaultUpgrades() },
    wins: 0,
    losses: 0,
    races: 0,
    bestET: null,
    bestTrap: null,
    sound: true,
    careerWins: 0,
    seenHelp: false,
  };
}

export function loadSave() {
  const base = defaultSave();
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return base;
    const data = JSON.parse(raw);
    const merged = { ...base, ...data };
    merged.ownedCars = Array.isArray(data.ownedCars) && data.ownedCars.length ? data.ownedCars : base.ownedCars;
    if (!merged.ownedCars.includes(merged.selected)) merged.selected = merged.ownedCars[0];
    merged.upgrades = { ...base.upgrades, ...(data.upgrades || {}) };
    for (const id of Object.keys(merged.upgrades)) {
      merged.upgrades[id] = { ...defaultUpgrades(), ...merged.upgrades[id] };
    }
    merged.paints = { ...base.paints, ...(data.paints || {}) };
    return merged;
  } catch {
    return base;
  }
}

export function persist(save) {
  try {
    localStorage.setItem(KEY, JSON.stringify(save));
  } catch {
    /* storage cheio ou bloqueado — o jogo continua */
  }
}

export function money(n) {
  return "R$ " + Math.round(n).toLocaleString("pt-BR");
}

export function fmtTime(t) {
  if (t == null || !isFinite(t)) return "—";
  return t.toFixed(3) + "s";
}
