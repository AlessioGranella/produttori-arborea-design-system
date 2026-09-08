/**
 * PRODUTTORI ARBOREA — token in JavaScript.
 * Specchio di src/styles/colors_and_type.css. Se cambi un valore lì, cambialo qui.
 * Serve a grafici, generatori di immagini e script che non leggono CSS.
 *
 * I valori della main palette vengono dal brandbook ufficiale (Minsait Xtudio):
 * sono normativi, non si ritoccano.
 */

/** Main palette — brandbook 4.1. Dodici colori con nome proprio. */
export const colore = {
  arancio:   '#F18700',
  foglia:    '#95C11F',
  oro:       '#D7B46A',
  pomodoro:  '#D20A11',
  notte:     '#000E1E',
  legno:     '#3A2828',
  ferro:     '#535A60',
  argento:   '#B6C0C6',
  sabbia:    '#FFF7F1',
  campagna:  '#004928',
  melanzana: '#581D53',
  carne:     '#8D1926',
} as const;

/** Gli stessi colori in CMYK, per la stampa. Brandbook 4.1. */
export const cmyk: Record<keyof typeof colore, [number, number, number, number]> = {
  arancio: [0, 55, 100, 0],   foglia: [50, 0, 100, 0],    oro: [0, 20, 60, 20],
  pomodoro: [0, 100, 100, 10], notte: [100, 60, 30, 90],  legno: [60, 70, 60, 70],
  ferro: [30, 15, 10, 70],    argento: [10, 0, 0, 30],    sabbia: [0, 4, 6, 0],
  campagna: [100, 50, 100, 40], melanzana: [70, 100, 30, 30], carne: [30, 100, 80, 30],
};

/**
 * Colore di progetto — Arbolat: UN solo colore proprio.
 * Non è nella main palette del brandbook: nasce con il progetto «fattoria etica
 * e sostenibile» e vale solo lì. Evoca il latte e l'acqua, ed è la tinta della
 * goccia che sostituisce la O del marchio.
 *
 * I secondari di Arbolat non stanno qui perché non sono suoi: sono foglia,
 * campagna e sabbia, presi tali e quali dalla main palette. Vedi
 * `paletteSegmento.arbolat`.
 */
export const acqua = '#29B8CE';

/** Derivati per l'interfaccia — non stanno nel brandbook. */
export const ui = {
  campagnaScuro: '#002E19', campagnaTenue: '#E4EDE8', campagnaBordo: '#B3C8BD',
  fogliaScuro: '#75991A',   fogliaTenue: '#EDF5DC',    fogliaBordo: '#CFE39F',
  arancioScuro: '#D06F00',  arancioTenue: '#FDEEDC',
  pomodoroScuro: '#A80810',
  carneScuro: '#6B121C',    carneTenue: '#F6E7E7',     carneBordo: '#DDB6B8',
  oroScuro: '#A9873F',      oroTenue: '#FAF0DE',       oroBordo: '#E8D3AA',
  acquaScuro: '#1E93A6',    acquaTenue: '#DCEFF4',
  bianco: '#FFFFFF', grigio100: '#F4F0EC', grigio200: '#E5DFD9',
  grigio400: '#A9A29B', grigio600: '#6B645D',
} as const;

export type Segmento = 'arborea' | 'ortofrutta' | 'carni' | 'agrozoo' | 'arbolat';

/** Le famiglie del repertorio illustrativo. */
export type Famiglia = 'ortofrutta' | 'patate' | 'quarta-gamma' | 'cereali' | 'animali' | 'scene';

/**
 * Palette di segmento — brandbook 4.2/4.3/4.4.
 * L'ordine è quello di lettura: il primo è il protagonista.
 */
export const paletteSegmento: Record<Segmento, string[]> = {
  arborea:    [colore.campagna, colore.oro, colore.sabbia, colore.notte, colore.foglia, colore.arancio],
  ortofrutta: [colore.foglia, colore.campagna, colore.arancio, colore.pomodoro, colore.oro, colore.melanzana, colore.sabbia, colore.notte],
  carni:      [colore.carne, colore.pomodoro, colore.oro, colore.argento, colore.legno, colore.sabbia, colore.notte],
  agrozoo:    [colore.oro, colore.campagna, colore.carne, colore.ferro, colore.legno, colore.sabbia, colore.notte],
  // Arbolat: acqua e i tre secondari, nient'altro.
  arbolat:    [acqua, colore.foglia, colore.campagna, colore.sabbia],
};

/** Serie colore per i grafici, in ordine di lettura. Massimo 6 serie. */
export const serieGrafico: Record<Segmento, string[]> = {
  arborea:    [colore.campagna, colore.foglia, colore.arancio, colore.oro, colore.carne, colore.melanzana],
  ortofrutta: [colore.foglia, colore.campagna, colore.arancio, colore.pomodoro, colore.oro, colore.melanzana],
  carni:      [colore.carne, colore.pomodoro, colore.oro, colore.argento, colore.legno, colore.ferro],
  agrozoo:    [colore.oro, colore.carne, colore.campagna, colore.ferro, colore.legno, colore.argento],
  arbolat:    [acqua, colore.foglia, colore.campagna, colore.sabbia, colore.ferro, colore.argento],
};

