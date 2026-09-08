"""
Vettorializza le illustrazioni di paesaggio: incisioni a due tinte piatte con
una velatura che, scendendo, porta il fondo alla tinta scura piena.

I due fenomeni vanno separati, altrimenti non si ricostruiscono:
- il TRATTEGGIO con una soglia adattiva (ogni pixel contro la media locale),
  che lo preserva anche dove il fondo è già scuro. Una soglia globale, in basso,
  classificherebbe scure anche le righe chiare e collasserebbe tutto in un
  blocco pieno.
- la VELATURA come gradiente SVG, misurata SOLO sui pixel chiari: usare la media
  di riga conterebbe due volte lo scuro — una nel tratteggio, una nel velo — e
  sporcherebbe il cielo con un gradiente che nell'originale non c'è.

    python3 vettorializza-paesaggi.py sorgente.png destinazione.svg CHIARO SCURO
"""
import os, re, subprocess, sys, tempfile
from PIL import Image, ImageChops, ImageFilter

def rgb(hexc):
    hexc = hexc.lstrip('#')
    return tuple(int(hexc[i:i+2], 16) for i in (0, 2, 4))

def profilo(im, maschera, g_chiaro, g_scuro, campioni=26):
    g = im.split()[1].load()
    m = maschera.load()
    w, h = im.size
    stop, ultimo = [], 0.0
    for i in range(campioni + 1):
        y = min(h - 1, round(i * h / campioni))
        somma = n = 0
        for x in range(0, w, 4):
            if m[x, y]:                          # 1 = chiaro = fondo
                somma += g[x, y]; n += 1
        if n < w // 40:                          # riga quasi tutta tratteggiata
            frac = ultimo
        else:
            frac = max(0.0, min(1.0, (somma / n - g_scuro) / (g_chiaro - g_scuro)))
        ultimo = frac
        velo = 1 - frac
        # sotto questa soglia il velo è rumore di misura, non sta nell'originale
        stop.append((y / h, round(velo if velo > 0.06 else 0.0, 3)))
    return stop

def traccia(src, out, chiaro='#95C11F', scuro='#004928', titolo='Paesaggio'):
    im = Image.open(src).convert('RGB')
    w, h = im.size
    g_chiaro, g_scuro = rgb(chiaro)[1], rgb(scuro)[1]
    # il delta segue il contrasto fra le due tinte: su una coppia di ori
    # ravvicinati una soglia tarata sui verdi perderebbe il tratteggio
    delta = max(2, (g_chiaro - g_scuro) // 20)

    g = im.split()[1]
    locale = g.filter(ImageFilter.GaussianBlur(radius=max(3, w // 240)))
    maschera = ImageChops.subtract(locale, g).point(lambda v: 0 if v > delta else 255, '1')

    with tempfile.NamedTemporaryFile(suffix='.pbm', delete=False) as t:
        maschera.save(t.name); pbm = t.name
    try:
        tmp = out + '.tmp'
        subprocess.run(['potrace', '-s', '-o', tmp, '--turdsize', '2',
                        '--alphamax', '1.0', '--opttolerance', '0.4', pbm], check=True)
    finally:
        os.unlink(pbm)

    grezzo = open(tmp).read(); os.unlink(tmp)
    corpo = re.search(r'<g\b.*</g>', grezzo, flags=re.S)
    corpo = corpo.group(0).replace('fill="#000000"', f'fill="{scuro}"') if corpo else ''

    stop = '\n'.join(
        f'      <stop offset="{o*100:.1f}%" stop-color="{scuro}" stop-opacity="{a:.3f}"/>'
        for o, a in profilo(im, maschera, g_chiaro, g_scuro))
    ident = os.path.basename(out)[:-4].replace('.', '-')

    open(out, 'w').write(f"""<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {w} {h}" width="{w}" height="{h}">
  <title>{titolo}</title>
  <!-- Due tinte sole: {chiaro} sul fondo, {scuro} sul tratteggio.
       La velatura verso il basso è un gradiente, non un blocco pieno. -->
  <defs>
    <linearGradient id="velo-{ident}" x1="0" y1="0" x2="0" y2="1">
{stop}
    </linearGradient>
  </defs>
  <rect width="{w}" height="{h}" fill="{chiaro}"/>
{corpo}
  <rect width="{w}" height="{h}" fill="url(#velo-{ident})"/>
</svg>
""")
    return os.path.getsize(out)

if __name__ == '__main__':
    src, out = sys.argv[1], sys.argv[2]
    chiaro = sys.argv[3] if len(sys.argv) > 3 else '#95C11F'
    scuro  = sys.argv[4] if len(sys.argv) > 4 else '#004928'
    titolo = sys.argv[5] if len(sys.argv) > 5 else 'Paesaggio'
    print(f'{os.path.basename(out)}  {traccia(src, out, chiaro, scuro, titolo)//1024} KB')
