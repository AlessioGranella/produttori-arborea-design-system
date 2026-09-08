import { brand, type Segmento } from '../tokens';

/**
 * Logo di marchio. `mono` usa la variante tintabile: il colore arriva
 * dalla proprietà CSS `color` del contenitore (utile in negativo su fondo pieno).
 */
export function Logo({
  marchio = 'arborea', altezza = 48, mono = false,
}: { marchio?: Segmento; altezza?: number; mono?: boolean }) {
  const b = brand[marchio];
  const src = mono ? b.logoMono : b.logo;
  return <img src={`.${src}`} alt={b.nome} style={{ height: altezza, width: 'auto', display: 'block' }} />;
}
