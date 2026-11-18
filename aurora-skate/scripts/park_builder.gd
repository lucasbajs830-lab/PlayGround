extends Node3D
## ParkBuilder: constrói o parque Aurora (600 x 600 m) por código.
## Tudo é modular: elementos decorativos ficam em "props" e podem ser
## desligados no perfil Baixo sem alterar as linhas de skate.

var props: Node3D  # decorativos (visibilidade por qualidade)

var m_asphalt: StandardMaterial3D
var m_concrete: StandardMaterial3D
var m_concrete2: StandardMaterial3D
var m_red: StandardMaterial3D
var m_metal: StandardMaterial3D
var m_wood: StandardMaterial3D
var m_grass: StandardMaterial3D
var m_trunk: StandardMaterial3D
var m_leaf: StandardMaterial3D
var m_dark: StandardMaterial3D
var m_water: StandardMaterial3D
var m_ground_far: StandardMaterial3D
var m_coral: StandardMaterial3D
var m_teal: StandardMaterial3D
var m_mustard: StandardMaterial3D
var m_blue: StandardMaterial3D
var m_brick: StandardMaterial3D
var m_window: StandardMaterial3D
var m_light: StandardMaterial3D
var m_zone: StandardMaterial3D

# perfil de transição (x = avanço horizontal, y = altura), do fundo para
# a borda. Curva tipo quarter: rasa embaixo e ~44 graus no lip, para que a
# física ainda trate a rampa como piso.
const PROFILE := [
	Vector2(0.0, 0.0), Vector2(0.195, 0.030), Vector2(0.384, 0.119),
	Vector2(0.564, 0.265), Vector2(0.729, 0.464), Vector2(0.876, 0.712),
	Vector2(1.0, 1.0),
]


func build() -> void:
	_make_materials()
	props = Node3D.new()
	props.name = "Props"
	add_child(props)

	_ground()
	_plaza()
	_street()
	_bowl()
	_pool()
	_tunnel()
	_quarter(Vector3(-70, 0, 0), 50.0, 4.5, PI / 2.0)  # oeste, de frente para a praça (+X)
	_quarter(Vector3(0, 0, 78), 60.0, 4.2, PI)        # sul, de frente para o norte (-Z)
	_fences()
	_props_decor()
	_details()


func _make_materials() -> void:
	m_asphalt = _mat(Color(0.3, 0.31, 0.34), 0.0, 0.95)
	m_concrete = _mat(Color(0.7, 0.69, 0.66), 0.0, 0.9)
	m_concrete2 = _mat(Color(0.55, 0.54, 0.52), 0.0, 0.9)
	m_red = _mat(Color(0.72, 0.24, 0.18), 0.0, 0.85)
	m_metal = _mat(Color(0.78, 0.78, 0.8), 0.95, 0.3)
	m_wood = _mat(Color(0.55, 0.38, 0.22), 0.0, 0.85)
	m_grass = _mat(Color(0.3, 0.5, 0.25), 0.0, 1.0)
	m_trunk = _mat(Color(0.35, 0.26, 0.18), 0.0, 1.0)
	m_leaf = _mat(Color(0.22, 0.45, 0.2), 0.0, 1.0)
	m_dark = _mat(Color(0.25, 0.25, 0.27), 0.0, 0.9)
	m_water = _mat(Color(0.16, 0.52, 0.62), 0.1, 0.15)
	m_ground_far = _mat(Color(0.34, 0.42, 0.3), 0.0, 1.0)
	m_coral = _mat(Color(0.86, 0.36, 0.3), 0.0, 0.8)
	m_teal = _mat(Color(0.14, 0.55, 0.55), 0.0, 0.8)
	m_mustard = _mat(Color(0.88, 0.68, 0.2), 0.0, 0.8)
	m_blue = _mat(Color(0.2, 0.4, 0.68), 0.0, 0.8)
	m_brick = _mat(Color(0.52, 0.36, 0.3), 0.0, 0.95)
	m_window = _mat(Color(0.42, 0.55, 0.64), 0.4, 0.25)
	m_light = _mat(Color(1.0, 0.86, 0.45), 0.0, 0.6)
	m_light.emission_enabled = true
	m_light.emission = Color(1.0, 0.78, 0.35)
	m_light.emission_energy_multiplier = 1.6
	m_zone = _mat(Color(0.37, 0.37, 0.41), 0.0, 0.95)


func _mat(c: Color, metal := 0.0, rough := 0.9) -> StandardMaterial3D:
	var m := StandardMaterial3D.new()
	m.albedo_color = c
	m.metallic = metal
	m.roughness = rough
	return m


# ------------------------------------------------------------------ básicos

## Caixa sólida com colisão.
func _box(size: Vector3, pos: Vector3, mat: StandardMaterial3D, yaw := 0.0) -> StaticBody3D:
	var body := StaticBody3D.new()
	body.collision_layer = 1
	var mi := MeshInstance3D.new()
	var mesh := BoxMesh.new()
	mesh.size = size
	mi.mesh = mesh
	mi.material_override = mat
	body.add_child(mi)
	var cs := CollisionShape3D.new()
	var shape := BoxShape3D.new()
	shape.size = size
	cs.shape = shape
	body.add_child(cs)
	body.position = pos
	body.rotation.y = yaw
	add_child(body)
	return body


## Mesh sem colisão (elemento fino / decorativo).
func _mesh_box(size: Vector3, pos: Vector3, mat: StandardMaterial3D, basis: Basis) -> MeshInstance3D:
	var mi := MeshInstance3D.new()
	var mesh := BoxMesh.new()
	mesh.size = size
	mi.mesh = mesh
	mi.material_override = mat
	mi.position = pos
	mi.basis = basis
	add_child(mi)
	return mi


## Laje cuja superfície superior passa por A e B, extrudada ao longo de
## `wdir` com meia-largura `hw`. A normal da superfície sempre aponta
## para cima (lado pilotável).
func _slab(a: Vector3, b: Vector3, wdir: Vector3, hw: float, mat: StandardMaterial3D, draw_mesh := true) -> void:
	var ab := b - a
	var l := ab.length()
	if l < 0.05:
		return
	var d := ab / l
	var w := wdir.normalized()
	var n := d.cross(w)
	if n.y < 0.0:
		n = -n
	var size := Vector3(hw * 2.0 - 0.12, 0.8, l + 0.08)
	var pos := (a + b) * 0.5 - n * 0.4
	var basis := Basis(w, n, d)

	if draw_mesh:
		_mesh_box(Vector3(hw * 2.0 + 0.15, 0.8, l + 0.25), pos, mat, basis)

	var body := StaticBody3D.new()
	body.collision_layer = 1
	var cs := CollisionShape3D.new()
	var shape := BoxShape3D.new()
	shape.size = size
	cs.shape = shape
	body.add_child(cs)
	body.basis = basis
	body.position = pos
	add_child(body)


