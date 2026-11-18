extends Node
## Harness de dev: sobrevoo da câmera para inspecionar a geometria do parque.
## Uso: godot --path . dev/flyover.tscn

var main: Node3D
var cam: Camera3D
var t := 0.0
var idx := 0
var shots: Array[String] = []

const VIEWS := [
	# nome, posição da câmera, alvo
	["aerial", Vector3(0, 260, 300), Vector3(0, 0, -20)],
	["plaza", Vector3(0, 14, 34), Vector3(0, 1, -4)],
	["fountain", Vector3(22, 9, 26), Vector3(0, 0.5, 0)],
	["bowl", Vector3(-100, 26, 30), Vector3(-180, -2, 80)],
	["bowl_close", Vector3(-180, 14, 108), Vector3(-180, 0, 92)],
	["bowl_inside", Vector3(-180, 2.0, 88), Vector3(-180, 1.5, 60)],
	["pool", Vector3(-140, 16, -70), Vector3(-190, -1, -110)],
	["pool_close", Vector3(-190, 14, -80), Vector3(-190, -2, -110)],
	["tunnel_west", Vector3(70, 6, -150), Vector3(130, 1.5, -150)],
	["tunnel_east", Vector3(165, 6, -150), Vector3(110, 1.5, -150)],
	["street", Vector3(150, 12, -70), Vector3(200, 1, -30)],
	["stairs", Vector3(150, 10, 26), Vector3(172, 0, 0)],
]


func _init() -> void:
	process_mode = Node.PROCESS_MODE_ALWAYS


func _ready() -> void:
	main = load("res://scenes/main.tscn").instantiate()
	add_child(main)


func _shot(name: String) -> void:
	var img := get_viewport().get_texture().get_image()
	img.resize(960, 540, Image.INTERPOLATE_BILINEAR)
	var path := "/tmp/opencode/shots/fly_%s.jpg" % name
	img.save_jpg(path, 80)
	shots.append(path)


func _process(delta: float) -> void:
	t += delta
	if cam == null:
		if t < 0.5 or main.player == null:
			return
		main._start_game()
		main.hud.visible = false
		main.sun.shadow_enabled = false
		cam = Camera3D.new()
		cam.fov = 66.0
		main.add_child(cam)
		# garante que a câmera livre seja a ativa
		cam.make_current()
		main.player.cam.current = false
		_set_view(VIEWS[0])
		return

	if t < 1.2:
		return
	if t < 2.0:
		_set_view(VIEWS[idx])
		return

	var v: Array = VIEWS[idx]
	_shot(v[0])
	idx += 1
	if idx >= VIEWS.size():
		for s in shots:
			print("SHOT=", s)
		get_tree().quit()
		return
	t = 1.2
	_set_view(VIEWS[idx])


func _set_view(v: Array) -> void:
	cam.global_position = v[1]
	cam.look_at(v[2], Vector3.UP)
