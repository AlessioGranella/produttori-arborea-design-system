import { Codice } from '../Codice';

export function Inizio() {
  return (
    <section className="dx-section">
      <div className="dx-h">
        <span className="pa-chip pa-kicker">Design System</span>
        <h1>Una cooperativa, tre segmenti, un solo sistema</h1>
        <p className="pa-lead">
          Produttori Arborea firma il territorio; Primoverde, Rossopregio e Meridoro parlano a tre
          mercati diversi. Questo sistema traduce in codice il brandbook ufficiale: tiene insieme
          ciò che è comune — caratteri, gerarchia, geometrie, tono — e codifica ciò che deve
          restare distinto, cioè il colore e il repertorio di immagini di ciascun segmento.
        </p>
      </div>

      <div className="dx-note">
        <p>
          <strong>La regola di partenza.</strong> Non si sceglie una palette: si sceglie un
          <em> segmento</em>. Applichi la sua classe tema al contenitore e tutti i componenti si
          ricolorano da soli. I componenti non conoscono i colori della main palette, solo i
          token semantici.
        </p>
      </div>

      <Codice>{`<link rel="stylesheet" href="src/styles/colors_and_type.css">
<link rel="stylesheet" href="src/styles/components.css">

<body>
  <section class="⟦theme-ortofrutta⟧">   <!-- oppure theme-carni / theme-agrozoo -->
    <span class="pa-chip pa-kicker">Linea del fresco</span>
    <h2>Patate novelle</h2>
    <button class="pa-btn">Scopri</button>
  </section>
</body>`}</Codice>

      <h2>Cosa contiene</h2>
      <div className="pa-grid" style={{ marginBottom: 'var(--pa-space-xl)' }}>
        {[
          ['Fondamenta', 'Colore, tipografia, spazio, griglia: i valori normativi del brandbook, più i derivati che servono all’interfaccia.'],
          ['Marca', 'I quattro marchi con i loro logo vettoriali, la regola di endorsement, e il repertorio di icone, illustrazioni e texture.'],
          ['Costruire', 'I componenti pronti e le ricette di impaginato, una per famiglia di materiali.'],
        ].map(([t, d]) => (
          <div className="pa-col-4 pa-card" key={t}>
            <h3 style={{ fontSize: '1.25rem' }}>{t}</h3><p className="pa-small">{d}</p>
          </div>
        ))}
      </div>

      <h2>Le regole che non si negoziano</h2>
      <div className="dx-do-dont">
        <div className="dx-do">
          <h4>Sempre</h4>
          <ul>
            <li>Il fondo pagina è la <strong>sabbia #FFF7F1</strong>, non il bianco.</li>
            <li>Titoli in <strong>Fredoka</strong>, testo corrente in <strong>Roboto&nbsp;Flex</strong>.</li>
            <li>Un marchio di segmento va con il suo <strong>endorser, in rapporto 5:1</strong>.</li>
            <li>Le foto si ritagliano in cerchio o nella forma seme del brand.</li>
            <li>Le illustrazioni sono monocrome, in una tinta del segmento attivo.</li>
          </ul>
        </div>
        <div className="dx-dont">
          <h4>Mai</h4>
          <ul>
            <li>Mescolare la palette di due segmenti nello stesso impaginato.</li>
            <li>Deformare, inclinare o ricolorare un marchio fuori palette.</li>
            <li>Angoli vivi sulle superfici: card, foto e pulsanti sono raccordati.</li>
            <li>Icone o frecce dentro un chip: è solo testo.</li>
            <li>Illustrazioni a più colori o sopra una fotografia.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