## Anel plano entre um contorno (borda do bowl/piscina) e o retângulo do
## buraco no chão. Malha contínua, sem frestas entre lajes.
func _rim_ring(center: Vector3, rim: Array, hx: float, hz: float, mat: StandardMaterial3D) -> void:
	var verts := PackedVector3Array()
	var norms := PackedVector3Array()
	var pts: Array[Vector3] = []
	for p in rim:
		var v: Vector3 = p
		if pts.is_empty() or (v - pts[pts.size() - 1]).length() > 0.05:
			pts.append(v)
	if pts.size() > 1 and (pts[0] - pts[pts.size() - 1]).length() < 0.05:
		pts.remove_at(pts.size() - 1)
	var n := pts.size()
	if n < 3:
		return
	for i in range(n):
		var p0: Vector3 = pts[i]
		var p1: Vector3 = pts[(i + 1) % n]
		var q0 := _ring_outer(center, p0, hx, hz)
		var q1 := _ring_outer(center, p1, hx, hz)
		# mesma orientação do sweep: normais para cima, sem face "de costas"
		_add_tri(verts, norms, p0, q1, q0)
		_add_tri(verts, norms, p0, p1, q1)
	var arrays := []
	arrays.resize(Mesh.ARRAY_MAX)
	arrays[Mesh.ARRAY_VERTEX] = verts
	arrays[Mesh.ARRAY_NORMAL] = norms
	var mesh := ArrayMesh.new()
	mesh.add_surface_from_arrays(Mesh.PRIMITIVE_TRIANGLES, arrays)
	var mi := MeshInstance3D.new()
	mi.mesh = mesh
	mi.cast_shadow = GeometryInstance3D.SHADOW_CASTING_SETTING_OFF
	var m := mat.duplicate() as StandardMaterial3D
	if m != null:
		m.cull_mode = BaseMaterial3D.CULL_DISABLED
	mi.material_override = m
	add_child(mi)

	var body := StaticBody3D.new()
	body.collision_layer = 1
	var cs := CollisionShape3D.new()
	var shape := ConcavePolygonShape3D.new()
	shape.set_faces(verts)
	shape.backface_collision = true
	cs.shape = shape
	body.add_child(cs)
	add_child(body)


func _ring_outer(center: Vector3, p: Vector3, hx: float, hz: float) -> Vector3:
	var d := Vector3(p.x - center.x, 0.0, p.z - center.z)
	var tx := hx / maxf(absf(d.x), 0.0001)
	var tz := hz / maxf(absf(d.z), 0.0001)
	var t := minf(tx, tz)
	# avança 0.4 m por baixo do chão para não deixar fresta
	return center + d * (t + 0.4 / maxf(d.length(), 0.001)) + Vector3(0, -0.02, 0)


## Corrimão grindável: linha A -> B (grupo "rail", detectado pelo sensor).
func _rail(a: Vector3, b: Vector3, thickness := 0.09, posts := true) -> void:
	var ab := b - a
	var l := ab.length()
	if l < 0.5:
		return
	var d := ab / l
	var side := d.cross(Vector3.UP).normalized()

	_mesh_box(Vector3(thickness, thickness, l), (a + b) * 0.5, m_metal, Basis(side, Vector3.UP, d))

	var area := Area3D.new()
	area.collision_layer = 4
	area.collision_mask = 2
	area.add_to_group("rail")
	area.set_meta("a", a)
	area.set_meta("b", b)
	var cs := CollisionShape3D.new()
	var shape := BoxShape3D.new()
	shape.size = Vector3(0.5, 1.6, l + 0.6)
	cs.shape = shape
	area.add_child(cs)
	area.position = (a + b) * 0.5 + Vector3(0, 0.5, 0)
	area.basis = Basis(side, Vector3.UP, d)
	add_child(area)

	if posts and props != null:
		var count := maxi(int(l / 2.5), 1)
		for i in range(count + 1):
			var t := float(i) / float(count)
			var p := a + ab * t - Vector3(0, 0.45, 0)
			var post := _mesh_box(Vector3(0.08, 0.9, 0.08), p, m_metal, Basis.IDENTITY)
			post.reparent(props)


## Zona de gap (premia ao cruzar no ar).
func _gap(size: Vector3, pos: Vector3, gap_name: String) -> void:
	var area := Area3D.new()
	area.set_script(load("res://scripts/gap.gd"))
	area.collision_layer = 4
	area.collision_mask = 2
	area.set_meta("gap", gap_name)
	var cs := CollisionShape3D.new()
	var shape := BoxShape3D.new()
	shape.size = size
	cs.shape = shape
	area.add_child(cs)
	area.position = pos
	add_child(area)


# ------------------------------------------------------------------ mundo

