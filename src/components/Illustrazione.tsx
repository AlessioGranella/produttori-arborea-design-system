/**
 * Illustrazione a incisione, tinta a piacere.
 * I master sono PNG neri con canale alfa: il colore arriva dalla maschera CSS,
 * così una sola risorsa serve tutte le tinte di brand.
 */
export function Illustrazione({
  nome, famiglia = 'ortofrutta', tinta, altezza = 200, opacita = 1, className = '',
}: {
  nome: string; famiglia?: 'ortofrutta' | 'animali';
  tinta?: string; altezza?: number | string; opacita?: number; className?: string;
}) {
  const src = `url(/brand/illustrazioni/${famiglia}/${nome}.png)`;
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
