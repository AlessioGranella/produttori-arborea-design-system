"""Porta i mockup di packaging Primoverde nel design system.

Copia i file del cliente in public/brand/packaging/<linea>/<slug>.<ext> (originali,
intatti) e ne ricava un'anteprima WebP in <linea>/anteprima/<slug>.webp: ritagliata
sull'ingombro reale (i mockup hanno margini trasparenti enormi) e a 720 px sul lato
lungo, così la griglia non scarica 90 MB di originali.

Si rilancia a mano quando il cliente manda nuovi mockup:  python3 scripts/packaging.py
"""
import shutil
from pathlib import Path
from PIL import Image

QUI = Path(__file__).resolve().parent.parent
PA = QUI.parent
OUT = QUI / 'public/brand/packaging'
QG = PA / 'sito/assets/PRIMOVERDE (2)/QUARTA GAMMA'
LF = PA / 'sito/assets/PRIMOVERDE (2)/LINEA DEL FRESCO'
PT = PA / 'Brand/5_PACCHETTO CLIENTE/PER APPROVAZIONE/PATATE/MOCKUP'

FILE = {
    'quarta-gamma': [
        (QG / 'PRODUTTORIARBOREA_QUARTAGAMMA_aurora_mockup.png', 'aurora'),
        (QG / 'PRODUTTORIARBOREA_QUARTAGAMMA_campidanese_mockup.png', 'campidanese'),
        (QG / 'PRODUTTORIARBOREA_QUARTAGAMMA_carotebaby_mockup.png', 'carote-baby'),
        (QG / 'PRODUTTORIARBOREA_QUARTAGAMMA_carotejulienne_mockup.png', 'carote-julienne'),
        (QG / 'PRODUTTORIARBOREA_QUARTAGAMMA_croccante_mockup.png', 'croccante'),
        (QG / 'PRODUTTORIARBOREA_QUARTAGAMMA_iceberg_mockup.png', 'iceberg'),
        (QG / 'PRODUTTORIARBOREA_QUARTAGAMMA_mistosoffritto_mockup.png', 'misto-soffritto'),
        (QG / 'PRODUTTORIARBOREA_QUARTAGAMMA_prezzemolo&agliotritati_mockup.png', 'prezzemolo-aglio-tritati'),
        (QG / 'PRODUTTORIARBOREA_QUARTAGAMMA_prezzemolotritato_mockup.png', 'prezzemolo-tritato'),
        (QG / 'PRODUTTORIARBOREA_QUARTAGAMMA_prezzemolotritato_mockup2.png', 'prezzemolo-tritato-2'),
        (QG / 'PRODUTTORIARBOREA_QUARTAGAMMA_rucola_mockup.png', 'rucola'),
        (QG / 'PRODUTTORIARBOREA_QUARTAGAMMA_smeralda_mockup.png', 'smeralda'),
    ],
    'linea-del-fresco': [
        (LF / 'PRODUTTORIARBOREA_LINEADELFRESCO_ANGURIAbaby_mockup.png', 'anguria-baby'),
        (LF / 'PRODUTTORIARBOREA_LINEADELFRESCO_ANGURIAbaby_mockup_2.png', 'anguria-baby-2'),
        (LF / 'PRODUTTORIARBOREA_LINEADELFRESCO_ANGURIAsugar_mockup.png', 'anguria-sugar'),
        (LF / 'PRODUTTORIARBOREA_LINEADELFRESCO_carote_mockup.png', 'carote'),
        (LF / 'PRODUTTORIARBOREA_LINEADELFRESCO_fragole_mockup.png', 'fragole'),
        (LF / 'PRODUTTORIARBOREA_funghi_mockup.png', 'funghi'),
        (LF / 'PRODUTTORIARBOREA_LINEADELFRESCO_melone_mockup.png', 'melone'),
        (LF / 'PRODUTTORIARBOREA_LINEADELFRESCO_patatenovelle_mockup.png', 'patate-novelle'),
        (LF / 'PRODUTTORIARBOREA_LINEADELFRESCO_patatenovelleinverno_mockup.png', 'patate-novelle-inverno'),
        (LF / 'PRODUTTORIARBOREA_LINEADELFRESCO_pataterosse_mockup.png', 'patate-rosse'),
        (LF / 'PRODUTTORIARBOREA_LINEADELFRESCO_pomodoriciliegino.png', 'pomodoro-ciliegino'),
        (LF / 'PRODUTTORIARBOREA_LINEADELFRESCO_radicchiotondo_mockup.png', 'radicchio-tondo'),
    ],
    'patate': [
        (PT / 'PRODUTTORIARBOREA_PATATE-1,5kg_gialle.jpg', 'patate-gialle-1-5kg'),
        (PT / 'PRODUTTORIARBOREA_PATATE-1,5kg_novelle.jpg', 'patate-novelle-1-5kg'),
        (PT / 'PRODUTTORIARBOREA_PATATE-2,5kg_novelle.jpg', 'patate-novelle-2-5kg'),
        (PT / 'PRODUTTORIARBOREA_PATATE-2,5kg_novelleinverno.jpg', 'patate-novelle-inverno-2-5kg'),
        (PT / 'PRODUTTORIARBOREA_PATATE-2,5kg_rosse.jpg', 'patate-rosse-2-5kg'),
        (PT / 'PRODUTTORIARBOREA_PATATE-4-5kg_novelle.jpg', 'patate-novelle-4-5kg'),
    ],
}

for linea, voci in FILE.items():
    (OUT / linea / 'anteprima').mkdir(parents=True, exist_ok=True)
    for src, slug in voci:
        dst = OUT / linea / f'{slug}{src.suffix.lower()}'
        shutil.copy2(src, dst)
        im = Image.open(src)
        im = im.convert('RGBA') if im.mode in ('RGBA', 'LA', 'P') else im.convert('RGB')
        if im.mode == 'RGBA' and (box := im.getchannel('A').getbbox()):
            im = im.crop(box)
        im.thumbnail((720, 720), Image.LANCZOS)
        im.save(OUT / linea / 'anteprima' / f'{slug}.webp', 'WEBP', quality=82, method=6)
        print(f'{linea}/{slug}  {im.size[0]}×{im.size[1]}')