func _ground() -> void:
	# terreno externo: anel alto (topo -0.25) + base profunda (abaixo do bowl)
	_box(Vector3(2400, 1, 900), Vector3(0, -0.75, -750), m_ground_far)
	_box(Vector3(2400, 1, 900), Vector3(0, -0.75, 750), m_ground_far)
	_box(Vector3(900, 1, 600), Vector3(750, -0.75, 0), m_ground_far)
	_box(Vector3(900, 1, 600), Vector3(-750, -0.75, 0), m_ground_far)
	_box(Vector3(2400, 1, 2400), Vector3(0, -5.8, 0), m_ground_far)
	# chão principal em faixas, deixando buracos retangulares para
	# bowl (x -225..-135, z 38..122) e piscina (x -212..-168, z -128..-92)
	_box(Vector3(88, 1, 208), Vector3(-256, -0.5, -196), m_asphalt)    # z -300..-92 | x -300..-212
	_box(Vector3(468, 1, 208), Vector3(66, -0.5, -196), m_asphalt)     # z -300..-92 | x -168..300
	_box(Vector3(600, 1, 130), Vector3(0, -0.5, -27), m_asphalt)       # z -92..38 (inteira)
	_box(Vector3(75, 1, 84), Vector3(-262.5, -0.5, 80), m_asphalt)     # z 38..122 | x -300..-225
	_box(Vector3(435, 1, 84), Vector3(82.5, -0.5, 80), m_asphalt)      # z 38..122 | x -135..300
	_box(Vector3(600, 1, 178), Vector3(0, -0.5, 211), m_asphalt)       # z 122..300 (inteira)
	# tampa por baixo (fecha o vão para o infinito)
	_box(Vector3(600, 0.4, 600), Vector3(0, -5.1, 0), m_dark)
	# praça mais clara
	var plaza := MeshInstance3D.new()
	var disc := CylinderMesh.new()
	disc.top_radius = 45.0
	disc.bottom_radius = 45.0
	disc.height = 0.04
	plaza.mesh = disc
	plaza.material_override = m_concrete
	plaza.position = Vector3(0, 0.01, 0)
	plaza.cast_shadow = GeometryInstance3D.SHADOW_CASTING_SETTING_OFF
	add_child(plaza)
	# juntas de dilatação (dão escala à praça)
	for i in range(1, 3):
		for s in [-1.0, 1.0]:
			var d: float = 12.0 * float(i) * s
			_paint(Vector3(70, 0, 0.12), Vector3(0, 0, d), m_concrete2)
			_paint(Vector3(0.12, 0, 70), Vector3(d, 0, 0), m_concrete2)


# ------------------------------------------------------------------ praça central

func _plaza() -> void:
	# fonte: borda circular (ledge) em volta de uma bacia rasa
	var segments := 16
	var radius := 7.0
	var chord := TAU * radius / segments
	for i in range(segments):
		var t0 := TAU * float(i) / segments
		var t1 := TAU * float(i + 1) / segments
		var a := Vector3(sin(t0) * radius, 0.5, cos(t0) * radius)
		var b := Vector3(sin(t1) * radius, 0.5, cos(t1) * radius)
		var mid := (a + b) * 0.5
		var d := (b - a).normalized()
		var yaw := atan2(-d.z, d.x)  # alinha o eixo X da caixa com a tangente
		_box(Vector3(chord + 0.15, 0.5, 0.95), mid + Vector3(0, 0.25, 0), m_concrete2, yaw)
		_rail(a + Vector3(0, 0.08, 0), b + Vector3(0, 0.08, 0), 0.07, false)
	# água decorativa
	var water := MeshInstance3D.new()
	var wm := CylinderMesh.new()
	wm.top_radius = 5.4
	wm.bottom_radius = 5.4
	wm.height = 0.1
	water.mesh = wm
	water.material_override = m_water
	water.position = Vector3(0, 0.03, 0)
	add_child(water)
	# pedestal central da fonte
	var tiers := [
		[1.6, 0.5, 0.25], [0.5, 1.8, 1.4], [1.35, 0.22, 2.35], [0.16, 1.3, 3.0],
	]
	for i in range(tiers.size()):
		var t: Array = tiers[i]
		var cyl := MeshInstance3D.new()
		var cm := CylinderMesh.new()
		cm.top_radius = t[0]
		cm.bottom_radius = t[0]
		cm.height = t[1]
		cyl.mesh = cm
		cyl.material_override = m_water if i == 3 else m_concrete2
		cyl.position = Vector3(0, t[2], 0)
		add_child(cyl)
	_gap(Vector3(11, 3.4, 11), Vector3(0, 2.4, 0), "da Fonte")

	# bancos grindáveis
	_bench(Vector3(16, 0, 14), 0.9)
	_bench(Vector3(-16, 0, 14), -0.9)
	_bench(Vector3(16, 0, -14), -0.9)
	_bench(Vector3(-16, 0, -14), -0.9)

	# barras planas
	_rail(Vector3(28, 0.65, -6), Vector3(28, 0.65, 6))
	_rail(Vector3(-30, 0.55, 22), Vector3(-14, 0.55, 22))

	# pequeno escalonado da praça (2 degraus + corrimão)
	_box(Vector3(6, 0.4, 4), Vector3(-38, 0.2, -20), m_concrete)
	_box(Vector3(6, 0.8, 4), Vector3(-44, 0.4, -20), m_concrete)
	_rail(Vector3(-40.5, 0.95, -21.6), Vector3(-46.5, 0.55, -21.6))


func _bench(pos: Vector3, yaw: float) -> void:
	_box(Vector3(2.6, 0.45, 0.65), pos + Vector3(0, 0.22, 0), m_wood, yaw)
	var d := Vector3(cos(yaw), 0, -sin(yaw))
	_rail(pos + d * 1.15 + Vector3(0, 0.45, 0), pos - d * 1.15 + Vector3(0, 0.45, 0), 0.07, false)


# ------------------------------------------------------------------ rua

func _street() -> void:
	# plataforma + escadaria de 8 degraus descendo para leste
	_box(Vector3(30, 1.6, 12), Vector3(155, 0.8, 0), m_concrete)
	for k in range(8):
		var h := 1.6 - (k + 1) * 0.2
		_box(Vector3(0.4, h, 10), Vector3(170.6 + k * 0.4, h / 2.0, 0), m_concrete)
	_gap(Vector3(7, 4.5, 9), Vector3(173, 2.2, 0), "da Escadaria")
	_rail(Vector3(169.6, 1.85, -5.6), Vector3(174.6, 0.3, -5.6))

	# ledges compridos
	_ledge(Vector3(200, 0, -42), 20.0, 0.0)
	_ledge(Vector3(225, 0, 42), 16.0, PI / 2.0)
	_ledge(Vector3(240, 0, -15), 24.0, 0.0, 0.7)

	# rampas kicker
	_kicker(Vector3(232, 0, 20), 0.0)
	_kicker(Vector3(140, 0, 52), PI / 2.0)

	# meio-fio vermelho ao longo da rua
	for sz in [-1.0, 1.0]:
		_box(Vector3(150, 0.16, 0.5), Vector3(185, 0.08, sz * 78), m_red)


func _ledge(pos: Vector3, length: float, yaw: float, height := 0.45) -> void:
	var d := Vector3(cos(yaw), 0, -sin(yaw))
	_box(Vector3(length, height, 1.0), pos + Vector3(0, height / 2.0, 0), m_concrete2, yaw)
	_rail(pos + d * (length / 2.0 - 0.5) + Vector3(0, height + 0.08, 0),
			pos - d * (length / 2.0 - 0.5) + Vector3(0, height + 0.08, 0), 0.07, false)


