import type * as React from "react";

/** Selector de 40px con la misma caja que Field. */
export interface SelectProps {
  label?: string;
  value?: string;
  options?: string[];
  state?: "default" | "focus" | "disabled";
  onChange?: (value: string) => void;
  style?: React.CSSProperties;
}
export function Select(props: SelectProps): React.ReactElement;
