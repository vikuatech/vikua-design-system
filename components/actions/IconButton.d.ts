import type * as React from "react";

/** Accion de un solo icono: cabecera, barras de herramientas, filas densas. */
export interface IconButtonProps {
  children?: React.ReactNode;
  /** Obligatorio: nombre accesible de la accion. */
  label: string;
  variant?: "subtle" | "accent" | "ghost" | "onBrand";
  size?: "sm" | "md" | "lg";
  shape?: "square" | "circle";
  disabled?: boolean;
  onClick?: () => void;
  style?: React.CSSProperties;
}
export function IconButton(props: IconButtonProps): React.ReactElement;
