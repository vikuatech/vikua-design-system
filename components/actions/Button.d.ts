import type * as React from "react";

/**
 * Boton de accion. Una sola accion primaria por vista; el naranja se reserva
 * para esa accion y para el item de navegacion activo.
 */
export interface ButtonProps {
  children?: React.ReactNode;
  /** primary (naranja) · secondary (azul Vikua) · outline · text · destructive */
  variant?: "primary" | "secondary" | "outline" | "text" | "destructive";
  /** sm 32px · md 40px · lg 48px */
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
  /** Solo para BUSCAR en la barra de busqueda global. */
  uppercase?: boolean;
  fullWidth?: boolean;
  /** Nodo de icono, normalmente <Icon name="…" size={16} />. */
  icon?: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  style?: React.CSSProperties;
}
export function Button(props: ButtonProps): React.ReactElement;
