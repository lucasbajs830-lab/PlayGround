extends CharacterBody3D
## Jogador de skate: controle analógico, ollie com carga, flips, spins,
## grinds em corrimãos, manuals, gaps e quedas (bails).

enum S { GROUND, AIR, GRIND, MANUAL, BAIL }

const GRAVITY := 24.0
const JUMP_MIN := 6.8
const JUMP_MAX := 11.0
const MAX_CHARGE := 0.45
const MAX_SPEED := 14.0
const PUSH_ACCEL := 8.0
const PUMP_ACCEL := 5.0
const ROLL_FRICTION := 0.15
const BRAKE_DECEL := 9.0
const CARVE_GRIP := 7.0
const BAIL_TIME := 1.4

var state: int = S.GROUND
var facing := 0.0          # yaw do shape (radianos); frente = (-sin, 0, -cos)
var charge := -1.0         # >= 0 => carregando ollie
var safe_pos := Vector3.ZERO
var safe_timer := 0.0

# manobra no ar
var trick_name := ""
var trick_axis := Vector3.ZERO
var trick_spins := 0.0     # voltas (1 = 360)
var trick_time := 0.0
var trick_dur := 0.0
var trick_pts := 0
var trick_awarded := false

# ar
var air_time := 0.0
var spin_accum := 0.0

# grind
var rail: Area3D = null
var rail_a := Vector3.ZERO
var rail_ab := Vector3.ZERO
var rail_len := 1.0
var rail_t := 0.0
var grind_sign := 1.0
var grind_drift := 0.0
var grind_wander := 1.0
var wander_timer := 0.0
var grind_pts := 0.0
var grind_cooldown := 0.0

# manual
var manual_drift := 0.0
var manual_wander := 1.0
var manual_pts := 0.0

# queda
var bail_t := 0.0
var debug := false  # imprime o motivo das quedas (usado pelos testes em dev/)

# nós visuais
var rig: Node3D
var trick_node: Node3D
var skater: Node3D
var sensor: Area3D
var cam: Camera3D
var sparks: CPUParticles3D
var cam_last_fwd := Vector3.FORWARD

const TRICKS := {
	"kickflip":   {"n": "Kickflip",     "axis": Vector3(0, 0, 1), "spins": 1.0, "dur": 0.45, "pts": 200},
	"heelflip":   {"n": "Heelflip",     "axis": Vector3(0, 0, -1), "spins": 1.0, "dur": 0.45, "pts": 250},
	"shuvit":     {"n": "Pop Shove-it", "axis": Vector3(0, 1, 0), "spins": 0.5, "dur": 0.35, "pts": 150},
	"shovit360":  {"n": "360 Shove-it", "axis": Vector3(0, 1, 0), "spins": 1.0, "dur": 0.55, "pts": 300},
}


func _ready() -> void:
	add_to_group("player")
	collision_layer = 2
	collision_mask = 1
	floor_max_angle = deg_to_rad(78.0)  # permite transições de bowl / QP
	floor_snap_length = 0.6
	safe_pos = global_position
	_build_body()
	_build_visuals()
	_build_camera()


func _build_body() -> void:
	var cs := CollisionShape3D.new()
	var cap := CapsuleShape3D.new()
	cap.radius = 0.32
	cap.height = 1.3
	cs.shape = cap
	cs.position = Vector3(0, 0.67, 0)  # base do capsule = origem (contato do shape)
	add_child(cs)

	sensor = Area3D.new()
	sensor.collision_layer = 0
	sensor.collision_mask = 4  # corrimãos (layer 3 -> bit 4)
	sensor.monitorable = false
	var ss := CollisionShape3D.new()
	var box := BoxShape3D.new()
	box.size = Vector3(1.6, 2.2, 1.6)
	ss.shape = box
	ss.position = Vector3(0, 0.6, 0)
	sensor.add_child(ss)
	add_child(sensor)

	sparks = CPUParticles3D.new()
	sparks.emitting = false
	sparks.one_shot = true
	sparks.amount = 14
	sparks.lifetime = 0.4
	sparks.explosiveness = 1.0
	sparks.direction = Vector3(0, 1, 0)
	sparks.initial_velocity_min = 1.5
	sparks.initial_velocity_max = 3.0
	sparks.gravity = Vector3(0, -9, 0)
	sparks.scale_amount_min = 0.4
	sparks.scale_amount_max = 0.9
	sparks.color = Color(1.0, 0.85, 0.35)
	var sm := SphereMesh.new()
	sm.radius = 0.03
	sm.height = 0.06
	sparks.mesh = sm
	add_child(sparks)


