# Auditoría contra `uploads/vikua-design-system-instructions.md`

Revisión punto por punto del brief de mejoras. **Fecha:** 2 de septiembre de 2026.
Estado: ✅ cubierto · ⚠️ cubierto con salvedad · ❌ pendiente y por qué.

Nota general sobre el brief: sus hex están marcados como *inferred from the exported
artifact*. Son los **colores del logotipo** (#0D91D3, #B1C427, #E86D1A), que en el sistema
real están reservados al isologotipo y a las series de datos, **no** son los colores de
interfaz. La paleta que manda es la del documento *Sistema de Diseño Vikua* y, para
Apalanca, la del *Manual de Identidad Corporativa*. El brief pedía justamente eso:
verificar contra la fuente y no contra el render.

---

## 1. Lock the Design Tokens

| Ítem del brief | Estado | Dónde |
| --- | --- | --- |
| Verificar cada hex contra la fuente, no el render | ✅ | `tokens/colors.css` sale del documento de sistema; `tokens/themes.css` (Apalanca) sale del PDF del manual |
| Aliases semánticos separados del color crudo | ✅ | Nivel 1 paleta corporativa + logo (`--vk-blue-deep`, `--vk-logo-lime`…); nivel 2 roles (`--vk-surface`, `--vk-text-muted`, `--vk-accent`, `--vk-border`…). Los componentes **solo** referencian roles |
| Rampa de 3 pasos por color para hover/disabled/pressed | ⚠️ | Existen los pasos que las fuentes definen: `--vk-accent` → `--vk-accent-hover` → `--vk-accent-soft`; en Apalanca coral → `#993C1D` → `#FAECE7`; deshabilitado `--vk-disabled-bg`/`--vk-disabled-text`; cada semántico con su par fg/bg. **No fabriqué rampas de 3 pasos para el azul, la lima, el amarillo y el naranja corporativos**: ninguna fuente las define y esos colores no se usan como fondo de control interactivo. Si quieres las rampas, las genero, pero serían valores inventados y hay que aprobarlos con marca |
| Familias tipográficas | ✅ | Poppins (marca) + Public Sans (interfaz). Apalanca: ITC Avant Garde Gothic + TT FORS |
| Escala tipográfica completa | ✅ | `tokens/typography.css`. La tabla del brief queda resuelta abajo |
| Escala de espacio | ✅ | 4 · 8 · 12 · 16 · 20 · 28 · 56 (base 4). **No es la escala genérica 4/8/12/16/24/32/48/64 que sugería el brief**: la del sistema tiene 20 y 28 y no tiene 24, 32, 48 ni 64 |
| Tokens de radio | ✅ | 6 · 8 · 12 · pill |
| Tokens de sombra/elevación | ✅ | 4 niveles + sombra del FAB + anillo de foco |

### La tabla tipográfica del brief, resuelta

| Estilo del brief | Estilo del sistema | Tamaño | Interlínea | Peso | Familia |
| --- | --- | --- | --- | --- | --- |
| — | Display | 44 | 46 | 600 | Poppins |
| H1 | Título 1 | 32 | 38 | 600 | Poppins |
| H2 | Título 2 | 24 | 30 | 600 | Poppins |
| H3 | Título de tarjeta | 17 | 24 | 600 | Poppins |
| — | Métrica | 32 | 36 | 600 | Poppins, tabular-nums |
| Body | Cuerpo | 15 | 24 | 400 | Public Sans |
| — | Cuerpo compacto | 13,5 | 21 | 400 | Public Sans |
| Caption | Etiqueta | 12 | 16 | 700 | Public Sans, mayúsculas, tracking 0,12em |

Tracking: −3% en display, −2,5% en título 1, −2% en título 2 y métrica.

---

## 2. Component Inventory

| Ítem del brief | Estado | Componente |
| --- | --- | --- |
| Logo lockup: tamaño mínimo, área de respeto, fondos aprobados | ✅ | Tarjetas *Logotipos* e *Isotipo, favicon y avatar*; reglas en `README.md` |
| Buttons: primary, secondary, ghost/text | ✅ | `Button` (primary, secondary, outline, text, destructive) + `IconButton` + `Fab` |
| Navigation bar | ✅ | `Sidebar` (236 px) + `AppHeader`. El producto no tiene barra superior de navegación: la estructura es sidebar lateral |
| Cards | ✅ | `Card` (4 elevaciones, tono claro y azul) |
| Form inputs | ✅ | `Field`, `Select`, `Checkbox`, `Switch`, `SearchBar`. **No hay Radio**: ninguna fuente lo usa |
| Badges / tags | ✅ | `StatusBadge` (6 tonos) + `Chip` (3 variantes) |
| Icons: estilo y grosor | ✅ | Feather, trazo 2 px, sin relleno, 18/20/22–24 px. Ver *Iconography* en `README.md` |
| Estados default/hover/active/disabled por componente | ✅ | Implementados en `Button`, `IconButton`, `Fab`, `Field`, `Select`, `Checkbox`, `Switch`, `Chip`, `Sidebar`; documentados en *Estados* en `README.md` |

Más allá del brief, el sistema añade lo que el producto sí necesita y el brief no listaba:
`Metric`, `DataTable`, `BarChart`, `DataLegend`, `Alert`, `Skeleton`, `EmptyState`,
`ErrorState`, `Modal`, `InsightCard`, `AskDataPanel`, `MapPanel`.

---

## 3. Rebuild as a Living Style Guide

| Ítem del brief | Estado | Dónde |
| --- | --- | --- |
| Foundations page con hex + nombre de token | ⚠️ | 21 tarjetas en `guidelines/` (Colors, Type, Spacing, Brand, Apalanca, Accesibilidad). Muestran el hex; **el nombre del token no está impreso en cada muestra** — la correspondencia vive en `tokens/colors.css`. Si lo quieres visible en la tarjeta, lo añado |
| Components page con todos los estados | ✅ | 7 tarjetas en `components/*/*.card.html` |
| Patterns/templates: 2–3 layouts hechos solo con componentes | ✅ | `ui_kits/vikua_platform/` (4 pantallas interactivas: rejilla de tableros, insights, mapa, tabla+formulario), `slides/` (5 láminas) y `templates/presentacion-vikua/` |
| Un *landing section* de ejemplo | ❌ | No hay sitio de marketing en las fuentes. Inventarlo sería diseñar, no recrear. Si quieres una landing, dime y la propongo como exploración aparte |
| Sistema en secciones iterables, no una página estática | ✅ | Un archivo por concern; `styles.css` solo con `@import` |

---

## 4. Usage Rules & Accessibility

| Ítem del brief | Estado | Dónde |
| --- | --- | --- |
| Contraste mínimo sobre #001332, verificando azul y lima a 4,5:1 | ✅ | Tarjeta *Contraste medido*. Resultado: lima 9,5:1, naranja del logo 5,8:1 y azul del logo 5,3:1 sobre azul Vikua — **los tres pasan AA para cuerpo** |
| Pares aprobados de fondo/acento | ✅ | Tarjeta *Pares y usos prohibidos* |
| Área de respeto y tamaño mínimo del logo | ✅ | X = altura de la “V” (Vikua) y X = altura del logotipo (Apalanca); mínimos 32 px con claim, 24 px imagotipo |
| Do/Don't de mal uso | ✅ | Tarjeta *Pares y usos prohibidos* + lista de usos incorrectos en `README.md` |

**Hallazgo que el brief no anticipaba:** el blanco sobre el naranja de acción #E0773E da
**3,1:1**. Cumple el umbral AA de 3:1 para elementos de interfaz y texto grande, pero **no**
el 4,5:1 de texto normal. El botón primario del sistema (14 px, peso 600, blanco sobre
naranja) hereda ese valor del documento de origen y se mantiene por fidelidad, pero conviene
decidirlo con marca: oscurecer el naranja de acción a ~#B85A28 llevaría el par por encima de
4,5:1. Lo mismo aplica al coral #D85A30 de Apalanca (3,9:1). **Decisión tuya, no la tomé.**

---

## 5. Governance

| Ítem del brief | Estado | Dónde |
| --- | --- | --- |
| Fuente de verdad única de tokens | ✅ | `styles.css` → `tokens/*.css`. Es lo que consumen los proyectos y lo que lee el compilador |
| Versionado v1.0 | ✅ | Declarado en `README.md` (v1.0 · septiembre 2026) |
| Registro de incógnitas abiertas | ✅ | *Pendiente* y *Pendiente de Apalanca* en `README.md`, más este archivo |

---

## Open Unknowns del brief — resueltas

| Incógnita | Respuesta |
| --- | --- |
| Nombres exactos de las familias | Vikua: **Poppins** (marca, títulos, cifras) y **Public Sans** (interfaz, datos, párrafos). Apalanca: **ITC Avant Garde Gothic** (primaria, solo bold/extrabold, minúsculas) y **TT FORS** (auxiliar). El producto en producción todavía titula en Lato Black con Inter de interfaz: es deuda, no la norma |
| Escala tipográfica completa | Resuelta en la tabla de la sección 1 |
| ¿Variante de tema claro o solo dominante navy? | **Claro dominante.** El lienzo es #F5F6FA y las superficies blancas; el azul #001332 se reserva a sidebar, tarjetas de métrica destacada, toasts y portadas/separadores de presentación. **No existe modo oscuro** en las fuentes y no lo inventé |
| Lista completa de componentes | Los 26 de `README.md` → *Components*. El inventario lo define el documento de sistema, no el .fig (que es un tablero de trabajo con librerías de terceros) |

---

## Lo que sigue abierto, en orden de impacto

1. **Fuentes de Apalanca**: ITC Avant Garde Gothic y TT FORS (licencias comerciales).
2. **Logotipo e icono de Apalanca** en vectorial: hoy la marca se compone en tipo.
3. **Hex del azul de acento** de Apalanca, que su manual menciona sin especificar.
4. **Pack de iconografía** propio de Apalanca y set oficial de Vikua (hoy Feather desde CDN).
5. **Decisión de marca sobre el contraste** del naranja de acción y el coral (ver sección 4).
6. **Rampas de 3 pasos** para los colores corporativos, si de verdad se necesitan.
7. **UI del portal de Apalanca** y pantallas de Vikua Studio y Taxmind: sin fuentes, sin kit.
