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

# perfil de transição (frações de distância horizontal, altura)
# inclinações <= ~75 graus para serem "piso" para a física
const PROFILE := [
	Vector2(0.0, 0.0), Vector2(0.10, 0.32), Vector2(0.26, 0.56),
	Vector2(0.46, 0.77), Vector2(0.66, 0.9), Vector2(0.84, 0.98), Vector2(1.0, 1.0),
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


func _make_materials() -> void:
	m_asphalt = _mat(Color(0.42, 0.42, 0.44), 0.0, 0.95)
	m_concrete = _mat(Color(0.62, 0.61, 0.58), 0.0, 0.9)
	m_concrete2 = _mat(Color(0.53, 0.52, 0.5), 0.0, 0.9)
	m_red = _mat(Color(0.65, 0.2, 0.16), 0.0, 0.85)
	m_metal = _mat(Color(0.78, 0.78, 0.8), 0.95, 0.3)
	m_wood = _mat(Color(0.55, 0.38, 0.22), 0.0, 0.85)
	m_grass = _mat(Color(0.3, 0.5, 0.25), 0.0, 1.0)
	m_trunk = _mat(Color(0.35, 0.26, 0.18), 0.0, 1.0)
	m_leaf = _mat(Color(0.22, 0.45, 0.2), 0.0, 1.0)
	m_dark = _mat(Color(0.25, 0.25, 0.27), 0.0, 0.9)
	m_water = _mat(Color(0.2, 0.45, 0.55), 0.1, 0.3)
	m_ground_far = _mat(Color(0.34, 0.42, 0.3), 0.0, 1.0)


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
func _slab(a: Vector3, b: Vector3, wdir: Vector3, hw: float, mat: StandardMaterial3D) -> void:
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

	var mi := _mesh_box(Vector3(hw * 2.0 + 0.15, 0.8, l + 0.25), pos, mat, basis)

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
	disc.top_radius = 62.0
	disc.bottom_radius = 62.0
	disc.height = 0.06
	plaza.mesh = disc
	plaza.material_override = m_concrete
	plaza.position = Vector3(0, 0.02, 0)
	add_child(plaza)
	# faixas de grama nas bordas (decorativo, sem colisão relevante)
	for sx in [-1.0, 1.0]:
		for sz in [-1.0, 1.0]:
			var g := MeshInstance3D.new()
			var gm := BoxMesh.new()
			gm.size = Vector3(185, 0.05, 185)
			g.mesh = gm
			g.material_override = m_grass
			g.position = Vector3(sx * 193, 0.03, sz * 193)
			add_child(g)


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


## Kicker: rampa reta de ~23 graus.
func _kicker(pos: Vector3, yaw: float) -> void:
	var fwd := Vector3(-sin(yaw), 0, -cos(yaw))  # direção de subida
	var side := fwd.cross(Vector3.UP)
	var a := pos + fwd * (-1.2)
	var b := pos + fwd * 1.2 + Vector3(0, 1.0, 0)
	_slab(a, b, side, 1.4, m_concrete2)


# ------------------------------------------------------------------ bowl

func _bowl() -> void:
	var center := Vector3(-180, 0, 80)
	var radius := 38.0
	var depth := 4.5
	var extent := depth * 0.8
	var segments := 26
	var chord := TAU * radius / segments
	for i in range(segments):
		var t0 := TAU * float(i) / segments
		var t1 := TAU * float(i + 1) / segments
		var tan := (Vector3(sin(t1), 0, cos(t1)) - Vector3(sin(t0), 0, cos(t0))).normalized()
		var mid_rim := center + Vector3(sin((t0 + t1) / 2.0), 0, cos((t0 + t1) / 2.0)) * (radius + 0.2)
		for k in range(PROFILE.size() - 1):
			var p0: Vector2 = PROFILE[k]
			var p1: Vector2 = PROFILE[k + 1]
			var r0 := radius - extent * p0.x
			var r1 := radius - extent * p1.x
			var y0 := -depth * p0.y
			var y1 := -depth * p1.y
			var a0 := center + Vector3(sin(t0) * r0, y0, cos(t0) * r0)
			var a1 := center + Vector3(sin(t0) * r1, y1, cos(t0) * r1)
			# laje: perfil radial extrudado na tangente do anel
			_slab(a0, a1, tan, chord * 0.55, m_concrete)
	# piso do bowl
	var fbody := StaticBody3D.new()
	fbody.collision_layer = 1
	var fcs := CollisionShape3D.new()
	var fshape := CylinderShape3D.new()
	fshape.radius = radius - extent - 0.1
	fshape.height = 0.4
	fcs.shape = fshape
	fbody.add_child(fcs)
	fbody.position = center + Vector3(0, -depth - 0.2, 0)
	var floor_m := MeshInstance3D.new()
	var fm := CylinderMesh.new()
	fm.top_radius = radius - extent - 0.1
	fm.bottom_radius = radius - extent - 0.1
	fm.height = 0.4
	floor_m.mesh = fm
	floor_m.material_override = m_concrete2
	fbody.add_child(floor_m)
	add_child(fbody)
	_gap(Vector3(20, 4, 20), center + Vector3(0, 1.8, 0), "do Bowl")
	# anel externo: piso ao redor do bowl até fora do buraco retangular
	for i in range(segments):
		var t0 := TAU * float(i) / segments
		var t1 := TAU * float(i + 1) / segments
		var dir0 := Vector3(sin(t0), 0, cos(t0))
		var tan := (Vector3(sin(t1), 0, cos(t1)) - dir0).normalized()
		var a := center + dir0 * 38.15
		var b := center + dir0 * 64.0
		_slab(a, b, tan, chord * 0.55, m_asphalt)
	# deck ao redor (decorativo)
	var deck_m := MeshInstance3D.new()
	var dkm := CylinderMesh.new()
	dkm.top_radius = radius + 3.0
	dkm.bottom_radius = radius + 3.0
	dkm.height = 0.12
	deck_m.mesh = dkm
	deck_m.material_override = m_concrete
	deck_m.position = center + Vector3(0, -0.03, 0)
	add_child(deck_m)


# ------------------------------------------------------------------ piscina vazia

func _pool() -> void:
	var center := Vector3(-190, 0, -110)
	var hx := 18.0
	var hz := 14.0
	var depth := 2.6
	var extent := depth * 0.8
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

	var n := path.size()
	for i in range(n):
		var pa := path[i]
		var pb := path[(i + 1) % n]
		if (pb - pa).length() < 0.05:
			continue  # junção borda/arco (ponto duplicado)
		var tan := (pb - pa).normalized()
		var chord := (pb - pa).length()
		for k in range(PROFILE.size() - 1):
			var p0: Vector2 = PROFILE[k]
			var p1: Vector2 = PROFILE[k + 1]
			var a0 := pa + _inward(pa, center) * extent * p0.x + Vector3(0, -depth * p0.y, 0)
			var a1 := pa + _inward(pa, center) * extent * p1.x + Vector3(0, -depth * p1.y, 0)
			_slab(a0, a1, tan, chord * 0.6, m_concrete)

	# piso
	_box(Vector3((hx - extent) * 2.0, 0.3, (hz - extent) * 2.0), center + Vector3(0, -depth - 0.15, 0), m_concrete2)
	# anel externo: piso ao redor da piscina até fora do buraco retangular
	for i in range(n):
		var pa: Vector3 = path[i]
		var pb: Vector3 = path[(i + 1) % n]
		if (pb - pa).length() < 0.05:
			continue
		var tan := (pb - pa).normalized()
		var out := -_inward(pa, center)
		var a := pa + out * 0.02
		var b := pa + out * 30.0
		_slab(a, b, tan, (pb - pa).length() * 0.6, m_asphalt)


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
	# kicker dentro do túnel para o gap
	_kicker(c + Vector3(-9, 0, 0), 0.0)
	_gap(Vector3(20, 3.2, 8), c + Vector3(0, 2.0, 0), "do Túnel")


# ------------------------------------------------------------------ quartos de onda

## QP curvo. `facing` = yaw da normal da parede (direção do rider).
func _quarter(pos: Vector3, width: float, height: float, facing: float) -> void:
	var n := Vector3(sin(facing), 0, cos(facing))
	var tan := n.cross(Vector3.UP)
	var steps := PROFILE.size() - 1
	for k in range(steps):
		var p0: Vector2 = PROFILE[k]
		var p1: Vector2 = PROFILE[k + 1]
		# s cresce para dentro da rampa (oposto à normal); y sobe
		var a0 := pos - n * (height * p0.x) + Vector3(0, height * p0.y, 0)
		var a1 := pos - n * (height * p1.x) + Vector3(0, height * p1.y, 0)
		_slab(a0, a1, tan, width * 0.5, m_concrete)
	# parede de fundo (atrás da transição)
	_box(Vector3(width, height + 1.0, 1.0), pos - n * (height * 0.9) + Vector3(0, (height + 1.0) / 2.0, 0), m_concrete2, atan2(n.x, n.z))
	# coping decorativo (ao longo da boca)
	if props != null:
		var cop := _mesh_box(Vector3(width + 0.2, 0.12, 0.14),
				pos - n * height + Vector3(0, height + 0.05, 0), m_metal,
				Basis(Vector3.UP, facing))
		cop.reparent(props)


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
	]
	for p in spots:
		_tree(p)
	for i in range(8):
		var ang := TAU * float(i) / 8.0
		_lamp(Vector3(sin(ang) * 90.0, 0, cos(ang) * 90.0))


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