func _mat(color: Color, metal := 0.0, rough := 0.8) -> StandardMaterial3D:
	var m := StandardMaterial3D.new()
	m.albedo_color = color
	m.metallic = metal
	m.roughness = rough
	return m


func _build_visuals() -> void:
	rig = Node3D.new()
	rig.name = "Rig"
	add_child(rig)
	trick_node = Node3D.new()
	rig.add_child(trick_node)

	var mat_metal := _mat(Color(0.75, 0.75, 0.78), 0.9, 0.35)

	# shape (frente = -Z)
	var mat_deck := _mat(Color(0.7, 0.26, 0.1))
	var mat_grip := _mat(Color(0.12, 0.12, 0.13))
	var mat_wheel := _mat(Color(0.16, 0.16, 0.18), 0.0, 0.5)
	var mat_cloth := _mat(Color(0.16, 0.42, 0.72))
	var mat_skin := _mat(Color(0.85, 0.65, 0.5))
	var mat_helm := _mat(Color(0.9, 0.2, 0.25))

	var deck := MeshInstance3D.new()
	var dm := BoxMesh.new()
	dm.size = Vector3(0.26, 0.05, 0.86)
	deck.mesh = dm
	deck.material_override = mat_deck
	deck.position = Vector3(0, 0.2, 0)
	trick_node.add_child(deck)

	# lixa em cima do shape
	var grip := MeshInstance3D.new()
	var gm2 := BoxMesh.new()
	gm2.size = Vector3(0.24, 0.012, 0.8)
	grip.mesh = gm2
	grip.material_override = mat_grip
	grip.position = Vector3(0, 0.233, 0)
	trick_node.add_child(grip)

	# nose e tail levantados
	for end in [-1.0, 1.0]:
		var kick := MeshInstance3D.new()
		var km := BoxMesh.new()
		km.size = Vector3(0.26, 0.05, 0.18)
		kick.mesh = km
		kick.material_override = mat_deck
		kick.position = Vector3(0, 0.26, end * 0.5)
		kick.rotation.x = -end * 0.45
		trick_node.add_child(kick)

	for sz in [-1.0, 1.0]:
		var truck := MeshInstance3D.new()
		var tm := BoxMesh.new()
		tm.size = Vector3(0.2, 0.05, 0.08)
		truck.mesh = tm
		truck.material_override = mat_metal
		truck.position = Vector3(0, 0.13, sz * 0.3)
		trick_node.add_child(truck)
		for side in [-1.0, 1.0]:
			var wh := MeshInstance3D.new()
			var wm := CylinderMesh.new()
			wm.top_radius = 0.032
			wm.bottom_radius = 0.032
			wm.height = 0.035
			wh.mesh = wm
			wh.material_override = mat_wheel
			wh.rotation = Vector3(0, 0, PI / 2.0)
			wh.position = Vector3(side * 0.11, 0.075, sz * 0.3)
			trick_node.add_child(wh)

	# esqueitista simplificado
	skater = Node3D.new()
	rig.add_child(skater)
	var body := MeshInstance3D.new()
	var bm := CapsuleMesh.new()
	bm.radius = 0.15
	bm.height = 0.62
	body.mesh = bm
	body.material_override = mat_cloth
	body.position = Vector3(0, 0.78, -0.05)
	body.rotation = Vector3(0.25, 0, 0)
	skater.add_child(body)
	var head := MeshInstance3D.new()
	var hm := SphereMesh.new()
	hm.radius = 0.11
	hm.height = 0.22
	head.mesh = hm
	head.material_override = mat_skin
	head.position = Vector3(0, 1.18, 0.04)
	skater.add_child(head)
	var helm := MeshInstance3D.new()
	helm.mesh = hm
	helm.material_override = mat_helm
	helm.position = Vector3(0, 1.22, 0.03)
	helm.scale = Vector3(1.12, 0.8, 1.12)
	skater.add_child(helm)
	for side in [-1.0, 1.0]:
		var arm := MeshInstance3D.new()
		var am := CapsuleMesh.new()
		am.radius = 0.045
		am.height = 0.42
		arm.mesh = am
		arm.material_override = mat_skin
		arm.position = Vector3(side * 0.2, 0.88, -0.02)
		arm.rotation = Vector3(0, 0, side * -0.5)
		skater.add_child(arm)


