import { Illustrazione } from './Illustrazione';
import { asset } from '../asset';
import type { Famiglia } from '../tokens';

/**
 * Icona + illustrazione — brandbook 6.2. La geometria minimale si sovrappone
 * all'illustrazione al tratto: è la firma del sistema, non un accostamento
 * facoltativo.
 */
export function IconaIllustrazione({
  illustrazione, famiglia = 'ortofrutta', icone = [], tinta, dimensione = 220,
}: {
  illustrazione: string; famiglia?: Famiglia;
  icone?: string[]; tinta?: string; dimensione?: number;
}) {
  const pos = ['pa-icon-illu__tl', 'pa-icon-illu__br'];
  return (
    <span className="pa-icon-illu" style={{ width: dimensione, height: dimensione }}>
      <Illustrazione nome={illustrazione} famiglia={famiglia} tinta={tinta} altezza={dimensione} />
      {icone.slice(0, 2).map((n, i) => (
        <img key={n} className={pos[i]} src={asset(`brand/icone/${n}.svg`)} alt="" />
      ))}
    </span>
  );
}
