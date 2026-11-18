extends CanvasLayer
## HUD: placar, combo, popups de manobra, barra de equilíbrio,
## velocidade e controles de toque (Android).

var score_label: Label
var mult_label: Label
var speed_label: Label
var popup_box: VBoxContainer
var balance_panel: Panel
var balance_fill: ColorRect
var touch_root: Control
var pause_btn: Panel

var player: CharacterBody3D
var pause_callback: Callable

# estado do toque
var stick_id := -1
var stick_origin := Vector2.ZERO
var stick_knob: Panel
var stick_base: Panel
var buttons := {}  # nome -> {panel, label, rect}


func _ready() -> void:
	layer = 10
	_build_labels()
	_build_balance()
	_build_touch()


func _build_labels() -> void:
	score_label = _label(34, Color.WHITE)
	score_label.set_anchors_preset(Control.PRESET_TOP_RIGHT)
	score_label.offset_left = -420.0
	score_label.offset_top = 12.0
	score_label.offset_right = -16.0
	score_label.horizontal_alignment = HORIZONTAL_ALIGNMENT_RIGHT
	add_child(score_label)

	mult_label = _label(22, Color(1.0, 0.8, 0.2))
	mult_label.set_anchors_preset(Control.PRESET_TOP_RIGHT)
	mult_label.offset_left = -420.0
	mult_label.offset_top = 56.0
	mult_label.offset_right = -16.0
	mult_label.horizontal_alignment = HORIZONTAL_ALIGNMENT_RIGHT
	add_child(mult_label)

	speed_label = _label(18, Color(1, 1, 1, 0.8))
	speed_label.set_anchors_preset(Control.PRESET_TOP_LEFT)
	speed_label.offset_left = 16.0
	speed_label.offset_top = 12.0
	add_child(speed_label)

	popup_box = VBoxContainer.new()
	popup_box.set_anchors_preset(Control.PRESET_CENTER_BOTTOM)
	popup_box.offset_left = -300.0
	popup_box.offset_right = 300.0
	popup_box.offset_top = -170.0
	popup_box.offset_bottom = -20.0
	popup_box.alignment = BoxContainer.ALIGNMENT_END
	add_child(popup_box)

	Game.score_changed.connect(_on_score)
	Game.trick_popup.connect(_on_popup)
	_on_score(Game.score, Game.pending, Game.mult)


func _label(size: int, color: Color) -> Label:
	var l := Label.new()
	l.add_theme_font_size_override("font_size", size)
	l.add_theme_color_override("font_color", color)
	l.add_theme_color_override("font_outline_color", Color(0, 0, 0, 0.8))
	l.add_theme_constant_override("outline_size", 6)
	return l


func _build_balance() -> void:
	balance_panel = Panel.new()
	balance_panel.set_anchors_preset(Control.PRESET_CENTER_BOTTOM)
	balance_panel.offset_left = -150.0
	balance_panel.offset_right = 150.0
	balance_panel.offset_top = -60.0
	balance_panel.offset_bottom = -44.0
	var sb := StyleBoxFlat.new()
	sb.bg_color = Color(0, 0, 0, 0.55)
	sb.corner_radius_top_left = 6
	sb.corner_radius_top_right = 6
	sb.corner_radius_bottom_left = 6
	sb.corner_radius_bottom_right = 6
	balance_panel.add_theme_stylebox_override("panel", sb)
	balance_panel.visible = false
	add_child(balance_panel)

	balance_fill = ColorRect.new()
	balance_fill.color = Color(0.2, 0.9, 0.4)
	balance_fill.set_anchors_preset(Control.PRESET_FULL_RECT)
	balance_fill.offset_left = 70.0
	balance_fill.offset_right = 70.0
	balance_panel.add_child(balance_fill)


func _build_touch() -> void:
	if not DisplayServer.is_touchscreen_available():
		return
	touch_root = Control.new()
	touch_root.set_anchors_preset(Control.PRESET_FULL_RECT)
	touch_root.mouse_filter = Control.MOUSE_FILTER_IGNORE
	add_child(touch_root)

	# base do analógico (visual)
	stick_base = _circle(Vector2(190, 190), Color(1, 1, 1, 0.14))
	stick_base.position = Vector2(140, -240)
	stick_base.set_anchors_preset(Control.PRESET_BOTTOM_LEFT)
	stick_base.visible = false
	touch_root.add_child(stick_base)
	stick_knob = _circle(Vector2(90, 90), Color(1, 1, 1, 0.35))
	stick_knob.set_anchors_preset(Control.PRESET_BOTTOM_LEFT)
	stick_knob.visible = false
	touch_root.add_child(stick_knob)

	_button("ollie", "SALTAR", Vector2(-174, -198), 132)
	_button("trick", "MANOBRA", Vector2(-304, -174), 96)
	_button("grind", "GRIND", Vector2(-156, -306), 88)

	# botão de pausa
	pause_btn = _circle(Vector2(56, 56), Color(0, 0, 0, 0.45))
	pause_btn.set_anchors_preset(Control.PRESET_TOP_RIGHT)
	pause_btn.position = Vector2(-70, 14)
	var pl := _label(14, Color.WHITE)
	pl.text = "II"
	pl.set_anchors_preset(Control.PRESET_FULL_RECT)
	pl.horizontal_alignment = HORIZONTAL_ALIGNMENT_CENTER
	pl.vertical_alignment = VERTICAL_ALIGNMENT_CENTER
	pause_btn.add_child(pl)
	touch_root.add_child(pause_btn)