func _build_camera() -> void:
	cam = Camera3D.new()
	cam.fov = 66.0
	cam.near = 0.1
	cam.far = 500.0
	cam.current = true
	get_parent().add_child(cam)


func _forward() -> Vector3:
	return Vector3(-sin(facing), 0.0, -cos(facing))


func is_airborne() -> bool:
	return state == S.AIR


func get_balance() -> float:
	if state == S.GRIND:
		return grind_drift
	if state == S.MANUAL:
		return manual_drift
	return NAN


func _physics_process(delta: float) -> void:
	grind_cooldown = maxf(0.0, grind_cooldown - delta)
	match state:
		S.GROUND:
			_ground(delta)
		S.AIR:
			_air(delta)
		S.GRIND:
			_grind(delta)
		S.MANUAL:
			_manual(delta)
		S.BAIL:
			_bail_tick(delta)
	if InputHub.just("respawn") and state != S.BAIL:
		_teleport_safe()
	_update_rig(delta)
	_update_camera(delta)


# ------------------------------------------------------------------ SOLO

func _ground(delta: float) -> void:
	var speed_before := Vector3(velocity.x, 0, velocity.z).length()
	var fwd := _forward()
	var flat := Vector3(velocity.x, 0, velocity.z)
	var speed := flat.length()

	# direção / carving
	var steer := InputHub.get_steer()
	facing -= steer * _steer_rate(speed) * delta

	# empurrar / frear / bomba nas transições
	var p := InputHub.get_push()
	if p > 0.05 and speed < MAX_SPEED:
		flat += fwd * PUSH_ACCEL * p * delta
		if _on_transition():
			flat += flat.normalized() * PUMP_ACCEL * delta
	elif p < -0.05:
		flat *= maxf(0.0, 1.0 - BRAKE_DECEL * delta)
	flat *= maxf(0.0, 1.0 - ROLL_FRICTION * delta)

	flat = flat.lerp(fwd * speed, minf(1.0, CARVE_GRIP * delta))
	velocity.x = flat.x
	velocity.z = flat.z
	velocity.y -= GRAVITY * delta

	# ollie com carga
	if InputHub.just("ollie"):
		charge = 0.0
	if charge >= 0.0:
		charge = minf(charge + delta, MAX_CHARGE)
		if not InputHub.down("ollie") or charge >= MAX_CHARGE:
			_ollie(charge / MAX_CHARGE)
			charge = -1.0
			return

	# manual
	if InputHub.down("grind") and speed > 3.5:
		_start_manual()
		return

	move_and_slide()
	for i in get_slide_collision_count():
		var col := get_slide_collision(i)
		var n := col.get_normal()
		# n.y muito baixo = parede vertical; n.y negativo = teto/underside.
		if n.y > 0.3 or n.y < -0.1:
			continue
		if speed_before <= 9.0:
			continue
		if _is_low_obstacle(col.get_collider()):
			continue  # meio-fio, ledge baixo: só trava, não derruba
		_bail("parede n=%s vel=%s" % [n, velocity])
		return

	if is_on_floor():
		# converte o movimento horizontal em velocidade ao longo da rampa:
		# é isso que faz o skatista ser lançado pelo lip.
		var fn := get_floor_normal()
		if fn.y > 0.2:
			velocity.y = -(velocity.x * fn.x + velocity.z * fn.z) / fn.y
			# teto de lançamento: bowls/QPs não viram trampolim
			velocity.y = minf(velocity.y, 7.0)
		_mark_safe(delta)
		return

	# saiu do chão (lip de rampa, ledge, borda de bowl): passa para o ar
	state = S.AIR
	air_time = 0.0
	spin_accum = 0.0
	trick_name = ""
	charge = -1.0


