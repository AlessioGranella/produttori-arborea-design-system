import manifest from '../../manifest.json';
import { Illustrazione } from '../../components/Illustrazione';
import { IconaIllustrazione } from '../../components/IconaIllustrazione';
import { colore } from '../../tokens';
import { Codice } from '../Codice';
import { asset, assetUrl } from '../../asset';

const TINTE = [
  ['campagna', colore.campagna], ['foglia', colore.foglia],
  ['carne', colore.carne], ['oro', colore.oro], ['melanzana', colore.melanzana],
] as const;

export function Asset() {
  return (
    <>
      <section className="dx-section">
        <div className="dx-h">
          <span className="pa-chip pa-kicker">Marca · brandbook 6</span>
          <h1>Icone, illustrazioni, texture</h1>
          <p className="pa-lead">
            Due repertori e un modo di combinarli. Le <strong>icone</strong> sono geometrie
            minimali e piene; le <strong>illustrazioni</strong> sono al tratto, monocromatiche,
            dal sapore vagamente vintage. Sovrapposte, uniscono passato e presente in una cifra
            distintiva — ed è quella la firma del sistema, non un accostamento facoltativo.
          </p>
        </div>
      </section>

      <section className="dx-section">
        <h2>Icone</h2>
        <p>
          Sedici forme, già colorate nella main palette. Rafforzano l’attenzione del marchio per
          la semplicità e la vivacità, e vivono ovunque: packaging, sito, materiali stampati.
          Sono vettoriali, quindi scalano senza limiti; la misura tipica è fra 16 e 64&nbsp;px.
        </p>
        <div className="dx-tiles">
          {manifest.icone.map(n => (
            <div className="dx-tile" key={n}>
              <img src={asset(`brand/icone/${n}.svg`)} alt={n} />
              <span>{n}</span>
            </div>
          ))}
        </div>
        <Codice>{`<img src="/brand/icone/⟦carota⟧.svg" alt="" width="32">`}</Codice>
      </section>

      <section className="dx-section">
        <h2>Texture di icone</h2>
        <p>
          «Il minimalismo progettuale rende possibile anche la creazione di texture». Le stesse
          icone, ripetute fitte, diventano fondo. Quattro mattonelle pronte, tutte ripetibili
          senza giunte: la densità si regola con la dimensione di sfondo.
        </p>
        <div className="pa-grid">
          {manifest.texture.map(n => (
            <div className="pa-col-3" key={n}>
              <div style={{ borderRadius: 'var(--pa-radius-l)', overflow: 'hidden', border: '1px solid var(--pa-border)' }}>
                <div className="pa-texture" style={{
                  height: 170, background: 'var(--pa-sabbia)',
                  ['--pa-texture-src' as string]: assetUrl(`brand/texture/${n}.svg`),
                  ['--pa-texture-size' as string]: n.includes('fitta') ? '90px' : '120px',
                  ['--pa-texture-opacity' as string]: '1',
                }} />
                <div style={{ padding: 'var(--pa-space-s) var(--pa-space-m)', background: 'var(--pa-bianco)' }}>
                  <strong className="pa-small">{n.replace('icone-', '')}</strong>
                </div>
              </div>
            </div>
          ))}
        </div>
        <Codice>{`<section class="pa-band ⟦pa-texture⟧" style="
  --pa-texture-src: url(/brand/texture/icone-fitta.svg);
  --pa-texture-size: 120px;
  --pa-texture-opacity: .35">
  <div class="pa-band__inner">…</div>
</section>`}</Codice>
        <div className="dx-note">
          <p>
            La texture è una carta da parati: sta dietro, non davanti. Sopra un testo va tenuta
            sotto il 35% di opacità, e comunque mai a contrasto pieno con il colore del testo.
          </p>
        </div>
      </section>

      <section className="dx-section">
        <h2>Illustrazioni</h2>
        <p>
          Trentadue soggetti — ventiquattro di ortofrutta, otto di animali — al tratto e sempre
          monocromatici. I master sono PNG neri con canale alfa e la tinta arriva da CSS: una
          sola risorsa serve tutte le tinte di brand.
        </p>

        <div className="dx-demo dx-row" style={{ justifyContent: 'space-around' }}>
          {TINTE.map(([nome, hex]) => (
            <div key={nome} style={{ textAlign: 'center' }}>
              <Illustrazione nome="carota" tinta={hex} altezza={130} />
              <div className="pa-caption">{nome}</div>
            </div>
          ))}
        </div>

        <h3>Ortofrutta</h3>
        <div className="dx-tiles">
          {manifest.illustrazioni.ortofrutta.map(n => (
            <div className="dx-tile" key={n}>
              <Illustrazione nome={n} tinta={colore.campagna} altezza={76} />
              <span>{n}</span>
            </div>
          ))}
        </div>

        <h3 style={{ marginTop: 'var(--pa-space-xl)' }}>Animali</h3>
        <div className="dx-tiles">
          {manifest.illustrazioni.animali.map(n => (
            <div className="dx-tile" key={n}>
              <Illustrazione nome={n} famiglia="animali" tinta={colore.carne} altezza={76} />
              <span>{n}</span>
            </div>
          ))}
        </div>

        <Codice>{`<span class="⟦pa-illu⟧" style="
  --pa-illu-src: url(/brand/illustrazioni/ortofrutta/carota.png);
  --pa-illu-tint: var(--pa-foglia);
  width: 240px; height: 240px"></span>`}</Codice>
      </section>

      <section className="dx-section">
        <h2>Icona + illustrazione</h2>
        <p>
          Nell’applicazione di prodotto l’icona incontra l’illustrazione. Le geometrie minimali e
          le campiture si sovrappongono al tratto vintage, unendo passato e presente. È la
          combinazione che accompagna la narrazione dei prodotti su ogni touchpoint.
        </p>
        <div className="dx-demo dx-demo--sabbia dx-row" style={{ justifyContent: 'space-around', paddingBlock: 'var(--pa-space-2xl)' }}>
          <IconaIllustrazione illustrazione="fragola" icone={['fragola', 'foglia']} tinta={colore.campagna} dimensione={190} />
          <IconaIllustrazione illustrazione="pomodori" icone={['pomodoro', 'semi']} tinta={colore.pomodoro} dimensione={190} />
          <IconaIllustrazione illustrazione="bovino" famiglia="animali" icone={['prugna', 'foglia-contorno']} tinta={colore.carne} dimensione={190} />
        </div>
        <Codice>{`import { IconaIllustrazione } from '@pa/design-system';

<IconaIllustrazione
  illustrazione="fragola"
  icone={['fragola', 'foglia']}      // massimo due: una in alto, una in basso
  tinta={colore.campagna} />`}</Codice>

        <div className="dx-do-dont">
          <div className="dx-do">
            <h4>Sempre</h4>
            <ul>
              <li>Illustrazione in una sola tinta, presa dal segmento attivo.</li>
              <li>Ortofrutta con Primoverde; animali con Rossopregio e Meridoro.</li>
              <li>Grandi: sotto i 120 px il tratteggio si impasta.</li>
              <li>Al massimo due icone sovrapposte, ai margini, non al centro.</li>
            </ul>
          </div>
          <div className="dx-dont">
            <h4>Mai</h4>
            <ul>
              <li>Illustrazioni a più colori o con sfumature.</li>
              <li>Appoggiarle sopra una fotografia.</li>
              <li>Coprire il soggetto con le icone: la sovrapposizione è un accento.</li>
              <li>Deformarne le proporzioni per riempire uno spazio.</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
