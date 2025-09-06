# Richman Suits — Rich Landing (V2)

A polished, image-led, SEO-ready static site with hero section, features, gallery, contact cards, sticky mobile CTA, and schema markup.

## Replace placeholders
- Swap images in `/images` with real photos (`hero.jpg`, `gallery_1..6.jpg`, `og-image.jpg`).
- Update domain (`https://www.example.com`) in `index.html`, `robots.txt`, and `sitemap.xml`.
- Adjust hours and address in `index.html` if needed.

## Deploy (GitHub Pages)
1. Push the folder to a GitHub repo.
2. Settings → Pages → Deploy from a branch → `main` / root.
3. Add your **custom domain** there.
4. GoDaddy DNS:
   - A (@) → 185.199.108.153 / .109.153 / .110.153 / .111.153
   - CNAME (www) → `<username>.github.io`
5. Back on GitHub Pages: enable **Enforce HTTPS**.

## Editing tips
- Buttons: `tel:+91...` and `https://wa.me/<number>?text=...` control call/WhatsApp behavior.
- Sticky bar shows on mobile automatically.
- Meta tags + OpenGraph + Twitter + JSON-LD are already included.
