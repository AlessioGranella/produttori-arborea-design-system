import { useEffect, useState } from 'react';
import { famiglie, type Template as T } from '../../template';
import { asset } from '../../asset';
import { useCopia } from '../Copiabile';

const MARCHIO: Record<T['segmento'], string> = {
  ortofrutta: 'Primoverde', carni: 'Rossopregio', agrozoo: 'Meridoro', corporate: 'Produttori Arborea',
};
const TEMA: Record<T['segmento'], string> = {
  ortofrutta: 'theme-ortofrutta', carni: 'theme-carni', agrozoo: 'theme-agrozoo', corporate: '',
};
const pagina = (t: T, n: number) => asset(`brand/template/${t.slug}-${n}.jpg`);

export function Template() {
  const [aperto, setAperto] = useState<{ t: T; n: number } | null>(null);
  const [copiato, copia] = useCopia();

  // Esc chiude, le frecce sfogliano le pagine del template aperto
  useEffect(() => {
    if (!aperto) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setAperto(null);
      const { t, n } = aperto;
      if (e.key === 'ArrowRight' && n < t.pagine) setAperto({ t, n: n + 1 });
      if (e.key === 'ArrowLeft' && n > 1) setAperto({ t, n: n - 1 });
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [aperto]);

  return (
    <>
      <section className="dx-section">
        <div className="dx-h">
          <span className="pa-chip pa-kicker">Costruire</span>
          <h1>Template</h1>
          <p className="pa-lead">
            I materiali che tornano ogni settimana — schede, volantini, caroselli, avvisi — partono
            da un master già risolto, non da una pagina bianca. Qui c’è l’elenco dei master, dove
            stanno e le regole che ognuno porta con sé.
          </p>
        </div>
        <div className="dx-note">
          <p>
            <strong>Un master non si modifica: si duplica.</strong> In Canva il comando è
            «Crea una copia»; il nuovo esemplare si rinomina con marchio e prodotto
            («Meridoro — Fiberfeed Conigli»). I master Canva stanno nell’account
            <strong> Studio Grafico</strong>: l’identificativo si copia con un clic e si incolla
            nella ricerca di Canva.
          </p>
        </div>
      </section>

      {famiglie.map(f => (
        <section className="dx-section" key={f.gruppo}>
          <h2>{f.gruppo}</h2>
          <p>{f.testo}</p>
          <div className="dx-template">
            {f.voci.map(t => (
              <article className="dx-tpl" key={t.slug}>
                <div className="dx-tpl__anteprime">
                  <button type="button" className="dx-tpl__cover" onClick={() => setAperto({ t, n: 1 })}
                          aria-label={`Ingrandisci ${t.titolo}`}>
                    <img src={pagina(t, 1)} alt={t.titolo} loading="lazy" />
                  </button>
                  {t.pagine > 1 && (
                    <div className="dx-tpl__pagine">
                      {Array.from({ length: t.pagine - 1 }, (_, i) => i + 2).map(n => (
                        <button type="button" key={n} onClick={() => setAperto({ t, n })}
                                aria-label={`${t.titolo}, pagina ${n}`}>
                          <img src={pagina(t, n)} alt="" loading="lazy" />
                        </button>
                      ))}
                    </div>
                  )}
                </div>
                <div className="dx-tpl__testo">
                  <div className={`dx-row ${TEMA[t.segmento]}`} style={{ gap: 'var(--pa-space-xs)' }}>
                    <span className="pa-chip">{MARCHIO[t.segmento]}</span>
                    <span className="pa-chip pa-chip--outline">{t.strumento}</span>
                  </div>
                  <h3>{t.titolo}</h3>
                  <p className="pa-caption">{t.formato}</p>
                  <p>{t.uso}</p>
                  <ul>{t.regole.map(r => <li key={r}>{r}</li>)}</ul>
                  {t.produzione && <p className="pa-small"><strong>Nuovo esemplare.</strong> {t.produzione}</p>}
                  <div className="dx-tpl__sorgente">
                    <span>{t.strumento === 'Canva' ? 'Master Canva' : 'Sorgente'}</span>
                    <button type="button" onClick={() => copia(t.sorgente)} title="Copia">
                      <code>{copiato === t.sorgente ? 'Copiato' : t.sorgente}</code>
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      ))}

      <section className="dx-section">
        <h2>Quando serve un template nuovo</h2>
        <div className="dx-do-dont">
          <div className="dx-do">
            <h4>Diventa template</h4>
            <ul>
              <li>Un materiale che si ripete almeno tre volte con contenuti diversi.</li>
              <li>Un formato con dati tecnici, dove l’errore costa: schede, listini, casi cliente.</li>
              <li>Un pezzo rifinito a mano e approvato: da lì si congela il master.</li>
            </ul>
          </div>
          <div className="dx-dont">
            <h4>Resta un pezzo unico</h4>
            <ul>
              <li>Le campagne: ogni idea ha la sua composizione (vedi Galleria).</li>
              <li>Packaging e stand di fiera, che seguono la produzione.</li>
              <li>Un master copiato da un altro cliente: porta con sé elementi bloccati non suoi.</li>
            </ul>
          </div>
        </div>
      </section>

      {aperto && (
        <div className="dx-lightbox" role="dialog" aria-modal="true" aria-label={aperto.t.titolo}
             onClick={() => setAperto(null)}>
          <img src={pagina(aperto.t, aperto.n)} alt={`${aperto.t.titolo}, pagina ${aperto.n}`} />
          <p>
            {aperto.t.titolo}
            {aperto.t.pagine > 1 && <> · pagina {aperto.n} di {aperto.t.pagine}</>}
            <span> — {aperto.t.pagine > 1 ? 'frecce per sfogliare, ' : ''}clic o Esc per chiudere</span>
          </p>
        </div>
      )}
    </>
  );
}
