extends Area3D
## Zona de gap: premia o jogador ao cruzá-la no ar.

var armed := false


func _ready() -> void:
	body_entered.connect(_on_body)
	body_exited.connect(_on_body_exited)


func _on_body(b: Node3D) -> void:
	if armed or not b.is_in_group("player"):
		return
	if b.has_method("is_airborne") and b.is_airborne():
		armed = true
		Game.gap(get_meta("gap"))


func _on_body_exited(b: Node3D) -> void:
	if b.is_in_group("player"):
		armed = false
