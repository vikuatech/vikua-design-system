import type * as React from "react";

/** Interruptor 34x19 para activar capas y opciones. */
export interface SwitchProps {
  label?: React.ReactNode;
  checked?: boolean;
  disabled?: boolean;
  onChange?: (checked: boolean) => void;
  style?: React.CSSProperties;
}
export function Switch(props: SwitchProps): React.ReactElement;
