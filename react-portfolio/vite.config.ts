import { defineConfig, loadEnv, type Plugin } from 'vite';
import { readdirSync, existsSync } from 'node:fs';
import { join, resolve } from 'node:path';
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

/* Qué archivos de media existen en public/video y public/craft. La página de un proyecto de Craft
   solo pinta un vídeo o una imagen si su archivo está aquí: nunca un reproductor vacío.
   En desarrollo, al añadir o quitar un archivo la lista se actualiza y la página se recarga. */
function publicMedia(): Plugin {
  const ID = 'virtual:public-media';
  const DIRS = ['video', 'craft'];
  const list = () => DIRS.flatMap((d) => {
    const walk = (dir: string, url: string): string[] => {
      if (!existsSync(dir)) return [];
      return readdirSync(dir, { withFileTypes: true }).flatMap((e) =>
        e.isDirectory() ? walk(join(dir, e.name), `${url}/${e.name}`) : [`${url}/${e.name}`]);
    };
    return walk(resolve('public', d), `/${d}`);
  });
  return {
    name: 'public-media',
    resolveId: (id) => (id === ID ? '\0' + ID : undefined),
    load: (id) => (id === '\0' + ID ? `export default new Set(${JSON.stringify(list())});` : undefined),
    configureServer(server) {
      const refresh = (file: string) => {
        if (!DIRS.some((d) => file.startsWith(resolve('public', d)))) return;
        const mod = server.moduleGraph.getModuleById('\0' + ID);
        if (mod) { server.moduleGraph.invalidateModule(mod); server.ws.send({ type: 'full-reload' }); }
      };
      server.watcher.on('add', refresh);
      server.watcher.on('unlink', refresh);
    },
  };
}

// El sitio vive en la raíz de laurabenavente.com.
// Si algún día se publica en una subcarpeta (por ejemplo GitHub Pages de proyecto),
// cambia `base` a '/nombre-del-repo/'.
export default defineConfig(({ mode }) => ({
  plugins: [react(), publicMedia(), askLauraDev(loadEnv(mode, process.cwd(), '').ANTHROPIC_API_KEY)],
  base: '/',
}));
