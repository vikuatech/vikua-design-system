import type * as React from "react";

/**
 * Envoltorio del set Feather Icons, la iconografia oficial del sistema.
 */
export interface IconProps {
  /** Nombre del icono en Feather, p.ej. "map-pin", "bar-chart-2", "heart". */
  name: string;
  /** Lado en px. 20 por defecto; 18 en listas densas, 24 en cabeceras. */
  size?: number;
  /** Color del trazo. Hereda currentColor por defecto. */
  color?: string;
  /** Grosor del trazo Feather. 2 por defecto. */
  strokeWidth?: number;
  style?: React.CSSProperties;
}
export function Icon(props: IconProps): React.ReactElement;
