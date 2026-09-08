import { Logo } from './Logo';
import type { Segmento } from '../tokens';

export function Footer({ marchio = 'arborea' }: { marchio?: Segmento }) {
  return (
    <footer className="pa-footer">
      <div className="pa-footer__inner">
        <div className="pa-footer__logo"><Logo marchio={marchio} altezza={56} /></div>
        <div>
          <h4>Sede</h4>
          <ul>
            <li>Strada 14 Ovest</li>
            <li>09092 Arborea (OR)</li>
            <li>P.IVA 00042360958</li>
          </ul>
        </div>
        <div>
          <h4>Contatti</h4>
          <ul>
            <li><a href="tel:+390783803 21">(+39) 0783 80321</a></li>
            <li><a href="mailto:info@produttoriarborea.it">info@produttoriarborea.it</a></li>
            <li><a href="https://www.produttoriarborea.it">produttoriarborea.it</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
