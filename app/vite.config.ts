import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // Dos destinos con raices distintas. GitHub Pages sirve esto como project
  // page en /portfolio/; Netlify lo sirve en la raiz del dominio. Netlify
  // define NETLIFY=true durante su build, asi que el mismo repo produce el
  // base correcto en cada sitio sin tocar nada a mano.
  base: process.env.NETLIFY ? '/' : '/portfolio/',
  plugins: [react()],
})