## Kicker: rampa reta de ~23 graus, com lateral fechada (prisma).
func _kicker(pos: Vector3, yaw: float, width := 2.8, height := 1.0) -> void:
	_ramp(pos, yaw, width, height, height / 0.42)


## Rampa reta (kicker/banco) com prisma fechado e colisão pela face superior.
func _ramp(pos: Vector3, yaw: float, width: float, height: float, length: float, mat: StandardMaterial3D = m_concrete2) -> void:
	if width < 0.2 or height < 0.05 or length < 0.3:
		return
	var fwd := Vector3(-sin(yaw), 0, -cos(yaw))  # direção de subida
	var side := fwd.cross(Vector3.UP).normalized()
	var a := pos - fwd * (length * 0.5)
	var b := pos + fwd * (length * 0.5) + Vector3(0, height, 0)

	# colisão em cunha (prisma triangular): topo inclinado e face traseira
	# vertical, para não "escorregar" pela face de trás do lip.
	var hw := width * 0.5
	var lo := pos - fwd * (length * 0.5)
	var hi := pos + fwd * (length * 0.5)
	var pts := PackedVector3Array([
		lo + side * hw, lo - side * hw,
		hi + side * hw, hi - side * hw,
		hi + side * hw + Vector3(0, height, 0),
		hi - side * hw + Vector3(0, height, 0),
	])
	var body := StaticBody3D.new()
	body.collision_layer = 1
	var cs := CollisionShape3D.new()
	var shape := ConvexPolygonShape3D.new()
	shape.points = pts
	cs.shape = shape
	body.add_child(cs)
	add_child(body)

	var pm := PrismMesh.new()
	pm.size = Vector3(length, height, width)
	pm.left_to_right = 1.0
	var mi := MeshInstance3D.new()
	mi.mesh = pm
	mi.material_override = mat
	mi.basis = Basis(fwd, Vector3.UP, side)
	mi.position = pos + Vector3(0, height * 0.5, 0)
	add_child(mi)

	# faixa pintada no lip
	if props != null:
		var lip := _mesh_box(Vector3(width, 0.08, 0.16),
				b + Vector3(0, 0.03, 0), m_mustard, Basis(Vector3.UP, yaw))
		lip.reparent(props)


# ------------------------------------------------------------------ bowl

func _bowl() -> void:
	var center := Vector3(-180, 0, 80)
	var radius := 30.0
	var depth := 4.2
	var extent := depth * 1.6
	var segments := 28
	var rim: Array[Vector3] = []
	for i in range(segments):
		var t := TAU * float(i) / float(segments)
		rim.append(center + Vector3(sin(t), 0, cos(t)) * (radius + 0.06))
	_sweep_transition(rim, center, depth, extent, m_concrete)
	# piso do bowl
	var floor_r := radius - extent + 0.2
	var fbody := StaticBody3D.new()
	fbody.collision_layer = 1
	var fcs := CollisionShape3D.new()
	var fshape := CylinderShape3D.new()
	# colisor mais largo que o piso visível: impede cair por frestas na transição
	fshape.radius = radius - 0.15
	fshape.height = 0.6
	fcs.shape = fshape
	fbody.add_child(fcs)
	fbody.position = center + Vector3(0, -depth - 0.3, 0)
	var floor_m := MeshInstance3D.new()
	var fm := CylinderMesh.new()
	fm.top_radius = floor_r
	fm.bottom_radius = floor_r
	fm.height = 0.4
	floor_m.mesh = fm
	floor_m.material_override = m_concrete2
	# levemente abaixo do fundo da transição para não disputar o mesmo plano
	floor_m.position = Vector3(0, 0.07, 0)
	floor_m.material_override = m_concrete2
	fbody.add_child(floor_m)
	add_child(fbody)
	_gap(Vector3(20, 4, 18), center + Vector3(0, 1.8, 0), "do Bowl")
	# anel de piso entre a borda do bowl e o buraco retangular do chão
	_rim_ring(center, rim, 45.0, 42.0, m_asphalt)
	# coping metálico
	var torus := TorusMesh.new()
	torus.inner_radius = radius - 0.16
	torus.outer_radius = radius + 0.16
	torus.rings = 48
	torus.ring_segments = 6
	var cop := MeshInstance3D.new()
	cop.mesh = torus
	cop.material_override = m_metal
	cop.position = center + Vector3(0, 0.02, 0)
	add_child(cop)


# ------------------------------------------------------------------ piscina vazia

func _pool() -> void:
	var center := Vector3(-190, 0, -110)
	var hx := 18.0
	var hz := 14.0
	var depth := 2.6
	var extent := depth * 1.6
	var rc := 6.0

	# caminho fechado no sentido horário: bordas retas + cantos em arco
	# (ordem contígua, senão as lajes atravessam a piscina)
	var path: Array[Vector3] = []
	# borda leste: (18, 8) -> (18, -8)
	for k in range(3):
		path.append(center + Vector3(hx, 0, hz - rc).lerp(Vector3(hx, 0, -hz + rc), float(k) / 2.0))
	var arcs := [
		[Vector3(hx - rc, 0, -hz + rc), PI / 2.0, PI],       # sudeste
		[Vector3(-hx + rc, 0, -hz + rc), PI, PI * 1.5],      # sudoeste
		[Vector3(-hx + rc, 0, hz - rc), PI * 1.5, TAU],      # noroeste
		[Vector3(hx - rc, 0, hz - rc), 0.0, PI / 2.0],       # nordeste
	]
	var edges := [
		[Vector3(hx - rc, 0, -hz), Vector3(-hx + rc, 0, -hz)],  # sul
		[Vector3(-hx, 0, -hz + rc), Vector3(-hx, 0, hz - rc)],  # oeste
		[Vector3(-hx + rc, 0, hz), Vector3(hx - rc, 0, hz)],    # norte
	]
	for ai in range(4):
		var ar: Array = arcs[ai]
		for k in range(5):
			var ang: float = ar[1] + (ar[2] - ar[1]) * float(k) / 4.0
			path.append(center + (ar[0] as Vector3) + Vector3(sin(ang), 0, cos(ang)) * rc)
		if ai < 3:
			var e: Array = edges[ai]
			for k in range(3):
				path.append(center + (e[0] as Vector3).lerp(e[1], float(k) / 2.0))

	_sweep_transition(path, center, depth, extent, m_concrete)
	# (as lajes sobrepostas antigas causavam z-fighting nas curvas)

	# piso (colisor cobre todo o buraco: nada de cair por frestas)
	_box(Vector3(44.0, 0.3, 36.0), center + Vector3(0, -depth - 0.15, 0), m_concrete2)
	# escada de piscina (decorativa)
	if props != null:
		for sx in [-0.35, 0.35]:
			var rail := _mesh_box(Vector3(0.08, 3.9, 0.08),
					center + Vector3(hx + 0.15, -0.9, 4.0 + sx), m_metal, Basis.IDENTITY)
			rail.reparent(props)
		for k in range(3):
			var rung := _mesh_box(Vector3(0.08, 0.07, 0.8),
					center + Vector3(hx + 0.15, 0.1 - k * 0.45, 4.0), m_metal, Basis.IDENTITY)
			rung.reparent(props)
	# anel de piso entre a borda e o buraco retangular
	_rim_ring(center, path, 22.0, 18.0, m_asphalt)
	# coping nas bordas retas
	for seg in [
		[Vector3(hx, 0, -hz + rc), Vector3(hx, 0, hz - rc)],
		[Vector3(-hx, 0, -hz + rc), Vector3(-hx, 0, hz - rc)],
		[Vector3(-hx + rc, 0, hz), Vector3(hx - rc, 0, hz)],
		[Vector3(-hx + rc, 0, -hz), Vector3(hx - rc, 0, -hz)],
	]:
		var a: Vector3 = center + (seg[0] as Vector3)
		var b: Vector3 = center + (seg[1] as Vector3)
		var d := (b - a).normalized()
		if props != null:
			var cop := _mesh_box(Vector3(0.18, 0.07, (b - a).length()),
					(a + b) * 0.5 + Vector3(0, 0.04, 0), m_metal,
					Basis(Vector3.UP.cross(d), Vector3.UP, d))
			cop.reparent(props)


