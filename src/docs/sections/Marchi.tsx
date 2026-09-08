import { brand, misureMinime, paletteSegmento, type Segmento } from '../../tokens';
import { Lockup } from '../../components/Lockup';
import { Codice } from '../Codice';

const ORDINE: Segmento[] = ['arborea', 'ortofrutta', 'carni', 'agrozoo'];

const DETTAGLI: Record<Segmento, { ruolo: string; cosa: string; voce: string; immagini: string }> = {
  arborea: {
    ruolo: 'La casa madre',
    cosa: 'Cooperativa dal 1955, oltre 290 soci, 92 milioni di fatturato. Firma istituzionale e garanzia: company profile, bilancio di sostenibilità, rapporti con il territorio.',
    voce: 'Sobria e assertiva. Parla di filiera, tracciabilità, cooperazione.',
    immagini: 'Fotografia documentaria di stabilimenti e campi. Il glifo del marchio come texture.',
  },
  ortofrutta: {
    ruolo: 'Ortofrutta fresca e quarta gamma',
    cosa: 'Organizzazione di Produttori ortofrutticoli dal 2004, unica OP pataticola della Sardegna dal 2018.',
    voce: 'Calda e appetitosa. Parla di stagionalità, filiera corta, freschezza.',
    immagini: 'Illustrazioni di ortofrutta al tratto, icone geometriche sovrapposte, foto di prodotto in cerchio.',
  },
  carni: {
    ruolo: 'Filiera carne bovina',
    cosa: 'Bovino nato e allevato in Sardegna. OP Carne dal 2008, primo Centro di Allevamento di bovini da carne dell’isola.',
    voce: 'Asciutta e garantista. Il centro del discorso è la tracciabilità.',
    immagini: 'Illustrazioni di animali al tratto, fotografia di stalla e pascolo. Niente ortofrutta.',
  },
  agrozoo: {
    ruolo: 'Mangimi, nutrizione animale, punti vendita',
    cosa: 'Mangimificio specializzato in unifeed fibrosi, rete di 12 punti vendita agrozootecnici e consulenza tecnica in tutta la Sardegna.',
    voce: 'Tecnica e concreta. Numeri, formati, dosi: la scheda prodotto è il formato naturale.',
    immagini: 'Illustrazioni di animali, macro di materia prima nei ritagli tondi, texture di icone.',
  },
};