/** I quattro marchi: concept, tema, logo, repertorio di immagini ammesso. */
export const brand: Record<Segmento, {
  nome: string; segmento: string; tema: string; logo: string; logoMono: string;
  concept: string; accento: string; illustrazioni: Famiglia[]; payoff?: string;
}> = {
  arborea: {
    nome: 'Produttori Arborea', segmento: 'La cooperativa', tema: '',
    logo: '/brand/loghi/produttori-arborea.svg', logoMono: '/brand/loghi/produttori-arborea-mono.svg',
    concept: 'Un bronzetto sardo per l’appartenenza, un toro per la fecondità, un frutto per la genuinità, una coccarda per la qualità.',
    accento: colore.campagna, illustrazioni: ['ortofrutta', 'animali', 'cereali', 'scene'],
  },
  ortofrutta: {
    nome: 'Primoverde', segmento: 'Ortofrutta', tema: 'theme-ortofrutta',
    logo: '/brand/loghi/primoverde-foglia.svg', logoMono: '/brand/loghi/primoverde-mono.svg',
    concept: 'La sintesi minimale di un frutto e una foglia: genuinità e freschezza.',
    accento: colore.foglia, illustrazioni: ['ortofrutta', 'patate', 'quarta-gamma'],
  },
  carni: {
    nome: 'Rossopregio', segmento: 'Carni', tema: 'theme-carni',
    logo: '/brand/loghi/rossopregio.svg', logoMono: '/brand/loghi/rossopregio-mono.svg',
    concept: 'Una iconica testa taurina in vista frontale: forza e fecondità.',
    accento: colore.carne, illustrazioni: ['animali'],
  },
  agrozoo: {
    nome: 'Meridoro', segmento: 'Agrozootecnia', tema: 'theme-agrozoo',
    logo: '/brand/loghi/meridoro.svg', logoMono: '/brand/loghi/meridoro-mono.svg',
    concept: 'La sintesi minimale delle fasi lunari: la ciclicità del tempo naturale.',
    accento: colore.oro, illustrazioni: ['animali', 'cereali'],
  },
  arbolat: {
    nome: 'Arbolat', segmento: 'Progetto — fattoria etica e sostenibile', tema: 'theme-arbolat',
    logo: '/brand/loghi/arbolat.svg', logoMono: '/brand/loghi/arbolat-mono.svg',
    concept: 'Una goccia di latte al posto della O, un tetto sopra e la linea del suolo sotto: la stalla e ciò che ne esce.',
    accento: acqua, illustrazioni: ['scene', 'animali'], payoff: 'Fattoria etica e sostenibile',
  },
};

/** Misure minime del marchio — brandbook 1.2/1.3/1.4. */
export const misureMinime = {
  glifo:    { stampaMm: [4, 10],   digitalPx: [10, 30] },
  wordmark: { stampaMm: [18, 7.3], digitalPx: [51, 21] },
  cerchio:  { stampaMm: [20, 20],  digitalPx: [30, 30] },
} as const;

/** Il wordmark di segmento sta all'endorser come 5 : 1. Brandbook 2.1-2.3. */
export const endorserRatio = 5;

/**
 * Gerarchia tipografica — brandbook 3.3. Scala modulare su X.
 * header X · sub header X/2 · call to action X/3 · corpo X/4 · label X/6
 */
export const tipografia = {
  display: "'Fredoka', 'Trebuchet MS', system-ui, sans-serif",
  testo: "'Roboto Flex', 'Roboto', system-ui, sans-serif",
  scala: { header: 1, sub: 1 / 2, cta: 1 / 3, body: 1 / 4, label: 1 / 6 },
  interlinea: { titolo: 1.2, body: 1.2, lettura: 1.55, cta: 1 },
} as const;

export const spazio = { xxs: 4, xs: 8, s: 12, m: 16, l: 24, xl: 32, xxl: 48, xxxl: 64, xxxxl: 96 } as const;
export const raggio = { xs: 4, s: 8, m: 16, l: 24, xl: 40, pill: 999 } as const;
export const griglia = { max: 1280, colonne: 12, gutter: 24, margine: 32, bpM: 1024, bpS: 720 } as const;

/**
 * Numeri in italiano. `useGrouping: 'always'` è obbligatorio: con il default
 * l'it-IT non separa le migliaia a 4 cifre (5366 → "5366" invece di "5.366").
 */
export function formatIT(n: number, decimali = 0): string {
  return new Intl.NumberFormat('it-IT', {
    useGrouping: 'always',
    minimumFractionDigits: decimali,
    maximumFractionDigits: decimali,
  }).format(n);
}
