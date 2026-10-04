import { defineConfig, loadEnv, type Plugin } from 'vite';
import react from '@vitejs/plugin-react';
import { handleAskLaura } from './server/askLaura';

/* En desarrollo, /api/ask-laura lo atiende el mismo código que la función de Netlify.
   La clave se lee de react-portfolio/.env.local (ANTHROPIC_API_KEY=...), que no se sube al repositorio. */
function askLauraDev(apiKey: string | undefined): Plugin {
  return {
    name: 'ask-laura-dev',
    configureServer(server) {
      server.middlewares.use('/api/ask-laura', async (req, res) => {
        const chunks: Buffer[] = [];
        for await (const chunk of req) chunks.push(chunk as Buffer);
        const request = new Request('http://localhost/api/ask-laura', {
          method: req.method, headers: { 'Content-Type': 'application/json' },
          body: req.method === 'POST' ? Buffer.concat(chunks) : undefined,
        });
        const response = await handleAskLaura(request, apiKey);
        res.statusCode = response.status;
        response.headers.forEach((v, k) => res.setHeader(k, v));
        if (!response.body) return res.end();
        const reader = response.body.getReader();
        for (;;) {
          const { done, value } = await reader.read();
          if (done) break;
          res.write(value);
        }
        res.end();
      });
    },
  };
}

// El sitio vive en la raíz de laurabenavente.com.
// Si algún día se publica en una subcarpeta (por ejemplo GitHub Pages de proyecto),
// cambia `base` a '/nombre-del-repo/'.
export default defineConfig(({ mode }) => ({
  plugins: [react(), askLauraDev(loadEnv(mode, process.cwd(), '').ANTHROPIC_API_KEY)],
  base: '/',
}));
