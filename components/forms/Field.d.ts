import type * as React from "react";

/**
 * Campo de texto de 40px con etiqueta, ayuda y estados.
 */
export interface FieldProps {
  label?: string;
  value?: string;
  placeholder?: string;
  /** default · focus (anillo naranja) · error · disabled */
  state?: "default" | "focus" | "error" | "disabled";
  /** Texto de ayuda en gris terciario. */
  hint?: string;
  /** Mensaje de error; sustituye a hint y pinta el borde en rojo. */
  error?: string;
  /** Nodo al final del campo: unidad, icono o accion. */
  trailing?: React.ReactNode;
  onChange?: (value: string) => void;
  style?: React.CSSProperties;
}
export function Field(props: FieldProps): React.ReactElement;
