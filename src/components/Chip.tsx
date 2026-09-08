import type { ReactNode } from 'react';

/**
 * Chip / kicker. Sopra un h1 o h2 va sempre usato con `kicker`.
 * Solo testo: mai icone o frecce dentro un chip.
 */
export function Chip({
  tono = 'accento', kicker = false, children,
}: { tono?: 'accento' | 'pop' | 'contorno' | 'su-scuro'; kicker?: boolean; children: ReactNode }) {
  const mod = { accento: '', pop: ' pa-chip--pop', contorno: ' pa-chip--outline', 'su-scuro': ' pa-chip--on-dark' }[tono];
  return <span className={`pa-chip${mod}${kicker ? ' pa-kicker' : ''}`}>{children}</span>;
}
