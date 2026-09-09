import type * as React from "react";

/**
 * Barra de busqueda global: campo, Filtros y el boton BUSCAR en mayusculas.
 */
export interface SearchBarProps {
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  onSearch?: () => void;
  /** null oculta el boton de filtros. */
  onFilters?: (() => void) | null;
  filtersLabel?: string;
  searchLabel?: string;
  /** Sombra nivel 1 (por defecto) o borde plano. */
  elevated?: boolean;
  /** Version de 30px para cabeceras dentro del lienzo. */
  compact?: boolean;
  style?: React.CSSProperties;
}
export function SearchBar(props: SearchBarProps): React.ReactElement;
