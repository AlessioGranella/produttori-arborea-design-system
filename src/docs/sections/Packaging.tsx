import { useEffect, useState } from 'react';
import { linee, originale, anteprima, type Linea, type Mockup } from '../../packaging';
import { asset } from '../../asset';
import { useCopia } from '../Copiabile';
import { ScaricaTutto } from '../Scarica';

/** Lato lungo massimo dell'immagine copiata: oltre, gli appunti si piantano (8000 px = 200 MB in RAM). */
const LATO_COPIA = 3000;

/**
 * Mette negli appunti l'immagine come PNG, l'unico formato che i browser accettano.
 *
 * Il ClipboardItem va creato SUBITO, dentro il gesto dell'utente, con una promessa
 * del blob: Safari rifiuta la scrittura se si aspetta il caricamento prima di chiamarla.
 */
function copiaImmagine(url: string): Promise<void> {
  const blob = new Promise<Blob>((ok, ko) => {
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = () => {
      const k = Math.min(1, LATO_COPIA / Math.max(img.naturalWidth, img.naturalHeight));
      const c = document.createElement('canvas');
      c.width = Math.round(img.naturalWidth * k);
      c.height = Math.round(img.naturalHeight * k);
      c.getContext('2d')!.drawImage(img, 0, 0, c.width, c.height);
      c.toBlob(b => (b ? ok(b) : ko(new Error('canvas vuoto'))), 'image/png');
    };
    img.onerror = () => ko(new Error('immagine non caricata'));
    img.src = url;
  });
  return navigator.clipboard.write([new ClipboardItem({ 'image/png': blob })]);
}

const puoCopiareImmagini = typeof ClipboardItem !== 'undefined' && !!navigator.clipboard?.write;

export function Packaging() {
  const [aperto, setAperto] = useState<{ l: Linea; m: Mockup } | null>(null);
  const [copiato, copia] = useCopia();
  const [stato, setStato] = useState<Record<string, 'copio' | 'fatto' | 'errore'>>({});

  useEffect(() => {
    if (!aperto) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setAperto(null);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [aperto]);

  const copiaImg = (chiave: string, url: string) => {
    setStato(s => ({ ...s, [chiave]: 'copio' }));
    copiaImmagine(url).then(
      () => setStato(s => ({ ...s, [chiave]: 'fatto' })),
      () => setStato(s => ({ ...s, [chiave]: 'errore' })),
    ).finally(() => window.setTimeout(() => setStato(s => {
      const { [chiave]: _, ...resto } = s; return resto;
    }), 1600));
  };

  const etichetta = (chiave: string) => ({
    copio: 'Copio…', fatto: 'Copiata', errore: 'Non riuscito',
  })[stato[chiave]] ?? 'Copia immagine';

  return (
    <>
      <section className="dx-section">
        <div className="dx-h">
          <span className="pa-chip pa-kicker">Marca · Primoverde</span>
          <h1>Packaging</h1>
          <p className="pa-lead">
            I mockup ufficiali dei packaging Primoverde, così come li ha prodotti lo studio: quarta
            gamma, linea del fresco e sacchi di patate. Sono i file da usare quando un prodotto
            va mostrato in una campagna, in una scheda o sul sito. Non vanno ridisegnati né rifatti
            con l’AI.
          </p>
        </div>
        <div className="dx-scarica">
          <ScaricaTutto pacchetto="packaging-primoverde" etichetta="Scarica tutti i mockup" peso="70 MB" />
          <span className="pa-caption">
            Ogni scheda ha tre comandi: <strong>Copia immagine</strong> (la incolli in Canva, Figma,
            Keynote o in una mail, fino a {LATO_COPIA} px), <strong>Copia link</strong> al file
            originale e <strong>Scarica</strong> l’originale a piena risoluzione.
          </span>
        </div>
        {!puoCopiareImmagini && (
          <div className="dx-note">
            <p>Questo browser non permette di copiare immagini negli appunti: usa «Scarica» oppure «Copia link».</p>
          </div>
        )}
      </section>

      {linee.map(l => (
        <section className="dx-section theme-ortofrutta" key={l.id}>
          <div className="dx-row" style={{ justifyContent: 'space-between', alignItems: 'baseline' }}>
            <h2>{l.titolo}</h2>
            <ScaricaTutto pacchetto={`packaging-${l.id}`} etichetta={`Scarica la linea · ${l.voci.length} file`} />
          </div>
          <p>{l.testo}</p>
          <div className="dx-pack">
            {l.voci.map(m => {
              const url = asset(originale(l, m));
              const chiave = `${l.id}/${m.slug}`;
              return (
                <figure className="dx-pack__voce" key={m.slug}>
                  <button type="button" className="dx-pack__img" onClick={() => setAperto({ l, m })}
                          aria-label={`Ingrandisci ${m.titolo}`}>
                    <img src={asset(anteprima(l, m))} alt={m.titolo} loading="lazy" />
                  </button>
                  <figcaption>
                    <strong>{m.titolo}</strong>
                    <span className="pa-caption">{m.ext.toUpperCase()} · {m.px} px · {m.mb} MB</span>
                    <span className="dx-pack__azioni">
                      {puoCopiareImmagini && (
                        <button type="button" className="dx-dl__link" disabled={stato[chiave] === 'copio'}
                                onClick={() => copiaImg(chiave, url)}>{etichetta(chiave)}</button>
                      )}
                      <button type="button" className="dx-dl__link" onClick={() => copia(url)}>
                        {copiato === url ? 'Link copiato' : 'Copia link'}
                      </button>
                      <a className="dx-dl__link" href={url} download={`primoverde-${m.slug}.${m.ext}`}>Scarica</a>
                    </span>
                  </figcaption>
                </figure>
              );
            })}
          </div>
        </section>
      ))}

      <section className="dx-section">
        <div className="dx-note">
          <p>
            <strong>Da dove vengono.</strong> Quarta gamma e linea del fresco dai file del sito
            (<code>sito/assets/PRIMOVERDE (2)/</code>), i sacchi di patate dal pacchetto cliente
            «per approvazione». Quando arriva un mockup nuovo si aggiunge a{' '}
            <code>scripts/packaging.py</code> e a <code>src/packaging.ts</code>, poi si rilancia
            lo script, che rifà anche le anteprime.
          </p>
        </div>
      </section>

      {aperto && (
        <div className="dx-lightbox" role="dialog" aria-modal="true" aria-label={aperto.m.titolo}
             onClick={() => setAperto(null)}>
          <img src={asset(originale(aperto.l, aperto.m))} alt={aperto.m.titolo} className="dx-pack__grande" />
          <p>{aperto.m.titolo} <span>— clic o Esc per chiudere</span></p>
        </div>
      )}
    </>
  );
}
