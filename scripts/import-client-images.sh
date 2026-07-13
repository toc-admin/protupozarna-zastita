#!/bin/bash
# Import + optimize client photos from the external drive (Client_FSB)
# into public/images/fsb/. Resizes with sips and converts to JPEG.
# Usage: ./scripts/import-client-images.sh
set -euo pipefail

SRC="/Volumes/NineFold/Client_FSB/FSB-images"
DEST="$(cd "$(dirname "$0")/.." && pwd)/public/images/fsb"

if [ ! -d "$SRC" ]; then
  echo "External drive not mounted: $SRC" >&2
  exit 1
fi

mkdir -p "$DEST"/{factory,rjesenja,projekti,proizvodi}

# imp <src-path> <dest-relative> <max-dimension>
imp() {
  local src="$1" dest="$DEST/$2" size="$3"
  if [ ! -f "$src" ]; then
    echo "MISSING: $src" >&2
    return 0
  fi
  sips -s format jpeg -s formatOptions 80 -Z "$size" "$src" --out "$dest" >/dev/null
  echo "ok: $2"
}

# --- Factory / drone (hero material) ---
imp "$SRC/FSB - dron foto/FSB foto (55).png" factory/factory-aerial-1.jpg 2400
imp "$SRC/FSB - dron foto/FSB foto (22).png" factory/factory-aerial-2.jpg 2400
imp "$SRC/FSB - dron foto/FSB foto (62).png" factory/factory-aerial-3.jpg 2400
imp "$SRC/FSB - dron foto/FSB foto (12).png" factory/factory-aerial-4.jpg 2400
imp "$SRC/FSB - dron foto/FSB foto (49).png" factory/factory-aerial-5.jpg 2400

# --- Rješenja categories ---
imp "$SRC/Protupožarna boja/FSB foto (24).png"  rjesenja/boja-1.jpg 1920
imp "$SRC/Protupožarna boja/FSB foto (25).png"  rjesenja/boja-2.jpg 1920
imp "$SRC/Protupožarna boja/FSB foto (26).png"  rjesenja/boja-3.jpg 1920
imp "$SRC/Protupožarna bravarija/Katalog_slike_DSC06749.jpg" rjesenja/bravarija-1.jpg 1920
imp "$SRC/Protupožarna bravarija/FSB - dvokrilna protupožarna vrata.jpg" rjesenja/bravarija-2.jpg 1920
imp "$SRC/Protupožarna bravarija/Katalog_slike_DSC06768.jpg" rjesenja/bravarija-3.jpg 1920
imp "$SRC/Protupožarna brtvljenja/6610.JPG" rjesenja/brtvljenja-1.jpg 1920
imp "$SRC/Protupožarna brtvljenja/5913.JPG" rjesenja/brtvljenja-2.jpg 1920
imp "$SRC/Protupožarna brtvljenja/7432.JPG" rjesenja/brtvljenja-3.jpg 1920
imp "$SRC/Protupožarna stakla/FSB foto (14).png" rjesenja/stakla-1.jpg 1920
imp "$SRC/Protupožarna stakla/FSB foto (18).png" rjesenja/stakla-2.jpg 1920
imp "$SRC/Protupožarna stakla/FSB foto (51).png" rjesenja/stakla-3.jpg 1920
imp "$SRC/Protupožarne obloge/FSB foto (6).png"  rjesenja/obloge-1.jpg 1920
imp "$SRC/Protupožarne obloge/FSB foto (7).png"  rjesenja/obloge-2.jpg 1920
imp "$SRC/Protupožarne obloge/FSB foto (10).png" rjesenja/obloge-3.jpg 1920
imp "$SRC/Protupožarni parapet/FSB foto (32).png" rjesenja/parapet-1.jpg 1920
imp "$SRC/Protupožarni parapet/FSB foto (33).png" rjesenja/parapet-2.jpg 1920
imp "$SRC/Protupožarni parapet/FSB foto (34).png" rjesenja/parapet-3.jpg 1920