## Superfície de transição contínua (bowl/piscina) varrida ao longo de um
## contorno fechado. Substitui as lajes sobrepostas (sem z-fighting/frestas).
func _sweep_transition(rim: Array[Vector3], center: Vector3, depth: float, extent: float, mat: StandardMaterial3D) -> void:
	var pts: Array[Vector3] = []
	for p in rim:
		if pts.is_empty() or (p - pts[pts.size() - 1]).length() > 0.05:
			pts.append(p)
	if pts.size() > 1 and (pts[0] - pts[pts.size() - 1]).length() < 0.05:
		pts.remove_at(pts.size() - 1)
	var n := pts.size()
	if n < 3:
		return

	var verts := PackedVector3Array()
	var norms := PackedVector3Array()
	var steps := PROFILE.size() - 1
	for i in range(n):
		var pa := pts[i]
		var pb := pts[(i + 1) % n]
		var ina := _inward(pa, center)
		var inb := _inward(pb, center)
		for k in range(steps):
			var p0: Vector2 = PROFILE[k]
			var p1: Vector2 = PROFILE[k + 1]
			# k = 0 no fundo, k = steps na borda
			var a0 := pa + ina * extent * (1.0 - p0.x) + Vector3(0, -depth * (1.0 - p0.y), 0)
			var a1 := pa + ina * extent * (1.0 - p1.x) + Vector3(0, -depth * (1.0 - p1.y), 0)
			var b0 := pb + inb * extent * (1.0 - p0.x) + Vector3(0, -depth * (1.0 - p0.y), 0)
			var b1 := pb + inb * extent * (1.0 - p1.x) + Vector3(0, -depth * (1.0 - p1.y), 0)
			_add_tri(verts, norms, a0, b0, b1)
			_add_tri(verts, norms, a0, b1, a1)

	var mesh := ArrayMesh.new()
	var arrays := []
	arrays.resize(Mesh.ARRAY_MAX)
	arrays[Mesh.ARRAY_VERTEX] = verts
	arrays[Mesh.ARRAY_NORMAL] = norms
	mesh.add_surface_from_arrays(Mesh.PRIMITIVE_TRIANGLES, arrays)
	var mi := MeshInstance3D.new()
	mi.mesh = mesh
	var m := mat.duplicate() as StandardMaterial3D
	if m != null:
		m.cull_mode = BaseMaterial3D.CULL_DISABLED
	mi.material_override = m
	add_child(mi)

	var body := StaticBody3D.new()
	body.collision_layer = 1
	var cs := CollisionShape3D.new()
	var shape := ConcavePolygonShape3D.new()
	shape.set_faces(verts)
	shape.backface_collision = true
	cs.shape = shape
	body.add_child(cs)
	add_child(body)


## Triângulo com normal voltada para cima (lado pilotável).
func _add_tri(verts: PackedVector3Array, norms: PackedVector3Array, a: Vector3, b: Vector3, c: Vector3) -> void:
	var nrm := (b - a).cross(c - a)
	if nrm.y < 0.0:
		var tmp := b
		b = c
		c = tmp
		nrm = -nrm
	nrm = nrm.normalized()
	if nrm.length_squared() < 0.5:
		nrm = Vector3.UP
	verts.append(a)
	verts.append(c)
	verts.append(b)
	for i in range(3):
		norms.append(nrm)


func _inward(p: Vector3, center: Vector3) -> Vector3:
	var v := (center - p)
	v.y = 0.0
	return v.normalized()


# ------------------------------------------------------------------ túnel

func _tunnel() -> void:
	var c := Vector3(120, 0, -150)
	# passagem: paredes + teto
	_box(Vector3(40, 4.2, 1.2), c + Vector3(0, 2.1, 5.8), m_dark)
	_box(Vector3(40, 4.2, 1.2), c + Vector3(0, 2.1, -5.8), m_dark)
	_box(Vector3(40, 1.4, 12.8), c + Vector3(0, 4.9, 0), m_dark)
	# morro em camadas dos dois lados da passagem
	for sz in [-1.0, 1.0]:
		_box(Vector3(46, 3, 24), c + Vector3(0, 1.5, sz * 18.8), m_grass)
		_box(Vector3(38, 3, 20), c + Vector3(0, 4.5, sz * 16.8), m_grass)
		_box(Vector3(26, 2, 14), c + Vector3(0, 7.0, sz * 13.8), m_grass)
	# kicker dentro do túnel para o gap (sobe no sentido leste)
	_ramp(c + Vector3(-9, 0, 0), -PI / 2.0, 9.0, 1.2, 2.6)
	# a zona começa depois do lip: o skatista já está no ar ao entrar
	_gap(Vector3(20, 3.6, 8), c + Vector3(8, 2.2, 0), "do Túnel")


