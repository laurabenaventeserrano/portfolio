import Anthropic from '@anthropic-ai/sdk';
import { SYSTEM_PROMPT } from './knowledge';

/*
  "Ask Laura": recibe la pregunta y el historial, llama a Claude y devuelve la respuesta en streaming
  como texto plano. La usan la función de Netlify (producción) y el servidor de Vite (desarrollo).
  La clave de la API solo vive en el servidor (variable ANTHROPIC_API_KEY), nunca en el navegador.
*/

const MODEL = 'claude-opus-5-5';
const MAX_QUESTION = 1000;   // caracteres por pregunta
const MAX_TURNS = 12;        // mensajes de historial que se reenvían (los más recientes)
const MAX_HISTORY_CHARS = 4000;

const PAGES: Record<string, string> = {
  '/': 'the home page',
  '/work/cch-ifirm-cloud-migration': 'Case 01, CCH iFirm Cloud Migration',
  '/work/ai-customer-communications': 'Case 02, AI-Powered Customer Communications',
  '/work/ai-client-data-migration': 'Case 03, AI-Powered Client Data Migration',
  '/work/telefonica-multi-device': 'Case 04, Multi-device Product Design for Telefónica',
};

interface Turn { role: 'user' | 'assistant'; content: string }

const json = (status: number, error: string) =>
  new Response(JSON.stringify({ error }), { status, headers: { 'Content-Type': 'application/json' } });

/* Valida el cuerpo y lo convierte en mensajes para la API. Devuelve un string si hay error. */
function toMessages(body: unknown): Anthropic.MessageParam[] | string {
  if (!body || typeof body !== 'object') return 'Invalid request.';
  const { message, history, page } = body as { message?: unknown; history?: unknown; page?: unknown };
  if (typeof message !== 'string' || !message.trim()) return 'Ask me something first.';
  if (message.length > MAX_QUESTION) return `Please keep your question under ${MAX_QUESTION} characters.`;

  const turns: Turn[] = Array.isArray(history)
    ? history.filter((t): t is Turn =>
        !!t && (t.role === 'user' || t.role === 'assistant') && typeof t.content === 'string' && t.content.length <= MAX_HISTORY_CHARS,
      ).slice(-MAX_TURNS)
    : [];
  // La API exige empezar por un mensaje del usuario
  while (turns.length && turns[0].role !== 'user') turns.shift();

  const where = typeof page === 'string' && PAGES[page] ? PAGES[page] : null;
  const question = where ? `[The visitor is on ${where}.]\n\n${message.trim()}` : message.trim();
  return [...turns.map((t) => ({ role: t.role, content: t.content })), { role: 'user', content: question }];
}

export async function handleAskLaura(request: Request, apiKey: string | undefined): Promise<Response> {
  if (request.method !== 'POST') return json(405, 'Method not allowed.');
  if (!apiKey) return json(503, 'Ask Laura is not configured yet.');

  let body: unknown;
  try { body = await request.json(); } catch { return json(400, 'Invalid request.'); }
  const messages = toMessages(body);
  if (typeof messages === 'string') return json(400, messages);

  const client = new Anthropic({ apiKey });
  const encoder = new TextEncoder();

  const stream = new ReadableStream<Uint8Array>({
    async start(controller) {
      let wrote = false;
      try {
        const response = client.beta.messages.stream({
          model: MODEL,
          max_tokens: 4000,
          // Preguntas sencillas sobre un texto fijo: esfuerzo bajo, respuestas rápidas y baratas
          output_config: { effort: 'low' },
          // El conocimiento es fijo: se cachea y las preguntas siguientes cuestan una fracción
          system: [{ type: 'text', text: SYSTEM_PROMPT, cache_control: { type: 'ephemeral' } }],
          messages,
          // Si un filtro de seguridad rechaza la pregunta, la API la reintenta en el modelo recomendado
          betas: ['server-side-fallback-2026-07-01'],
          fallbacks: 'default',
        });
        for await (const event of response) {
          if (event.type === 'content_block_delta' && event.delta.type === 'text_delta') {
            controller.enqueue(encoder.encode(event.delta.text));
            wrote = true;
          }
        }
        const final = await response.finalMessage();
        if (final.stop_reason === 'refusal' && !wrote) {
          controller.enqueue(encoder.encode("I'd rather not answer that one here. You can write to me at laurabenavente@me.com."));
        }
      } catch (error) {
        const busy = error instanceof Anthropic.RateLimitError || error instanceof Anthropic.InternalServerError;
        console.error('Ask Laura error', error instanceof Anthropic.APIError ? error.status : '', error);
        controller.enqueue(encoder.encode(
          (wrote ? '\n\n' : '') + (busy
            ? "I'm getting a lot of questions right now. Try again in a minute, or write to me at laurabenavente@me.com."
            : 'Something went wrong on my side. You can always reach me at laurabenavente@me.com.'),
        ));
      } finally {
        controller.close();
      }
    },
  });

  return new Response(stream, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8', 'Cache-Control': 'no-store', 'X-Content-Type-Options': 'nosniff' },
  });
}
