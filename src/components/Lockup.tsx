import { brand, endorserRatio, type Segmento } from '../tokens';

/**
 * Marchio di segmento con l'endorser Produttori Arborea sotto.
 * La proporzione 5:1 è normativa (brandbook 2.1-2.3): l'endorser non si
 * dimensiona a occhio, si ricava dal wordmark.
 */
export function Lockup({
  marchio, larghezza = 240,
}: { marchio: Exclude<Segmento, 'arborea'>; larghezza?: number }) {
  const b = brand[marchio];
  return (
    <span className="pa-lockup" style={{ ['--pa-lockup-w' as string]: `${larghezza}px` }}>
      <img className="pa-lockup__brand" src={`.${b.logo}`} alt={b.nome} />
      <img className="pa-lockup__endorser" src={`.${brand.arborea.logo}`}
           alt="Produttori Arborea"
           style={{ width: `${larghezza / endorserRatio}px` }} />
    </span>
  );
}
