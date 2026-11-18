extends Node
## Teste dev: kicker do túnel (lançamento, estado aéreo e gap).

var main: Node3D
var t := 0.0
var started := false
var done := false
var last_score := 0
var frames := 0


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
			p.global_position = Vector3(94, 0.8, -150)
			p.facing = -PI / 2.0
			p.velocity = Vector3.ZERO
			p.state = 0
			p.safe_pos = p.global_position
		return
	if done:
		return

	InputHub.touch_stick(Vector2(0, -1))

	if p.global_position.x > 100.0:
		print("x=%.2f y=%.2f vx=%.1f vy=%.2f state=%d floor=%s n=%s score=%d" % [
			p.global_position.x, p.global_position.y, p.velocity.x, p.velocity.y,
			p.state, str(p.is_on_floor()), str(p.get_floor_normal()),
			Game.score])

	if Game.score != last_score:
		print("SCORE_CHANGE ", last_score, " -> ", Game.score)
		last_score = Game.score

	if p.global_position.x > 145.0 or t > 10.0:
		done = true
		InputHub.release_all()
		print("DONE x=%.2f score=%d" % [p.global_position.x, Game.score])
		get_tree().quit()
