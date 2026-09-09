# Sistema de Diseño Vikua

Vikua es una urbantech de **Urban Generative Intelligence**: convierte datos urbanos y
organizacionales en decisiones, para empresas y gobiernos. Este sistema define cómo se ve y
cómo se comporta esa promesa en producto, en comunicación comercial y en cada producto que
entra bajo el paraguas.

**Claim de marca:** *Conocimiento para acertar.*
**Idioma:** español principal, inglés secundario. Versión 1.0 · septiembre 2026.

## Cómo lo uso en mi proyecto

Guía completa en **[`docs/INTEGRACION.md`](docs/INTEGRACION.md)**. En corto:

```bash
# 1 · Que Claude Code diseñe con la marca en este proyecto
git submodule add git@github.com:vikuatech/vikua-design-system.git .claude/skills/vikua-design

# 2 · Tokens y componentes React en la app
npm install "github:vikuatech/vikua-design-system#v1.0.0"
```

```jsx
import "@vikuatech/design-system/styles.css";
import { Button, Metric, Card } from "@vikuatech/design-system";
```

Productos que no son Vikua Platform llevan `data-vk-theme="apalanca" | "studio" | "taxmind"`
en el contenedor raíz. Fija siempre un tag, nunca `main`.

## Productos bajo el paraguas

| Producto | Propósito | Acento | Lienzo | Marca de título |
| --- | --- | --- | --- | --- |
| Vikua Platform | Inteligencia urbana y organizacional | #E0773E | #F5F6FA | Poppins |
| Apalanca | Score crediticio y crédito preaprobado para PYMEs | #D85A30 | #F1EFE8 | ITC Avant Garde Gothic |
| Vikua Studio | Georreferenciación e IA autogestionable | #6C4FB8 | #F5F6FA | Poppins |
| Taxmind | Facturación e impuestos | #1D9E75 | #F5F6FA | Poppins |

> **Urbank pasó a llamarse Apalanca** (septiembre 2026). No queda tema `urbank` en
> `tokens/themes.css`; el producto de crédito a empresas es Apalanca y sus valores vienen del
> *Manual de Identidad Corporativa* de la marca, no del documento de sistema de Vikua.

Modelo de **marca respaldada**: cada producto tiene nombre, acento y personalidad propios;
todos comparten estructura, componentes, tipografía de interfaz, neutros y semánticos. La
firma *por Vikua* acompaña siempre al logotipo del producto. Ver `tokens/themes.css`.

### Cómo entra un producto nuevo
1. **Acento** — un color con contraste AA sobre blanco y con blanco sobre el acento.
2. **Temperatura del lienzo** — fría #F5F6FA por defecto; cálida solo si la marca lo exige.
3. **Firma** — logotipo del producto con “por Vikua” en la misma línea base.
4. **Voz** — directa y sin jerga; afirmativa, sin urgencia artificial.
5. **Elemento gráfico** — un solo recurso propio, aplicado con moderación.

---

## APALANCA POR VIKUA

Fuente: `uploads/apalanca-manual.pdf` (28 páginas). Estos valores **ganan** sobre
cualquier inferencia del sistema Vikua para todo lo que sea Apalanca.

**Qué es.** Un portal que permite a las PYMEs acceder a su score crediticio y obtener crédito
preaprobado de bancos afiliados, facilitando la solicitud inmediata.

**Insight y claim.** *El crédito oculto*: el crédito ya existe, pero la PYME no tiene
información accesible. La *asimetría de información* entre banco y PYME limita el acceso.
Apalanca ayuda a descubrirlo de manera sencilla e inmediata.

**Por qué el nombre.** Verbo activo — enfatiza la acción del empresario, no la plataforma.
Evita la lectura negativa de “palanca” (influencias, en México y Centroamérica) y se
diferencia de los términos genéricos del fintech en LatAm.

**Atributos.** *Preciso y desbloqueante* (claridad en el proceso, experiencia fluida y
directa) · *Cálido y contemporáneo* (confianza y modernidad, sin ser informal) ·
**Sin iconografía genérica**: nunca dinero, cohetes ni flechas ascendentes. Simplicidad y
claridad como guía visual.

