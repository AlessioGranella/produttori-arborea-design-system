import { useEffect, useState } from 'react';
import { asset } from '../asset';
import { Inizio } from './sections/Inizio';
import { Colore } from './sections/Colore';
import { Tipografia } from './sections/Tipografia';
import { SpazioGriglia } from './sections/SpazioGriglia';
import { Marchi } from './sections/Marchi';
import { Asset } from './sections/Asset';
import { Galleria } from './sections/Galleria';
import { Componenti } from './sections/Componenti';
import { Impaginati } from './sections/Impaginati';

const NAV = [
  { gruppo: 'Partire da qui', voci: [{ id: 'inizio', label: 'Come si usa', el: <Inizio /> }] },
  { gruppo: 'Fondamenta', voci: [
      { id: 'colore', label: 'Colore', el: <Colore /> },
      { id: 'tipografia', label: 'Tipografia', el: <Tipografia /> },
      { id: 'spazio', label: 'Spazio e griglia', el: <SpazioGriglia /> },
  ]},
  { gruppo: 'Marca', voci: [
      { id: 'marchi', label: 'I quattro marchi', el: <Marchi /> },
      { id: 'asset', label: 'Icone, illustrazioni, texture', el: <Asset /> },
      { id: 'galleria', label: 'Galleria', el: <Galleria /> },
  ]},
  { gruppo: 'Costruire', voci: [
      { id: 'componenti', label: 'Componenti', el: <Componenti /> },
      { id: 'impaginati', label: 'Ricette di impaginato', el: <Impaginati /> },
  ]},
];

const VOCI = NAV.flatMap(g => g.voci);
const daHash = () => {
  const id = window.location.hash.replace('#', '');
  return VOCI.some(v => v.id === id) ? id : 'inizio';
};

export function App() {
  const [attiva, setAttiva] = useState(daHash);

  // La sezione vive nell'hash: così ogni pagina della libreria è linkabile
  // e il tasto "indietro" del browser funziona.
  useEffect(() => {
    const onHash = () => setAttiva(daHash());
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  const corrente = VOCI.find(v => v.id === attiva)!;
  return (
    <div className="dx">
      <nav className="dx-nav">
        <div className="dx-nav__brand">
          <img src={asset('brand/loghi/produttori-arborea-mono.svg')} alt="Produttori Arborea" />
          <small>Design System</small>
        </div>
        {NAV.map(g => (
          <div className="dx-nav__group" key={g.gruppo}>
            <h5>{g.gruppo}</h5>
            {g.voci.map(v => (
              <a key={v.id} href={`#${v.id}`} className="dx-nav__link"
                 aria-current={attiva === v.id}
                 onClick={() => { window.scrollTo(0, 0); }}>
                {v.label}
              </a>
            ))}
          </div>
        ))}
      </nav>
      <main className="dx-main">{corrente.el}</main>
    </div>
  );
}