func _steer_rate(speed: float) -> float:
	return lerpf(2.8, 1.2, clampf(speed / MAX_SPEED, 0.0, 1.0))


## Obstáculos baixos (ledge, meio-fio, banco) não devem derrubar o skatista.
func _is_low_obstacle(obj: Object) -> bool:
	if not (obj is StaticBody3D):
		return false
	for c in obj.get_children():
		if c is CollisionShape3D:
			var sh: Shape3D = (c as CollisionShape3D).shape
			if sh is BoxShape3D and (sh as BoxShape3D).size.y <= 1.2:
				return true
	return false


func _on_transition() -> bool:
	return is_on_floor() and get_floor_normal().y < 0.96


func _mark_safe(delta: float) -> void:
	safe_timer -= delta
	if safe_timer <= 0.0 and Vector3(velocity.x, 0, velocity.z).length() > 1.0:
		safe_pos = global_position
		safe_timer = 0.8


func _ollie(power: float) -> void:
	velocity.y = lerpf(JUMP_MIN, JUMP_MAX, power) + maxf(0.0, Vector3(velocity.x, 0, velocity.z).length() * 0.08)
	state = S.AIR
	air_time = 0.0
	spin_accum = 0.0
	Game.add_trick("Ollie", 10)


# ------------------------------------------------------------------ AR

func _air(delta: float) -> void:
	air_time += delta
	velocity.y -= GRAVITY * delta

	# spin corporal no ar
	var steer := InputHub.get_steer()
	facing += steer * 3.6 * delta
	spin_accum += steer * 3.6 * delta

	# manobra de flip/shove
	if trick_name.is_empty() and InputHub.just("trick"):
		_start_trick()
	if not trick_name.is_empty():
		_tick_trick(delta)

	# procura corrimão para grind
	if velocity.y < 1.5 and grind_cooldown <= 0.0:
		_try_grind_snap()
		if state == S.GRIND:
			return

	move_and_slide()
	if is_on_floor():
		_land()


func _start_trick() -> void:
	var dir := InputHub.stick
	var key := "shuvit"
	if dir.length() >= 0.4:
		if absf(dir.x) >= absf(dir.y):
			key = "kickflip" if dir.x < 0.0 else "heelflip"
		else:
			key = "heelflip" if dir.y > 0.0 else "shovit360"
	var t: Dictionary = TRICKS[key]
	trick_name = t.n
	trick_axis = t.axis
	trick_spins = t.spins
	trick_dur = t.dur
	trick_time = 0.0
	trick_pts = t.pts
	trick_awarded = false


func _tick_trick(delta: float) -> void:
	trick_time += delta
	var pr := clampf(trick_time / trick_dur, 0.0, 1.0)
	trick_node.rotation = trick_axis * (trick_spins * TAU * pr)
	if pr >= 1.0:
		Game.add_trick(trick_name, trick_pts)
		trick_awarded = true
		trick_name = ""
		trick_time = 0.0
		trick_node.rotation = Vector3.ZERO


func _land() -> void:
	# alinhamento do shape com a velocidade
	var flat := Vector3(velocity.x, 0, velocity.z)
	if flat.length() > 0.5:
		var vd := flat.normalized()
		var v_yaw := atan2(-vd.x, -vd.z)
		var err := wrapf(facing - v_yaw, -PI, PI)
		if absf(err) > PI / 2.0:
			_bail("aterrissagem de lado err=%.2f" % err)
			return
		facing = v_yaw

	# flip incompleto na aterrissagem
	if not trick_name.is_empty():
		var pr := trick_time / trick_dur
		trick_node.rotation = Vector3.ZERO
		if pr < 0.75:
			_bail("flip incompleto pr=%.2f" % pr)
			return
		Game.add_trick(trick_name + " (vacilado)", int(trick_pts * 0.4))
		trick_name = ""

	# bônus de spin
	var spins := int(floor((absf(spin_accum) + 0.6) / PI))
	if spins >= 1:
		var names: Array[String] = ["", "180", "360", "540", "720", "900"]
		var nm: String = names[mini(spins, 5)] + " Spin"
		Game.add_trick(nm, spins * 100)

	trick_awarded = false
	state = S.GROUND
	_mark_safe(0.0)


