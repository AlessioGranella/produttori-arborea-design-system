/** Indice dei template: i master da cui si parte per produrre un materiale ricorrente. */
export type Template = {
  slug: string;              // anteprime in public/brand/template/<slug>-<n>.jpg
  pagine: number;
  titolo: string;
  segmento: 'ortofrutta' | 'carni' | 'agrozoo' | 'corporate';
  formato: string;
  strumento: 'Canva' | 'HTML → Elementor';
  sorgente: string;          // id del design Canva o percorso del file
  uso: string;
  regole: string[];
  produzione?: string;       // come si fa un nuovo esemplare
};

export const famiglie: { gruppo: string; testo: string; voci: Template[] }[] = [
  {
    gruppo: 'Stampa',
    testo: 'Schede e volantini che escono dal mangimificio e dai punti vendita. Formato A5 a 300 dpi, testi editabili, nessun elemento bloccato.',
    voci: [
      {
        slug: 'scheda-a5', pagine: 1, segmento: 'agrozoo',
        titolo: 'Scheda prodotto A5', formato: 'A5 · 1748 × 2480 px · 1 pagina',
        strumento: 'Canva', sorgente: 'DAHUuSaBLGY',
        uso: 'Un prodotto Meridoro: fieni, foraggi, mangimi, pellet, integratori.',
        regole: [
          'Testi tutti in campagna; oro solo per cornici, barre e banda vantaggi.',
          'Fondo sabbia, riquadri bianchi, piede campagna al vivo con i contatti.',
          'Fredoka One per i titoli, Roboto per i testi, come la brochure originale.',
          'Testi del documento tecnico riportati alla lettera: i valori non si arrotondano.',
        ],
        produzione: 'Si duplica il master, non si modifica. La skill «schede-prodotto-a5» lo riempie e misura gli ingombri.',
      },
      {
        slug: 'scheda-linea', pagine: 2, segmento: 'agrozoo',
        titolo: 'Scheda linea A5', formato: 'A5 · più pagine',
        strumento: 'Canva', sorgente: 'DAHVcvAKCvo',
        uso: 'Una linea di più prodotti (es. miscele da cortile, Fiberfeed): introduzione più una scheda per tipologia.',
        regole: [
          'Prima pagina: presentazione della linea e delle tipologie a confronto.',
          'Pagine successive: ingredienti, valori nutrizionali in tabella, formati, istruzioni.',
          'Valori nutrizionali senza unità, con la nota «(% sul tal quale)».',
          'Ogni testo riusa un elemento esistente della pagina: un testo aggiunto nasce nel font di default.',
        ],
        produzione: 'Master da non toccare: si lavora sempre su una copia. Anche questo passa dalla skill.',
      },
      {
        slug: 'volantino-a5', pagine: 2, segmento: 'corporate',
        titolo: 'Volantino promo punto vendita', formato: 'A5 · fronte e retro',
        strumento: 'Canva', sorgente: 'DAHWrq-vgMA',
        uso: 'Le offerte quindicinali dello spaccio: fronte ortofrutta Primoverde, retro carni.',
        regole: [
          'Periodo di validità in testa, in maiuscolo, sempre visibile.',
          'Una card per prodotto: foto scontornata o in cerchio, nome, prezzo pieno barrato, prezzo promo.',
          'Il colore della faccia segue i prodotti: verde pieno per l’ortofrutta, accenti carne per le carni.',
          'Prezzi in formato italiano: «€ 0,80 al kg».',
        ],
        produzione: 'Si duplica l’ultima quindicina e si sostituiscono date, foto e prezzi.',
      },
    ],
  },
  {
    gruppo: 'Social',
    testo: 'Tela 4:5 (1080 × 1350) per feed e caroselli, 9:16 per le storie. Il marchio di segmento in piede, l’endorser Produttori Arborea in chiusura.',
    voci: [
      {
        slug: 'caso-cliente', pagine: 7, segmento: 'agrozoo',
        titolo: 'Carosello caso cliente', formato: '4:5 · 1080 × 1350 · 7 slide',
        strumento: 'Canva', sorgente: 'DAHBwbLeZaE',
        uso: 'I risultati di un’azienda socia o cliente seguita da Meridoro: produzione, fertilità, redditività.',
        regole: [
          'Slide 1: foto delle persone in stalla, bollino oro con nome dell’azienda e «Azienda socia» o «Azienda cliente».',
          'Una slide per indicatore, con il numero grande dentro un cerchio oro o sabbia.',
          'Alternanza di fondi: foto di stalla, oro pieno, campagna nella forma seme.',
          'Ultima slide: «Il valore del lavoro di squadra», contatti dell’ufficio commerciale, endorser.',
          'I dati sono dell’azienda e vanno datati («Dati di gennaio/febbraio 2026»).',
        ],
        produzione: 'Si duplica l’ultimo caso pubblicato. Ne esistono già una decina, uno per azienda.',
      },
      {
        slug: 'carosello-filiera', pagine: 7, segmento: 'agrozoo',
        titolo: 'Carosello di racconto', formato: '4:5 · 1080 × 1350 · 7 slide',
        strumento: 'Canva', sorgente: 'DAHWH58wLTo',
        uso: 'Raccontare un processo o una filiera (qui la Filiera Foraggera) in sequenza.',
        regole: [
          'Fondi alternati oro e campagna, con la texture delle foglie in trasparenza.',
          'Titolo in Fredoka maiuscolo in alto a sinistra, sempre nella stessa posizione.',
          'Le foto entrano nella forma seme o in cerchio, mai a rettangolo vivo.',
          'Il logo Meridoro chiude ogni slide in piede; l’ultima ha i contatti e l’endorser.',
        ],
      },
      {
        slug: 'post-4x5', pagine: 1, segmento: 'ortofrutta',
        titolo: 'Post singolo di campagna', formato: '4:5 · 1080 × 1350',
        strumento: 'Canva', sorgente: 'DAHUsFhPBDA',
        uso: 'Il post di una campagna Primoverde («Cogli l’ottimo»): un prodotto, una frase.',
        regole: [
          'Fondo verde con il paesaggio illustrato delle campagne.',
          'Il soggetto scontornato rompe il titolo: è la mano con il prodotto, non il pack.',
          'Logo Primoverde in testa, endorser in piede.',
          'Fredoka va scelto a mano in Canva: il connettore non imposta la famiglia.',
        ],
      },
      {
        slug: 'avviso-storia', pagine: 1, segmento: 'corporate',
        titolo: 'Avviso alla clientela', formato: '9:16 · storia',
        strumento: 'Canva', sorgente: 'DAG8aKYQ_8o',
        uso: 'Chiusure, cambi d’orario, comunicazioni di servizio dei punti vendita.',
        regole: [
          'Fondo sabbia, titolo in pomodoro, testo in campagna.',
          'Le icone di prodotto con il loro stelo fanno da cornice in alto e in basso.',
          'Una comunicazione per storia: giorno, punto vendita, motivo.',
        ],
      },
    ],
  },
  {
    gruppo: 'Web',
    testo: 'Modelli esecutivi per produttoriarborea.it. Ogni blocco corrisponde a un widget Elementor nativo, così il sito si ricostruisce dall’editor senza plugin.',
    voci: [
      {
        slug: 'pagina-prodotto', pagine: 2, segmento: 'agrozoo',
        titolo: 'Pagina prodotti di marchio', formato: 'Pagina web · contenitore 1140 px',
        strumento: 'HTML → Elementor', sorgente: 'Produttori Arborea/sito/',
        uso: 'Il catalogo di un marchio sul sito (Meridoro, Primoverde): linee, schede prodotto, brochure.',
        regole: [
          'Hero a due colonne, fascia di quattro contatori, griglia di image box, fisarmonica per i dettagli.',
          'Pulsanti maiuscoli, bordo 3 px, raggio 50 px, come il kit del sito.',
          'I pack scontornati stanno liberi sulla scheda: niente cerchio, niente bordo.',
          'Header e footer non si ricostruiscono: la pagina eredita quelli in linea.',
        ],
        produzione: 'La mappa blocco → widget è in sito/LEGGIMI.md.',
      },
    ],
  },
];
