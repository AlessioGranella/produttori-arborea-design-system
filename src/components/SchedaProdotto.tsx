import type { ReactNode } from 'react';

/** Scheda prodotto dei cataloghi: foto in cerchio, titolo colorato, testo breve. */
export function SchedaProdotto({
  titolo, tinta, foto, alt = '', children,
}: { titolo: string; tinta?: string; foto?: string; alt?: string; children?: ReactNode }) {
  return (
    <article className="pa-prodotto" style={tinta ? ({ ['--pa-tint' as string]: tinta }) : undefined}>
      {/* Il cerchio resta anche senza foto: così il layout non salta quando
          l'immagine manca o arriva in ritardo. */}
      <div className="pa-prodotto__media">{foto && <img src={foto} alt={alt} />}</div>
      <div>
        <h3 className="pa-title-prodotto">{titolo}</h3>
        <div className="pa-prodotto__testo">{children}</div>
      </div>
    </article>
  );
}
