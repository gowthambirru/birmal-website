import base64
import os
from PIL import Image

src_img = r"C:/Users/gowth/.gemini/antigravity/brain/e74d2037-572f-4b9e-8fbb-e6fffabf0325/.user_uploaded/media_1795513508884_b269ad3a.jpg"
pub_dir = r"d:\birmal website\public"
app_dir = r"d:\birmal website\src\app"
img_dir = os.path.join(pub_dir, "images")

# 1. Load image and make outer white background 100% transparent
im = Image.open(src_img).convert("RGBA")
pixels = im.load()
width, height = im.size

# Flood fill outer white pixels to transparent
import cv2
import numpy as np

img_cv = cv2.imread(src_img)
gray = cv2.cvtColor(img_cv, cv2.COLOR_BGR2GRAY)
mask = np.zeros((height + 2, width + 2), np.uint8)

cv2.floodFill(gray.copy(), mask, (0, 0), 0, loDiff=5, upDiff=5, flags=8 | (255 << 8) | cv2.FLOODFILL_MASK_ONLY)
cv2.floodFill(gray.copy(), mask, (width - 1, 0), 0, loDiff=5, upDiff=5, flags=8 | (255 << 8) | cv2.FLOODFILL_MASK_ONLY)
cv2.floodFill(gray.copy(), mask, (0, height - 1), 0, loDiff=5, upDiff=5, flags=8 | (255 << 8) | cv2.FLOODFILL_MASK_ONLY)
cv2.floodFill(gray.copy(), mask, (width - 1, height - 1), 0, loDiff=5, upDiff=5, flags=8 | (255 << 8) | cv2.FLOODFILL_MASK_ONLY)

outer = mask[1:-1, 1:-1]
alpha = np.where(outer == 255, 0, 255).astype(np.uint8)
# Soft antialiasing on outer edge
alpha = cv2.GaussianBlur(alpha, (3, 3), 0)

rgba = np.dstack((img_cv, alpha))

# Convert to PIL
im_rgba = Image.fromarray(cv2.cvtColor(rgba, cv2.COLOR_BGRA2RGBA))
bbox = im_rgba.getbbox()
cropped = im_rgba.crop(bbox)
w, h = cropped.size
print(f"Cleaned logo size: {w}x{h}")

# Save in every path and format
paths_png = [
    os.path.join(img_dir, "birmal-logo.png"),
    os.path.join(img_dir, "birmal-logo-light.png"),
    os.path.join(pub_dir, "logo.png"),
]

for p in paths_png:
    cropped.save(p, "PNG")

cropped.save(os.path.join(img_dir, "birmal-logo.webp"), "WEBP", quality=95)

# Also wrap in SVG so any code requesting .svg gets this exact logo
with open(os.path.join(img_dir, "birmal-logo.png"), "rb") as f:
    b64 = base64.b64encode(f.read()).decode("ascii")

svg_content = f"""<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {w} {h}" width="{w}" height="{h}">
  <image href="data:image/png;base64,{b64}" width="{w}" height="{h}"/>
</svg>"""

paths_svg = [
    os.path.join(img_dir, "birmal-logo.svg"),
    os.path.join(img_dir, "birmal-logo-light.svg"),
    os.path.join(pub_dir, "logo.svg"),
]

for p in paths_svg:
    with open(p, "w", encoding="utf-8") as f:
        f.write(svg_content)

# Generate square favicons
size = max(w, h) + 20
sq = Image.new("RGBA", (size, size), (255, 255, 255, 0))
sq.paste(cropped, ((size - w) // 2, (size - h) // 2))

sq.save(os.path.join(pub_dir, "favicon.ico"), format="ICO", sizes=[(16, 16), (32, 32), (48, 48), (64, 64)])
sq.save(os.path.join(app_dir, "favicon.ico"), format="ICO", sizes=[(16, 16), (32, 32), (48, 48), (64, 64)])
sq.save(os.path.join(app_dir, "icon.png"), "PNG")
sq.resize((32, 32), Image.Resampling.LANCZOS).save(os.path.join(pub_dir, "favicon.png"), "PNG")
sq.resize((180, 180), Image.Resampling.LANCZOS).save(os.path.join(pub_dir, "apple-touch-icon.png"), "PNG")
sq.resize((192, 192), Image.Resampling.LANCZOS).save(os.path.join(pub_dir, "favicon-192.png"), "PNG")

print("All logo and favicon variations overwritten!")