# ------------------------------------------------------------------ GRIND

func _try_grind_snap() -> void:
	var flat := Vector3(velocity.x, 0, velocity.z)
	var speed := flat.length()
	if speed < 3.0:
		return
	var best: Area3D = null
	var best_t := 0.0
	var best_d := 1e9
	var best_ab := Vector3.ZERO
	for a in sensor.get_overlapping_areas():
		if not a.is_in_group("rail"):
			continue
		var pa: Vector3 = a.get_meta("a")
		var pb: Vector3 = a.get_meta("b")
		var ab := pb - pa
		var l := ab.length()
		if l < 0.3:
			continue
		var d := ab / l
		var t := clampf((global_position - pa).dot(d), 0.0, l)
		var p := pa + d * t
		var dy := global_position.y - p.y
		if absf(dy) > 1.3:
			continue
		var dxz := Vector2(global_position.x - p.x, global_position.z - p.z).length()
		if dxz > 1.1:
			continue
		if absf(flat.normalized().dot(d)) < 0.5:
			continue
		var score := dxz + absf(dy) * 2.0
		if score < best_d:
			best_d = score
			best = a
			best_t = t
			best_ab = ab
	if best == null:
		return

	rail = best
	rail_a = best.get_meta("a")
	rail_ab = best_ab
	rail_len = best_ab.length()
	rail_t = best_t
	var d := rail_ab / rail_len
	grind_sign = signf(velocity.x * d.x + velocity.y * d.y + velocity.z * d.z)
	if grind_sign == 0.0:
		grind_sign = 1.0
	var spd := maxf(velocity.dot(d) * grind_sign, 4.0)
	velocity = d * grind_sign * spd
	velocity.y = maxf(velocity.y, -1.0)
	global_position = rail_a + d * best_t
	state = S.GRIND
	grind_drift = 0.0
	grind_pts = 0.0
	grind_wander = 1.0 if randf() > 0.5 else -1.0
	wander_timer = randf_range(0.5, 1.1)
	Game.extend_combo()
	sparks.global_position = global_position
	sparks.restart()
	sparks.emitting = true


func _grind(delta: float) -> void:
	var d := rail_ab / rail_len
	var spd := velocity.dot(d) * grind_sign
	spd = maxf(spd - 0.6 * delta, 3.0)
	velocity = d * grind_sign * spd
	velocity.y -= GRAVITY * 0.35 * delta

	rail_t += spd * delta
	grind_pts += 80.0 * delta

	# equilíbrio
	wander_timer -= delta
	if wander_timer <= 0.0:
		grind_wander = -grind_wander
		wander_timer = randf_range(0.5, 1.1)
	grind_drift += (grind_wander * 0.55 - InputHub.get_steer() * 1.5) * delta
	if absf(grind_drift) >= 1.0:
		_bail("equilibrio do grind drift=%.2f" % grind_drift)
		return

	Game.extend_combo()

	if InputHub.just("ollie"):
		_grind_end(5.0)
		return
	if rail_t >= rail_len or rail_t <= 0.0:
		_grind_end(1.5)
		return

	move_and_slide()


func _grind_end(hop: float) -> void:
	Game.add_trick("50-50 Grind", int(grind_pts))
	grind_cooldown = 0.35
	rail = null
	state = S.AIR
	air_time = 0.0
	spin_accum = 0.0
	velocity += Vector3.UP * hop


# ------------------------------------------------------------------ MANUAL

func _start_manual() -> void:
	state = S.MANUAL
	manual_drift = 0.0
	manual_pts = 0.0
	manual_wander = 1.0 if randf() > 0.5 else -1.0
	wander_timer = randf_range(0.5, 1.0)
	Game.add_trick("Manual", 50)


