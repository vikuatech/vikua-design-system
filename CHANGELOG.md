# Changelog

Formato [Keep a Changelog](https://keepachangelog.com/es-ES/1.1.0/).
Versionado semantico: `MAJOR` rompe tokens o API de componentes, `MINOR` agrega,
`PATCH` corrige sin cambiar contratos.

## [1.0.0] — 2026-09

Primera version publicada como repositorio consumible.

### Agregado
- `styles.css` como punto de entrada unico y `tokens/` con la fuente de verdad
  (`fonts`, `colors`, `typography`, `spacing`, `elevation`, `themes`, `base`).
- 26 componentes React en `components/`, agrupados por concern, con `.d.ts` y
  `.prompt.md` por componente.
- `index.js` / `index.d.ts`: barrel de importacion unica, el que exige la regla
  `no-restricted-imports` de `_adherence.oxlintrc.json`.
- `package.json` con mapa de `exports`, `peerDependencies` de React y whitelist
  de `files` para que el paquete instalado no arrastre PDFs ni UI kits.
- Temas por producto en `tokens/themes.css`: `apalanca`, `studio`, `taxmind`
  (Vikua Platform es el tema base, sin atributo).
- `guidelines/` con 21 tarjetas de fundamentos y `AUDIT-brief.md`.
- `ui_kits/vikua_platform/`, `slides/` y `templates/presentacion-vikua/`.
- `SKILL.md`: el repositorio funciona como Agent Skill de Claude Code.
- `docs/INTEGRACION.md` y `scripts/install-skill.*`.

### Cambiado respecto al material entregado
- `Urbank` pasa a `Apalanca`; no queda tema `urbank` en `tokens/themes.css`.
- Los 26 `.d.ts` declaran `import type * as React from "react"` y devuelven
  `React.ReactElement` en lugar del global `JSX.Element`, para compilar en
  proyectos con `skipLibCheck: false` y con React 18 o 19.

### Pendiente
- Logotipo e icono de Apalanca en archivo (el manual llega solo en PDF).
- ITC Avant Garde Gothic Bold y ExtraBold; hoy se sintetizan desde Medium.
- TT FORS con licencia comercial (el archivo actual es Trial).
- Hex del azul de acento de Apalanca y su pack de iconografia propio.
- Set de iconografia oficial de Vikua: por ahora Feather desde CDN.
