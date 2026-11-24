import os
import time
from playwright.sync_api import sync_playwright

OUT_DIR = r"d:\birmal website\scratch\qa_screenshots"
os.makedirs(OUT_DIR, exist_ok=True)

PAGES = [
    {"name": "home", "url": "http://localhost:3000/"},
    {"name": "products", "url": "http://localhost:3000/products"},
    {"name": "about", "url": "http://localhost:3000/about"},
    {"name": "faq", "url": "http://localhost:3000/faq"},
    {"name": "gallery", "url": "http://localhost:3000/gallery"},
    {"name": "where-to-buy", "url": "http://localhost:3000/where-to-buy"},
    {"name": "contact", "url": "http://localhost:3000/contact"},
]

def scroll_full_page(page):
    page.evaluate("""async () => {
        await new Promise((resolve) => {
            let totalHeight = 0;
            let distance = 300;
            let timer = setInterval(() => {
                let scrollHeight = document.body.scrollHeight;
                window.scrollBy(0, distance);
                totalHeight += distance;
                if(totalHeight >= scrollHeight){
                    clearInterval(timer);
                    window.scrollTo(0, 0);
                    resolve();
                }
            }, 50);
        });
    }""")
    time.sleep(0.5)

def run():
    with sync_playwright() as p:
        try:
            browser = p.chromium.launch(channel="msedge", headless=True)
        except Exception:
            try:
                browser = p.chromium.launch(channel="chrome", headless=True)
            except Exception:
                browser = p.chromium.launch(headless=True)

        context_desktop = browser.new_context(
            viewport={"width": 1440, "height": 900},
            device_scale_factor=1.5
        )
        page_desktop = context_desktop.new_page()

        for pg in PAGES:
            print(f"Capturing Desktop: {pg['name']}...")
            page_desktop.goto(pg["url"], wait_until="networkidle")
            scroll_full_page(page_desktop)
            dest = os.path.join(OUT_DIR, f"desktop_{pg['name']}.png")
            page_desktop.screenshot(path=dest, full_page=True)
            print(f"Saved {dest}")

        browser.close()
        print("Updated screenshots captured!")

if __name__ == "__main__":
    run()
