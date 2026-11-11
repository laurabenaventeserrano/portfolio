#!/usr/bin/env bash
# Reune en _site la version React del portfolio (react-portfolio/), que
# sustituye a las paginas estaticas de la raiz. Compila la app y le suma lo
# que vive fuera de ella pero se sigue publicando en el mismo dominio: el
# laboratorio y el CV.
set -euo pipefail
cd "$(dirname "$0")/.."

(cd react-portfolio && npm ci --no-audit --no-fund && npm run build)

rm -rf _site
cp -R react-portfolio/dist _site

# Los .mov de public/images son originales sin recortar: no se publican.
find _site/images -maxdepth 1 -iname '*.mov' -delete

# El favicon lo trae la app (react-portfolio/public/favicon.ico); aqui solo el CV.
cp Laura_Benavente_CV_En.pdf _site/
mkdir -p _site/lab
cp -R lab/. _site/lab/

# Maux: página suelta, solo accesible por enlace (no está enlazada desde el
# portfolio y lleva noindex). Se compila en el repo de Maux con
# `npm run build:portfolio` y se copia aquí en maux/.
if [ -d maux ]; then
  mkdir -p _site/maux
  cp -R maux/. _site/maux/
fi

echo "_site listo:"
du -sh _site
