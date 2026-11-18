# Aurora Skate Park — jogo de skate 3D (Godot 4.x, Android)

Jogo de skate 3D **original** (identidade visual, mapa, nomes e sons próprios),
inspirado na mecânica de jogos de skate com controle analógico. Roda em Godot 4.3+
com o renderer **Mobile** e foi feito para escalar em três perfis de qualidade.

## Como jogar

| Ação | Toque (Android) | Teclado (desktop) |
|---|---|---|
| Empurrar / virar | analógico esquerdo | `W/S` + `A/D` (ou setas) |
| Ollie (segure para pular mais alto) | botão SALTAR | `Espaço` |
| Flips / shove-its (no ar) | botão MANOBRA + direção do analógico | `J` + direção |
| Grind (no corrimão) / Manual (no chão, segura) | botão GRIND | `K` |
| Spin no ar | inclinar o analógico no ar | `A/D` no ar |
| Voltar ao ponto seguro | — | `R` |
| Pausar | botão II | `Esc` |

Manobras: **Kickflip** (J + lado), **Heelflip** (J + cima), **Pop Shove-it** (J sem direção),
**360 Shove-it** (J + baixo). Gaps premiam +500 (fonte, escadaria, túnel, bowl).
Aterrar com a manobra incompleta ou de lado causa **queda** e zera a combo.

## Estrutura

```
aurora-skate/
├── project.godot          # config (renderer Mobile, autoloads, orientação landscape)
├── export_presets.cfg     # preset Android (APK) — complete assinatura no editor
├── scenes/main.tscn       # cena raiz mínima; o resto é gerado por código
└── scripts/
    ├── main.gd            # mundo, ambiente, perfis de qualidade, menus
    ├── park_builder.gd    # parque 600x600 m procedural (praça, rua, bowl, piscina, túnel)
    ├── player.gd          # física do skate: ollie, flips, spins, grinds, manuals, quedas
    ├── game.gd            # pontuação, combos, gaps (autoload)
    ├── input_hub.gd       # une toque + teclado (autoload)
    ├── hud.gd             # placar, popups, barra de equilíbrio, controles de toque
    ├── settings.gd        # perfil Baixo/Médio/Alto (autoload)
    └── gap.gd             # zonas de gap

dev/                       # apenas testes locais (excluídos do export)
```

## Verificação local

Os testes em `dev/` rodam só no desktop e ficam **fora do APK/AAB**
(`exclude_filter` do preset). Exemplos:

```bash
godot --headless --path aurora-skate dev/tour_test.tscn   # tour integrado
godot --headless --path aurora-skate dev/tunnel_test.tscn # kicker + gap do túnel
godot --headless --path aurora-skate dev/bowl_ride_test.tscn  # transição do bowl
```

## Perfis de qualidade (compatibilidade escalável)

- **Baixo**: sem sombras, sem MSAA, sem névoa, props decorativos removidos (as linhas
  de skate não mudam).
- **Médio**: sombras 2-split (160 m), MSAA 2x, névoa leve, props ligados.
- **Alto**: sombras 4-split (280 m), MSAA 4x, brilho, tudo ligado.

Para medir por modelo de aparelho, use Android GPU Inspector / Perfetto:
https://developer.android.com/games/optimize/overview

## Exportar para Android

1. Instale **OpenJDK 17** e o **Android SDK** (pacotes listados na doc oficial):
   https://docs.godotengine.org/en/stable/tutorials/export/exporting_for_android.html
2. No Godot: *Editor → Editor Settings → Export → Android*, aponte `Java SDK Path`
   e `Android SDK Path`.
3. *Project → Export → Android* (o preset já está em `export_presets.cfg`), configure
   o **keystore** (debug ou release) e exporte APK ou AAB.

## Suposições da versão atual

- Sem áudio ainda (nenhum asset de som incluído).
- Mapa único fechado (600 x 600 m) — não mundo aberto.
- Modelos low-poly gerados por código (sem GLTF externo).
- Renderer Mobile; perfis ajustam sombras/MSAA/props, não resolução dinâmica.
