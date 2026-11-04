"""Render favicon_2 from the actual Allura font; keep favicon_1 unchanged."""
from pathlib import Path
from PIL import Image, ImageDraw, ImageFont

ROOT = Path(__file__).resolve().parents[1]
SCALE = 4
font = ImageFont.truetype(str(ROOT / 'public/fonts/Allura-Regular.ttf'), 220 * SCALE)
mask = Image.new('L', (280 * SCALE, 280 * SCALE))
draw = ImageDraw.Draw(mask)
# Baselines descend as the letters step right; neighboring strokes overlap.
for letter, x, baseline in [('t', 10, 110), ('s', 49, 151), ('c', 102, 182)]:
    draw.text((x * SCALE, baseline * SCALE), letter, font=font, fill=255, anchor='ls')
mask = mask.crop(mask.getbbox())
factor = 232 * SCALE / max(mask.size)
mask = mask.resize(tuple(round(n * factor) for n in mask.size), Image.Resampling.LANCZOS)
for suffix, background in [('', '#f5f0f0'), ('-local', '#dcebdd')]:
    canvas = Image.new('RGB', (256 * SCALE, 256 * SCALE), background)
    canvas.paste('black', ((canvas.width-mask.width)//2, (canvas.height-mask.height)//2), mask)
    for size, size_suffix in [(256, ''), (180, '-180')]:
        canvas.resize((size, size), Image.Resampling.LANCZOS).save(
            ROOT / f'public/favicon_2{suffix}{size_suffix}.png')
