# Produttori Arborea — Design System

Traduzione operativa del brandbook ufficiale (Minsait Xtudio, 46 pp.) in token, componenti
e asset per Produttori Arborea e per i suoi marchi Primoverde, Rossopregio e Meridoro.

```bash
npm install
npm run dev      # libreria consultabile su http://localhost:5173
npm run build    # costruisce gli archivi zip e poi la build statica in dist/
```

## Struttura

```
src/
  styles/colors_and_type.css   fonte di verità dei token (--pa-*)
  styles/components.css        componenti via classe CSS
  tokens.ts                    specchio JS dei token, per grafici e script
  components/                  componenti React
  docs/                        la pagina-libreria (non fa parte del consegnabile)
  manifest.json                elenco degli asset, generato
public/brand/
  loghi/            7 SVG vettoriali + variante "-mono" tintabile
  icone/           16 SVG + 16 PNG a 1024 px
  illustrazioni/   32 soggetti in SVG e in PNG, più le anteprime a 360 px
  texture/          4 SVG, mattonelle ripetibili
  download/         archivi zip — GENERATI dal build, non in repo
```

## Uso minimo

```html
<link rel="stylesheet" href="src/styles/colors_and_type.css">
<link rel="stylesheet" href="src/styles/components.css">

<section class="theme-ortofrutta">
  <span class="pa-chip pa-kicker">Linea del fresco</span>
  <h2>Patate novelle</h2>
  <button class="pa-btn">Scopri</button>
</section>
```

Le regole di sistema — quando usare un marchio, come si impagina una brochure, cosa
è fuori sistema — stanno in [`../DESIGN.md`](../DESIGN.md).

## Regole per chi ci mette mano

- I componenti usano **solo token semantici** (`--pa-accent`, `--pa-pop`, `--pa-bg`…),
  mai i colori di brand diretti. Un tema deve poter rimappare tutto senza override.
- Le spaziature sono sempre `var(--pa-space-*)`, mai pixel scritti a mano.
- Se cambi un valore in `colors_and_type.css`, aggiorna anche `tokens.ts`: sono due
  copie e non c'è ancora una sorgente unica che le generi entrambe.
- Aggiungendo asset, rigenera `src/manifest.json` e lancia `bash scripts/pacchetti.sh`
  (o semplicemente `npm run build`, che lo fa da sé).
- Cambiando un master di illustrazione, rigenera SVG e anteprima con
  `python3 scripts/vettorializza.py` (serve `brew install potrace`).