# ------------------------------------------------------------------ quartos de onda

## QP curvo. `facing` = yaw da normal da parede (direção do rider).
func _quarter(pos: Vector3, width: float, height: float, facing: float) -> void:
	var n := Vector3(sin(facing), 0, cos(facing))
	var tan := n.cross(Vector3.UP)
	var ext := height * 1.5
	var steps := PROFILE.size() - 1
	for k in range(steps):
		var p0: Vector2 = PROFILE[k]
		var p1: Vector2 = PROFILE[k + 1]
		# s cresce para dentro da rampa (oposto à normal); y sobe
		var a0 := pos - n * (ext * p0.x) + Vector3(0, height * p0.y, 0)
		var a1 := pos - n * (ext * p1.x) + Vector3(0, height * p1.y, 0)
		_slab(a0, a1, tan, width * 0.5, m_concrete)
	# parede de fundo logo atrás do lip
	_box(Vector3(width, height + 1.0, 1.0), pos - n * (ext + 0.5) + Vector3(0, (height + 1.0) / 2.0, 0), m_concrete2, atan2(n.x, n.z))
	# coping decorativo (ao longo da boca)
	if props != null:
		var cop := _mesh_box(Vector3(width + 0.2, 0.12, 0.14),
				pos - n * ext + Vector3(0, height + 0.05, 0), m_metal,
				Basis(Vector3.UP, facing))
		cop.reparent(props)


# ------------------------------------------------------------------ detalhes / vida

## Pinta uma faixa fina no chão (sem colisão).
func _paint(size: Vector3, pos: Vector3, mat: StandardMaterial3D, yaw := 0.0, y := 0.045) -> void:
	var mi := _mesh_box(Vector3(size.x, 0.02, size.z), Vector3(pos.x, y, pos.z), mat, Basis(Vector3.UP, yaw))
	mi.cast_shadow = GeometryInstance3D.SHADOW_CASTING_SETTING_OFF


