import type * as React from "react";

/** Esqueleto con la forma del contenido final. Sin spinners en tableros. */
export interface SkeletonProps {
  /** text 14px · control 36px · block 80px */
  shape?: "text" | "control" | "block";
  width?: number | string;
  height?: number;
  radius?: number | string;
  style?: React.CSSProperties;
}
export function Skeleton(props: SkeletonProps): React.ReactElement;
