extends Node
## Teste dev: bowl (transições) + gap da escadaria, com teletransportes.

var main: Node3D
var t := 0.0
var started := false
var phase := 0
var shots: Array[String] = []
var log_lines: Array[String] = []
var bowl_shot := false
var stair_shot := false


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


func _teleport(p: CharacterBody3D, pos: Vector3, facing: float) -> void:
	p.global_position = pos
	p.facing = facing
	p.velocity = Vector3.ZERO
	p.state = 0
	p.safe_pos = pos
	p.charge = -1.0


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

	match phase:
		0:
			_teleport(p, Vector3(-180, -4.3, 95), 0.0)  # fundo do bowl, de frente para a parede sul
			phase = 1
		1:  # atravessa o piso e sobe a transição
			InputHub.touch_stick(Vector2(0, -1))
			if p.global_position.y > -3.0 and not bowl_shot:
				bowl_shot = true
				_shot("09_bowl")
			if t > 7.0:
				phase = 2
		2:
			_teleport(p, Vector3(155, 2.3, 0), -PI / 2.0)  # plataforma, de frente para o leste (+x)
			phase = 3
		3:  # empurra e salta a escadaria
			InputHub.touch_stick(Vector2(0, -1))
			if p.global_position.x > 166.0 and p.state == 0:
				InputHub.touch_stick(Vector2.ZERO)
				_press("ollie", 0.25)
				phase = 4
			if t > 10.0:
				phase = 9
		4:
			InputHub.touch_stick(Vector2.ZERO)
			if p.state == 1 and p.global_position.x > 169.0 and not stair_shot:
				stair_shot = true
				_shot("10_stairs")
			if p.state == 0 and p.global_position.x > 178.0:
				phase = 5
			if t > 13.0:
				phase = 5
		5:  # espera banco
			InputHub.release_all()
			if t > 16.0:
				phase = 9
		9:
			for l in log_lines:
				print(l)
			print("SCORE=", Game.score, " PENDING=", Game.pending, " MULT=", Game.mult)
			for s in shots:
				print("SHOT=", s)
			get_tree().quit()
