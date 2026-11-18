extends Node3D
## Main: monta o mundo, o jogador, a HUD, os perfis de qualidade
## e os menus (início + pausa).

var player: CharacterBody3D
var hud: CanvasLayer
var park: Node3D
var world_env: WorldEnvironment
var env: Environment
var sun: DirectionalLight3D

var menu_layer: CanvasLayer
var start_panel: Control
var pause_panel: Control
var started := false


func _init() -> void:
	process_mode = Node.PROCESS_MODE_ALWAYS


func _ready() -> void:
	_build_environment()

	park = load("res://scripts/park_builder.gd").new()
	park.name = "Park"
	add_child(park)
	park.build()

	player = load("res://scripts/player.gd").new()
	player.name = "Player"
	player.position = Vector3(0, 0.6, 42)
	player.facing = 0.0  # de frente para a fonte
	add_child(player)

	hud = load("res://scripts/hud.gd").new()
	add_child(hud)
	hud.player = player
	hud.pause_callback = _toggle_pause

	_apply_quality()
	Settings.profile_changed.connect(_apply_quality)

	_build_menus()
	get_tree().paused = true


func _build_environment() -> void:
	env = Environment.new()
	env.background_mode = Environment.BG_SKY
	var sky := Sky.new()
	var sky_mat := ProceduralSkyMaterial.new()
	sky_mat.sky_top_color = Color(0.16, 0.42, 0.78)
	sky_mat.sky_horizon_color = Color(0.52, 0.66, 0.78)
	sky_mat.ground_bottom_color = Color(0.3, 0.34, 0.3)
	sky_mat.ground_horizon_color = Color(0.42, 0.5, 0.55)
	sky.sky_material = sky_mat
	env.sky = sky
	env.ambient_light_source = Environment.AMBIENT_SOURCE_SKY
	env.ambient_light_sky_contribution = 1.0
	env.ambient_light_energy = 0.8
	env.tonemap_mode = Environment.TONE_MAPPER_FILMIC
	world_env = WorldEnvironment.new()
	world_env.environment = env
	add_child(world_env)

	sun = DirectionalLight3D.new()
	sun.rotation_degrees = Vector3(-56.0, 205.0, 0.0)
	sun.light_energy = 1.0
	sun.light_color = Color(1.0, 0.96, 0.88)
	add_child(sun)


func _apply_quality() -> void:
	var q: int = Settings.profile
	sun.shadow_enabled = q >= 1
	if q >= 1:
		sun.directional_shadow_mode = DirectionalLight3D.SHADOW_PARALLEL_2_SPLITS if q == 1 else DirectionalLight3D.SHADOW_PARALLEL_4_SPLITS
		sun.directional_shadow_max_distance = 160.0 if q == 1 else 280.0
	env.fog_enabled = q >= 1
	env.fog_light_color = Color(0.72, 0.78, 0.85)
	env.fog_density = 0.0008
	env.fog_sky_affect = 0.0  # mantém o céu limpo; névoa só no cenário
	env.glow_enabled = q >= 2
	get_viewport().msaa_3d = [Viewport.MSAA_DISABLED, Viewport.MSAA_2X, Viewport.MSAA_4X][q]
	if park != null:
		park.props.visible = q >= 1


# ------------------------------------------------------------------ menus

func _build_menus() -> void:
	menu_layer = CanvasLayer.new()
	menu_layer.layer = 20
	menu_layer.process_mode = Node.PROCESS_MODE_ALWAYS
	add_child(menu_layer)

	start_panel = _menu_panel(false)
	pause_panel = _menu_panel(true)
	pause_panel.visible = false


