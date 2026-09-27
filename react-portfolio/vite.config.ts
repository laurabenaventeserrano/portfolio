import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// El sitio vive en la raíz de laurabenavente.com.
// Si algún día se publica en una subcarpeta (por ejemplo GitHub Pages de proyecto),
// cambia `base` a '/nombre-del-repo/'.
export default defineConfig({
  plugins: [react()],
  base: '/',
});
