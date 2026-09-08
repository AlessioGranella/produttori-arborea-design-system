import { useEffect, useState } from 'react';
import { galleria, type Voce } from '../../galleria';
import { asset } from '../../asset';

const SEGMENTI = [
  ['tutti', 'Tutti'], ['ortofrutta', 'Primoverde'], ['carni', 'Rossopregio'],
  ['agrozoo', 'Meridoro'], ['corporate', 'Produttori Arborea'],
] as const;

export function Galleria() {
  const [filtro, setFiltro] = useState<string>('tutti');
  const [aperta, setAperta] = useState<Voce | null>(null);

  // Esc chiude l'ingrandimento
  useEffect(() => {
    if (!aperta) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setAperta(null);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [aperta]);

  return (
    <>
      <section className="dx-section">
        <div className="dx-h">
          <span className="pa-chip pa-kicker">Marca</span>
          <h1>Galleria</h1>
          <p className="pa-lead">
            Il sistema visto in opera: campagne, packaging, stand di fiera, stampati. Serve a
            due cose — dare il metro di come i pezzi si combinano davvero, e fare da controllo
            prima di produrre qualcosa di nuovo. Se un materiale non somiglia a nulla di quello
            che c’è qui, vale la pena chiedersi perché.
          </p>
        </div>
        <div className="dx-filtri" role="tablist" aria-label="Filtra per marchio">
          {SEGMENTI.map(([k, label]) => (
            <button key={k} type="button" role="tab" aria-selected={filtro === k}
                    className={`pa-chip${filtro === k ? ' pa-chip--pop' : ' pa-chip--outline'}`}
                    onClick={() => setFiltro(k)}>{label}</button>
          ))}
        </div>
      </section>

      {galleria.map(g => {
        const voci = filtro === 'tutti' ? g.voci : g.voci.filter(v => v.segmento === filtro);
        if (!voci.length) return null;
        return (
          <section className="dx-section" key={g.gruppo}>
            <h2>{g.gruppo}</h2>
            <p>{g.testo}</p>
            <div className="dx-galleria">
              {voci.map(v => (
                <figure className="dx-gal" key={v.file}>
                  <button type="button" onClick={() => setAperta(v)} aria-label={`Ingrandisci ${v.titolo}`}>
                    <img src={asset(`brand/galleria/${v.file}.jpg`)} alt={v.titolo} loading="lazy" />
                  </button>
                  <figcaption>
                    {v.titolo}
                    {v.render && <span className="dx-gal__render" title="Immagine generata, non fotografia">render</span>}
                  </figcaption>
                </figure>
              ))}
            </div>
          </section>
        );
      })}

      <section className="dx-section">
        <div className="dx-note">
          <p>
            Le immagini marcate <strong>render</strong> sono generate, non fotografate: servono a
            presentare un packaging prima che esista, e non vanno spacciate per fotografia di
            prodotto. Quando la campagna va in stampa, il soggetto va rifatto in fotografia —
            il brandbook chiede resa naturale della luce e postproduzione limitata.
          </p>
        </div>
      </section>

      {aperta && (
        <div className="dx-lightbox" role="dialog" aria-modal="true" aria-label={aperta.titolo}
             onClick={() => setAperta(null)}>
          <img src={asset(`brand/galleria/${aperta.file}.jpg`)} alt={aperta.titolo} />
          <p>{aperta.titolo} <span>— clic o Esc per chiudere</span></p>
        </div>
      )}
    </>
  );
}
