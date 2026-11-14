// Catálogo de carros e adversários — tudo procedural, sem assets externos.

export const PAINTS = [
  { id: "laranja", name: "Laranja Brasa", hex: "#ff5a12", metal: 0.75, rough: 0.24 },
  { id: "amarelo", name: "Amarelo Taxi", hex: "#ffc400", metal: 0.6, rough: 0.28 },
  { id: "verde", name: "Verde Macaco", hex: "#25c45b", metal: 0.65, rough: 0.26 },
  { id: "azul", name: "Azul Noite", hex: "#1b63ff", metal: 0.8, rough: 0.22 },
  { id: "roxo", name: "Roxo Veneno", hex: "#8c2bff", metal: 0.75, rough: 0.24 },
  { id: "vermelho", name: "Vermelho Sangue", hex: "#d20d24", metal: 0.7, rough: 0.26 },
  { id: "branco", name: "Branco Perola", hex: "#e8e6df", metal: 0.45, rough: 0.3 },
  { id: "preto", name: "Preto Fosco", hex: "#16161b", metal: 0.35, rough: 0.55 },
];

export const CARS = [
  {
    id: "falcao",
    name: "FALCÃO V8",
    klass: "V8 5.0",
    price: 0,
    tagline: "O clássico de arrancada. Pesado, bruto, sem frescura.",
    mass: 1450,
    torque: 480,
    peakRpm: 4300,
    redline: 6800,
    idle: 850,
    gears: [3.22, 2.08, 1.49, 1.16, 0.92, 0.76],
    finalDrive: 3.55,
    wheelRadius: 0.345,
    cdA: 0.82,
    grip: 1.02,
    launchRpm: 3900,
    color: "#ff5a12",
  },
  {
    id: "tubarao",
    name: "TUBARÃO V8",
    klass: "V8 6.2",
    price: 3500,
    tagline: "Mais torque embaixo. Sai de lado se pisar demais.",
    mass: 1520,
    torque: 610,
    peakRpm: 4100,
    redline: 6600,
    idle: 800,
    gears: [3.05, 1.98, 1.44, 1.12, 0.9, 0.74],
    finalDrive: 3.42,
    wheelRadius: 0.35,
    cdA: 0.86,
    grip: 1.08,
    launchRpm: 3700,
    color: "#1b63ff",
  },
  {
    id: "foguete",
    name: "FOGUETE TURBO",
    klass: "TURBO 2.0",
    price: 8000,
    tagline: "Leve igual papel. O turbo acorda depois dos 3 mil.",
    mass: 1160,
    torque: 445,
    peakRpm: 5200,
    redline: 7600,
    idle: 950,
    gears: [3.35, 2.18, 1.56, 1.2, 0.95, 0.79],
    finalDrive: 3.9,
    wheelRadius: 0.33,
    cdA: 0.68,
    grip: 1.13,
    launchRpm: 4600,
    color: "#ffc400",
  },
  {
    id: "lenda",
    name: "LENDA 900",
    klass: "PRO MOD",
    price: 16000,
    tagline: "Gaiola, slicks e 900 cv. Não é carro, é um foguete com placa.",
    mass: 1080,
    torque: 880,
    peakRpm: 5000,
    redline: 8200,
    idle: 1100,
    gears: [3.6, 2.3, 1.62, 1.24, 1.0, 0.82],
    finalDrive: 4.11,
    wheelRadius: 0.36,
    cdA: 0.62,
    grip: 1.35,
    launchRpm: 5200,
    color: "#8c2bff",
  },
];

export const UPGRADES = [
  {
    id: "engine",
    name: "MOTOR",
    desc: "Comando, admissão e acerto de injeção.",
    effect: "+7% de torque por nível",
    max: 6,
    base: 650,
    growth: 1.55,
  },
  {
    id: "tires",
    name: "PNEUS",
    desc: "Composto mais mole e pressão de arrancada.",
    effect: "+5% de aderência por nível",
    max: 6,
    base: 550,
    growth: 1.55,
  },
  {
    id: "weight",
    name: "PESO",
    desc: "Bancos fora, fibra no lugar do aço.",
    effect: "−3% de massa por nível",
    max: 6,
    base: 600,
    growth: 1.55,
  },
  {
    id: "gearbox",
    name: "CÂMBIO",
    desc: "Relação final curta pra esticar menos e sair mais.",
    effect: "+2% de redução final por nível",
    max: 6,
    base: 750,
    growth: 1.55,
  },
];

