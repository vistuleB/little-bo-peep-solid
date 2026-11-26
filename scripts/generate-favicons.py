"""Render the Allura title wordmark as 256px favicons and 180px touch icons.
Requires Pillow. Uses the same font and 22:16 font-size/line-height ratio
as the original text HeaderBlob. No illustration or AI-redrawn lettering.
"""
from pathlib import Path
import sys
from PIL import Image, ImageDraw, ImageFont

ROOT = Path(__file__).resolve().parents[1]
FONT = ROOT / 'public/fonts/Allura-Regular.ttf'
SCALE = 4
font = ImageFont.truetype(str(FONT), 220)
words = ['toilet', 'scroll', 'calculus']
boxes = [font.getbbox(word, anchor='ls') for word in words]
left = min(b[0] for b in boxes)
top = min(b[1] + i * 160 for i, b in enumerate(boxes))
right = max(b[2] for b in boxes)
bottom = max(b[3] + i * 160 for i, b in enumerate(boxes))
factor = 232 * SCALE / max(right-left, bottom-top)
# Render text straight from the font onto a supersampled square canvas.
font = ImageFont.truetype(str(FONT), round(220 * factor))
x = (256*SCALE - (right-left)*factor)/2 - left*factor
y = (256*SCALE - (bottom-top)*factor)/2 - top*factor
for theme, color in [('local', '#dcebdd'), ('remote', '#f5f0f0'), ('editor', '#000000')]:
    if '--editor-only' in sys.argv and theme != 'editor':
        continue
    im = Image.new('RGB', (256*SCALE, 256*SCALE), color)
    draw = ImageDraw.Draw(im)
    for i, word in enumerate(words):
        draw.text((x, y + i*160*factor), word, font=font, fill='white' if theme == 'editor' else 'black', anchor='ls')
    for size in ((256, 180, 32) if theme == 'editor' else (256, 180)):
        output = ROOT / (f'editor-server/ui/favicon-editor-v3-{size}.png' if theme == 'editor' else f'public/favicon-tsc-{theme}-v1-{size}.png')
        im.resize((size,size), Image.Resampling.LANCZOS).save(output)
        print(output.relative_to(ROOT))
