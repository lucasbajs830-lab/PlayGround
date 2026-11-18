extends Node
## InputHub (autoload)
## Une entrada de toque (Android) e teclado (desktop) em uma única API simples.
## As ações de teclado são registradas em código para evitar erros de serialização.

var stick := Vector2.ZERO  # analógico virtual (-1..1 em cada eixo)

var _btn := {}   # nome -> pressionado?
var _edge := {}  # nome -> "apertou agora" (consumido por just())


func _enter_tree() -> void:
	process_mode = Node.PROCESS_MODE_ALWAYS
	_register_keys()


func _register_keys() -> void:
	_add_key("ollie", KEY_SPACE)
	_add_key("trick", KEY_J)
	_add_key("grind", KEY_K)
	_add_key("respawn", KEY_R)
	_add_key("pause", KEY_ESCAPE)
	_add_key("steer_left", KEY_A)
	_add_key("steer_right", KEY_D)
	_add_key("push_fwd", KEY_W)
	_add_key("push_back", KEY_S)
	_add_key("steer_left", KEY_LEFT)
	_add_key("steer_right", KEY_RIGHT)
	_add_key("push_fwd", KEY_UP)
	_add_key("push_back", KEY_DOWN)


func _add_key(action: String, keycode: Key) -> void:
	if not InputMap.has_action(action):
		InputMap.add_action(action)
	var ev := InputEventKey.new()
	ev.physical_keycode = keycode
	InputMap.action_add_event(action, ev)


# ---- API usada pelo TouchLayer (HUD) ----

func touch_stick(v: Vector2) -> void:
	stick = v


func touch_button(name: String, pressed: bool) -> void:
	_btn[name] = pressed
	if pressed:
		_edge[name] = true


func release_all() -> void:
	stick = Vector2.ZERO
	_btn.clear()


# ---- API usada pelo jogador ----

func get_steer() -> float:
	var kb := Input.get_action_strength("steer_right") - Input.get_action_strength("steer_left")
	return clampf(stick.x + kb, -1.0, 1.0)


func get_push() -> float:
	var kb := Input.get_action_strength("push_fwd") - Input.get_action_strength("push_back")
	if absf(kb) > 0.05:
		return kb
	return clampf(-stick.y, -1.0, 1.0)  # stick para cima = empurrar


func down(name: String) -> bool:
	return _btn.get(name, false) or Input.is_action_pressed(name)


func just(name: String) -> bool:
	var edge: bool = _edge.get(name, false)
	if _edge.has(name):
		_edge.erase(name)
	return edge or Input.is_action_just_pressed(name)
