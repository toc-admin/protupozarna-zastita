# FSB Protupožarna Zaštita - Website Redesign Progress

## 🆕 Srpanj 2026 — klijentove korekcije + 3 nova koncepta

Nakon feedbacka klijentice (generičan dizajn + činjenične korekcije):

- **Činjenice ispravljene svugdje**: FSB d.o.o. (ne "FSB Protupožarna Zaštita"), 20 godina
  (ne 30), bez projektiranja/nadzora/laboratorija — sada: proizvodnja + R&D, izvođenje,
  savjetovanje/optimizacija, FSB Academy (uskoro). Direktor: Stipe Barišić.
  Kontakt: Samoborska cesta 91, info@fsb-zagreb.hr, +385 1 3496 811,
  domena www.protupozarna-zastita.com.
- **Rješenja** = 6 kategorija (boja, bravarija, brtvljenja, stakla, obloge, parapet);
  **Proizvodi** koriste iste kategorije s pojedinačnim proizvodima.
- **Projekti**: dodane kategorije (stambene zgrade, škole i vrtići, tuneli) + 3 stvarna
  projekta s pravim fotografijama (Tunel Plasina, VMD Bužanova, Bazeni Špansko);
  filtriranje po kategorijama sada radi (ProjectsGrid client komponenta).
- **Prave fotografije** uvezene s vanjskog diska (scripts/import-client-images.sh →
  public/images/fsb/), ~60 optimiziranih fotografija.
- **Tri koncepta naslovnice** za prezentaciju klijentu (route grupa (main) + koncept rute,
  plutajući switcher Trenutna/K1/K2/K3, noindex):
  - `/koncept-1` — "Inženjerska preciznost": svijetli tehnički dizajn, ISO 834 krivulja
    požara kao hero, datasheet estetika (Archivo + IBM Plex Mono)
  - `/koncept-2` — "Industrijski karakter": tamni editorial, dron fotografija, safety
    orange, marquee stvarnih referenci (Anton + Archivo)
  - `/koncept-3` — "Premium partner": topli editorial/monografija, Riječ direktora kao
    pismo (Fraunces + Figtree)


## ✅ Completed

