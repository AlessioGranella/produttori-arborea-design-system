import { colore, cmyk, paletteSegmento, acqua } from '../../tokens';
import { Codice } from '../Codice';
import { useCopia } from '../Copiabile';

const NOMI = Object.keys(colore) as (keyof typeof colore)[];
const CHIARI = new Set(['sabbia', 'argento', 'oro', 'foglia']);

const SEGMENTI = [
  { k: 'ortofrutta' as const, titolo: 'Ortofrutta — Primoverde', rif: '4.2',
    nota: 'Celebra il verde contenuto nel nome. I due verdi fondamentali — foglia, fresco e allegro; campagna, più scuro e consistente — si adattano sia alle tinte sature dell’ortofrutta sia ai neutri chiari e scuri.' },
  { k: 'carni' as const, titolo: 'Carni — Rossopregio', rif: '4.3',
    nota: 'Celebra il rosso del nome con contrasti eleganti e incisivi. I due rossi fondamentali — pomodoro, vivo; carne, più scuro — evocano il pregio accostandosi a oro, argento, legno o neutri.' },
  { k: 'agrozoo' as const, titolo: 'Agrozootecnia — Meridoro', rif: '4.4',
    nota: 'Enfatizza l’oro contenuto nel nome, accostandolo a toni naturali e concreti per ricavare contrasti caldi e incisivi.' },
];

const SEMANTICI = [
  ['--pa-accent', 'Il colore del segmento attivo. Bottoni pieni, link, titoli.'],
  ['--pa-accent-soft', 'Fondo tenue dello stesso accento: chip, card morbide, fasce chiare.'],
  ['--pa-pop', 'Il secondario, per l’evidenza. Oro nel corporate, arancio nell’ortofrutta.'],
  ['--pa-bg', 'Fondo pagina. Sabbia in tutti i temi.'],
  ['--pa-bg-dark', 'Fondo pieno scuro: hero, footer, fasce di chiusura.'],
  ['--pa-fg / --pa-fg-soft', 'Testo forte e testo corrente.'],
  ['--pa-on-dark / --pa-on-dark-accent', 'Testo e accento sopra un fondo scuro.'],
  ['--pa-data-1 … --pa-data-6', 'Serie dei grafici, in ordine di lettura.'],
];

