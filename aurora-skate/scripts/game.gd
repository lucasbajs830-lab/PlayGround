extends Node
## Game (autoload): pontuação, combos, popups de manobra.

signal score_changed(score: int, pending: int, mult: int)
signal trick_popup(text: String, points: int)
signal combo_ended(total: int, mult: int)

const COMBO_WINDOW := 4.0
const MAX_MULT := 20

var score := 0
var pending := 0
var mult := 0
var best_combo := 0
var combo_timer := 0.0


func _process(delta: float) -> void:
	if pending > 0:
		combo_timer -= delta
		if combo_timer <= 0.0:
			bank()


func reset() -> void:
	score = 0
	pending = 0
	mult = 0
	best_combo = 0
	combo_timer = 0.0
	score_changed.emit(score, pending, mult)


## Registra uma manobra (nome já formatado) valendo `pts` na combo atual.
func add_trick(text: String, pts: int) -> void:
	if pts <= 0:
		return
	pending += pts
	mult = mini(mult + 1, MAX_MULT)
	combo_timer = COMBO_WINDOW
	trick_popup.emit(text, pts)
	score_changed.emit(score, pending, mult)


## Mantém a combo viva durante grinds/manuals.
func extend_combo() -> void:
	if pending > 0:
		combo_timer = COMBO_WINDOW


## Fecha a combo: soma pendente * multiplicador no placar.
func bank() -> void:
	if pending <= 0:
		return
	var total := pending * maxi(mult, 1)
	score += total
	best_combo = maxi(best_combo, total)
	trick_popup.emit("Combo x%d  +%d" % [maxi(mult, 1), total], total)
	pending = 0
	mult = 0
	combo_timer = 0.0
	combo_ended.emit(total, 0)
	score_changed.emit(score, pending, mult)


## Queda: perde tudo que estava na combo.
func bail() -> void:
	pending = 0
	mult = 0
	combo_timer = 0.0
	trick_popup.emit("Queda!", 0)
	score_changed.emit(score, pending, mult)


func gap(gap_name: String) -> void:
	add_trick("GAP %s" % gap_name, 500)
