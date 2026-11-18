extends Node
## Teste dev: manual (equilíbrio/pontos) e flip no ar.

var main: Node3D
var t := 0.0
var started := false
var phase := 0
var phase_t := 0.0
var manual_ok := false
var trick_ok := false
var flags := {}


func _init() -> void:
	process_mode = Node.PROCESS_MODE_ALWAYS


func _ready() -> void:
	main = load("res://scenes/main.tscn").instantiate()
	add_child(main)


func _press(name: String, dur: float) -> void:
	InputHub.touch_button(name, true)
	var timer := get_tree().create_timer(dur)
	timer.timeout.connect(func() -> void: InputHub.touch_button(name, false))


func _process(delta: float) -> void:
	t += delta
	phase_t += delta
	var p: CharacterBody3D = main.player if main != null else null
	if p == null:
		return
	if not started:
		if t > 0.4:
			started = true
			main._start_game()
			p.global_position = Vector3(-20, 0.6, -70)
			p.facing = PI  # de frente para o norte (+Z), pista livre
			p.velocity = Vector3.ZERO
			p.state = 0
			p.safe_pos = p.global_position
			p.debug = true
		return

	match phase:
		0:  # ganha velocidade
			InputHub.touch_stick(Vector2(0, -1))
			if Vector3(p.velocity.x, 0, p.velocity.z).length() > 10.0:
				phase = 1
				phase_t = 0.0
			if phase_t > 6.0:
				print("FALHA: sem velocidade")
				get_tree().quit()
		1:  # manual: solta o stick e segura GRIND
			InputHub.touch_stick(Vector2.ZERO)
			InputHub.touch_button("grind", true)
			if p.state == 3:
				manual_ok = true
				if phase_t < 0.05:
					print("MANUAL iniciado em t=%.2f" % t)
			if phase_t > 1.2:
				InputHub.touch_button("grind", false)
				print("MANUAL state=%d drift=%.2f score=%d pending=%d" % [p.state, p.manual_drift, Game.score, Game.pending])
				phase = 2
				phase_t = 0.0
		2:  # espera assentar e recupera velocidade
			InputHub.touch_stick(Vector2(0, -1))
			if p.state == 0 and phase_t > 1.0:
				phase = 3
				phase_t = 0.0
			if phase_t > 5.0:
				phase = 4
		3:  # ollie + kickflip (flick curto para não girar o corpo)
			if p.state == 0 and p.is_on_floor() and not flags.has("ollied"):
				flags["ollied"] = true
				_press("ollie", 0.12)
			if p.state == 1 and p.trick_name.is_empty() and not flags.has("tricked"):
				flags["tricked"] = true
				InputHub.touch_stick(Vector2(-1, 0))
				var timer := get_tree().create_timer(0.1)
				timer.timeout.connect(func() -> void: InputHub.touch_stick(Vector2.ZERO))
				InputHub.touch_button("trick", true)
			if not p.trick_name.is_empty():
				trick_ok = true
			if p.state == 0 and phase_t > 2.0:
				InputHub.touch_button("trick", false)
				print("TRICK land state=%d score=%d pending=%d" % [p.state, Game.score, Game.pending])
				phase = 4
				phase_t = 0.0
			if phase_t > 6.0:
				phase = 4
				phase_t = 0.0
		4:
			InputHub.release_all()
			if phase_t > 4.6:
				print("RESULT manual=%s trick=%s score=%d" % [str(manual_ok), str(trick_ok), Game.score])
				get_tree().quit()
