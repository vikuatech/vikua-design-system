# UI kit · Vikua Platform

Recreacion de la aplicacion web de Vikua Platform con los componentes del sistema.
Abre `index.html`: la navegacion, la busqueda, los filtros, el modal de creacion, la
seleccion de hexagonos en el mapa y el cambio de capa son interactivos.

## Pantallas

| Archivo | Pantalla | Fuente |
| --- | --- | --- |
| `Shell.jsx` | Estructura: sidebar flotante 236 px, cabecera, lienzo, FAB y modal *Nuevo analisis* | Vikua.fig · `Vikua-Platform-Dr/Front-end` (node 1165:189) |
| `BoardsScreen.jsx` | Mis tableros / Tableros Vikua: busqueda, chips de filtro, rejilla de 3 columnas con contador de favoritos | Vikua.fig · `Vikua-Platform/Mis-Tableros`, `Tableros-Vikua` |
| `InsightsScreen.jsx` | Insights: metricas, hallazgos de IA, *Preguntale a tus datos*, capas activas | Vikua.fig · `Vikua-Platform/Insights` + seccion Mapas e IA del sistema |
| `MapScreen.jsx` | Data Player: control de capas, lienzo cartografico, panel de inspeccion y leyenda | Seccion *Mapas e inteligencia generativa* del sistema |
| `UsersScreen.jsx` | Usuarios: metricas de uso, filtros por empresa y tabla de datos | Vikua.fig · `Vikua-Platform/Usuarios`, `Empresas` |

## Notas de fidelidad

- El producto actual titula en **Lato Black** y usa **Inter** para interfaz; el sistema
  estandariza **Poppins** (marca y cifras) y **Public Sans** (interfaz). El kit sigue el sistema.
- Las miniaturas de tablero del producto muestran el logo del cliente. No se entregaron
  esos logos, asi que se usa un bloque neutro con icono; sustituir por el logo real.
- Las secciones sin pantalla en las fuentes (Mi data, Data vikua, Empresas, Reportes,
  Portal de actores) se dejan explicitamente vacias en lugar de inventar diseno.
- El lienzo cartografico es un mosaico de hexagonos coloreados con la escala secuencial:
  representa el comportamiento (una variable por vista, inspeccion al seleccionar,
  resaltado con contorno blanco de 2 px), no una base cartografica real.
