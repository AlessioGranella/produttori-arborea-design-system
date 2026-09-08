import { Codice } from '../Codice';

const GERARCHIA = [
  ['Header', 'Fredoka medium', '150 pt', '180 pt', 'X'],
  ['Sub header', 'Fredoka medium', '75 pt', '90 pt', 'X/2'],
  ['Call to action', 'Fredoka medium', '50 pt', '50 pt', 'X/3'],
  ['Body text', 'Roboto Flex medium', '37,5 pt', '45 pt', 'X/4'],
  ['Labels', 'Roboto Flex medium', '25 pt', '30 pt', 'X/6'],
];

export function Tipografia() {
  return (
    <>
      <section className="dx-section">
        <div className="dx-h">
          <span className="pa-chip pa-kicker">Fondamenta · brandbook 3</span>
          <h1>Tipografia</h1>
          <p className="pa-lead">
            Due caratteri con compiti separati e non scambiabili. <strong>Fredoka</strong> è
            morbido e versatile: comunica semplicità, umanità e freschezza, e sta ai titoli.
            <strong> Roboto&nbsp;Flex</strong> è di ispirazione svizzera: comunica precisione e
            affidabilità, e sta ai testi lunghi e accessibili.
          </p>
        </div>

        <div className="dx-note">
          <p>
            <strong>La divisione è netta.</strong> Fredoka non scende mai sotto il livello del
            titolo o dell’etichetta breve; Roboto Flex non sale mai a fare da titolo. Un paragrafo
            in Fredoka diventa illeggibile alle misure lunghe, ed è l’errore più frequente.
          </p>
        </div>

        <div className="dx-demo dx-demo--sabbia">
          <p className="pa-caption">Fredoka — head font</p>
          <div style={{ fontFamily: 'var(--pa-font-display)', fontWeight: 500, fontSize: 40, color: 'var(--pa-campagna)' }}>
            ABCDEFGHIJKLMNOPQRSTUVXYWZ
          </div>
          <div style={{ fontFamily: 'var(--pa-font-display)', fontWeight: 300, fontSize: 40, color: 'var(--pa-campagna)' }}>
            abcdefghijklmnopqrstuvxywz 0123456789
          </div>
          <p className="pa-caption" style={{ marginTop: 'var(--pa-space-l)' }}>Roboto Flex — body font</p>
          <div style={{ fontFamily: 'var(--pa-font-text)', fontWeight: 500, fontSize: 28 }}>
            ABCDEFGHIJKLMNOPQRSTUVXYWZ
          </div>
          <div style={{ fontFamily: 'var(--pa-font-text)', fontWeight: 300, fontSize: 28 }}>
            abcdefghijklmnopqrstuvxywz 0123456789
          </div>
        </div>
      </section>

      <section className="dx-section">
        <h2>Gerarchia</h2>
        <p>
          Una scala modulare su una sola misura <em>X</em>. Tutto il resto si ricava dividendola:
          non ci sono corpi «scelti a occhio». L’interlinea è 1,2 ovunque tranne la call to action,
          che è 1,0 ed è sempre sottolineata.
        </p>
        <div className="dx-demo dx-demo--sabbia">
          <div style={{ fontFamily: 'var(--pa-font-display)', fontWeight: 500, fontSize: 'var(--pa-fs-header)',
                        lineHeight: 1.2, color: 'var(--pa-campagna)' }}>Header lorem</div>
          <div style={{ fontFamily: 'var(--pa-font-display)', fontWeight: 500, fontSize: 'var(--pa-fs-sub)',
                        lineHeight: 1.2, color: 'var(--pa-campagna)' }}>Subtitle vendit iur simusa</div>
          <p style={{ fontSize: 'var(--pa-fs-label)', lineHeight: 1.35, marginTop: 'var(--pa-space-m)', maxWidth: '48ch' }}>
            Quas et utem volo tet eveliatet verum numqui reratem haris as mod qui culluptasped
            ellibus endae molorpostiis nes aliquam eum volor aut et untur.
          </p>
          <a className="pa-cta" href="#tipografia" onClick={e => e.preventDefault()}>Learn More</a>
          <div className="pa-label" style={{ marginTop: 'var(--pa-space-l)' }}>label / details</div>
        </div>
        <table className="pa-table pa-table--numeric" style={{ background: 'var(--pa-bianco)' }}>
          <thead><tr><th>Ruolo</th><th>Carattere</th><th>Corpo</th><th>Interlinea</th><th>Rapporto</th></tr></thead>
          <tbody>{GERARCHIA.map(r => <tr key={r[0]}>{r.map((c, i) => <td key={i}>{c}</td>)}</tr>)}</tbody>
        </table>
        <Codice>{`/* La scala vive in una sola variabile: cambia X, cambia tutto */
--pa-scala: clamp(2.5rem, 1.2rem + 5.2vw, 4.5rem);
--pa-fs-sub:   calc(var(--pa-scala) / 2);
--pa-fs-cta:   calc(var(--pa-scala) / 3);
--pa-fs-body:  calc(var(--pa-scala) / 4);
--pa-fs-label: calc(var(--pa-scala) / 6);`}</Codice>
        <div className="dx-note">
          <p>
            <strong>Una deroga consapevole.</strong> Il rapporto del brandbook dà, alla scala
            del web, un corpo di testo attorno ai 18&nbsp;px con interlinea 1,2 — giusto per un
            impaginato, stretto per leggere a schermo. Nei testi lunghi il sistema apre
            l’interlinea a 1,55 (<code>--pa-lh-lettura</code>) e tiene un minimo di 16&nbsp;px.
            I rapporti fra i livelli restano quelli.
          </p>
        </div>
      </section>

      <section className="dx-section">
        <h2>Il titolo di prodotto</h2>
        <p>
          Fredoka medium, tutto maiuscolo, con una tinta che cambia da prodotto a prodotto
          pescando nella palette del segmento. Il colore non è decorazione: serve a far
          riconoscere la scheda da lontano, sfogliando.
        </p>
        <div className="dx-demo dx-demo--sabbia theme-ortofrutta">
          <div className="pa-grid">
            {[['PATATE NOVELLE', 'var(--pa-oro)'], ['CAROTE', 'var(--pa-arancio)'],
              ['FRAGOLE', 'var(--pa-pomodoro)'], ['RUCOLA', 'var(--pa-foglia)']].map(([t, c]) => (
              <div className="pa-col-3" key={t}>
                <h3 className="pa-title-prodotto" style={{ ['--pa-tint' as string]: c, fontSize: '1.5rem' }}>{t}</h3>
              </div>
            ))}
          </div>
        </div>
        <Codice>{`<h3 class="⟦pa-title-prodotto⟧" style="⟦--pa-tint⟧: var(--pa-arancio)">Carote</h3>`}</Codice>
      </section>
    </>
  );
}
