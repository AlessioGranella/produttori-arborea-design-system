import { Bottone } from '../../components/Bottone';
import { Chip } from '../../components/Chip';
import { Numero } from '../../components/Numero';
import { SchedaProdotto } from '../../components/SchedaProdotto';
import { Footer } from '../../components/Footer';
import { colore } from '../../tokens';
import { Codice } from '../Codice';

function Blocco({ titolo, testo, codice, children }:
  { titolo: string; testo?: string; codice?: string; children: React.ReactNode }) {
  return (
    <section className="dx-section">
      <h2>{titolo}</h2>
      {testo && <p>{testo}</p>}
      <div className="dx-demo">{children}</div>
      {codice && <Codice>{codice}</Codice>}
    </section>
  );
}

export function Componenti() {
  return (
    <>
      <section className="dx-section">
        <div className="dx-h">
          <span className="pa-chip pa-kicker">Costruire</span>
          <h1>Componenti</h1>
          <p className="pa-lead">
            Pochi pezzi, tutti tematizzabili. Ogni anteprima qui sotto è il componente vero:
            se cambia il design system, cambia questa pagina. Il codice accanto è copiabile
            così com’è.
          </p>
        </div>
      </section>

      <Blocco titolo="Bottoni"
        testo="Sempre a pillola, sempre in Fredoka. Il primario è pieno nell’accento del marchio; il secondario è il suo contorno; il «pop» serve alla singola chiamata forte in pagina — se ce n’è più di una, non è più forte."
        codice={`<button class="⟦pa-btn⟧">Primario</button>
<button class="pa-btn ⟦pa-btn--secondary⟧">Secondario</button>
<button class="pa-btn ⟦pa-btn--pop⟧">Pop</button>`}>
        <div className="dx-row">
          <Bottone>Primario</Bottone>
          <Bottone variante="secondario">Secondario</Bottone>
          <Bottone variante="pop">Pop</Bottone>
          <Bottone piccolo>Piccolo</Bottone>
        </div>
        <div className="dx-row" style={{ marginTop: 'var(--pa-space-m)', background: 'var(--pa-campagna)',
                                         padding: 'var(--pa-space-m)', borderRadius: 'var(--pa-radius-m)' }}>
          <Bottone variante="inverso">Inverso su scuro</Bottone>
        </div>
      </Blocco>

      <Blocco titolo="Chip e kicker"
        testo="Un chip è solo testo: maiuscolo, spaziato, nessuna icona e nessuna freccia. Sopra un h1 o un h2 fa da kicker e annuncia la sezione."
        codice={`<span class="⟦pa-chip pa-kicker⟧">Linea del fresco</span>
<h2>Patate novelle</h2>`}>
        <div className="dx-row" style={{ marginBottom: 'var(--pa-space-l)' }}>
          <Chip>Accento</Chip><Chip tono="pop">Pop</Chip><Chip tono="contorno">Contorno</Chip>
          <span style={{ background: 'var(--pa-campagna)', padding: 'var(--pa-space-xs) var(--pa-space-s)', borderRadius: 'var(--pa-radius-pill)' }}>
            <Chip tono="su-scuro">Su scuro</Chip>
          </span>
        </div>
        <div className="theme-ortofrutta">
          <Chip kicker>Linea del fresco</Chip>
          <h2 style={{ margin: 0 }}>Patate novelle</h2>
        </div>
      </Blocco>

      <Blocco titolo="Numeri chiave"
        testo="Il modulo del company profile. Le cifre alternano i colori dato del marchio: è quell’alternanza a rendere leggibile una pagina fatta di soli numeri. I separatori di migliaia seguono la convenzione italiana."
        codice={`import { Numero } from '@pa/design-system';

<Numero valore={92} suffisso=" mln" etichetta="Fatturato (FY25)" tinta={colore.foglia} />`}>
        <div className="pa-grid">
          {[
            [92, ' mln', 'Milioni di fatturato (FY25)', colore.foglia],
            [290, '', 'Soci produttori', colore.arancio],
            [150, '', 'Dipendenti', colore.campagna],
            [10, '', 'Stabilimenti produttivi', colore.foglia],
            [15, '', 'Agenti commerciali', colore.arancio],
            [12, '', 'Punti vendita agrozootecnici in tutta la Sardegna', colore.campagna],
          ].map(([v, s, l, t]) => (
            <div className="pa-col-4" key={l as string}>
              <Numero valore={v as number} suffisso={s as string} etichetta={l as string} tinta={t as string} />
            </div>
          ))}
        </div>
      </Blocco>

      <Blocco titolo="Card"
        testo="Tre pesi: piana su bianco, morbida sull’accento tenue, piena sul fondo scuro. Il raggio è generoso e non si riduce."
        codice={`<article class="⟦pa-card⟧">…</article>
<article class="pa-card ⟦pa-card--soft⟧">…</article>
<article class="pa-card ⟦pa-card--dark⟧">…</article>`}>
        <div className="pa-grid">
          {[['pa-card', 'Piana'], ['pa-card pa-card--soft', 'Morbida'], ['pa-card pa-card--dark', 'Piena']].map(([c, n]) => (
            <div className="pa-col-4" key={n}>
              <article className={c}>
                <h3 style={{ marginBottom: 'var(--pa-space-xs)' }}>{n}</h3>
                <p className="pa-small" style={{ margin: 0 }}>Filiera corta, prodotti freschi e genuini.</p>
              </article>
            </div>
          ))}
        </div>
      </Blocco>

      <Blocco titolo="Scheda prodotto"
        testo="Il mattone dei cataloghi. Foto in cerchio, titolo maiuscolo colorato, due righe di descrizione. Il primo periodo va in neretto: è quello che si legge sfogliando."
        codice={`<article class="⟦pa-prodotto⟧" style="--pa-tint: var(--pa-arancio)">
  <div class="pa-prodotto__media"><img src="carote.jpg" alt=""></div>
  <h3 class="pa-title-prodotto">Carote</h3>
  <p><strong>Croccanti, dolci e dal colore intenso,</strong> le nostre carote…</p>
</article>`}>
        <div className="theme-ortofrutta pa-grid" style={{ background: 'var(--pa-foglia-bordo)', padding: 'var(--pa-space-l)', borderRadius: 'var(--pa-radius-l)' }}>
          {[['Carote', colore.arancio, 'Croccanti, dolci e dal colore intenso,', 'le nostre carote sono sempre fresche e ricche di gusto. Ideali per insalate, vellutate o per contorni deliziosi.'],
            ['Fragole', colore.pomodoro, 'Succose, gustose e irresistibilmente dolci,', 'le nostre fragole portano in tavola il sapore della natura. Raccolte da mani esperte alla giusta maturazione.'],
            ['Patate novelle', colore.oro, 'Grazie al doppio raccolto', 'e a una conservazione più breve, le nostre patate novelle sono fresche tutto l’anno.'],
          ].map(([t, c, forte, resto]) => (
            <div className="pa-col-4" key={t}>
              <SchedaProdotto titolo={t} tinta={c}>
                <p className="pa-small" style={{ margin: 0 }}><strong>{forte}</strong> {resto}</p>
              </SchedaProdotto>
            </div>
          ))}
        </div>
      </Blocco>

      <Blocco titolo="Tabelle"
        testo="Intestazione su bianco con una riga di separazione, mai una fascia grigia. I numeri si allineano a destra e usano cifre tabulari. Il riquadro dei valori nutrizionali è la variante che serve alle schede Meridoro."
        codice={`<table class="⟦pa-table pa-table--numeric⟧">…</table>
<div class="⟦pa-nutrienti⟧">…</div>`}>
        <div className="pa-grid">
          <div className="pa-col-7">
            <table className="pa-table pa-table--numeric">
              <thead><tr><th>Formato</th><th>Peso</th><th>Pedana</th></tr></thead>
              <tbody>
                <tr><td>Balletta singola</td><td>22 kg</td><td>45 pezzi</td></tr>
                <tr><td>Sacconi</td><td>550 kg</td><td>—</td></tr>
                <tr><td>Rinfusa su prenotazione</td><td>—</td><td>—</td></tr>
              </tbody>
            </table>
          </div>
          <div className="pa-col-5 theme-agrozoo">
            <div className="pa-nutrienti" style={{ color: 'var(--pa-accent)' }}>
              <div className="pa-nutrienti__titolo">Valori nutrizionali Tq</div>
              <ul>
                <li>Proteina grezza 15,00 %</li>
                <li>Fibra grezza 13,50 %</li>
                <li>Grassi grezzi 1,80 %</li>
              </ul>
            </div>
          </div>
        </div>
      </Blocco>

      <Blocco titolo="Ritagli fotografici"
        testo="Le foto non stanno mai in un rettangolo netto. Cerchio per il prodotto e il ritratto, forma organica per l’ambiente, angolo morbido per le viste larghe."
        codice={`<figure class="pa-media ⟦pa-media--cerchio⟧"><img src="…"></figure>
<figure class="pa-media ⟦pa-media--seme⟧"><img src="…"></figure>
<figure class="pa-media ⟦pa-media--morbido⟧"><img src="…"></figure>`}>
        <div className="dx-row">
          {['cerchio', 'blob', 'morbido'].map(m => (
            <div key={m} style={{ textAlign: 'center' }}>
              <div className={`pa-media pa-media--${m}`}
                   style={{ width: 130, height: 130, background: 'linear-gradient(135deg, var(--pa-foglia), var(--pa-oro))' }} />
              <span className="pa-caption">{m}</span>
            </div>
          ))}
        </div>
      </Blocco>

      <Blocco titolo="Footer"
        testo="Chiude ogni materiale. Fondo scuro del marchio attivo, logo, sede, contatti. Il logo Produttori Arborea compare comunque, anche in un materiale di marchio."
        codice={`import { Footer } from '@pa/design-system';
<Footer marchio="primoverde" />`}>
        <div style={{ margin: 'calc(var(--pa-space-xl) * -1)' }}><Footer /></div>
      </Blocco>
    </>
  );
}