# --- Projekti ---
imp "$SRC/Projekt Tunel Plasina/DSC01727.jpg" projekti/tunel-plasina-1.jpg 1920
imp "$SRC/Projekt Tunel Plasina/DSC01672.jpg" projekti/tunel-plasina-2.jpg 1920
imp "$SRC/Projekt Tunel Plasina/DSC01700.jpg" projekti/tunel-plasina-3.jpg 1920
imp "$SRC/Projekt Tunel Plasina/DSC01745.jpg" projekti/tunel-plasina-4.jpg 1920
imp "$SRC/Projekt Bazeni Špansko/PRO09704.jpg" projekti/bazeni-spansko-1.jpg 1920
imp "$SRC/Projekt Bazeni Špansko/PRO09720.jpg" projekti/bazeni-spansko-2.jpg 1920
imp "$SRC/Projekt Bazeni Špansko/PRO09740.jpg" projekti/bazeni-spansko-3.jpg 1920
imp "$SRC/Projekt Bazeni Špansko/PRO09760.jpg" projekti/bazeni-spansko-4.jpg 1920
imp "$SRC/Projekt VMD Blok Bužanova/6610.JPG" projekti/vmd-buzanova-1.jpg 1920
imp "$SRC/Projekt VMD Blok Bužanova/5913.JPG" projekti/vmd-buzanova-2.jpg 1920
imp "$SRC/Projekt VMD Blok Bužanova/7432.JPG" projekti/vmd-buzanova-3.jpg 1920
imp "$SRC/Projekt VMD Blok Bužanova/5765.JPG" projekti/vmd-buzanova-4.jpg 1920

# --- Proizvodi (catalog shots, white background) ---
M="$SRC/FSB - protupožarni građevinski materijal"
imp "$M/Promapaint SC3.jpg" proizvodi/promapaint-sc3.jpg 1200
imp "$M/Promapaint SC4.jpg" proizvodi/promapaint-sc4.jpg 1200
imp "$M/HENSOTERM 410KS - indoor - R 30R60 25kg.JPG" proizvodi/hensoterm-410ks.jpg 1200
imp "$M/HENSOTERM 421KS - indoor - R 30R60 kanta 25kg.JPG" proizvodi/hensoterm-421ks.jpg 1200
imp "$M/PP ekspandirajući premaz za čelik Charflame kanta 25kg.JPG" proizvodi/charflame.jpg 1200
imp "$M/HENSOMASTIK 5KS PP prevlaka yellow kanta 12.5 kg.JPG" proizvodi/hensomastik-5ks.jpg 1200
imp "$M/PROMASTOP-FC Intumex RS10 D=250_60mm, 2kom.JPG" proizvodi/promastop-fc.jpg 1200
imp "$M/PROMASTOP-U  UniCollar - PP obujmica u traci, l=2190mm.JPG" proizvodi/promastop-u.jpg 1200
imp "$M/PROMASEAL-A, PP brtvena smjesa sivo, kartuša 310ml.JPG" proizvodi/promaseal-a.jpg 1200
imp "$M/PROMASTOP-CC intumex ac PP prevlaka za kabele 12.5kg.JPG" proizvodi/promastop-cc.jpg 1200
imp "$M/PROMASTOP-L, PP jastuk - veliki, 750kg.JPG" proizvodi/promastop-l.jpg 1200
imp "$M/PROMAFOAM-C PP pjena za pištolj, boca 750ml.JPG" proizvodi/promafoam-c.jpg 1200
imp "$M/PP akril bijeli, akrtuša 310ml.JPG" proizvodi/pp-akril.jpg 1200
imp "$M/FX200 ekspandijaruća trake za cijevi.JPG" proizvodi/fx200-traka.jpg 1200
imp "$M/PROMAT - PP ljepilo K84 kanta 15kg.JPG" proizvodi/k84-ljepilo.jpg 1200
imp "$M/protupožarne ploče/Promatect H.png" proizvodi/promatect-h.jpg 1200
imp "$M/protupožarne ploče/Promatect 100.png" proizvodi/promatect-100.jpg 1200
imp "$M/protupožarne ploče/Promatect 200-1.png" proizvodi/promatect-200.jpg 1200
imp "$M/protupožarne ploče/AD 40.png" proizvodi/ad-40.jpg 1200
imp "$M/protupožarne ploče/masterboard 1.png" proizvodi/masterboard.jpg 1200
imp "$M/protupožarne ploče/L 500 1.png" proizvodi/l-500.jpg 1200
imp "$SRC/Protupožarna bravarija/Katalog_slike_DSC06751.jpg" proizvodi/fsb-vrata-jednokrilna.jpg 1200
imp "$SRC/Protupožarna bravarija/FSB - dvokrilna protupožarna vrata.jpg" proizvodi/fsb-vrata-dvokrilna.jpg 1200
imp "$SRC/Protupožarni parapet/FSB foto (35).png" proizvodi/fsb-parapet.jpg 1200
imp "$SRC/Protupožarna stakla/FSB foto (52).png" proizvodi/fsb-staklo.jpg 1200

echo "Done. Total size:"
du -sh "$DEST"