export function Colore() {
  const [copiato, copia] = useCopia();
  return (
    <>
      <section className="dx-section">
        <div className="dx-h">
          <span className="pa-chip pa-kicker">Fondamenta · brandbook 4</span>
          <h1>Colore</h1>
          <p className="pa-lead">
            Dodici colori con nome proprio. La palette principale accoglie tutta la gamma dei
            brand — ortofrutta, carni, agrozootecnia — e da lì ogni segmento estrae la propria,
            cambiando il protagonista e l’ordine, non i valori.
          </p>
        </div>

        <h2>Main palette</h2>
        <p>
          Valori normativi. Oro e argento, in applicazioni eccezionali, possono diventare tinte
          metalliche o lamine: da valutare sui contrasti reali del materiale stampato.
        </p>
        <p className="dx-suggerimento">
          Clic sul colore per copiare l’esadecimale; clic sulla riga CMYK per copiare quella.
        </p>
        <div className="dx-swatches">
          {NOMI.map(n => {
            const hex = colore[n];
            const cm = `cmyk(${cmyk[n].join(', ')})`;
            return (
              <div className="dx-swatch" key={n}>
                <button
                  type="button"
                  className="dx-swatch__chip"
                  style={{
                    height: 68, background: hex,
                    border: CHIARI.has(n) ? '1px solid rgba(0,0,0,.08)' : 'none',
                  }}
                  onClick={() => copia(hex)}
                  aria-label={`Copia ${hex}, ${n}`}
                />
                <div className="dx-swatch__meta">
                  <strong>{n}</strong>
                  <code onClick={() => copia(hex)} role="button" tabIndex={0}
                        onKeyDown={e => e.key === 'Enter' && copia(hex)}>{hex}</code>
                  <code onClick={() => copia(cm)} role="button" tabIndex={0}
                        onKeyDown={e => e.key === 'Enter' && copia(cm)}>cmyk {cmyk[n].join(',')}</code>
                </div>
                {(copiato === hex || copiato === cm) && <span className="dx-copiato">copiato</span>}
              </div>
            );
          })}
        </div>
      </section>

      {SEGMENTI.map(s => (
        <section className="dx-section" key={s.k}>
          <h2>{s.titolo} <span className="pa-caption">· {s.rif}</span></h2>
          <p>{s.nota}</p>
          {/* bordo esterno: chiude la striscia, altrimenti la sabbia sembra un buco nel fondo */}
          <div className="dx-row" style={{ gap: 0, borderRadius: 'var(--pa-radius-m)', overflow: 'hidden',
                                           border: '1px solid rgba(0,14,30,.12)', flexWrap: 'nowrap' }}>
            {paletteSegmento[s.k].map((c, i) => (
              // una linea sottile fra i campioni: senza, la sabbia sparisce sul fondo chiaro
              <button key={c + i} type="button" onClick={() => copia(c)} aria-label={`Copia ${c}`}
                      title={c}
                      style={{ background: c, height: 84, flex: i === 0 ? 2 : 1, minWidth: 60,
                               border: 0, borderLeft: i ? '1px solid rgba(0,14,30,.12)' : 0,
                               padding: 0, cursor: 'copy' }} />
            ))}
          </div>
          <p className="pa-caption">Il primo è il protagonista; l’ordine è quello di lettura.</p>
        </section>
      ))}

      <section className="dx-section">
        <h2>Colore di progetto — Arbolat <span className="pa-caption">· 4.5, fuori brandbook</span></h2>
        <p>
          Arbolat ha <strong>un solo colore proprio</strong>: l’acqua. Non è nella main palette
          del brandbook — nasce con il progetto «fattoria etica e sostenibile» e vale solo lì.
          Evoca il latte e l’acqua, ed è la tinta della goccia che sostituisce la O del marchio.
        </p>
        <div className="dx-swatches" style={{ maxWidth: 200 }}>
          <div className="dx-swatch">
            <button type="button" className="dx-swatch__chip" style={{ height: 88, background: acqua }}
                    onClick={() => copia(acqua)} aria-label={`Copia ${acqua}, acqua`} />
            <div className="dx-swatch__meta">
              <strong>acqua</strong>
              <code onClick={() => copia(acqua)} role="button" tabIndex={0}
                    onKeyDown={e => e.key === 'Enter' && copia(acqua)}>{acqua}</code>
            </div>
            {copiato === acqua && <span className="dx-copiato">copiato</span>}
          </div>
        </div>

        <p style={{ marginTop: 'var(--pa-space-l)' }}>
          I <strong>secondari</strong> non sono derivati dall’acqua: sono foglia, campagna e
          sabbia, presi tali e quali dalla main palette. È la copertina della brochure — fascia
          d’acqua sopra, campo verde sotto, pagine su sabbia.
        </p>
        <div className="dx-row" style={{ gap: 0, borderRadius: 'var(--pa-radius-m)', overflow: 'hidden',
                                         border: '1px solid rgba(0,14,30,.12)', flexWrap: 'nowrap' }}>
          {paletteSegmento.arbolat.map((c, i) => (
            <button key={c} type="button" onClick={() => copia(c)} aria-label={`Copia ${c}`} title={c}
                    style={{ background: c, height: 84, flex: i === 0 ? 2 : 1, minWidth: 60,
                             border: 0, borderLeft: i ? '1px solid rgba(0,14,30,.12)' : 0,
                             padding: 0, cursor: 'copy' }} />
          ))}
        </div>
        <p className="pa-caption">acqua · foglia · campagna · sabbia</p>

        <div className="dx-note">
          <p>
            L’acqua va usata <strong>solo su materiali Arbolat</strong>. Dentro un catalogo
            Primoverde o una scheda Meridoro è fuori sistema: lì il turchese non esiste.
          </p>
        </div>
      </section>

      <section className="dx-section">
        <h2>Token semantici</h2>
        <p>
          Nei componenti si scrive <code>var(--pa-accent)</code>, mai <code>var(--pa-foglia)</code>.
          È questa disciplina che permette a un catalogo Primoverde e a una scheda Meridoro di
          condividere lo stesso codice.
        </p>
        <table className="pa-table" style={{ background: 'var(--pa-bianco)', borderRadius: 'var(--pa-radius-m)' }}>
          <thead><tr><th>Token</th><th>A cosa serve</th></tr></thead>
          <tbody>{SEMANTICI.map(([t, d]) => <tr key={t}><td><code>{t}</code></td><td>{d}</td></tr>)}</tbody>
        </table>
      </section>

      <section className="dx-section">
        <h2>Come cambia un tema</h2>
        <p>Lo stesso blocco, quattro segmenti. Nessun override: solo la classe sul contenitore.</p>
        <div className="pa-grid">
          {[['', 'Produttori Arborea'], ['theme-ortofrutta', 'Primoverde'],
            ['theme-carni', 'Rossopregio'], ['theme-agrozoo', 'Meridoro'],
            ['theme-arbolat', 'Arbolat']].map(([cls, nome]) => (
            <div key={nome} className={`pa-col-3 ${cls}`}>
              <div className="pa-card" style={{ display: 'grid', gap: 'var(--pa-space-s)' }}>
                <span className="pa-chip">{nome}</span>
                <h3 style={{ margin: 0, fontSize: '1.25rem' }}>Titolo</h3>
                <p className="pa-small" style={{ margin: 0 }}>Testo corrente della scheda.</p>
                <div className="dx-row">
                  <button className="pa-btn pa-btn--s">Azione</button>
                  <button className="pa-btn pa-btn--s pa-btn--pop">Pop</button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <Codice>{`<section class="⟦theme-ortofrutta⟧">   <!-- oppure theme-carni / theme-agrozoo -->
  <h2>Patate novelle</h2>
  <button class="pa-btn">Scopri</button>
</section>`}</Codice>
      </section>
    </>
  );
}
