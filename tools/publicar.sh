#!/usr/bin/env bash
# Reune en _site lo unico que se publica.
#
# No es un paso de compilacion: no hay npm, ni bundler, ni transformacion de
# ningun archivo. Es una lista de lo que sale y una copia. Existe porque la
# raiz del repositorio tambien guarda el material de trabajo (los prompts, la
# guia de identidad, la carpeta de referencia, los originales de video) y eso
# no tiene por que servirse desde el dominio del portfolio.
set -euo pipefail

rm -rf _site
mkdir -p _site

# Paginas y su sistema
cp index.html story1-case-study.html story2-case-study.html story3-case-study.html _site/
cp styles.css tokens.css nav.css cursor.css main.js nav.js cursor.js favicon.ico _site/
cp Laura_Benavente_CV_En.pdf _site/

# Medios. Dos cosas se quedan fuera y las dos a proposito.
#
# Los .mov de images/ son los originales sin recortar: Code-proto-1.mov
# ensena a partir de 0:31 el entorno de autoria, el selector de modelo y el
# prompt en pantalla. Lo que se publica son los .mp4.
#
# Y originals/ guarda lo que ya no enlaza ninguna pagina: versiones
# anteriores, recortes descartados y mockups que se quedaron por el camino.
# Eran 45 archivos y 21MB viajando al dominio en cada despliegue, el 28% del
# peso del sitio, para que no los pidiera nadie. No se borran porque son el
# material de trabajo; simplemente no salen. Esta carpeta no se copia.
mkdir -p _site/images _site/video _site/fonts
find images -maxdepth 1 -type f ! -iname '*.mov' -exec cp {} _site/images/ \;
cp video/*.mp4 _site/video/
cp fonts/*.woff2 _site/fonts/

# El laboratorio: la demo de las postales corre entera en el navegador, asi
# que se publica tal cual. No hay servidor detras y ninguna foto sale del
# dispositivo de quien la usa.
mkdir -p _site/lab
cp -R lab/. _site/lab/

echo "_site listo:"
du -sh _site
