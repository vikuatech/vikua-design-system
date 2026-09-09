import type * as React from "react";

/**
 * Superficie base del sistema: blanco, radio 12, elevacion 1 sobre el lienzo.
 */
export interface CardProps {
  children?: React.ReactNode;
  /** Titulo en Poppins 600 17/24. */
  title?: string;
  subtitle?: string;
  /** Etiqueta de seccion en mayusculas, 12px con tracking 0.12em. */
  label?: string;
  /** Nota al pie separada por un divisor. */
  footnote?: React.ReactNode;
  /** surface (blanco) o brand (azul Vikua #001332). */
  tone?: "surface" | "brand";
  padding?: number;
  /** 0 borde sin sombra · 1 tarjetas · 2 popovers · 3 modales. */
  elevation?: 0 | 1 | 2 | 3;
  style?: React.CSSProperties;
}
export function Card(props: CardProps): React.ReactElement;
