extends Node
## Settings (autoload): perfil de qualidade gráfica.

signal profile_changed

const PROFILES := ["Baixo", "Médio", "Alto"]

var profile := 1  # 0 = Baixo, 1 = Médio, 2 = Alto


func _ready() -> void:
	_load()


func set_profile(p: int) -> void:
	profile = clampi(p, 0, 2)
	_save()
	profile_changed.emit()


func profile_name() -> String:
	return PROFILES[profile]


func _save() -> void:
	var cfg := ConfigFile.new()
	cfg.set_value("gfx", "profile", profile)
	cfg.save("user://settings.cfg")


func _load() -> void:
	var cfg := ConfigFile.new()
	if cfg.load("user://settings.cfg") == OK:
		profile = clampi(int(cfg.get_value("gfx", "profile", 1)), 0, 2)
