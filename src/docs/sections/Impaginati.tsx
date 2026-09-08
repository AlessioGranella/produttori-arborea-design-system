import { colore } from '../../tokens';
import { Illustrazione } from '../../components/Illustrazione';
import { Logo } from '../../components/Logo';

/* Mini-anteprime in scala: mostrano la struttura, non sono esecutive.
   A4 verticale per i cataloghi, 16:9 per il corporate, quadrato per il social. */
function Pagina({ ratio = '210 / 297', bg, children }:
  { ratio?: string; bg: string; children?: React.ReactNode }) {
  return (
    <div style={{
      aspectRatio: ratio, background: bg, borderRadius: 6, overflow: 'hidden',
      position: 'relative', boxShadow: 'var(--pa-shadow-s)', fontSize: 8, lineHeight: 1.3,
    }}>{children}</div>
  );
}
const Righe = ({ n = 4, col = 'rgba(0,14,30,.22)', w = '100%' }: { n?: number; col?: string; w?: string }) => (
  <div style={{ display: 'grid', gap: 3, width: w }}>
    {Array.from({ length: n }, (_, i) => (
      <div key={i} style={{ height: 2, background: col, borderRadius: 2, width: i === n - 1 ? '62%' : '100%' }} />
    ))}
  </div>
);
const Icone = ({ nomi, h = 11 }: { nomi: string[]; h?: number }) => (
  <>{nomi.map(n => <img key={n} src={`./brand/icone/${n}.svg`} alt="" style={{ height: h }} />)}</>
);

