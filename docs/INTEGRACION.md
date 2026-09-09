# Como incorporar el Sistema de Diseño Vikua en otro proyecto

Repositorio: `https://github.com/vikuatech/vikua-design-system` · **privado**
Paquete: `@vikuatech/design-system` · version actual `1.0.0`

El repositorio sirve dos cosas distintas a la vez y cada una entra por su propia
puerta. Elige segun lo que el proyecto necesite; muchos proyectos usan las dos.

| Necesito… | Mecanismo | Seccion |
| --- | --- | --- |
| Que Claude Code diseñe con la marca en cualquier proyecto | **Agent Skill** (clon o submodulo en `.claude/skills/`) | [A](#a-como-agent-skill-de-claude-code) |
| Tokens CSS y componentes React en una app | **Dependencia npm por git** | [B](#b-como-dependencia-npm) |
| El codigo del sistema dentro del arbol del proyecto | **Submodulo o subtree de git** | [C](#c-como-submodulo-o-subtree) |
| Solo los tokens en un HTML estatico, una landing o un slide | **Copia vendorizada de `tokens/`** | [D](#d-solo-css-en-html-estatico) |
| Verificar que un proyecto respeta el sistema | **Lint de adherencia** (`oxlint`) | [E](#e-lint-de-adherencia) |

Requisito comun: el repositorio es privado, asi que toda via necesita que el
desarrollador tenga acceso de lectura al repo y una credencial de git —
**llave SSH** en la maquina (recomendado) o un **PAT** con scope `repo`.

---

## A. Como Agent Skill de Claude Code

El repositorio **ya es** una skill: en la raiz hay un `SKILL.md` con
`name: vikua-design`. Claude Code descubre skills en cualquier directorio
`.claude/skills/<nombre>/` que contenga un `SKILL.md`, asi que basta con clonar
el repositorio en esa ruta. No hace falta empaquetar nada.

### A.1 Para todos tus proyectos (tu maquina)

```bash
git clone git@github.com:vikuatech/vikua-design-system.git ~/.claude/skills/vikua-design
```

En Windows PowerShell:

```powershell
git clone git@github.com:vikuatech/vikua-design-system.git "$env:USERPROFILE\.claude\skills\vikua-design"
```

Queda disponible en **cualquier** proyecto que abras. Reinicia Claude Code e
invocala con `/vikua-design`. Para actualizar: `git -C ~/.claude/skills/vikua-design pull`.

### A.2 Para un proyecto, versionado con el equipo (recomendado en repos de producto)

Asi el proyecto declara **con que version del sistema de diseño se construyo**,
y cualquiera que clone el proyecto obtiene la misma:

```bash
git submodule add git@github.com:vikuatech/vikua-design-system.git .claude/skills/vikua-design
cd .claude/skills/vikua-design && git checkout v1.0.0 && cd -
git add .gitmodules .claude/skills/vikua-design
git commit -m "Add Vikua design system skill (v1.0.0)"
```

Quien clone el proyecto despues corre `git submodule update --init --recursive`.
Para subir de version: `cd .claude/skills/vikua-design && git fetch --tags && git checkout v1.1.0`,
y commit del nuevo puntero en el proyecto.

### A.3 Con el script incluido

El repositorio trae el envoltorio de las dos opciones anteriores:

```powershell
powershell -ExecutionPolicy Bypass -File scripts\install-skill.ps1
powershell -ExecutionPolicy Bypass -File scripts\install-skill.ps1 -Scope user
powershell -ExecutionPolicy Bypass -File scripts\install-skill.ps1 -Ref v1.0.0
```

```bash
./scripts/install-skill.sh                # proyecto actual
./scripts/install-skill.sh --scope user   # tu maquina
./scripts/install-skill.sh --ref v1.0.0   # version fija
```

### Que gana el proyecto con esto

Claude Code lee `README.md`, `tokens/`, `guidelines/` y los `.prompt.md` de cada
componente, y con eso genera pantallas, laminas y codigo que ya salen con la
paleta, la tipografia, el espaciado, el tono de voz y los formatos numericos de
Vikua — sin que haya que repetirle la marca en cada prompt.

---

## B. Como dependencia npm

Para apps React que consumen los tokens y los 26 componentes. No hay registro
npm de por medio: npm instala directo del repositorio de git.

### B.1 Instalar

```bash
npm install "github:vikuatech/vikua-design-system#v1.0.0"
```

Queda en `package.json` como:

```json
{
  "dependencies": {
    "@vikuatech/design-system": "github:vikuatech/vikua-design-system#v1.0.0"
  }
}
```

La forma corta `github:` usa la credencial de git que ya tenga la maquina, sea
llave SSH o el Windows Credential Manager, asi que funciona para todo el equipo
sin que cada uno edite el `package.json`. Si un entorno necesita forzar el
transporte, las dos formas largas son equivalentes:

```bash
npm install "git+ssh://git@github.com/vikuatech/vikua-design-system.git#v1.0.0"    # llave SSH
npm install "git+https://github.com/vikuatech/vikua-design-system.git#v1.0.0"      # PAT / credential manager
```

**Fija siempre un tag** (`#v1.0.0`), no `#main`: con `main` cada `npm install`
puede traer un sistema distinto y romper la app sin que nadie haya tocado nada.

El paquete instalado pesa poco: `package.json` declara una whitelist de `files`,
asi que `node_modules` recibe solo `tokens/`, `components/`, `assets/`, `fonts/`,
`styles.css`, el barrel y el config de lint. Los 6 MB del manual de marca, los
UI kits, los slides y las guidelines se quedan en el repositorio.

### B.2 Usar

```jsx
import "@vikuatech/design-system/styles.css";
import { Button, Metric, Card, Icon } from "@vikuatech/design-system";

export function Panel() {
  return (
    <Card title="Demanda por punto de venta">
      <Metric label="Competidores en 1,2 km²" value="14" delta="↑ 3,10%" note="vs. 2023" />
      <Button icon={<Icon name="map" size={16} />} onClick={ver}>Ver en el mapa</Button>
    </Card>
  );
}
```

`styles.css` es el unico punto de entrada de estilos: hace `@import` de los siete
archivos de `tokens/` en el orden correcto. Importalo **una vez**, en la raiz de
la app.

Importa siempre desde `@vikuatech/design-system`, nunca desde
`@vikuatech/design-system/components/actions/Button.jsx`. Las rutas internas
existen para el lint y para casos raros; el barrel es el contrato estable.

### B.3 Tema por producto

Vikua Platform es el tema base y no necesita atributo. Los demas productos
redefinen solo los tokens tematizables, con un `data-vk-theme` en el contenedor
raiz:

```jsx
<div data-vk-theme="apalanca">   {/* coral #D85A30, lienzo #F1EFE8, ITC Avant Garde Gothic */}
<div data-vk-theme="studio">     {/* violeta #6C4FB8 */}
<div data-vk-theme="taxmind">    {/* verde #1D9E75 */}
```

Nada mas cambia: estructura, componentes, neutros y semanticos son los mismos.
Ese es el modelo de marca respaldada. Para dar de alta un producto nuevo, ver
*Como entra un producto nuevo* en el `README.md`.

### B.4 Configuracion por bundler

Los componentes se publican como **fuente `.jsx`**, sin build. Cada bundler
necesita saber que debe transpilar ese paquete:

**Vite** — funciona sin configuracion. El pre-bundler (esbuild) reconoce `.jsx`
por extension. Si aparece un error de sintaxis en `node_modules`, forzarlo:

```js
// vite.config.js
export default {
  optimizeDeps: { include: ["@vikuatech/design-system"] },
};
```

**Next.js** — una linea:

```js
// next.config.js
module.exports = { transpilePackages: ["@vikuatech/design-system"] };
```

**webpack / CRA ejectado** — incluir el paquete en la regla de babel:

```js
{
  test: /\.jsx?$/,
  include: [path.resolve("src"), /node_modules[\\/]@vikuatech[\\/]design-system/],
  use: "babel-loader",
}
```

**TypeScript** — los tipos vienen en `index.d.ts` y en un `.d.ts` por componente.
Cada uno declara `import type * as React from "react"` y devuelve
`React.ReactElement`, asi que compilan tambien con `skipLibCheck: false` y con
React 18 o 19.

**React** es `peerDependency` (`>=18`): lo aporta el proyecto, el paquete no
duplica la copia.

**Iconos**: `Icon` envuelve Feather, que se carga desde CDN
(`https://unpkg.com/feather-icons@4.29.2/dist/feather.min.js`). Un proyecto sin
salida a internet debe vendorizar ese archivo y servirlo local.

### B.5 En CI

El runner no tiene credenciales para un repo privado. Lo mas simple es darle un
token a git antes de instalar, y dejar el `package.json` intacto:

```yaml
- name: Autenticar git contra el repo del sistema de diseño
  run: |
    git config --global url."https://x-access-token:${{ secrets.VIKUA_DS_TOKEN }}@github.com/".insteadOf "https://github.com/"
    git config --global url."https://x-access-token:${{ secrets.VIKUA_DS_TOKEN }}@github.com/".insteadOf "ssh://git@github.com/"
- run: npm ci
```

`VIKUA_DS_TOKEN` es un PAT (fine-grained, solo lectura de contenido sobre este
repositorio) guardado como secret del proyecto consumidor. Las dos lineas cubren
las dos formas de escribir la dependencia, asi que el mismo `package.json`
funciona en la maquina del desarrollador y en el runner, sin token versionado.
La alternativa es una deploy key de solo lectura por proyecto consumidor.

### B.6 Si mas adelante quieren registro npm

Publicar en **GitHub Packages** elimina la friccion de git-auth y da versiones
inmutables. Cambios necesarios en este repositorio:

1. Quitar `"private": true` de `package.json` y agregar
   `"publishConfig": { "registry": "https://npm.pkg.github.com" }`.
2. Un workflow que corra `npm publish` al crear un tag `v*`.

En cada proyecto consumidor, un `.npmrc`:

```
@vikuatech:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=${GITHUB_TOKEN}
```

y la dependencia pasa a ser `"@vikuatech/design-system": "^1.0.0"`. El scope del
paquete ya coincide con la organizacion (`@vikuatech`), que es lo que GitHub
Packages exige — por eso no hara falta renombrar nada.

---

## C. Como submodulo o subtree

Cuando el proyecto quiere el codigo del sistema **en el arbol**: para editarlo
junto al producto, para builds sin acceso a red, o porque no usa npm.

**Submodulo** — el proyecto guarda un puntero al commit exacto:

```bash
git submodule add git@github.com:vikuatech/vikua-design-system.git vendor/vikua-design-system
cd vendor/vikua-design-system && git checkout v1.0.0
```

**Subtree** — el codigo se copia dentro del historial del proyecto; nadie tiene
que acordarse de `submodule update`, pero actualizar es un merge:

```bash
git subtree add --prefix vendor/vikua-design-system git@github.com:vikuatech/vikua-design-system.git v1.0.0 --squash
git subtree pull --prefix vendor/vikua-design-system git@github.com:vikuatech/vikua-design-system.git v1.1.0 --squash
```

En ambos casos los cambios al sistema se hacen **en el repositorio del sistema**
y bajan al proyecto. Un fix aplicado solo en `vendor/` es deuda: el siguiente
`pull` lo pisa.

---

## D. Solo CSS en HTML estatico

Para landings, laminas, informes o prototipos sin build. Como el repositorio es
privado, **no hay CDN publico** (jsDelivr necesita repo publico), asi que se
copian los archivos:

```bash
git archive --remote=git@github.com:vikuatech/vikua-design-system.git v1.0.0 \
  styles.css tokens assets | tar -x -C public/vikua-ds
```

```html
<link rel="stylesheet" href="/vikua-ds/styles.css">
<body style="background:var(--vk-canvas); color:var(--vk-text); font-family:var(--vk-font-ui)">
```

Deja el tag anotado en un `public/vikua-ds/VERSION.txt` para saber que version se
copio. Si en algun momento se publica una version del repositorio sin los
archivos de fuente licenciados, esta via se reemplaza por un `<link>` a jsDelivr
y desaparece la copia.

`slides/` y `templates/presentacion-vikua/` sirven de punto de partida para
piezas de presentacion: se copian y se editan, no se consumen como dependencia.

---

## E. Lint de adherencia

`_adherence.oxlintrc.json` es una configuracion de [oxlint](https://oxc.rs) que
verifica tres cosas: que no haya hex crudo, que no haya `px` sueltos en lugar de
tokens de espaciado, y que nadie importe rutas internas del sistema en vez del
barrel.

En un proyecto consumidor:

```bash
npx --yes oxlint@1 -c node_modules/@vikuatech/design-system/_adherence.oxlintrc.json src
```

Vale la pena engancharlo al CI del proyecto como aviso, no como bloqueo: el
propio sistema tiene hoy 12 avisos de hex crudo dentro de sus componentes
(`npm run check` los lista), y arreglarlos es trabajo del sistema, no del
proyecto que lo consume.

---

## Versionado y actualizacion

- El repositorio usa **semver** sobre tags `vMAJOR.MINOR.PATCH`: `MAJOR` rompe
  tokens o API de componentes, `MINOR` agrega, `PATCH` corrige sin cambiar
  contratos. Ver `CHANGELOG.md`.
- Todo consumidor **fija un tag**. Nadie apunta a `main`.
- `npm run check` valida integridad antes de tagear: que el barrel cubra los 26
  componentes, que cada `.jsx` tenga su `.d.ts`, que los `@import` y los `url()`
  de los tokens resuelvan, y que las rutas de `files` y `exports` existan.
- Un cambio de marca (color de acento, tipografia, radio) se hace **una vez
  aqui** y se propaga subiendo el tag en cada proyecto. Un proyecto que redefine
  tokens por su cuenta se sale del sistema.

## Alta de un proyecto nuevo de Vikua

1. `scripts/install-skill.ps1` o el submodulo en `.claude/skills/vikua-design`
   → Claude Code ya diseña con la marca.
2. `npm install "github:vikuatech/vikua-design-system#v1.0.0"`
   y una linea de configuracion del bundler (seccion B.4).
3. `import "@vikuatech/design-system/styles.css"` en la raiz de la app.
4. Si no es Vikua Platform, `data-vk-theme` en el contenedor raiz.
5. Lint de adherencia en el CI, como aviso.
6. Anotar en el README del proyecto que version del sistema usa.