export function Marchi() {
  return (
    <>
      <section className="dx-section">
        <div className="dx-h">
          <span className="pa-chip pa-kicker">Marca · brandbook 1–2</span>
          <h1>I quattro marchi</h1>
          <p className="pa-lead">
            L’identità nasce da quattro segni primitivi: un <strong>bronzetto sardo</strong> per
            l’appartenenza, un <strong>toro</strong> per la fecondità, un <strong>frutto</strong> per
            la genuinità, una <strong>coccarda</strong> per la qualità. Da lì discendono il marchio
            della cooperativa e i tre marchi di segmento.
          </p>
        </div>

        {ORDINE.map(k => {
          const b = brand[k]; const d = DETTAGLI[k];
          return (
            <div key={k} className={`pa-card ${b.tema}`} style={{ marginBottom: 'var(--pa-space-l)' }}>
              <div className="pa-grid">
                <div className="pa-col-3" style={{ display: 'grid', alignContent: 'start', gap: 'var(--pa-space-m)' }}>
                  <div style={{ background: 'var(--pa-sabbia)', borderRadius: 'var(--pa-radius-m)',
                                padding: 'var(--pa-space-l)', display: 'grid', placeItems: 'center', minHeight: 110 }}>
                    <img src={`.${b.logo}`} alt={b.nome} style={{ maxWidth: '100%', maxHeight: 60 }} />
                  </div>
                  <div className="dx-row" style={{ gap: 5 }}>
                    {paletteSegmento[k].slice(0, 6).map((c, i) => (
                      <div key={c + i} title={c}
                           style={{ width: 28, height: 28, borderRadius: 7, background: c, border: '1px solid rgba(0,0,0,.08)' }} />
                    ))}
                  </div>
                </div>
                <div className="pa-col-9">
                  <span className="pa-chip pa-kicker">{d.ruolo}</span>
                  <h2 style={{ marginBottom: 'var(--pa-space-s)', fontSize: '1.75rem' }}>{b.nome}</h2>
                  <p><em>{b.concept}</em></p>
                  <p>{d.cosa}</p>
                  <p className="pa-small"><strong>Tono di voce.</strong> {d.voce}</p>
                  <p className="pa-small"><strong>Immagini ammesse.</strong> {d.immagini}</p>
                  <p className="pa-small"><strong>Classe tema.</strong> <code>{b.tema || '— (è il tema di base)'}</code></p>
                </div>
              </div>
            </div>
          );
        })}
      </section>

      <section className="dx-section">
        <h2>Endorsement — la regola 5:1</h2>
        <p>
          Ogni marchio di segmento si presenta <strong>sempre come endorsed brand</strong>, con
          l’endorser Produttori Arborea in proporzione 1:5. Non è una proporzione da valutare a
          occhio: l’endorser si ricava dal wordmark, e il componente lo fa da solo.
        </p>
        <div className="dx-demo dx-demo--sabbia dx-row" style={{ justifyContent: 'space-around', paddingBlock: 'var(--pa-space-2xl)' }}>
          <Lockup marchio="ortofrutta" larghezza={200} />
          <Lockup marchio="carni" larghezza={170} />
          <Lockup marchio="agrozoo" larghezza={220} />
        </div>
        <Codice>{`import { Lockup } from '@pa/design-system';
<Lockup marchio="⟦ortofrutta⟧" larghezza={240} />   // endorser calcolato a 48px`}</Codice>
      </section>

      <section className="dx-section">
        <h2>Varianti e misure minime</h2>
        <p>
          Tre costruzioni del marchio della cooperativa: il wordmark esteso è l’uso normale, il
          glifo serve quando lo spazio è minimo, la composizione circolare evoca una timbratura
          ed è per applicazioni più fresche. Sotto le misure qui indicate il segno non si
          decodifica più.
        </p>
        <div className="pa-grid">
          {[['produttori-arborea', 'Wordmark', misureMinime.wordmark],
            ['produttori-arborea-glifo', 'Glifo', misureMinime.glifo],
            ['produttori-arborea-cerchio', 'Circolare', misureMinime.cerchio]].map(([f, nome, m]) => {
            const mm = m as typeof misureMinime.wordmark;
            return (
              <div className="pa-col-4" key={f as string}>
                <div className="dx-demo" style={{ display: 'grid', gap: 'var(--pa-space-m)', justifyItems: 'center' }}>
                  <img src={`./brand/loghi/${f}.svg`} alt="" style={{ height: 64 }} />
                  <div style={{ textAlign: 'center' }}>
                    <strong>{nome as string}</strong>
                    <p className="pa-caption" style={{ margin: 0 }}>
                      stampa {mm.stampaMm[0]} × {mm.stampaMm[1]} mm<br />
                      digitale {mm.digitalPx[0]} × {mm.digitalPx[1]} px
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <h3>Positivo e negativo</h3>
        <div className="pa-grid">
          <div className="pa-col-6">
            <div className="dx-demo" style={{ background: 'var(--pa-sabbia)' }}>
              <p className="pa-caption">Positivo su sabbia — l’uso normale</p>
              <img src="./brand/loghi/produttori-arborea.svg" alt="" style={{ height: 56 }} />
            </div>
          </div>
          <div className="pa-col-6">
            <div className="dx-demo" style={{ background: 'var(--pa-campagna)', color: 'var(--pa-sabbia)' }}>
              <p className="pa-caption" style={{ color: 'var(--pa-argento)' }}>Negativo — variante mono, colore da CSS</p>
              <img src="./brand/loghi/produttori-arborea-mono.svg" alt=""
                   style={{ height: 56, filter: 'brightness(0) invert(1)' }} />
            </div>
          </div>
        </div>
        <Codice>{`<!-- Ogni logo ha una variante "-mono" che eredita il colore -->
<img src="/brand/loghi/⟦meridoro-mono⟧.svg" alt="Meridoro">   <!-- tinta via CSS -->`}</Codice>

        <div className="dx-do-dont">
          <div className="dx-do">
            <h4>Sempre</h4>
            <ul>
              <li>Positivo su sabbia, bianco o su una tinta chiara del segmento.</li>
              <li>Negativo in bianco pieno su campagna, carne o fotografia scura.</li>
              <li>Il glifo da solo quando lo spazio è minimo: favicon, bollino, timbro.</li>
              <li>Safezone libera da altri elementi su tutti i lati.</li>
            </ul>
          </div>
          <div className="dx-dont">
            <h4>Mai</h4>
            <ul>
              <li>Deformare le proporzioni o inclinare il marchio.</li>
              <li>Rifare il lettering o cambiarne la spaziatura.</li>
              <li>Elaborazioni cromatiche fuori palette ed effetti speciali di qualsiasi natura.</li>
              <li>Un marchio di segmento senza il suo endorser.</li>
            </ul>
          </div>
        </div>
        <p className="pa-caption">
          Il brandbook è esplicito: «qualsiasi alterazione dei parametri tecnici dell’applicazione
          costituisce una violazione grave dell’integrità della marca».
        </p>
      </section>
    </>
  );
}
