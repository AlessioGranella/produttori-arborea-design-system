/** Indice della galleria: materiali applicati, raggruppati per famiglia. */
export type Voce = {
  file: string; titolo: string; segmento?: 'ortofrutta' | 'carni' | 'agrozoo' | 'corporate';
  nota?: string; render?: boolean;   // render = immagine generata, non fotografia
};

export const galleria: { gruppo: string; testo: string; voci: Voce[] }[] = [
  {
    gruppo: 'Campagne',
    testo: 'Una sola idea per superficie, campiture grandi tagliate dal bordo, il soggetto scontornato che rompe il titolo. Il lockup con l’endorser chiude sempre.',
    voci: [
      { file: 'campagna-anguria-banner', titolo: 'Cogli l’ottimo — anguria Sugar', segmento: 'ortofrutta' },
      { file: 'campagna-carote-banner', titolo: 'Cogli l’ottimo — carote baby', segmento: 'ortofrutta' },
      { file: 'campagna-carote-post', titolo: 'Post 4:5 — anguria', segmento: 'ortofrutta' },
      { file: 'campagna-billboard-carota', titolo: 'Billboard 6×3 — carota', segmento: 'ortofrutta' },
      { file: 'campagna-billboard-rossopregio', titolo: 'Come ti pare e brace', segmento: 'carni' },
      { file: 'campagna-billboard-meridoro', titolo: 'La buona crescita', segmento: 'agrozoo' },
    ],
  },
  {
    gruppo: 'Packaging',
    testo: 'Il marchio alle dimensioni reali della produzione: balloni, big bag, pallet, rinfusa. È qui che si vede se il segno regge la scala e i fondi pieni.',
    voci: [
      { file: 'packaging-fiberfeed-balletta', titolo: 'Fiberfeed — balletta', segmento: 'agrozoo' },
      { file: 'packaging-humifeed-balletta', titolo: 'Humifeed — balletta', segmento: 'agrozoo' },
      { file: 'packaging-pelletfeed-bovini', titolo: 'Pelletfeed bovini — sacco', segmento: 'agrozoo' },
      { file: 'packaging-bigbag', titolo: 'Big bag', segmento: 'agrozoo' },
      { file: 'packaging-pallet-fiberfeed', titolo: 'Pallet Fiberfeed', segmento: 'agrozoo' },
      { file: 'packaging-rinfusa-camion', titolo: 'Rinfusa — camion', segmento: 'agrozoo' },
      { file: 'etichetta-rossopregio', titolo: 'Etichetta Rossopregio', segmento: 'carni' },
    ],
  },
  {
    gruppo: 'Prodotto in scena',
    testo: 'Il registro «prodotto» della fotografia di brand: composizioni geometriche, mani, preparazione. Luce naturale, vista dall’alto, tavolo sgombro.',
    voci: [
      { file: 'mockup-aurora-tavolo', titolo: 'Aurora — tavolo', segmento: 'ortofrutta', render: true },
      { file: 'mockup-aurora-tavolo-2', titolo: 'Aurora — luce di finestra', segmento: 'ortofrutta', render: true },
      { file: 'mockup-aurora-coricato', titolo: 'Aurora — busta coricata', segmento: 'ortofrutta', render: true },
      { file: 'mockup-iceberg-tavolo', titolo: 'Iceberg — ciotola', segmento: 'ortofrutta', render: true },
      { file: 'mockup-iceberg-tavolo-2', titolo: 'Iceberg — piano cucina', segmento: 'ortofrutta', render: true },
      { file: 'mockup-carote-cucina', titolo: 'Carote — tagliere', segmento: 'ortofrutta', render: true },
      { file: 'mockup-packaging-tavolo', titolo: 'Packaging — vista dall’alto', segmento: 'ortofrutta', render: true },
      { file: 'mockup-spiaggia', titolo: 'Anguria Sugar — spiaggia', segmento: 'ortofrutta', render: true },
      { file: 'social-anguria-1', titolo: 'Anguria nera — social', segmento: 'ortofrutta', render: true },
      { file: 'social-anguria-2', titolo: 'Anguria nera — social 2', segmento: 'ortofrutta', render: true },
    ],
  },
  {
    gruppo: 'Fiera',
    testo: 'La grande dimensione. Forme organiche a tutta parete, wordmark enorme, claim dentro un cerchio, e una linea sottile che lega gli elementi.',
    voci: [
      { file: 'fiera-primoverde-rossopregio', titolo: 'Stand Primoverde e Rossopregio 304×242' },
      { file: 'fiera-meridoro', titolo: 'Stand Meridoro 304×242', segmento: 'agrozoo' },
      { file: 'fiera-meridoro-2', titolo: 'Stand Meridoro 206×242', segmento: 'agrozoo' },
    ],
  },
  {
    gruppo: 'Stampati',
    testo: 'I documenti lunghi: catalogo, scheda tecnica, profilo istituzionale. Le loro strutture sono codificate nelle ricette di impaginato.',
    voci: [
      { file: 'stampato-primoverde-copertina', titolo: 'Primoverde — Linea del fresco', segmento: 'ortofrutta' },
      { file: 'stampato-meridoro-copertina', titolo: 'Meridoro — Bovini', segmento: 'agrozoo' },
      { file: 'stampato-company-profile', titolo: 'Company profile', segmento: 'corporate' },
    ],
  },
];
