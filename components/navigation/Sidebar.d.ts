import type * as React from "react";

/**
 * Navegacion principal: 236px, azul Vikua, esquina exterior redondeada e item activo naranja.
 */
export interface SidebarItem {
  id?: string;
  label: string;
  /** Nombre del icono Feather. */
  icon?: string;
}
export interface SidebarProps {
  product?: string;
  /** Ruta al isotipo; se pinta dentro de un circulo blanco de 30px. */
  logoSrc?: string;
  items: SidebarItem[];
  activeId?: string;
  onSelect?: (id: string) => void;
  width?: number;
  /** true = tarjeta flotante con radio en las cuatro esquinas (como el producto actual). */
  floating?: boolean;
  style?: React.CSSProperties;
}
export function Sidebar(props: SidebarProps): React.ReactElement;