func _manual(delta: float) -> void:
	var fwd := _forward()
	var flat := Vector3(velocity.x, 0, velocity.z)
	var speed := flat.length()

	# quase sem direção durante o manual
	var steer := InputHub.get_steer()
	facing -= steer * _steer_rate(speed) * 0.3 * delta
	flat = flat.lerp(fwd * speed, minf(1.0, 4.0 * delta))
	velocity.x = flat.x
	velocity.z = flat.z
	velocity.y -= GRAVITY * delta

	manual_pts += 60.0 * delta
	wander_timer -= delta
	if wander_timer <= 0.0:
		manual_wander = -manual_wander
		wander_timer = randf_range(0.5, 1.0)
	manual_drift += (manual_wander * 0.5 - InputHub.get_push() * 1.4) * delta
	if absf(manual_drift) >= 1.0:
		_bail("equilibrio do manual drift=%.2f" % manual_drift)
		return

	Game.extend_combo()

	if not InputHub.down("grind") or speed < 2.0:
		Game.add_trick("Manual", int(manual_pts))
		state = S.GROUND
		return

	move_and_slide()
	if not is_on_floor():
		Game.add_trick("Manual", int(manual_pts))
		state = S.AIR
		air_time = 0.0
		spin_accum = 0.0


# ------------------------------------------------------------------ QUEDA

func _bail(reason: String) -> void:
	if debug:
		print("BAIL @", global_position, " vel=", velocity, " motivo=", reason)
	Game.bail()
	state = S.BAIL
	bail_t = BAIL_TIME
	velocity *= 0.25
	trick_name = ""
	trick_node.rotation = Vector3.ZERO
	rail = null


func _bail_tick(delta: float) -> void:
	velocity.x = move_toward(velocity.x, 0.0, 6.0 * delta)
	velocity.z = move_toward(velocity.z, 0.0, 6.0 * delta)
	velocity.y -= GRAVITY * delta
	skater.rotation.x += 7.0 * delta
	skater.rotation.z += 4.0 * delta
	move_and_slide()
	bail_t -= delta
	if bail_t <= 0.0 or global_position.y < -10.0:
		_teleport_safe()


func _teleport_safe() -> void:
	global_position = safe_pos + Vector3(0, 0.6, 0)
	velocity = Vector3.ZERO
	skater.rotation = Vector3.ZERO
	safe_timer = 0.0
	state = S.GROUND


# ------------------------------------------------------------------ VISUAL / CÂMERA

func _update_rig(delta: float) -> void:
	var yaw := Basis(Vector3.UP, facing)
	if (state == S.GROUND or state == S.MANUAL) and is_on_floor():
		var n := get_floor_normal()
		var q := Quaternion(Vector3.UP, n)
		rig.global_basis = Basis(q) * yaw
		if state == S.MANUAL:
			rig.rotate_object_local(Vector3(1, 0, 0), -0.22)
	else:
		rig.global_basis = yaw


func _update_camera(delta: float) -> void:
	var flat := Vector3(velocity.x, 0, velocity.z)
	var fwd := _forward()
	if flat.length() > 2.0 and state != S.BAIL:
		fwd = fwd.lerp(flat.normalized(), 0.6).normalized()
	cam_last_fwd = cam_last_fwd.lerp(fwd, minf(1.0, 5.0 * delta))
	var target := global_position + Vector3(0, 1.5, 0)
	var speed := flat.length()
	var dist := 5.0 + speed * 0.07
	var desired := target - cam_last_fwd * dist + Vector3(0, 1.7, 0)
	# dentro de bowl/piscina a câmera não pode afundar no chão
	if global_position.y < -1.0:
		desired.y = maxf(desired.y, 2.6)
		desired -= cam_last_fwd * 2.0

	# teto baixo do túnel: a câmera precisa passar por baixo dele
	if absf(global_position.z + 150.0) < 8.0 and global_position.x > 96.0 and global_position.x < 144.0:
		desired.y = minf(desired.y, 3.6)

	# evita atravessar paredes
	var space := get_world_3d().direct_space_state
	var query := PhysicsRayQueryParameters3D.create(target, desired, 1)
	var hit := space.intersect_ray(query)
	if hit.has("position"):
		desired = hit.position - cam_last_fwd * 0.3 + Vector3(0, 0.2, 0)

	cam.global_position = cam.global_position.lerp(desired, minf(1.0, 7.0 * delta))
	cam.look_at(target + cam_last_fwd * 2.0, Vector3.UP)
	cam.fov = clampf(64.0 + speed * 0.9, 64.0, 84.0)
