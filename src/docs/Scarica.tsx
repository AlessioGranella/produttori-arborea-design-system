import { asset } from '../asset';

/**
 * Riga di link per scaricare un asset nei due formati.
 * `download` su un <a> same-origin forza il salvataggio invece dell'apertura.
 */
export function Scarica({ base, formati = ['svg', 'png'] }:
  { base: string; formati?: string[] }) {
  return (
    <span className="dx-dl">
      {formati.map(f => (
        <a key={f} href={asset(`${base}.${f}`)} download className="dx-dl__link">{f.toUpperCase()}</a>
      ))}
    </span>
  );
}

/** Bottone per scaricare un archivio completo. */
export function ScaricaTutto({ pacchetto, etichetta, peso }:
  { pacchetto: string; etichetta: string; peso?: string }) {
  return (
    <a className="pa-btn pa-btn--secondary pa-btn--s" download
       href={asset(`brand/download/${pacchetto}.zip`)}>
      {etichetta}{peso && <span className="dx-dl__peso"> · {peso}</span>}
    </a>
  );
}
