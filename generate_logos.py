import os

partners_dir = r"d:\birmal website\public\images\partners"
os.makedirs(partners_dir, exist_ok=True)

logos = {
    "reliance-mart.svg": """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 60" fill="none">
  <circle cx="28" cy="30" r="18" fill="#002D62"/>
  <path d="M28 16 C28 24 20 28 28 42 C36 28 28 24 28 16 Z" fill="#E11B22"/>
  <text x="56" y="38" font-family="system-ui, -apple-system, sans-serif" font-weight="900" font-size="24" fill="#E11B22">Reliance</text>
  <text x="160" y="38" font-family="system-ui, -apple-system, sans-serif" font-weight="800" font-size="24" fill="#002D62">SMART</text>
</svg>""",

    "dmart.svg": """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 60" fill="none">
  <text x="35" y="44" font-family="system-ui, -apple-system, sans-serif" font-weight="900" font-size="38" fill="#008A44">D</text>
  <polygon points="70,18 73,26 81,26 75,31 77,39 70,34 63,39 65,31 59,26 67,26" fill="#008A44"/>
  <text x="82" y="44" font-family="system-ui, -apple-system, sans-serif" font-weight="900" font-size="38" fill="#008A44">Mart</text>
</svg>""",

    "booker-wholesale.svg": """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 60" fill="none">
  <rect width="240" height="60" rx="8" fill="#FF6600"/>
  <text x="120" y="32" font-family="system-ui, -apple-system, sans-serif" font-weight="900" font-size="26" fill="#FFFFFF" text-anchor="middle">BOOKER</text>
  <text x="120" y="50" font-family="system-ui, -apple-system, sans-serif" font-weight="800" font-size="12" letter-spacing="3" fill="#FFFFFF" text-anchor="middle">WHOLESALE</text>
</svg>""",

    "metro.svg": """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 60" fill="none">
  <rect width="240" height="60" rx="8" fill="#003399"/>
  <text x="120" y="43" font-family="system-ui, -apple-system, sans-serif" font-weight="900" font-size="34" letter-spacing="3" fill="#FFCC00" text-anchor="middle">METRO</text>
</svg>""",

    "udaan.svg": """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 60" fill="none">
  <circle cx="38" cy="30" r="20" fill="#E52E2E"/>
  <path d="M33 20 C40 25 40 35 33 40 M29 24 C34 27 34 33 29 36" stroke="white" stroke-width="3" stroke-linecap="round" fill="none"/>
  <text x="70" y="40" font-family="system-ui, -apple-system, sans-serif" font-weight="900" font-size="34" fill="#111827">udaan</text>
</svg>""",

    "patel-retail.svg": """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 60" fill="none">
  <text x="20" y="32" font-family="system-ui, -apple-system, sans-serif" font-weight="900" font-size="20" fill="#1B365D">PATEL RETAIL</text>
  <text x="20" y="48" font-family="system-ui, -apple-system, sans-serif" font-weight="700" font-size="10" letter-spacing="2" fill="#886633">TRUST &amp; TOGETHERNESS</text>
</svg>""",

    "apna-bazar.svg": """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 60" fill="none">
  <rect width="240" height="60" rx="8" fill="#E50914"/>
  <text x="120" y="38" font-family="system-ui, -apple-system, sans-serif" font-weight="900" font-size="22" letter-spacing="1" fill="#FFFFFF" text-anchor="middle">APNA BAZAR</text>
</svg>""",

    "rk-bazar.svg": """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 60" fill="none">
  <text x="40" y="38" font-family="system-ui, -apple-system, sans-serif" font-weight="900" font-size="28" fill="#E52E2E">RK</text>
  <text x="88" y="38" font-family="system-ui, -apple-system, sans-serif" font-weight="800" font-size="28" fill="#1E3A8A">BAZAR</text>
</svg>""",

    "amazon.svg": """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 60" fill="none">
  <text x="45" y="35" font-family="system-ui, -apple-system, sans-serif" font-weight="800" font-size="32" fill="#111827">amazon</text>
  <path d="M48 43 C80 56 125 56 150 40" stroke="#FF9900" stroke-width="3.5" stroke-linecap="round" fill="none"/>
  <polygon points="146,35 156,41 147,47" fill="#FF9900"/>
</svg>""",

    "flipkart.svg": """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 60" fill="none">
  <rect x="25" y="14" width="28" height="32" rx="4" fill="#FFE11B"/>
  <text x="32" y="38" font-family="system-ui, -apple-system, sans-serif" font-weight="900" font-size="24" fill="#2874F0">f</text>
  <text x="64" y="38" font-family="system-ui, -apple-system, sans-serif" font-weight="800" font-style="italic" font-size="28" fill="#2874F0">Flipkart</text>
</svg>"""
}

for name, content in logos.items():
    with open(os.path.join(partners_dir, name), "w", encoding="utf-8") as f:
        f.write(content.strip())
print("Updated partner SVGs with high-contrast viewBox!")
