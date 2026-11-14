import "./style.css";
import { Game } from "./game.js";

// pequeno atraso para a tela de boot pintar antes de montar a cena
function bootGame() {
  if (window.__dragBrasil) return;
  window.__dragBrasil = new Game();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", bootGame, { once: true });
} else {
  bootGame();
}
