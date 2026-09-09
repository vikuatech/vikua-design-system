import type * as React from "react";

/** Aviso en linea con barra semantica de 4px; la variante brand es el toast sobre azul Vikua. */
export interface AlertProps {
  title: string;
  description?: string;
  tone?: "success" | "warning" | "danger" | "brand";
  actionLabel?: string;
  onAction?: () => void;
  style?: React.CSSProperties;
}
export function Alert(props: AlertProps): React.ReactElement;
