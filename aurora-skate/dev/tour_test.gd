extends Node
## Teste dev: tour visual e funcional (fonte, túnel, bowl, rua).

var main: Node3D
var t := 0.0
var started := false
var phase := 0
var shots: Array[String] = []
var log_lines: Array[String] = []
var flags := {}


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
	p.debug = true


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
		if t > 0.5:
			_shot("01_menu")
			started = true
			main._start_game()
		return

	if Engine.get_process_frames() % 15 == 0:
		var spd := Vector3(p.velocity.x, 0, p.velocity.z).length()
		log_lines.append("t=%.1f pos=(%.1f,%.1f,%.1f) state=%d speed=%.1f" % [t, p.global_position.x, p.global_position.y, p.global_position.z, p.state, spd])

	var pos := p.global_position
	match phase:
		0:  # fonte: pula o gap
			_teleport(p, Vector3(0, 0.8, 30), 0.0)
			phase = 1
		1:
			InputHub.touch_stick(Vector2(0, -1))
			if pos.z < 16.0 and p.state == 0:
				InputHub.touch_stick(Vector2.ZERO)
				_press("ollie", 0.28)
				phase = 2
			if t > 6.0:
				phase = 4
		2:
			InputHub.touch_stick(Vector2.ZERO)
			if p.state == 1 and absf(pos.z) < 5.0 and not flags.has("fonte"):
				flags["fonte"] = true
				_shot("02_fonte_gap")
			if p.state == 0 and pos.z < -8.0:
				phase = 3
			if t > 10.0:
				phase = 3
		3:
			if t > 10.6:
				phase = 4
		4:  # túnel: entra pelo oeste e usa o kicker
			_teleport(p, Vector3(92, 0.8, -150), -PI / 2.0)
			phase = 5
		5:
			InputHub.touch_stick(Vector2(0, -1))
			if pos.x > 114.0 and pos.y > 1.0 and not flags.has("tunel"):
				flags["tunel"] = true
				_shot("03_tunel")
			if pos.x > 145.0 or p.state == 4:
				phase = 6
			if t > 14.0:
				phase = 6
		6:
			if t > 14.6:
				phase = 7
		7:  # bowl: cai e patina
			_teleport(p, Vector3(-180, 0.8, 126), 0.0)
			phase = 8
		8:
			InputHub.touch_stick(Vector2(0, -1))
			if pos.y < -2.0 and not flags.has("bowl"):
				flags["bowl"] = true
				_shot("04_bowl")
			if t > 20.0:
				phase = 9
		9:
			if t > 20.6:
				phase = 10
		10:  # rua: já em cima do ledge, desliza e faz grind
			_teleport(p, Vector3(194, 0.55, -42), -PI / 2.0)
			phase = 11
		11:
			InputHub.touch_stick(Vector2(0, -1))
			if p.state == 2 and not flags.has("ledge"):
				flags["ledge"] = true
				_shot("05_ledge_grind")
			if p.state == 2 or t > 26.0:
				phase = 12
		12:
			InputHub.release_all()
			if t > 29.0:
				phase = 13
		13:
			if t > 29.6:
				phase = 14
		14:
			InputHub.release_all()
			for l in log_lines:
				print(l)
			print("SCORE=", Game.score, " PENDING=", Game.pending, " MULT=", Game.mult)
			for s in shots:
				print("SHOT=", s)
			get_tree().quit()
