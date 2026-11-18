extends Node
## Teste dev: diagnóstico de colisão em QP, piscina, túnel e escadaria.

var main: Node3D
var t := 0.0
var started := false
var done := false

var probes := [
	["QP oeste meio(y8)", Vector3(-72.5, 8, 0)],
	["QP oeste curva(y8)", Vector3(-71.5, 8, 0)],
	["bowl anel 35m", Vector3(-180, 1, 115)],
	["bowl anel 36m", Vector3(-180, 1, 116)],
	["bowl anel 40m", Vector3(-180, 1, 120)],
	["bowl borda", Vector3(-180, 1, 108)],
	["piscina anel z=16", Vector3(-190, 1, -94)],
	["piscina anel z=17", Vector3(-190, 1, -93)],
	["piscina centro(y1)", Vector3(-190, 1, -110)],
	["piscina interior(y1)", Vector3(-196, 1, -110)],
	["piscina parede(y1)", Vector3(-190, 1, -100)],
	["tunel dentro", Vector3(120, 3, -150)],
	["tunel morro topo", Vector3(120, 10, -165)],
	["escada plataforma", Vector3(155, 3, 0)],
	["corrimao escada", Vector3(172, 3, -5.6)],
	["barra praca", Vector3(28, 3, 0)],
	["rua ledge", Vector3(200, 3, -42)],
]


func _init() -> void:
	process_mode = Node.PROCESS_MODE_ALWAYS


func _ready() -> void:
	main = load("res://scenes/main.tscn").instantiate()
	add_child(main)


func _process(delta: float) -> void:
	t += delta
	if not started and t > 0.4:
		started = true
		main._start_game()
	if not started or done or t < 1.0:
		return
	done = true
	var space := main.get_world_3d().direct_space_state
	for pr in probes:
		var from: Vector3 = pr[1]
		var q := PhysicsRayQueryParameters3D.create(from, from + Vector3(0, -12, 0))
		var hit := space.intersect_ray(q)
		if hit.has("position"):
			var c: Object = hit.get("collider")
			var bp: Vector3 = (c as Node3D).global_position
			print("%s -> y=%.2f obj=%s @(%.1f,%.1f,%.1f)" % [pr[0], hit.position.y, c.get_class(), bp.x, bp.y, bp.z])
		else:
			print("%s -> NADA abaixo" % pr[0])
	# alturas de teto no túnel
	var q2 := PhysicsRayQueryParameters3D.create(Vector3(120, 0.5, -150), Vector3(120, 12, -150))
	var hit2 := space.intersect_ray(q2)
	print("tunel teto em y=%.2f" % (hit2.get("position", Vector3.ZERO).y if hit2.has("position") else -1.0))
	get_tree().quit()
