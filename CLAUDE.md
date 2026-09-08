# Istruzioni per Claude Code — Produttori Arborea Design System

## Cos'è

Design system della cooperativa Produttori Arborea e dei suoi tre marchi
(Primoverde, Rossopregio, Meridoro). È la traduzione in codice del **brandbook
ufficiale** (Minsait Xtudio, 46 pp., `../ARBOREA brandbook.pdf`): i valori marcati ◆
nei sorgenti sono normativi e non si toccano. Dove un materiale già prodotto si
discosta dal brandbook, vince il brandbook.

## Fonte di verità

- Token: `src/styles/colors_and_type.css` (prefisso `--pa-*`). Specchio JS in
  `src/tokens.ts` — **vanno tenuti allineati a mano**.
- Componenti CSS: `src/styles/components.css`. Componenti React: `src/components/`.
- Asset: `public/brand/`. L'elenco è in `src/manifest.json`, da rigenerare quando
  si aggiungono file.
- Le regole di sistema e le ricette di impaginato: `../DESIGN.md`.

## Regole non negoziabili

1. **Solo token semantici nei componenti.** `var(--pa-accent)`, mai `var(--pa-foglia)`.
   I temi (`.theme-ortofrutta`, `.theme-carni`, `.theme-agrozoo`) rimappano solo
   token: zero override per-componente.
2. **Spaziature dalla scala.** `var(--pa-space-*)`, mai px a mano.
3. **Il fondo pagina è la sabbia `#FFF7F1`**, non il bianco.
4. **Fredoka solo per titoli, Roboto Flex solo per il testo.** Mai invertire.
5. **Niente angoli vivi** su card, foto e pulsanti.
6. **Chip: solo testo.** Nessuna icona, nessuna freccia.
7. **Numeri in italiano**: usa `formatIT()`, mai `toLocaleString` a mano — con le
   opzioni di default l'it-IT non separa le migliaia a 4 cifre.
8. **Illustrazioni monocrome**, in una sola tinta del segmento attivo. Ortofrutta con
   Primoverde, animali con Rossopregio e Meridoro. La combinazione icona +
   illustrazione è la firma del sistema, non un'opzione.
9. **Un marchio di segmento va sempre con il suo endorser, in rapporto 5:1**
   (componente `Lockup`).
10. **Niente deformazioni, inclinazioni, effetti** sui marchi: il brandbook le
   definisce «violazione grave dell'integrità della marca».

## Gotcha noti

- **Griglia in layout con sidebar**: serve `container-type: inline-size` sul
  contenitore del contenuto, e nessun `max-width` che ricappi la colonna principale.
  Senza, le media query guardano la finestra e le card non si adattano all'area.
- **Contenitore condiviso**: il padding orizzontale va sul wrapper *interno* di ogni
  fascia (`__inner`), non sull'elemento esterno, altrimenti i bordi sinistri delle
  varie fasce non combaciano (disallineamento tipico di ~32px).
- **Testo bianco su fascia scura**: una regola globale su `p` batte il colore
  ereditato da una classe antenata. Serve una regola esplicita `.fascia p { color: … }`.
- **`useGrouping: 'always'`** richiede `"lib": ["ES2023", …]` in `tsconfig.json`.

## Prima di aggiungere un componente

Guarda se esiste già in `components.css`. Se lo aggiungi: token semantici, scala di
spazio, e una voce nella sezione «Componenti» della libreria (`src/docs/sections/`)
con anteprima dal vivo e snippet copiabile.