### Design System
- [x] Brand colors configured (brand red #c41e24)
- [x] Tailwind CSS v4 with @theme configuration
- [x] Custom animations (slideUp, scaleIn, blob, float, shimmer)
- [x] Utility classes (grain texture, glass effects, glow, gradient text)
- [x] Inter font integration

### Components

#### Layout
- [x] **Header/Navbar** - Floating pill style, white background, hides on scroll down, shows on scroll up
- [x] **Footer** - Contact info, navigation links, social links

#### Sections
- [x] **Hero** (Homepage) - Full-screen background image with overlay, stats row, CTAs
- [x] **PageHeader** - Compact dark header for inner pages (title, subtitle, description)
- [x] **Services** - 2x2 grid with image backgrounds
- [x] **Products** - Grid with icons, partner logos section
- [x] **Projects** - Portfolio grid with hover effects
- [x] **Stats** - Animated counters on red gradient background
- [x] **Certifications** - 4 certification cards with icons
- [x] **Director** - Team/director section
- [x] **ContactCTA** - Dark call-to-action section

### Pages

#### Homepage (`/`)
- [x] Full-screen hero with generated AI image (herobg.png)
- [x] Services 2x2 bento grid
- [x] Stats section
- [x] Products grid
- [x] Featured projects
- [x] Certifications
- [x] Contact CTA

#### Inner Pages (with PageHeader)
- [x] **O nama** (`/o-nama`) - Story + image, stats, mission/values, certifications, director
- [x] **Usluge listing** (`/usluge`) - Services grid
- [x] **Kontakt** (`/kontakt`) - Contact cards, form + map, emergency CTA
- [x] **Projekti listing** (`/projekti`) - Category filters, portfolio grid
- [x] **Proizvodi listing** (`/proizvodi`) - Product categories, "why us" section
- [x] **Rješenja listing** (`/rjesenja`) - Solutions grid

#### Detail Pages (with image hero)
- [x] **Project detail** (`/projekti/[slug]`) - Full image hero, gallery, scope, sidebar
- [x] **Service detail** (`/usluge/[slug]`) - Image hero, features, other services
- [x] **Solution detail** (`/rjesenja/[slug]`) - Image hero, specs, related solutions

### Images
- [x] Hero background (AI generated - herobg.png)
- [x] Service images (izvodjenje-radova.jpg, laboratorij.jpg, optimizacija.jpg, edukacija.jpg)
- [x] Project placeholder images
- [x] FSB logo integrated

---

## 🔄 In Progress / Needs Review

### Design Refinements
- [ ] Review Services section gradient background (may need adjustment)
- [ ] Check mobile responsiveness across all pages
- [ ] Test navbar hide/show behavior on all pages

---

## 📋 TODO

### Content
- [ ] Replace placeholder images with real project photos
- [ ] Replace placeholder images with real product photos
- [ ] Add real team/director photo
- [ ] Review and update all Croatian copy/text
- [ ] Add more detailed content for services and solutions

### Pages Not Yet Styled
- [ ] **Product detail pages** (`/proizvodi/[category]/[slug]`) - Need image hero treatment
- [ ] **404 page** - Custom not found page

### SEO & Performance
- [ ] Add structured data (JSON-LD) for LocalBusiness
- [ ] Add structured data for Products
- [ ] Optimize images (ensure WebP conversion)
- [ ] Test Lighthouse scores (target 90+)
- [ ] Verify all meta tags
- [ ] Generate sitemap.xml
- [ ] Verify robots.txt

### Functionality
- [ ] Contact form submission (currently UI only)
- [ ] Test all internal links
- [ ] Add loading states where needed

### Polish
- [ ] Add subtle hover animations to more elements
- [ ] Review spacing/whitespace consistency
- [ ] Test on different screen sizes (375px, 768px, 1280px, 1440px+)
- [ ] Cross-browser testing (Chrome, Safari, Firefox)
- [ ] Test with keyboard navigation (accessibility)

### Deployment
- [ ] Configure Vercel deployment
- [ ] Set up custom domain
- [ ] Configure redirects if needed (from old URLs)

---

## 🎨 Design Decisions Made

1. **Navbar**: White pill style, hides on scroll down, shows on scroll up
2. **Hero**: Full-screen image with gradient overlay, text on left
3. **Inner page headers**: Compact dark style (PageHeader component)
4. **Detail pages**: Full image hero specific to each item
5. **Color scheme**: Brand red (#c41e24) with neutral grays
6. **Typography**: Large, bold headlines; clean body text
7. **Cards**: Rounded corners (rounded-2xl), subtle shadows on hover
8. **Animations**: Subtle slide-up on scroll, smooth transitions

---

## 📁 Key Files

```
/components
  /layout
    Header.tsx        # Pill navbar with scroll behavior
    Footer.tsx
  /sections
    Hero.tsx          # Homepage full-screen hero
    PageHeader.tsx    # Inner pages compact header
    Services.tsx      # 2x2 grid
    Products.tsx
    Projects.tsx
    Stats.tsx
    Certifications.tsx
    Director.tsx
    ContactCTA.tsx

/app
  page.tsx            # Homepage
  /o-nama/page.tsx
  /usluge/page.tsx
  /usluge/[slug]/page.tsx
  /projekti/page.tsx
  /projekti/[slug]/page.tsx
  /proizvodi/page.tsx
  /rjesenja/page.tsx
  /rjesenja/[slug]/page.tsx
  /kontakt/page.tsx
  globals.css         # Tailwind + custom styles

/public/images
  herobg.png          # AI generated hero image
  logo-fsb.png        # Company logo
  /services/          # Service images
  /projects/          # Project images
  /products/          # Product images
```

---

*Last updated: April 2026*