**Voz y tono.** Directo, claro y cálido. Simplifica conceptos y evita terminología técnica.
La marca se presenta como **facilitador**. Frases afirmativas y alentadoras, sin urgencias
artificiales: inspirar acción sin presión.

**Logotipo.** La **A inicial inclinada en diagonal** es el trazo activo de la palanca: el
impulso que transforma el potencial financiero de la PYME en crecimiento. El logotipo se
escribe en minúsculas. Firma **por vikua** / *by vikua* (el manual la marca como sujeta a
cambios). El **icono** es esa A diagonal abstraída, para avatares y espacios reducidos, en
colores de la paleta o en monocromo según la superficie. **Zona protegida:** margen mínimo
“X” = altura del logotipo; ningún elemento gráfico, texto, borde o imagen lo sobrepasa.

**Color.** Coral **#D85A30** es el principal: acentos y llamados a la acción. Coral profundo
**#993C1D** y coral claro **#FAECE7** completan la familia. Tinta casi negra **#16151A** para
tipografía principal y logotipo. Neutros **#F1EFE8** (lienzo) y **#B4B2A9**. Semánticos
idénticos al núcleo: Aprobado #1D9E75 (crédito disponible), En revisión #EF9F27 (falta
documentación), No disponible #E24B4A (sin cupo, rechazado por el banco afiliado).

**Tipografía.** Primaria **ITC Avant Garde Gothic**, solo negrita o extranegrita y
preferiblemente en minúsculas, exclusivamente para títulos, CTAs, métricas y frases
impactantes. Auxiliar **TT FORS** para texto principal, subtítulos, tablas, correos, informes
e interfaz del software, siempre con interlineado holgado.

**Elementos gráficos.** Líneas de trazo delgado con esquinas redondeadas y puntos en forma de
**rombo** (nodos de información): simbolizan el flujo y la precisión de los datos. Se usan
como marcos, separadores y guías visuales. El color se emplea con propósito legible: la
tipografía base se mantiene clara y el coral y el azul destacan **solo** palabras clave y
conceptos fundamentales, nunca párrafos completos.

**Pendiente de Apalanca (no entregado):**
- Archivos de logotipo e icono. El manual llega en PDF; las tarjetas componen la marca en
  ITC Avant Garde Gothic y lo declaran. **No se ha dibujado ninguna aproximación del logo.**
- **ITC Avant Garde Gothic**: entregado el peso **Medium (500)**, autoalojado en
  `fonts/ITC_Avant_Garde_Gothic_Medium.otf`. El manual exige **negrita o extranegrita**:
  faltan Bold y ExtraBold, que hoy se sintetizan.
- **TT FORS** (licencia comercial). El token apunta a ella y cae al fallback Public Sans.
- El **hex del azul de acento** que el manual menciona junto al coral en los elementos
  gráficos y los destacados. No aparece en el documento y no lo he inventado.
- El **pack de iconografía propio** (símbolos minimalistas simétricos y semi curvos) que el
  manual dice venir “en formato pdf en la carpeta del manual de marca”. No llegó esa carpeta;
  Apalanca usa Feather por ahora.

---

## Fuentes de este sistema

- **`uploads/apalanca-manual.pdf`** — Manual de Identidad Corporativa de Apalanca
  por Vikua, 28 páginas. Fuente de verdad del tema `apalanca`: insight, voz y tono, logotipo,
  paleta, tipografía y elementos gráficos. Ver la sección *Apalanca por Vikua*.
- **`uploads/Sistema de Diseno Vikua.html`** — documento de sistema de diseño entregado por el
  cliente (bundle autocontenido). Es la **fuente de verdad** de paleta, tipografía, escala,
  componentes, arquitectura de marca y tokens. De su manifiesto se extrajeron los logotipos y
  los binarios woff2 de Poppins y Public Sans que viven en `assets/`.
