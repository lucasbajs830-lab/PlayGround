extends Node
## Harness de teste/dev: carrega o jogo real, simula toques no InputHub,
## captura screenshots e imprime o estado do jogador. Não faz parte do jogo.

var main: Node3D
var t := 0.0
var started := false
var phase := 0
var shots: Array[String] = []
var log_lines: Array[String] = []
var shot_timer := 0.0
var grind_shot_done := false
var manual_shot_done := false
var manual_started_at := 0.0


func _init() -> void:
	process_mode = Node.PROCESS_MODE_ALWAYS


func _ready() -> void:
	main = load("res://scenes/main.tscn").instantiate()
	add_child(main)


func _shot(name: String) -> void:
	var img := get_viewport().get_texture().get_image()
	img.resize(960, 540, Image.INTERPOLATE_BILINEAR)
	var path := "/tmp/opencode/shots/%s.jpg" % name
	img.save_jpg(path, 80)
	shots.append(path)


func _press(name: String, dur: float) -> void:
	InputHub.touch_button(name, true)
	var timer := get_tree().create_timer(dur)
	timer.timeout.connect(func() -> void: InputHub.touch_button(name, false))


func _steer_towards(p: CharacterBody3D, target: Vector3) -> Vector2:
	var dir := target - p.global_position
	dir.y = 0.0
	var want := atan2(-dir.x, -dir.z)
	var err := wrapf(want - p.facing, -PI, PI)
	return Vector2(clampf(-err * 2.5, -1.0, 1.0), -1.0)


func _process(delta: float) -> void:
	t += delta
	var p: CharacterBody3D = main.player
	if p == null:
		return
	if not started:
		if t > 0.4:
			started = true
			main._start_game()
		return

	if Engine.get_process_frames() % 30 == 0:
		var spd := Vector3(p.velocity.x, 0, p.velocity.z).length()
		log_lines.append("t=%.1f pos=(%.1f,%.1f,%.1f) state=%d speed=%.1f" % [t, p.global_position.x, p.global_position.y, p.global_position.z, p.state, spd])

	# screenshots globais por estado
	if p.state == 2 and not grind_shot_done:  # GRIND
		grind_shot_done = true
		_shot("05_grind")
	if p.state == 3 and not manual_shot_done:  # MANUAL
		manual_shot_done = true
		_shot("06_manual")

	match phase:
		0:  # empurra em direção à barra plana (x=28, z 0)
			InputHub.touch_stick(_steer_towards(p, Vector3(28, 0, 4)))
			if p.global_position.z < 9.0 and absf(p.global_position.x - 28.0) < 3.0 and p.state == 0:
				InputHub.touch_stick(Vector2.ZERO)
				_press("ollie", 0.15)
				phase = 1
			if t > 12.0:
				phase = 9
		1:  # no ar / grind: mantém reto e neutro
			InputHub.touch_stick(Vector2.ZERO)
			if p.state == 0 and t > 6.0 and Vector3(p.velocity.x, 0, p.velocity.z).length() > 4.0:
				manual_started_at = t
				phase = 2
			if t > 10.0:
				phase = 9
		2:  # manual: stick neutro, segura o botão
			InputHub.touch_stick(Vector2.ZERO)
			InputHub.touch_button("grind", true)
			if p.state == 3 and t - manual_started_at > 1.2:
				InputHub.touch_button("grind", false)
				phase = 9
			if t - manual_started_at > 5.0:
				InputHub.touch_button("grind", false)
				phase = 9
		9:
			InputHub.release_all()
			for l in log_lines:
				print(l)
			print("SCORE=", Game.score, " PENDING=", Game.pending, " MULT=", Game.mult)
			for s in shots:
				print("SHOT=", s)
			get_tree().quit()
