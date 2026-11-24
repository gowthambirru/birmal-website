import os
import cv2
import numpy as np
from PIL import Image

RAW_DIR = r"C:\Users\gowth\OneDrive\Desktop\birmal photos"
OUT_DIR = r"d:\birmal website\public\images"
SCRATCH_DIR = r"d:\birmal website\scratch"

os.makedirs(OUT_DIR, exist_ok=True)
os.makedirs(os.path.join(OUT_DIR, "products"), exist_ok=True)
os.makedirs(os.path.join(OUT_DIR, "partners"), exist_ok=True)

def remove_star_watermark(img):
    """
    Cleans the Veo/Gemini star watermark in the bottom-right corner.
    Preserves natural studio floor gradient and texture without blur.
    """
    h, w = img.shape[:2]
    is_rgba = (len(img.shape) == 3 and img.shape[2] == 4)
    bgr = img[:, :, :3]
    alpha = img[:, :, 3] if is_rgba else None

    # Focus on the bottom-right 12% region where the star is located
    y0 = int(h * 0.88)
    x0 = int(w * 0.88)
    corner = bgr[y0:, x0:]

    # Sample clean floor from immediate left of watermark region
    # To get the expected studio floor horizontal profile
    sample_strip = bgr[y0:, max(0, x0 - 150):x0]
    row_medians = np.median(sample_strip, axis=1, keepdims=True)

    # Difference between the corner and expected clean floor
    diff = np.linalg.norm(corner.astype(float) - row_medians, axis=2)

    # Watermark star mask
    star_mask = (diff > 3.0).astype(np.uint8) * 255

    # Filter out tiny noise: only keep connected components that belong to the star
    num_labels, labels, stats, centroids = cv2.connectedComponentsWithStats(star_mask)
    clean_mask = np.zeros_like(star_mask)
    for i in range(1, num_labels):
        area = stats[i, cv2.CC_STAT_AREA]
        # Star is a distinct cluster of pixels
        if area > 10:
            clean_mask[labels == i] = 255

    # Dilate slightly to ensure full coverage of antialiased star edges
    kernel = cv2.getStructuringElement(cv2.MORPH_ELLIPSE, (7, 7))
    dilated_mask = cv2.dilate(clean_mask, kernel)

    # Full image mask
    full_mask = np.zeros((h, w), dtype=np.uint8)
    full_mask[y0:, x0:] = dilated_mask

    # Inpaint with Telea algorithm
    inpainted_bgr = cv2.inpaint(bgr, full_mask, 5, cv2.INPAINT_TELEA)

    # Also reconstruct smooth background floor gradient for the masked region
    # to eliminate any possible faint residual luminance difference
    corner_inpainted = inpainted_bgr[y0:, x0:]
    mask_region = dilated_mask > 0

    # Smooth horizontal projection of studio floor
    reconstructed_floor = np.tile(row_medians, (1, w - x0, 1)).astype(np.uint8)
    # Blend smoothly
    corner_inpainted[mask_region] = reconstructed_floor[mask_region]
    inpainted_bgr[y0:, x0:] = corner_inpainted

    if is_rgba:
        return np.dstack((inpainted_bgr, alpha))
    return inpainted_bgr

# 1. Process Bottle Shots
product_files = {
    "1 ltr.png": "bottle-1l",
    "200 ml.png": "bottle-200ml",
    "500 ml.png": "bottle-500ml",
    "5 ltr.png": "bottle-5l",
    "images floor cleaner.png": "bottle-lineup",
}

print("Cleaning bottle images...")
for src_name, dst_base in product_files.items():
    src_path = os.path.join(RAW_DIR, src_name)
    if not os.path.exists(src_path):
        print(f"File not found: {src_path}")
        continue

    img = cv2.imread(src_path, cv2.IMREAD_UNCHANGED)
    cleaned = remove_star_watermark(img)

    # Save PNG and optimized WEBP
    png_path = os.path.join(OUT_DIR, "products", f"{dst_base}.png")
    webp_path = os.path.join(OUT_DIR, "products", f"{dst_base}.webp")

    cv2.imwrite(png_path, cleaned)
    
    # Save optimized webp via Pillow
    pil_img = Image.fromarray(cv2.cvtColor(cleaned, cv2.COLOR_BGR2RGB))
    pil_img.save(webp_path, "WEBP", quality=92, method=6)
    print(f"Saved cleaned {dst_base}.webp and .png")

# 2. Hero Model Cutout
hero_scratch = os.path.join(SCRATCH_DIR, "hero-model-birmal.png")
if os.path.exists(hero_scratch):
    dest_hero = os.path.join(OUT_DIR, "hero-model-birmal.png")
    hero_im = Image.open(hero_scratch)
    hero_im.save(dest_hero, "PNG")
    hero_im.save(os.path.join(OUT_DIR, "hero-model-birmal.webp"), "WEBP", quality=95)
    print("Saved hero-model-birmal.png and .webp")

print("Asset processing complete!")
