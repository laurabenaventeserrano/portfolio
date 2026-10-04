import type { Config } from '@netlify/functions';
import { handleAskLaura } from '../../server/askLaura';

/* Ask Laura en producción. La clave se configura en Netlify como variable de entorno ANTHROPIC_API_KEY. */
export default (request: Request) => handleAskLaura(request, Netlify.env.get('ANTHROPIC_API_KEY'));

export const config: Config = {
  path: '/api/ask-laura',
  method: 'POST',
  // Como mucho 12 preguntas por minuto y por visitante: protege la cuenta de abusos
  rateLimit: { windowLimit: 12, windowSize: 60, aggregateBy: ['ip', 'domain'] },
};
