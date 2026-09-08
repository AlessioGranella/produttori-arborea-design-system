import manifest from '../manifest.json';
import { asset } from '../asset';

const ETICHETTE: Record<string, string> = {
  'produttori-arborea': 'Wordmark',
  'produttori-arborea-cerchio': 'Circolare',
  'produttori-arborea-glifo': 'Glifo',
  'primoverde': 'Primoverde · campagna',
  'primoverde-foglia': 'Primoverde · foglia',
  'rossopregio': 'Rossopregio',
  'meridoro': 'Meridoro',
};

/** Ogni logo con i suoi formati: vettoriale, e raster nelle tre versioni. */
export function GrigliaLoghi() {
  return (
    <div className="dx-loghi">
      {manifest.loghi.map(n => (
        <figure className="dx-logo" key={n}>
          <div className="dx-logo__prova">
            <img src={asset(`brand/loghi/${n}.svg`)} alt={ETICHETTE[n] ?? n} />
          </div>
          <div className="dx-logo__prova dx-logo__prova--scuro">
            <img src={asset(`brand/loghi/${n}-bianco.png`)} alt="" />
          </div>
          <figcaption>
            <strong>{ETICHETTE[n] ?? n}</strong>
            <code>{n}</code>
            <span className="dx-dl">
              <a className="dx-dl__link" download href={asset(`brand/loghi/${n}.svg`)}>SVG</a>
              <a className="dx-dl__link" download href={asset(`brand/loghi/${n}.png`)}>PNG</a>
              <a className="dx-dl__link" download href={asset(`brand/loghi/${n}-nero.png`)}>PNG nero</a>
              <a className="dx-dl__link" download href={asset(`brand/loghi/${n}-bianco.png`)}>PNG bianco</a>
            </span>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
