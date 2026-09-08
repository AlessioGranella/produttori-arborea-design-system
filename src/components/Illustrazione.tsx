import { assetUrl } from '../asset';

/**
 * Illustrazione a incisione, tinta a piacere.
 *
 * Il master è un PNG nero con canale alfa: la tinta arriva dalla maschera CSS,
 * così una sola risorsa serve tutte le tinte di brand. Esiste anche il
 * corrispettivo vettoriale (stesso nome, `.svg`) per la stampa e il download.
 *
 * Sotto una certa misura viene servita l'anteprima a 360 px invece del master:
 * una griglia di trenta illustrazioni a piena risoluzione peserebbe 18 MB.
 */
export function Illustrazione({
  nome, famiglia = 'ortofrutta', tinta, altezza = 200, opacita = 1,
  anteprima, className = '',
}: {
  nome: string; famiglia?: 'ortofrutta' | 'animali';
  tinta?: string; altezza?: number | string; opacita?: number;
  anteprima?: boolean; className?: string;
}) {
  const px = typeof altezza === 'number' ? altezza : Number.parseInt(altezza, 10) || 200;
  const leggera = anteprima ?? px <= 240;
  const cartella = leggera ? `${famiglia}/anteprima` : famiglia;
  const src = assetUrl(`brand/illustrazioni/${cartella}/${nome}.png`);

  return (
    <span
      className={`pa-illu ${className}`}
      role="img"
      aria-label={nome.replace(/-/g, ' ')}
      style={{
        ['--pa-illu-src' as string]: src,
        ['--pa-illu-tint' as string]: tinta,
        height: typeof altezza === 'number' ? `${altezza}px` : altezza,
        width: typeof altezza === 'number' ? `${altezza}px` : altezza,
        opacity: opacita,
      }}
    />
  );
}