func _details() -> void:
	# anel pintado em volta da fonte (faixa plana no chão)
	var ring := MeshInstance3D.new()
	var tm := TorusMesh.new()
	tm.inner_radius = 7.6
	tm.outer_radius = 8.1
	tm.rings = 48
	tm.ring_segments = 4
	ring.mesh = tm
	ring.material_override = m_coral
	ring.position = Vector3(0, 0.05, 0)
	ring.scale = Vector3(1.0, 0.04, 1.0)
	ring.cast_shadow = GeometryInstance3D.SHADOW_CASTING_SETTING_OFF
	add_child(ring)

	# plataforma de largada
	_paint(Vector3(9, 0, 5.5), Vector3(0, 0, 34), m_concrete2)
	_paint(Vector3(9, 0, 0.35), Vector3(0, 0, 36.6), m_mustard)
	_paint(Vector3(9, 0, 0.35), Vector3(0, 0, 31.4), m_mustard)

	# zona da rua (piso levemente mais claro delimita a área)
	_paint(Vector3(130, 0, 150), Vector3(200, 0, 0), m_zone, 0.0, 0.024)
	for sz in [-1.0, 1.0]:
		_paint(Vector3(130, 0, 1.6), Vector3(200, 0, sz * 76.0), m_coral)
		_paint(Vector3(1.6, 0, 152), Vector3(200 + sz * 66.0, 0, 0), m_coral)
	# corredor de flow a oeste
	_paint(Vector3(100, 0, 14), Vector3(-95, 0, -30), m_zone, 0.0, 0.024)
	_paint(Vector3(100, 0, 1.2), Vector3(-95, 0, -36.0), m_teal)
	_paint(Vector3(100, 0, 1.2), Vector3(-95, 0, -24.0), m_teal)

	# funbox central-leste
	var fx := 80.0
	var fz := 5.0
	_box(Vector3(10, 1.0, 6), Vector3(fx, 0.5, fz), m_concrete)
	_kicker(Vector3(fx - 6.2, 0, fz), -PI / 2.0, 6.0, 1.0)
	_kicker(Vector3(fx + 6.2, 0, fz), PI / 2.0, 6.0, 1.0)
	_rail(Vector3(fx, 1.12, fz - 2.6), Vector3(fx, 1.12, fz + 2.6), 0.07, false)
	_paint(Vector3(10, 0, 0.4), Vector3(fx, 0, fz - 3.0), m_teal)
	_paint(Vector3(10, 0, 0.4), Vector3(fx, 0, fz + 3.0), m_teal)

	# mesa / tabletop a nordeste
	var tx := 110.0
	var tz := 65.0
	_box(Vector3(14, 2.0, 8), Vector3(tx, 1.0, tz), m_concrete2)
	_kicker(Vector3(tx, 0, tz - 6.4), PI, 12.0, 2.0)
	_kicker(Vector3(tx, 0, tz + 6.4), 0.0, 12.0, 2.0)
	_rail(Vector3(tx - 6.0, 2.1, tz), Vector3(tx + 6.0, 2.1, tz), 0.07, false)
	_paint(Vector3(14, 0, 0.4), Vector3(tx, 0, tz - 4.0), m_coral)
	_paint(Vector3(14, 0, 0.4), Vector3(tx, 0, tz + 4.0), m_coral)

	# manual pad na rua norte
	_box(Vector3(14, 0.34, 6), Vector3(120, 0.17, 88), m_concrete)
	_paint(Vector3(14, 0, 0.3), Vector3(120, 0, 91.15), m_mustard)
	_paint(Vector3(14, 0, 0.3), Vector3(120, 0, 84.85), m_mustard)

	# caixas de planta com árvores nos cantos da praça
	for s in [Vector2(34, 34), Vector2(-34, 34), Vector2(34, -34), Vector2(-34, -34)]:
		var p := Vector3(s.x, 0, s.y)
		_box(Vector3(6, 0.55, 2.4), p + Vector3(0, 0.275, 0), m_concrete)
		var top := _mesh_box(Vector3(5.7, 0.06, 2.1), p + Vector3(0, 0.58, 0), m_leaf, Basis.IDENTITY)
		top.reparent(props)
		if s.y > 0:
			_tree(p + Vector3(0, 0.55, 0))

	# corrimão longo extra na rua
	_rail(Vector3(202, 0.6, 24), Vector3(222, 0.6, 24), 0.08, true)
	_rail(Vector3(196, 0.55, -70), Vector3(212, 0.55, -70), 0.08, true)
	_ledge(Vector3(185, 0, -58), 18.0, 0.0, 0.55)
	_ledge(Vector3(218, 0, 58), 18.0, PI / 2.0, 0.5)
	_ledge(Vector3(246, 0, 12), 14.0, 0.0, 0.8)

	# calçada elevada no fundo da rua
	_box(Vector3(160, 0.18, 30), Vector3(185, 0.09, 93), m_concrete)
	for i in range(6):
		var px := 120.0 + i * 22.0
		_box(Vector3(3.0, 0.5, 2.0), Vector3(px, 0.43, 88), m_concrete2)
		_tree(Vector3(px, 0.18, 98))
	# abrigo de ônibus / telheiro
	var roof := _mesh_box(Vector3(9, 0.2, 3.2), Vector3(172, 3.0, 100), m_dark, Basis.IDENTITY)
	roof.reparent(props)
	for sx in [-4.0, 4.0]:
		var post := _mesh_box(Vector3(0.16, 3.0, 0.16), Vector3(172 + sx, 1.5, 100), m_metal, Basis.IDENTITY)
		post.reparent(props)
	# outdoor / billboard
	var bb := _mesh_box(Vector3(14, 6, 0.4), Vector3(250, 7.0, 108), m_mustard, Basis(Vector3.UP, -PI / 2.0))
	bb.reparent(props)
	for sx in [-5.0, 5.0]:
		var leg := _mesh_box(Vector3(0.3, 4.2, 0.3), Vector3(250, 2.1, 108 + sx), m_dark, Basis.IDENTITY)
		leg.reparent(props)

	# linha tracejada central da rua
	for i in range(11):
		_paint(Vector3(0.4, 0, 3.0), Vector3(185, 0, -100 + i * 18.0), m_mustard)
	# faixas de estacionamento
	for i in range(5):
		_paint(Vector3(18, 0, 0.3), Vector3(250, 0, -60 + i * 22.0), m_concrete2)

	# linha de flow a oeste: rollers para bombear
	for i in range(5):
		var rx := -58.0 - float(i) * 16.0
		var rh := 0.45 + 0.06 * float(i % 3)
		_kicker(Vector3(rx, 0, -30), PI * 0.5, 10.0, rh)
		_kicker(Vector3(rx - rh / 0.42, 0, -30), -PI * 0.5, 10.0, rh)
	_ledge(Vector3(-82, 0, -52), 34.0, 0.0, 0.5)
	_rail(Vector3(-70, 0.6, -66), Vector3(-100, 0.6, -66), 0.08, true)

	# banco comprido perto do bowl
	_ledge(Vector3(-100, 0, 128), 22.0, 0.0, 0.55)
	_rail(Vector3(-100, 0.68, 124), Vector3(-100, 0.68, 132), 0.08, true)

	# quarto de onda encostado na cerca leste
	_quarter(Vector3(280, 0, 120), 44.0, 3.6, -PI / 2.0)
	_quarter(Vector3(280, 0, -170), 36.0, 3.2, -PI / 2.0)

	# coreto / loja de skate
	var k := Vector3(48, 0, 62)
	_box(Vector3(10, 5, 8), k + Vector3(0, 2.5, 0), m_concrete)
	_box(Vector3(11.6, 0.4, 9.4), k + Vector3(0, 5.2, 0), m_dark)
	var sign := _mesh_box(Vector3(6.0, 1.5, 0.12), k + Vector3(0, 4.0, -4.06), m_coral, Basis.IDENTITY)
	sign.reparent(props)
	for i in range(3):
		var win := _mesh_box(Vector3(2.0, 1.5, 0.12), k + Vector3(-3.0 + i * 3.0, 2.2, -4.06), m_window, Basis.IDENTITY)
		win.reparent(props)

	# painéis de grafite / paredes coloridas
	var walls := [
		[Vector3(-115, 0, 150), 30.0, m_coral, 0.0],
		[Vector3(-115, 0, 152.5), 22.0, m_teal, 0.0],
		[Vector3(255, 0, 60), 26.0, m_mustard, PI / 2.0],
		[Vector3(255, 0, -90), 20.0, m_teal, PI / 2.0],
	]
	for w in walls:
		var b := _mesh_box(Vector3(float(w[1]), 3.4, 0.5), (w[0] as Vector3) + Vector3(0, 1.7, 0), w[2], Basis(Vector3.UP, w[3]))
		b.reparent(props)

	# faixas de tinta ligando as áreas
	for i in range(9):
		_paint(Vector3(2.4, 0, 0.5), Vector3(-58, 0, -18 - i * 8.0), m_mustard)
	for i in range(8):
		_paint(Vector3(0.5, 0, 2.4), Vector3(96 + i * 8.0, 0, -118), m_mustard)

	# luzes do túnel
	for i in range(5):
		var lx := 104.0 + i * 8.0
		var strip := _mesh_box(Vector3(3.4, 0.14, 1.0), Vector3(lx, 4.1, -150), m_light, Basis.IDENTITY)
		strip.reparent(props)
	for lx in [105.0, 120.0, 135.0]:
		var lamp := OmniLight3D.new()
		lamp.position = Vector3(lx, 3.4, -150)
		lamp.omni_range = 16.0
		lamp.light_energy = 2.4
		lamp.light_color = Color(1.0, 0.82, 0.55)
		add_child(lamp)

	# horizonte da cidade
	_city()