- **`uploads/logo (3).png`, `uploads/logo (4).png`** — imagotipo a color e isotipo, entregados aparte.
- **Figma `Vikua.fig`** (montado como sistema de archivos virtual; sin URL pública entregada).
  Páginas `Vikua-Platform` (268 frames), `Vikua-Platform-Dr` (310) y `urbank` (19). Es un
  tablero de trabajo: capturas del producto en producción, anotaciones de equipo y flujos,
  no una librería de componentes. Las pantallas útiles están en `Vikua-Platform-Dr/Front-end`
  (node `1165:189` = *Mis tableros*, el screen que guía el UI kit) y en las capturas
  `Vikua-Platform/Mis-Tableros`, `Insights`, `Data-Player`, `Usuarios`.

### Sobre el inventario de componentes del .fig
El `METADATA.md` del Figma lista 35 familias (`Icon button`, `Liquid Glass`,
`Status bar - iPhone`, `_Page control`, `Toolbar - Bottom`, `Building Blocks/Menu list item`,
`Chevron right`, `Heart`, `Copy`, `Edit 3`, `Codepen`, `Codesandbox`, `UX Mate Calendar`,
`Surface Pro 8`…). **No son componentes de Vikua**: son instancias de librerías externas
(el kit de Apple para iOS/iPadOS, un kit de calendario y el set Feather) usadas para anotar
el tablero. Construirlas como componentes de marca habría creado un vocabulario que ningún
diseñador de Vikua reconoce. Las familias de Feather sí se recogen, pero como set de
iconografía (`Icon`), no como componentes sueltos. El inventario real de componentes es el
que define el documento de sistema entregado, y es el que está construido aquí.

---

## CONTENT FUNDAMENTALS

**Idioma y persona.** Español de Venezuela. Se habla en **segunda persona** al usuario
(*tus datos*, *tu primer análisis*, *tráeme una pregunta*) y en **primera del plural** cuando
habla la empresa (*convertimos datos urbanos en decisiones*, *no pudimos cargar el tablero*).
Nunca “el usuario debe”.

**Casing.** Capitalización tipo oración en todo: títulos, botones, etiquetas de campo
(*Crear análisis*, *Conectar fuente*, *Nuevo análisis*). Mayúsculas completas solo en dos
sitios: el botón **BUSCAR** de la barra de búsqueda global (continuidad con la plataforma
actual) y las etiquetas de estado (*APROBADO*, *EN REVISIÓN*, *NO DISPONIBLE*) y las
etiquetas de sección de 12 px con tracking 0,12em.

**Tono.** Directo, afirmativo, sin urgencia artificial y sin jerga. La frase lleva el dato:
*“14 competidores en 1,2 km². La demanda por punto cae 18% frente al promedio metropolitano.”*
No *“¡Descubre insights increíbles!”*. Los errores dicen la causa y la salida:
*“Sin conexión con BigQuery. Reintentar en 30 s.”*

**Números.** Formato es-VE: miles con punto, decimales con coma (`184.320`, `2,0 km`,
`↑ 3,10%`). Toda variación lleva su periodo de comparación explícito (*vs. 2023*,
*trimestre*, *semana*). Los vacíos nunca se dejan en blanco: se rotulan **No disponible**.

**Bilingüe.** Los encabezados de sección del sistema llevan su término en inglés como
subtítulo técnico (*Color*, *Typography*, *Space, shape & elevation*, *Brand architecture*),
porque el equipo de producto trabaja en inglés. La interfaz siempre en español.

**IA.** Todo hallazgo generado por IA lleva tipo (*Riesgo*, *Oportunidad*, *Patrón*), cifra,
fuente y una acción que devuelve al dato (*Ver en el mapa*). **Nunca se presenta una
conclusión de IA sin su origen.** El módulo conversacional se llama *Pregúntale a tus datos*.

**Emoji.** No se usan. Ni en producto, ni en presentaciones, ni en documentación.

---

## VISUAL FOUNDATIONS

