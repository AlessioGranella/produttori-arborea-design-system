import { Codice } from '../Codice';
const SPAZI = [['xxs',4],['xs',8],['s',12],['m',16],['l',24],['xl',32],['2xl',48],['3xl',64],['4xl',96]] as const;
const RAGGI = [['xs',4],['s',8],['m',16],['l',24],['xl',40]] as const;

export function SpazioGriglia() {
  return (
    <>
      <section className="dx-section">
        <div className="dx-h">
          <span className="pa-chip pa-kicker">Fondamenta</span>
          <h1>Spazio e griglia</h1>
          <p className="pa-lead">
            Tutto si appoggia a una scala di 4&nbsp;px. Nei componenti non compaiono mai valori
            in pixel scritti a mano: solo <code>var(--pa-space-*)</code>. È noioso, ed è la ragione
            per cui due materiali fatti a mesi di distanza continuano a sembrare parenti.
          </p>
        </div>

        <h2>Scala di spazio</h2>
        <div className="dx-demo">
          {SPAZI.map(([n, v]) => (
            <div key={n} style={{ display: 'flex', alignItems: 'center', gap: 'var(--pa-space-m)', marginBottom: 6 }}>
              <code style={{ width: 130, fontSize: 12 }}>--pa-space-{n}</code>
              <div style={{ height: 14, width: v, background: 'var(--pa-campagna)', borderRadius: 3 }} />
              <span className="pa-caption">{v} px</span>
            </div>
          ))}
        </div>

        <h2>Raggi</h2>
        <p>
          Il marchio è costruito su terminali tondi: le superfici seguono. Un angolo vivo, su una
          card o su una foto, stona prima ancora di essere notato.
        </p>
        <div className="dx-demo dx-row">
          {RAGGI.map(([n, v]) => (
            <div key={n} style={{ textAlign: 'center' }}>
              <div style={{ width: 92, height: 92, background: 'var(--pa-campagna-tenue)', border: '1.5px solid var(--pa-campagna-bordo)', borderRadius: v }} />
              <span className="pa-caption">{n} · {v}px</span>
            </div>
          ))}
          <div style={{ textAlign: 'center' }}>
            <div style={{ width: 92, height: 92, background: 'var(--pa-oro-bordo)', borderRadius: 'var(--pa-radius-seme)' }} />
            <span className="pa-caption">blob</span>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ width: 92, height: 92, background: 'var(--pa-foglia-bordo)', borderRadius: '50%' }} />
            <span className="pa-caption">cerchio · foto</span>
          </div>
        </div>
      </section>

      <section className="dx-section">
        <h2>Griglia</h2>
        <p>
          Dodici colonne fino a 1280&nbsp;px, otto sotto i 1024, quattro sotto i 720.
          Le fasce di colore vanno a tutta larghezza; solo il contenuto sta dentro il contenitore.
          Nav, hero, dati e footer usano lo <strong>stesso</strong> contenitore, così i bordi
          sinistri cadono tutti sulla stessa colonna.
        </p>
        <div className="dx-demo" style={{ padding: 'var(--pa-space-m)' }}>
          <div className="pa-grid">
            {Array.from({ length: 12 }, (_, i) => (
              <div key={i} className="pa-col-1" style={{ background: 'var(--pa-campagna-tenue)', border: '1px dashed var(--pa-campagna-bordo)',
                borderRadius: 4, textAlign: 'center', padding: '10px 0', fontSize: 11, color: 'var(--pa-campagna)' }}>{i + 1}</div>
            ))}
          </div>
        </div>
        <div className="dx-note">
          <p>
            <strong>Nei layout con barra laterale</strong> metti <code>container-type: inline-size</code>
            sul contenitore del contenuto: senza, la griglia guarda la finestra invece dell’area
            reale e le card restano a quattro per riga dentro uno spazio stretto. E non ricapparne
            la larghezza: la colonna principale riempie tutto lo spazio disponibile.
          </p>
        </div>
        <Codice>{`<section class="pa-band pa-band--chiara">      <!-- fascia a tutta larghezza -->
  <div class="pa-band__inner">                <!-- contenuto nel contenitore -->
    <div class="⟦pa-grid⟧">
      <article class="⟦pa-col-4⟧">…</article>
      <article class="⟦pa-col-4⟧">…</article>
      <article class="⟦pa-col-4⟧">…</article>
    </div>
  </div>
</section>`}</Codice>
      </section>
    </>
  );
}