func _city() -> void:
	var mats := [m_brick, m_blue, m_concrete, m_teal, m_mustard]
	var blds := [
		[Vector3(-390, 0, -330), 46, 40, 38],
		[Vector3(-470, 0, -190), 34, 30, 54],
		[Vector3(-440, 0, -40), 40, 36, 26],
		[Vector3(-460, 0, 120), 30, 44, 46],
		[Vector3(-400, 0, 300), 44, 34, 34],
		[Vector3(-250, 0, 400), 52, 40, 22],
		[Vector3(-80, 0, 440), 36, 34, 40],
		[Vector3(90, 0, 430), 44, 30, 30],
		[Vector3(260, 0, 400), 30, 40, 52],
		[Vector3(420, 0, 300), 46, 36, 36],
		[Vector3(460, 0, 130), 34, 40, 48],
		[Vector3(430, 0, -60), 42, 34, 24],
		[Vector3(450, 0, -240), 32, 44, 42],
		[Vector3(370, 0, -380), 48, 38, 30],
		[Vector3(190, 0, -440), 36, 30, 56],
		[Vector3(0, 0, -460), 54, 36, 28],
		[Vector3(-180, 0, -430), 34, 30, 44],
		[Vector3(-330, 0, -400), 42, 40, 32],
	]
	for i in range(blds.size()):
		var b: Array = blds[i]
		var p: Vector3 = b[0]
		var w: float = b[1]
		var d: float = b[2]
		var h: float = b[3]
		var mat: StandardMaterial3D = mats[i % mats.size()]
		var body := _mesh_box(Vector3(w, h, d), p + Vector3(0, h * 0.5 - 0.26, 0), mat, Basis.IDENTITY)
		body.reparent(props)
		for k in range(2):
			var band := _mesh_box(Vector3(w + 0.1, 1.1, d + 0.1),
					p + Vector3(0, h * (0.38 + 0.28 * k) - 0.26, 0), m_window, Basis.IDENTITY)
			band.reparent(props)

	# fileira de lojas logo atrás da cerca (dá rua ao park)
	var shop_mats := [m_coral, m_mustard, m_teal, m_blue, m_brick]
	var east_z := [-100.0, -72.0, -44.0, -16.0, 12.0, 40.0, 68.0, 96.0]
	for i in range(east_z.size()):
		_shop(Vector3(313, 0, east_z[i]), 9.0 + 1.2 * float(i % 3), shop_mats[i % shop_mats.size()], Vector3(-1, 0, 0))
	var north_x := [-90.0, -62.0, -34.0, -6.0, 22.0, 50.0, 78.0]
	for i in range(north_x.size()):
		_shop(Vector3(north_x[i], 0, 313), 10.0 + 1.4 * float(i % 3), shop_mats[(i + 2) % shop_mats.size()], Vector3(0, 0, -1))
	var south_x := [-120.0, -90.0, -60.0, -30.0, 0.0, 30.0, 60.0, 90.0, 120.0]
	for i in range(south_x.size()):
		_shop(Vector3(south_x[i], 0, -313), 9.0 + 1.1 * float(i % 4), shop_mats[(i + 1) % shop_mats.size()], Vector3(0, 0, 1))


func _shop(center: Vector3, h: float, mat: StandardMaterial3D, face: Vector3) -> void:
	var depth := 15.0
	var width := 21.0
	var along_x := absf(face.x) > 0.5
	var size := Vector3(depth if along_x else width, h, width if along_x else depth)
	var body := _mesh_box(size, center + Vector3(0, h * 0.5 - 0.3, 0), mat, Basis.IDENTITY)
	body.reparent(props)
	var roof := _mesh_box(Vector3(size.x + 0.6, 0.5, size.z + 0.6),
			center + Vector3(0, h - 0.3, 0), m_dark, Basis.IDENTITY)
	roof.reparent(props)
	var front := center + face * (depth * 0.5 + 0.06)
	var win_size := Vector3(0.3, h * 0.4, width * 0.66) if along_x else Vector3(width * 0.66, h * 0.4, 0.3)
	var win := _mesh_box(win_size, front + Vector3(0, h * 0.42, 0), m_window, Basis.IDENTITY)
	win.reparent(props)
	var aw_size := Vector3(1.8, 0.22, width * 0.74) if along_x else Vector3(width * 0.74, 0.22, 1.8)
	var aw := _mesh_box(aw_size, front + face * 0.9 + Vector3(0, h * 0.68, 0), m_mustard, Basis.IDENTITY)
	aw.reparent(props)
	var sign_size := Vector3(0.3, 1.5, width * 0.35) if along_x else Vector3(width * 0.35, 1.5, 0.3)
	var sign := _mesh_box(sign_size, front + Vector3(0, h * 0.88, 0), m_concrete, Basis.IDENTITY)
	sign.reparent(props)


# ------------------------------------------------------------------ cercas

func _fences() -> void:
	for i in range(4):
		var yaw := PI / 2.0 * float(i)
		var d := Vector3(sin(yaw), 0, cos(yaw))
		_box(Vector3(600, 2.4, 1.0), d * 299.0 + Vector3(0, 1.2, 0), m_dark, yaw)


# ------------------------------------------------------------------ decorativos

func _props_decor() -> void:
	var spots := [
		Vector3(-60, 0, -90), Vector3(-90, 0, -60), Vector3(60, 0, 90),
		Vector3(90, 0, 60), Vector3(-240, 0, 180), Vector3(240, 0, 180),
		Vector3(-240, 0, -200), Vector3(250, 0, -60), Vector3(-60, 0, 200),
		Vector3(60, 0, -220), Vector3(-230, 0, 0), Vector3(230, 0, 0),
		Vector3(-130, 0, -180), Vector3(40, 0, -60), Vector3(-70, 0, 190),
		Vector3(150, 0, 220), Vector3(-260, 0, -80), Vector3(265, 0, 200),
		Vector3(-150, 0, -230), Vector3(210, 0, -200),
	]
	for p in spots:
		_tree(p)
	for i in range(10):
		var ang := TAU * float(i) / 10.0
		_lamp(Vector3(sin(ang) * 70.0, 0, cos(ang) * 70.0))
	for i in range(6):
		var ang := TAU * (float(i) + 0.5) / 6.0
		_lamp(Vector3(sin(ang) * 118.0, 0, cos(ang) * 118.0))


func _tree(pos: Vector3) -> void:
	var trunk := _mesh_box(Vector3(0.5, 3.0, 0.5), pos + Vector3(0, 1.5, 0), m_trunk, Basis.IDENTITY)
	var crown := MeshInstance3D.new()
	var cm := SphereMesh.new()
	cm.radius = 1.8
	cm.height = 3.6
	crown.mesh = cm
	crown.material_override = m_leaf
	crown.position = pos + Vector3(0, 4.4, 0)
	add_child(crown)
	trunk.reparent(props)
	crown.reparent(props)


func _lamp(pos: Vector3) -> void:
	var post := _mesh_box(Vector3(0.15, 6.0, 0.15), pos + Vector3(0, 3.0, 0), m_dark, Basis.IDENTITY)
	var arm := _mesh_box(Vector3(0.15, 0.15, 1.2), pos + Vector3(0, 6.0, 0.5), m_dark, Basis.IDENTITY)
	post.reparent(props)
	arm.reparent(props)
