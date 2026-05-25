#!/bin/bash

# Create placeholder images for the website
# These should be replaced with actual images

cd /Users/brunocukic/protupozarna-zastita/public/images

# Create a simple placeholder SVG function
create_placeholder() {
  local file="$1"
  local text="$2"
  mkdir -p "$(dirname "$file")"
  cat > "$file" << EOF
<svg width="800" height="600" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="#e5e5e5"/>
  <text x="50%" y="50%" font-family="Arial, sans-serif" font-size="24" fill="#737373" text-anchor="middle" dy=".3em">$text</text>
</svg>
EOF
}

# Hero
create_placeholder "hero-bg.svg" "Hero Background"

# Services
create_placeholder "services/izvodjenje-radova.svg" "Izvođenje radova"
create_placeholder "services/optimizacija.svg" "Optimizacija troškova"
create_placeholder "services/edukacija.svg" "Edukacija"
create_placeholder "services/laboratorij.svg" "Laboratorij"

# Projects
create_placeholder "projects/kbc-sestre.svg" "KBC Sestre milosrdnice"
create_placeholder "projects/bhb.svg" "Poslovna zgrada BHB"
create_placeholder "projects/zicara-sljeme.svg" "Žičara Sljeme"
create_placeholder "projects/arena.svg" "Shopping centar Arena"
create_placeholder "projects/westin.svg" "Hotel Westin"
create_placeholder "projects/pliva.svg" "Farmaceutska tvornica Pliva"

# Solutions
create_placeholder "solutions/fsg-s.svg" "FSG-S"
create_placeholder "solutions/fsp-90.svg" "FSP-90"
create_placeholder "solutions/vod-dim.svg" "Vod za odvod dima"
create_placeholder "solutions/fsd-1.svg" "FSD-1"
create_placeholder "solutions/fsd-1-hh.svg" "FSD-1-HH"
create_placeholder "solutions/brtva-cijevi.svg" "Brtva za cijevi"

# Products categories
create_placeholder "products/categories/brtvljenje.svg" "Brtvljenje"
create_placeholder "products/categories/boja.svg" "Boja i premaz"
create_placeholder "products/categories/ploce.svg" "Ploče"
create_placeholder "products/categories/moduli.svg" "Moduli"
create_placeholder "products/categories/stakla.svg" "Stakla"
create_placeholder "products/categories/vuna.svg" "Vuna"
create_placeholder "products/categories/silikatne.svg" "Silikatne ploče"

# Products
create_placeholder "products/promat-unicable.svg" "PROMAT UNICABLE"
create_placeholder "products/promat-collar.svg" "PROMAT COLLAR"
create_placeholder "products/hensel-firesafe.svg" "HENSEL FIRESAFE"
create_placeholder "products/promatect-h.svg" "PROMATECT-H"
create_placeholder "products/promat-modular.svg" "PROMAT MODULAR"
create_placeholder "products/promat-systemglas.svg" "PROMAT SYSTEMGLAS"
create_placeholder "products/promat-wool.svg" "PROMAT kamena vuna"
create_placeholder "products/silca-ploce.svg" "SILCA ploče"

# Team
create_placeholder "team/direktor.svg" "Direktor"

echo "Placeholder images created successfully!"
