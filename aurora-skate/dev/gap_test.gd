extends Node
## Harness de teste/dev: carrega o jogo real, simula toques no InputHub,
## captura screenshots e imprime o estado do jogador. Não faz parte do jogo.
## Teste 2: gap da fonte + banco de combo.

var main: Node3D
var t := 0.0
var started := false
var phase := 0
var shots: Array[String] = []
var log_lines: Array[String] = []
var gap_shot_done := false


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

	if Engine.get_process_frames() % 10 == 0:
		var spd := Vector3(p.velocity.x, 0, p.velocity.z).length()
		log_lines.append("t=%.1f pos=(%.1f,%.1f,%.1f) state=%d speed=%.1f" % [t, p.global_position.x, p.global_position.y, p.global_position.z, p.state, spd])

	if p.state == 1 and absf(p.global_position.z) < 4.0 and not gap_shot_done:
		gap_shot_done = true
		_shot("07_gap")

	match phase:
		0:  # empurra reto para o norte, em direção à fonte
			InputHub.touch_stick(Vector2(0, -1))
			if p.global_position.z < 12.0 and p.state == 0:
				InputHub.touch_stick(Vector2.ZERO)
				_press("ollie", 0.3)
				phase = 1
		1:  # espera pousar
			InputHub.touch_stick(Vector2.ZERO)
			if p.state == 0 and p.global_position.z < -8.0:
				phase = 2
			if t > 12.0:
				phase = 9
		2:  # espera o banco da combo (4 s)
			InputHub.release_all()
			if t > 8.0:
				_shot("08_banked")
				phase = 9
		9:
			for l in log_lines:
				print(l)
			print("SCORE=", Game.score, " PENDING=", Game.pending, " MULT=", Game.mult)
			for s in shots:
				print("SHOT=", s)
			get_tree().quit()