**La idea.** Estructura azul profunda, una sola acción naranja, y el color reservado a los
datos. La aplicación es un instrumento de lectura: nada compite con la cifra y el mapa.

**Color.** Dos niveles. La *paleta corporativa* del manual (azul Vikua #001332, cian #3BBEFC,
naranja #FF7335, amarillo #FFD83E, lima #DAE667, gris #F4F6FA) define la identidad; los
*roles de interfaz* definen dónde se aplica cada valor. El naranja de acción es #E0773E y
su presionado #C9642F: se reserva a la acción primaria y al ítem de navegación activo, nunca
a información. Los tres colores saturados del isotipo (#0D91D3, #E86D1A, #B1C427) pertenecen
al logotipo y no se usan como color de UI ni de fondo — salvo #0D91D3 como serie de datos.
Máximo dos fondos por pieza: blanco/lienzo y azul corporativo.

**Tipografía.** Poppins (400/500/600/700) para marca, títulos y cifras, con tracking −2% a
−3% en display. Public Sans (400/500/600/700) para interfaz, tablas y párrafos. Las cifras
siempre con `tabular-nums` y alineadas a la derecha en tablas. Escala:
44/46 · 32/38 · 24/30 · 17/24 · métrica 32/36 · cuerpo 15/24 · compacto 13,5/21 ·
etiqueta 12/16 con tracking 0,12em en mayúsculas.

**Espacio.** Base 4. La aplicación respira en múltiplos de 8; los componentes densos (tablas,
listas) en múltiplos de 4. Escala en uso: 4 icono↔texto · 8 entre chips · 12 interno de
campos · 16 gap entre tarjetas · 20 padding de tarjeta · 28 margen de página · 56 entre
secciones. Rejilla de 12 columnas con gap 16.

**Layout.** Sidebar fija de 236 px en azul #001332 con la esquina exterior redondeada (o
tarjeta flotante con radio 12 en las cuatro esquinas, como el producto actual), cabecera con
título de sección Poppins 26/32 y acciones de cuenta en círculos de 34 px a la derecha,
lienzo #F5F6FA con margen de 28 px, y una acción flotante naranja de 52 px anclada abajo a la
derecha. Elementos fijos: sidebar, cabecera y FAB. En el mapa, la leyenda va abajo a la
izquierda y el panel de inspección de 290 px arriba a la derecha.

**Bordes y radios.** 6 px badges y celdas de mapa · 8 px botones, campos y navegación ·
12 px tarjetas y modales · pill para chips, avatares y FAB. Borde por defecto #E3E7EE;
#D6DCE6 en campos; discontinuo #C9D0DC para “añadir” y estados vacíos.

**Tarjetas.** Blancas, radio 12, sin borde, con sombra de nivel 1
(`0 1px 2px rgba(15,27,46,0.06)`). Nunca borde y sombra a la vez. Las tarjetas oscuras
(métrica destacada) van en #001332 sin sombra.

**Elevación.** Nivel 0 borde sin sombra · nivel 1 tarjetas en lienzo · nivel 2
`0 6px 22px rgba(0,19,50,0.16)` popovers y panel de mapa · nivel 3
`0 18px 44px rgba(0,19,50,0.24)` modales. La sombra naranja
`0 6px 18px rgba(224,119,62,0.4)` es exclusiva del FAB.

**Estados.** *Hover*: la acción primaria oscurece a #C9642F; los contornos y fantasmas se
rellenan con #F2F4F8; los ítems de navegación aclaran el fondo. *Press*: mismo color que
hover, sin escalado — nada se encoge ni rebota. *Foco*: borde naranja de 1,5 px más anillo
`0 0 0 3px rgba(224,119,62,0.16)`. *Deshabilitado*: fondo #EDEFF4 y texto #A9B2C0, sin
opacidad global. En el mapa, el resaltado al pasar el cursor es un contorno blanco de 2 px
**sin cambio de relleno**.

**Animación.** Discreta y funcional: 120 ms para color, 180 ms para cambios de estado,
240 ms para paneles, con `cubic-bezier(0.2,0,0.2,1)`. Sin bounce, sin parallax, sin
entradas escalonadas. La carga se representa con esqueletos que toman la forma del contenido
final; no se usan spinners en tableros.

**Transparencia y blur.** Prácticamente ausentes. La única transparencia del sistema es el
velo del modal (`rgba(0,19,50,0.42)`), los anillos de foco y las capas de datos sobre el
mapa. No hay glassmorphism.

**Fondos e imágenes.** No hay degradados, texturas, patrones ni ilustraciones dibujadas. El
fondo corporativo plano #001332 se reserva a portadas, separadores y cierres. La imagen que
existe es la del producto — capturas de tableros y mapas — de tono frío y neutro; los mapas
usan cartografía en grises claros para que el color pertenezca a los datos. No hay
fotografía de stock en el sistema.

**Gráficos.** Una serie: azul del logo #0D91D3. Serie destacada: naranja de acción. Sin
degradados, sin sombras, sin 3D. Ejes en #98A2B3, grilla horizontal #EEF1F6, leyenda arriba
a la izquierda. Escalas de datos: secuencial de 5 pasos (#E4E9F2 → #D8481B), divergente
(#0B6FA4 → #D8481B) y categórica de hasta 6 series. Nulos siempre en #E4E9F2 con la etiqueta
*No disponible*.

---

## ICONOGRAPHY

El set del sistema es **Feather Icons** (trazo de 2 px, esquinas redondeadas, sin relleno),
que es el que aparece en las fuentes: las familias `Chevron right`, `Heart`, `Copy`,
`Edit 3`, `Codepen` y `Codesandbox` del Figma son componentes de Feather, y los iconos de
la sidebar del producto (`grid`, `bar-chart-2`, `database`, `users`, `briefcase`,
`trending-up`, `log-out`) son de la misma familia.

- **No se entregó un sprite ni una fuente de iconos propia**, así que Feather se carga desde
  CDN: `https://unpkg.com/feather-icons@4.29.2/dist/feather.min.js`. El componente `Icon`
  lo envuelve. *Esto es una sustitución declarada: si Vikua tiene un set oficial exportado,
  reemplázalo y `Icon` seguirá funcionando.*
- Tamaños: 18 px en listas densas y navegación, 20 px por defecto, 22–24 px en cabeceras.
  El color se hereda de `currentColor`.
- En la sidebar los iconos van en blanco; sobre lienzo, en #3A465C o #98A2B3.
- **No se usan emoji** como iconos, ni caracteres unicode decorativos. Las únicas excepciones
  son las flechas ↑ ↓ de variación en las métricas y ▾ en el selector, heredadas del documento
  de origen.
- Nunca se dibuja un SVG a mano para representar un icono de marca.

## Logotipos y assets

En `assets/`, extraídos del documento entregado:

| Archivo | Uso |
| --- | --- |
| `logo-vikua-claim.png` | Isologotipo con claim *Conocimiento para acertar*. Portadas y papelería. Mín. 32 px de alto. |
| `logo-vikua-color.png` | Imagotipo. Uso general en producto, web y documentos. Mín. 24 px. |
| `logo-vikua-blanco.png` | Versión a tinta blanca. Exclusiva para #001332 o fotografía oscura. |
| `isotipo-vikua.png` | La “V”. Favicon, avatar, sidebar, redes. |
| `fonts/*.woff2` | Poppins y Public Sans, pesos 400–700, subset latino. |
| `../fonts/ITC_Avant_Garde_Gothic_Medium.otf` | Tipografía primaria de Apalanca, peso Medium 500. |

Área de seguridad: el margen mínimo alrededor del logo equivale a la altura de la “V”.
Usos incorrectos: recolorear el isotipo, deformar o rotar, alterar el espaciado interno,
añadir sombras o contornos, colocarlo sobre fondos de bajo contraste, combinarlo con otro
logo sin separador. Ubicación preferente: superior o inferior derecha.

---

## ACCESIBILIDAD

Ratios medidos sobre el par exacto (WCAG 2.1). Ver las tarjetas del grupo *Accesibilidad*.

- Sobre azul Vikua #001332: blanco **18,4:1**, lima del logo **9,5:1**, naranja del logo
  **5,8:1**, azul del logo **5,3:1**. Los cuatro pasan AA para texto de cuerpo.
- Sobre blanco: texto principal #0F1B2E **16,1:1**, secundario #5C6B85 **5,4:1**. El terciario
  #98A2B3 da **2,6:1**: es color de etiqueta y placeholder, nunca de párrafo.
- **Blanco sobre naranja de acción #E0773E: 3,1:1.** Cumple el umbral AA de 3:1 para elementos
  de interfaz y texto grande, pero no el 4,5:1 de texto normal. El botón primario hereda ese
  valor del documento de origen y se mantiene por fidelidad. Coral de Apalanca #D85A30: 3,9:1.
  Si marca quiere AA pleno en cuerpo, el naranja debe oscurecerse (~#B85A28) — es una decisión
  de marca, no una corrección silenciosa.
- Nunca lima como texto sobre blanco (1,9:1) ni texto azul sobre lima (1,8:1).
- El estado nunca se comunica solo con color: toda etiqueta de estado lleva rótulo.
- Foco visible en todo control: borde naranja de 1,5 px más anillo de 3 px. En el mapa, el
  resaltado es contorno blanco de 2 px sin cambio de relleno, para no alterar el valor del dato.

## GOBERNANZA

- **Fuente de verdad única:** `styles.css` → `tokens/*.css`. Los componentes referencian
  siempre roles semánticos (`--vk-accent`, `--vk-surface`, `--vk-text-muted`), nunca hex crudo.
- **Versión:** v1.0 · septiembre 2026. Los cambios se registran como diffs sobre este repo.
- **Tema claro dominante.** No existe modo oscuro en las fuentes y no se ha inventado: el azul
  #001332 es color de estructura (sidebar, métrica destacada, toast, portadas), no un tema.
- **Incógnitas abiertas:** ver `guidelines/AUDIT-brief.md`, sección final.

---

## Índice del repositorio

- `styles.css` — punto de entrada único; solo `@import`.
- `tokens/` — `fonts.css`, `colors.css`, `typography.css`, `spacing.css`, `elevation.css`,
  `themes.css` (temas por producto), `base.css`.
- `assets/` — logotipos, isotipo y webfonts.
- `guidelines/` — 21 tarjetas de fundamentos (Colors, Type, Spacing, Brand, Apalanca,
  Accesibilidad) más `AUDIT-brief.md`, la auditoría contra
  `uploads/vikua-design-system-instructions.md`.
- `components/` — primitivas reutilizables, agrupadas por concern.
- `ui_kits/vikua_platform/` — recreación interactiva de la aplicación (ver su README).
- `slides/` — cinco tipos de lámina 1920×1080.
- `templates/presentacion-vikua/` — plantilla de presentación para proyectos que consumen el sistema.
- `SKILL.md` — envoltorio para usar este sistema como Agent Skill.
- `index.js` / `index.d.ts` — barrel de los 26 componentes; el único punto de importación.
- `package.json` — `@vikuatech/design-system`: mapa de `exports`, whitelist de `files` y
  React como `peerDependency`.
- `docs/INTEGRACION.md` — las cinco vías de consumo, configuración por bundler, CI y versionado.
- `scripts/install-skill.ps1` · `.sh` — instala o actualiza la skill en un proyecto o en tu máquina.
- `scripts/check-exports.mjs` — `npm run check`: valida integridad del paquete antes de tagear.
- `_adherence.oxlintrc.json` — reglas de adherencia (`npm run lint:adherence`).
- `CHANGELOG.md` · `LICENSE` — versionado semántico y estado de licencia de las fuentes.

### Components

- **actions/** — `Button`, `IconButton`, `Fab`
- **forms/** — `Field`, `Select`, `Checkbox`, `Switch`, `SearchBar`
- **data/** — `Card`, `Metric`, `DataTable`, `BarChart`, `DataLegend`
- **feedback/** — `Alert`, `StatusBadge`, `Chip`, `Skeleton`, `EmptyState`, `ErrorState`, `Modal`
- **navigation/** — `Sidebar`, `AppHeader`
- **intelligence/** — `InsightCard`, `AskDataPanel`, `MapPanel`
- **icons/** — `Icon`

### Adiciones intencionales

Los 26 componentes de este sistema salen del documento *Sistema de Diseño Vikua* entregado por
el cliente, no del .fig. Ninguno lleva el nombre de una familia del Figma **a propósito**: el
vocabulario del .fig es de librerías externas (ver más abajo). Confirmado como intencional:
`Button`, `IconButton`, `Fab`, `Icon`, `Field`, `Select`, `Checkbox`, `Switch`, `SearchBar`,
`Card`, `Metric`, `DataTable`, `BarChart`, `DataLegend`, `Alert`, `StatusBadge`, `Chip`,
`Skeleton`, `EmptyState`, `ErrorState`, `Modal`, `Sidebar`, `AppHeader`, `InsightCard`,
`AskDataPanel`, `MapPanel`.

- `Icon` — envoltorio del set Feather. Necesario porque las fuentes no entregan un sprite propio.
- `Card`, `Skeleton`, `Chip` — el documento de origen los describe y los dibuja, pero sin
  nombre de componente; se nombran aquí para poder reutilizarlos.

### Familias del .fig omitidas a propósito (9 restantes)

`_Page control - BG Context=Bright`, `_Page control - BG Context=Dim`, `_Search - Bottom`,
`Building Blocks/Leading element`, `Building Blocks/Trailing element`,
`Building Blocks/Trailing element-selected`, `Building Blocks/Menu list item`,
`Building Blocks/Menu list item: -2 density`, `Building Blocks/Menu list item: -4 density`,
más `_Button - Bottom`, `_Button - Symbol`, `_Button - Text`, `Toolbar - Bottom`,
`Liquid Glass - Small`, `Status bar - iPhone`, `Icon button`, `Menu`, `Sidebar Search Field`,
`Surface Pro 8 - 1`, `UX Mate Date`, `UX Mate Calendar Row`, `UX Mate Month Header`,
`_Mask - Circle`, `Focus indicator`, `Horizontal/Full-width` y las familias de glifos
(`Chevron right`, `Copy`, `Edit 3`, `Heart`, `Codepen`, `Codesandbox`, `arrow_right`,
`content_cut`, `more_horiz`, `settings`, `stars_filled`).

**Motivo:** son instancias de librerías de terceros pegadas en el tablero para anotar —
el kit de Apple para iOS/iPadOS (page control, toolbar bottom, liquid glass, status bar,
menu list item, focus indicator), un kit de calendario (UX Mate) y una maqueta de dispositivo
(Surface Pro 8). Vikua no las usa como componentes de producto y construirlas crearía un
vocabulario que ningún diseñador de Vikua reconoce. Las familias de glifos **sí** están
cubiertas, como set de iconografía a través de `Icon` (Feather), no como componentes sueltos.
Si alguna de estas familias sí es parte del producto, dilo y la construyo.

### Fuente pendiente de subir

`--vk-font-brand` del tema Apalanca apunta a **ITC Avant Garde Gothic** y no hay archivo de
fuente en el sistema: es una licencia comercial que debe subir el cliente. El token se deja
apuntando a esa familia a propósito y cae al fallback (`Poppins`, sans-serif) hasta que el
archivo exista. No se sustituye por otra familia.

### Pendiente (declarado en el documento de origen)

Set de iconografía oficial de Vikua, componentes del *Portal de actores* y plantillas de
presentación en 1920×1080 aprobadas por marca. Tampoco hay pantallas de Apalanca,
Vikua Studio ni Taxmind en las fuentes entregadas: por eso solo existe el UI kit de
Vikua Platform y los temas de los demás productos viven como tokens, no como pantallas.
De Apalanca sí hay manual de marca completo — falta el UI del portal.
