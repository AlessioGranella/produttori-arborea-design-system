/**
 * Indice dei mockup di packaging Primoverde.
 *
 * Gli originali del cliente stanno in public/brand/packaging/<linea>/<slug>.<ext>,
 * le anteprime (ritagliate, 720 px) in <linea>/anteprima/<slug>.webp. Entrambi li
 * genera scripts/packaging.py: quando arriva un mockup nuovo si aggiunge lì e qui.
 */
export type Mockup = { slug: string; titolo: string; ext: 'png' | 'jpg'; px: string; mb: string };
export type Linea = { id: string; titolo: string; testo: string; voci: Mockup[] };

const png = (slug: string, titolo: string, px: string, mb: string): Mockup => ({ slug, titolo, ext: 'png', px, mb });
const jpg = (slug: string, titolo: string, px: string, mb: string): Mockup => ({ slug, titolo, ext: 'jpg', px, mb });

export const linee: Linea[] = [
  {
    id: 'quarta-gamma',
    titolo: 'Quarta gamma',
    testo: 'Insalate in busta e triti in vaschetta. Fondo sabbia, nome del prodotto spezzato in sillabe, illustrazione al tratto della referenza, finestra trasparente sul contenuto.',
    voci: [
      png('aurora', 'Aurora', '4000×1919', '1,3'),
      png('campidanese', 'Campidanese', '4000×1919', '1,4'),
      png('carote-baby', 'Carote baby', '4928×3264', '3,1'),
      png('carote-julienne', 'Carote julienne', '4000×1919', '0,8'),
      png('croccante', 'Croccante', '4000×1919', '1,6'),
      png('iceberg', 'Iceberg', '4000×1919', '1,6'),
      png('misto-soffritto', 'Misto soffritto', '4000×1919', '2,7'),
      png('prezzemolo-aglio-tritati', 'Prezzemolo e aglio tritati', '4000×1919', '3,0'),
      png('prezzemolo-tritato', 'Prezzemolo tritato', '4000×1919', '2,1'),
      png('prezzemolo-tritato-2', 'Prezzemolo tritato — variante', '4000×1919', '2,5'),
      png('rucola', 'Rucola', '4000×1919', '1,5'),
      png('smeralda', 'Smeralda', '4000×1919', '1,5'),
    ],
  },
  {
    id: 'linea-del-fresco',
    titolo: 'Linea del fresco',
    testo: 'Frutta e ortaggi interi: vaschette, retine, cartellini, bollini. Ogni formato porta il marchio Primoverde e la stessa gerarchia di nome e illustrazione.',
    voci: [
      png('anguria-baby', 'Anguria baby', '3374×2835', '7,4'),
      png('anguria-baby-2', 'Anguria baby — variante', '3374×2835', '7,8'),
      png('anguria-sugar', 'Anguria Sugar', '2835×2835', '2,5'),
      png('carote', 'Carote', '3024×4032', '4,2'),
      png('fragole', 'Fragole', '6667×4342', '2,4'),
      png('funghi', 'Funghi', '1535×2048', '2,2'),
      png('melone', 'Melone', '1060×997', '1,1'),
      png('patate-novelle', 'Patate novelle', '2000×2000', '2,1'),
      png('patate-novelle-inverno', 'Patate novelle d’inverno', '2000×2000', '2,1'),
      png('patate-rosse', 'Patate rosse', '2000×2000', '2,0'),
      png('pomodoro-ciliegino', 'Pomodoro ciliegino', '1000×654', '0,8'),
      png('radicchio-tondo', 'Radicchio tondo', '4000×1919', '2,0'),
    ],
  },
  {
    id: 'patate',
    titolo: 'Patate — sacchi in retina',
    testo: 'I sacchi con fascia di cartone, fronte e retro affiancati. Sono le tavole inviate al cliente per approvazione, su fondo bianco e non scontornate.',
    voci: [
      jpg('patate-gialle-1-5kg', 'Patate gialle 1,5 kg', '7087×4724', '2,1'),
      jpg('patate-novelle-1-5kg', 'Patate novelle 1,5 kg', '7087×4724', '2,1'),
      jpg('patate-novelle-2-5kg', 'Patate novelle 2,5 kg', '7087×4724', '2,0'),
      jpg('patate-novelle-inverno-2-5kg', 'Patate novelle d’inverno 2,5 kg', '7087×4724', '2,0'),
      jpg('patate-rosse-2-5kg', 'Patate rosse 2,5 kg', '7087×4724', '2,0'),
      jpg('patate-novelle-4-5kg', 'Patate novelle 4-5 kg', '8268×7087', '3,4'),
    ],
  },
];

export const originale = (l: Linea, m: Mockup) => `brand/packaging/${l.id}/${m.slug}.${m.ext}`;
export const anteprima = (l: Linea, m: Mockup) => `brand/packaging/${l.id}/anteprima/${m.slug}.webp`;
