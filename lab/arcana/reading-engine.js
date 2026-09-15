/*
 * Arcana reading engine.
 *
 * The card is drawn by the app, never invented here. This module takes
 * {card, question, reversed, locale} and composes a reading by pulling the
 * card's own domain-specific content (arcana-content.js) — it does not
 * generate free-form language, so every reading is grounded in that card's
 * fixed meaning, vocabulary and orientation logic.
 *
 * Pipeline: detect question domain + structure -> pull the card's content for
 * that domain -> layer in a shadow/advice clause -> resolve orientation ->
 * pick a card-specific reflection -> validate against generic/banned phrasing.
 */
(function (global) {
  var CONTENT = global.ARCANA_CONTENT || {};
  var DOMAINS = global.ARCANA_DOMAINS || ['general'];

  // ---- question understanding -------------------------------------------------

  var DOMAIN_PATTERNS = [
    ['career', /\b(job|work|career|business|boss|promotion|resign|quit|coworker|trabajo|empleo|carrera|negocio|jefe|ascenso|renunciar|compañer)/i],
    ['money', /\b(money|debt|invest|price|salary|afford|save|loan|dinero|deuda|invert|precio|sueldo|ahorra|préstamo|pagar)/i],
    ['movement', /\b(move|moving|travel|abroad|country|city|relocate|mudar|mudanza|viajar|país|ciudad|extranjero|emigrar)/i],
    ['creative', /\b(create|creative|write|writing|art|paint|music|idea|project|crear|creativ|escribir|arte|pintar|música|proyecto)/i],
    ['family', /\b(family|mother|father|parent|sibling|brother|sister|familia|madre|padre|hermano|hermana|padres)/i],
    ['relationship', /\b(love|relationship|partner|boyfriend|girlfriend|marry|marriage|date|dating|crush|feelings for|this person|someone i|pursue (him|her|them)|tell (him|her|them)|confess|amor|relación|pareja|novio|novia|casar|cita|enamorad|esta persona|decirle|confesar)/i],
    ['relationship', /\b(friend|friendship|amigo|amistad)/i],
    ['growth', /\b(who am i|identity|purpose|myself|my life|quién soy|identidad|propósito|mi vida)/i]
  ];

  var STRUCTURE_PATTERNS = [
    ['should', /^\s*(should i|debería|debo)/i],
    ['will', /^\s*(will|¿?va a|pasará)/i],
    ['is', /^\s*(is|are|es esto|está)/i],
    ['can', /^\s*(can i|puedo)/i],
    ['why', /^\s*(why|por qué)/i],
    ['what', /^\s*(what should|qué debería|qué hago)/i]
  ];

  function detectDomain(question) {
    var text = String(question || '');
    for (var i = 0; i < DOMAIN_PATTERNS.length; i++) {
      if (DOMAIN_PATTERNS[i][1].test(text)) return DOMAIN_PATTERNS[i][0];
    }
    return 'general';
  }

  function detectStructure(question) {
    var text = String(question || '').trim();
    for (var i = 0; i < STRUCTURE_PATTERNS.length; i++) {
      if (STRUCTURE_PATTERNS[i][1].test(text)) return STRUCTURE_PATTERNS[i][0];
    }
    return 'open';
  }

  // ---- deterministic selection (same question+card -> same reading, but
  // different questions/cards land on different pool entries) -----------------

  function hashString(s) {
    var h = 2166136261;
    for (var i = 0; i < s.length; i++) {
      h = Math.imul(h ^ s.charCodeAt(i), 16777619);
    }
    return h >>> 0;
  }

  function pick(list, seed) {
    if (!list || !list.length) return '';
    var n = ((seed % list.length) + list.length) % list.length;
    return list[n];
  }

  // ---- validation guard (section 27 of the spec) ------------------------------

  var BANNED_PATTERNS = [
    /another (angle|perspective)/i,
    /\bthe signal\b/i,
    /\bthe universe\b/i,
    /look within/i,
    /what emerges/i,
    /the answer is already within you/i,
    /invites you to/i,
    /returns your question/i,
    /this card asks you to consider/i
  ];

  function findBannedPhrase(text) {
    for (var i = 0; i < BANNED_PATTERNS.length; i++) {
      if (BANNED_PATTERNS[i].test(text)) return BANNED_PATTERNS[i].source;
    }
    return null;
  }

  // ---- connective phrase pools (varied, card-agnostic glue only — never the
  // substance of the reading, which always comes from the card's own content) --

  var NUANCE_CONNECTORS = {
    en: [
      'But watch for {shadow} — it’s the part of this card that’s easiest to miss.',
      'The real risk here isn’t the decision itself; it’s {shadow}.',
      'Where this gets harder to sit with: {shadow}.',
      'Be honest with yourself about {shadow} before you decide anything.',
      'The catch, and it’s worth naming clearly, is {shadow}.',
      'Don’t let {shadow} make this decision for you without your noticing.'
    ],
    es: [
      'Pero cuidado con {shadow}: es la parte de esta carta más fácil de pasar por alto.',
      'El verdadero riesgo aquí no es la decisión en sí, sino {shadow}.',
      'Donde esto se vuelve más difícil de sostener: {shadow}.',
      'Sé honesto contigo mismo respecto a {shadow} antes de decidir nada.',
      'La trampa, y merece la pena nombrarla con claridad, está en {shadow}.',
      'No dejes que {shadow} tome esta decisión por ti sin que te des cuenta.'
    ]
  };

  var ADVICE_CONNECTORS = {
    en: ['As a practical next step: {advice}', 'In practice, that means: {advice}', 'The useful move here: {advice}', 'One concrete way through: {advice}'],
    es: ['Como paso práctico: {advice}', 'En la práctica, eso significa: {advice}', 'El movimiento útil aquí: {advice}', 'Una forma concreta de avanzar: {advice}']
  };

  var ORIENTATION_LABELS = {
    en: { YES: 'YES', NO: 'NO', MAYBE: 'MAYBE' },
    es: { YES: 'SÍ', NO: 'NO', MAYBE: 'QUIZÁ' }
  };

  function fill(template, values) {
    return template.replace(/\{(\w+)\}/g, function (_, key) {
      return values[key] != null ? values[key] : '';
    });
  }

  function lowerFirst(clause, locale) {
    // shadow/advice items are written as lowercase noun/verb phrases so they
    // slot into a connector template; nothing to do but return as-is.
    return clause;
  }

  // ---- orientation resolution --------------------------------------------------

  function resolveOrientation(card, domain, reversed) {
    var letter = card.yesNo;
    var reasonEn = card.yesNoWhy.en;
    var reasonEs = card.yesNoWhy.es;

    if (card.domainOverrides && card.domainOverrides[domain]) {
      letter = card.domainOverrides[domain];
    }
    if (card.domainReason && card.domainReason[domain]) {
      reasonEn = card.domainReason[domain].en;
      reasonEs = card.domainReason[domain].es;
    }
    if (reversed && letter === 'YES') {
      letter = 'MAYBE';
    }
    return { letter: letter, reason: { en: reasonEn, es: reasonEs } };
  }

  // ---- main compose function --------------------------------------------------

  function compose(opts) {
    var card = opts.card; // {id, ...visual fields}
    var question = opts.question || '';
    var reversed = !!opts.reversed;
    var locale = opts.locale === 'es' ? 'es' : 'en';

    var content = CONTENT[card.id];
    if (!content) {
      throw new Error('No content authored for card id: ' + card.id);
    }

    var domain = detectDomain(question);
    if (!content.domains[domain]) domain = 'general';
    var structure = detectStructure(question);

    var seed = hashString((question || '') + '::' + card.id);

    // Part 1 — the core message: the card's own domain-specific take.
    var core = content.domains[domain][locale];

    // Part 2 — the nuance: a shadow item + advice, glued with a rotated,
    // non-generic connector. Reversed cards lean harder into the shadow.
    var shadowList = content.shadow[locale];
    var shadowSeed = reversed ? seed + 1 : seed;
    var shadowItem = pick(shadowList, shadowSeed);
    var nuanceTemplate = pick(NUANCE_CONNECTORS[locale], seed >> 3);
    var nuanceSentence = fill(nuanceTemplate, { shadow: shadowItem });

    var adviceItem = pick(content.advice[locale], seed >> 5);
    var adviceTemplate = pick(ADVICE_CONNECTORS[locale], seed >> 7);
    var adviceSentence = fill(adviceTemplate, { advice: adviceItem });

    var reading = [core, nuanceSentence, adviceSentence].join(' ');

    // Part 3 — orientation.
    var orientation = resolveOrientation(content, domain, reversed);
    var orientationLabel = ORIENTATION_LABELS[locale][orientation.letter];
    var orientationReason = orientation.reason[locale];

    // Reflection — card-specific, rotated so consecutive draws of the same
    // card don't always land on the same question.
    var reflection = pick(content.reflection[locale], seed >> 11);

    var result = {
      card: card.id,
      theme: content.theme[locale],
      domain: domain,
      structure: structure,
      orientation: orientation.letter,
      orientationLabel: orientationLabel,
      orientationReason: orientationReason,
      reading: reading,
      reflection: reflection
    };

    // Validation guard: if a banned generic phrase somehow made it through
    // (e.g. a future content edit), fall back to the raw domain sentence
    // alone rather than ship vague language.
    var bad = findBannedPhrase(result.reading);
    if (bad) {
      result.reading = core + ' ' + nuanceSentence;
    }

    return result;
  }

  // ---- self tests (spec section 28) -------------------------------------------

  function makeFakeCard(id) { return { id: id }; }

  function runSelfTests() {
    var log = [];
    function say(s) { log.push(s); }

    say('=== TEST A: "Should I leave my job?" across five cards ===');
    ['major-0', 'major-4', 'major-16', 'major-9', 'major-15'].forEach(function (id) {
      var r = compose({ card: makeFakeCard(id), question: 'Should I leave my job?', locale: 'en' });
      say('[' + id + '] (' + r.orientation + ') ' + r.reading);
    });

    say('');
    say('=== TEST B: Knight of Cups across three questions ===');
    ['Should I leave my job?', 'Should I pursue this person?', 'Should I move to another country?'].forEach(function (q) {
      var r = compose({ card: makeFakeCard('cups-knight'), question: q, locale: 'en' });
      say('[' + q + '] (' + r.orientation + ') ' + r.reading);
    });

    say('');
    say('=== TEST C: repetition scan across 10 random draws ===');
    var ids = Object.keys(CONTENT);
    var qs = ['Should I leave my job?', 'Should I pursue this person?', 'Will this work out?', 'Should I move abroad?', 'Is this the right decision?', 'Should I follow my creative passion?', 'Should I tell them how I feel?', 'Can I trust this?', 'Should I take this risk?', 'What should I do about my family?'];
    var openings = {};
    var duplicates = 0;
    for (var i = 0; i < 10; i++) {
      var id = ids[Math.floor(Math.random() * ids.length)];
      var q = qs[i];
      var r = compose({ card: makeFakeCard(id), question: q, locale: 'en' });
      var opening = r.reading.split(' ').slice(0, 5).join(' ');
      if (openings[opening]) duplicates++;
      openings[opening] = true;
      say('[' + id + '] ' + q + ' -> ' + r.reading);
    }
    say('duplicate openings: ' + duplicates);

    return log.join('\n');
  }

  global.ArcanaEngine = {
    compose: compose,
    detectDomain: detectDomain,
    detectStructure: detectStructure,
    findBannedPhrase: findBannedPhrase,
    runSelfTests: runSelfTests
  };
})(typeof window !== 'undefined' ? window : globalThis);