func _circle(size: Vector2, color: Color) -> Panel:
	var p := Panel.new()
	var sb := StyleBoxFlat.new()
	sb.bg_color = color
	sb.set_corner_radius_all(int(minf(size.x, size.y) / 2.0))
	p.add_theme_stylebox_override("panel", sb)
	p.custom_minimum_size = size
	p.size = size
	p.mouse_filter = Control.MOUSE_FILTER_IGNORE
	return p


func _button(name: String, text: String, pos: Vector2, size: float) -> void:
	var p := _circle(Vector2(size, size), Color(1, 1, 1, 0.2))
	p.set_anchors_preset(Control.PRESET_BOTTOM_RIGHT)
	p.position = pos
	var l := _label(int(size * 0.16), Color.WHITE)
	l.text = text
	l.set_anchors_preset(Control.PRESET_FULL_RECT)
	l.horizontal_alignment = HORIZONTAL_ALIGNMENT_CENTER
	l.vertical_alignment = VERTICAL_ALIGNMENT_CENTER
	p.add_child(l)
	touch_root.add_child(p)
	buttons[name] = {"panel": p, "size": size}


func _btn_center(b: Dictionary) -> Vector2:
	var p: Panel = b.panel
	var vp := touch_root.get_viewport_rect().size
	return vp + p.position + p.size * 0.5


# ------------------------------------------------------------------ toque

func _input(event: InputEvent) -> void:
	if touch_root == null:
		return
	var vp := touch_root.get_viewport_rect().size
	if event is InputEventScreenTouch:
		var t := event as InputEventScreenTouch
		if t.pressed:
			if t.position.x < vp.x * 0.45 and t.position.y > vp.y * 0.35 and stick_id == -1:
				stick_id = t.index
				stick_origin = t.position
				stick_base.visible = true
				stick_knob.visible = true
				_update_stick_visual(stick_origin)
			else:
				for name in buttons:
					if t.position.distance_to(_btn_center(buttons[name])) < buttons[name].size * 0.6:
						InputHub.touch_button(name, true)
						(buttons[name].panel as Panel).modulate = Color(1.6, 1.6, 1.6)
						break
				if pause_btn != null and t.position.distance_to(_pause_center()) < 50.0:
					if pause_callback.is_valid():
						pause_callback.call()
		else:
			if t.index == stick_id:
				stick_id = -1
				InputHub.touch_stick(Vector2.ZERO)
				stick_base.visible = false
				stick_knob.visible = false
			else:
				for name in buttons:
					if t.position.distance_to(_btn_center(buttons[name])) < buttons[name].size * 0.7:
						InputHub.touch_button(name, false)
						(buttons[name].panel as Panel).modulate = Color.WHITE
	elif event is InputEventScreenDrag:
		var drag := event as InputEventScreenDrag
		if drag.index == stick_id:
			var v := (drag.position - stick_origin) / 70.0
			if v.length() > 1.0:
				v = v.normalized()
			InputHub.touch_stick(v)
			_update_stick_visual(stick_origin + v * 70.0)


func _pause_center() -> Vector2:
	var vp := touch_root.get_viewport_rect().size
	return vp + pause_btn.position + pause_btn.size * 0.5


func _update_stick_visual(pos: Vector2) -> void:
	stick_base.position = stick_origin - Vector2(95, 95)
	stick_knob.position = pos - Vector2(45, 45)


# ------------------------------------------------------------------ atualização

func _process(_delta: float) -> void:
	if player != null and is_instance_valid(player):
		var spd := Vector3(player.velocity.x, 0, player.velocity.z).length() * 3.6
		speed_label.text = "%d km/h" % int(spd)
		var b: float = player.get_balance()
		if is_nan(b):
			balance_panel.visible = false
		else:
			balance_panel.visible = true
			var w := balance_panel.size.x
			var mid := w * 0.5
			var half := mid - 8.0
			balance_fill.offset_left = mid + b * half * 0.5
			balance_fill.offset_right = mid - b * half * 0.5
			balance_fill.color = Color(0.2, 0.9, 0.4).lerp(Color(0.95, 0.2, 0.15), absf(b))


func _on_score(score: int, pending: int, mult: int) -> void:
	score_label.text = "Pontos: %d" % score
	if pending > 0:
		mult_label.text = "+%d  x%d" % [pending, mult]
	else:
		mult_label.text = "Melhor combo: %d" % Game.best_combo if Game.best_combo > 0 else ""


func _on_popup(text: String, points: int) -> void:
	var l := _label(24, Color.WHITE)
	if points > 0:
		l.text = "%s  +%d" % [text, points]
		l.add_theme_color_override("font_color", Color(1.0, 0.85, 0.3))
	else:
		l.text = text
		l.add_theme_color_override("font_color", Color(1.0, 0.4, 0.3))
	popup_box.add_child(l)
	if popup_box.get_child_count() > 5:
		popup_box.get_child(0).queue_free()
	var tw := l.create_tween()
	tw.tween_interval(1.1)
	tw.tween_property(l, "modulate:a", 0.0, 0.6)
	tw.tween_callback(l.queue_free)
