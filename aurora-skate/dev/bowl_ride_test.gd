extends Node
## Teste dev: subir a transição do bowl e sair pelo coping.

var main: Node3D
var t := 0.0
var started := false
var done := false
var max_y := -99.0


func _init() -> void:
	process_mode = Node.PROCESS_MODE_ALWAYS


func _ready() -> void:
	main = load("res://scenes/main.tscn").instantiate()
	add_child(main)


func _physics_process(delta: float) -> void:
	t += delta
	var p: CharacterBody3D = main.player if main != null else null
	if p == null:
		return
	if not started:
		if t > 0.5:
			started = true
			main._start_game()
			p.global_position = Vector3(-180, -4.0, 95)
			p.facing = 0.0
			p.velocity = Vector3(0, 0, -13)
			p.state = 0
			p.safe_pos = p.global_position + Vector3(0, 4.0, 0)
			p.debug = true
		return
	if done:
		return

	InputHub.touch_stick(Vector2(0, -1))
	max_y = maxf(max_y, p.global_position.y)
	if Engine.get_physics_frames() % 5 == 0:
		print("t=%.2f z=%.1f y=%.2f state=%d floor=%s" % [
			t, p.global_position.z, p.global_position.y, p.state, str(p.is_on_floor())])

	if t > 6.0:
		done = true
		InputHub.release_all()
		print("MAX_Y=%.2f final_state=%d score=%d" % [max_y, p.state, Game.score])
		get_tree().quit()
