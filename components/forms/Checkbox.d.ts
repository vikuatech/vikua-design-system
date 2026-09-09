import type * as React from "react";

/** Casilla de 18px, radio 4px, activa en naranja de accion. */
export interface CheckboxProps {
  label?: React.ReactNode;
  checked?: boolean;
  disabled?: boolean;
  onChange?: (checked: boolean) => void;
  style?: React.CSSProperties;
}
export function Checkbox(props: CheckboxProps): React.ReactElement;
