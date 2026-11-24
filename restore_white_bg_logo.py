import base64
import os
import numpy as np
from PIL import Image

src_img = r"C:/Users/gowth/.gemini/antigravity/brain/e74d2037-572f-4b9e-8fbb-e6fffabf0325/.user_uploaded/media_1795513508884_b269ad3a.jpg"
pub_dir = r"d:\birmal website\public"
app_dir = r"d:\birmal website\src\app"
img_dir = os.path.join(pub_dir, "images")

# Load original user logo with crisp white background
im = Image.open(src_img).convert("RGB")
arr = np.array(im)

# Detect non-white content (< 250 in any channel)
non_white = np.any(arr < 250, axis=2)
ys, xs = np.where(non_white)
y0, y1 = ys.min(), ys.max()
x0, x1 = xs.min(), xs.max()

# Keep a neat clean white border of 16px around the emblem
pad = 16
y0 = max(0, y0 - pad)
y1 = min(im.height, y1 + pad)
x0 = max(0, x0 - pad)
x1 = min(im.width, x1 + pad)

cropped_white = im.crop((x0, y0, x1, y1))
w, h = cropped_white.size
print(f"Cropped with pure white background: {w}x{h}")

# Save crisp PNG, WebP, and root logo
cropped_white.save(os.path.join(img_dir, "birmal-logo.png"), "PNG")
cropped_white.save(os.path.join(img_dir, "birmal-logo-light.png"), "PNG")
cropped_white.save(os.path.join(img_dir, "birmal-logo.webp"), "WEBP", quality=96)
cropped_white.save(os.path.join(pub_dir, "logo.png"), "PNG")

# Embed in SVG wrappers with white background
with open(os.path.join(img_dir, "birmal-logo.png"), "rb") as f:
    b64 = base64.b64encode(f.read()).decode("ascii")

svg_content = f"""<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {w} {h}" width="{w}" height="{h}">
  <rect width="{w}" height="{h}" fill="#FFFFFF" rx="16"/>
  <image href="data:image/png;base64,{b64}" width="{w}" height="{h}"/>
</svg>"""

for p in [os.path.join(img_dir, "birmal-logo.svg"), os.path.join(img_dir, "birmal-logo-light.svg"), os.path.join(pub_dir, "logo.svg")]:
    with open(p, "w", encoding="utf-8") as f:
        f.write(svg_content)

# Favicons with white background and centered emblem
sq_size = max(w, h) + 24
sq = Image.new("RGB", (sq_size, sq_size), (255, 255, 255))
sq.paste(cropped_white, ((sq_size - w) // 2, (sq_size - h) // 2))

sq.save(os.path.join(pub_dir, "favicon.ico"), format="ICO", sizes=[(16, 16), (32, 32), (48, 48), (64, 64)])
sq.save(os.path.join(app_dir, "favicon.ico"), format="ICO", sizes=[(16, 16), (32, 32), (48, 48), (64, 64)])
sq.save(os.path.join(app_dir, "icon.png"), "PNG")
sq.resize((32, 32), Image.Resampling.LANCZOS).save(os.path.join(pub_dir, "favicon.png"), "PNG")
sq.resize((180, 180), Image.Resampling.LANCZOS).save(os.path.join(pub_dir, "apple-touch-icon.png"), "PNG")
sq.resize((192, 192), Image.Resampling.LANCZOS).save(os.path.join(pub_dir, "favicon-192.png"), "PNG")

print("Successfully preserved white background across all logos and favicons!")
