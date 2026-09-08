import { formatIT } from '../tokens';

/** Numero chiave del company profile: cifra grande colorata + etichetta. */
export function Numero({
  valore, etichetta, tinta, prefisso = '', suffisso = '', decimali = 0,
}: { valore: number | string; etichetta: string; tinta?: string; prefisso?: string; suffisso?: string; decimali?: number }) {
  const testo = typeof valore === 'number' ? formatIT(valore, decimali) : valore;
  return (
    <div className="pa-stat" style={tinta ? ({ ['--pa-tint' as string]: tinta }) : undefined}>
      <span className="pa-stat__value">{prefisso}{testo}{suffisso}</span>
      <span className="pa-stat__label">{etichetta}</span>
    </div>
  );
}