func _menu_panel(is_pause: bool) -> Control:
	var dim := ColorRect.new()
	dim.color = Color(0.05, 0.07, 0.1, 0.82)
	dim.set_anchors_preset(Control.PRESET_FULL_RECT)
	menu_layer.add_child(dim)

	var center := CenterContainer.new()
	center.set_anchors_preset(Control.PRESET_FULL_RECT)
	dim.add_child(center)

	var panel := PanelContainer.new()
	var sb := StyleBoxFlat.new()
	sb.bg_color = Color(0.12, 0.15, 0.2, 0.96)
	sb.set_corner_radius_all(14)
	sb.content_margin_left = 34.0
	sb.content_margin_right = 34.0
	sb.content_margin_top = 24.0
	sb.content_margin_bottom = 24.0
	panel.add_theme_stylebox_override("panel", sb)
	center.add_child(panel)

	var vb := VBoxContainer.new()
	vb.add_theme_constant_override("separation", 12)
	vb.custom_minimum_size = Vector2(430, 0)
	panel.add_child(vb)

	if not is_pause:
		var title := Label.new()
		title.text = "AURORA SKATE PARK"
		title.add_theme_font_size_override("font_size", 40)
		title.add_theme_color_override("font_color", Color(1.0, 0.75, 0.25))
		title.horizontal_alignment = HORIZONTAL_ALIGNMENT_CENTER
		vb.add_child(title)
		var sub := Label.new()
		sub.text = "Parque original de 600 x 600 m\nCorrimãos, bowls, manuals e gaps"
		sub.add_theme_font_size_override("font_size", 17)
		sub.add_theme_color_override("font_color", Color(0.8, 0.85, 0.9))
		sub.horizontal_alignment = HORIZONTAL_ALIGNMENT_CENTER
		vb.add_child(sub)

	_vspace(vb, 6)
	_quality_row(vb)

	if is_pause:
		_vspace(vb, 8)
		_menu_button(vb, "Continuar", func() -> void: _toggle_pause())
		_menu_button(vb, "Recomeçar", _restart)

	_vspace(vb, 8)
	var start_btn := _menu_button(vb, "SKATINAR!", _start_game)
	if is_pause:
		start_btn.visible = false

	_vspace(vb, 10)
	var hint := Label.new()
	hint.text = "Analógico esquerdo: empurrar e virar  ·  SALTAR: ollie (segure p/ alto)\nMANOBRA: flips e shove-its no ar  ·  GRIND: grind no corrimão / manual no chão\nDesktop: WASD + Espaço + J + K  ·  R volta ao último ponto seguro"
	hint.add_theme_font_size_override("font_size", 14)
	hint.add_theme_color_override("font_color", Color(0.65, 0.7, 0.78))
	hint.horizontal_alignment = HORIZONTAL_ALIGNMENT_CENTER
	vb.add_child(hint)
	return dim


func _vspace(vb: VBoxContainer, h: float) -> void:
	var c := Control.new()
	c.custom_minimum_size = Vector2(0, h)
	vb.add_child(c)


func _quality_row(vb: VBoxContainer) -> void:
	var lbl := Label.new()
	lbl.text = "Qualidade gráfica"
	lbl.add_theme_font_size_override("font_size", 18)
	lbl.horizontal_alignment = HORIZONTAL_ALIGNMENT_CENTER
	vb.add_child(lbl)

	var row := HBoxContainer.new()
	row.alignment = BoxContainer.ALIGNMENT_CENTER
	row.add_theme_constant_override("separation", 10)
	vb.add_child(row)
	var group := ButtonGroup.new()
	for i in range(3):
		var b := Button.new()
		b.text = Settings.PROFILES[i]
		b.toggle_mode = true
		b.button_group = group
		b.button_pressed = i == Settings.profile
		b.custom_minimum_size = Vector2(110, 44)
		b.pressed.connect(func() -> void:
			Settings.set_profile(i)
			_apply_quality())
		row.add_child(b)


func _menu_button(vb: VBoxContainer, text: String, cb: Callable) -> Button:
	var b := Button.new()
	b.text = text
	b.custom_minimum_size = Vector2(0, 52)
	b.add_theme_font_size_override("font_size", 22)
	b.pressed.connect(cb)
	vb.add_child(b)
	return b


func _start_game() -> void:
	started = true
	start_panel.visible = false
	get_tree().paused = false
	Game.reset()


func _toggle_pause() -> void:
	if not started:
		return
	var paused := not get_tree().paused
	get_tree().paused = paused
	pause_panel.visible = paused


func _restart() -> void:
	Game.reset()
	get_tree().paused = false
	get_tree().reload_current_scene()


func _unhandled_input(event: InputEvent) -> void:
	if event.is_action_pressed("pause") and started:
		_toggle_pause()
		get_viewport().set_input_as_handled()
