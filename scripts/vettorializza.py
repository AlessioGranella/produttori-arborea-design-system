#!/usr/bin/env python3
"""
Rigenera gli asset derivati delle illustrazioni e delle icone.

- illustrazioni: dal master PNG (nero con canale alfa) ricava l'SVG vettoriale
  tracciandolo con potrace, e l'anteprima a 360 px usata dalle griglie.
- icone: dall'SVG ricava il PNG a 1024 px con trasparenza.

Serve `brew install potrace`. Si lancia solo quando cambiano i master:
gli archivi zip invece li fa `pacchetti.sh` a ogni build.

    python3 scripts/vettorializza.py
"""
import glob, os, re, subprocess, sys, tempfile
import fitz
from PIL import Image

BRAND = os.path.join(os.path.dirname(__file__), '..', 'public', 'brand')
SOGLIA = 110      # sul canale alfa del master: sopra questa soglia è tratto
ANTEPRIMA = 360   # lato lungo delle anteprime
ICONA_PNG = 1024  # lato lungo dei PNG delle icone


def traccia(png: str, out: str) -> None:
    """PNG con alfa -> SVG monocromo, tratto in currentColor."""
    im = Image.open(png).convert('RGBA')
    w, h = im.size
    # potrace traccia il nero: il tratto (alfa alto) diventa nero
    bitmap = im.split()[3].point(lambda v: 0 if v > SOGLIA else 255, '1')
    with tempfile.NamedTemporaryFile(suffix='.pbm', delete=False) as t:
        bitmap.save(t.name)
        pbm = t.name
    try:
        subprocess.run(['potrace', '-s', '-o', out, '--turdsize', '4',
                        '--alphamax', '1.0', '--opttolerance', '0.6', pbm], check=True)
    finally:
        os.unlink(pbm)

    # potrace scrive una dichiarazione XML e un DOCTYPE: teniamo solo i tracciati,
    # dentro un viewBox espresso nei pixel del master.
    grezzo = open(out).read()
    corpo = re.search(r'<g\b.*</g>', grezzo, flags=re.S)
    corpo = corpo.group(0).replace('fill="#000000"', 'fill="currentColor"') if corpo else ''
    open(out, 'w').write(
        f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {w} {h}" '
        f'width="{w}" height="{h}" fill="currentColor">\n{corpo}\n</svg>\n')


def anteprima(png: str, out: str) -> None:
    im = Image.open(png).convert('RGBA')
    im.thumbnail((ANTEPRIMA, ANTEPRIMA), Image.LANCZOS)
    im.save(out, optimize=True)


def icona_png(svg: str, out: str) -> None:
    pagina = fitz.open(svg)[0]
    z = ICONA_PNG / max(pagina.rect.width, pagina.rect.height)
    pm = pagina.get_pixmap(matrix=fitz.Matrix(z, z), alpha=True)
    Image.frombytes('RGBA', (pm.width, pm.height), pm.samples).save(out)


def main() -> int:
    if subprocess.run(['which', 'potrace'], capture_output=True).returncode:
        print('serve potrace:  brew install potrace', file=sys.stderr)
        return 1

    for famiglia in ('ortofrutta', 'animali'):
        cartella = os.path.join(BRAND, 'illustrazioni', famiglia)
        os.makedirs(os.path.join(cartella, 'anteprima'), exist_ok=True)
        for png in sorted(glob.glob(os.path.join(cartella, '*.png'))):
            traccia(png, png[:-4] + '.svg')
            anteprima(png, os.path.join(cartella, 'anteprima', os.path.basename(png)))
            print(f'  {famiglia}/{os.path.basename(png)[:-4]}')

    for svg in sorted(glob.glob(os.path.join(BRAND, 'icone', '*.svg'))):
        icona_png(svg, svg[:-4] + '.png')
    print('fatto')
    return 0


if __name__ == '__main__':
    raise SystemExit(main())
