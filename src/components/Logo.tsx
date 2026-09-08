import { brand, type Segmento } from '../tokens';

/**
 * Logo di marchio.
 *
 * Con `tinta` il logo viene reso come maschera CSS sulla variante monocromatica:
 * è l'unico modo di ricolorare un SVG caricato in un `<img>`, perché lì
 * `currentColor` non eredita e i filtri non sanno fare un colore arbitrario.
 * Serve per il negativo e per gli usi su fondo pieno.
 */
export function Logo({
  marchio = 'arborea', altezza = 48, tinta,
}: { marchio?: Segmento; altezza?: number | string; tinta?: string }) {
  const b = brand[marchio];
  const h = typeof altezza === 'number' ? `${altezza}px` : altezza;

  if (!tinta) {
    return <img src={`.${b.logo}`} alt={b.nome} style={{ height: h, width: 'auto', display: 'block' }} />;
  }
  return (
    <span
      role="img"
      aria-label={b.nome}
      style={{
        display: 'block', height: h, width: '100%',
        backgroundColor: tinta,
        WebkitMaskImage: `url(.${b.logoMono})`, maskImage: `url(.${b.logoMono})`,
        WebkitMaskRepeat: 'no-repeat', maskRepeat: 'no-repeat',
        WebkitMaskSize: 'contain', maskSize: 'contain',
        WebkitMaskPosition: 'center', maskPosition: 'center',
      }}
    />
  );
}