export function upgradeCost(upg, level) {
  return Math.round((upg.base * Math.pow(upg.growth, level)) / 50) * 50;
}

export function buildSpec(car, upgrades = {}) {
  const u = {
    engine: upgrades.engine | 0,
    tires: upgrades.tires | 0,
    weight: upgrades.weight | 0,
    gearbox: upgrades.gearbox | 0,
  };
  return {
    id: car.id,
    name: car.name,
    mass: car.mass * (1 - 0.03 * u.weight),
    torque: car.torque * (1 + 0.07 * u.engine),
    peakRpm: car.peakRpm,
    redline: car.redline,
    idle: car.idle,
    gears: car.gears.slice(),
    finalDrive: car.finalDrive * (1 + 0.02 * u.gearbox),
    wheelRadius: car.wheelRadius,
    cdA: car.cdA,
    grip: car.grip * (1 + 0.05 * u.tires),
    launchRpm: car.launchRpm,
  };
}

// Pequeno "dyno" pra exibir potência estimada no menu.
export function estimatePower(car, upgrades) {
  const s = buildSpec(car, upgrades);
  const rpm = s.peakRpm;
  const w = (rpm * Math.PI * 2) / 60;
  return Math.round((s.torque * w) / 745.7);
}

export const RIVALS = [
  {
    name: "ZÉ DO TURBO",
    quote: "“Essa reta é minha desde 1998, garoto.”",
    car: "falcao",
    upgrades: { engine: 1, tires: 1 },
    reward: 1500,
    tier: 1,
  },
  {
    name: "DONA ZILDA",
    quote: "“Sai da frente que eu tô atrasada pro bingo.”",
    car: "falcao",
    upgrades: { engine: 3, tires: 2, weight: 1 },
    reward: 2200,
    tier: 2,
  },
  {
    name: "BETÃO V8",
    quote: "“Meu bloco é de ferro. Seu ego é de alumínio.”",
    car: "tubarao",
    upgrades: { engine: 2, tires: 3, weight: 2 },
    reward: 3200,
    tier: 3,
  },
  {
    name: "O MECÂNICO",
    quote: "“Eu montei os dois motores dessa pista. Boa sorte.”",
    car: "tubarao",
    upgrades: { engine: 4, tires: 4, weight: 3, gearbox: 2 },
    reward: 4400,
    tier: 4,
  },
  {
    name: "CAMPEÃ DA VILA",
    quote: "“Aqui não tem pole position. Tem vergonha na cara.”",
    car: "foguete",
    upgrades: { engine: 4, tires: 5, weight: 4, gearbox: 3 },
    reward: 6000,
    tier: 5,
  },
  {
    name: "O MESTRE",
    quote: "“Quando a luz verde acender, já vai ser tarde.”",
    car: "foguete",
    upgrades: { engine: 6, tires: 6, weight: 5, gearbox: 5 },
    reward: 8000,
    tier: 6,
  },
  {
    name: "FANTASMA 900",
    quote: "“Ninguém nunca viu meu carro de lado. Só o escape.”",
    car: "lenda",
    upgrades: { engine: 5, tires: 6, weight: 5, gearbox: 4 },
    reward: 10500,
    tier: 7,
  },
  {
    name: "O REI DA PISTA",
    quote: "“Última etapa. Depois dessa, o asfalto é seu.”",
    car: "lenda",
    upgrades: { engine: 6, tires: 6, weight: 6, gearbox: 6 },
    reward: 14000,
    tier: 8,
  },
];

export const RIVAL_PAINTS = ["#25c45b", "#1b63ff", "#d20d24", "#8c2bff", "#e8e6df", "#ffc400", "#16161b", "#ff5a12"];

export function carById(id) {
  return CARS.find((c) => c.id === id) || CARS[0];
}
