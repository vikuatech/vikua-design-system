import type * as React from "react";

/** Panel de inspeccion del mapa: 290px, elevacion 2, superior derecha del lienzo cartografico. */
export interface MapPanelProps {
  title?: string;
  /** Etiqueta en mayusculas sobre el titulo. */
  subtitle?: string;
  /** Valores del elemento seleccionado; los vacios se rotulan "No disponible". */
  rows: { label: string; value: React.ReactNode }[];
  width?: number;
  style?: React.CSSProperties;
}
export function MapPanel(props: MapPanelProps): React.ReactElement;