export function Impaginati() {
  return (
    <>
      <section className="dx-section">
        <div className="dx-h">
          <span className="pa-chip pa-kicker">Costruire</span>
          <h1>Ricette di impaginato</h1>
          <p className="pa-lead">
            I segmenti condividono caratteri, griglia e geometrie, ma non l’impaginato. Un catalogo
            Primoverde respira e lascia parlare il prodotto; una scheda Meridoro è densa e tecnica;
            un documento istituzionale è disteso e sobrio. Qui sotto le strutture, con le regole
            che le tengono distinte.
          </p>
        </div>
        <div className="dx-note">
          <p>
            Le prime due ricette sono ricostruite dai materiali realmente prodotti (cataloghi
            Primoverde, schede Meridoro); la terza dal company profile. Il brandbook resta la
            norma: dove un materiale se ne discosta, vince il brandbook.
          </p>
        </div>
      </section>

      {/* --------------------------------------------------------- ORTOFRUTTA */}
      <section className="dx-section theme-ortofrutta">
        <h2>Primoverde — catalogo prodotto</h2>
        <p>
          A4 verticale. Il ritmo è dato dall’<strong>alternanza di fondo</strong>: sabbia per il
          racconto, verde chiaro per le schede. Le illustrazioni entrano grandi e a vivo dal bordo,
          mai contenute nel margine; le icone si sparpagliano negli spazi vuoti. Il testo occupa
          poco più di metà della larghezza: l’aria è parte del messaggio.
        </p>

        <div className="dx-demo dx-demo--sabbia">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 'var(--pa-space-m)' }}>

            <div>
              <Pagina bg={colore.sabbia}>
                <div style={{ position: 'absolute', inset: '8% 12% auto', display: 'flex', flexWrap: 'wrap', gap: 4, justifyContent: 'center' }}>
                  <Icone nomi={['carota', 'pomodoro', 'uva', 'agrume-sezione', 'patata', 'foglia', 'pera', 'fragola']} />
                </div>
                <div style={{ position: 'absolute', inset: '40% 16% auto', textAlign: 'center' }}>
                  <img src="./brand/loghi/primoverde-foglia.svg" alt="" style={{ width: '100%' }} />
                  <div style={{ color: colore.foglia, letterSpacing: '.1em', fontSize: 6, marginTop: 6 }}>LINEA DEL FRESCO</div>
                </div>
                <div style={{ position: 'absolute', left: '-14%', bottom: '-6%' }}>
                  <Illustrazione nome="fragola" tinta={colore.campagna} altezza={88} opacita={.9} />
                </div>
                <img src="./brand/loghi/produttori-arborea.svg" alt=""
                     style={{ position: 'absolute', bottom: '4%', left: '50%', transform: 'translateX(-50%)', width: '20%' }} />
              </Pagina>
              <p className="pa-caption">1 · Copertina — icone, lockup 5:1, illustrazione a vivo</p>
            </div>

            <div>
              <Pagina bg={colore.sabbia}>
                <div style={{ position: 'absolute', inset: '10% 12% auto' }}>
                  <div style={{ color: colore.foglia, fontFamily: 'var(--pa-font-display)', fontSize: 13 }}>Chi siamo</div>
                  <div style={{ marginTop: 8, width: '72%' }}><Righe n={3} col={colore.campagna} /></div>
                  <div style={{ marginTop: 10, width: '80%' }}><Righe n={9} /></div>
                </div>
                <div style={{ position: 'absolute', right: '10%', bottom: '12%', display: 'grid', gap: 4, justifyItems: 'center' }}>
                  <Icone nomi={['carota', 'oliva-anello', 'semi', 'patata']} h={10} />
                </div>
              </Pagina>
              <p className="pa-caption">3 · Racconto — titolo foglia, colonna stretta, icone negli spazi vuoti</p>
            </div>

            <div>
              <Pagina bg={colore.foglia}>
                <div style={{ position: 'absolute', inset: '9% 10% auto' }}>
                  <div style={{ color: colore.sabbia, fontFamily: 'var(--pa-font-display)', fontWeight: 500, fontSize: 13, textTransform: 'uppercase' }}>Fragole</div>
                  <div style={{ marginTop: 6, width: '58%' }}><Righe n={5} col="rgba(255,247,241,.6)" /></div>
                  <div style={{ color: colore.melanzana, fontFamily: 'var(--pa-font-display)', fontWeight: 500, fontSize: 13, textTransform: 'uppercase', marginTop: 18 }}>Meloni</div>
                  <div style={{ marginTop: 6, width: '58%' }}><Righe n={4} col="rgba(255,247,241,.6)" /></div>
                </div>
                <div style={{ position: 'absolute', right: '8%', top: '20%', width: '34%', aspectRatio: 1, borderRadius: '50%', background: colore.pomodoro }} />
                <div style={{ position: 'absolute', right: '14%', top: '52%', width: '32%', aspectRatio: 1, borderRadius: '50%', background: colore.oro }} />
                <div style={{ position: 'absolute', left: '4%', bottom: '4%' }}>
                  <Illustrazione nome="melone" tinta={colore.campagna} altezza={54} opacita={.5} />
                </div>
              </Pagina>
              <p className="pa-caption">7 · Scheda — fondo foglia, titoli in tinte diverse, foto in cerchio</p>
            </div>

            <div>
              <Pagina bg={colore.campagna}>
                <div style={{ position: 'absolute', top: '20%', left: '22%', width: '56%' }}>
                  <Logo marchio="ortofrutta" altezza={26} tinta={colore.sabbia} />
                </div>
                <div style={{ position: 'absolute', inset: 'auto 20% 20%', display: 'flex', flexWrap: 'wrap', gap: 5, justifyContent: 'center' }}>
                  <Icone nomi={['carota', 'foglia', 'pomodoro', 'semi', 'pera', 'uva']} h={10} />
                </div>
                <div style={{ position: 'absolute', bottom: '5%', left: '39%', width: '22%' }}>
                  <Logo altezza={11} tinta={colore.sabbia} />
                </div>
              </Pagina>
              <p className="pa-caption">12 · Retro — negativo su campagna, firma della cooperativa</p>
            </div>
          </div>
        </div>

        <div className="dx-do-dont">
          <div className="dx-do">
            <h4>Le regole di Primoverde</h4>
            <ul>
              <li>Alterna sabbia e verde pagina per pagina.</li>
              <li>Un colore per titolo di prodotto, diverso dal precedente.</li>
              <li>Illustrazioni monocrome, grandi, spesso tagliate dal bordo.</li>
              <li>Foto di prodotto solo in cerchio.</li>
              <li>Il primo periodo della descrizione va in neretto.</li>
            </ul>
          </div>
          <div className="dx-dont">
            <h4>Fuori sistema</h4>
            <ul>
              <li>Fondo bianco pieno.</li>
              <li>Foto rettangolari dentro la scheda prodotto.</li>
              <li>Illustrazioni di animali.</li>
              <li>Testo a piena larghezza di pagina.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------ AGROZOO */}
      <section className="dx-section theme-agrozoo">
        <h2>Meridoro — scheda tecnica di prodotto</h2>
        <p>
          Stesso formato, impaginato opposto. La pagina è <strong>divisa in blocchi di colore
          pieno</strong> — carne e oro che si scambiano di posto da pagina a pagina — e la densità
          è alta: valori nutrizionali, ingredienti, dosi. La fotografia entra solo dentro un
          cerchio, come finestra sul prodotto. La texture di icone corre in filigrana sui fondi pieni.
        </p>

        <div className="dx-demo dx-demo--sabbia">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 'var(--pa-space-m)' }}>

            <div>
              <Pagina bg={colore.oro}>
                <div className="pa-texture" style={{
                  position: 'absolute', inset: '0 0 55% 0', background: colore.carne,
                  ['--pa-texture-src' as string]: 'url(./brand/texture/icone-agrozoo.svg)',
                  ['--pa-texture-size' as string]: '46px', ['--pa-texture-opacity' as string]: '.18',
                }}>
                  <div style={{ position: 'absolute', inset: '24% 12% auto', color: colore.oro,
                                fontFamily: 'var(--pa-font-display)', fontWeight: 500, fontSize: 11, lineHeight: 1.2 }}>
                    I nostri mangimi<br />per i tuoi bovini
                  </div>
                </div>
                <div style={{ position: 'absolute', top: '56%', left: '12%', width: '58%' }}>
                  <Logo marchio="agrozoo" altezza={13} tinta={colore.carne} />
                </div>
                <div style={{ position: 'absolute', left: '8%', bottom: '10%' }}>
                  <Illustrazione nome="bovino" famiglia="animali" tinta={colore.notte} altezza={40} />
                </div>
                <img src="./brand/loghi/produttori-arborea.svg" alt=""
                     style={{ position: 'absolute', bottom: '4%', left: '50%', transform: 'translateX(-50%)', width: '18%' }} />
              </Pagina>
              <p className="pa-caption">1 · Copertina — blocco carne su oro, illustrazione animale</p>
            </div>

            <div>
              <Pagina bg={colore.sabbia}>
                <div style={{ position: 'absolute', inset: '0 0 68% 0', background: colore.oro }} />
                <div style={{ position: 'absolute', inset: '12% 10% auto', color: colore.campagna,
                              fontFamily: 'var(--pa-font-display)', fontSize: 12 }}>Chi siamo</div>
                <div style={{ position: 'absolute', inset: '38% 10% auto' }}>
                  <div style={{ width: '86%' }}><Righe n={3} col={colore.campagna} /></div>
                  <div style={{ marginTop: 8 }}><Righe n={12} /></div>
                </div>
              </Pagina>
              <p className="pa-caption">3 · Istituzionale — fascia oro, titolo campagna, testo denso</p>
            </div>

            <div>
              <Pagina bg={colore.sabbia}>
                <div style={{ position: 'absolute', inset: '0 50% 60% 0', background: colore.carne }} />
                <div style={{ position: 'absolute', inset: '18% 8% auto 52%', color: colore.campagna,
                              fontFamily: 'var(--pa-font-display)', fontWeight: 500, fontSize: 11 }}>
                  Vantaggi<br /><span style={{ color: colore.carne, fontSize: 8 }}>di Fiberfeed</span>
                </div>
                <div style={{ position: 'absolute', inset: '40% 8% auto 52%' }}><Righe n={8} /></div>
                <div style={{ position: 'absolute', left: '-8%', top: '26%', width: '46%', aspectRatio: 1, borderRadius: '50%', background: colore.oro }} />
              </Pagina>
              <p className="pa-caption">5 · Argomenti — mezzo blocco pieno, macro in cerchio a vivo</p>
            </div>

            <div>
              <Pagina bg={colore.carne}>
                <div style={{ position: 'absolute', inset: '9% 8% auto', display: 'flex', gap: 5, alignItems: 'center' }}>
                  <div style={{ width: 20, height: 20, borderRadius: '50%', background: colore.oro }} />
                  <div>
                    <div style={{ color: colore.oro, fontFamily: 'var(--pa-font-display)', fontWeight: 500, fontSize: 11, textTransform: 'uppercase' }}>Fiberfeed</div>
                    <div style={{ color: colore.sabbia, fontFamily: 'var(--pa-font-display)', fontSize: 7 }}>Baby vitelli</div>
                  </div>
                </div>
                <div style={{ position: 'absolute', left: '8%', top: '30%', width: '38%', border: `1px solid ${colore.oro}`, borderRadius: 4, padding: 4 }}>
                  <div style={{ color: colore.oro, fontSize: 5, marginBottom: 3 }}>Valori nutrizionali</div>
                  <Righe n={4} col="rgba(255,247,241,.45)" />
                </div>
                <div style={{ position: 'absolute', right: '8%', top: '30%', width: '40%' }}>
                  <div style={{ color: colore.oro, fontSize: 5, marginBottom: 3 }}>Ingredienti</div>
                  <Righe n={9} col="rgba(255,247,241,.45)" />
                </div>
                <div style={{ position: 'absolute', right: '10%', bottom: '8%', width: '30%', aspectRatio: 1, borderRadius: '50%', background: colore.oro }} />
              </Pagina>
              <p className="pa-caption">8 · Scheda — fondo pieno, riquadro valori, foto in cerchio</p>
            </div>
          </div>
        </div>

        <div className="dx-do-dont">
          <div className="dx-do">
            <h4>Le regole di Meridoro</h4>
            <ul>
              <li>Ogni pagina è divisa in due blocchi pieni: carne e oro si scambiano.</li>
              <li>Titoli in campagna sui fondi chiari, in oro sui fondi carne.</li>
              <li>Valori nutrizionali sempre dentro un riquadro bordato, mai sciolti.</li>
              <li>Le foto sono finestre tonde, spesso tagliate dal margine.</li>
              <li>Texture in filigrana sui fondi pieni, mai sopra il testo.</li>
            </ul>
          </div>
          <div className="dx-dont">
            <h4>Fuori sistema</h4>
            <ul>
              <li>Foglia e arancio come colori dominanti.</li>
              <li>Illustrazioni di ortofrutta.</li>
              <li>Fondi bianchi pieni al posto della sabbia.</li>
              <li>Tabelle a fasce grigie alternate.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------- CORPORATE */}
      <section className="dx-section">
        <h2>Produttori Arborea — documento istituzionale</h2>
        <p>
          Formato 16:9, tono sobrio. Campagna pieno in apertura e in chiusura, pagine interne
          chiare e distese. Una texture di icone in oro corre in filigrana sul bordo destro e
          tiene insieme la sequenza. I numeri chiave sono il momento più visivo del documento:
          cifre grandi che alternano i colori dato.
        </p>

        <div className="dx-demo dx-demo--sabbia">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 'var(--pa-space-m)' }}>

            <div>
              <Pagina ratio="16 / 9" bg={colore.campagna}>
                <div className="pa-texture" style={{
                  position: 'absolute', right: 0, top: 0, bottom: 0, width: '34%',
                  ['--pa-texture-src' as string]: 'url(./brand/texture/icone-rada.svg)',
                  ['--pa-texture-size' as string]: '58px', ['--pa-texture-opacity' as string]: '.3',
                }} />
                <div style={{ position: 'absolute', left: '8%', top: '34%', width: '38%' }}>
                  <Logo altezza={22} tinta={colore.oro} />
                </div>
              </Pagina>
              <p className="pa-caption">1 · Copertina — campagna pieno, marchio in negativo, texture sul lato</p>
            </div>

            <div>
              <Pagina ratio="16 / 9" bg={colore.sabbia}>
                <div style={{ position: 'absolute', inset: '14% 8% auto', display: 'grid',
                              gridTemplateColumns: 'repeat(3, 1fr)', rowGap: 14, columnGap: 10 }}>
                  {[['92', colore.foglia], ['290', colore.arancio], ['150', colore.campagna],
                    ['10', colore.foglia], ['15', colore.arancio], ['12', colore.campagna]].map(([n, c], i) => (
                    <div key={i}>
                      <div style={{ color: c, fontFamily: 'var(--pa-font-display)', fontSize: 17, lineHeight: 1 }}>{n}</div>
                      <div style={{ marginTop: 3 }}><Righe n={2} /></div>
                    </div>
                  ))}
                </div>
              </Pagina>
              <p className="pa-caption">4 · Numeri chiave — griglia 3×2, colori dato alternati</p>
            </div>

            <div>
              <Pagina ratio="16 / 9" bg={colore.sabbia}>
                <div style={{ position: 'absolute', inset: '12% 8% auto', color: colore.campagna,
                              fontFamily: 'var(--pa-font-display)', fontSize: 12 }}>I nostri valori</div>
                <div style={{ position: 'absolute', inset: '38% 8% auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                  {['Cooperazione', 'Qualità'].map(t => (
                    <div key={t}>
                      <div style={{ color: colore.campagna, fontFamily: 'var(--pa-font-display)', fontSize: 9 }}>{t}</div>
                      <div style={{ marginTop: 4 }}><Righe n={3} /></div>
                    </div>
                  ))}
                </div>
              </Pagina>
              <p className="pa-caption">6 · Valori — due colonne, titolo di sezione ripetuto</p>
            </div>

            <div>
              <Pagina ratio="16 / 9" bg={colore.sabbia}>
                <div style={{ position: 'absolute', inset: '0 0 0 58%', background: colore.foglia }} />
                <div style={{ position: 'absolute', inset: '16% auto auto 8%', width: '44%' }}>
                  <div style={{ color: colore.campagna, fontFamily: 'var(--pa-font-display)', fontSize: 11, marginBottom: 8 }}>I nostri brand</div>
                  <img src="./brand/loghi/primoverde-foglia.svg" alt="" style={{ width: '52%', marginBottom: 8 }} />
                  <Righe n={7} />
                </div>
              </Pagina>
              <p className="pa-caption">9 · Marchio — logo e testo a sinistra, immagine a vivo a destra</p>
            </div>
          </div>
        </div>

        <div className="dx-note">
          <p>
            <strong>Un solo contenitore per tutto.</strong> Copertina, pagine interne e chiusura
            usano lo stesso margine sinistro: è quello che tiene insieme un documento di sedici
            pagine molto diverse fra loro. Le fasce di colore vanno a vivo, il contenuto no.
          </p>
        </div>
      </section>


      {/* ---------------------------------------------------------- CAMPAGNE */}
      <section className="dx-section">
        <h2>Campagne e materiali di fiera</h2>
        <p>
          Il formato dove l’identità corre di più. Qui le regole si allentano sui componenti
          ma si irrigidiscono sulla composizione: grandi campiture organiche tagliate dal bordo,
          un titolo che occupa mezza superficie, e un solo soggetto fotografico che la rompe.
        </p>

        <div className="dx-demo dx-demo--sabbia">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'var(--pa-space-m)' }}>

            {/* Primoverde — campagna prodotto */}
            <div>
              <Pagina ratio="4 / 5" bg={colore.foglia}>
                <div style={{ position: 'absolute', inset: 'auto 0 0 0', height: '46%', background: colore.campagna }} />
                <div style={{ position: 'absolute', left: 0, right: 0, top: '48%', height: 2, background: colore.campagna, opacity: .5 }} />
                <div style={{ position: 'absolute', inset: '26% 10% auto', color: '#fff',
                              fontFamily: 'var(--pa-font-display)', fontWeight: 500, fontSize: 22, lineHeight: 1.05 }}>
                  Cogli<br />l’ottimo
                </div>
                <div style={{ position: 'absolute', right: '14%', top: '14%', width: '38%', aspectRatio: 1,
                              borderRadius: '50%', background: colore.pomodoro }} />
                <div style={{ position: 'absolute', inset: 'auto 18% 22%' }}><Righe n={3} col="rgba(255,255,255,.55)" /></div>
                <div style={{ position: 'absolute', bottom: '7%', left: '38%', width: '24%' }}>
                  <Logo altezza={12} tinta={colore.sabbia} />
                </div>
              </Pagina>
              <p className="pa-caption">
                <strong>Primoverde.</strong> Fondo a due toni, foglia sopra e campagna sotto, separati
                da una fascia di paesaggio illustrato al tratto. Titolo bianco enorme; la foto del
                prodotto, scontornata e tenuta in mano, si sovrappone al titolo e lo rompe.
              </p>
            </div>

            {/* Rossopregio — pannello fiera */}
            <div>
              <Pagina ratio="4 / 5" bg={colore.oro}>
                <div style={{ position: 'absolute', left: '-18%', top: '-10%', width: '54%', aspectRatio: 1,
                              borderRadius: '50%', background: colore.carne }} />
                <div style={{ position: 'absolute', right: '-12%', bottom: '-14%', width: '56%', aspectRatio: 1,
                              borderRadius: '50%', background: colore.carne }} />
                <img src="./brand/loghi/rossopregio.svg" alt=""
                     style={{ position: 'absolute', left: '10%', top: '38%', width: '46%' }} />
                <div style={{ position: 'absolute', right: '8%', top: '16%', width: '40%', aspectRatio: 1,
                              borderRadius: '50%', background: colore.sabbia, display: 'grid', placeItems: 'center',
                              padding: 8, textAlign: 'center', color: colore.carne,
                              fontFamily: 'var(--pa-font-display)', fontWeight: 500, fontSize: 7, lineHeight: 1.2 }}>
                  LA FILIERA CERTIFICATA
                </div>
                <div style={{ position: 'absolute', inset: 'auto 10% 12% 10%' }}><Righe n={4} col="rgba(141,25,38,.45)" /></div>
              </Pagina>
              <p className="pa-caption">
                <strong>Rossopregio.</strong> Fondo oro con grandi cerchi carne tagliati dal bordo.
                Il claim vive dentro un cerchio sabbia, maiuscolo e centrato. Il wordmark è grande
                e sta sull’oro, mai dentro il cerchio.
              </p>
            </div>

            {/* Meridoro — pannello fiera */}
            <div>
              <Pagina ratio="4 / 5" bg={colore.campagna}>
                <div style={{ position: 'absolute', right: '-16%', top: '10%', width: '62%', height: '70%',
                              borderRadius: '50%', background: colore.sabbia }} />
                <img src="./brand/loghi/meridoro.svg" alt=""
                     style={{ position: 'absolute', left: '8%', top: '16%', width: '48%' }} />
                <div style={{ position: 'absolute', inset: '34% auto auto 8%', width: '46%' }}>
                  <Righe n={4} col="rgba(255,247,241,.55)" />
                </div>
                <div style={{ position: 'absolute', right: '4%', top: '24%', width: '38%', aspectRatio: 1,
                              borderRadius: '50%', background: colore.campagna }} />
                <div style={{ position: 'absolute', left: '10%', bottom: '14%', display: 'flex', gap: 5 }}>
                  <Icone nomi={['semi', 'foglia', 'oliva-anello']} h={12} />
                </div>
                <div style={{ position: 'absolute', left: '8%', right: '30%', bottom: '10%', height: 1.5,
                              background: colore.sabbia, opacity: .6 }} />
              </Pagina>
              <p className="pa-caption">
                <strong>Meridoro.</strong> Fondo campagna con una grande forma organica sabbia sulla
                destra. Wordmark in oro, foto in cerchio dentro la forma chiara, icone sparse in
                basso e una linea sottile continua che lega gli elementi.
              </p>
            </div>
          </div>
        </div>

        <div className="dx-do-dont">
          <div className="dx-do">
            <h4>La composizione di campagna</h4>
            <ul>
              <li>Una sola idea per superficie: un titolo, un soggetto, un claim.</li>
              <li>Campiture organiche grandi, tagliate dal bordo — mai riquadri centrati.</li>
              <li>Il soggetto fotografico è scontornato e si sovrappone al titolo.</li>
              <li>Il lockup con l’endorser chiude sempre la composizione.</li>
            </ul>
          </div>
          <div className="dx-dont">
            <h4>Fuori sistema</h4>
            <ul>
              <li>Titoli su più di tre righe o allineati a destra.</li>
              <li>Fotografia in un rettangolo con bordo.</li>
              <li>Più di due campiture di colore nella stessa superficie.</li>
              <li>Testo lungo: la campagna non è una brochure.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------------- STAMPATI */}
      <section className="dx-section">
        <h2>Stampati e social</h2>
        <p>
          La carta intestata è sabbia con il marchio in campagna; l’oro fa da accento al piede.
          I biglietti da visita usano i <strong>colori secondari</strong> della palette per creare
          giocosità e varietà — è l’unico contesto in cui più tinte di segmento convivono, perché
          convivono su pezzi separati, non nella stessa superficie. Sui social l’identità si gioca
          alle dimensioni minime: il fondamento minimalista deve reggere anche a bassa risoluzione.
        </p>
        <div className="dx-demo dx-demo--sabbia">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: 'var(--pa-space-s)' }}>
            {[colore.campagna, colore.carne, colore.pomodoro, colore.melanzana, colore.foglia, colore.arancio].map(c => (
              <div key={c}>
                <Pagina ratio="85 / 55" bg={c}>
                  <div style={{ position: 'absolute', left: '10%', top: '16%', width: '52%' }}>
                    <Logo altezza={16} tinta={colore.sabbia} />
                  </div>
                </Pagina>
              </div>
            ))}
          </div>
          <p className="pa-caption" style={{ marginTop: 'var(--pa-space-s)' }}>
            Biglietti da visita — marchio in negativo sui colori secondari della palette.
          </p>
        </div>
      </section>
    </>
  );
}
