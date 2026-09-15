/*
 * Arcana card content database.
 * Original interpretations written for this project — not sourced or copied from
 * any reference site. Each card carries its own archetype, vocabulary, positive
 * and shadow expression, a baseline yes/no orientation, and per-domain readings
 * that translate the card's fixed meaning into eight question domains:
 * career, relationship, money, movement, creative, family, growth, general.
 *
 * The reading engine (reading-engine.js) composes the final text from this data.
 * No sentence here is shared across cards — that repetition was the bug.
 */
(function (global) {
  var CARDS = {};

  CARDS['major-0'] = {
    theme: { en: 'BEGINNING', es: 'COMIENZO' },
    archetype: { en: 'The leap taken before certainty arrives', es: 'El salto que se da antes de tener certezas' },
    vocabulary: {
      en: ['leap', 'beginning', 'risk', 'freedom', 'unknown', 'innocence', 'trust', 'wonder'],
      es: ['salto', 'comienzo', 'riesgo', 'libertad', 'desconocido', 'inocencia', 'confianza', 'asombro']
    },
    positive: {
      en: ['a willingness to start without a finished map', 'openness to what hasn’t happened yet', 'trust that builds by moving, not before it', 'freedom from the weight of past outcomes'],
      es: ['la disposición a empezar sin un mapa terminado', 'apertura a lo que todavía no ha ocurrido', 'una confianza que se construye al moverse, no antes', 'libertad frente al peso de resultados pasados']
    },
    shadow: {
      en: ['mistaking recklessness for courage', 'skipping preparation you actually need', 'leaping mainly to avoid a slower decision', 'ignoring a warning because it’s inconvenient'],
      es: ['confundir la imprudencia con el valor', 'saltarte una preparación que sí hace falta', 'saltar sobre todo para evitar una decisión más lenta', 'ignorar una advertencia por resultar incómoda']
    },
    yesNo: 'YES',
    yesNoWhy: {
      en: 'The Fool rarely shows up to confirm what’s already safe; it appears when the honest move is to go before you feel fully ready.',
      es: 'El Loco rara vez aparece para confirmar lo que ya es seguro; aparece cuando lo honesto es avanzar antes de sentirte del todo listo.'
    },
    domains: {
      career: {
        en: 'Leaving without a finished plan feels frightening precisely because the plan was never going to arrive first. The real question isn’t whether you’re certain — it’s whether you’ll learn the next role by doing it.',
        es: 'Irte sin un plan terminado da miedo, precisamente porque ese plan nunca iba a llegar antes. La pregunta real no es si tienes certeza, sino si aprenderás el siguiente paso haciéndolo.'
      },
      relationship: {
        en: 'This card cares less about strategy than about whether you’re letting yourself feel something before deciding it’s safe to. Staying guarded may be costing you more than the risk you’re avoiding.',
        es: 'Esta carta habla menos de estrategia y más de si te permites sentir algo antes de decidir que es seguro. Seguir protegido puede estar costándote más que el riesgo que evitas.'
      },
      money: {
        en: 'The Fool isn’t a careful accountant, and it knows it. If money is the only thing holding you back, ask whether you’re protecting real security or just a familiar, comfortable number.',
        es: 'El Loco no es un contable cuidadoso, y lo sabe. Si el dinero es lo único que te detiene, pregunta si proteges una seguridad real o solo una cifra conocida y cómoda.'
      },
      movement: {
        en: 'Few cards answer a relocation question this directly. It doesn’t promise the new place will be easier — only that the unknown may be part of what’s pulling you, and waiting for guarantees keeps you exactly here.',
        es: 'Pocas cartas responden tan directo a una mudanza. No promete que el lugar nuevo será más fácil, solo que lo desconocido puede ser parte de lo que te atrae, y esperar garantías te deja justo donde estás.'
      },
      creative: {
        en: 'This is closer to a first draft than a finished plan — it favors starting something imperfect over polishing an idea that never leaves your head. Readiness was never the prerequisite here.',
        es: 'Se parece más a un primer borrador que a un plan terminado: prefiere empezar algo imperfecto antes que pulir una idea que nunca sale de tu cabeza. La preparación nunca fue el requisito.'
      },
      family: {
        en: 'In family matters this often points to a role you’ve outgrown — the version of you everyone expects, against the one asking to try something new without their full understanding in advance.',
        es: 'En la familia, suele señalar un papel que ya te queda pequeño: la versión de ti que todos esperan frente a la que pide intentar algo nuevo sin su comprensión completa por adelantado.'
      },
      growth: {
        en: 'One of the clearest cards for a question about who you’re becoming: not a plan to follow, but a willingness to not yet know the answer and move anyway. Growth looks like motion here, not resolution.',
        es: 'Una de las cartas más claras para saber en quién te estás convirtiendo: no un plan que seguir, sino la disposición a no saber la respuesta todavía y avanzar igual. Aquí crecer se parece a moverse, no a resolver.'
      },
      general: {
        en: 'Whatever shape this question takes, the Fool keeps pointing at the same thing: you’re waiting for a certainty that won’t arrive before you act. Take the smallest real step and let the rest answer itself.',
        es: 'Sea cual sea la forma de esta pregunta, el Loco señala siempre lo mismo: esperas una certeza que no llegará antes de actuar. Da el paso real más pequeño y deja que lo demás se responda solo.'
      }
    },
    advice: {
      en: ['Take one concrete step before you feel fully ready.', 'Let the plan form after you start, not before.', 'Treat the unknown as information, not a threat.'],
      es: ['Da un paso concreto antes de sentirte del todo listo.', 'Deja que el plan se forme después de empezar, no antes.', 'Trata lo desconocido como información, no como una amenaza.']
    },
    reflection: {
      en: ['What are you waiting to feel before you’ll let yourself begin?', 'If the outcome were guaranteed either way, what would you already be doing?', 'What has staying exactly here actually protected you from?'],
      es: ['¿Qué esperas sentir antes de permitirte empezar?', 'Si el resultado estuviera garantizado de cualquier forma, ¿qué estarías haciendo ya?', '¿De qué te ha protegido realmente quedarte justo aquí?']
    }
  };

  CARDS['major-1'] = {
    theme: { en: 'AGENCY', es: 'AGENCIA' },
    archetype: { en: 'The will that turns intention into action', es: 'La voluntad que convierte la intención en acción' },
    vocabulary: {
      en: ['will', 'skill', 'resourcefulness', 'focus', 'method', 'tools', 'manifestation', 'craft'],
      es: ['voluntad', 'habilidad', 'ingenio', 'foco', 'método', 'herramientas', 'creación', 'oficio']
    },
    positive: {
      en: ['turning a scattered idea into a method', 'using what’s already in reach instead of waiting for more', 'confidence that comes from competence, not luck', 'focus that removes noise rather than adding pressure'],
      es: ['convertir una idea dispersa en un método', 'usar lo que ya tienes al alcance en vez de esperar más', 'una confianza que viene de la competencia, no de la suerte', 'un foco que quita ruido en lugar de añadir presión']
    },
    shadow: {
      en: ['charm or cleverness used to avoid real substance', 'confusing busyness with actual progress', 'manipulating a situation instead of earning it', 'starting many things and finishing few'],
      es: ['usar el encanto o el ingenio para evitar el fondo real', 'confundir el estar ocupado con avanzar de verdad', 'manipular una situación en vez de ganársela', 'empezar muchas cosas y terminar pocas']
    },
    yesNo: 'YES',
    yesNoWhy: {
      en: 'The Magician answers questions of capability, and the card rarely appears unless you already have what the situation requires — the missing piece is method, not permission.',
      es: 'El Mago responde a preguntas de capacidad, y rara vez aparece a menos que ya tengas lo que la situación exige: lo que falta es método, no permiso.'
    },
    domains: {
      career: {
        en: 'This card treats a job move as a question of tools, not fate: what skill, contact or resource do you already have that you haven’t actually used yet? Leaving works when it’s backed by a method, not just a mood.',
        es: 'Esta carta trata un cambio de trabajo como una cuestión de herramientas, no de destino: ¿qué habilidad, contacto o recurso ya tienes y aún no has usado? Irte funciona cuando hay un método detrás, no solo un impulso.'
      },
      relationship: {
        en: 'The Magician asks you to be deliberate rather than passive — pursuing this person is less about fate deciding and more about what you actually say, do, and offer. Charm without follow-through is the risk to watch.',
        es: 'El Mago te pide ser deliberado en vez de pasivo: acercarte a esta persona depende menos del destino y más de lo que realmente digas, hagas y ofrezcas. El riesgo a vigilar es el encanto sin nada detrás.'
      },
      money: {
        en: 'A practical, capable card for money questions: it favors a concrete plan — skill, timing, resource — over hoping the numbers sort themselves out. The tools to make this work are already available to you.',
        es: 'Una carta práctica y capaz para preguntas de dinero: favorece un plan concreto (habilidad, momento, recurso) frente a esperar que las cifras se acomoden solas. Las herramientas para lograrlo ya están a tu alcance.'
      },
      movement: {
        en: 'Moving works here if you treat it as a project to execute, not a wish to have granted — research, contacts, a plan for the first weeks. The Magician rewards preparation, not just desire.',
        es: 'Mudarte funciona si lo tratas como un proyecto que ejecutar, no un deseo que se cumple solo: investigación, contactos, un plan para las primeras semanas. El Mago premia la preparación, no solo las ganas.'
      },
      creative: {
        en: 'This is one of the strongest cards for creative work: it says the block isn’t inspiration but application — sit down, use the tools you have, and let skill carry what mood can’t.',
        es: 'Una de las cartas más fuertes para el trabajo creativo: dice que el bloqueo no es de inspiración sino de aplicación. Siéntate, usa las herramientas que tienes y deja que la habilidad sostenga lo que el ánimo no puede.'
      },
      family: {
        en: 'In family matters, the Magician suggests taking active responsibility for the outcome rather than waiting for someone else to fix the dynamic. You likely have more influence here than you’ve been using.',
        es: 'En la familia, el Mago sugiere hacerte cargo activamente del resultado en lugar de esperar a que otro arregle la dinámica. Probablemente tienes más influencia de la que has estado usando.'
      },
      growth: {
        en: 'A card about becoming capable rather than becoming certain — it suggests the next version of you is built through deliberate practice, not through waiting for confidence to arrive first.',
        es: 'Una carta sobre volverte capaz, no sobre volverte seguro: sugiere que la siguiente versión de ti se construye con práctica deliberada, no esperando a que la confianza llegue primero.'
      },
      general: {
        en: 'The Magician points at what you already have — skill, timing, resources, attention — and asks why it hasn’t been put to use yet. This is rarely a question of possibility; it’s one of method.',
        es: 'El Mago señala lo que ya tienes (habilidad, momento, recursos, atención) y pregunta por qué no lo has usado todavía. Rara vez es una cuestión de posibilidad; es una cuestión de método.'
      }
    },
    advice: {
      en: ['Name the one resource you’re not using yet.', 'Replace the wish with a method, even a small one.', 'Let competence build the confidence, not the other way round.'],
      es: ['Nombra el recurso que aún no estás usando.', 'Cambia el deseo por un método, aunque sea pequeño.', 'Deja que la competencia construya la confianza, no al revés.']
    },
    reflection: {
      en: ['Which tool, skill or contact have you been overlooking?', 'What would you attempt if you trusted your own competence?', 'Where are you hoping instead of building?'],
      es: ['¿Qué herramienta, habilidad o contacto has estado pasando por alto?', '¿Qué intentarías si confiaras en tu propia competencia?', '¿Dónde estás esperando en vez de construir?']
    }
  };

  CARDS['major-2'] = {
    theme: { en: 'HIDDEN KNOWLEDGE', es: 'CONOCIMIENTO OCULTO' },
    archetype: { en: 'The knowledge that arrives before proof', es: 'El saber que llega antes que la prueba' },
    vocabulary: {
      en: ['intuition', 'silence', 'mystery', 'threshold', 'withheld', 'undercurrent', 'stillness', 'subconscious'],
      es: ['intuición', 'silencio', 'misterio', 'umbral', 'reserva', 'trasfondo', 'quietud', 'subconsciente']
    },
    positive: {
      en: ['trusting a sense that hasn’t been explained yet', 'patience with not-knowing instead of forcing a conclusion', 'reading a room or situation without needing it spelled out', 'protecting something before it’s ready to be shared'],
      es: ['confiar en un presentimiento que aún no se explica', 'paciencia con no saber en vez de forzar una conclusión', 'leer una situación sin necesitar que te la expliquen', 'proteger algo antes de que esté listo para compartirse']
    },
    shadow: {
      en: ['withholding out of fear rather than discernment', 'mistaking silence for an answer', 'avoiding a truth that intuition already delivered', 'over-analyzing a feeling until it disappears'],
      es: ['guardar silencio por miedo y no por discernimiento', 'confundir el silencio con una respuesta', 'evitar una verdad que la intuición ya entregó', 'analizar tanto un presentimiento que termina por desaparecer']
    },
    yesNo: 'MAYBE',
    yesNoWhy: {
      en: 'This card resists a flat answer on principle: it represents what hasn’t surfaced yet, and rushing it to a verdict would defeat the point.',
      es: 'Esta carta se resiste a una respuesta cerrada por principio: representa lo que aún no ha salido a la superficie, y forzarlo a un veredicto anularía su sentido.'
    },
    domains: {
      career: {
        en: 'Something about this job situation may not be fully visible yet — an unspoken condition, an unstated expectation. Before deciding, notice what you sense but haven’t been told outright.',
        es: 'Puede que algo en esta situación laboral no sea del todo visible todavía: una condición no dicha, una expectativa no expresada. Antes de decidir, presta atención a lo que intuyes pero no te han dicho.'
      },
      relationship: {
        en: 'You likely already sense something about this person or situation that you haven’t said out loud, even to yourself. This card asks you to trust that undercurrent instead of overriding it with hope.',
        es: 'Probablemente ya intuyes algo sobre esta persona o situación que no has dicho en voz alta, ni siquiera a ti mismo. Esta carta te pide confiar en ese trasfondo en vez de taparlo con esperanza.'
      },
      money: {
        en: 'Not every financial decision can be solved with more spreadsheets. If a number looks fine but something still feels off, that instinct deserves a closer look before you commit.',
        es: 'No toda decisión de dinero se resuelve con más hojas de cálculo. Si una cifra parece correcta pero algo no te cuadra, ese instinto merece una revisión antes de comprometerte.'
      },
      movement: {
        en: 'This isn’t a card that argues for or against the move — it asks whether you’re listening to a quieter pull toward or away from it, underneath the practical pros and cons list.',
        es: 'No es una carta que argumente a favor o en contra de mudarte: pregunta si estás escuchando un impulso más silencioso, hacia o en contra del cambio, por debajo de la lista práctica de pros y contras.'
      },
      creative: {
        en: 'The High Priestess suggests the material isn’t ready to be forced into a final shape. Let the idea stay unfinished a little longer — something is still forming beneath what you can currently articulate.',
        es: 'La Sacerdotisa sugiere que el material aún no está listo para forzarse a una forma final. Deja la idea sin terminar un poco más: algo sigue formándose por debajo de lo que puedes expresar todavía.'
      },
      family: {
        en: 'There may be something unspoken running underneath this family situation — a history, a feeling nobody names directly. Naming it, even privately to yourself, may matter more than resolving it today.',
        es: 'Puede haber algo no dicho corriendo por debajo de esta situación familiar: una historia, un sentimiento que nadie nombra directamente. Nombrarlo, aunque sea solo para ti, puede importar más que resolverlo hoy.'
      },
      growth: {
        en: 'This card points inward, toward a part of you that already knows something the rest of you hasn’t caught up to. Growth here means listening before explaining.',
        es: 'Esta carta apunta hacia dentro, hacia una parte de ti que ya sabe algo que el resto todavía no ha alcanzado a entender. Aquí crecer significa escuchar antes de explicar.'
      },
      general: {
        en: 'The honest answer here isn’t a clean yes or no — it’s that part of this situation hasn’t revealed itself yet. Notice what you already sense before you ask for more evidence.',
        es: 'La respuesta honesta aquí no es un sí o un no limpio: parte de esta situación todavía no se ha revelado. Presta atención a lo que ya intuyes antes de pedir más pruebas.'
      }
    },
    advice: {
      en: ['Sit with the feeling before you explain it away.', 'Ask what you already sense but haven’t said aloud.', 'Let the answer arrive instead of forcing it.'],
      es: ['Quédate con el presentimiento antes de justificarlo.', 'Pregunta qué intuyes ya pero no has dicho en voz alta.', 'Deja que la respuesta llegue en vez de forzarla.']
    },
    reflection: {
      en: ['What do you already know that you haven’t admitted yet?', 'What would you do if you trusted the quiet feeling over the loud argument?', 'What is this silence actually protecting?'],
      es: ['¿Qué sabes ya que todavía no has admitido?', '¿Qué harías si confiaras en el presentimiento silencioso más que en el argumento ruidoso?', '¿Qué está protegiendo realmente este silencio?']
    }
  };

  CARDS['major-3'] = {
    theme: { en: 'GROWTH', es: 'CRECIMIENTO' },
    archetype: { en: 'Possibility treated as a living, growing thing', es: 'La posibilidad tratada como algo vivo que crece' },
    vocabulary: {
      en: ['nurture', 'abundance', 'growth', 'fertility', 'sensuality', 'nature', 'care', 'ripening'],
      es: ['cuidado', 'abundancia', 'crecimiento', 'fertilidad', 'sensualidad', 'naturaleza', 'nutrir', 'maduración']
    },
    positive: {
      en: ['giving something the time and conditions it needs to grow', 'generosity that doesn’t deplete you', 'pleasure and abundance as legitimate goals, not indulgences', 'creating an environment where something else can thrive'],
      es: ['dar a algo el tiempo y las condiciones que necesita para crecer', 'una generosidad que no te vacía', 'el placer y la abundancia como metas legítimas, no caprichos', 'crear un entorno donde otra cosa pueda florecer']
    },
    shadow: {
      en: ['overgiving until nothing is left for yourself', 'smothering something that needed more room, not more care', 'comfort used to avoid a harder decision', 'neglecting a project or relationship once it stops feeling new'],
      es: ['dar tanto que no queda nada para ti', 'asfixiar algo que necesitaba más espacio y no más cuidado', 'usar la comodidad para evitar una decisión difícil', 'descuidar un proyecto o vínculo cuando deja de sentirse nuevo']
    },
    yesNo: 'YES',
    yesNoWhy: {
      en: 'The Empress tends to favor what can be nurtured into something larger — the caution is about how, not whether.',
      es: 'La Emperatriz suele favorecer lo que puede cultivarse hasta ser algo mayor; la precaución está en el cómo, no en el si.'
    },
    domains: {
      career: {
        en: 'This card asks less "should you leave" than "where could you actually grow." If this job has stopped giving you room to develop, that’s the real signal — not fear, but a genuine lack of nourishment.',
        es: 'Esta carta pregunta menos "deberías irte" y más "dónde podrías crecer de verdad". Si este trabajo ya no te da espacio para desarrollarte, esa es la señal real, no el miedo, sino una falta genuina de alimento.'
      },
      relationship: {
        en: 'The Empress favors warmth, patience and giving a connection room to develop naturally rather than forcing a pace. Pursue this gently — and notice if you’re the only one tending it.',
        es: 'La Emperatriz favorece la calidez, la paciencia y dar espacio a un vínculo para que crezca de forma natural, sin forzar el ritmo. Acércate con calma, y fíjate si eres el único que lo está cuidando.'
      },
      money: {
        en: 'Read this as a question of cultivation rather than a quick win: what would this money grow into if given time, rather than what it could buy right now?',
        es: 'Trátalo como una cuestión de cultivo, no de ganancia rápida: ¿en qué se convertiría este dinero si le das tiempo, más que en qué podrías comprar ahora mismo?'
      },
      movement: {
        en: 'A move can be an act of self-nourishment — going somewhere that finally lets you grow into more of yourself. Ask honestly whether this place has room for that, or whether you’re only craving comfort.',
        es: 'Mudarte puede ser un acto de cuidado propio: ir a un lugar que por fin te deje crecer más. Pregúntate con honestidad si ese lugar tiene espacio para eso, o si solo buscas comodidad.'
      },
      creative: {
        en: 'One of the most encouraging cards for creative work: it says the idea needs tending, not forcing — time, care and repetition will bring it further than a single burst of inspiration.',
        es: 'Una de las cartas más alentadoras para lo creativo: dice que la idea necesita cuidado, no presión. El tiempo, el cuidado y la repetición la llevarán más lejos que un solo arrebato de inspiración.'
      },
      family: {
        en: 'The Empress points to care as the real currency in family relationships — but check whether that care still flows both directions, or whether you’ve quietly become the only one giving it.',
        es: 'La Emperatriz señala el cuidado como la verdadera moneda en la familia, pero revisa si ese cuidado todavía fluye en ambas direcciones, o si en silencio te has convertido en el único que lo da.'
      },
      growth: {
        en: 'This card treats you as something still forming, not something finished — patience with your own pace is part of the answer, not a delay of it.',
        es: 'Esta carta te trata como algo todavía en formación, no como algo terminado: la paciencia con tu propio ritmo es parte de la respuesta, no un retraso de ella.'
      },
      general: {
        en: 'The Empress asks what this situation would need to actually flourish — more time, more care, a gentler pace — rather than a single decisive push.',
        es: 'La Emperatriz pregunta qué necesitaría esta situación para florecer de verdad: más tiempo, más cuidado, un ritmo más suave, en lugar de un solo empujón decisivo.'
      }
    },
    advice: {
      en: ['Give it time and the right conditions before judging it.', 'Check that the care in this still flows both ways.', 'Choose nourishment over a quick, forced result.'],
      es: ['Dale tiempo y las condiciones adecuadas antes de juzgarlo.', 'Comprueba que el cuidado en esto siga fluyendo en ambas direcciones.', 'Elige el alimento a largo plazo frente a un resultado rápido y forzado.']
    },
    reflection: {
      en: ['What would this situation look like if you gave it more room instead of more pressure?', 'Where have you been giving without receiving?', 'What are you rushing that actually needs time?'],
      es: ['¿Cómo se vería esta situación si le dieras más espacio en lugar de más presión?', '¿Dónde has estado dando sin recibir?', '¿Qué estás apresurando que en realidad necesita tiempo?']
    }
  };

  CARDS['major-4'] = {
    theme: { en: 'STRUCTURE', es: 'ESTRUCTURA' },
    archetype: { en: 'Order built to hold real weight', es: 'El orden construido para sostener peso de verdad' },
    vocabulary: {
      en: ['structure', 'authority', 'discipline', 'boundary', 'responsibility', 'control', 'stability', 'foundation'],
      es: ['estructura', 'autoridad', 'disciplina', 'límite', 'responsabilidad', 'control', 'estabilidad', 'cimiento']
    },
    positive: {
      en: ['building something stable enough to hold real weight', 'taking responsibility instead of waiting for permission', 'boundaries that create freedom rather than restriction', 'clear-headed authority over your own decisions'],
      es: ['construir algo lo bastante estable como para sostener peso real', 'asumir la responsabilidad en vez de esperar permiso', 'límites que generan libertad en lugar de restricción', 'una autoridad serena sobre tus propias decisiones']
    },
    shadow: {
      en: ['control used to manage fear rather than build anything', 'rigidity mistaken for strength', 'staying out of duty long after it stopped making sense', 'demanding certainty before allowing any risk at all'],
      es: ['usar el control para calmar el miedo, no para construir', 'confundir la rigidez con la fortaleza', 'quedarte por deber mucho después de que dejara de tener sentido', 'exigir certeza absoluta antes de permitir cualquier riesgo']
    },
    yesNo: 'MAYBE',
    yesNoWhy: {
      en: 'The Emperor rarely says leave or stay outright — it asks whether the structure you’re in still serves you, or whether you’re only maintaining it out of habit.',
      es: 'El Emperador rara vez dice quédate o vete sin más: pregunta si la estructura en la que estás todavía te sirve, o si solo la mantienes por costumbre.'
    },
    domains: {
      career: {
        en: 'This card takes the stability question seriously rather than dismissing it as fear. Staying only makes sense if this structure is actually building something for you — check whether it still is.',
        es: 'Esta carta se toma en serio la pregunta por la estabilidad, sin descartarla como miedo. Quedarte solo tiene sentido si esta estructura todavía construye algo para ti; comprueba si sigue siendo así.'
      },
      relationship: {
        en: 'The Emperor asks whether you’re pursuing this person to build something real, or to gain control over an uncertain feeling. Clarity about your own intentions matters here more than the pursuit itself.',
        es: 'El Emperador pregunta si buscas a esta persona para construir algo real, o para controlar un sentimiento incierto. Aquí importa más la claridad sobre tus propias intenciones que la persecución en sí.'
      },
      money: {
        en: 'A structured, disciplined card for money: it favors a plan you can actually maintain over a bold move made from anxiety about control. Build the framework before you act.',
        es: 'Una carta disciplinada y estructurada para el dinero: favorece un plan sostenible frente a un movimiento audaz hecho por ansiedad de control. Construye el marco antes de actuar.'
      },
      movement: {
        en: 'The Emperor doesn’t oppose the move, but asks you to build real structure around it first — a plan, a foundation, not just an escape from what feels unstable here.',
        es: 'El Emperador no se opone a mudarte, pero te pide construir antes una estructura real: un plan, un cimiento, no solo una huida de lo que aquí se siente inestable.'
      },
      creative: {
        en: 'This card values discipline over inspiration: a consistent structure — a schedule, a method — will take this project further than waiting for the right mood to build it for you.',
        es: 'Esta carta valora la disciplina por encima de la inspiración: una estructura constante (un horario, un método) llevará este proyecto más lejos que esperar el momento de ánimo perfecto.'
      },
      family: {
        en: 'The Emperor often marks whoever holds authority or responsibility in a family system. The question may be less about the relationship itself and more about whether that role still fits you.',
        es: 'El Emperador suele marcar a quien sostiene la autoridad o la responsabilidad en un sistema familiar. La pregunta quizá no sea sobre el vínculo en sí, sino sobre si ese papel todavía te queda bien.'
      },
      growth: {
        en: 'Growth here means building your own structure rather than waiting for one to be given to you — your own schedule, your own standards, your own authority over the decision.',
        es: 'Crecer aquí significa construir tu propia estructura en lugar de esperar a que te la den: tu propio horario, tus propios criterios, tu propia autoridad sobre la decisión.'
      },
      general: {
        en: 'The Emperor rewards whoever takes deliberate responsibility for the outcome. Before deciding, ask what structure — plan, boundary, framework — this situation is actually missing.',
        es: 'El Emperador premia a quien asume una responsabilidad deliberada sobre el resultado. Antes de decidir, pregúntate qué estructura (plan, límite, marco) le falta realmente a esta situación.'
      }
    },
    advice: {
      en: ['Build a plan you can actually sustain, not just a bold move.', 'Check whether you’re controlling out of fear or building on purpose.', 'Take responsibility for the outcome instead of waiting for permission.'],
      es: ['Construye un plan que realmente puedas sostener, no solo un gesto audaz.', 'Comprueba si controlas por miedo o construyes con intención.', 'Asume la responsabilidad del resultado en lugar de esperar permiso.']
    },
    reflection: {
      en: ['Is this structure still building something, or just holding a shape out of habit?', 'What boundary would give you more freedom, not less?', 'Whose approval are you actually waiting for?'],
      es: ['¿Esta estructura todavía construye algo, o solo mantiene una forma por costumbre?', '¿Qué límite te daría más libertad, no menos?', '¿La aprobación de quién estás esperando en realidad?']
    }
  };

  CARDS['major-5'] = {
    theme: { en: 'CONVENTION', es: 'CONVENCIÓN' },
    archetype: { en: 'The rules and beliefs handed down before you chose them', es: 'Las reglas y creencias heredadas antes de que las eligieras' },
    vocabulary: {
      en: ['tradition', 'belief', 'institution', 'guidance', 'convention', 'doctrine', 'mentorship', 'expectation'],
      es: ['tradición', 'creencia', 'institución', 'guía', 'convención', 'doctrina', 'mentoría', 'expectativa']
    },
    positive: {
      en: ['learning from a structure or mentor that has already tested the path', 'finding real belonging in a shared value system', 'guidance that shortens a long trial-and-error process', 'ceremony or ritual that gives a decision proper weight'],
      es: ['aprender de una estructura o mentor que ya probó el camino', 'encontrar una pertenencia real en un sistema de valores compartido', 'una guía que acorta un largo proceso de prueba y error', 'un ritual o ceremonia que le da a la decisión el peso que merece']
    },
    shadow: {
      en: ['following a rule mainly because breaking it feels frightening', 'mistaking approval from the group for being right', 'staying inside a belief that no longer fits what you’ve learned', 'letting an institution decide what only you can decide'],
      es: ['seguir una regla sobre todo porque romperla da miedo', 'confundir la aprobación del grupo con tener razón', 'quedarte dentro de una creencia que ya no encaja con lo que has aprendido', 'dejar que una institución decida lo que solo tú puedes decidir']
    },
    yesNo: 'MAYBE',
    yesNoWhy: {
      en: 'The Hierophant asks you to separate your own conviction from what you were taught to expect — the answer changes depending on which one is actually speaking.',
      es: 'El Hierofante te pide separar tu propia convicción de lo que te enseñaron a esperar; la respuesta cambia según cuál de las dos esté hablando realmente.'
    },
    domains: {
      career: {
        en: 'Before deciding, ask how much of "I should stay" is your own judgment, and how much is inherited advice about what a stable career is supposed to look like.',
        es: 'Antes de decidir, pregúntate cuánto de "debería quedarme" es tu propio juicio y cuánto es un consejo heredado sobre cómo debe verse una carrera estable.'
      },
      relationship: {
        en: 'This card asks whether pursuing this person aligns with your own values, or with what family, culture or convention expects a relationship to look like. Those aren’t always the same answer.',
        es: 'Esta carta pregunta si acercarte a esta persona encaja con tus propios valores, o con lo que la familia, la cultura o la convención esperan de una relación. No siempre es la misma respuesta.'
      },
      money: {
        en: 'A conventional, cautious card for money: it favors the tested route over the untested one — but check that "tested" isn’t just another word for "what I was told to do."',
        es: 'Una carta convencional y cautelosa para el dinero: favorece el camino ya probado sobre el sin probar, pero comprueba que "probado" no sea solo otra forma de decir "lo que me dijeron que hiciera".'
      },
      movement: {
        en: 'The Hierophant tends to favor the familiar over the foreign. If something is pulling you elsewhere anyway, ask whether staying is really your choice, or an inherited definition of what’s sensible.',
        es: 'El Hierofante tiende a favorecer lo conocido frente a lo extranjero. Si algo te llama hacia otro lugar de todas formas, pregúntate si quedarte es realmente tu elección, o una definición heredada de lo sensato.'
      },
      creative: {
        en: 'This card can mean learning real craft from a tradition or teacher — or it can mean following a "proper" way of doing things that’s quietly suffocating your actual voice. Notice which one applies.',
        es: 'Esta carta puede significar aprender un oficio de verdad con una tradición o un maestro, o puede significar seguir una "forma correcta" de hacer las cosas que está asfixiando en silencio tu voz real. Fíjate cuál se aplica.'
      },
      family: {
        en: 'The Hierophant sits directly in inherited family expectation. The real question may be which parts of that inheritance you actually believe, and which you’ve simply never questioned.',
        es: 'El Hierofante está justo en el terreno de la expectativa familiar heredada. La verdadera pregunta puede ser qué partes de esa herencia crees de verdad, y cuáles nunca has cuestionado.'
      },
      growth: {
        en: 'Personal growth here means separating your own belief from what you were handed. Advice from someone you respect is worth hearing — and worth testing against what you actually know.',
        es: 'Crecer aquí significa separar tu propia creencia de lo que te entregaron. El consejo de alguien que respetas vale la pena escucharlo, y vale la pena contrastarlo con lo que de verdad sabes.'
      },
      general: {
        en: 'Before answering, separate what you actually believe from what you were taught to expect in a situation like this. The Hierophant asks which voice is really speaking.',
        es: 'Antes de responder, separa lo que de verdad crees de lo que te enseñaron a esperar en una situación así. El Hierofante pregunta qué voz está hablando en realidad.'
      }
    },
    advice: {
      en: ['Separate your own conviction from inherited expectation.', 'Ask a mentor’s advice, then test it against your own experience.', 'Keep the tradition that still serves you; question the rest.'],
      es: ['Separa tu propia convicción de la expectativa heredada.', 'Pide consejo a alguien de confianza, y luego contrástalo con tu propia experiencia.', 'Conserva la tradición que aún te sirve; cuestiona el resto.']
    },
    reflection: {
      en: ['Which advice still feels true once you remove who said it?', 'What are you following out of respect, and what out of fear?', 'Whose definition of the right choice are you actually using?'],
      es: ['¿Qué consejo sigue siendo verdadero cuando le quitas quién lo dijo?', '¿Qué sigues por respeto y qué por miedo?', '¿De quién es en realidad la definición de "elección correcta" que estás usando?']
    }
  };

  CARDS['major-6'] = {
    theme: { en: 'ALIGNMENT', es: 'ALINEACIÓN' },
    archetype: { en: 'The choice that reveals what you actually value', es: 'La elección que revela lo que de verdad valoras' },
    vocabulary: {
      en: ['choice', 'alignment', 'union', 'values', 'attraction', 'connection', 'temptation', 'commitment'],
      es: ['elección', 'alineación', 'unión', 'valores', 'atracción', 'conexión', 'tentación', 'compromiso']
    },
    positive: {
      en: ['a connection where values and attraction point the same direction', 'a choice made consciously instead of by default', 'honesty about what you actually want, not what looks good', 'partnership that makes both people more themselves, not less'],
      es: ['una conexión donde los valores y la atracción apuntan en la misma dirección', 'una elección hecha con conciencia y no por inercia', 'honestidad sobre lo que de verdad quieres, no sobre lo que queda bien', 'una relación que hace a ambas personas más ellas mismas, no menos']
    },
    shadow: {
      en: ['choosing the more exciting option over the more honest one', 'a pull strong enough to override your own judgment', 'avoiding a decision by trying to keep every option open', 'attraction mistaken for compatibility'],
      es: ['elegir la opción más emocionante en vez de la más honesta', 'un impulso lo bastante fuerte como para anular tu propio juicio', 'evitar decidir intentando mantener abiertas todas las opciones', 'confundir la atracción con la compatibilidad']
    },
    yesNo: 'YES',
    yesNoWhy: {
      en: 'The Lovers usually appears when a choice is already clear beneath the noise — the work is admitting what you actually value, not gathering more options.',
      es: 'Los Enamorados suelen aparecer cuando una elección ya está clara por debajo del ruido; el trabajo es admitir lo que de verdad valoras, no reunir más opciones.'
    },
    domains: {
      career: {
        en: 'This card treats a job decision as a question of alignment: does this path actually match what you value, or does it just look reasonable from the outside? Choose the one that’s honest, not the one that’s tidy.',
        es: 'Esta carta trata una decisión laboral como una cuestión de alineación: ¿este camino encaja de verdad con lo que valoras, o solo parece razonable desde fuera? Elige lo honesto, no lo ordenado.'
      },
      relationship: {
        en: 'This is one of the most direct cards for a question like this: the attraction is likely real. The task is checking whether your values and this person’s actually move in the same direction.',
        es: 'Esta es una de las cartas más directas para una pregunta así: la atracción probablemente es real. La tarea es comprobar si tus valores y los de esta persona realmente van en la misma dirección.'
      },
      money: {
        en: 'A financial choice here is really a values choice in disguise. Notice which option you’re drawn to for honest reasons, and which one you’re drawn to because it’s the safer story to tell.',
        es: 'Una decisión de dinero aquí es en realidad una decisión de valores disfrazada. Fíjate en qué opción te atrae por razones honestas, y cuál te atrae porque es la historia más segura de contar.'
      },
      movement: {
        en: 'The Lovers asks whether this move aligns with who you actually are, or whether it’s a way of choosing excitement over an honest look at what you need. Both can be true — figure out which weighs more.',
        es: 'Los Enamorados preguntan si esta mudanza encaja con quién realmente eres, o si es una forma de elegir la emoción por encima de una mirada honesta a lo que necesitas. Ambas cosas pueden ser ciertas: averigua cuál pesa más.'
      },
      creative: {
        en: 'This card favors the creative direction that feels most like you, even if it’s not the most strategic one. A choice made from alignment tends to hold up better than one made from ambition alone.',
        es: 'Esta carta favorece la dirección creativa que más se parece a ti, aunque no sea la más estratégica. Una elección hecha desde la alineación suele sostenerse mejor que una hecha solo desde la ambición.'
      },
      family: {
        en: 'The Lovers can point to a choice between loyalty to family expectation and loyalty to your own values. Both matter — but only one of them is actually yours to keep.',
        es: 'Los Enamorados pueden señalar una elección entre la lealtad a la expectativa familiar y la lealtad a tus propios valores. Ambas importan, pero solo una de ellas es realmente tuya para conservar.'
      },
      growth: {
        en: 'This card frames growth as choosing consciously rather than drifting into whatever’s easiest. What would you choose if you trusted that your values are allowed to lead?',
        es: 'Esta carta define crecer como elegir con conciencia en vez de dejarse llevar por lo más fácil. ¿Qué elegirías si confiaras en que tus valores pueden guiarte?'
      },
      general: {
        en: 'Underneath the practical question, this card asks what you actually value — and whether the option you keep circling back to is the one that matches it.',
        es: 'Debajo de la pregunta práctica, esta carta pregunta qué valoras de verdad, y si la opción a la que sigues volviendo es la que realmente encaja con eso.'
      }
    },
    advice: {
      en: ['Name what you value before naming what you want.', 'Choose the honest option over the tidy one.', 'Notice where attraction and alignment disagree.'],
      es: ['Nombra lo que valoras antes de nombrar lo que quieres.', 'Elige lo honesto por encima de lo ordenado.', 'Fíjate dónde la atracción y la alineación no coinciden.']
    },
    reflection: {
      en: ['Which option matches your values, not just your excitement?', 'What choice have you already made that you haven’t admitted yet?', 'Where do your values and your next move need to meet?'],
      es: ['¿Qué opción encaja con tus valores, no solo con tu emoción?', '¿Qué elección ya has hecho que todavía no has admitido?', '¿Dónde deben encontrarse tus valores y tu próximo movimiento?']
    }
  };

  CARDS['major-7'] = {
    theme: { en: 'DIRECTION', es: 'DIRECCIÓN' },
    archetype: { en: 'Energy gathered around one chosen direction', es: 'La energía reunida alrededor de una sola dirección elegida' },
    vocabulary: {
      en: ['drive', 'direction', 'momentum', 'willpower', 'focus', 'discipline', 'victory', 'forward motion'],
      es: ['impulso', 'dirección', 'ímpetu', 'voluntad', 'foco', 'disciplina', 'victoria', 'avance']
    },
    positive: {
      en: ['forces that usually pull apart, working together instead', 'momentum earned through focus, not adrenaline', 'confidence that comes from having chosen a direction', 'the ability to keep moving through resistance'],
      es: ['fuerzas que normalmente tiran en direcciones opuestas, trabajando juntas', 'un ímpetu que se gana con foco, no con adrenalina', 'una confianza que viene de haber elegido una dirección', 'la capacidad de seguir avanzando pese a la resistencia']
    },
    shadow: {
      en: ['forward motion used to avoid facing a divided will', 'aggression standing in for actual direction', 'winning becoming more important than the reason for moving', 'burning out from pushing without a clear target'],
      es: ['moverse hacia delante para evitar afrontar una voluntad dividida', 'la agresividad haciendo de sustituto de una dirección real', 'que ganar importe más que la razón para moverte', 'agotarte por empujar sin un objetivo claro']
    },
    yesNo: 'YES',
    yesNoWhy: {
      en: 'The Chariot rewards a decision once it’s actually made — the risk isn’t moving forward, it’s moving forward before the different parts of you agree on where.',
      es: 'El Carro premia una decisión una vez que ya se ha tomado; el riesgo no es avanzar, es avanzar antes de que las distintas partes de ti se pongan de acuerdo en hacia dónde.'
    },
    domains: {
      career: {
        en: 'The Chariot supports leaving if the decision is genuinely made — but check that ambition and fear aren’t pulling you in different directions while you call it momentum.',
        es: 'El Carro respalda irte si la decisión ya está genuinamente tomada, pero comprueba que la ambición y el miedo no tiren en direcciones distintas mientras lo llamas ímpetu.'
      },
      relationship: {
        en: 'This card favors direct pursuit over waiting — but only once you’ve actually decided what you want. Chasing someone to resolve your own indecision rarely ends where you hoped.',
        es: 'Esta carta favorece la búsqueda directa frente a esperar, pero solo una vez que de verdad has decidido lo que quieres. Perseguir a alguien para resolver tu propia indecisión rara vez termina donde esperabas.'
      },
      money: {
        en: 'A decisive, forward-moving card for money: it favors committing to one clear plan over splitting your energy across several half-considered ones.',
        es: 'Una carta decidida y de avance para el dinero: favorece comprometerte con un plan claro frente a repartir tu energía entre varios planes a medio pensar.'
      },
      movement: {
        en: 'The Chariot is strongly in favor of the move once you’ve stopped arguing with yourself about it. Momentum works in your favor here — hesitation is the more expensive option.',
        es: 'El Carro está claramente a favor de mudarte, una vez que dejas de discutir contigo mismo al respecto. Aquí el impulso juega a tu favor; la duda es la opción más cara.'
      },
      creative: {
        en: 'This card asks for focused, sustained effort toward one direction rather than several ideas pulling you at once. Pick the project and give it your full momentum.',
        es: 'Esta carta pide un esfuerzo enfocado y sostenido hacia una sola dirección, en vez de varias ideas tirando de ti a la vez. Elige el proyecto y dale todo tu ímpetu.'
      },
      family: {
        en: 'The Chariot may point to a moment where you need to move forward on a family matter rather than let competing loyalties keep you circling the same unresolved point.',
        es: 'El Carro puede señalar un momento en el que necesitas avanzar en un asunto familiar, en lugar de dejar que lealtades contrapuestas te hagan girar en el mismo punto sin resolver.'
      },
      growth: {
        en: 'Growth here looks like committing to a direction and letting the momentum build your confidence, rather than waiting for confidence to justify the direction first.',
        es: 'Crecer aquí se parece a comprometerte con una dirección y dejar que el impulso construya tu confianza, en lugar de esperar a tener confianza para justificar la dirección.'
      },
      general: {
        en: 'The Chariot supports action once the different parts of you agree on where you’re actually going. Resolve the internal conflict first; the momentum will follow.',
        es: 'El Carro respalda la acción una vez que las distintas partes de ti se ponen de acuerdo sobre hacia dónde vas de verdad. Resuelve primero el conflicto interno; el impulso vendrá después.'
      }
    },
    advice: {
      en: ['Resolve the internal conflict before you move, not during.', 'Commit to one direction instead of splitting your energy.', 'Let momentum build confidence, not the reverse.'],
      es: ['Resuelve el conflicto interno antes de moverte, no durante.', 'Comprométete con una sola dirección en vez de repartir tu energía.', 'Deja que el impulso construya la confianza, no al revés.']
    },
    reflection: {
      en: ['What would you stop carrying to move with real intention?', 'Which part of you hasn’t agreed to this direction yet?', 'Where is momentum covering for a decision you haven’t actually made?'],
      es: ['¿Qué dejarías de cargar para moverte con verdadera intención?', '¿Qué parte de ti todavía no ha aceptado esta dirección?', '¿Dónde está el ímpetu cubriendo una decisión que en realidad no has tomado?']
    }
  };

  CARDS['major-8'] = {
    theme: { en: 'GENTLE POWER', es: 'FUERZA SERENA' },
    archetype: { en: 'Power that never needed to become force', es: 'El poder que nunca necesitó convertirse en fuerza' },
    vocabulary: {
      en: ['patience', 'courage', 'compassion', 'restraint', 'steadiness', 'inner strength', 'calm', 'endurance'],
      es: ['paciencia', 'valor', 'compasión', 'contención', 'entereza', 'fuerza interior', 'calma', 'resistencia']
    },
    positive: {
      en: ['staying steady instead of reacting on impulse', 'meeting something difficult with patience rather than force', 'confidence quiet enough that it doesn’t need to prove itself', 'compassion for a situation instead of control over it'],
      es: ['mantenerte firme en vez de reaccionar por impulso', 'afrontar algo difícil con paciencia en lugar de fuerza', 'una confianza tan serena que no necesita demostrarse', 'compasión hacia una situación en vez de control sobre ella']
    },
    shadow: {
      en: ['self-doubt disguised as being reasonable', 'letting the first sharp reaction make the decision for you', 'mistaking gentleness for weakness and overcorrecting into force', 'exhausting yourself trying to hold everything calmly at once'],
      es: ['la inseguridad disfrazada de sensatez', 'dejar que la primera reacción intensa decida por ti', 'confundir la calma con debilidad y sobrecorregir con fuerza', 'agotarte tratando de sostenerlo todo con calma a la vez']
    },
    yesNo: 'MAYBE',
    yesNoWhy: {
      en: 'Strength rarely rushes to a verdict; it asks you to stay with the discomfort a while longer before the real answer becomes clear.',
      es: 'La Fuerza rara vez se apresura a un veredicto; te pide quedarte un poco más con la incomodidad antes de que la respuesta real se aclare.'
    },
    domains: {
      career: {
        en: 'This card asks whether you can stay steady in a difficult job long enough to see it clearly, rather than deciding from the sharpest bad day. Patience here isn’t passivity — it’s information gathering.',
        es: 'Esta carta pregunta si puedes mantenerte firme en un trabajo difícil el tiempo suficiente para verlo con claridad, en vez de decidir desde el peor día. La paciencia aquí no es pasividad: es recabar información.'
      },
      relationship: {
        en: 'Strength favors quiet courage over dramatic gestures — showing up steadily rather than trying to win someone over with intensity. Let this move at its own pace.',
        es: 'La Fuerza favorece el valor discreto frente a los gestos dramáticos: presentarte con constancia en lugar de intentar conquistar a alguien con intensidad. Deja que esto avance a su propio ritmo.'
      },
      money: {
        en: 'This card counsels holding steady through short-term discomfort rather than reacting to every fluctuation. The strength required here is patience, not aggression.',
        es: 'Esta carta aconseja mantenerte firme ante la incomodidad a corto plazo en lugar de reaccionar a cada fluctuación. La fuerza que se necesita aquí es paciencia, no agresividad.'
      },
      movement: {
        en: 'Strength suggests you can handle the discomfort of the unfamiliar without needing certainty first — the real question is whether you trust yourself to stay steady once you’re there.',
        es: 'La Fuerza sugiere que puedes con la incomodidad de lo desconocido sin necesitar certeza primero; la verdadera pregunta es si confías en mantenerte firme una vez estés allí.'
      },
      creative: {
        en: 'This card values quiet persistence over dramatic bursts of inspiration — returning to the work calmly, again and again, even when it resists you.',
        es: 'Esta carta valora la constancia serena frente a los arrebatos dramáticos de inspiración: volver al trabajo con calma, una y otra vez, incluso cuando se resiste.'
      },
      family: {
        en: 'Strength asks you to meet a tense family dynamic with steadiness rather than escalation — holding your position calmly usually moves things further than reacting sharply.',
        es: 'La Fuerza te pide afrontar una dinámica familiar tensa con entereza en lugar de escalar el conflicto: sostener tu posición con calma suele avanzar más que reaccionar con dureza.'
      },
      growth: {
        en: 'This card is about befriending your own difficulty instead of fighting it — the growth is in staying present with discomfort long enough to actually learn from it.',
        es: 'Esta carta trata de hacerte amigo de tu propia dificultad en lugar de pelear contra ella: el crecimiento está en permanecer con la incomodidad el tiempo suficiente para aprender de ella.'
      },
      general: {
        en: 'Strength asks what patience could do here that pressure can’t. Stay present with the discomfort a little longer before deciding — the calm answer is usually the truer one.',
        es: 'La Fuerza pregunta qué podría hacer aquí la paciencia que la presión no puede. Quédate con la incomodidad un poco más antes de decidir: la respuesta serena suele ser la más verdadera.'
      }
    },
    advice: {
      en: ['Wait out the sharpest reaction before deciding.', 'Meet the difficulty with patience, not force.', 'Let steadiness, not intensity, do the convincing.'],
      es: ['Deja pasar la reacción más intensa antes de decidir.', 'Afronta la dificultad con paciencia, no con fuerza.', 'Deja que la firmeza convenza, no la intensidad.']
    },
    reflection: {
      en: ['What could patience do here that pressure can’t?', 'What are you trying to control that just needs to be met calmly instead?', 'Where has gentleness been mistaken for weakness?'],
      es: ['¿Qué podría hacer aquí la paciencia que la presión no puede?', '¿Qué estás intentando controlar que solo necesita afrontarse con calma?', '¿Dónde se ha confundido la serenidad con debilidad?']
    }
  };

  CARDS['major-9'] = {
    theme: { en: 'SOLITUDE', es: 'SOLEDAD' },
    archetype: { en: 'The quiet reached by turning the noise down', es: 'La quietud a la que se llega bajando el ruido' },
    vocabulary: {
      en: ['solitude', 'reflection', 'distance', 'inner knowledge', 'silence', 'patience', 'withdrawal', 'observation'],
      es: ['soledad', 'reflexión', 'distancia', 'saber interior', 'silencio', 'paciencia', 'retiro', 'observación']
    },
    positive: {
      en: ['stepping back far enough to actually think clearly', 'trusting your own answer over the chorus of other opinions', 'using solitude on purpose, not as an escape', 'patience with a question that isn’t ready to be answered yet'],
      es: ['tomar suficiente distancia para pensar con claridad', 'confiar en tu propia respuesta por encima del coro de opiniones ajenas', 'usar la soledad con intención, no como huida', 'paciencia con una pregunta que todavía no está lista para responderse']
    },
    shadow: {
      en: ['withdrawing to avoid the situation rather than to understand it', 'isolating yourself past the point it’s actually helping', 'mistaking distance from people for distance from the truth', 'staying alone with a question you actually need outside help with'],
      es: ['retirarte para evitar la situación en vez de para entenderla', 'aislarte más allá del punto en que realmente ayuda', 'confundir la distancia de las personas con distancia de la verdad', 'quedarte a solas con una pregunta que en realidad necesita ayuda externa']
    },
    yesNo: 'MAYBE',
    yesNoWhy: {
      en: 'The Hermit exists to slow a decision down, not to make it — it’s telling you the answer isn’t ready yet, not that there isn’t one.',
      es: 'El Ermitaño existe para frenar una decisión, no para tomarla; te dice que la respuesta todavía no está lista, no que no exista.'
    },
    domains: {
      career: {
        en: 'This card asks you to step back from every opinion — the boss’s, your family’s, the internet’s — and spend real time alone with the question before answering it for anyone else.',
        es: 'Esta carta te pide alejarte de cada opinión (la del jefe, la de tu familia, la de internet) y pasar tiempo real a solas con la pregunta antes de responderla por nadie más.'
      },
      relationship: {
        en: 'The Hermit suggests pausing before pursuing anyone — not to give up, but to get clear on what you actually want alone, away from the excitement of the chase itself.',
        es: 'El Ermitaño sugiere hacer una pausa antes de acercarte a nadie, no para rendirte, sino para tener claro lo que de verdad quieres, lejos de la emoción de la persecución en sí.'
      },
      money: {
        en: 'Before making this financial move, get away from other people’s advice long enough to hear your own read on it. The Hermit distrusts decisions made in a crowd.',
        es: 'Antes de tomar esta decisión financiera, aléjate de los consejos ajenos el tiempo suficiente para escuchar tu propia lectura. El Ermitaño desconfía de las decisiones tomadas en medio de una multitud.'
      },
      movement: {
        en: 'This card often shows up exactly when a move is being considered — not as an answer, but as a reason to spend quiet time with the question before anyone else weighs in.',
        es: 'Esta carta suele aparecer justo cuando se está considerando una mudanza, no como respuesta, sino como una razón para pasar tiempo tranquilo con la pregunta antes de que nadie más opine.'
      },
      creative: {
        en: 'The Hermit favors working alone, away from feedback, until the idea has a shape of its own. Too many voices too early can drown out the one that actually matters.',
        es: 'El Ermitaño favorece trabajar a solas, lejos de las opiniones ajenas, hasta que la idea tenga forma propia. Demasiadas voces demasiado pronto pueden ahogar la que de verdad importa.'
      },
      family: {
        en: 'This card suggests distance, not distance forever — enough space from a family dynamic to see it clearly, rather than reacting from inside it.',
        es: 'Esta carta sugiere distancia, no distancia para siempre: el espacio suficiente para ver con claridad una dinámica familiar, en lugar de reaccionar desde dentro de ella.'
      },
      growth: {
        en: 'This is one of the clearest cards for personal growth: what would you decide if nobody else got a vote? The Hermit believes that answer is already forming in you.',
        es: 'Esta es una de las cartas más claras para el crecimiento personal: ¿qué decidirías si nadie más tuviera voto? El Ermitaño cree que esa respuesta ya se está formando en ti.'
      },
      general: {
        en: 'The Hermit rarely gives a fast answer because the point is the pause itself. Reduce the outside noise before deciding — the quieter signal underneath is the one worth trusting.',
        es: 'El Ermitaño rara vez da una respuesta rápida porque el punto es precisamente la pausa. Reduce el ruido externo antes de decidir; la señal más silenciosa de debajo es la que vale la pena confiar.'
      }
    },
    advice: {
      en: ['Get away from other people’s opinions before deciding.', 'Give the question time alone before you answer it.', 'Trust the quieter signal over the loudest one.'],
      es: ['Aléjate de las opiniones ajenas antes de decidir.', 'Dale tiempo a solas a la pregunta antes de responderla.', 'Confía en la señal más silenciosa por encima de la más ruidosa.']
    },
    reflection: {
      en: ['What would you decide if nobody else could influence the answer?', 'What remains once the outside noise is turned all the way down?', 'Are you withdrawing to think, or to avoid?'],
      es: ['¿Qué decidirías si nadie más pudiera influir en la respuesta?', '¿Qué queda cuando el ruido exterior se apaga del todo?', '¿Te estás retirando para pensar, o para evitar?']
    }
  };

  CARDS['major-10'] = {
    theme: { en: 'CYCLES', es: 'CICLOS' },
    archetype: { en: 'This moment as one turn of a larger wheel', es: 'Este momento como un giro más de una rueda mayor' },
    vocabulary: {
      en: ['cycle', 'turning point', 'fortune', 'change', 'pattern', 'timing', 'momentum', 'fate'],
      es: ['ciclo', 'punto de giro', 'fortuna', 'cambio', 'patrón', 'momento', 'impulso', 'destino']
    },
    positive: {
      en: ['recognizing a pattern instead of being surprised by it again', 'trusting that a hard stretch is a phase, not a permanent state', 'moving with the timing instead of fighting it', 'seeing the bigger cycle instead of only this one moment'],
      es: ['reconocer un patrón en vez de que te vuelva a sorprender', 'confiar en que una etapa difícil es una fase, no un estado permanente', 'moverte con el momento en vez de luchar contra él', 'ver el ciclo más grande en vez de solo este momento']
    },
    shadow: {
      en: ['waiting passively for luck instead of noticing the pattern', 'blaming fate for a decision that’s actually yours to make', 'repeating the same cycle and calling it bad luck', 'resisting a turn that’s already happening anyway'],
      es: ['esperar pasivamente a que llegue la suerte en lugar de notar el patrón', 'culpar al destino de una decisión que en realidad es tuya', 'repetir el mismo ciclo y llamarlo mala suerte', 'resistirte a un giro que de todas formas ya está ocurriendo']
    },
    yesNo: 'MAYBE',
    yesNoWhy: {
      en: 'The Wheel measures timing more than merit — the useful move is recognizing which part of the cycle you’re in before trying to force the next one.',
      es: 'La Rueda mide más el momento que el mérito; lo útil es reconocer en qué parte del ciclo estás antes de intentar forzar el siguiente.'
    },
    domains: {
      career: {
        en: 'Notice whether this job situation is part of a pattern you’ve lived before — the same complaint in a different building. If so, the cycle, not this specific job, is the real question.',
        es: 'Fíjate si esta situación laboral es parte de un patrón que ya has vivido antes: la misma queja en otro edificio. Si es así, el ciclo, no este trabajo en concreto, es la verdadera pregunta.'
      },
      relationship: {
        en: 'The Wheel asks whether this pursuit fits a pattern you’ve seen before in yourself. Timing matters here too — the same person can be a very different answer at a different moment.',
        es: 'La Rueda pregunta si esta búsqueda encaja en un patrón que ya has visto antes en ti mismo. El momento también importa aquí: la misma persona puede ser una respuesta muy distinta en otro momento.'
      },
      money: {
        en: 'This card treats money as cyclical, not fixed — a downturn or windfall says less about your worth than about timing. Decide based on the pattern, not the panic of one moment.',
        es: 'Esta carta trata el dinero como algo cíclico, no fijo: una bajada o una ganancia dicen menos sobre tu valor que sobre el momento. Decide según el patrón, no según el pánico de un instante.'
      },
      movement: {
        en: 'A move can be exactly the turn the Wheel is describing — a natural shift rather than a risk taken against fate. Notice if this feels like a door closing and another opening on its own.',
        es: 'Una mudanza puede ser justo el giro que describe la Rueda: un cambio natural y no un riesgo tomado contra el destino. Fíjate si sientes que se cierra una puerta y otra se abre por sí sola.'
      },
      creative: {
        en: 'Creative energy moves in cycles too — this dry spell is probably a phase, not a verdict on the work itself. The Wheel suggests waiting out the low turn rather than abandoning the project.',
        es: 'La energía creativa también se mueve en ciclos: esta sequía probablemente sea una fase, no un veredicto sobre el trabajo en sí. La Rueda sugiere esperar a que pase el giro bajo en lugar de abandonar el proyecto.'
      },
      family: {
        en: 'Family patterns repeat across generations more than we admit. This card asks whether you’re about to repeat one, or whether this is the turn where it actually changes.',
        es: 'Los patrones familiares se repiten entre generaciones más de lo que admitimos. Esta carta pregunta si estás a punto de repetir uno, o si este es el giro en el que realmente cambia.'
      },
      growth: {
        en: 'What keeps returning in your life, and what would actually change the pattern? The Wheel suggests the recurring theme matters more right now than this single decision.',
        es: 'Qué vuelve una y otra vez en tu vida, y qué cambiaría de verdad el patrón: la Rueda sugiere que ese tema recurrente importa ahora más que esta decisión puntual.'
      },
      general: {
        en: 'This situation is likely part of a larger cycle rather than an isolated event. Recognizing the pattern — and the timing you’re in — matters more than judging this one moment alone.',
        es: 'Esta situación probablemente forme parte de un ciclo más grande y no de un hecho aislado. Reconocer el patrón, y el momento en que estás, importa más que juzgar solo este instante.'
      }
    },
    advice: {
      en: ['Look for the pattern before judging this one moment.', 'Move with the timing instead of fighting it.', 'Ask if this has happened before in a different form.'],
      es: ['Busca el patrón antes de juzgar este único momento.', 'Muévete con el momento en lugar de luchar contra él.', 'Pregúntate si esto ya ha pasado antes con otra forma.']
    },
    reflection: {
      en: ['What keeps returning, and what would actually change the pattern?', 'Which part of the cycle are you in right now?', 'What are you calling bad luck that’s actually a repeating choice?'],
      es: ['¿Qué vuelve una y otra vez, y qué cambiaría realmente el patrón?', '¿En qué parte del ciclo estás ahora mismo?', '¿Qué llamas mala suerte que en realidad es una elección que se repite?']
    }
  };

  CARDS['major-11'] = {
    theme: { en: 'CONSEQUENCE', es: 'CONSECUENCIA' },
    archetype: { en: 'The clean edge of cause and effect', es: 'El filo limpio de la causa y el efecto' },
    vocabulary: {
      en: ['fairness', 'truth', 'accountability', 'consequence', 'balance', 'evidence', 'responsibility', 'clarity'],
      es: ['justicia', 'verdad', 'responsabilidad', 'consecuencia', 'equilibrio', 'evidencia', 'imparcialidad', 'claridad']
    },
    positive: {
      en: ['deciding based on evidence rather than on hope', 'being willing to stand behind the consequences of your own choice', 'fairness applied to yourself, not just to others', 'clarity that comes from removing the emotional static'],
      es: ['decidir según la evidencia y no según la esperanza', 'estar dispuesto a responder por las consecuencias de tu propia elección', 'aplicar la justicia también a ti mismo, no solo a los demás', 'una claridad que llega al quitar la interferencia emocional']
    },
    shadow: {
      en: ['avoiding accountability for a choice you’ve already made', 'weighing the situation while ignoring your own role in it', 'demanding fairness from others you haven’t offered yourself', 'confusing being right with being honest'],
      es: ['evitar responder por una elección que ya has tomado', 'sopesar la situación ignorando tu propio papel en ella', 'exigir a otros una justicia que tú mismo no has ofrecido', 'confundir tener razón con ser honesto']
    },
    yesNo: 'MAYBE',
    yesNoWhy: {
      en: 'Justice won’t hand you an answer until you’ve honestly weighed the actual cost and responsibility involved — the card measures clarity, not comfort.',
      es: 'La Justicia no te dará una respuesta hasta que hayas sopesado con honestidad el coste y la responsabilidad reales; la carta mide claridad, no comodidad.'
    },
    domains: {
      career: {
        en: 'This card asks you to weigh the decision on evidence — pay, growth, wellbeing, contract terms — rather than on how it will look to others. Whatever you decide, be willing to own the consequences.',
        es: 'Esta carta te pide sopesar la decisión con evidencia (el sueldo, el crecimiento, el bienestar, las condiciones) y no con cómo se verá ante los demás. Decidas lo que decidas, asume las consecuencias.'
      },
      relationship: {
        en: 'Justice asks you to look honestly at the actual pattern of give and take here, not the version that’s easiest to believe. Fair to both people is the real standard.',
        es: 'La Justicia te pide mirar con honestidad el patrón real de dar y recibir aquí, no la versión más fácil de creer. Lo justo para ambas personas es el verdadero criterio.'
      },
      money: {
        en: 'A precise card for money decisions: it wants the real numbers, not the hopeful ones. If the evidence supports the move, take it; if it doesn’t, admit that clearly to yourself.',
        es: 'Una carta precisa para decisiones de dinero: quiere las cifras reales, no las optimistas. Si la evidencia respalda el movimiento, hazlo; si no, admítelo con claridad ante ti mismo.'
      },
      movement: {
        en: 'Weigh this move by what it will actually cost and actually give you, not by the story you’d like to tell about it. Justice rewards an honest ledger over a hopeful one.',
        es: 'Sopesa esta mudanza por lo que realmente te costará y realmente te dará, no por la historia que te gustaría contar sobre ella. La Justicia premia un balance honesto frente a uno esperanzado.'
      },
      creative: {
        en: 'This card asks for an honest look at the actual effort you’ve put in versus the result you expect — creative consequence follows real work, not just intention.',
        es: 'Esta carta pide una mirada honesta al esfuerzo real que has invertido frente al resultado que esperas: la consecuencia creativa sigue al trabajo real, no solo a la intención.'
      },
      family: {
        en: 'Justice asks you to look at your own part in this family dynamic as clearly as you look at everyone else’s. Fairness applied only outward isn’t fairness.',
        es: 'La Justicia te pide mirar tu propia parte en esta dinámica familiar con la misma claridad con la que miras la de los demás. La justicia aplicada solo hacia fuera no es justicia.'
      },
      growth: {
        en: 'This card asks which choice you could stand behind once its actual effects are visible — not the choice that feels good today, but the one you’d still defend later.',
        es: 'Esta carta pregunta qué elección podrías sostener una vez que sus efectos reales sean visibles, no la que se siente bien hoy, sino la que aún defenderías más tarde.'
      },
      general: {
        en: 'Justice asks for an honest accounting: what does the evidence actually show, separate from what you’re hoping is true? The clean answer usually surfaces once that’s done.',
        es: 'La Justicia pide un balance honesto: ¿qué muestra realmente la evidencia, aparte de lo que esperas que sea verdad? La respuesta clara suele aparecer una vez hecho eso.'
      }
    },
    advice: {
      en: ['Weigh the real evidence, not the hopeful version.', 'Be willing to own the consequences either way.', 'Apply the same fairness to yourself that you ask of others.'],
      es: ['Sopesa la evidencia real, no la versión esperanzada.', 'Está dispuesto a asumir las consecuencias, decidas lo que decidas.', 'Aplícate a ti mismo la misma justicia que exiges a los demás.']
    },
    reflection: {
      en: ['Which choice could you stand behind once its effects are visible?', 'What does the honest evidence say, separate from what you’re hoping?', 'Where have you asked for fairness you haven’t offered?'],
      es: ['¿Qué elección podrías sostener cuando sus efectos sean visibles?', '¿Qué dice la evidencia honesta, aparte de lo que esperas?', '¿Dónde has pedido una justicia que tú no has ofrecido?']
    }
  };

  CARDS['major-12'] = {
    theme: { en: 'SUSPENSION', es: 'SUSPENSIÓN' },
    archetype: { en: 'The pause that changes what you can see', es: 'La pausa que cambia lo que puedes ver' },
    vocabulary: {
      en: ['pause', 'surrender', 'perspective', 'stillness', 'letting go of control', 'patience', 'reversal', 'waiting'],
      es: ['pausa', 'rendición', 'perspectiva', 'quietud', 'soltar el control', 'paciencia', 'inversión', 'espera']
    },
    positive: {
      en: ['seeing a fixed problem differently just by holding still', 'surrendering control over something you were never going to control anyway', 'patience that isn’t passive, but deliberate', 'making room for a perspective that wasn’t available in motion'],
      es: ['ver de otra forma un problema que parecía fijo, solo con quedarte quieto', 'soltar el control sobre algo que de todas formas nunca ibas a controlar', 'una paciencia que no es pasiva, sino deliberada', 'hacer espacio para una perspectiva que en movimiento no estaba disponible']
    },
    shadow: {
      en: ['stalling because deciding feels worse than waiting', 'martyrdom disguised as patience', 'staying stuck long after the new view has already arrived', 'waiting for someone else to make the call for you'],
      es: ['postergar porque decidir se siente peor que esperar', 'el martirio disfrazado de paciencia', 'quedarte atascado mucho después de que la nueva perspectiva ya llegó', 'esperar a que otro tome la decisión por ti']
    },
    yesNo: 'MAYBE',
    yesNoWhy: {
      en: 'The Hanged Man exists specifically to interrupt a fast answer — the value here is in what the pause reveals, not in resolving it quickly.',
      es: 'El Colgado existe específicamente para interrumpir una respuesta rápida; el valor está en lo que revela la pausa, no en resolverla deprisa.'
    },
    domains: {
      career: {
        en: 'This card suggests the job question looks different once you stop trying to solve it from inside the daily grind. A deliberate pause, not a rushed exit, may show you what’s actually going on.',
        es: 'Esta carta sugiere que la pregunta laboral se ve distinta en cuanto dejas de intentar resolverla desde dentro de la rutina diaria. Una pausa deliberada, no una salida apresurada, puede mostrarte lo que realmente ocurre.'
      },
      relationship: {
        en: 'Rather than pursuing right away, this card asks what happens if you simply stop pushing for a moment. Sometimes the clearer view of a person only appears once you release the need for an outcome.',
        es: 'En lugar de perseguir de inmediato, esta carta pregunta qué pasa si simplemente dejas de insistir por un momento. A veces la mirada más clara sobre una persona solo aparece cuando sueltas la necesidad de un resultado.'
      },
      money: {
        en: 'Holding off on this financial decision isn’t avoidance if it’s deliberate — sometimes the smartest move with money is the one you don’t make yet.',
        es: 'Posponer esta decisión financiera no es evasión si es deliberado; a veces el movimiento más inteligente con el dinero es el que todavía no haces.'
      },
      movement: {
        en: 'This card can mean the timing isn’t quite right yet — not that the move is wrong, but that a little more suspension will show you something the rush would have hidden.',
        es: 'Esta carta puede significar que el momento aún no es el correcto, no que la mudanza esté mal, sino que un poco más de suspensión te mostrará algo que la prisa habría escondido.'
      },
      creative: {
        en: 'Sometimes the block isn’t a lack of ideas but a lack of stillness. Let the project sit unresolved a little longer — a different angle tends to appear once you stop pushing.',
        es: 'A veces el bloqueo no es falta de ideas, sino falta de quietud. Deja el proyecto sin resolver un poco más: suele aparecer un ángulo distinto en cuanto dejas de empujar.'
      },
      family: {
        en: 'This card asks you to hold still in a tense family situation rather than force a resolution today. What looks unmovable now may look different from a slightly different position.',
        es: 'Esta carta te pide quedarte quieto en una situación familiar tensa en lugar de forzar una resolución hoy. Lo que ahora parece inamovible puede verse distinto desde una posición ligeramente diferente.'
      },
      growth: {
        en: 'Growth here doesn’t look like progress in the usual sense — it looks like allowing yourself to not know yet, and trusting that the not-knowing is doing something useful.',
        es: 'Crecer aquí no se parece al progreso habitual: se parece a permitirte no saber todavía, y confiar en que ese no saber está haciendo algo útil.'
      },
      general: {
        en: 'What changes when waiting becomes observation instead of avoidance? This card asks you to hold the question a little longer before the picture becomes clear.',
        es: 'Qué cambia cuando esperar se convierte en observar en lugar de evitar: esta carta te pide sostener la pregunta un poco más antes de que la imagen se aclare.'
      }
    },
    advice: {
      en: ['Let the pause be deliberate, not avoidant.', 'Look at this from a position you haven’t tried yet.', 'Release the need for an outcome before deciding anything.'],
      es: ['Deja que la pausa sea deliberada, no una evasión.', 'Mira esto desde una posición que todavía no has probado.', 'Suelta la necesidad de un resultado antes de decidir nada.']
    },
    reflection: {
      en: ['What changes when waiting becomes observation?', 'What would you see if you stopped trying to control the outcome?', 'How long have you been standing still without actually looking around?'],
      es: ['¿Qué cambia cuando esperar se convierte en observar?', '¿Qué verías si dejaras de intentar controlar el resultado?', '¿Cuánto llevas quieto sin realmente mirar alrededor?']
    }
  };

  CARDS['major-13'] = {
    theme: { en: 'TRANSFORMATION', es: 'TRANSFORMACIÓN' },
    archetype: { en: 'The end of one form so another can begin', es: 'El final de una forma para que otra pueda empezar' },
    vocabulary: {
      en: ['ending', 'transition', 'release', 'transformation', 'letting go', 'closure', 'renewal', 'necessary change'],
      es: ['final', 'transición', 'liberación', 'transformación', 'soltar', 'cierre', 'renovación', 'cambio necesario']
    },
    positive: {
      en: ['letting a finished chapter actually be finished', 'making room for something that can only exist once the old form ends', 'facing an ending honestly instead of dragging it out', 'trusting that transformation, not just loss, is on the other side'],
      es: ['dejar que un capítulo terminado esté realmente terminado', 'hacer espacio para algo que solo puede existir cuando la forma anterior acaba', 'afrontar un final con honestidad en vez de alargarlo', 'confiar en que del otro lado hay transformación, no solo pérdida']
    },
    shadow: {
      en: ['clinging to a familiar form well past its expiration', 'fearing the ending more than you’re honest about the cost of staying', 'dragging out a slow ending instead of letting it complete', 'mistaking necessary loss for pure catastrophe'],
      es: ['aferrarte a una forma conocida mucho después de haber caducado', 'temer el final más de lo que admites el coste de quedarte', 'alargar un final lento en lugar de dejar que se complete', 'confundir una pérdida necesaria con una catástrofe pura']
    },
    yesNo: 'YES',
    yesNoWhy: {
      en: 'Death rarely appears unless something has genuinely run its course — the discomfort is usually the ending itself, not evidence that it’s the wrong move.',
      es: 'La Muerte rara vez aparece a menos que algo haya cumplido de verdad su ciclo; la incomodidad suele ser el final en sí, no una prueba de que sea la decisión equivocada.'
    },
    domains: {
      career: {
        en: 'This card usually means the current version of this job has already ended, even if the paperwork hasn’t caught up yet. What’s complete enough here to actually be released?',
        es: 'Esta carta suele significar que la versión actual de este trabajo ya ha terminado, aunque el papeleo todavía no lo haya alcanzado. ¿Qué está aquí lo bastante completo como para soltarlo de verdad?'
      },
      relationship: {
        en: 'Death can mean pursuing this person requires letting an old version of yourself, or an old story about love, end first. Something has to close before this can genuinely open.',
        es: 'La Muerte puede significar que acercarte a esta persona exige antes dejar terminar una versión anterior de ti, o una vieja historia sobre el amor. Algo tiene que cerrarse para que esto pueda abrirse de verdad.'
      },
      money: {
        en: 'This card can mark the end of an old financial pattern or plan — not catastrophe, but the natural close of something that’s already run its course. Let it end cleanly.',
        es: 'Esta carta puede marcar el final de un viejo patrón o plan financiero, no una catástrofe, sino el cierre natural de algo que ya cumplió su ciclo. Déjalo terminar con limpieza.'
      },
      movement: {
        en: 'Moving can be exactly the transformation this card describes — leaving a place because the version of you who fit there no longer exists. That’s not failure; that’s the point.',
        es: 'Mudarte puede ser justo la transformación que describe esta carta: dejar un lugar porque la versión de ti que encajaba allí ya no existe. Eso no es un fracaso; es precisamente el sentido.'
      },
      creative: {
        en: 'Sometimes a project needs to end honestly before the next one can exist. Death asks whether you’re protecting a finished piece of work out of attachment rather than usefulness.',
          es: 'A veces un proyecto necesita terminar con honestidad para que el siguiente pueda existir. La Muerte pregunta si estás protegiendo un trabajo ya terminado por apego y no por utilidad.'
      },
      family: {
        en: 'This card can point to an old family role or pattern that has to end for the relationship to become something more honest. Endings here can be an act of care, not rejection.',
        es: 'Esta carta puede señalar un viejo papel o patrón familiar que tiene que terminar para que el vínculo se vuelva algo más honesto. Un final aquí puede ser un acto de cuidado, no de rechazo.'
      },
      growth: {
        en: 'What is complete enough to be released? This card treats an ending as the actual mechanism of growth, not an obstacle standing in front of it.',
        es: 'Qué está lo bastante completo como para soltarse: esta carta trata el final como el verdadero mecanismo del crecimiento, no como un obstáculo delante de él.'
      },
      general: {
        en: 'This question sits between preserving a familiar form and making room for a necessary change. Death rarely arrives with a gentler option — the honest move is usually to let it complete.',
        es: 'Esta pregunta está entre conservar una forma conocida y abrir espacio para un cambio necesario. La Muerte rara vez llega con una opción más suave; lo honesto suele ser dejar que se complete.'
      }
    },
    advice: {
      en: ['Let the ending complete instead of dragging it out.', 'Ask what’s already over, even if it hasn’t been said.', 'Treat the discomfort as the ending itself, not a warning sign.'],
      es: ['Deja que el final se complete en vez de alargarlo.', 'Pregúntate qué ya terminó, aunque no se haya dicho.', 'Trata la incomodidad como el final en sí, no como una señal de alarma.']
    },
    reflection: {
      en: ['What is complete enough to be released?', 'What are you protecting that has already ended?', 'What would you finally stop defending if this changed?'],
      es: ['¿Qué está suficientemente completo como para soltarlo?', '¿Qué estás protegiendo que ya ha terminado?', '¿Qué dejarías por fin de defender si esto cambiara?']
    }
  };

  CARDS['major-14'] = {
    theme: { en: 'INTEGRATION', es: 'INTEGRACIÓN' },
    archetype: { en: 'A sustainable frequency between forces that usually pull apart', es: 'Una frecuencia sostenible entre fuerzas que suelen separarse' },
    vocabulary: {
      en: ['balance', 'moderation', 'blending', 'patience', 'harmony', 'adjustment', 'healing', 'proportion'],
      es: ['equilibrio', 'moderación', 'mezcla', 'paciencia', 'armonía', 'ajuste', 'sanación', 'proporción']
    },
    positive: {
      en: ['finding a workable middle instead of an exhausting extreme', 'blending two things that seemed incompatible', 'healing that happens slowly, through small adjustments', 'patience with a process that can’t be rushed'],
      es: ['encontrar un punto medio funcional en vez de un extremo agotador', 'mezclar dos cosas que parecían incompatibles', 'una sanación que ocurre despacio, con pequeños ajustes', 'paciencia con un proceso que no se puede apresurar']
    },
    shadow: {
      en: ['compromising so much that neither side is actually satisfied', 'avoiding a real decision by calling it balance', 'impatience that undoes a slow, careful process', 'mixing things that genuinely don’t belong together'],
      es: ['ceder tanto que ninguna de las dos partes queda satisfecha', 'evitar una decisión real llamándola equilibrio', 'una impaciencia que deshace un proceso lento y cuidadoso', 'mezclar cosas que en realidad no deberían combinarse']
    },
    yesNo: 'MAYBE',
    yesNoWhy: {
      en: 'Temperance rarely supports an extreme choice — it asks whether a blended, gradual approach might serve you better than an all-or-nothing decision.',
      es: 'La Templanza rara vez respalda una elección extrema; pregunta si un enfoque mixto y gradual podría servirte mejor que una decisión de todo o nada.'
    },
    domains: {
      career: {
        en: 'This card questions whether leaving has to be all-or-nothing. A phased exit, a conversation about changing your role, or a slower transition may serve you better than a sudden break.',
        es: 'Esta carta cuestiona si irte tiene que ser todo o nada. Una salida progresiva, una conversación para cambiar tu rol, o una transición más lenta pueden servirte mejor que una ruptura repentina.'
      },
      relationship: {
        en: 'Temperance suggests a measured approach to this pursuit — enough patience to let the connection develop naturally, rather than forcing an intense, all-at-once outcome.',
        es: 'La Templanza sugiere un enfoque medido en esta búsqueda: suficiente paciencia para dejar que el vínculo se desarrolle de forma natural, en vez de forzar un desenlace intenso y de golpe.'
      },
      money: {
        en: 'A balanced, moderate financial move tends to serve you better here than an all-in bet. Blend caution with opportunity rather than choosing only one.',
        es: 'Un movimiento financiero equilibrado y moderado suele servirte mejor aquí que una apuesta a todo o nada. Combina cautela y oportunidad en vez de elegir solo una.'
      },
      movement: {
        en: 'Consider whether this move needs to happen all at once, or whether a gradual transition — a trial period, a visit first — would let the decision settle more honestly.',
        es: 'Considera si esta mudanza tiene que ocurrir de golpe, o si una transición gradual (un periodo de prueba, una visita primero) dejaría asentarse la decisión con más honestidad.'
      },
      creative: {
        en: 'Temperance favors blending two influences you’ve been treating as separate — structure and instinct, discipline and play. The mixture, not either extreme, is where this project actually works.',
        es: 'La Templanza favorece mezclar dos influencias que has tratado como separadas: la estructura y el instinto, la disciplina y el juego. La mezcla, no ninguno de los extremos, es donde este proyecto realmente funciona.'
      },
      family: {
        en: 'This card asks for patience with a family healing process that can’t be rushed into a single conversation. Small, repeated adjustments will do more than one big confrontation.',
        es: 'Esta carta pide paciencia con un proceso de sanación familiar que no se puede resolver en una sola conversación. Pequeños ajustes repetidos harán más que una gran confrontación.'
      },
      growth: {
        en: 'What small adjustment would make the whole arrangement more livable? Temperance treats growth as gradual integration, not a dramatic before-and-after.',
        es: 'Qué pequeño ajuste haría más habitable toda la situación: la Templanza trata el crecimiento como una integración gradual, no como un antes y después dramático.'
      },
      general: {
        en: 'This situation may not need an extreme choice at all — a blended, patient approach that lets two seemingly opposed things coexist may serve you better than picking one side.',
        es: 'Esta situación quizá no necesite ninguna elección extrema: un enfoque mixto y paciente que permita convivir a dos cosas aparentemente opuestas puede servirte mejor que elegir un solo lado.'
      }
    },
    advice: {
      en: ['Look for the blend before choosing an extreme.', 'Let the process happen gradually instead of all at once.', 'Make one small adjustment rather than one big move.'],
      es: ['Busca la mezcla antes de elegir un extremo.', 'Deja que el proceso ocurra de forma gradual, no de golpe.', 'Haz un pequeño ajuste en lugar de un gran movimiento.']
    },
    reflection: {
      en: ['What small adjustment would make the whole arrangement more livable?', 'Does this really need to be all-or-nothing?', 'What two things have you been treating as incompatible that actually aren’t?'],
      es: ['¿Qué pequeño ajuste haría más habitable toda la situación?', '¿De verdad esto tiene que ser todo o nada?', '¿Qué dos cosas has tratado como incompatibles que en realidad no lo son?']
    }
  };

  CARDS['major-15'] = {
    theme: { en: 'ATTACHMENT', es: 'APEGO' },
    archetype: { en: 'The bargain hidden inside desire, habit and fear', es: 'El pacto oculto dentro del deseo, el hábito y el miedo' },
    vocabulary: {
      en: ['attachment', 'dependency', 'fear', 'temptation', 'pattern', 'bondage', 'materialism', 'unhealthy pull'],
      es: ['apego', 'dependencia', 'miedo', 'tentación', 'patrón', 'atadura', 'materialismo', 'atracción malsana']
    },
    positive: {
      en: ['naming the thing you’re attached to instead of denying it', 'recognizing a pattern clearly enough to actually choose differently', 'separating real desire from fear dressed up as desire', 'reclaiming a choice you’d handed over to habit'],
      es: ['nombrar aquello a lo que estás apegado en lugar de negarlo', 'reconocer un patrón con la claridad suficiente para elegir distinto', 'separar el deseo real del miedo disfrazado de deseo', 'recuperar una elección que le habías entregado al hábito']
    },
    shadow: {
      en: ['staying somewhere because leaving feels unimaginable, not because it’s right', 'confusing intensity with love', 'a comfort so familiar it’s stopped being questioned', 'fear disguised as practicality'],
      es: ['quedarte en algún sitio porque irte parece impensable, no porque sea lo correcto', 'confundir la intensidad con el amor', 'una comodidad tan conocida que ya nadie la cuestiona', 'el miedo disfrazado de sensatez']
    },
    yesNo: 'MAYBE',
    yesNoWhy: {
      en: 'The Devil rarely answers the surface question directly — it asks first what is actually keeping you where you are: choice, fear, habit or dependency.',
      es: 'El Diablo rara vez responde a la pregunta superficial de forma directa; primero pregunta qué te mantiene realmente donde estás: elección, miedo, hábito o dependencia.'
    },
    domainOverrides: { relationship: 'YES', family: 'YES' },
    domainReason: {
      relationship: {
        en: 'Not because what you have is worthless, but because the Devil is asking you to check whether attachment, fear or habit is doing the deciding instead of you.',
        es: 'No porque lo que tienes no valga, sino porque el Diablo te pide comprobar si el apego, el miedo o el hábito están decidiendo en tu lugar.'
      },
      family: {
        en: 'Not to abandon the relationship, but because staying silent about an unhealthy pattern usually keeps everyone locked inside it.',
        es: 'No para abandonar el vínculo, sino porque callar sobre un patrón dañino suele mantener a todos atrapados dentro de él.'
      }
    },
    domains: {
      career: {
        en: 'The Devil asks what is actually keeping you in this job — genuine reasons, or fear of the discomfort involved in leaving. Comfort and safety aren’t the same thing; check which one this is.',
        es: 'El Diablo pregunta qué te mantiene realmente en este trabajo: razones genuinas, o miedo a la incomodidad de irte. La comodidad y la seguridad no son lo mismo; comprueba cuál de las dos es esta.'
      },
      relationship: {
        en: 'If part of you feels unable to leave despite knowing something is hurting you, this card asks what is actually keeping you there — love, fear, dependency, habit, or the belief things will change. Intensity alone isn’t proof of health.',
        es: 'Si una parte de ti siente que no puede irse pese a saber que algo le está haciendo daño, esta carta pregunta qué te mantiene realmente ahí: amor, miedo, dependencia, hábito, o la creencia de que las cosas cambiarán. La intensidad, por sí sola, no es prueba de que algo sea sano.'
      },
      money: {
        en: 'This card often points to money used as a leash — spending or scarcity that keeps a pattern locked in place. Name what the money is actually buying you: comfort, status, or an excuse to stay stuck.',
        es: 'Esta carta suele señalar el dinero usado como correa: un gasto o una escasez que mantiene fijo un patrón. Nombra qué te está comprando realmente ese dinero: comodidad, estatus, o una excusa para quedarte atascado.'
      },
      movement: {
        en: 'Notice whether staying is really about roots, or about fear dressed up as loyalty to a place. The Devil asks if you’d still choose to stay if fear weren’t part of the equation.',
        es: 'Fíjate si quedarte es realmente sobre raíces, o sobre un miedo disfrazado de lealtad a un lugar. El Diablo pregunta si seguirías eligiendo quedarte si el miedo no formara parte de la ecuación.'
      },
      creative: {
        en: 'This card can point to a creative habit that’s become a trap — chasing a result, an image, or an approval that no longer has anything to do with why you started making the work.',
        es: 'Esta carta puede señalar un hábito creativo que se ha convertido en trampa: perseguir un resultado, una imagen o una aprobación que ya no tiene nada que ver con por qué empezaste a hacer este trabajo.'
      },
      family: {
        en: 'The Devil often marks an old family pattern nobody has named out loud — an expectation, a debt, a role that keeps repeating. Naming it plainly is usually the first real move.',
        es: 'El Diablo suele señalar un viejo patrón familiar que nadie ha nombrado en voz alta: una expectativa, una deuda, un papel que se repite. Nombrarlo con claridad suele ser el primer movimiento real.'
      },
      growth: {
        en: 'Where could agency return if the attachment were actually named? This card treats growth as the moment you stop calling a trap a choice.',
        es: 'Dónde volvería tu capacidad de elegir si nombraras el apego de verdad: esta carta trata el crecimiento como el momento en que dejas de llamar elección a una trampa.'
      },
      general: {
        en: 'Distinguish what you choose from what keeps choosing through you. The Devil rarely condemns the situation itself — it asks whether fear or habit is currently running the decision instead of you.',
        es: 'Distingue entre lo que eliges y lo que sigue eligiendo a través de ti. El Diablo rara vez condena la situación en sí; pregunta si el miedo o el hábito están llevando ahora mismo la decisión en lugar de ti.'
      }
    },
    advice: {
      en: ['Name exactly what is keeping you here.', 'Separate genuine desire from fear dressed as loyalty.', 'Ask what you’d choose if the fear weren’t part of it.'],
      es: ['Nombra con exactitud qué te mantiene aquí.', 'Separa el deseo genuino del miedo disfrazado de lealtad.', 'Pregúntate qué elegirías si el miedo no formara parte de esto.']
    },
    reflection: {
      en: ['Where could agency return if the attachment were named?', 'What is keeping you here: love, fear, habit or hope?', 'What would you do if you weren’t afraid of the discomfort of leaving?'],
      es: ['¿Dónde volvería tu capacidad de elegir si nombraras el apego?', '¿Qué te mantiene aquí: amor, miedo, hábito o esperanza?', '¿Qué harías si no te diera miedo la incomodidad de irte?']
    }
  };

  CARDS['major-16'] = {
    theme: { en: 'DISRUPTION', es: 'RUPTURA' },
    archetype: { en: 'A structure that can no longer honestly hold its weight', es: 'Una estructura que ya no puede sostener honestamente su peso' },
    vocabulary: {
      en: ['disruption', 'collapse', 'revelation', 'shock', 'instability', 'truth', 'upheaval', 'necessary break'],
      es: ['ruptura', 'colapso', 'revelación', 'golpe', 'inestabilidad', 'verdad', 'sacudida', 'quiebre necesario']
    },
    positive: {
      en: ['a collapse that finally reveals what was actually true', 'being forced out of a situation you were too attached to leave voluntarily', 'clarity that only shows up after the old structure breaks', 'relief underneath the shock, once the dust settles'],
      es: ['un colapso que por fin revela lo que era cierto', 'ser empujado fuera de una situación que estabas demasiado apegado a dejar por voluntad propia', 'una claridad que solo aparece después de que la estructura vieja se rompe', 'un alivio bajo el golpe, una vez que se asienta el polvo']
    },
    shadow: {
      en: ['bracing for disaster instead of reading the disruption as information', 'trying to rebuild the exact structure that just proved unstable', 'panic that mistakes the shock for the whole story', 'refusing the truth because the timing is inconvenient'],
      es: ['prepararte para el desastre en lugar de leer la ruptura como información', 'intentar reconstruir exactamente la misma estructura que acaba de demostrar ser inestable', 'un pánico que confunde el golpe con la historia completa', 'rechazar la verdad porque el momento resulta inconveniente']
    },
    yesNo: 'YES',
    yesNoWhy: {
      en: 'The Tower shows up when a structure has already stopped being honest — the disruption is confirming something, not causing it.',
      es: 'La Torre aparece cuando una estructura ya ha dejado de ser honesta; la ruptura confirma algo, no lo causa.'
    },
    domains: {
      career: {
        en: 'The Tower suggests this job situation is already unstable, whether or not it looks that way on the surface. Something here can no longer honestly hold its own weight — the disruption is information, not disaster.',
        es: 'La Torre sugiere que esta situación laboral ya es inestable, la parezca o no por fuera. Algo aquí ya no puede sostener honestamente su propio peso; la ruptura es información, no una desgracia.'
      },
      relationship: {
        en: 'This card can mean a shock is exactly what’s needed to see this connection clearly — an illusion about who someone is, or who you are with them, finally breaking so the truth can be seen.',
        es: 'Esta carta puede significar que un golpe es justo lo que hace falta para ver este vínculo con claridad: una ilusión sobre quién es esa persona, o quién eres tú con ella, rompiéndose por fin para que se vea la verdad.'
      },
      money: {
        en: 'The Tower can indicate a financial structure that was never as stable as it looked — a sudden change here is revealing that, not creating it. Rebuild on more honest ground.',
        es: 'La Torre puede indicar una estructura financiera que nunca fue tan estable como parecía; un cambio repentino aquí lo revela, no lo provoca. Reconstruye sobre una base más honesta.'
      },
      movement: {
        en: 'A disruptive event — a loss, a shock, an ending — may be exactly what finally makes the move possible. The Tower rarely appears as a suggestion; it appears when the old structure has already given way.',
        es: 'Un suceso disruptivo (una pérdida, un golpe, un final) puede ser justo lo que por fin haga posible la mudanza. La Torre rara vez aparece como sugerencia; aparece cuando la vieja estructura ya ha cedido.'
      },
      creative: {
        en: 'This card often means the old approach to the work has to fall apart before a truer one can appear. Don’t rush to rebuild exactly what just broke.',
        es: 'Esta carta suele significar que el viejo enfoque del trabajo tiene que derrumbarse antes de que aparezca uno más verdadero. No te apresures a reconstruir exactamente lo que se acaba de romper.'
      },
      family: {
        en: 'The Tower can mark a moment where a family illusion — a story everyone quietly agreed not to question — finally breaks. That rupture, however painful, may be more honest than the peace it replaces.',
        es: 'La Torre puede marcar un momento en que una ilusión familiar (una historia que todos acordaron en silencio no cuestionar) por fin se rompe. Esa ruptura, por dolorosa que sea, puede ser más honesta que la paz que sustituye.'
      },
      growth: {
        en: 'What are you protecting that no longer protects you? This card treats collapse as the moment a false stability finally becomes visible for what it was.',
        es: 'Qué estás protegiendo que ya no te protege: esta carta trata el colapso como el momento en que una estabilidad falsa por fin se muestra tal como era.'
      },
      general: {
        en: 'The disturbance here is likely information, not misfortune — it’s showing you where a structure was only being performed rather than genuinely held. Let it fall rather than propping it back up.',
        es: 'La alteración aquí probablemente sea información, no desgracia: muestra dónde una estructura solo se estaba representando y no sosteniendo de verdad. Déjala caer en vez de volver a apuntalarla.'
      }
    },
    advice: {
      en: ['Read the disruption as information, not disaster.', 'Don’t rebuild the exact structure that just broke.', 'Let the truth surface even if the timing is inconvenient.'],
      es: ['Lee la ruptura como información, no como desgracia.', 'No reconstruyas exactamente la misma estructura que se rompió.', 'Deja salir la verdad aunque el momento sea inconveniente.']
    },
    reflection: {
      en: ['What are you protecting that no longer protects you?', 'If this structure disappeared tomorrow, what would you finally stop defending?', 'What has this shock made impossible to keep ignoring?'],
      es: ['¿Qué estás protegiendo que ya no te protege?', '¿Qué dejarías por fin de defender si esta estructura desapareciera mañana?', '¿Qué te ha hecho imposible seguir ignorando este golpe?']
    }
  };

  CARDS['major-17'] = {
    theme: { en: 'HOPE', es: 'ESPERANZA' },
    archetype: { en: 'A visible signal across darkness, without a guarantee', es: 'Una señal visible en la oscuridad, sin garantía' },
    vocabulary: {
      en: ['hope', 'renewal', 'faith', 'healing', 'openness', 'inspiration', 'restoration', 'quiet confidence'],
      es: ['esperanza', 'renovación', 'fe', 'sanación', 'apertura', 'inspiración', 'restauración', 'confianza serena']
    },
    positive: {
      en: ['tending hope as a practice, not a guarantee', 'openness after a hard stretch instead of permanent guardedness', 'trusting a quiet sense that things can still work out', 'generosity toward yourself while things are still healing'],
      es: ['cuidar la esperanza como una práctica, no como una garantía', 'apertura después de una etapa difícil, en vez de un blindaje permanente', 'confiar en un presentimiento sereno de que las cosas aún pueden salir bien', 'generosidad contigo mismo mientras las cosas todavía sanan']
    },
    shadow: {
      en: ['hope used to avoid a needed decision', 'waiting for things to simply get better without doing anything', 'disconnecting from hope entirely because it once let you down', 'inspiration without the follow-through to make it real'],
      es: ['usar la esperanza para evitar una decisión necesaria', 'esperar a que las cosas mejoren solas sin hacer nada', 'desconectarte por completo de la esperanza porque una vez te falló', 'inspiración sin la constancia necesaria para hacerla realidad']
    },
    yesNo: 'YES',
    yesNoWhy: {
      en: 'The Star tends to favor the hopeful path, but as an act of faith rather than a certainty — it supports moving toward what still feels possible.',
      es: 'La Estrella suele favorecer el camino esperanzador, pero como un acto de fe y no como una certeza; respalda moverte hacia lo que todavía se siente posible.'
    },
    domains: {
      career: {
        en: 'This card leans toward leaving if what’s pulling you is genuine hope for something better, not escape from something painful. Trust the quiet sense that a better fit exists, even without a guarantee yet.',
        es: 'Esta carta se inclina por irte si lo que te empuja es una esperanza genuina de algo mejor, y no huir de algo doloroso. Confía en el presentimiento sereno de que existe un mejor encaje, aunque todavía no haya garantía.'
      },
      relationship: {
        en: 'The Star supports pursuing this with open, genuine hope rather than guardedness — but hope here means staying open to the outcome, not attaching to a specific one.',
        es: 'La Estrella respalda acercarte con una esperanza abierta y genuina en lugar de estar a la defensiva, pero esperanza aquí significa quedarte abierto al resultado, no aferrarte a uno concreto.'
      },
      money: {
        en: 'A hopeful, restorative card for money — it favors investing in recovery or renewal over staying frozen by a past setback. Faith paired with a real plan tends to work here.',
        es: 'Una carta esperanzadora y de restauración para el dinero: favorece invertir en la recuperación o la renovación frente a quedarte paralizado por un tropiezo pasado. La fe combinada con un plan real suele funcionar aquí.'
      },
      movement: {
        en: 'The Star is one of the more encouraging cards for a move like this — it supports going toward the place that still feels like healing, even without proof yet that it will work out.',
        es: 'La Estrella es una de las cartas más alentadoras para una mudanza así: respalda ir hacia el lugar que todavía se siente como sanación, aunque no haya aún prueba de que saldrá bien.'
      },
      creative: {
        en: 'This card supports returning to the work with renewed faith, even after a disappointing stretch. Inspiration is available again — the task now is follow-through, not waiting for more proof it’s worth it.',
        es: 'Esta carta respalda volver al trabajo con la fe renovada, incluso después de una etapa decepcionante. La inspiración vuelve a estar disponible; ahora la tarea es la constancia, no esperar más pruebas de que vale la pena.'
      },
      family: {
        en: 'The Star suggests healing is genuinely possible here, even if it takes time and can’t be rushed. Tend the relationship gently rather than demanding it repair itself all at once.',
        es: 'La Estrella sugiere que aquí la sanación es realmente posible, aunque lleve tiempo y no se pueda apresurar. Cuida el vínculo con delicadeza, en lugar de exigir que se repare de golpe.'
      },
      growth: {
        en: 'What would you keep caring for if it could still reach you? This card treats hope itself as a discipline worth practicing, not something you either have or don’t.',
        es: 'Qué seguirías cuidando si todavía pudiera llegar hasta ti: esta carta trata la esperanza como una disciplina que vale la pena practicar, no como algo que se tiene o no.'
      },
      general: {
        en: 'Hope here isn’t proof of an outcome; it’s the practice of tending the next honest step. This card supports moving toward what still feels possible, without needing a guarantee first.',
        es: 'La esperanza aquí no es prueba de un resultado; es la práctica de cuidar el próximo paso honesto. Esta carta respalda moverte hacia lo que todavía se siente posible, sin necesitar antes una garantía.'
      }
    },
    advice: {
      en: ['Move toward what still feels possible, without demanding proof first.', 'Tend to this gently instead of forcing quick repair.', 'Let hope be a practice, not a passive wish.'],
      es: ['Muévete hacia lo que todavía se siente posible, sin exigir antes pruebas.', 'Cuida esto con delicadeza en vez de forzar una reparación rápida.', 'Deja que la esperanza sea una práctica, no un deseo pasivo.']
    },
    reflection: {
      en: ['What would you keep caring for if it could still reach you?', 'Where have you stopped hoping simply because it once didn’t work out?', 'What small act of faith is actually within reach right now?'],
      es: ['¿Qué seguirías cuidando si todavía pudiera llegar hasta ti?', '¿Dónde has dejado de tener esperanza solo porque una vez no salió bien?', '¿Qué pequeño acto de fe está realmente a tu alcance ahora mismo?']
    }
  };

  CARDS['major-18'] = {
    theme: { en: 'PERCEPTION', es: 'PERCEPCIÓN' },
    archetype: { en: 'The event separated from the story fear builds around it', es: 'El hecho separado de la historia que el miedo construye alrededor' },
    vocabulary: {
      en: ['illusion', 'uncertainty', 'fear', 'intuition', 'ambiguity', 'imagination', 'confusion', 'the unseen'],
      es: ['ilusión', 'incertidumbre', 'miedo', 'intuición', 'ambigüedad', 'imaginación', 'confusión', 'lo no visto']
    },
    positive: {
      en: ['intuition picking up something real before it’s provable', 'admitting honestly that you don’t have the full picture yet', 'imagination used to explore possibility rather than manufacture dread', 'sitting with ambiguity instead of forcing false clarity'],
      es: ['la intuición captando algo real antes de que sea demostrable', 'admitir con honestidad que todavía no tienes el cuadro completo', 'usar la imaginación para explorar posibilidades y no para fabricar temor', 'quedarte con la ambigüedad en vez de forzar una falsa claridad']
    },
    shadow: {
      en: ['fear writing a story that the facts don’t actually support', 'anxiety mistaken for a warning sign', 'projecting a past hurt onto a situation that hasn’t happened yet', 'confusion used as a reason to avoid deciding at all'],
      es: ['el miedo escribiendo una historia que los hechos no respaldan', 'confundir la ansiedad con una señal de alarma', 'proyectar una herida pasada sobre una situación que aún no ha ocurrido', 'usar la confusión como excusa para no decidir en absoluto']
    },
    yesNo: 'MAYBE',
    yesNoWhy: {
      en: 'The Moon rarely supports a confident answer while fear and evidence are still tangled together — it asks you to separate them first.',
      es: 'La Luna rara vez respalda una respuesta segura mientras el miedo y la evidencia siguen enredados; primero pide separarlos.'
    },
    domains: {
      career: {
        en: 'Before deciding, separate what you actually know about this job — facts, numbers, patterns — from what anxiety is imagining might happen. The Moon suggests the fear is louder than the evidence right now.',
        es: 'Antes de decidir, separa lo que de verdad sabes sobre este trabajo (hechos, cifras, patrones) de lo que la ansiedad imagina que podría pasar. La Luna sugiere que ahora mismo el miedo suena más fuerte que la evidencia.'
      },
      relationship: {
        en: 'This card asks whether you’re responding to who this person actually is, or to a story built from hope, fear, or a past experience that isn’t really about them. Clarity may take a little longer to arrive here.',
        es: 'Esta carta pregunta si estás respondiendo a quién es esta persona en realidad, o a una historia construida con esperanza, miedo, o una experiencia pasada que en realidad no es sobre ella. Aquí la claridad puede tardar un poco más en llegar.'
      },
      money: {
        en: 'A decision made from financial anxiety tends to look different than one made from actual numbers. The Moon suggests checking which one is currently driving this.',
        es: 'Una decisión tomada desde la ansiedad financiera suele verse distinta a una tomada desde las cifras reales. La Luna sugiere comprobar cuál de las dos está guiando esto ahora.'
      },
      movement: {
        en: 'This card is honest about the fact that you can’t fully know how this will feel until you’re there. Some of the fear is real information; some of it is just the unfamiliar wearing a scarier costume.',
        es: 'Esta carta es honesta sobre el hecho de que no puedes saber del todo cómo se sentirá hasta estar allí. Parte del miedo es información real; parte es solo lo desconocido con un disfraz más aterrador.'
      },
      creative: {
        en: 'The Moon supports working from intuition here, even without a clear plan — but watch for self-doubt disguising itself as artistic uncertainty. Not all confusion is meaningful.',
        es: 'La Luna respalda trabajar aquí desde la intuición, incluso sin un plan claro, pero cuidado con la inseguridad disfrazada de incertidumbre artística. No toda confusión es significativa.'
      },
      family: {
        en: 'Family dynamics often carry old stories that color what’s actually happening now. This card asks which part of the tension is current, and which part is an old wound reacting.',
        es: 'Las dinámicas familiares suelen arrastrar viejas historias que colorean lo que en realidad ocurre ahora. Esta carta pregunta qué parte de la tensión es actual, y qué parte es una vieja herida reaccionando.'
      },
      growth: {
        en: 'Which part of this situation do you know, and which part are you imagining? This card treats that separation itself as the growth, more than any specific answer it leads to.',
        es: 'Qué parte de esta situación conoces, y qué parte estás imaginando: esta carta trata esa separación en sí como el crecimiento, más que cualquier respuesta concreta a la que lleve.'
      },
      general: {
        en: 'Evidence may be tangled with memory, projection, or an image of what could go wrong. Separate what you actually know from what you’re currently afraid of before trusting either one fully.',
        es: 'La evidencia puede estar mezclada con la memoria, la proyección, o una imagen de lo que podría salir mal. Separa lo que de verdad sabes de lo que ahora mismo temes antes de confiar del todo en ninguno de los dos.'
      }
    },
    advice: {
      en: ['Separate what you know from what you’re imagining.', 'Ask whether the fear is current or inherited from somewhere else.', 'Give clarity a little more time before deciding.'],
      es: ['Separa lo que sabes de lo que estás imaginando.', 'Pregúntate si el miedo es actual o heredado de otro lugar.', 'Dale a la claridad un poco más de tiempo antes de decidir.']
    },
    reflection: {
      en: ['Which part of this situation do you know, and which part are you imagining?', 'What fear here actually belongs to something else entirely?', 'What would you see clearly if the fear went quiet for a moment?'],
      es: ['¿Qué parte de esta situación conoces, y qué parte estás imaginando?', '¿Qué miedo aquí en realidad pertenece a otra cosa por completo?', '¿Qué verías con claridad si el miedo se callara un momento?']
    }
  };

  CARDS['major-19'] = {
    theme: { en: 'CLARITY', es: 'CLARIDAD' },
    archetype: { en: 'Information brought into the open, without disguise', es: 'La información llevada a la luz, sin disfraz' },
    vocabulary: {
      en: ['clarity', 'confidence', 'joy', 'vitality', 'success', 'warmth', 'plain truth', 'ease'],
      es: ['claridad', 'confianza', 'alegría', 'vitalidad', 'éxito', 'calidez', 'verdad sencilla', 'soltura']
    },
    positive: {
      en: ['letting the simplest, most obvious truth take its place', 'confidence that doesn’t need to defend itself', 'genuine enjoyment of a good outcome without guilt', 'energy that comes from finally being honest'],
      es: ['dejar que la verdad más simple y evidente ocupe su lugar', 'una confianza que no necesita defenderse', 'disfrutar de verdad un buen resultado sin culpa', 'una energía que llega al ser por fin honesto']
    },
    shadow: {
      en: ['forcing positivity over an honest, harder feeling underneath', 'overconfidence that skips real preparation', 'performing happiness instead of actually feeling it', 'dismissing a valid concern because it spoils the mood'],
      es: ['forzar una positividad que tapa un sentimiento más difícil y honesto debajo', 'un exceso de confianza que se salta la preparación real', 'actuar la felicidad en vez de sentirla de verdad', 'descartar una preocupación válida porque estropea el ambiente']
    },
    yesNo: 'YES',
    yesNoWhy: {
      en: 'The Sun rarely complicates things — it usually means the honest answer is simpler and more obvious than you’ve been letting it be.',
      es: 'El Sol rara vez complica las cosas; suele significar que la respuesta honesta es más simple y evidente de lo que te has permitido ver.'
    },
    domains: {
      career: {
        en: 'This card tends to say the decision is more obvious than you’ve made it. If you already know this job isn’t it, the Sun asks why you’re still dressing that answer up as a hard question.',
        es: 'Esta carta suele decir que la decisión es más obvia de lo que la has hecho parecer. Si ya sabes que este trabajo no es el correcto, el Sol pregunta por qué sigues disfrazando esa respuesta de pregunta difícil.'
      },
      relationship: {
        en: 'The Sun supports honesty over strategy here — say plainly what you feel rather than managing how it looks. This card favors warmth expressed directly, without disguise.',
        es: 'El Sol respalda la honestidad por encima de la estrategia aquí: di con claridad lo que sientes en lugar de calcular cómo se ve. Esta carta favorece la calidez expresada de forma directa, sin disfraz.'
      },
      money: {
        en: 'A confident, clear card for money — it favors the straightforward option over a complicated one, and suggests the numbers are more encouraging than your worry has allowed you to see.',
        es: 'Una carta clara y confiada para el dinero: favorece la opción directa frente a una complicada, y sugiere que las cifras son más alentadoras de lo que tu preocupación te ha dejado ver.'
      },
      movement: {
        en: 'If this move genuinely excites you, the Sun supports trusting that plainly, without needing to justify the joy with a longer list of practical reasons.',
        es: 'Si esta mudanza de verdad te ilusiona, el Sol respalda confiar en eso sin más, sin necesitar justificar la alegría con una lista más larga de razones prácticas.'
      },
      creative: {
        en: 'The Sun favors sharing the work openly rather than hiding it out of caution. This is a card of confidence earned honestly — let the joy in the work show, not just the effort.',
        es: 'El Sol favorece compartir el trabajo abiertamente en lugar de esconderlo por cautela. Esta es una carta de confianza ganada con honestidad: deja que se note la alegría del trabajo, no solo el esfuerzo.'
      },
      family: {
        en: 'This card favors saying the warm, obvious thing directly rather than managing the family dynamic indirectly. Simple honesty tends to land better here than a careful strategy.',
        es: 'Esta carta favorece decir lo cálido y evidente de forma directa, en lugar de manejar la dinámica familiar de manera indirecta. La honestidad sencilla suele funcionar mejor aquí que una estrategia cuidadosa.'
      },
      growth: {
        en: 'What would you say plainly if certainty didn’t need defending? The Sun treats clarity as something you already have access to, once you stop performing confusion.',
        es: 'Qué dirías con claridad si la certeza no necesitara defenderse: el Sol trata la claridad como algo a lo que ya tienes acceso, en cuanto dejas de fingir confusión.'
      },
      general: {
        en: 'This question may simplify considerably once the most obvious truth is allowed to take its place, instead of being complicated out of habit or caution.',
        es: 'Esta pregunta probablemente se simplifique bastante en cuanto dejes que la verdad más evidente ocupe su lugar, en lugar de complicarla por costumbre o cautela.'
      }
    },
    advice: {
      en: ['Say the obvious thing plainly instead of managing it.', 'Trust the simpler answer over the complicated one.', 'Let genuine confidence show instead of performing it.'],
      es: ['Di lo evidente con claridad en lugar de manejarlo.', 'Confía en la respuesta más simple por encima de la complicada.', 'Deja que se note la confianza genuina en vez de fingirla.']
    },
    reflection: {
      en: ['What would you say plainly if certainty did not need defending?', 'What’s the simplest true answer you’ve been avoiding?', 'Where are you performing confidence instead of feeling it?'],
      es: ['¿Qué dirías claramente si no tuvieras que defender tu certeza?', '¿Cuál es la respuesta verdadera más simple que has estado evitando?', '¿Dónde estás fingiendo confianza en vez de sentirla?']
    }
  };

  CARDS['major-20'] = {
    theme: { en: 'RECKONING', es: 'RECONOCIMIENTO' },
    archetype: { en: 'The moment a pattern becomes recognizable enough to answer for', es: 'El instante en que un patrón se vuelve reconocible y pide respuesta' },
    vocabulary: {
      en: ['reckoning', 'awakening', 'evaluation', 'calling', 'reflection', 'rebirth', 'accountability', 'recognition'],
      es: ['ajuste de cuentas', 'despertar', 'evaluación', 'llamado', 'reflexión', 'renacimiento', 'responsabilidad', 'reconocimiento']
    },
    positive: {
      en: ['letting past experience genuinely inform this decision', 'answering an inner call instead of ignoring it again', 'evaluating honestly instead of repeating the same choice by default', 'forgiving an old mistake enough to actually move past it'],
      es: ['dejar que la experiencia pasada informe de verdad esta decisión', 'responder a un llamado interior en lugar de volver a ignorarlo', 'evaluar con honestidad en vez de repetir la misma elección por inercia', 'perdonar un viejo error lo suficiente como para dejarlo atrás de verdad']
    },
    shadow: {
      en: ['judging yourself so harshly the evaluation becomes useless', 'ignoring a call you’ve heard more than once already', 'repeating an old choice out of habit, not conviction', 'waiting for permission to finally change course'],
      es: ['juzgarte con tanta dureza que la evaluación se vuelve inútil', 'ignorar un llamado que ya has escuchado más de una vez', 'repetir una vieja elección por costumbre, no por convicción', 'esperar permiso para por fin cambiar de rumbo']
    },
    yesNo: 'YES',
    yesNoWhy: {
      en: 'Judgement tends to appear once you already know the verdict — the card supports finally acting on what previous experience has already taught you.',
      es: 'El Juicio suele aparecer cuando ya conoces el veredicto; la carta respalda actuar por fin según lo que la experiencia previa ya te ha enseñado.'
    },
    domains: {
      career: {
        en: 'This card asks what earlier jobs, mistakes or patterns have already taught you about what you actually need. That lesson, not a fresh guess, should be deciding this.',
        es: 'Esta carta pregunta qué te han enseñado ya otros trabajos, errores o patrones sobre lo que de verdad necesitas. Esa lección, no una suposición nueva, debería estar decidiendo esto.'
      },
      relationship: {
        en: 'Judgement asks you to answer an honest call rather than keep deferring it — if part of you already knows how you feel, this card supports finally acting on that instead of waiting longer.',
        es: 'El Juicio te pide responder a un llamado honesto en lugar de seguir postergándolo; si una parte de ti ya sabe cómo se siente, esta carta respalda actuar por fin en lugar de esperar más.'
      },
      money: {
        en: 'Past financial mistakes or lessons deserve real weight in this decision — not as guilt, but as data. What did the last version of this situation actually teach you?',
        es: 'Los errores o lecciones financieras del pasado merecen peso real en esta decisión, no como culpa, sino como datos. ¿Qué te enseñó realmente la última versión de esta situación?'
      },
      movement: {
        en: 'If you’ve felt this pull before and ignored it, Judgement suggests it’s time to finally respond. This card favors answering a call you’ve heard more than once already.',
        es: 'Si ya has sentido antes este impulso y lo has ignorado, el Juicio sugiere que es hora de responder por fin. Esta carta favorece atender un llamado que ya has escuchado más de una vez.'
      },
      creative: {
        en: 'This card asks whether an old creative calling is asking to be answered again, even if you set it aside before. Past attempts weren’t wasted — they were preparation.',
        es: 'Esta carta pregunta si un viejo llamado creativo pide ser atendido otra vez, aunque lo hayas dejado de lado antes. Los intentos pasados no fueron en vano: fueron preparación.'
      },
      family: {
        en: 'Judgement can mean this is the moment to finally address a pattern the family has quietly repeated for years. Naming it honestly, without harsh self-blame, is the useful move.',
        es: 'El Juicio puede significar que este es el momento de abordar por fin un patrón que la familia ha repetido en silencio durante años. Nombrarlo con honestidad, sin culpa excesiva, es el movimiento útil.'
      },
      growth: {
        en: 'What have you learned that this choice should not ignore? This card treats growth as finally letting hard-won experience actually change your behavior, not just your understanding.',
        es: 'Qué has aprendido que esta elección no debería ignorar: esta carta trata el crecimiento como dejar por fin que la experiencia ganada con esfuerzo cambie tu comportamiento, no solo tu entendimiento.'
      },
      general: {
        en: 'Earlier lessons can change this decision without requiring you to repeat the past. Judgement asks you to act on what you already know, rather than gathering more evidence to delay it.',
        es: 'Las lecciones anteriores pueden cambiar esta decisión sin obligarte a repetir el pasado. El Juicio te pide actuar según lo que ya sabes, en lugar de reunir más pruebas para retrasarlo.'
      }
    },
    advice: {
      en: ['Act on the lesson you’ve already learned.', 'Answer the call instead of deferring it again.', 'Evaluate honestly, without harsh self-judgment.'],
      es: ['Actúa según la lección que ya has aprendido.', 'Responde al llamado en lugar de volver a postergarlo.', 'Evalúa con honestidad, sin juzgarte con dureza.']
    },
    reflection: {
      en: ['What have you learned that this choice should not ignore?', 'What call have you already heard more than once?', 'What would you finally act on if you stopped waiting for permission?'],
      es: ['¿Qué has aprendido que esta elección no debería ignorar?', '¿Qué llamado ya has escuchado más de una vez?', '¿Sobre qué actuarías por fin si dejaras de esperar permiso?']
    }
  };

  CARDS['major-21'] = {
    theme: { en: 'COMPLETION', es: 'COMPLETITUD' },
    archetype: { en: 'The whole system, seen at once', es: 'El sistema completo, visto de una vez' },
    vocabulary: {
      en: ['completion', 'wholeness', 'integration', 'accomplishment', 'closure', 'arrival', 'the full picture', 'travel'],
      es: ['completitud', 'plenitud', 'integración', 'logro', 'cierre', 'llegada', 'la imagen completa', 'viaje']
    },
    positive: {
      en: ['recognizing that a cycle is genuinely finished', 'integrating everything you’ve learned instead of discarding the hard parts', 'accomplishment that comes from seeing the whole arc, not just the ending', 'closure that doesn’t need a perfect explanation to count'],
      es: ['reconocer que un ciclo está de verdad terminado', 'integrar todo lo que has aprendido en lugar de descartar las partes difíciles', 'un logro que viene de ver el arco completo, no solo el final', 'un cierre que no necesita una explicación perfecta para contar']
    },
    shadow: {
      en: ['refusing to call something finished until it’s flawless', 'moving the goalposts so completion never quite arrives', 'closing a chapter abruptly instead of integrating what it taught you', 'chasing one more milestone instead of recognizing you’ve already arrived'],
      es: ['negarte a dar algo por terminado hasta que sea perfecto', 'mover la meta una y otra vez para que la completitud nunca llegue del todo', 'cerrar un capítulo de golpe en lugar de integrar lo que enseñó', 'perseguir un logro más en vez de reconocer que ya has llegado']
    },
    yesNo: 'YES',
    yesNoWhy: {
      en: 'The World tends to mark a cycle that has genuinely run its course — this card usually supports closing it rather than extending it further.',
      es: 'El Mundo suele marcar un ciclo que ya ha cumplido de verdad su recorrido; esta carta suele respaldar cerrarlo en lugar de alargarlo más.'
    },
    domains: {
      career: {
        en: 'This card suggests you’ve genuinely learned what this job had to teach — completion matters more here than finding one perfect, final explanation for why it’s time to move on.',
        es: 'Esta carta sugiere que ya has aprendido de verdad lo que este trabajo tenía que enseñarte; la completitud importa más aquí que encontrar una explicación perfecta y final de por qué es hora de seguir.'
      },
      relationship: {
        en: 'The World supports pursuing this if it feels like the natural next chapter rather than an escape from an unfinished one. Make sure the previous cycle is actually closed first.',
        es: 'El Mundo respalda acercarte a esta persona si se siente como el siguiente capítulo natural y no como una huida de uno sin terminar. Asegúrate primero de que el ciclo anterior esté realmente cerrado.'
      },
      money: {
        en: 'This card often marks the completion of a financial goal or cycle — recognize what you’ve already built rather than immediately reaching for the next target without acknowledging it.',
        es: 'Esta carta suele marcar la culminación de una meta o ciclo financiero: reconoce lo que ya has construido en lugar de lanzarte de inmediato a la siguiente meta sin reconocerlo.'
      },
      movement: {
        en: 'The World favors a move that completes something — finishing a chapter properly before starting the next one, rather than leaving mid-sentence. This supports going, with a sense of arrival rather than escape.',
        es: 'El Mundo favorece una mudanza que completa algo: terminar bien un capítulo antes de empezar el siguiente, en lugar de irte a mitad de frase. Esto respalda partir con sensación de llegada, no de huida.'
      },
      creative: {
        en: 'This card supports finishing the work you’ve been carrying, even imperfectly, rather than starting something new to avoid the discomfort of calling it done.',
        es: 'Esta carta respalda terminar el trabajo que llevas cargando, aunque sea de forma imperfecta, en lugar de empezar algo nuevo para evitar la incomodidad de darlo por acabado.'
      },
      family: {
        en: 'The World can mark a family cycle reaching genuine completion — an old dynamic finally resolved enough to be set down, even without a tidy final conversation.',
        es: 'El Mundo puede marcar un ciclo familiar que llega a su verdadera culminación: una vieja dinámica por fin resuelta lo suficiente como para soltarla, incluso sin una conversación final ordenada.'
      },
      growth: {
        en: 'What would you recognize as finished if you stopped moving the goal? This card treats growth as integration — everything you’ve learned finally forming one coherent whole.',
        es: 'Qué reconocerías como terminado si dejaras de mover la meta: esta carta trata el crecimiento como integración, todo lo aprendido formando por fin un conjunto coherente.'
      },
      general: {
        en: 'Completion may matter more here than finding one perfect, final explanation. This card usually supports closing the cycle rather than extending it in search of a tidier ending.',
        es: 'La completitud puede importar aquí más que encontrar una explicación final perfecta. Esta carta suele respaldar cerrar el ciclo en lugar de alargarlo buscando un final más ordenado.'
      }
    },
    advice: {
      en: ['Recognize what’s already complete before reaching further.', 'Close this chapter properly before starting the next.', 'Let good enough count as finished.'],
      es: ['Reconoce lo que ya está completo antes de seguir buscando más.', 'Cierra bien este capítulo antes de empezar el siguiente.', 'Deja que lo suficientemente bueno cuente como terminado.']
    },
    reflection: {
      en: ['What would you recognize as finished if you stopped moving the goal?', 'What has this cycle already taught you that you haven’t acknowledged?', 'Where do you need closure more than a perfect explanation?'],
      es: ['¿Qué reconocerías como terminado si dejaras de mover la meta?', '¿Qué te ha enseñado ya este ciclo que todavía no has reconocido?', '¿Dónde necesitas un cierre más que una explicación perfecta?']
    }
  };

  // ---- CUPS (water: feeling, relationships, intuition) -----------------------

  CARDS['cups-1'] = {
    theme: { en: 'OPEN HEART', es: 'CORAZÓN ABIERTO' },
    archetype: { en: 'Feeling before it has a name yet', es: 'Un sentimiento antes de tener nombre' },
    vocabulary: { en: ['overflow', 'openness', 'new feeling', 'compassion', 'tenderness', 'emotional beginning'], es: ['desbordamiento', 'apertura', 'sentimiento nuevo', 'compasión', 'ternura', 'comienzo emocional'] },
    positive: { en: ['letting yourself feel something new without editing it first', 'compassion offered freely', 'an emotional beginning with real room to grow', 'openness after a guarded stretch'], es: ['dejarte sentir algo nuevo sin editarlo antes', 'una compasión ofrecida con libertad', 'un comienzo emocional con espacio real para crecer', 'una apertura después de una etapa a la defensiva'] },
    shadow: { en: ['emotional overflow with nowhere useful to go', 'giving before you’ve checked it’s wanted', 'mistaking a full heart for a clear plan', 'flooding a new situation with old, unspent feeling'], es: ['un desbordamiento emocional sin un lugar útil adónde ir', 'dar antes de comprobar si te lo piden', 'confundir un corazón lleno con un plan claro', 'inundar una situación nueva con un sentimiento viejo sin resolver'] },
    yesNo: 'YES',
    yesNoWhy: { en: 'The Ace of Cups supports opening up to what’s genuinely new here — the feeling is real, even if it doesn’t have a shape yet.', es: 'El As de Copas respalda abrirte a lo que aquí es genuinamente nuevo; el sentimiento es real, aunque todavía no tenga forma.' },
    domains: {
      career: { en: 'If this job genuinely moves something in you emotionally, that’s worth taking seriously — the Ace of Cups rarely shows up for work that’s merely convenient.', es: 'Si este trabajo de verdad te conmueve, eso merece tomarse en serio: el As de Copas rara vez aparece por un trabajo meramente conveniente.' },
      relationship: { en: 'This card supports opening your heart honestly, even without knowing where it leads. The feeling is genuine — give it room before deciding what it means.', es: 'Esta carta respalda abrir el corazón con honestidad, incluso sin saber adónde lleva. El sentimiento es genuino: dale espacio antes de decidir qué significa.' },
      money: { en: 'Be careful making a financial choice purely from an emotional high — the Ace of Cups is generous, not precise. Let the feeling inform the decision, not replace it.', es: 'Ten cuidado al tomar una decisión financiera solo desde un impulso emocional; el As de Copas es generoso, no preciso. Que el sentimiento informe la decisión, no la sustituya.' },
      movement: { en: 'If this place genuinely stirs something in you, trust that. This card favors going toward what moves you emotionally, even before the logistics are fully worked out.', es: 'Si este lugar de verdad remueve algo en ti, confía en eso. Esta carta favorece ir hacia lo que te conmueve, incluso antes de tener resueltos todos los detalles prácticos.' },
      creative: { en: 'A strong card for new creative inspiration — let the feeling flow onto the page or canvas before worrying about whether it’s any good.', es: 'Una carta fuerte para una nueva inspiración creativa: deja que el sentimiento fluya sobre el papel o el lienzo antes de preocuparte por si es bueno.' },
      family: { en: 'This card supports softening toward a family member with real, unguarded feeling — even if it’s been a while since you let yourself do that.', es: 'Esta carta respalda suavizarte hacia un familiar con un sentimiento real y sin guardia, aunque haga tiempo que no te lo permitías.' },
      growth: { en: 'This is a card of the heart opening again after being closed — trust the new feeling even before you fully understand what it’s asking of you.', es: 'Esta es una carta del corazón abriéndose de nuevo tras estar cerrado: confía en el sentimiento nuevo aunque todavía no entiendas del todo lo que te pide.' },
      general: { en: 'Something in you is genuinely opening here. The Ace of Cups supports trusting that feeling, even while the rest of the situation is still taking shape.', es: 'Algo en ti se está abriendo aquí de verdad. El As de Copas respalda confiar en ese sentimiento, aunque el resto de la situación todavía esté tomando forma.' }
    },
    advice: { en: ['Let yourself feel it before you analyze it.', 'Offer the feeling without demanding a specific outcome.', 'Give the new feeling time before judging where it leads.'], es: ['Permítete sentirlo antes de analizarlo.', 'Ofrece el sentimiento sin exigir un resultado concreto.', 'Dale tiempo al sentimiento nuevo antes de juzgar adónde lleva.'] },
    reflection: { en: ['What are you feeling that you haven’t let yourself name yet?', 'Where is your heart already ahead of your plans?', 'What would you open up to if you weren’t worried about the outcome?'], es: ['¿Qué sientes que todavía no te has permitido nombrar?', '¿Dónde va tu corazón ya por delante de tus planes?', '¿A qué te abrirías si no te preocupara el resultado?'] }
  };

  CARDS['cups-2'] = {
    theme: { en: 'MUTUAL CONNECTION', es: 'CONEXIÓN MUTUA' },
    archetype: { en: 'Two people recognizing each other', es: 'Dos personas que se reconocen' },
    vocabulary: { en: ['union', 'mutual attraction', 'partnership', 'reciprocity', 'connection', 'recognition'], es: ['unión', 'atracción mutua', 'sociedad', 'reciprocidad', 'conexión', 'reconocimiento'] },
    positive: { en: ['a connection where both people are actually showing up', 'attraction met with equal attraction', 'partnership that makes room for two whole people', 'recognizing something in someone that also recognizes you'], es: ['una conexión donde ambas personas realmente están presentes', 'una atracción correspondida con la misma intensidad', 'una relación que deja espacio para dos personas completas', 'reconocer en alguien algo que también te reconoce a ti'] },
    shadow: { en: ['giving equal effort to a connection that isn’t reciprocal', 'confusing chemistry with genuine compatibility', 'rushing to call something mutual before it’s actually confirmed', 'ignoring signs that only one of you is truly invested'], es: ['dar el mismo esfuerzo a una conexión que no es recíproca', 'confundir la química con la compatibilidad real', 'apresurarte a llamar mutuo algo que aún no está confirmado', 'ignorar señales de que solo uno de los dos está realmente comprometido'] },
    yesNo: 'YES',
    yesNoWhy: { en: 'The Two of Cups favors a genuine connection — but check honestly that it moves in both directions before reading it as a green light.', es: 'El Dos de Copas favorece una conexión genuina, pero comprueba con honestidad que se mueve en ambas direcciones antes de leerlo como luz verde.' },
    domains: {
      career: { en: 'This can point to a genuine, mutual working relationship — a partnership or offer where both sides actually want the same thing. Check that it isn’t one-sided before committing.', es: 'Esto puede señalar una relación laboral genuina y mutua: una sociedad u oferta donde ambas partes de verdad quieren lo mismo. Comprueba que no sea unilateral antes de comprometerte.' },
      relationship: { en: 'This is one of the clearest cards for mutual attraction — but it asks you to notice whether this person is actually meeting you, not just whether you feel drawn to them.', es: 'Esta es una de las cartas más claras para la atracción mutua, pero pide fijarte en si esta persona realmente te corresponde, no solo si tú te sientes atraído.' },
      money: { en: 'If this involves a financial partnership, this card favors it only if both sides are contributing and benefiting fairly — check the balance honestly.', es: 'Si esto implica una sociedad financiera, esta carta la favorece solo si ambas partes contribuyen y se benefician de forma justa; comprueba el equilibrio con honestidad.' },
      movement: { en: 'If this move involves joining someone else’s life, check that it’s a mutual decision, made together, rather than you following someone who hasn’t fully met you halfway.', es: 'Si esta mudanza implica unirte a la vida de otra persona, comprueba que sea una decisión mutua, tomada juntos, y no tú siguiendo a alguien que no te ha correspondido a medio camino.' },
      creative: { en: 'This card favors real collaboration — two people actually building something together, rather than one person doing the work and the other simply approving it.', es: 'Esta carta favorece una colaboración real: dos personas construyendo algo juntas de verdad, en vez de una haciendo el trabajo y la otra solo aprobándolo.' },
      family: { en: 'This can mark a genuine repair in a family relationship — two people finally meeting each other halfway after a period of distance.', es: 'Esto puede marcar una reconciliación genuina en una relación familiar: dos personas por fin encontrándose a medio camino tras un periodo de distancia.' },
      growth: { en: 'This card suggests growth here happens through a real connection with someone else, not in isolation — notice who is actually meeting you at your own level.', es: 'Esta carta sugiere que aquí el crecimiento ocurre a través de una conexión real con otra persona, no en soledad: fíjate en quién realmente te encuentra a tu propio nivel.' },
      general: { en: 'The Two of Cups asks whether this situation is genuinely mutual — check for reciprocity before reading the connection as more settled than it actually is.', es: 'El Dos de Copas pregunta si esta situación es realmente mutua: comprueba la reciprocidad antes de dar por más segura la conexión de lo que en realidad es.' }
    },
    advice: { en: ['Check that this moves in both directions.', 'Meet the other person halfway, and expect the same back.', 'Don’t call it mutual until it’s actually confirmed.'], es: ['Comprueba que esto se mueva en ambas direcciones.', 'Encuentra a la otra persona a medio camino, y espera lo mismo de vuelta.', 'No lo llames mutuo hasta que esté realmente confirmado.'] },
    reflection: { en: ['Is this actually mutual, or are you supplying both sides of it?', 'Who is meeting you at your own level right now?', 'What would this look like if you trusted it was reciprocal?'], es: ['¿Esto es realmente mutuo, o estás poniendo tú los dos lados?', '¿Quién te está encontrando ahora mismo a tu propio nivel?', '¿Cómo se vería esto si confiaras en que es recíproco?'] }
  };

  CARDS['cups-3'] = {
    theme: { en: 'SHARED JOY', es: 'ALEGRÍA COMPARTIDA' },
    archetype: { en: 'Joy that multiplies when it’s witnessed by others', es: 'La alegría que se multiplica cuando otros la presencian' },
    vocabulary: { en: ['celebration', 'community', 'friendship', 'togetherness', 'shared joy', 'support'], es: ['celebración', 'comunidad', 'amistad', 'compañía', 'alegría compartida', 'apoyo'] },
    positive: { en: ['letting other people celebrate a win with you', 'community that shows up without being asked', 'joy that’s made bigger by being shared', 'friendship as a genuine source of support, not just company'], es: ['dejar que otros celebren contigo un logro', 'una comunidad que aparece sin que se lo pidas', 'una alegría que crece al compartirse', 'la amistad como fuente real de apoyo, no solo compañía'] },
    shadow: { en: ['celebrating too early, before the thing is actually settled', 'a crowd substituting for one real connection', 'staying in a group dynamic mainly out of habit', 'overcommitting your time to everyone else’s celebrations'], es: ['celebrar demasiado pronto, antes de que algo esté realmente resuelto', 'una multitud sustituyendo a una conexión real', 'quedarte en una dinámica de grupo sobre todo por costumbre', 'sobrecargarte de tiempo en las celebraciones de los demás'] },
    yesNo: 'YES',
    yesNoWhy: { en: 'This card supports the choice that lets you celebrate with others rather than face it alone — community tends to be part of the answer here.', es: 'Esta carta respalda la elección que te permite celebrar acompañado y no en soledad; la comunidad suele ser parte de la respuesta aquí.' },
    domains: {
      career: { en: 'This can support a move that brings you closer to a community of people who genuinely celebrate your work, rather than one that keeps you isolated.', es: 'Esto puede respaldar un cambio que te acerque a una comunidad que celebra de verdad tu trabajo, en lugar de uno que te mantiene aislado.' },
      relationship: { en: 'This card asks whether your friends actually like this person for you, or whether you’ve been keeping this pursuit separate from the people who know you best.', es: 'Esta carta pregunta si tus amigos de verdad ven bien a esta persona para ti, o si has mantenido esta búsqueda al margen de quienes mejor te conocen.' },
      money: { en: 'A generous, social card for money — it favors spending that brings people together over spending that isolates. Check that generosity isn’t crowding out your own needs.', es: 'Una carta generosa y social para el dinero: favorece el gasto que une a las personas frente al que aísla. Comprueba que la generosidad no esté desplazando tus propias necesidades.' },
      movement: { en: 'This card asks whether you’re moving toward a place with real community waiting, or away from one you haven’t fully appreciated yet.', es: 'Esta carta pregunta si te mudas hacia un lugar con una comunidad real esperándote, o lejos de una que todavía no has apreciado del todo.' },
      creative: { en: 'This favors sharing the work with others rather than keeping it private — celebration and feedback from people who care tend to help this project grow.', es: 'Esto favorece compartir el trabajo con otros en lugar de mantenerlo en privado: la celebración y las opiniones de quienes te importan suelen ayudar a que este proyecto crezca.' },
      family: { en: 'This card supports gathering the people who genuinely make family feel good, rather than obligating yourself to everyone out of duty alone.', es: 'Esta carta respalda reunir a las personas que de verdad hacen sentir bien a la familia, en lugar de obligarte con todos por puro deber.' },
      growth: { en: 'This card suggests your growth is supported by real friendship, not solitude — who genuinely celebrates you, separate from who simply surrounds you?', es: 'Esta carta sugiere que tu crecimiento se apoya en la amistad real, no en la soledad: ¿quién te celebra de verdad, aparte de quién simplemente te rodea?' },
      general: { en: 'This card leans toward whatever brings genuine people together around you, rather than the option that keeps this private or isolated.', es: 'Esta carta se inclina por lo que reúne a personas genuinas a tu alrededor, en lugar de la opción que mantiene esto en privado o aislado.' }
    },
    advice: { en: ['Let the people who care about you in on this.', 'Celebrate once it’s actually settled, not before.', 'Choose the option that brings real community with it.'], es: ['Deja que quienes te quieren formen parte de esto.', 'Celebra cuando esté realmente resuelto, no antes.', 'Elige la opción que traiga consigo una comunidad real.'] },
    reflection: { en: ['Who genuinely celebrates you, separate from who just surrounds you?', 'What are you keeping private that could actually use company?', 'Are you celebrating something that’s actually settled yet?'], es: ['¿Quién te celebra de verdad, aparte de quién solo te rodea?', '¿Qué mantienes en privado que en realidad podría necesitar compañía?', '¿Estás celebrando algo que en realidad ya está resuelto?'] }
  };

  CARDS['cups-4'] = {
    theme: { en: 'APATHY', es: 'APATÍA' },
    archetype: { en: 'A new offer arriving while you’re still staring at an old one', es: 'Una oferta nueva que llega mientras aún miras la anterior' },
    vocabulary: { en: ['apathy', 'contemplation', 'stagnation', 'missed offer', 'discontent', 'reevaluation'], es: ['apatía', 'contemplación', 'estancamiento', 'oferta desatendida', 'descontento', 'reevaluación'] },
    positive: { en: ['noticing dissatisfaction before it curdles into something worse', 'taking a real pause to reevaluate instead of running on autopilot', 'honest boredom used as useful information', 'stepping back from an offer that isn’t actually what you need'], es: ['notar el descontento antes de que se agrave', 'tomarte una pausa real para reevaluar en vez de ir en piloto automático', 'usar un aburrimiento honesto como información útil', 'alejarte de una oferta que en realidad no es lo que necesitas'] },
    shadow: { en: ['so withdrawn you miss something genuinely worth noticing', 'sulking about what’s wrong instead of naming it', 'discontent with no idea what would actually satisfy you', 'refusing every option out of habit, not judgment'], es: ['tan retraído que se te escapa algo que de verdad valía la pena', 'quejarte de lo que va mal en lugar de nombrarlo', 'un descontento sin ninguna idea de qué te satisfaría de verdad', 'rechazar toda opción por costumbre y no por criterio'] },
    yesNo: 'MAYBE',
    yesNoWhy: { en: 'The Four of Cups describes disengagement more than a decision — the honest answer may be that nothing on the table right now actually satisfies you.', es: 'El Cuatro de Copas describe más un desapego que una decisión; la respuesta honesta puede ser que ahora mismo nada de lo que hay sobre la mesa te satisface de verdad.' },
    domains: {
      career: { en: 'This card can mean you’ve stopped noticing an opportunity right in front of you because you’re still fixated on what’s wrong with the current job. Look up before deciding either way.', es: 'Esta carta puede significar que has dejado de ver una oportunidad justo delante de ti porque sigues fijado en lo que falla en el trabajo actual. Levanta la mirada antes de decidir.' },
      relationship: { en: 'This can point to emotional withdrawal — you may be too preoccupied with an old disappointment to notice whether this new pursuit is actually worth your attention.', es: 'Esto puede señalar un retraimiento emocional: quizá estés demasiado ocupado con una vieja decepción como para notar si esta nueva búsqueda merece de verdad tu atención.' },
      money: { en: 'This card suggests reassessing whether the current financial situation is actually satisfying, rather than staying dissatisfied out of inertia without naming why.', es: 'Esta carta sugiere reevaluar si la situación financiera actual es realmente satisfactoria, en lugar de seguir descontento por inercia sin nombrar la razón.' },
      movement: { en: 'Notice if you’re dismissing this option automatically, out of a general discontent, rather than because you’ve actually evaluated it on its own terms.', es: 'Fíjate si estás descartando esta opción de forma automática, por un descontento general, y no porque de verdad la hayas evaluado por sus propios méritos.' },
      creative: { en: 'This card can mark creative boredom — going through the motions without real engagement. It may be time to name what specifically has stopped feeling alive in the work.', es: 'Esta carta puede marcar un aburrimiento creativo: hacer las cosas por inercia sin implicación real. Puede ser momento de nombrar qué exactamente ha dejado de sentirse vivo en el trabajo.' },
      family: { en: 'This card can describe emotional withdrawal from a family situation — noticing that you’ve checked out is the first honest step, before deciding what to do about it.', es: 'Esta carta puede describir un retraimiento emocional de una situación familiar: notar que te has desconectado es el primer paso honesto, antes de decidir qué hacer.' },
      growth: { en: 'This card asks you to name the discontent specifically, rather than letting it sit as vague dissatisfaction. What would actually feel different from what you have now?', es: 'Esta carta te pide nombrar el descontento con precisión, en lugar de dejarlo como una insatisfacción vaga. ¿Qué se sentiría realmente distinto de lo que tienes ahora?' },
      general: { en: 'This card describes disengagement rather than a clear no — before deciding, name specifically what has stopped satisfying you here.', es: 'Esta carta describe un desapego más que un no claro: antes de decidir, nombra con precisión qué ha dejado de satisfacerte aquí.' }
    },
    advice: { en: ['Name the dissatisfaction specifically before deciding anything.', 'Check whether you’re dismissing this option out of habit.', 'Look up before you miss what’s actually being offered.'], es: ['Nombra el descontento con precisión antes de decidir nada.', 'Comprueba si estás descartando esta opción por costumbre.', 'Levanta la mirada antes de que se te escape lo que en realidad se ofrece.'] },
    reflection: { en: ['What has stopped satisfying you here, specifically?', 'What are you not noticing because you’re still looking at the old disappointment?', 'What would actually feel different from what you already have?'], es: ['¿Qué ha dejado de satisfacerte aquí, con precisión?', '¿Qué no estás notando por seguir mirando la vieja decepción?', '¿Qué se sentiría realmente distinto de lo que ya tienes?'] }
  };

  CARDS['cups-5'] = {
    theme: { en: 'GRIEF', es: 'DUELO' },
    archetype: { en: 'What’s spilled, versus what’s still standing', es: 'Lo que se ha derramado, frente a lo que sigue en pie' },
    vocabulary: { en: ['loss', 'regret', 'grief', 'disappointment', 'what remains', 'mourning'], es: ['pérdida', 'arrepentimiento', 'duelo', 'decepción', 'lo que queda', 'luto'] },
    positive: { en: ['letting yourself genuinely grieve instead of rushing past it', 'noticing what’s still standing, once you’re ready to look', 'honesty about real disappointment instead of forced positivity', 'grief that eventually makes room for what’s next'], es: ['permitirte un duelo real en vez de pasar de largo', 'notar lo que sigue en pie, cuando estés listo para mirar', 'honestidad ante una decepción real en vez de una positividad forzada', 'un duelo que con el tiempo abre espacio para lo que sigue'] },
    shadow: { en: ['staying fixated on what’s spilled while ignoring what’s still there', 'grief that calcifies into permanent regret', 'punishing yourself for a loss that wasn’t entirely your doing', 'reliving the disappointment instead of moving through it'], es: ['quedarte fijado en lo derramado, ignorando lo que sigue ahí', 'un duelo que se endurece en un arrepentimiento permanente', 'castigarte por una pérdida que no fue enteramente culpa tuya', 'revivir la decepción en lugar de atravesarla'] },
    yesNo: 'NO',
    yesNoWhy: { en: 'The Five of Cups usually appears mid-grief, not mid-decision — it asks you to actually mourn what didn’t work before deciding what comes next.', es: 'El Cinco de Copas suele aparecer en medio de un duelo, no en medio de una decisión; pide que hagas el duelo real antes de decidir qué sigue.' },
    domains: {
      career: { en: 'If leaving this job means grieving a version of your career you once imagined, let that disappointment be real first — deciding from unprocessed grief tends to distort the choice.', es: 'Si dejar este trabajo significa hacer duelo por una versión de tu carrera que alguna vez imaginaste, deja que esa decepción sea real primero; decidir desde un duelo sin procesar suele distorsionar la elección.' },
      relationship: { en: 'This card asks whether you’re pursuing this person partly to outrun an old disappointment, rather than for who they actually are. Grieve the old loss on its own terms first.', es: 'Esta carta pregunta si buscas a esta persona en parte para huir de una vieja decepción, y no por quién es de verdad. Haz primero el duelo de esa pérdida por sí misma.' },
      money: { en: 'A financial loss deserves an honest reckoning before you make the next move — this card warns against a decision made purely to avoid feeling the disappointment.', es: 'Una pérdida financiera merece un balance honesto antes del siguiente movimiento; esta carta advierte contra una decisión tomada solo para no sentir la decepción.' },
      movement: { en: 'If part of this move is about leaving behind a disappointment, notice what you’re actually running from versus what you’re genuinely running toward.', es: 'Si parte de esta mudanza consiste en dejar atrás una decepción, fíjate en de qué estás huyendo realmente frente a hacia qué te estás moviendo de verdad.' },
      creative: { en: 'This card can mark grief over a project that didn’t become what you hoped. That disappointment is valid — and it doesn’t mean the next attempt is doomed the same way.', es: 'Esta carta puede marcar el duelo por un proyecto que no llegó a ser lo que esperabas. Esa decepción es válida, y no significa que el próximo intento esté condenado igual.' },
      family: { en: 'This card asks you to actually grieve a family disappointment instead of pretending it didn’t happen — what’s still standing in the relationship deserves your attention too, once you’re ready.', es: 'Esta carta te pide hacer duelo de verdad por una decepción familiar en lugar de fingir que no ocurrió; lo que sigue en pie en la relación también merece tu atención, cuando estés listo.' },
      growth: { en: 'Growth here means letting the grief run its course rather than rushing past it toward the next thing. What’s still standing will still be there once you’re ready to look.', es: 'Crecer aquí significa dejar que el duelo siga su curso en lugar de apresurarte hacia lo siguiente. Lo que sigue en pie seguirá ahí cuando estés listo para mirarlo.' },
      general: { en: 'Before deciding anything, this card asks you to actually feel the disappointment that’s already present, rather than skip past it toward a quick resolution.', es: 'Antes de decidir nada, esta carta te pide sentir de verdad la decepción ya presente, en lugar de saltártela hacia una resolución rápida.' }
    },
    advice: { en: ['Let the disappointment be real before deciding anything.', 'Look up eventually at what’s still standing.', 'Don’t let this decision be a way to outrun the grief.'], es: ['Deja que la decepción sea real antes de decidir nada.', 'Levanta la mirada, con el tiempo, hacia lo que sigue en pie.', 'No dejes que esta decisión sea una forma de huir del duelo.'] },
    reflection: { en: ['What’s still standing that you haven’t looked at yet?', 'What are you grieving that you haven’t admitted is a loss?', 'Is this decision about what’s ahead, or about outrunning what’s behind?'], es: ['¿Qué sigue en pie que todavía no has mirado?', '¿Qué estás llorando sin haber admitido que es una pérdida?', '¿Esta decisión es sobre lo que viene, o sobre huir de lo que quedó atrás?'] }
  };

  CARDS['cups-6'] = {
    theme: { en: 'NOSTALGIA', es: 'NOSTALGIA' },
    archetype: { en: 'A gift passed from an earlier version of a story', es: 'Un regalo entregado desde una versión anterior de la historia' },
    vocabulary: { en: ['nostalgia', 'memory', 'innocence', 'reunion', 'childhood', 'sentiment'], es: ['nostalgia', 'memoria', 'inocencia', 'reencuentro', 'infancia', 'sentimiento'] },
    positive: { en: ['warmth from the past that still genuinely nourishes you', 'reconnecting with someone or something from an earlier chapter', 'innocence revisited without needing to relive the whole story', 'a gift given freely, without expecting anything back'], es: ['una calidez del pasado que todavía te alimenta de verdad', 'reconectar con alguien o algo de un capítulo anterior', 'volver a la inocencia sin necesidad de revivir toda la historia', 'un regalo entregado con libertad, sin esperar nada a cambio'] },
    shadow: { en: ['idealizing the past so much the present can’t compete', 'staying in a familiar comfort mainly because it’s familiar', 'reviving an old dynamic that has already run its course', 'nostalgia used to avoid an honest look at now'], es: ['idealizar tanto el pasado que el presente no puede competir', 'quedarte en una comodidad conocida sobre todo porque es conocida', 'revivir una vieja dinámica que ya cumplió su ciclo', 'usar la nostalgia para evitar una mirada honesta al presente'] },
    yesNo: 'MAYBE',
    yesNoWhy: { en: 'The Six of Cups asks whether you’re moving toward something genuinely good, or toward a memory of how good something used to feel.', es: 'El Seis de Copas pregunta si te mueves hacia algo genuinamente bueno, o hacia el recuerdo de cómo se sentía antes algo bueno.' },
    domains: {
      career: { en: 'If part of the appeal here is returning to how things used to feel — an earlier role, an earlier version of the company — check whether that version still actually exists.', es: 'Si parte del atractivo aquí es volver a cómo se sentían antes las cosas (un puesto anterior, una versión anterior de la empresa), comprueba si esa versión todavía existe de verdad.' },
      relationship: { en: 'This card can point to a reunion with someone from your past, or a pull toward the comfort of an earlier, simpler version of yourself. Check that the pull is toward them, not just toward nostalgia.', es: 'Esta carta puede señalar un reencuentro con alguien de tu pasado, o un impulso hacia la comodidad de una versión anterior y más sencilla de ti mismo. Comprueba que el impulso sea hacia esa persona, y no solo hacia la nostalgia.' },
      money: { en: 'This card warns against a financial decision made from nostalgia for how things used to be, rather than an honest read of how they actually are now.', es: 'Esta carta advierte contra una decisión financiera tomada por nostalgia de cómo eran antes las cosas, en lugar de una lectura honesta de cómo son ahora en realidad.' },
      movement: { en: 'Moving back somewhere familiar can be genuinely restorative — or it can be an attempt to recover a feeling that belonged to a specific time, not a specific place.', es: 'Volver a un lugar conocido puede ser realmente reparador, o puede ser un intento de recuperar un sentimiento que pertenecía a un momento concreto, no a un lugar concreto.' },
      creative: { en: 'This card favors returning to an earlier creative voice or medium that still genuinely fits you — not out of nostalgia, but because it still has something to offer.', es: 'Esta carta favorece volver a una voz o medio creativo anterior que todavía encaje de verdad contigo, no por nostalgia, sino porque todavía tiene algo que ofrecer.' },
      family: { en: 'This card often marks a genuine, warm reconnection with family — old innocence and old warmth resurfacing in a way that can actually nourish the present relationship.', es: 'Esta carta suele marcar una reconexión familiar genuina y cálida: la vieja inocencia y calidez resurgiendo de un modo que puede alimentar de verdad la relación presente.' },
      growth: { en: 'This card asks which parts of an earlier version of you are still genuinely useful, and which ones you’re holding onto simply because letting go feels like a loss.', es: 'Esta carta pregunta qué partes de una versión anterior de ti todavía son útiles de verdad, y cuáles conservas solo porque soltarlas se siente como una pérdida.' },
      general: { en: 'This card asks whether you’re moving toward something genuinely good now, or toward the memory of how good something used to feel. Those aren’t always the same thing.', es: 'Esta carta pregunta si te mueves hacia algo genuinamente bueno ahora, o hacia el recuerdo de cómo se sentía antes algo bueno. No siempre es lo mismo.' }
    },
    advice: { en: ['Check that the pull is toward what’s real now, not just a memory.', 'Let the warmth from the past nourish you without living there.', 'Give a gift or reconnection freely, without expecting it back.'], es: ['Comprueba que el impulso vaya hacia lo real de ahora, no solo hacia un recuerdo.', 'Deja que la calidez del pasado te alimente sin quedarte a vivir ahí.', 'Da un regalo o una reconexión con libertad, sin esperar nada a cambio.'] },
    reflection: { en: ['Are you moving toward something good, or toward a memory of it?', 'Which part of the past are you actually trying to recover?', 'What innocence would you like to bring into the present, not the past?'], es: ['¿Te mueves hacia algo bueno, o hacia el recuerdo de algo bueno?', '¿Qué parte del pasado intentas recuperar en realidad?', '¿Qué inocencia te gustaría traer al presente, no al pasado?'] }
  };

  CARDS['cups-7'] = {
    theme: { en: 'ILLUSION OF CHOICE', es: 'ILUSIÓN DE ELECCIÓN' },
    archetype: { en: 'Too many appealing pictures, not enough tested ground', es: 'Demasiadas imágenes atractivas, poco terreno comprobado' },
    vocabulary: { en: ['fantasy', 'wishful thinking', 'too many options', 'illusion', 'daydream', 'imagination'], es: ['fantasía', 'ilusión', 'demasiadas opciones', 'sueño despierto', 'espejismo', 'imaginación'] },
    positive: { en: ['imagination used to genuinely explore possibility', 'daring to want more than one thing', 'sorting real options from purely appealing ones', 'creative vision before it’s narrowed by practicality'], es: ['usar la imaginación para explorar posibilidades de verdad', 'atreverte a querer más de una cosa', 'separar las opciones reales de las simplemente atractivas', 'una visión creativa antes de que la practicidad la reduzca'] },
    shadow: { en: ['so many appealing options that none get tested', 'choosing the most exciting fantasy instead of the most honest option', 'confusing wanting something with actually pursuing it', 'avoiding commitment by keeping every door theoretically open'], es: ['tantas opciones atractivas que ninguna llega a probarse', 'elegir la fantasía más emocionante en vez de la opción más honesta', 'confundir querer algo con perseguirlo de verdad', 'evitar comprometerte manteniendo en teoría todas las puertas abiertas'] },
    yesNo: 'NO',
    yesNoWhy: { en: 'The Seven of Cups warns against deciding while several appealing pictures are still competing for your attention — narrow the field to what’s real first.', es: 'El Siete de Copas advierte contra decidir mientras varias imágenes atractivas siguen compitiendo por tu atención; primero reduce el campo a lo que es real.' },
    domains: {
      career: { en: 'Before deciding, separate the job offers or fantasies that are genuinely available from the ones that just sound appealing in the abstract. Test the real one before comparing it to imagined ones.', es: 'Antes de decidir, separa las ofertas o fantasías laborales que están realmente disponibles de las que solo suenan atractivas en abstracto. Pon a prueba la real antes de compararla con las imaginadas.' },
      relationship: { en: 'This card asks whether you’re drawn to this actual person, or to an appealing image of what being with them could be like. Test the image against the reality before pursuing further.', es: 'Esta carta pregunta si te atrae esta persona real, o una imagen atractiva de cómo sería estar con ella. Contrasta esa imagen con la realidad antes de seguir adelante.' },
      money: { en: 'This card warns against a financial decision built on an attractive projection rather than tested numbers. Narrow the fantasy down to what’s actually confirmed.', es: 'Esta carta advierte contra una decisión financiera basada en una proyección atractiva y no en cifras comprobadas. Reduce la fantasía a lo que realmente está confirmado.' },
      movement: { en: 'The idea of this place may be more polished than the reality of living there. Test one real detail — cost, routine, logistics — before deciding based on the picture in your head.', es: 'La idea de este lugar puede estar más pulida que la realidad de vivir allí. Comprueba un detalle real (el coste, la rutina, la logística) antes de decidir según la imagen en tu cabeza.' },
      creative: { en: 'Too many appealing directions at once can keep a project purely imaginary. Choose the one you can actually test this week, rather than the one that sounds best in theory.', es: 'Demasiadas direcciones atractivas a la vez pueden mantener un proyecto en lo puramente imaginario. Elige la que puedas probar de verdad esta semana, no la que suena mejor en teoría.' },
      family: { en: 'This card warns against an idealized picture of how a family situation should resolve, rather than an honest look at what’s actually possible with the people involved.', es: 'Esta carta advierte contra una imagen idealizada de cómo debería resolverse una situación familiar, en lugar de una mirada honesta a lo que es realmente posible con las personas implicadas.' },
      growth: { en: 'This card asks you to choose one genuine direction to actually test, rather than admiring several appealing versions of yourself without committing to any of them.', es: 'Esta carta te pide elegir una dirección genuina para probarla de verdad, en lugar de admirar varias versiones atractivas de ti mismo sin comprometerte con ninguna.' },
      general: { en: 'This situation likely has more appealing possibilities than tested ones. Narrow the fantasy down to what you can actually confirm before deciding anything.', es: 'Esta situación probablemente tiene más posibilidades atractivas que comprobadas. Reduce la fantasía a lo que realmente puedes confirmar antes de decidir nada.' }
    },
    advice: { en: ['Test one real option instead of comparing several imagined ones.', 'Narrow the fantasy down to what’s actually confirmed.', 'Choose based on what you can verify, not what sounds best.'], es: ['Prueba una opción real en lugar de comparar varias imaginadas.', 'Reduce la fantasía a lo que realmente está confirmado.', 'Elige según lo que puedas verificar, no según lo que suene mejor.'] },
    reflection: { en: ['Which option have you actually tested, versus just imagined?', 'What would this look like without the most flattering version of the story?', 'What are you avoiding deciding by keeping every option open?'], es: ['¿Qué opción has probado de verdad, frente a solo imaginado?', '¿Cómo se vería esto sin la versión más favorecedora de la historia?', '¿Qué estás evitando decidir al mantener todas las opciones abiertas?'] }
  };

  CARDS['cups-8'] = {
    theme: { en: 'WALKING AWAY', es: 'ALEJARSE' },
    archetype: { en: 'Leaving something good because it isn’t enough anymore', es: 'Dejar algo bueno porque ya no es suficiente' },
    vocabulary: { en: ['walking away', 'deeper meaning', 'disillusionment', 'quiet departure', 'seeking more', 'letting go'], es: ['alejarse', 'sentido más profundo', 'desilusión', 'partida silenciosa', 'buscar más', 'soltar'] },
    positive: { en: ['walking away from something good in search of something true', 'honesty that this no longer satisfies you, even without proof of what will', 'quiet courage to leave without a dramatic exit', 'trusting an unglamorous instinct to keep looking'], es: ['dejar algo bueno en busca de algo verdadero', 'la honestidad de admitir que esto ya no te satisface, aunque no haya certeza de qué lo hará', 'el valor tranquilo de irte sin una salida dramática', 'confiar en un instinto poco glamuroso de seguir buscando'] },
    shadow: { en: ['leaving something perfectly workable out of restlessness alone', 'walking away from real progress right before it pays off', 'chronic dissatisfaction that no achievement will actually satisfy', 'romanticizing the empty road over the imperfect thing you have'], es: ['dejar algo perfectamente funcional solo por inquietud', 'alejarte de un progreso real justo antes de que dé fruto', 'un descontento crónico que ningún logro llegará a satisfacer', 'romantizar el camino vacío por encima de lo imperfecto que ya tienes'] },
    yesNo: 'YES',
    yesNoWhy: { en: 'The Eight of Cups tends to support leaving what looks fine on paper if it no longer feels meaningful — the discomfort of walking away beats the quiet erosion of staying.', es: 'El Ocho de Copas suele respaldar dejar lo que en el papel parece correcto si ya no se siente significativo; la incomodidad de irse supera al desgaste silencioso de quedarse.' },
    domains: {
      career: { en: 'This is one of the most direct cards for this exact question — it supports leaving a job that looks fine from the outside but has stopped feeling meaningful from the inside.', es: 'Esta es una de las cartas más directas para exactamente esta pregunta: respalda dejar un trabajo que se ve bien desde fuera pero que ya no se siente con sentido por dentro.' },
      relationship: { en: 'This card can mean walking away from a comfortable but unsatisfying situation in order to pursue something with more genuine depth — even without a guarantee this new pursuit will work out.', es: 'Esta carta puede significar dejar una situación cómoda pero poco satisfactoria para buscar algo con más profundidad real, aunque no haya garantía de que esta nueva búsqueda salga bien.' },
      money: { en: 'This card supports walking away from a financially adequate situation if it has stopped serving anything meaningful — comfort alone isn’t reason enough to stay.', es: 'Esta carta respalda alejarte de una situación económicamente adecuada si ha dejado de servir a algo con sentido; la comodidad por sí sola no es motivo suficiente para quedarte.' },
      movement: { en: 'Leaving a perfectly fine place because you need something deeper is exactly what this card describes — the discomfort of the unknown may be worth what it’s seeking.', es: 'Dejar un lugar perfectamente correcto porque necesitas algo más profundo es justo lo que describe esta carta; la incomodidad de lo desconocido puede valer lo que busca.' },
      creative: { en: 'This card can mean abandoning a technically successful project because it no longer feels honest — walking away here is a form of integrity, not failure.', es: 'Esta carta puede significar abandonar un proyecto técnicamente exitoso porque ya no se siente honesto: alejarte aquí es una forma de integridad, no de fracaso.' },
      family: { en: 'This card can mean stepping back from a family role that looks fine on the surface but has quietly stopped feeling sustainable for you.', es: 'Esta carta puede significar retirarte de un papel familiar que se ve bien en la superficie pero que en silencio ha dejado de ser sostenible para ti.' },
      growth: { en: 'This is a card about outgrowing something adequate — trusting that the discomfort of leaving is worth it, even without proof of what’s next.', es: 'Esta es una carta sobre haber superado algo adecuado: confiar en que la incomodidad de irte vale la pena, aunque no haya prueba de lo que sigue.' },
      general: { en: 'This card supports leaving whatever looks acceptable but no longer feels meaningful — that quiet dissatisfaction is worth trusting, even without a clear next step yet.', es: 'Esta carta respalda dejar lo que parece aceptable pero ya no se siente con sentido; ese descontento silencioso vale la pena confiarlo, aunque todavía no haya un paso claro después.' }
    },
    advice: { en: ['Trust the dissatisfaction even without a clear next step.', 'Let go of what’s adequate in search of what’s meaningful.', 'Don’t stay somewhere just because leaving lacks a guarantee.'], es: ['Confía en el descontento aunque no haya un paso claro después.', 'Suelta lo adecuado en busca de lo que tiene sentido.', 'No te quedes solo porque irte no traiga una garantía.'] },
    reflection: { en: ['What looks fine on paper but no longer feels meaningful?', 'What are you staying with mainly because leaving feels ungrateful?', 'What would you walk toward if the destination didn’t need to be certain?'], es: ['¿Qué se ve bien en el papel pero ya no se siente con sentido?', '¿Con qué te quedas sobre todo porque irte se siente desagradecido?', '¿Hacia qué caminarías si el destino no necesitara ser seguro?'] }
  };

  CARDS['cups-9'] = {
    theme: { en: 'CONTENTMENT', es: 'SATISFACCIÓN' },
    archetype: { en: 'The wish already quietly fulfilled', es: 'El deseo ya cumplido en silencio' },
    vocabulary: { en: ['satisfaction', 'contentment', 'comfort', 'wish fulfilled', 'ease', 'self-satisfaction'], es: ['satisfacción', 'contento', 'comodidad', 'deseo cumplido', 'holgura', 'autocomplacencia'] },
    positive: { en: ['genuine satisfaction with what you’ve built', 'enjoying comfort without needing to apologize for it', 'a wish that has actually come true, not just looks like it has', 'confidence earned through real, accumulated effort'], es: ['una satisfacción genuina con lo que has construido', 'disfrutar la comodidad sin necesidad de disculparte por ella', 'un deseo que de verdad se ha cumplido, no solo lo aparenta', 'una confianza ganada a través de un esfuerzo real y acumulado'] },
    shadow: { en: ['comfort mistaken for the actual goal', 'satisfaction that’s more performed than genuinely felt', 'settling for enough because reaching further feels risky', 'self-satisfaction that stops you from noticing something still missing'], es: ['confundir la comodidad con el verdadero objetivo', 'una satisfacción más representada que sentida de verdad', 'conformarte con lo suficiente porque ir más allá se siente arriesgado', 'una autocomplacencia que te impide notar que algo todavía falta'] },
    yesNo: 'YES',
    yesNoWhy: { en: 'The Nine of Cups is one of the more contented cards in the deck — it usually supports the choice that lets you actually enjoy what you’ve built.', es: 'El Nueve de Copas es una de las cartas más satisfechas de la baraja; suele respaldar la elección que te permite disfrutar de verdad lo que has construido.' },
    domains: {
      career: { en: 'If this job genuinely satisfies you, this card supports trusting that rather than second-guessing a good thing because change feels more exciting in theory.', es: 'Si este trabajo de verdad te satisface, esta carta respalda confiar en eso en lugar de dudar de algo bueno solo porque el cambio suena más emocionante en teoría.' },
      relationship: { en: 'This card asks whether you already have real contentment somewhere you’re overlooking, before chasing a new pursuit that may not actually satisfy more than what’s here.', es: 'Esta carta pregunta si ya tienes una satisfacción real en algún lugar que estás pasando por alto, antes de perseguir una nueva búsqueda que quizá no llegue a satisfacer más que lo que ya tienes.' },
      money: { en: 'This card supports recognizing genuine financial comfort rather than chasing more out of restlessness. Enjoy what’s actually been earned before reaching further.', es: 'Esta carta respalda reconocer una comodidad financiera real en lugar de perseguir más por pura inquietud. Disfruta lo que de verdad se ha ganado antes de buscar más.' },
      movement: { en: 'If you’re already genuinely content where you are, this card asks whether the pull to move is real desire or just restlessness looking for a new target.', es: 'Si ya estás realmente a gusto donde estás, esta carta pregunta si el impulso de mudarte es un deseo real o solo inquietud buscando un nuevo objetivo.' },
      creative: { en: 'This card supports genuine pride in work you’ve completed — let yourself actually enjoy it rather than immediately moving the goalposts to the next thing.', es: 'Esta carta respalda un orgullo genuino por el trabajo que has completado: permítete disfrutarlo de verdad en lugar de mover enseguida la meta hacia lo siguiente.' },
      family: { en: 'This card asks you to notice the real comfort and warmth already present in family, rather than only measuring what’s still imperfect about it.', es: 'Esta carta te pide notar la comodidad y la calidez reales que ya existen en la familia, en lugar de medir solo lo que todavía es imperfecto.' },
      growth: { en: 'This card supports acknowledging real satisfaction with who you’ve become, rather than treating contentment itself as a problem to solve.', es: 'Esta carta respalda reconocer una satisfacción real con quien te has convertido, en lugar de tratar la propia satisfacción como un problema que resolver.' },
      general: { en: 'This card supports recognizing that a genuine wish here may already be fulfilled — check whether you’re chasing something new mainly because standing still feels unfamiliar.', es: 'Esta carta respalda reconocer que un deseo genuino aquí puede que ya esté cumplido; comprueba si persigues algo nuevo sobre todo porque quedarte quieto se siente desconocido.' }
    },
    advice: { en: ['Notice the contentment that’s already genuinely here.', 'Enjoy what you’ve built before reaching for more.', 'Check whether restlessness, not desire, is driving this.'], es: ['Nota la satisfacción que ya está realmente aquí.', 'Disfruta lo que has construido antes de buscar más.', 'Comprueba si es la inquietud, y no el deseo, lo que impulsa esto.'] },
    reflection: { en: ['What are you already genuinely satisfied with, if you’re honest?', 'Is this restlessness, or an actual desire for something more?', 'What would it look like to enjoy this instead of moving the goal?'], es: ['¿Con qué estás ya realmente satisfecho, si eres honesto?', '¿Esto es inquietud, o un deseo real de algo más?', '¿Cómo sería disfrutar esto en vez de mover la meta?'] }
  };

  CARDS['cups-10'] = {
    theme: { en: 'HARMONY', es: 'ARMONÍA' },
    archetype: { en: 'A happiness built by more than one person', es: 'Una felicidad construida entre más de una persona' },
    vocabulary: { en: ['harmony', 'fulfillment', 'home', 'lasting happiness', 'belonging', 'shared life'], es: ['armonía', 'plenitud', 'hogar', 'felicidad duradera', 'pertenencia', 'vida compartida'] },
    positive: { en: ['a happiness that’s durable, not just a good moment', 'belonging built with other people, not achieved alone', 'a home, literal or otherwise, that actually feels safe', 'contentment that includes the people you love, not just yourself'], es: ['una felicidad duradera, no solo un buen momento', 'una pertenencia construida con otras personas, no lograda en soledad', 'un hogar, literal o no, que de verdad se siente seguro', 'un contento que incluye a quienes quieres, no solo a ti mismo'] },
    shadow: { en: ['an image of happiness that looks good but isn’t actually felt', 'sacrificing your own needs to maintain a picture of harmony', 'staying for the idea of a happy home rather than the reality of it', 'comparing your life to an idealized version of family happiness'], es: ['una imagen de felicidad que se ve bien pero no se siente de verdad', 'sacrificar tus propias necesidades para mantener una imagen de armonía', 'quedarte por la idea de un hogar feliz y no por su realidad', 'comparar tu vida con una versión idealizada de felicidad familiar'] },
    yesNo: 'YES',
    yesNoWhy: { en: 'The Ten of Cups favors whatever builds lasting harmony with the people who matter — it rarely supports a choice that isolates you from them.', es: 'El Diez de Copas favorece lo que construye una armonía duradera con las personas que importan; rara vez respalda una elección que te aísle de ellas.' },
    domains: {
      career: { en: 'This card asks whether this job decision protects or costs the harmony you have at home — a career choice that quietly damages that isn’t worth it, however good it looks on paper.', es: 'Esta carta pregunta si esta decisión laboral protege o cuesta la armonía que tienes en casa; una elección de carrera que la daña en silencio no vale la pena, por bien que se vea en el papel.' },
      relationship: { en: 'This card supports pursuing a connection that could genuinely build a lasting, shared life — not just an exciting moment. Check that this is what you actually want, long term.', es: 'Esta carta respalda perseguir una conexión que pueda construir de verdad una vida compartida y duradera, no solo un momento emocionante. Comprueba que esto es lo que de verdad quieres a largo plazo.' },
      money: { en: 'This card favors financial decisions that protect the wellbeing of the people you share your life with, over ones that benefit only you in isolation.', es: 'Esta carta favorece decisiones financieras que protegen el bienestar de quienes comparten tu vida, por encima de las que solo te benefician a ti en soledad.' },
      movement: { en: 'This card asks whether this move builds toward a genuinely shared home, or pulls you away from the people who currently make you feel that way.', es: 'Esta carta pregunta si esta mudanza construye hacia un hogar realmente compartido, o te aleja de las personas que ahora mismo te hacen sentir así.' },
      creative: { en: 'This card can mean the deepest fulfillment here comes from work made with or for the people you love, rather than work pursued in isolation from them.', es: 'Esta carta puede significar que la plenitud más profunda aquí viene de un trabajo hecho con, o para, las personas que quieres, y no en aislamiento de ellas.' },
      family: { en: 'This is one of the most direct cards for family harmony — it supports the choice that builds genuine, lasting closeness rather than the appearance of it.', es: 'Esta es una de las cartas más directas para la armonía familiar: respalda la elección que construye una cercanía real y duradera, y no solo su apariencia.' },
      growth: { en: 'This card measures growth partly by whether your relationships are actually thriving alongside you, not just whether you personally are.', es: 'Esta carta mide en parte el crecimiento por si tus relaciones también prosperan junto a ti, no solo si lo haces tú por separado.' },
      general: { en: 'This card asks whether the choice in front of you builds toward lasting harmony with the people who matter, or quietly costs you that in exchange for something else.', es: 'Esta carta pregunta si la elección frente a ti construye hacia una armonía duradera con quienes importan, o te la cuesta en silencio a cambio de otra cosa.' }
    },
    advice: { en: ['Check what this costs the people you share your life with.', 'Choose lasting harmony over a good moment.', 'Make sure the happiness is felt, not just pictured.'], es: ['Comprueba qué le cuesta esto a quienes comparten tu vida.', 'Elige la armonía duradera por encima de un buen momento.', 'Asegúrate de que la felicidad se sienta, no solo se aparente.'] },
    reflection: { en: ['Does this build toward, or away from, a shared life?', 'What does genuine harmony actually feel like here, versus look like?', 'Who else’s happiness is part of this decision?'], es: ['¿Esto construye hacia, o lejos de, una vida compartida?', '¿Cómo se siente de verdad la armonía aquí, frente a cómo se ve?', '¿La felicidad de quién más forma parte de esta decisión?'] }
  };

  CARDS['cups-page'] = {
    theme: { en: 'EMOTIONAL CURIOSITY', es: 'CURIOSIDAD EMOCIONAL' },
    archetype: { en: 'A feeling still too new to have a plan attached', es: 'Un sentimiento demasiado nuevo como para tener aún un plan' },
    vocabulary: { en: ['curiosity', 'new feeling', 'sensitivity', 'playfulness', 'openness', 'imagination'], es: ['curiosidad', 'sentimiento nuevo', 'sensibilidad', 'juego', 'apertura', 'imaginación'] },
    positive: { en: ['approaching a new feeling with curiosity instead of a verdict', 'creative sensitivity picking up something worth paying attention to', 'playful openness instead of guarded caution', 'a message or feeling worth taking seriously despite its small size'], es: ['acercarte a un sentimiento nuevo con curiosidad y no con un veredicto', 'una sensibilidad creativa que capta algo que merece atención', 'una apertura juguetona en lugar de una cautela a la defensiva', 'un mensaje o sentimiento que merece tomarse en serio pese a su tamaño pequeño'] },
    shadow: { en: ['a new feeling mistaken for more certainty than it actually carries', 'oversensitivity that reads too much into an early signal', 'daydreaming about a feeling instead of testing it gently', 'naivety about what a new emotional interest actually means'], es: ['un sentimiento nuevo confundido con más certeza de la que en realidad tiene', 'una sensibilidad excesiva que lee de más en una señal temprana', 'soñar despierto con un sentimiento en vez de probarlo con calma', 'ingenuidad sobre lo que en realidad significa un nuevo interés emocional'] },
    yesNo: 'MAYBE',
    yesNoWhy: { en: 'The Page of Cups is too early in the story to give a final answer — the feeling is worth exploring, not yet a decision to act fully on.', es: 'El Paje de Copas está demasiado pronto en la historia como para dar una respuesta final; el sentimiento merece explorarse, todavía no es una decisión sobre la que actuar del todo.' },
    domains: {
      career: { en: 'This card can mean a new curiosity about a role or field, still too fresh to fully evaluate. Explore it gently before treating it as a settled plan.', es: 'Esta carta puede significar una curiosidad nueva por un puesto o campo, todavía demasiado reciente para evaluarla del todo. Explórala con calma antes de tratarla como un plan definitivo.' },
      relationship: { en: 'This card describes an early, tender curiosity rather than a fully formed answer. Let yourself be curious about this person without needing to know yet where it goes.', es: 'Esta carta describe una curiosidad temprana y tierna, no una respuesta ya formada del todo. Permítete sentir curiosidad por esta persona sin necesitar saber todavía adónde lleva.' },
      money: { en: 'A new financial idea here is still just a curiosity, not a plan — explore it at small scale before treating it as a bigger commitment.', es: 'Una idea financiera nueva aquí todavía es solo una curiosidad, no un plan: explórala a pequeña escala antes de tratarla como un compromiso mayor.' },
      movement: { en: 'This card suggests genuine curiosity about a new place, worth exploring honestly — a visit or a real conversation, rather than deciding purely from the feeling of the idea.', es: 'Esta carta sugiere una curiosidad genuina por un lugar nuevo, que vale la pena explorar con honestidad: una visita o una conversación real, en lugar de decidir solo desde la sensación de la idea.' },
      creative: { en: 'This card favors playful, low-stakes experimentation with a new creative interest — let the curiosity lead before demanding it become a serious commitment.', es: 'Esta carta favorece la experimentación juguetona y de bajo riesgo con un nuevo interés creativo: deja que la curiosidad guíe antes de exigirle que se convierta en un compromiso serio.' },
      family: { en: 'This can mean a tender, new development in a family relationship — a softening worth noticing, even if it’s too early to know what it becomes.', es: 'Esto puede significar un desarrollo tierno y nuevo en una relación familiar: un ablandamiento que vale la pena notar, aunque sea pronto para saber en qué se convierte.' },
      growth: { en: 'This card supports staying curious about an emerging feeling rather than needing to categorize it right away. Not every new interest needs an immediate label.', es: 'Esta carta respalda mantenerte curioso ante un sentimiento emergente en lugar de necesitar clasificarlo de inmediato. No todo interés nuevo necesita una etiqueta inmediata.' },
      general: { en: 'This is early-stage material — a genuine feeling that hasn’t fully formed yet. Stay curious about it rather than forcing a conclusion before it’s ready.', es: 'Esto es material en etapa temprana: un sentimiento genuino que todavía no ha terminado de formarse. Mantente curioso al respecto en lugar de forzar una conclusión antes de tiempo.' }
    },
    advice: { en: ['Explore the feeling gently before committing to it.', 'Let curiosity lead instead of demanding certainty.', 'Test it at small scale before treating it as settled.'], es: ['Explora el sentimiento con calma antes de comprometerte con él.', 'Deja que la curiosidad guíe en lugar de exigir certeza.', 'Pruébalo a pequeña escala antes de darlo por resuelto.'] },
    reflection: { en: ['What are you curious about that you haven’t let yourself explore yet?', 'Does this need a decision yet, or just attention?', 'What would gentle curiosity look like here instead of a verdict?'], es: ['¿Qué te da curiosidad y todavía no te has permitido explorar?', '¿Esto necesita ya una decisión, o solo atención?', '¿Cómo sería aquí una curiosidad amable en lugar de un veredicto?'] }
  };

  CARDS['cups-knight'] = {
    theme: { en: 'ROMANCE', es: 'ROMANCE' },
    archetype: { en: 'The heart moving before the plan is finished', es: 'El corazón moviéndose antes de que el plan esté terminado' },
    vocabulary: {
      en: ['desire', 'romance', 'attraction', 'imagination', 'invitation', 'idealism', 'charm', 'proposal', 'dream', 'emotional pursuit'],
      es: ['deseo', 'romance', 'atracción', 'imaginación', 'invitación', 'idealismo', 'encanto', 'propuesta', 'sueño', 'búsqueda emocional']
    },
    positive: {
      en: ['emotional openness that moves toward what genuinely inspires you', 'romance and charm offered sincerely, not as a performance', 'following the heart toward something that actually moves you', 'imagination used to picture what a genuine yes could feel like'],
      es: ['una apertura emocional que se mueve hacia lo que de verdad te inspira', 'romance y encanto ofrecidos con sinceridad, no como actuación', 'seguir al corazón hacia algo que realmente te conmueve', 'usar la imaginación para ver cómo se sentiría un sí genuino']
    },
    shadow: {
      en: ['idealizing a person, offer or place before checking it against reality', 'charm without anything solid standing behind it', 'falling for the fantasy of a yes rather than the yes itself', 'emotional impulsiveness that outruns the facts'],
      es: ['idealizar a una persona, oferta o lugar antes de contrastarlo con la realidad', 'encanto sin nada sólido detrás', 'enamorarte de la fantasía de un sí en lugar del sí en sí', 'una impulsividad emocional que va por delante de los hechos']
    },
    yesNo: 'NO',
    yesNoWhy: {
      en: 'The Knight of Cups warns against deciding from emotional attraction or idealization alone — not because the feeling is wrong, but because it hasn’t been checked against reality yet.',
      es: 'El Caballero de Copas advierte contra decidir solo desde la atracción emocional o la idealización, no porque el sentimiento esté mal, sino porque todavía no se ha contrastado con la realidad.'
    },
    domainReason: {
      career: {
        en: 'Not because the job is wrong, but because the Knight warns against saying yes to the idea of it before checking what’s actually being offered.',
        es: 'No porque el trabajo esté mal, sino porque el Caballero advierte contra decir sí a la idea antes de comprobar qué se ofrece de verdad.'
      },
      relationship: {
        en: 'Not because the attraction isn’t real, but because the Knight asks you to separate what this person is actually offering from what you’re hoping they might become.',
        es: 'No porque la atracción no sea real, sino porque el Caballero te pide separar lo que esta persona ofrece de verdad de lo que esperas que llegue a ser.'
      },
      movement: {
        en: 'Not because the place is wrong, but because the Knight warns against romanticizing a country before checking what living there would actually involve.',
        es: 'No porque el lugar esté mal, sino porque el Caballero advierte contra romantizar un país antes de comprobar qué implica realmente vivir allí.'
      },
      creative: {
        en: 'Not because the passion isn’t genuine, but because the Knight asks you to distinguish a real calling from the fantasy of what it might become.',
        es: 'No porque la pasión no sea genuina, sino porque el Caballero te pide distinguir una vocación real de la fantasía de en qué podría convertirse.'
      }
    },
    domains: {
      career: {
        en: 'The Knight of Cups is drawn to opportunities that feel meaningful or emotionally compelling — that can be a genuine strength: you may be looking for work that excites you, not just pays you. But the Knight can also fall in love with the idea of a job before checking the reality. Look closely at the role, conditions and expectations before committing.',
        es: 'El Caballero de Copas se siente atraído por oportunidades que resultan significativas o emocionalmente cautivadoras; eso puede ser una fortaleza real: quizá buscas un trabajo que te ilusione, no solo que te pague. Pero el Caballero también puede enamorarse de la idea de un puesto antes de comprobar la realidad. Mira de cerca el rol, las condiciones y las expectativas antes de comprometerte.'
      },
      relationship: {
        en: 'This is the Knight’s home territory: attraction, romance, the pull to follow a feeling wherever it leads. That pull is worth honoring — but check whether you’re responding to who this person actually is, or to the idea of who they could become.',
        es: 'Este es el terreno propio del Caballero: la atracción, el romance, el impulso de seguir un sentimiento vaya donde vaya. Ese impulso merece honrarse, pero comprueba si respondes a quién es esta persona de verdad, o a la idea de en quién podría convertirse.'
      },
      money: {
        en: 'The Knight of Cups can fall for the emotional appeal of an investment or purchase — the excitement of what it represents — more than the practical reality of the numbers. Let the feeling motivate you, but verify the details before committing.',
        es: 'El Caballero de Copas puede enamorarse del atractivo emocional de una inversión o una compra (lo que representa) más que de la realidad práctica de las cifras. Deja que el sentimiento te motive, pero verifica los detalles antes de comprometerte.'
      },
      movement: {
        en: 'Few cards capture the romance of relocating like this one — the emotional pull, the imagined adventure, the pictures already forming in your head. That pull is real. Just distinguish genuine desire from romanticizing an idea you haven’t tested yet.',
        es: 'Pocas cartas capturan el romance de mudarte como esta: el impulso emocional, la aventura imaginada, las imágenes que ya se forman en tu cabeza. Ese impulso es real. Solo distingue el deseo genuino de romantizar una idea que todavía no has probado.'
      },
      creative: {
        en: 'The Knight favors following genuine creative inspiration wherever it leads — the enthusiasm is real and worth trusting. But it can also fall for the fantasy of finished work more than the actual discipline of making it.',
        es: 'El Caballero favorece seguir la inspiración creativa genuina adonde lleve; el entusiasmo es real y merece confiarse. Pero también puede enamorarse de la fantasía de la obra terminada más que de la disciplina real de hacerla.'
      },
      family: {
        en: 'This card can mean an idealized picture of how a family relationship should feel, rather than an honest read of how it actually is right now. Let the warmth be genuine, but keep it grounded.',
        es: 'Esta carta puede significar una imagen idealizada de cómo debería sentirse una relación familiar, en vez de una lectura honesta de cómo es en realidad ahora mismo. Que la calidez sea genuina, pero mantenla con los pies en la tierra.'
      },
      growth: {
        en: 'Are you responding to what is actually being offered, or to what you hope it could become? The Knight treats this question itself as the growth — separating a real invitation from an imagined one.',
        es: '¿Estás respondiendo a lo que de verdad se ofrece, o a lo que esperas que llegue a ser? El Caballero trata esta pregunta misma como el crecimiento: separar una invitación real de una imaginada.'
      },
      general: {
        en: 'Something here has genuinely moved you — that’s worth taking seriously. The Knight’s caution isn’t about the feeling being wrong, it’s about checking whether the reality matches the picture you’ve already fallen for.',
        es: 'Algo aquí de verdad te ha conmovido; eso merece tomarse en serio. La cautela del Caballero no es sobre que el sentimiento esté mal, es sobre comprobar si la realidad coincide con la imagen de la que ya te has enamorado.'
      }
    },
    advice: {
      en: ['Separate what’s being offered from what you’re imagining.', 'Let the feeling motivate you, then verify it against reality.', 'Give the idea a real test before calling it a yes.'],
      es: ['Separa lo que se ofrece de lo que estás imaginando.', 'Deja que el sentimiento te motive, y luego contrástalo con la realidad.', 'Ponle a la idea una prueba real antes de llamarla un sí.']
    },
    reflection: {
      en: ['Are you responding to what is actually being offered, or to what you hope it could become?', 'What would this look like with the fantasy removed?', 'What’s the difference between how this feels and what you actually know?'],
      es: ['¿Estás respondiendo a lo que de verdad se ofrece, o a lo que esperas que llegue a ser?', '¿Cómo se vería esto sin la fantasía?', '¿Cuál es la diferencia entre cómo se siente esto y lo que en realidad sabes?']
    }
  };

  CARDS['cups-queen'] = {
    theme: { en: 'EMOTIONAL DEPTH', es: 'PROFUNDIDAD EMOCIONAL' },
    archetype: { en: 'Empathy mature enough to hold difficult feeling', es: 'Una empatía lo bastante madura como para sostener sentimientos difíciles' },
    vocabulary: { en: ['compassion', 'intuition', 'emotional depth', 'nurture', 'empathy', 'calm feeling'], es: ['compasión', 'intuición', 'profundidad emocional', 'cuidado', 'empatía', 'sentimiento sereno'] },
    positive: { en: ['reading a situation emotionally with real accuracy', 'compassion for others that doesn’t abandon yourself', 'staying emotionally present through something difficult', 'trusting a deep, quiet intuition over surface noise'], es: ['leer emocionalmente una situación con verdadera precisión', 'una compasión hacia los demás que no te abandona a ti', 'permanecer emocionalmente presente en algo difícil', 'confiar en una intuición profunda y serena por encima del ruido superficial'] },
    shadow: { en: ['absorbing everyone else’s feelings until you lose track of your own', 'compassion that becomes self-erasure', 'moodiness mistaken for intuition', 'staying in an emotionally draining situation out of empathy alone'], es: ['absorber los sentimientos de los demás hasta perder de vista los propios', 'una compasión que se convierte en autoborrado', 'confundir el mal humor con la intuición', 'quedarte en una situación emocionalmente agotadora solo por empatía'] },
    yesNo: 'MAYBE',
    yesNoWhy: { en: 'The Queen of Cups trusts feeling over facts, but asks you to check whose feelings you’re actually reading before deciding.', es: 'La Reina de Copas confía en el sentimiento por encima de los hechos, pero pide comprobar de quién son en realidad los sentimientos que estás leyendo antes de decidir.' },
    domains: {
      career: { en: 'Trust your read on the emotional undercurrent of this workplace — the Queen’s intuition about people is usually accurate. Just make sure you’re not absorbing someone else’s anxiety as your own.', es: 'Confía en tu lectura del trasfondo emocional de este trabajo; la intuición de la Reina sobre las personas suele ser certera. Solo asegúrate de no absorber la ansiedad de otra persona como propia.' },
      relationship: { en: 'This card favors trusting your emotional read of this person over any logical argument for or against them — but check that you’re not caretaking a connection at the cost of your own needs.', es: 'Esta carta favorece confiar en tu lectura emocional de esta persona por encima de cualquier argumento lógico a favor o en contra; solo comprueba que no estés cuidando el vínculo a costa de tus propias necesidades.' },
      money: { en: 'A financial decision made from genuine intuition can serve you here — but separate that from anxiety, which can wear the same quiet, urgent feeling.', es: 'Una decisión financiera tomada desde una intuición genuina puede servirte aquí, pero sepárala de la ansiedad, que puede sentirse igual de silenciosa y urgente.' },
      movement: { en: 'This card asks you to trust the emotional sense you have of a place, rather than only the practical case for or against it. That feeling is usually picking up something real.', es: 'Esta carta te pide confiar en la sensación emocional que tienes de un lugar, más allá del caso práctico a favor o en contra. Ese sentimiento suele captar algo real.' },
      creative: { en: 'The Queen of Cups favors work made from genuine emotional depth rather than technical calculation — let the feeling lead, and trust it more than you usually do.', es: 'La Reina de Copas favorece un trabajo hecho desde una profundidad emocional genuina y no desde el cálculo técnico: deja que el sentimiento guíe, y confía en él más de lo habitual.' },
      family: { en: 'This card asks you to stay emotionally present with a difficult family member, without absorbing their pain as your own responsibility to fix.', es: 'Esta carta te pide permanecer emocionalmente presente con un familiar difícil, sin absorber su dolor como una responsabilidad propia que arreglar.' },
      growth: { en: 'This card asks whether you’re caring for yourself with the same depth you offer everyone else — genuine growth here includes turning that compassion inward.', es: 'Esta carta pregunta si te cuidas a ti mismo con la misma profundidad que ofreces a los demás; el crecimiento real aquí incluye dirigir esa compasión hacia dentro.' },
      general: { en: 'Trust the emotional read you already have of this situation — it’s likely more accurate than it feels. Just check whose feelings are actually informing it.', es: 'Confía en la lectura emocional que ya tienes de esta situación; probablemente sea más precisa de lo que parece. Solo comprueba de quién son en realidad los sentimientos que la informan.' }
    },
    advice: { en: ['Trust the emotional read, and check whose feelings they are.', 'Offer compassion without abandoning your own needs.', 'Stay present without absorbing what isn’t yours to carry.'], es: ['Confía en la lectura emocional, y comprueba de quién son esos sentimientos.', 'Ofrece compasión sin abandonar tus propias necesidades.', 'Permanece presente sin absorber lo que no te corresponde cargar.'] },
    reflection: { en: ['Whose feelings are you actually reading right now — yours, or someone else’s?', 'Where have you been caretaking at your own expense?', 'What does your intuition already know that you haven’t admitted?'], es: ['¿De quién son en realidad los sentimientos que estás leyendo ahora, tuyos o de otra persona?', '¿Dónde has estado cuidando a costa de ti mismo?', '¿Qué sabe ya tu intuición que todavía no has admitido?'] }
  };

  CARDS['cups-king'] = {
    theme: { en: 'EMOTIONAL MASTERY', es: 'DOMINIO EMOCIONAL' },
    archetype: { en: 'Feeling and reason finally on speaking terms', es: 'El sentimiento y la razón por fin en buenos términos' },
    vocabulary: { en: ['emotional balance', 'calm authority', 'wise counsel', 'steadiness', 'maturity', 'composure'], es: ['equilibrio emocional', 'autoridad serena', 'consejo sabio', 'firmeza', 'madurez', 'compostura'] },
    positive: { en: ['staying calm and clear while feeling something intensely', 'giving good advice because you’ve actually metabolized your own feelings', 'emotional maturity that doesn’t require suppressing anything', 'steadiness that reassures people without needing to perform it'], es: ['mantenerte sereno y claro mientras sientes algo con intensidad', 'dar un buen consejo porque de verdad has procesado tus propios sentimientos', 'una madurez emocional que no exige reprimir nada', 'una firmeza que tranquiliza a los demás sin necesidad de fingirla'] },
    shadow: { en: ['appearing calm while quietly suppressing what you actually feel', 'using composure to avoid a needed emotional conversation', 'giving others’ feelings more management than your own deserve', 'controlling your reaction so tightly nobody knows what you need'], es: ['aparentar calma mientras en silencio reprimes lo que de verdad sientes', 'usar la compostura para evitar una conversación emocional necesaria', 'gestionar más los sentimientos ajenos que los propios', 'controlar tanto tu reacción que nadie sabe lo que necesitas'] },
    yesNo: 'YES',
    yesNoWhy: { en: 'The King of Cups supports a decision made with both feeling and clear judgment intact — the card rewards emotional maturity, not suppression.', es: 'El Rey de Copas respalda una decisión tomada con el sentimiento y el juicio claro intactos; la carta premia la madurez emocional, no la represión.' },
    domains: {
      career: { en: 'This card supports handling this job decision with calm, honest emotional clarity — neither suppressing your frustration nor letting it drive an impulsive exit.', es: 'Esta carta respalda afrontar esta decisión laboral con una claridad emocional serena y honesta, sin reprimir la frustración ni dejar que impulse una salida impulsiva.' },
      relationship: { en: 'The King of Cups favors pursuing this with genuine emotional steadiness — showing real feeling without losing your composure or your own needs in the process.', es: 'El Rey de Copas favorece acercarte con una firmeza emocional genuina: mostrar un sentimiento real sin perder la compostura ni tus propias necesidades en el proceso.' },
      money: { en: 'This card supports a calm, emotionally mature approach to money — neither denying anxiety about it nor letting that anxiety make the decision for you.', es: 'Esta carta respalda un enfoque sereno y emocionalmente maduro sobre el dinero: ni negar la ansiedad al respecto ni dejar que esa ansiedad tome la decisión por ti.' },
      movement: { en: 'This card supports making this decision with steady emotional clarity — acknowledging both the excitement and the fear honestly, rather than letting either one dominate.', es: 'Esta carta respalda tomar esta decisión con una claridad emocional firme: reconocer con honestidad tanto la ilusión como el miedo, sin dejar que ninguno domine.' },
      creative: { en: 'This card favors channeling deep feeling into disciplined, mature craft — the emotion gives the work its power, and the discipline gives it its form.', es: 'Esta carta favorece canalizar un sentimiento profundo hacia un oficio disciplinado y maduro: la emoción le da al trabajo su fuerza, y la disciplina le da su forma.' },
      family: { en: 'This card supports being the calm, emotionally honest presence in a difficult family dynamic — steady enough to hold the difficulty without needing to fix it instantly.', es: 'Esta carta respalda ser la presencia serena y emocionalmente honesta en una dinámica familiar difícil: lo bastante firme como para sostener la dificultad sin necesidad de arreglarla al instante.' },
      growth: { en: 'This card treats emotional maturity — feeling fully while staying clear-headed — as a genuine skill worth developing, not something you either have or don’t.', es: 'Esta carta trata la madurez emocional (sentir plenamente sin perder la claridad) como una habilidad real que vale la pena desarrollar, no algo que se tiene o no.' },
      general: { en: 'This card supports a decision that honors both what you feel and what you can clearly reason through — neither one alone is the full answer here.', es: 'Esta carta respalda una decisión que honra tanto lo que sientes como lo que puedes razonar con claridad; ninguno de los dos por separado es la respuesta completa aquí.' }
    },
    advice: { en: ['Let yourself feel it fully without losing your clarity.', 'Give advice to yourself the way you would to someone you respect.', 'Stay steady without suppressing what you actually need.'], es: ['Permítete sentirlo por completo sin perder la claridad.', 'Date a ti mismo el consejo que le darías a alguien a quien respetas.', 'Mantente firme sin reprimir lo que en verdad necesitas.'] },
    reflection: { en: ['What are you managing so carefully that nobody knows what you actually feel?', 'What would you advise someone else in your exact position?', 'Where does composure need to make room for honesty instead?'], es: ['¿Qué gestionas con tanto cuidado que nadie sabe lo que sientes en realidad?', '¿Qué le aconsejarías a otra persona en tu misma posición exacta?', '¿Dónde necesita la compostura dejar espacio a la honestidad en su lugar?'] }
  };

  // ---- WANDS (fire: passion, action, career, ambition) -----------------------

  CARDS['wands-1'] = {
    theme: { en: 'SPARK', es: 'CHISPA' },
    archetype: { en: 'A first flash of inspiration, before it has a shape', es: 'Un primer destello de inspiración, antes de tener forma' },
    vocabulary: { en: ['spark', 'inspiration', 'new venture', 'potential', 'ignition', 'raw excitement'], es: ['chispa', 'inspiración', 'proyecto nuevo', 'potencial', 'ignición', 'entusiasmo puro'] },
    positive: { en: ['a genuine spark of excitement worth trusting', 'the raw potential of something not yet built', 'energy that wants a direction to move in', 'saying yes to a beginning before it’s fully planned'], es: ['una chispa genuina de entusiasmo que vale la pena confiar', 'el potencial puro de algo aún sin construir', 'una energía que pide una dirección hacia dónde moverse', 'decir sí a un comienzo antes de tenerlo del todo planeado'] },
    shadow: { en: ['excitement with no follow-through behind it', 'chasing every new spark instead of feeding one', 'mistaking the thrill of a new idea for a real plan', 'burning bright and fading before anything gets built'], es: ['entusiasmo sin nada de constancia detrás', 'perseguir cada chispa nueva en lugar de alimentar una sola', 'confundir la emoción de una idea nueva con un plan real', 'brillar con fuerza y apagarse antes de construir nada'] },
    yesNo: 'YES',
    yesNoWhy: { en: 'The Ace of Wands supports acting on genuine excitement — the spark is real, and the only real risk is not following through on it.', es: 'El As de Bastos respalda actuar sobre un entusiasmo genuino; la chispa es real, y el único riesgo verdadero es no darle seguimiento.' },
    domains: {
      career: { en: 'If this new direction genuinely excites you, that spark is worth trusting — the Ace of Wands rarely shows up for a path that’s merely convenient.', es: 'Si esta nueva dirección de verdad te entusiasma, esa chispa vale la pena confiarla; el As de Bastos rara vez aparece por un camino meramente conveniente.' },
      relationship: { en: 'This card favors acting on a genuine spark of attraction — the excitement itself is information worth following, even without knowing exactly where it leads.', es: 'Esta carta favorece actuar sobre una chispa genuina de atracción; el propio entusiasmo es información que vale la pena seguir, aunque no sepas exactamente adónde lleva.' },
      money: { en: 'A new financial venture here starts with real potential — the risk isn’t the idea itself, it’s losing momentum before giving it a real shot.', es: 'Un nuevo proyecto financiero aquí empieza con un potencial real; el riesgo no es la idea en sí, sino perder el impulso antes de darle una oportunidad de verdad.' },
      movement: { en: 'This card supports the excitement of a fresh start somewhere new — trust the spark, and give it a concrete first step rather than letting it stay a daydream.', es: 'Esta carta respalda el entusiasmo de un comienzo nuevo en otro lugar: confía en la chispa, y dale un primer paso concreto en lugar de dejarla como un sueño despierto.' },
      creative: { en: 'This is one of the strongest cards for new creative inspiration — the idea has real potential. The only thing standing between you and it is starting.', es: 'Esta es una de las cartas más fuertes para una nueva inspiración creativa: la idea tiene potencial real. Lo único que se interpone es empezar.' },
      family: { en: 'This card can mean a fresh, genuine spark of connection with family worth acting on — a small gesture now, rather than waiting for a bigger occasion.', es: 'Esta carta puede significar una chispa nueva y genuina de conexión familiar que vale la pena atender: un gesto pequeño ahora, en lugar de esperar una ocasión mayor.' },
      growth: { en: 'This card supports trusting a new excitement about who you could become, even before you know exactly what shape it will take.', es: 'Esta carta respalda confiar en un entusiasmo nuevo sobre en quién podrías convertirte, incluso antes de saber exactamente qué forma tomará.' },
      general: { en: 'Something here has genuinely sparked your interest — this card supports trusting that and giving it one real, concrete step forward.', es: 'Algo aquí ha despertado de verdad tu interés; esta carta respalda confiar en eso y darle un primer paso real y concreto.' }
    },
    advice: { en: ['Give the spark one concrete next step.', 'Trust the excitement; don’t just admire it.', 'Act before the momentum fades.'], es: ['Dale a la chispa un primer paso concreto.', 'Confía en el entusiasmo; no te limites a admirarlo.', 'Actúa antes de que se apague el impulso.'] },
    reflection: { en: ['What spark have you been admiring instead of acting on?', 'What’s the smallest real step this excitement could take today?', 'What would you start if you trusted the spark was enough reason?'], es: ['¿Qué chispa has estado admirando en lugar de seguir?', '¿Cuál es el paso real más pequeño que este entusiasmo podría dar hoy?', '¿Qué empezarías si confiaras en que la chispa es razón suficiente?'] }
  };

  CARDS['wands-2'] = {
    theme: { en: 'PLANNING AHEAD', es: 'PLANEAR EL FUTURO' },
    archetype: { en: 'Standing at the edge of what you’ve already built', es: 'De pie en el borde de lo que ya has construido' },
    vocabulary: { en: ['planning', 'personal power', 'vision', 'crossroads', 'ambition', 'the wider world'], es: ['planificación', 'poder personal', 'visión', 'encrucijada', 'ambición', 'el mundo más amplio'] },
    positive: { en: ['having a real vision for what comes after this', 'personal power that comes from already having built something', 'weighing a bigger world against what’s comfortable and known', 'ambition grounded in an actual plan'], es: ['tener una visión real de lo que viene después', 'un poder personal que nace de ya haber construido algo', 'sopesar un mundo más amplio frente a lo cómodo y conocido', 'una ambición apoyada en un plan real'] },
    shadow: { en: ['staying at the edge, planning endlessly without stepping past it', 'ambition that outpaces any actual groundwork', 'comfort mistaken for the safer, wiser choice', 'a vision so big it becomes an excuse not to start'], es: ['quedarte en el borde, planeando sin fin sin cruzarlo', 'una ambición que va por delante de cualquier base real', 'confundir la comodidad con la elección más sensata', 'una visión tan grande que se convierte en excusa para no empezar'] },
    yesNo: 'YES',
    yesNoWhy: { en: 'The Two of Wands favors expanding beyond what’s already comfortable, as long as there’s an actual plan behind the ambition.', es: 'El Dos de Bastos favorece expandirse más allá de lo ya cómodo, siempre que haya un plan real detrás de la ambición.' },
    domains: {
      career: { en: 'This card supports leaving if you have a genuine vision for what’s next, not just a wish to escape. Make sure the plan is as real as the ambition.', es: 'Esta carta respalda irte si tienes una visión genuina de lo que sigue, no solo un deseo de escapar. Asegúrate de que el plan sea tan real como la ambición.' },
      relationship: { en: 'This card asks whether you have an actual sense of what you want from this pursuit, or just the ambition to have it. Clarify the vision before acting on it.', es: 'Esta carta pregunta si tienes una idea real de lo que quieres de esta búsqueda, o solo la ambición de tenerla. Aclara la visión antes de actuar sobre ella.' },
      money: { en: 'This card favors a calculated financial expansion — one grounded in an actual plan for growth, not simply a bigger appetite for risk.', es: 'Esta carta favorece una expansión financiera calculada, apoyada en un plan real de crecimiento, no solo en un apetito mayor por el riesgo.' },
      movement: { en: 'This card supports moving toward a wider world if you have a genuine plan for what you’ll build there — not just a wish to leave what’s familiar.', es: 'Esta carta respalda mudarte a un mundo más amplio si tienes un plan genuino de lo que construirás allí, no solo el deseo de dejar lo conocido.' },
      creative: { en: 'This card favors expanding a project beyond its current scale — but make sure the ambition is matched by an actual plan for executing it.', es: 'Esta carta favorece expandir un proyecto más allá de su escala actual, pero asegúrate de que la ambición vaya acompañada de un plan real para ejecutarlo.' },
      family: { en: 'This card can mean weighing your own ambitions against a family’s expectation that you stay close to what’s familiar. Both deserve honest consideration.', es: 'Esta carta puede significar sopesar tus propias ambiciones frente a la expectativa familiar de quedarte cerca de lo conocido. Ambas merecen una consideración honesta.' },
      growth: { en: 'This card asks what wider version of your life you’ve been planning for without yet stepping toward — growth here means finally crossing that edge.', es: 'Esta carta pregunta qué versión más amplia de tu vida has estado planeando sin dar todavía el paso; el crecimiento aquí significa por fin cruzar ese borde.' },
      general: { en: 'This card supports expanding beyond what’s currently comfortable, as long as the ambition is backed by an actual plan rather than just a wish for more.', es: 'Esta carta respalda expandirte más allá de lo actualmente cómodo, siempre que la ambición esté respaldada por un plan real y no solo por el deseo de más.' }
    },
    advice: { en: ['Match the ambition with an actual plan.', 'Step past the edge instead of just planning at it.', 'Weigh the wider world honestly against what’s comfortable.'], es: ['Iguala la ambición con un plan real.', 'Cruza el borde en lugar de solo planear frente a él.', 'Sopesa con honestidad el mundo más amplio frente a lo cómodo.'] },
    reflection: { en: ['What vision have you been planning for without stepping toward yet?', 'What would you build if comfort weren’t part of the calculation?', 'What’s the plan behind this ambition, specifically?'], es: ['¿Qué visión has estado planeando sin dar todavía el paso hacia ella?', '¿Qué construirías si la comodidad no formara parte del cálculo?', '¿Cuál es, en concreto, el plan detrás de esta ambición?'] }
  };

  CARDS['wands-3'] = {
    theme: { en: 'LOOKING AHEAD', es: 'MIRAR HACIA ADELANTE' },
    archetype: { en: 'Watching the first results of something you set in motion', es: 'Observando los primeros resultados de algo que pusiste en marcha' },
    vocabulary: { en: ['expansion', 'foresight', 'anticipation', 'progress', 'the horizon', 'early results'], es: ['expansión', 'previsión', 'anticipación', 'progreso', 'el horizonte', 'primeros resultados'] },
    positive: { en: ['trusting the groundwork you’ve already laid', 'patience while genuine progress is still arriving', 'foresight that lets you plan the next stage confidently', 'expanding a good beginning into something bigger'], es: ['confiar en la base que ya has sentado', 'paciencia mientras el progreso real todavía llega', 'una previsión que te permite planear la siguiente etapa con confianza', 'expandir un buen comienzo hacia algo mayor'] },
    shadow: { en: ['impatience for results that genuinely need more time', 'watching the horizon instead of managing what’s in front of you', 'assuming success before it’s actually confirmed', 'overextending into the next stage before this one is stable'], es: ['impaciencia por unos resultados que en verdad necesitan más tiempo', 'mirar el horizonte en lugar de gestionar lo que tienes delante', 'dar por hecho el éxito antes de que esté confirmado', 'extenderte hacia la siguiente etapa antes de que esta sea estable'] },
    yesNo: 'YES',
    yesNoWhy: { en: 'The Three of Wands supports staying the course you’ve already set — the groundwork is real, and the results are still arriving.', es: 'El Tres de Bastos respalda seguir el rumbo que ya has trazado; la base es real, y los resultados todavía están llegando.' },
    domains: {
      career: { en: 'This card suggests the groundwork you’ve already laid in this job is real — the results may still be arriving. Check if patience, not departure, is what’s actually needed.', es: 'Esta carta sugiere que la base que ya has sentado en este trabajo es real; los resultados todavía pueden estar llegando. Comprueba si lo que hace falta es paciencia, no marcharte.' },
      relationship: { en: 'This card favors patience while a genuine connection continues to develop — the early signs may already be pointing somewhere good, given a little more time.', es: 'Esta carta favorece la paciencia mientras una conexión genuina sigue desarrollándose; las primeras señales pueden estar apuntando ya a algo bueno, con un poco más de tiempo.' },
      money: { en: 'This card supports staying with a financial plan that’s already showing early signs of working, rather than abandoning it before the results fully arrive.', es: 'Esta carta respalda mantener un plan financiero que ya muestra primeros indicios de funcionar, en lugar de abandonarlo antes de que lleguen los resultados completos.' },
      movement: { en: 'If groundwork for this move is already in motion — research done, plans made — this card favors trusting that momentum rather than second-guessing it now.', es: 'Si ya hay una base en marcha para esta mudanza (investigación hecha, planes trazados), esta carta favorece confiar en ese impulso en lugar de dudar ahora.' },
      creative: { en: 'This card favors trusting a creative direction you’ve already invested in — the early results are worth watching a little longer before judging the whole project.', es: 'Esta carta favorece confiar en una dirección creativa en la que ya has invertido: los primeros resultados merecen observarse un poco más antes de juzgar todo el proyecto.' },
      family: { en: 'This card can mean the effort you’ve already put into a family relationship is starting to show results — give it a bit more time before concluding it isn’t working.', es: 'Esta carta puede significar que el esfuerzo ya invertido en una relación familiar empieza a dar resultados; dale un poco más de tiempo antes de concluir que no funciona.' },
      growth: { en: 'This card supports trusting the direction you’ve already set for your own growth — the results of earlier effort may be closer than they currently appear.', es: 'Esta carta respalda confiar en la dirección que ya has fijado para tu propio crecimiento; los resultados de un esfuerzo anterior pueden estar más cerca de lo que ahora parece.' },
      general: { en: 'This card favors staying with the direction you’ve already set in motion — early results are likely on the way, even if they haven’t fully arrived yet.', es: 'Esta carta favorece mantener la dirección que ya has puesto en marcha; es probable que los primeros resultados estén en camino, aunque todavía no hayan llegado del todo.' }
    },
    advice: { en: ['Give the groundwork you’ve laid a bit more time.', 'Watch for early results instead of assuming failure.', 'Plan the next stage without abandoning this one.'], es: ['Dale a la base que ya sentaste un poco más de tiempo.', 'Observa los primeros resultados en vez de dar por hecho el fracaso.', 'Planea la siguiente etapa sin abandonar esta.'] },
    reflection: { en: ['What groundwork have you already laid that deserves more patience?', 'What early result have you been overlooking?', 'What would this look like if you trusted the direction you already set?'], es: ['¿Qué base ya sentada merece más paciencia?', '¿Qué primer resultado has estado pasando por alto?', '¿Cómo se vería esto si confiaras en la dirección que ya fijaste?'] }
  };

  CARDS['wands-4'] = {
    theme: { en: 'MILESTONE', es: 'HITO' },
    archetype: { en: 'A real achievement worth actually celebrating', es: 'Un logro real que merece celebrarse de verdad' },
    vocabulary: { en: ['celebration', 'homecoming', 'milestone', 'stability', 'belonging', 'earned rest'], es: ['celebración', 'llegada a casa', 'hito', 'estabilidad', 'pertenencia', 'descanso ganado'] },
    positive: { en: ['recognizing a genuine milestone instead of rushing past it', 'stability that feels like home, not like a cage', 'community showing up to celebrate something you’ve earned', 'pausing to actually enjoy progress before chasing the next thing'], es: ['reconocer un hito genuino en vez de pasar de largo', 'una estabilidad que se siente como un hogar, no como una jaula', 'una comunidad que aparece para celebrar algo que has ganado', 'detenerte a disfrutar de verdad el progreso antes de perseguir lo siguiente'] },
    shadow: { en: ['settling permanently into what was only meant to be a rest stop', 'mistaking comfort for the actual finish line', 'celebrating prematurely, before the milestone is fully real', 'staying because leaving would mean giving up the celebration'], es: ['instalarte de forma permanente en lo que solo era una parada para descansar', 'confundir la comodidad con la verdadera meta', 'celebrar antes de tiempo, antes de que el hito sea del todo real', 'quedarte porque irte significaría renunciar a la celebración'] },
    yesNo: 'MAYBE',
    yesNoWhy: { en: 'The Four of Wands supports celebrating a real milestone, but asks whether you’re actually ready to move past it, or just enjoying the rest stop.', es: 'El Cuatro de Bastos respalda celebrar un hito real, pero pregunta si estás realmente listo para dejarlo atrás, o solo disfrutando de la parada.' },
    domains: {
      career: { en: 'Before leaving, recognize what you’ve actually accomplished here — this card asks whether you’re ready to move on, or whether you haven’t yet let yourself enjoy what you built.', es: 'Antes de irte, reconoce lo que realmente has logrado aquí; esta carta pregunta si estás listo para seguir, o si todavía no te has permitido disfrutar lo construido.' },
      relationship: { en: 'This card supports pursuing something that could genuinely become a stable, celebrated home together — not just an exciting phase, but something built to last.', es: 'Esta carta respalda perseguir algo que pueda convertirse de verdad en un hogar estable y celebrado juntos, no solo una fase emocionante, sino algo hecho para durar.' },
      money: { en: 'This card supports recognizing a genuine financial milestone you’ve reached, rather than immediately moving on to the next target without acknowledging it.', es: 'Esta carta respalda reconocer un hito financiero genuino que ya has alcanzado, en lugar de pasar de inmediato al siguiente objetivo sin reconocerlo.' },
      movement: { en: 'This card can mean moving toward a place that genuinely feels like home — stability worth building, not just a stop along the way.', es: 'Esta carta puede significar mudarte a un lugar que de verdad se sienta como un hogar: una estabilidad que vale la pena construir, no solo una parada en el camino.' },
      creative: { en: 'This card supports pausing to genuinely celebrate a finished piece of work before rushing toward the next project.', es: 'Esta carta respalda detenerte a celebrar de verdad un trabajo terminado antes de correr hacia el próximo proyecto.' },
      family: { en: 'This card favors gathering to celebrate a genuine family milestone — a wedding, a homecoming, a reconciliation worth actually marking.', es: 'Esta carta favorece reunirse para celebrar un hito familiar genuino: una boda, un regreso a casa, una reconciliación que merece marcarse de verdad.' },
      growth: { en: 'This card asks you to actually acknowledge how far you’ve come, rather than treating every milestone as just another item to check off.', es: 'Esta carta te pide reconocer de verdad cuánto has avanzado, en lugar de tratar cada hito como un simple punto más que marcar.' },
      general: { en: 'This card asks whether you’ve actually let yourself acknowledge a genuine milestone here, rather than rushing straight past it toward the next question.', es: 'Esta carta pregunta si de verdad te has permitido reconocer un hito genuino aquí, en lugar de pasar de largo hacia la siguiente pregunta.' }
    },
    advice: { en: ['Acknowledge the milestone before moving past it.', 'Check whether this is a home or just a rest stop.', 'Celebrate what’s actually been earned.'], es: ['Reconoce el hito antes de dejarlo atrás.', 'Comprueba si esto es un hogar o solo una parada.', 'Celebra lo que realmente se ha ganado.'] },
    reflection: { en: ['What have you accomplished here that you haven’t actually celebrated?', 'Is this a home, or a comfortable rest stop you’ve mistaken for one?', 'What would it look like to enjoy this before chasing the next thing?'], es: ['¿Qué has logrado aquí que todavía no has celebrado de verdad?', '¿Esto es un hogar, o una parada cómoda que has confundido con uno?', '¿Cómo sería disfrutar esto antes de perseguir lo siguiente?'] }
  };

  CARDS['wands-5'] = {
    theme: { en: 'FRICTION', es: 'FRICCIÓN' },
    archetype: { en: 'Competing energies, none of them wrong on their own', es: 'Energías que compiten, ninguna equivocada por sí sola' },
    vocabulary: { en: ['friction', 'competition', 'disagreement', 'struggle', 'conflicting agendas', 'noise'], es: ['fricción', 'competencia', 'desacuerdo', 'lucha', 'agendas encontradas', 'ruido'] },
    positive: { en: ['healthy competition that actually sharpens the work', 'disagreement that surfaces something worth addressing', 'holding your ground amid conflicting opinions', 'testing an idea against real resistance instead of only agreement'], es: ['una competencia sana que de verdad afina el trabajo', 'un desacuerdo que saca a la luz algo que merece atenderse', 'sostener tu posición en medio de opiniones encontradas', 'poner a prueba una idea frente a una resistencia real y no solo el acuerdo'] },
    shadow: { en: ['friction for its own sake, without any real stakes', 'competing so hard you lose sight of the actual goal', 'noise mistaken for meaningful disagreement', 'staying in conflict because winning feels better than resolving'], es: ['fricción por sí misma, sin ninguna apuesta real', 'competir tanto que se pierde de vista el objetivo real', 'confundir el ruido con un desacuerdo significativo', 'quedarte en el conflicto porque ganar se siente mejor que resolver'] },
    yesNo: 'MAYBE',
    yesNoWhy: { en: 'The Five of Wands describes unresolved friction, not a clean answer — the useful move is figuring out whether this conflict is worth having at all.', es: 'El Cinco de Bastos describe una fricción sin resolver, no una respuesta clara; lo útil es averiguar si este conflicto merece la pena en absoluto.' },
    domains: {
      career: { en: 'This card can describe genuine friction at work — competing priorities, clashing personalities. Before leaving, ask whether the conflict itself is solvable, or structurally baked in.', es: 'Esta carta puede describir una fricción real en el trabajo: prioridades encontradas, personalidades que chocan. Antes de irte, pregúntate si el conflicto en sí es resoluble, o está incorporado en la estructura.' },
      relationship: { en: 'This card can mean real friction or competing agendas around this pursuit — with a rival, with circumstance, or within your own mixed feelings. Notice which fight is actually worth having.', es: 'Esta carta puede significar una fricción real o agendas encontradas alrededor de esta búsqueda, con un rival, con las circunstancias, o dentro de tus propios sentimientos encontrados. Fíjate en qué pelea vale la pena librar.' },
      money: { en: 'This card can describe competing financial pressures pulling against each other. Sort out which conflict is genuinely worth engaging before committing resources to it.', es: 'Esta carta puede describir presiones financieras encontradas tirando en direcciones opuestas. Determina qué conflicto vale realmente la pena antes de dedicarle recursos.' },
      movement: { en: 'This card can point to real disagreement — with family, a partner, or your own competing priorities — about this move. That friction deserves addressing directly, not avoiding.', es: 'Esta carta puede señalar un desacuerdo real (con la familia, con una pareja, o con tus propias prioridades encontradas) sobre esta mudanza. Esa fricción merece abordarse directamente, no evitarse.' },
      creative: { en: 'This card can mean useful creative friction — competing ideas testing each other. Let the disagreement sharpen the work rather than stall it entirely.', es: 'Esta carta puede significar una fricción creativa útil: ideas que compiten y se ponen a prueba entre sí. Deja que el desacuerdo afine el trabajo en lugar de paralizarlo del todo.' },
      family: { en: 'This card describes real, ongoing friction within a family — competing needs that haven’t been reconciled. Naming the actual disagreement directly tends to help more than avoiding it.', es: 'Esta carta describe una fricción real y continua dentro de la familia: necesidades encontradas que no se han reconciliado. Nombrar el desacuerdo directamente suele ayudar más que evitarlo.' },
      growth: { en: 'This card can describe an internal conflict between competing versions of what you want. Growth here means figuring out which one is actually worth fighting for.', es: 'Esta carta puede describir un conflicto interno entre versiones encontradas de lo que quieres. Crecer aquí significa averiguar cuál vale realmente la pena defender.' },
      general: { en: 'This situation involves real, unresolved friction — competing pressures or opinions pulling in different directions. Figure out which conflict is actually worth engaging before choosing a side.', es: 'Esta situación implica una fricción real y sin resolver: presiones u opiniones encontradas tirando en direcciones distintas. Averigua qué conflicto vale realmente la pena antes de tomar partido.' }
    },
    advice: { en: ['Figure out which conflict is actually worth having.', 'Name the disagreement directly instead of avoiding it.', 'Let useful friction sharpen this instead of stalling it.'], es: ['Averigua qué conflicto vale realmente la pena.', 'Nombra el desacuerdo directamente en lugar de evitarlo.', 'Deja que la fricción útil afine esto en vez de paralizarlo.'] },
    reflection: { en: ['Which conflict here is actually worth having?', 'What competing priority haven’t you named out loud yet?', 'What would resolve this faster than continuing to compete?'], es: ['¿Qué conflicto aquí vale realmente la pena?', '¿Qué prioridad encontrada todavía no has nombrado en voz alta?', '¿Qué resolvería esto más rápido que seguir compitiendo?'] }
  };

  CARDS['wands-6'] = {
    theme: { en: 'RECOGNITION', es: 'RECONOCIMIENTO' },
    archetype: { en: 'A win that other people can actually see', es: 'Una victoria que los demás pueden ver de verdad' },
    vocabulary: { en: ['victory', 'recognition', 'confidence', 'public success', 'validation', 'momentum'], es: ['victoria', 'reconocimiento', 'confianza', 'éxito público', 'validación', 'impulso'] },
    positive: { en: ['confidence earned through real, visible achievement', 'recognition that reflects genuine effort, not just image', 'momentum that comes from a public win', 'letting yourself be seen succeeding, not just quietly relieved'], es: ['una confianza ganada con un logro real y visible', 'un reconocimiento que refleja un esfuerzo genuino, no solo la imagen', 'un impulso que viene de una victoria pública', 'permitirte que te vean triunfar, no solo un alivio silencioso'] },
    shadow: { en: ['chasing recognition more than the actual accomplishment', 'confidence that depends entirely on others’ approval', 'a public win covering for private uncertainty', 'overestimating your position after one good result'], es: ['perseguir el reconocimiento más que el logro en sí', 'una confianza que depende por completo de la aprobación ajena', 'una victoria pública que tapa una inseguridad privada', 'sobrestimar tu posición después de un solo buen resultado'] },
    yesNo: 'YES',
    yesNoWhy: { en: 'The Six of Wands supports the choice with real momentum and visible success behind it — trust the confidence this has actually earned.', es: 'El Seis de Bastos respalda la elección que ya tiene impulso y éxito visible detrás; confía en la confianza que esto realmente ha ganado.' },
    domains: {
      career: { en: 'If you’ve genuinely earned recognition here, this card supports using that momentum for your next move — whether that’s leaving on a high note or leveraging it to negotiate.', es: 'Si has ganado de verdad reconocimiento aquí, esta carta respalda usar ese impulso para tu próximo paso, ya sea irte en un buen momento o aprovecharlo para negociar.' },
      relationship: { en: 'This card supports pursuing this with genuine confidence, especially if you’ve recently had a win that reminded you what you’re capable of. Let that confidence be real, not performed.', es: 'Esta carta respalda acercarte con una confianza genuina, sobre todo si recientemente has tenido una victoria que te recordó de lo que eres capaz. Que esa confianza sea real, no fingida.' },
      money: { en: 'This card favors building on a genuine financial win — momentum earned through real success is worth trusting more than a fresh, untested idea.', es: 'Esta carta favorece construir sobre una victoria financiera genuina; el impulso ganado con un éxito real vale la pena confiarlo más que una idea nueva sin probar.' },
      movement: { en: 'If a recent success has given you real confidence, this card supports carrying that momentum into a new place rather than starting over from uncertainty.', es: 'Si un éxito reciente te ha dado confianza real, esta carta respalda llevar ese impulso a un lugar nuevo en lugar de empezar de nuevo desde la incertidumbre.' },
      creative: { en: 'This card supports sharing the work publicly once it’s genuinely ready — recognition earned through real effort tends to build real momentum for what’s next.', es: 'Esta carta respalda compartir el trabajo públicamente cuando esté realmente listo; el reconocimiento ganado con esfuerzo real suele generar impulso para lo que viene.' },
      family: { en: 'This card can mean a genuine, visible win — a reconciliation, an achievement — that the whole family recognizes, worth acknowledging openly.', es: 'Esta carta puede significar una victoria genuina y visible (una reconciliación, un logro) que toda la familia reconoce, y que merece reconocerse abiertamente.' },
      growth: { en: 'This card supports trusting the confidence you’ve genuinely earned, rather than downplaying a real accomplishment out of habit.', es: 'Esta carta respalda confiar en la confianza que de verdad has ganado, en lugar de restarle importancia por costumbre a un logro real.' },
      general: { en: 'This card supports building on real, visible momentum — if you’ve genuinely earned some confidence recently, trust it here rather than starting from scratch.', es: 'Esta carta respalda construir sobre un impulso real y visible; si de verdad has ganado algo de confianza recientemente, confía en ella aquí en lugar de empezar de cero.' }
    },
    advice: { en: ['Trust the confidence you’ve genuinely earned.', 'Let real momentum carry this decision.', 'Acknowledge the win before moving to the next thing.'], es: ['Confía en la confianza que de verdad has ganado.', 'Deja que el impulso real lleve esta decisión.', 'Reconoce la victoria antes de pasar a lo siguiente.'] },
    reflection: { en: ['What recent win are you underestimating right now?', 'Where is your confidence earned, versus just hoped for?', 'What would you do with this decision if you trusted your own track record?'], es: ['¿Qué victoria reciente estás subestimando ahora mismo?', '¿Dónde tu confianza está ganada, y dónde solo esperada?', '¿Qué harías con esta decisión si confiaras en tu propio historial?'] }
  };

  CARDS['wands-7'] = {
    theme: { en: 'STANDING GROUND', es: 'MANTENER LA POSICIÓN' },
    archetype: { en: 'Holding a position while pressure pushes back', es: 'Sostener una posición mientras la presión empuja en contra' },
    vocabulary: { en: ['defense', 'perseverance', 'pressure', 'holding ground', 'conviction', 'resistance'], es: ['defensa', 'perseverancia', 'presión', 'mantener el terreno', 'convicción', 'resistencia'] },
    positive: { en: ['holding your position even while it’s being challenged', 'conviction that doesn’t need everyone’s agreement', 'perseverance that outlasts the pressure against it', 'defending something because you actually believe in it'], es: ['sostener tu posición aunque esté siendo cuestionada', 'una convicción que no necesita el acuerdo de todos', 'una perseverancia que dura más que la presión en contra', 'defender algo porque de verdad crees en ello'] },
    shadow: { en: ['defensiveness that’s stopped listening to any real challenge', 'exhausting yourself defending a position that’s stopped serving you', 'confusing stubbornness with conviction', 'fighting a battle that quietly changed shape without you noticing'], es: ['una actitud defensiva que ya no escucha ningún desafío real', 'agotarte defendiendo una posición que ya no te sirve', 'confundir la terquedad con la convicción', 'librar una batalla que en silencio cambió de forma sin que lo notaras'] },
    yesNo: 'YES',
    yesNoWhy: { en: 'The Seven of Wands supports holding your ground on this if the conviction behind it is genuine — the pressure against you isn’t proof you’re wrong.', es: 'El Siete de Bastos respalda mantener tu posición si la convicción detrás es genuina; la presión en contra no es prueba de que estés equivocado.' },
    domains: {
      career: { en: 'If you’re defending your position or value at work, this card supports holding your ground — but check the fight is still worth the energy it’s costing you.', es: 'Si estás defendiendo tu posición o tu valor en el trabajo, esta carta respalda mantener el terreno, pero comprueba que la pelea siga mereciendo la energía que te cuesta.' },
      relationship: { en: 'This card can mean pursuing this despite real pressure or doubt from others — trust your own conviction here, as long as it’s genuinely yours and not just stubbornness.', es: 'Esta carta puede significar seguir adelante pese a una presión o duda reales de los demás; confía en tu propia convicción aquí, siempre que sea de verdad tuya y no solo terquedad.' },
      money: { en: 'This card supports holding a financial position under pressure if your reasoning is genuinely sound — don’t fold simply because others are skeptical.', es: 'Esta carta respalda mantener una posición financiera bajo presión si tu razonamiento es realmente sólido; no cedas solo porque otros sean escépticos.' },
      movement: { en: 'If people around you are pushing back on this move, this card supports holding your ground — as long as you can genuinely explain why, not just resist for its own sake.', es: 'Si quienes te rodean se resisten a esta mudanza, esta carta respalda mantener tu posición, siempre que puedas explicar de verdad por qué, no solo resistirte por resistirte.' },
      creative: { en: 'This card supports defending your creative vision against pressure to change it — the resistance you’re facing doesn’t necessarily mean the vision is wrong.', es: 'Esta carta respalda defender tu visión creativa frente a la presión para cambiarla; la resistencia que enfrentas no significa necesariamente que la visión esté mal.' },
      family: { en: 'This card supports holding a boundary with family even under real pressure to abandon it — conviction here is worth more than temporary peace.', es: 'Esta carta respalda mantener un límite con la familia incluso bajo presión real para abandonarlo; la convicción aquí vale más que una paz temporal.' },
      growth: { en: 'This card asks whether you’re defending a genuine value, or just a position you’ve grown attached to out of pride. Growth means knowing the difference.', es: 'Esta carta pregunta si estás defendiendo un valor genuino, o solo una posición a la que te has apegado por orgullo. Crecer significa conocer la diferencia.' },
      general: { en: 'This card supports holding your position under pressure, as long as the conviction behind it is genuinely yours and not simply resistance to change.', es: 'Esta carta respalda mantener tu posición bajo presión, siempre que la convicción detrás sea realmente tuya y no simple resistencia al cambio.' }
    },
    advice: { en: ['Hold your ground if the conviction is genuinely yours.', 'Check the fight is still worth the energy it costs.', 'Defend the value, not just the position.'], es: ['Mantén tu posición si la convicción es de verdad tuya.', 'Comprueba que la pelea siga mereciendo la energía que cuesta.', 'Defiende el valor, no solo la posición.'] },
    reflection: { en: ['Is this conviction genuinely yours, or just resistance to change?', 'What’s this fight actually costing you, and is it still worth it?', 'What would you hold your ground on even if nobody agreed?'], es: ['¿Esta convicción es de verdad tuya, o solo resistencia al cambio?', '¿Qué te está costando en realidad esta pelea, y sigue valiendo la pena?', '¿En qué mantendrías tu posición aunque nadie estuviera de acuerdo?'] }
  };

  CARDS['wands-8'] = {
    theme: { en: 'FAST MOVEMENT', es: 'MOVIMIENTO RÁPIDO' },
    archetype: { en: 'Momentum that has already left the ground', es: 'Un impulso que ya ha despegado del suelo' },
    vocabulary: { en: ['speed', 'momentum', 'swift progress', 'alignment', 'quick decisions', 'forward motion'], es: ['velocidad', 'impulso', 'avance rápido', 'alineación', 'decisiones rápidas', 'movimiento hacia delante'] },
    positive: { en: ['events moving quickly because the groundwork is already done', 'trusting fast, clear decisions when the moment calls for them', 'alignment that lets things finally move without obstruction', 'momentum that rewards decisive action right now'], es: ['acontecimientos que avanzan rápido porque la base ya está hecha', 'confiar en decisiones rápidas y claras cuando el momento lo pide', 'una alineación que por fin deja avanzar las cosas sin obstáculos', 'un impulso que premia la acción decidida ahora mismo'] },
    shadow: { en: ['moving so fast that important details get skipped', 'confusing speed with actual progress', 'rushing a decision that genuinely needed more thought', 'scattering energy across too many things moving at once'], es: ['moverte tan rápido que se saltan detalles importantes', 'confundir la velocidad con el progreso real', 'apresurar una decisión que de verdad necesitaba más reflexión', 'dispersar la energía entre demasiadas cosas moviéndose a la vez'] },
    yesNo: 'YES',
    yesNoWhy: { en: 'The Eight of Wands favors quick, decisive action once the groundwork is already in place — this is rarely a card that supports more waiting.', es: 'El Ocho de Bastos favorece la acción rápida y decidida una vez que la base ya está lista; rara vez es una carta que respalda esperar más.' },
    domains: {
      career: { en: 'This card suggests events here may be moving faster than expected — an offer, a decision window closing soon. Trust a quick, clear decision over more deliberation.', es: 'Esta carta sugiere que aquí los acontecimientos pueden estar moviéndose más rápido de lo esperado: una oferta, una ventana de decisión que se cierra pronto. Confía en una decisión rápida y clara antes que en más deliberación.' },
      relationship: { en: 'This card favors acting quickly if the moment is genuinely right — hesitating too long here can cost momentum that won’t easily return.', es: 'Esta carta favorece actuar con rapidez si el momento es realmente el adecuado; dudar demasiado aquí puede costar un impulso que no volverá con facilidad.' },
      money: { en: 'This card supports acting quickly on a financial opportunity that’s genuinely well-prepared — the groundwork is done; the risk now is hesitation, not haste.', es: 'Esta carta respalda actuar con rapidez sobre una oportunidad financiera que está realmente bien preparada; la base ya está hecha, el riesgo ahora es la duda, no la prisa.' },
      movement: { en: 'This card favors moving quickly once the decision is genuinely made — things may fall into place faster than you expect once you commit.', es: 'Esta carta favorece moverte con rapidez una vez que la decisión ya está tomada de verdad; las cosas pueden encajar más rápido de lo esperado en cuanto te comprometes.' },
      creative: { en: 'This card supports working quickly while the inspiration is flowing freely — the momentum right now is real, and it won’t necessarily wait for a better moment.', es: 'Esta carta respalda trabajar con rapidez mientras la inspiración fluye con libertad; el impulso de ahora es real, y no necesariamente esperará a un momento mejor.' },
      family: { en: 'This card can mean a family situation is moving fast and needs a timely response, rather than a long, deliberated one that arrives too late to matter.', es: 'Esta carta puede significar que una situación familiar avanza rápido y necesita una respuesta oportuna, no una larga y deliberada que llegue demasiado tarde para importar.' },
      growth: { en: 'This card supports acting on a clear internal decision quickly, rather than second-guessing momentum that’s already genuinely aligned.', es: 'Esta carta respalda actuar con rapidez sobre una decisión interna clara, en lugar de dudar de un impulso que ya está realmente alineado.' },
      general: { en: 'This card favors quick, decisive movement — the groundwork for this decision is likely already in place, and the real risk now is hesitation.', es: 'Esta carta favorece un movimiento rápido y decidido; la base para esta decisión probablemente ya esté lista, y el riesgo real ahora es la duda.' }
    },
    advice: { en: ['Act quickly once the decision is genuinely clear.', 'Don’t let hesitation cost real momentum.', 'Trust that the groundwork is already done.'], es: ['Actúa con rapidez en cuanto la decisión sea realmente clara.', 'No dejes que la duda cueste un impulso real.', 'Confía en que la base ya está hecha.'] },
    reflection: { en: ['What’s moving faster here than you’ve given it credit for?', 'What decision have you already made that you’re still delaying?', 'What would you do right now if hesitation weren’t an option?'], es: ['¿Qué se mueve aquí más rápido de lo que has reconocido?', '¿Qué decisión ya has tomado y todavía sigues postergando?', '¿Qué harías ahora mismo si dudar no fuera una opción?'] }
  };

  CARDS['wands-9'] = {
    theme: { en: 'GUARDED RESILIENCE', es: 'RESISTENCIA CAUTELOSA' },
    archetype: { en: 'Still standing, even while tired and wary', es: 'Todavía en pie, aunque cansado y receloso' },
    vocabulary: { en: ['resilience', 'persistence', 'vigilance', 'fatigue', 'guardedness', 'nearly there'], es: ['resistencia', 'persistencia', 'vigilancia', 'fatiga', 'cautela', 'casi ahí'] },
    positive: { en: ['resilience that’s carried you further than you give it credit for', 'a well-earned caution that isn’t the same as giving up', 'persisting through fatigue because the goal is genuinely close', 'strength that comes from having survived difficulty before'], es: ['una resistencia que te ha llevado más lejos de lo que reconoces', 'una cautela bien ganada que no es lo mismo que rendirse', 'perseverar pese al cansancio porque la meta está realmente cerca', 'una fuerza que nace de haber sobrevivido antes a la dificultad'] },
    shadow: { en: ['being so guarded you can’t recognize genuine safety when it arrives', 'exhaustion mistaken for a sign to stop entirely', 'fighting a battle that already ended, out of old habit', 'wariness that keeps you from accepting help you actually need'], es: ['estar tan a la defensiva que no reconoces la seguridad real cuando llega', 'confundir el agotamiento con una señal para detenerte del todo', 'librar una batalla que ya terminó, por pura costumbre', 'una cautela que te impide aceptar la ayuda que realmente necesitas'] },
    yesNo: 'MAYBE',
    yesNoWhy: { en: 'The Nine of Wands asks whether you have one more push in you for something genuinely close, or whether the wariness is trying to tell you something important.', es: 'El Nueve de Bastos pregunta si te queda un último empujón para algo realmente cercano, o si la cautela intenta decirte algo importante.' },
    domains: {
      career: { en: 'If you’re exhausted but genuinely close to something worthwhile here, this card supports one more push — but check that your guardedness isn’t masking real burnout.', es: 'Si estás agotado pero realmente cerca de algo que vale la pena aquí, esta carta respalda un último empujón, pero comprueba que tu cautela no esté enmascarando un agotamiento real.' },
      relationship: { en: 'This card can describe pursuing something while guarded from past disappointment — the wariness is understandable, but check it isn’t blocking something genuinely good.', es: 'Esta carta puede describir perseguir algo estando a la defensiva por una decepción pasada; la cautela es comprensible, pero comprueba que no esté bloqueando algo genuinamente bueno.' },
      money: { en: 'This card supports persisting through a difficult financial stretch if the goal is genuinely close — but rest is also legitimate if the fatigue is real.', es: 'Esta carta respalda perseverar en una etapa financiera difícil si la meta está realmente cerca, pero descansar también es legítimo si el cansancio es real.' },
      movement: { en: 'If you’re wary about this move because of a past experience elsewhere, this card asks whether that caution is still relevant here, or an old guard that no longer applies.', es: 'Si estás receloso ante esta mudanza por una experiencia pasada en otro lugar, esta carta pregunta si esa cautela sigue siendo relevante aquí, o es una vieja guardia que ya no aplica.' },
      creative: { en: 'This card supports one more sustained push on a project you’re close to finishing, even while tired — the resilience you’ve already shown is real.', es: 'Esta carta respalda un último empujón sostenido en un proyecto que estás por terminar, aunque estés cansado; la resistencia que ya has demostrado es real.' },
      family: { en: 'This card can describe staying guarded in a family relationship because of past hurt — understandable, but worth checking against what’s actually happening now.', es: 'Esta carta puede describir mantenerte a la defensiva en una relación familiar por un daño pasado; es comprensible, pero merece comprobarse frente a lo que en realidad ocurre ahora.' },
      growth: { en: 'This card asks what old wariness you’re still carrying that may no longer be protecting you from anything real.', es: 'Esta carta pregunta qué vieja cautela sigues cargando que quizás ya no te proteja de nada real.' },
      general: { en: 'This card describes real resilience mixed with real fatigue — the honest question is whether one more push makes sense, or whether rest is what’s actually needed.', es: 'Esta carta describe una resistencia real mezclada con un cansancio real; la pregunta honesta es si tiene sentido un último empujón, o si lo que realmente hace falta es descansar.' }
    },
    advice: { en: ['Check whether the wariness still applies here.', 'Rest is legitimate if the fatigue is real.', 'Give it one more push only if the goal is genuinely close.'], es: ['Comprueba si la cautela sigue aplicando aquí.', 'Descansar es legítimo si el cansancio es real.', 'Dale un último empujón solo si la meta está realmente cerca.'] },
    reflection: { en: ['What old guard are you still carrying that may not apply here?', 'How close are you actually to the goal, honestly?', 'What would it look like to accept help instead of holding the line alone?'], es: ['¿Qué vieja guardia sigues cargando que quizás no aplique aquí?', '¿Qué tan cerca estás en realidad de la meta, con honestidad?', '¿Cómo sería aceptar ayuda en lugar de sostener la línea a solas?'] }
  };

  CARDS['wands-10'] = {
    theme: { en: 'OVERLOAD', es: 'SOBRECARGA' },
    archetype: { en: 'Carrying more than was ever meant for one person', es: 'Cargar más de lo que nunca estuvo pensado para una sola persona' },
    vocabulary: { en: ['burden', 'overload', 'responsibility', 'exhaustion', 'obligation', 'nearing the end'], es: ['carga', 'sobrecarga', 'responsabilidad', 'agotamiento', 'obligación', 'cerca del final'] },
    positive: { en: ['carrying a burden all the way to a genuine finish line', 'responsibility taken on because you actually chose it', 'recognizing that the load is heavy because the goal matters', 'nearly done, even if the last stretch is the hardest'], es: ['cargar un peso hasta una meta genuina', 'una responsabilidad asumida porque de verdad la elegiste', 'reconocer que la carga es pesada porque la meta importa', 'estar casi al final, aunque el último tramo sea el más duro'] },
    shadow: { en: ['carrying weight that was never actually yours to hold', 'burnout mistaken for simply being dedicated', 'refusing to delegate or set down any part of the load', 'so overloaded you can’t see how close the finish line actually is'], es: ['cargar un peso que en realidad nunca fue tuyo', 'confundir el agotamiento con simple dedicación', 'negarte a delegar o soltar cualquier parte de la carga', 'estar tan sobrecargado que no ves lo cerca que está la meta'] },
    yesNo: 'YES',
    yesNoWhy: { en: 'The Ten of Wands usually supports setting something down — the weight has grown past what this situation was ever meant to carry.', es: 'El Diez de Bastos suele respaldar soltar algo; el peso ha crecido más allá de lo que esta situación estaba destinada a cargar.' },
    domains: {
      career: { en: 'This card often means the workload here has grown well beyond what’s sustainable. Leaving — or at minimum renegotiating what you carry — is usually the supported move.', es: 'Esta carta suele significar que la carga de trabajo aquí ha crecido mucho más allá de lo sostenible. Irte, o al menos renegociar lo que cargas, suele ser el movimiento respaldado.' },
      relationship: { en: 'Check whether pursuing this would add to a load you’re already overextended with. This card favors clearing some weight before taking on something new.', es: 'Comprueba si perseguir esto añadiría carga a algo con lo que ya estás sobrecargado. Esta carta favorece soltar algo de peso antes de asumir algo nuevo.' },
      money: { en: 'This card can describe a financial burden that’s grown unsustainable — the supported move is usually restructuring or reducing the load, not simply enduring it longer.', es: 'Esta carta puede describir una carga financiera que ha crecido de forma insostenible; el movimiento respaldado suele ser reestructurar o reducir la carga, no simplemente aguantarla más.' },
      movement: { en: 'This card can support a move specifically because it lets you set down a burden you’ve been carrying somewhere else. Leaving to lighten the load is a valid reason.', es: 'Esta carta puede respaldar una mudanza precisamente porque te permite soltar una carga que llevas en otro lugar. Irte para aligerar el peso es una razón válida.' },
      creative: { en: 'This card can mean a project has become heavier than it needs to be — check whether some part of it can be set down, simplified, or shared.', es: 'Esta carta puede significar que un proyecto se ha vuelto más pesado de lo necesario; comprueba si alguna parte puede soltarse, simplificarse o compartirse.' },
      family: { en: 'This card often marks carrying more family responsibility than is sustainable. Setting some of it down, or asking others to share it, is usually the supported move.', es: 'Esta carta suele marcar cargar con más responsabilidad familiar de la que es sostenible. Soltar parte de ella, o pedir a otros que la compartan, suele ser el movimiento respaldado.' },
      growth: { en: 'This card asks what weight you’re still carrying that was never actually required of you — growth here means setting some of it down.', es: 'Esta carta pregunta qué peso sigues cargando que en realidad nunca se te exigió; crecer aquí significa soltar parte de él.' },
      general: { en: 'This card usually supports lightening a load that’s grown unsustainable, rather than continuing to carry it out of obligation alone.', es: 'Esta carta suele respaldar aligerar una carga que se ha vuelto insostenible, en lugar de seguir cargándola solo por obligación.' }
    },
    advice: { en: ['Set down what was never actually yours to carry.', 'Ask what part of this load can be shared or dropped.', 'Don’t mistake exhaustion for simple dedication.'], es: ['Suelta lo que nunca fue realmente tuyo de cargar.', 'Pregúntate qué parte de esta carga se puede compartir o soltar.', 'No confundas el agotamiento con simple dedicación.'] },
    reflection: { en: ['What weight have you been carrying that was never actually required of you?', 'How close is the actual finish line, if you look honestly?', 'What would you set down first if you could set down anything?'], es: ['¿Qué peso has estado cargando que en realidad nunca se te exigió?', '¿Qué tan cerca está la meta real, si miras con honestidad?', '¿Qué soltarías primero si pudieras soltar cualquier cosa?'] }
  };

  CARDS['wands-page'] = {
    theme: { en: 'CURIOUS SPARK', es: 'CHISPA CURIOSA' },
    archetype: { en: 'Enthusiasm before it has proven anything yet', es: 'Entusiasmo antes de haber demostrado nada todavía' },
    vocabulary: { en: ['curiosity', 'enthusiasm', 'exploration', 'new idea', 'eagerness', 'discovery'], es: ['curiosidad', 'entusiasmo', 'exploración', 'idea nueva', 'ganas', 'descubrimiento'] },
    positive: { en: ['genuine excitement about a new direction, worth exploring', 'curiosity that hasn’t yet been dulled by caution', 'a willingness to try something before knowing if you’re good at it', 'eagerness that could become real skill with practice'], es: ['un entusiasmo genuino por una dirección nueva, que vale la pena explorar', 'una curiosidad que la cautela todavía no ha apagado', 'la disposición a intentar algo antes de saber si se te da bien', 'unas ganas que podrían convertirse en habilidad real con práctica'] },
    shadow: { en: ['enthusiasm with no experience yet to back it up', 'chasing every new interest without following any of them through', 'mistaking excitement for actual readiness', 'all talk about a plan that hasn’t actually started'], es: ['entusiasmo sin experiencia todavía que lo respalde', 'perseguir cada nuevo interés sin llevar ninguno hasta el final', 'confundir la emoción con estar realmente preparado', 'hablar mucho de un plan que en realidad no ha empezado'] },
    yesNo: 'MAYBE',
    yesNoWhy: { en: 'The Page of Wands supports exploring this genuinely, but it’s early — trust the enthusiasm as a starting point, not yet as proof of anything.', es: 'El Paje de Bastos respalda explorar esto de verdad, pero es pronto; confía en el entusiasmo como punto de partida, todavía no como prueba de nada.' },
    domains: {
      career: { en: 'This card suggests genuine curiosity about a new path, worth exploring — but treat it as an early experiment, not yet a fully proven direction.', es: 'Esta carta sugiere una curiosidad genuina por un nuevo camino, que vale la pena explorar, pero trátalo como un experimento temprano, no todavía como una dirección comprobada.' },
      relationship: { en: 'This card describes fresh excitement worth exploring honestly — enjoy the enthusiasm without needing it to already mean more than it does yet.', es: 'Esta carta describe un entusiasmo nuevo que vale la pena explorar con honestidad: disfruta las ganas sin necesitar que ya signifiquen más de lo que significan por ahora.' },
      money: { en: 'A new financial idea here is genuinely exciting but unproven — explore it at small scale before treating the enthusiasm as a full plan.', es: 'Una idea financiera nueva aquí es genuinamente emocionante pero no está comprobada; explórala a pequeña escala antes de tratar el entusiasmo como un plan completo.' },
      movement: { en: 'This card favors genuine curiosity about a new place — go explore it directly rather than deciding purely from the excitement of the idea.', es: 'Esta carta favorece una curiosidad genuina por un lugar nuevo: ve a explorarlo directamente en lugar de decidir solo desde la emoción de la idea.' },
      creative: { en: 'This card strongly favors trying a new creative direction, even without proven skill yet — enthusiasm is a legitimate reason to start.', es: 'Esta carta favorece con fuerza probar una nueva dirección creativa, aunque todavía no haya habilidad comprobada; el entusiasmo es una razón legítima para empezar.' },
      family: { en: 'This card can mean a fresh, hopeful development in a family relationship — early, but genuinely worth nurturing rather than dismissing as premature.', es: 'Esta carta puede significar un desarrollo nuevo y esperanzador en una relación familiar: temprano, pero que vale la pena cuidar y no descartar como prematuro.' },
      growth: { en: 'This card supports staying curious about who you might become, without needing that curiosity to already have a finished plan behind it.', es: 'Esta carta respalda mantenerte curioso sobre en quién podrías convertirte, sin necesitar que esa curiosidad ya tenga un plan terminado detrás.' },
      general: { en: 'This card describes early-stage enthusiasm worth exploring — genuine, but not yet proven. Treat it as a starting point rather than a finished answer.', es: 'Esta carta describe un entusiasmo en etapa temprana que vale la pena explorar: genuino, pero todavía sin comprobar. Trátalo como un punto de partida y no como una respuesta terminada.' }
    },
    advice: { en: ['Explore this as an early experiment, not a proven plan.', 'Let the enthusiasm be a starting point, not a verdict.', 'Follow through on one interest instead of chasing several.'], es: ['Explora esto como un experimento temprano, no como un plan comprobado.', 'Deja que el entusiasmo sea un punto de partida, no un veredicto.', 'Sigue con un interés en lugar de perseguir varios.'] },
    reflection: { en: ['What are you genuinely curious about that you haven’t explored yet?', 'Does this excitement need proof yet, or just room to grow?', 'What’s one small way to test this before treating it as settled?'], es: ['¿Qué te da curiosidad de verdad y todavía no has explorado?', '¿Este entusiasmo necesita ya pruebas, o solo espacio para crecer?', '¿Cuál es una forma pequeña de probarlo antes de darlo por resuelto?'] }
  };

  CARDS['wands-knight'] = {
    theme: { en: 'BOLD PURSUIT', es: 'BÚSQUEDA AUDAZ' },
    archetype: { en: 'Passion that moves before it’s finished thinking', es: 'La pasión que se mueve antes de terminar de pensar' },
    vocabulary: { en: ['boldness', 'impulse', 'adventure', 'haste', 'passion', 'daring'], es: ['audacia', 'impulso', 'aventura', 'prisa', 'pasión', 'atrevimiento'] },
    positive: { en: ['bold action taken while the moment is actually right', 'passion strong enough to override unnecessary hesitation', 'adventure chosen deliberately, not stumbled into', 'confidence to move fast when speed genuinely matters'], es: ['una acción audaz tomada cuando el momento realmente lo pide', 'una pasión lo bastante fuerte como para superar una duda innecesaria', 'una aventura elegida a propósito, no encontrada por accidente', 'la confianza de moverse rápido cuando la velocidad de verdad importa'] },
    shadow: { en: ['acting on impulse without checking if the timing is actually right', 'recklessness dressed up as passion', 'charging ahead and leaving important details behind', 'restlessness mistaken for a genuine calling'], es: ['actuar por impulso sin comprobar si el momento es realmente el adecuado', 'la imprudencia disfrazada de pasión', 'avanzar a toda velocidad dejando atrás detalles importantes', 'confundir la inquietud con una vocación genuina'] },
    yesNo: 'MAYBE',
    yesNoWhy: { en: 'The Knight of Wands supports bold action, but only once you’ve checked that the passion is genuine and the timing isn’t just impatience.', es: 'El Caballero de Bastos respalda la acción audaz, pero solo una vez que has comprobado que la pasión es genuina y que el momento no es solo impaciencia.' },
    domains: {
      career: { en: 'This card can support a bold, quick career move — but check the passion behind it is genuine excitement, not just restlessness with the current situation.', es: 'Esta carta puede respaldar un movimiento profesional audaz y rápido, pero comprueba que la pasión detrás sea un entusiasmo genuino, y no solo inquietud con la situación actual.' },
      relationship: { en: 'This card favors bold, direct pursuit — saying what you feel, making the move — as long as it comes from genuine passion rather than the thrill of the chase itself.', es: 'Esta carta favorece una búsqueda audaz y directa (decir lo que sientes, dar el paso), siempre que venga de una pasión genuina y no solo de la emoción de la persecución en sí.' },
      money: { en: 'This card warns against a hasty financial move made purely on excitement — check the numbers hold up as well as the enthusiasm does.', es: 'Esta carta advierte contra un movimiento financiero apresurado hecho solo por entusiasmo; comprueba que las cifras se sostengan tan bien como las ganas.' },
      movement: { en: 'This card favors a bold, adventurous move — but check the timing genuinely fits your life, rather than being driven purely by restlessness.', es: 'Esta carta favorece una mudanza audaz y aventurera, pero comprueba que el momento encaje de verdad con tu vida, y no esté impulsado solo por la inquietud.' },
      creative: { en: 'This card favors diving into a passionate creative project quickly — the energy is real, just make sure it’s matched with enough follow-through to finish.', es: 'Esta carta favorece lanzarse rápido a un proyecto creativo apasionado; la energía es real, solo asegúrate de que vaya acompañada de suficiente constancia para terminarlo.' },
      family: { en: 'This card can describe an impulsive move regarding family — a bold visit, a sudden confrontation. Check the timing is right, not just the urge.', es: 'Esta carta puede describir un movimiento impulsivo respecto a la familia: una visita audaz, una confrontación repentina. Comprueba que el momento sea el correcto, y no solo el impulso.' },
      growth: { en: 'This card asks whether a bold new direction is a genuine calling or just restlessness looking for somewhere to go. The energy is real either way — the aim matters.', es: 'Esta carta pregunta si una nueva dirección audaz es una vocación genuina o solo inquietud buscando adónde ir. La energía es real de todas formas; lo que importa es el rumbo.' },
      general: { en: 'This card favors bold, quick action — but check the passion driving it is genuine, not just impatience with staying still.', es: 'Esta carta favorece una acción audaz y rápida, pero comprueba que la pasión que la impulsa sea genuina, y no solo impaciencia por quedarte quieto.' }
    },
    advice: { en: ['Check the passion is genuine, not just restlessness.', 'Move boldly once the timing actually fits.', 'Match the energy with enough follow-through to finish.'], es: ['Comprueba que la pasión sea genuina, no solo inquietud.', 'Muévete con audacia cuando el momento realmente encaje.', 'Acompaña la energía con suficiente constancia para terminar.'] },
    reflection: { en: ['Is this passion, or restlessness looking for somewhere to go?', 'What would you do if you trusted the timing was actually right?', 'What detail might the speed of this be leaving behind?'], es: ['¿Esto es pasión, o inquietud buscando adónde ir?', '¿Qué harías si confiaras en que el momento es realmente el correcto?', '¿Qué detalle podría estar dejando atrás la velocidad de esto?'] }
  };

  CARDS['wands-queen'] = {
    theme: { en: 'MAGNETIC CONFIDENCE', es: 'CONFIANZA MAGNÉTICA' },
    archetype: { en: 'Warmth that doesn’t apologize for taking up space', es: 'Una calidez que no pide disculpas por ocupar espacio' },
    vocabulary: { en: ['confidence', 'independence', 'warmth', 'magnetism', 'courage', 'self-possession'], es: ['confianza', 'independencia', 'calidez', 'magnetismo', 'valor', 'seguridad en sí misma'] },
    positive: { en: ['confidence that draws people in without needing to perform it', 'independence that doesn’t require anyone’s permission', 'warmth combined with real personal courage', 'knowing your own worth without needing constant validation'], es: ['una confianza que atrae sin necesidad de actuarla', 'una independencia que no necesita el permiso de nadie', 'una calidez combinada con un valor personal real', 'conocer tu propio valor sin necesitar validación constante'] },
    shadow: { en: ['confidence that tips into needing to dominate the room', 'independence used to avoid genuine vulnerability', 'warmth that becomes performance when it’s not actually felt', 'insecurity masked so well it fools even you'], es: ['una confianza que se convierte en necesidad de dominar la sala', 'una independencia usada para evitar la vulnerabilidad genuina', 'una calidez que se vuelve actuación cuando no se siente de verdad', 'una inseguridad tan bien disimulada que hasta te engaña a ti misma'] },
    yesNo: 'YES',
    yesNoWhy: { en: 'The Queen of Wands supports acting from genuine self-possession — trust the confidence you actually have, not the version you think you should perform.', es: 'La Reina de Bastos respalda actuar desde una seguridad genuina en ti misma; confía en la confianza que de verdad tienes, no en la versión que crees que deberías fingir.' },
    domains: {
      career: { en: 'This card supports negotiating or leaving from a place of genuine self-worth, rather than fear. You likely have more standing here than you’ve been using.', es: 'Esta carta respalda negociar o irte desde un lugar de valor propio genuino, no desde el miedo. Probablemente tengas aquí más margen del que has estado usando.' },
      relationship: { en: 'This card favors pursuing this with warm, genuine confidence rather than performing a version of yourself you think will be more appealing.', es: 'Esta carta favorece acercarte con una confianza cálida y genuina en lugar de actuar una versión de ti que crees que resultará más atractiva.' },
      money: { en: 'This card supports a financially independent decision, made from real self-trust rather than needing anyone else’s approval first.', es: 'Esta carta respalda una decisión financiera independiente, tomada desde una confianza real en ti misma y no esperando primero la aprobación de nadie más.' },
      movement: { en: 'This card supports a bold, independent move made because you genuinely want it, not because you’re seeking anyone’s approval for the decision.', es: 'Esta carta respalda una mudanza audaz e independiente hecha porque de verdad la quieres, no porque busques la aprobación de nadie para la decisión.' },
      creative: { en: 'This card supports sharing bold creative work with genuine confidence — let your actual voice show instead of a more cautious, watered-down version.', es: 'Esta carta respalda compartir un trabajo creativo audaz con confianza genuina: deja ver tu voz real en lugar de una versión más cautelosa y diluida.' },
      family: { en: 'This card supports setting a warm but firm boundary with family, from genuine self-possession rather than guilt or fear of disapproval.', es: 'Esta carta respalda poner un límite cálido pero firme con la familia, desde una seguridad genuina y no desde la culpa o el miedo a la desaprobación.' },
      growth: { en: 'This card asks you to trust your own worth without needing outside validation to confirm it — that confidence is already genuinely yours.', es: 'Esta carta te pide confiar en tu propio valor sin necesitar una validación externa que lo confirme; esa confianza ya es genuinamente tuya.' },
      general: { en: 'This card supports acting from genuine self-confidence rather than seeking approval first — you likely already have more standing here than you’ve used.', es: 'Esta carta respalda actuar desde una confianza genuina en ti misma, en lugar de buscar primero la aprobación; probablemente ya tengas aquí más margen del que has usado.' }
    },
    advice: { en: ['Act from genuine self-worth, not performance.', 'Trust the confidence you actually have.', 'Set the boundary warmly but firmly.'], es: ['Actúa desde un valor propio genuino, no desde la actuación.', 'Confía en la confianza que de verdad tienes.', 'Pon el límite con calidez, pero con firmeza.'] },
    reflection: { en: ['Where are you performing confidence instead of trusting the real thing?', 'What would you do here if you didn’t need anyone’s approval?', 'What boundary have you been too polite to set?'], es: ['¿Dónde estás actuando la confianza en lugar de confiar en la real?', '¿Qué harías aquí si no necesitaras la aprobación de nadie?', '¿Qué límite has sido demasiado educada para poner?'] }
  };

  CARDS['wands-king'] = {
    theme: { en: 'VISIONARY LEADERSHIP', es: 'LIDERAZGO VISIONARIO' },
    archetype: { en: 'Ambition mature enough to build something that lasts', es: 'Una ambición lo bastante madura como para construir algo duradero' },
    vocabulary: { en: ['vision', 'leadership', 'ambition', 'authority', 'entrepreneurship', 'command'], es: ['visión', 'liderazgo', 'ambición', 'autoridad', 'espíritu emprendedor', 'mando'] },
    positive: { en: ['bold vision paired with the discipline to actually execute it', 'natural authority that inspires rather than demands', 'entrepreneurial confidence grounded in real experience', 'leadership that takes responsibility for the outcome'], es: ['una visión audaz combinada con la disciplina para ejecutarla de verdad', 'una autoridad natural que inspira en lugar de exigir', 'una confianza emprendedora fundada en experiencia real', 'un liderazgo que asume la responsabilidad del resultado'] },
    shadow: { en: ['ambition that runs over other people’s needs to get there', 'authority used to control rather than to build', 'vision so grand it never actually gets executed', 'confusing being in charge with actually being right'], es: ['una ambición que pasa por encima de las necesidades ajenas para llegar', 'una autoridad usada para controlar en lugar de construir', 'una visión tan grande que nunca llega a ejecutarse', 'confundir estar al mando con tener siempre la razón'] },
    yesNo: 'YES',
    yesNoWhy: { en: 'The King of Wands supports bold, ambitious action backed by real experience and a workable plan — this card rewards leadership, not just enthusiasm.', es: 'El Rey de Bastos respalda la acción audaz y ambiciosa respaldada por experiencia real y un plan viable; esta carta premia el liderazgo, no solo el entusiasmo.' },
    domains: {
      career: { en: 'This card supports a bold career move if you have the experience to back it — leaving to build something of your own, or take on real leadership, fits this energy well.', es: 'Esta carta respalda un movimiento profesional audaz si tienes la experiencia para respaldarlo: irte para construir algo propio, o asumir un liderazgo real, encaja bien con esta energía.' },
      relationship: { en: 'This card favors pursuing this with confident, direct clarity about what you want — leadership here looks like honesty, not control over the outcome.', es: 'Esta carta favorece acercarte con una claridad segura y directa sobre lo que quieres; el liderazgo aquí se parece a la honestidad, no al control sobre el resultado.' },
      money: { en: 'This card supports a bold, ambitious financial move if it’s backed by real experience and a workable plan — vision alone isn’t enough here, execution matters.', es: 'Esta carta respalda un movimiento financiero audaz y ambicioso si está respaldado por experiencia real y un plan viable; aquí la visión sola no basta, la ejecución importa.' },
      movement: { en: 'This card supports a bold move made to build something ambitious — a business, a new chapter of leadership — rather than simply a change of scenery.', es: 'Esta carta respalda una mudanza audaz hecha para construir algo ambicioso (un negocio, un nuevo capítulo de liderazgo), y no simplemente un cambio de paisaje.' },
      creative: { en: 'This card supports treating a creative project with real ambition and leadership — building it into something substantial, not just a hobby kept small out of caution.', es: 'Esta carta respalda tratar un proyecto creativo con una ambición y un liderazgo reales: convertirlo en algo sustancial, y no un pasatiempo mantenido pequeño por cautela.' },
      family: { en: 'This card can mean stepping into genuine leadership within a family situation — taking responsibility for an outcome rather than waiting for someone else to.', es: 'Esta carta puede significar asumir un liderazgo genuino dentro de una situación familiar: hacerse responsable de un resultado en lugar de esperar a que otro lo haga.' },
      growth: { en: 'This card asks whether you’re ready to take real ownership of an ambitious version of your life, rather than waiting for permission to lead it.', es: 'Esta carta pregunta si estás listo para asumir de verdad una versión ambiciosa de tu vida, en lugar de esperar permiso para liderarla.' },
      general: { en: 'This card supports bold, ambitious action backed by genuine experience and a real plan — vision matters here, but so does the discipline to execute it.', es: 'Esta carta respalda una acción audaz y ambiciosa respaldada por experiencia genuina y un plan real; aquí la visión importa, pero también la disciplina para ejecutarla.' }
    },
    advice: { en: ['Back the ambition with a real, workable plan.', 'Lead by taking responsibility for the outcome.', 'Let vision and execution carry equal weight.'], es: ['Respalda la ambición con un plan real y viable.', 'Lidera asumiendo la responsabilidad del resultado.', 'Deja que la visión y la ejecución pesen lo mismo.'] },
    reflection: { en: ['What ambitious version of this are you ready to actually build?', 'Where are you waiting for permission you don’t actually need?', 'What would leadership, not just control, look like here?'], es: ['¿Qué versión ambiciosa de esto estás listo para construir de verdad?', '¿Dónde esperas un permiso que en realidad no necesitas?', '¿Cómo se vería aquí el liderazgo, y no solo el control?'] }
  };

  // ---- SWORDS (air: mind, truth, conflict, communication) --------------------

  CARDS['swords-1'] = {
    theme: { en: 'BREAKTHROUGH', es: 'AVANCE' },
    archetype: { en: 'A single clear thought cutting through the noise', es: 'Un pensamiento claro que corta el ruido' },
    vocabulary: { en: ['clarity', 'truth', 'breakthrough', 'insight', 'decisiveness', 'a clean cut'], es: ['claridad', 'verdad', 'avance', 'perspicacia', 'decisión', 'un corte limpio'] },
    positive: { en: ['a sudden clarity that cuts through confusion', 'the truth arriving even if it’s inconvenient', 'a decisive insight worth acting on', 'seeing a situation exactly as it is, without softening'], es: ['una claridad repentina que corta la confusión', 'la verdad llegando aunque sea inconveniente', 'una intuición decisiva que vale la pena seguir', 'ver una situación exactamente como es, sin suavizarla'] },
    shadow: { en: ['clarity used as a weapon rather than information', 'a harsh truth delivered without any care', 'overthinking until the original insight gets buried', 'certainty that arrived too fast to actually be tested'], es: ['la claridad usada como arma y no como información', 'una verdad dura entregada sin ningún cuidado', 'pensar tanto que la intuición original queda enterrada', 'una certeza que llegó demasiado rápido como para probarse'] },
    yesNo: 'YES',
    yesNoWhy: { en: 'The Ace of Swords supports acting on a clear, honest insight — the truth here is more available than it might feel.', es: 'El As de Espadas respalda actuar sobre una intuición clara y honesta; la verdad aquí está más disponible de lo que parece.' },
    domains: {
      career: { en: 'This card suggests you already have real clarity about this job situation — the honest read cutting through the noise of doubt, obligation and other people’s opinions.', es: 'Esta carta sugiere que ya tienes una claridad real sobre esta situación laboral: la lectura honesta que corta el ruido de la duda, la obligación y las opiniones ajenas.' },
      relationship: { en: 'This card favors seeing this situation with honest clarity rather than through hope or fear — trust the clean, uncomfortable truth if that’s what’s actually there.', es: 'Esta carta favorece ver esta situación con una claridad honesta y no a través de la esperanza o el miedo; confía en la verdad limpia, aunque sea incómoda, si es lo que realmente hay.' },
      money: { en: 'A clear-headed financial decision, based on an honest read of the numbers rather than wishful thinking, is what this card supports.', es: 'Esta carta respalda una decisión financiera clara, basada en una lectura honesta de las cifras y no en el pensamiento ilusorio.' },
      movement: { en: 'This card supports a decision made from genuine clarity about what you actually need — cutting through the noise of everyone else’s opinion about the move.', es: 'Esta carta respalda una decisión tomada desde una claridad genuina sobre lo que realmente necesitas, cortando el ruido de la opinión ajena sobre la mudanza.' },
      creative: { en: 'This card can mean a sudden, sharp creative insight worth acting on immediately — write it down before the clarity fades back into the noise.', es: 'Esta carta puede significar una intuición creativa repentina y aguda que vale la pena seguir de inmediato: anótala antes de que la claridad se pierda otra vez en el ruido.' },
      family: { en: 'This card favors a clear, honest conversation about a family truth that’s been avoided — clarity here, even if uncomfortable, tends to help more than more silence.', es: 'Esta carta favorece una conversación clara y honesta sobre una verdad familiar que se ha evitado; la claridad aquí, aunque incómoda, suele ayudar más que otro silencio.' },
      growth: { en: 'This card supports trusting a clear insight about yourself, even if it’s uncomfortable — the clarity is more trustworthy than the discomfort makes it seem.', es: 'Esta carta respalda confiar en una intuición clara sobre ti mismo, aunque sea incómoda; la claridad es más fiable de lo que la incomodidad hace parecer.' },
      general: { en: 'This card suggests the honest, clear answer is more available to you than the confusion around this situation would suggest. Trust the clean read.', es: 'Esta carta sugiere que la respuesta honesta y clara está más a tu alcance de lo que la confusión alrededor de esta situación sugiere. Confía en la lectura limpia.' }
    },
    advice: { en: ['Trust the clear read, even if it’s uncomfortable.', 'Cut through the noise of other opinions.', 'Act on the insight before it gets buried in overthinking.'], es: ['Confía en la lectura clara, aunque sea incómoda.', 'Corta el ruido de las opiniones ajenas.', 'Actúa sobre la intuición antes de que se entierre en exceso de pensar.'] },
    reflection: { en: ['What do you already see clearly that you haven’t acted on?', 'What truth here is inconvenient but honest?', 'What would you decide if you trusted your own clarity?'], es: ['¿Qué ves ya con claridad y todavía no has actuado?', '¿Qué verdad aquí es inconveniente pero honesta?', '¿Qué decidirías si confiaras en tu propia claridad?'] }
  };

  CARDS['swords-2'] = {
    theme: { en: 'STALEMATE', es: 'PUNTO MUERTO' },
    archetype: { en: 'A decision avoided by refusing to look at it directly', es: 'Una decisión evitada al negarse a mirarla de frente' },
    vocabulary: { en: ['stalemate', 'avoidance', 'indecision', 'blocked feeling', 'balance', 'a difficult choice'], es: ['punto muerto', 'evasión', 'indecisión', 'sentimiento bloqueado', 'equilibrio', 'una elección difícil'] },
    positive: { en: ['recognizing avoidance for what it is, instead of calling it patience', 'a pause that’s honest about being a pause', 'weighing two real options carefully instead of impulsively', 'noticing the block before it costs more time'], es: ['reconocer la evasión tal como es, en vez de llamarla paciencia', 'una pausa que es honesta sobre ser una pausa', 'sopesar dos opciones reales con cuidado y no por impulso', 'notar el bloqueo antes de que cueste más tiempo'] },
    shadow: { en: ['refusing to look at a decision because both options feel painful', 'a self-imposed blindfold protecting you from an obvious truth', 'staying stuck to avoid the discomfort of choosing', 'letting indecision quietly make the decision by default'], es: ['negarte a mirar una decisión porque ambas opciones duelen', 'una venda autoimpuesta que te protege de una verdad obvia', 'quedarte atascado para evitar la incomodidad de elegir', 'dejar que la indecisión tome la decisión por defecto, en silencio'] },
    yesNo: 'MAYBE',
    yesNoWhy: { en: 'The Two of Swords describes a stalemate, not a verdict — the card is honest that you’re avoiding this decision, not that it can’t be made.', es: 'El Dos de Espadas describe un punto muerto, no un veredicto; la carta es honesta al decir que estás evitando esta decisión, no que no pueda tomarse.' },
    domains: {
      career: { en: 'This card can mean you’ve been avoiding looking directly at this job decision because both staying and leaving feel uncomfortable. Naming that avoidance is the actual first step.', es: 'Esta carta puede significar que has evitado mirar de frente esta decisión laboral porque tanto quedarte como irte se sienten incómodos. Nombrar esa evasión es el verdadero primer paso.' },
      relationship: { en: 'This card can describe emotional avoidance — refusing to look clearly at feelings that are genuinely mixed. Take the blindfold off before deciding either way.', es: 'Esta carta puede describir una evasión emocional: negarte a mirar con claridad unos sentimientos que de verdad están encontrados. Quítate la venda antes de decidir en cualquier dirección.' },
      money: { en: 'This card can mean avoiding a financial decision by refusing to look at the actual numbers. The stalemate will only resolve once you actually look.', es: 'Esta carta puede significar evitar una decisión financiera al negarte a mirar las cifras reales. El punto muerto solo se resolverá cuando de verdad mires.' },
      movement: { en: 'This card can describe being stuck between two real, valid options for this move. The way through is looking directly at the trade-offs rather than avoiding the comparison.', es: 'Esta carta puede describir estar atrapado entre dos opciones reales y válidas para esta mudanza. La salida está en mirar de frente las ventajas y desventajas, no en evitar la comparación.' },
      creative: { en: 'This card can mean creative paralysis from refusing to choose between two directions. Naming both options honestly, even without deciding yet, tends to break the freeze.', es: 'Esta carta puede significar una parálisis creativa por negarte a elegir entre dos direcciones. Nombrar ambas opciones con honestidad, aunque todavía no decidas, suele romper el bloqueo.' },
      family: { en: 'This card can describe avoiding a difficult family conversation by simply not looking at it. The stalemate tends to persist exactly as long as the avoidance does.', es: 'Esta carta puede describir evitar una conversación familiar difícil simplemente no mirándola. El punto muerto suele durar exactamente lo mismo que la evasión.' },
      growth: { en: 'This card asks what decision you’ve been avoiding by staying blindfolded to it. Growth here starts with simply looking, before any decision is made.', es: 'Esta carta pregunta qué decisión has estado evitando al mantenerte con los ojos vendados. Crecer aquí empieza simplemente con mirar, antes de tomar ninguna decisión.' },
      general: { en: 'This card describes a stalemate maintained by avoidance, not an impossible choice. The way through is looking directly at what you’ve been refusing to see.', es: 'Esta carta describe un punto muerto mantenido por la evasión, no una elección imposible. La salida está en mirar de frente lo que te has negado a ver.' }
    },
    advice: { en: ['Look directly at what you’ve been avoiding.', 'Name both options honestly before deciding.', 'Recognize the avoidance for what it is.'], es: ['Mira de frente lo que has estado evitando.', 'Nombra ambas opciones con honestidad antes de decidir.', 'Reconoce la evasión tal como es.'] },
    reflection: { en: ['What have you been avoiding looking at directly?', 'What would you see if you took the blindfold off?', 'What is the stalemate actually protecting you from?'], es: ['¿Qué has estado evitando mirar de frente?', '¿Qué verías si te quitaras la venda?', '¿De qué te protege realmente este punto muerto?'] }
  };

  CARDS['swords-3'] = {
    theme: { en: 'HEARTBREAK', es: 'DESENGAÑO' },
    archetype: { en: 'A painful truth that arrives whether you’re ready or not', es: 'Una verdad dolorosa que llega estés listo o no' },
    vocabulary: { en: ['heartbreak', 'grief', 'painful truth', 'betrayal', 'sorrow', 'a clean wound'], es: ['desengaño', 'duelo', 'verdad dolorosa', 'traición', 'pena', 'una herida limpia'] },
    positive: { en: ['a painful truth that at least clarifies where you stand', 'grief that’s honest instead of denied', 'heartbreak that eventually makes room for something more real', 'naming the hurt precisely instead of letting it stay vague'], es: ['una verdad dolorosa que al menos aclara dónde estás parado', 'un duelo honesto en lugar de negado', 'un desengaño que con el tiempo abre espacio para algo más real', 'nombrar el dolor con precisión en vez de dejarlo vago'] },
    shadow: { en: ['reliving the hurt instead of letting it move through you', 'a wound kept open because closing it feels like forgetting', 'expecting more heartbreak because of one painful experience', 'confusing the pain of truth with the truth being wrong'], es: ['revivir el dolor en lugar de dejar que te atraviese', 'una herida mantenida abierta porque cerrarla se siente como olvidar', 'esperar más desengaños por una sola experiencia dolorosa', 'confundir el dolor de la verdad con que la verdad esté equivocada'] },
    yesNo: 'NO',
    yesNoWhy: { en: 'The Three of Swords usually appears mid-grief, not mid-decision — a painful truth needs to be felt honestly before it should inform a choice.', es: 'El Tres de Espadas suele aparecer en medio de un duelo, no en medio de una decisión; una verdad dolorosa necesita sentirse con honestidad antes de guiar una elección.' },
    domains: {
      career: { en: 'If this job has genuinely hurt you — a betrayal, a disappointment — let that pain be real before deciding what to do about it. A decision made purely to escape the hurt can miss what actually needs addressing.', es: 'Si este trabajo de verdad te ha herido (una traición, una decepción), deja que ese dolor sea real antes de decidir qué hacer al respecto. Una decisión tomada solo para huir del dolor puede pasar por alto lo que realmente necesita atenderse.' },
      relationship: { en: 'This card can mean a painful truth about this situation that needs to be felt honestly before you act on it. Grief and clarity often arrive together here.', es: 'Esta carta puede significar una verdad dolorosa sobre esta situación que necesita sentirse con honestidad antes de actuar. Aquí el duelo y la claridad suelen llegar juntos.' },
      money: { en: 'A financial loss or disappointment deserves an honest reckoning before the next decision — don’t let the pain of it distort what actually happened.', es: 'Una pérdida o decepción financiera merece un balance honesto antes de la siguiente decisión; no dejes que el dolor distorsione lo que realmente ocurrió.' },
      movement: { en: 'If this move follows a genuine heartbreak, let yourself grieve what happened here before deciding how much of it is shaping the decision to leave.', es: 'Si esta mudanza sigue a un desengaño real, permítete hacer el duelo de lo ocurrido aquí antes de decidir cuánto de eso está dando forma a la decisión de irte.' },
      creative: { en: 'This card can mark real disappointment with how a project turned out. That grief is valid — it doesn’t mean the next attempt is doomed the same way.', es: 'Esta carta puede marcar una decepción real con cómo resultó un proyecto. Ese duelo es válido; no significa que el próximo intento esté condenado igual.' },
      family: { en: 'This card asks you to acknowledge a genuinely painful family truth rather than minimize it. Naming the hurt precisely tends to help more than staying vague about it.', es: 'Esta carta te pide reconocer una verdad familiar genuinamente dolorosa en lugar de minimizarla. Nombrar el dolor con precisión suele ayudar más que quedarse en lo vago.' },
      growth: { en: 'This card asks you to let a genuine hurt be fully felt, rather than rushing toward healing before the grief has actually run its course.', es: 'Esta carta te pide dejar que un dolor genuino se sienta por completo, en lugar de correr hacia la sanación antes de que el duelo haya seguido su curso.' },
      general: { en: 'This situation likely involves a real, painful truth that deserves to be felt honestly before it becomes the basis for a decision.', es: 'Esta situación probablemente implique una verdad real y dolorosa que merece sentirse con honestidad antes de convertirse en base para una decisión.' }
    },
    advice: { en: ['Let the pain be real before deciding anything.', 'Name the hurt precisely instead of staying vague.', 'Don’t let grief distort what actually happened.'], es: ['Deja que el dolor sea real antes de decidir nada.', 'Nombra el dolor con precisión en vez de quedarte en lo vago.', 'No dejes que el duelo distorsione lo que realmente ocurrió.'] },
    reflection: { en: ['What hurt here haven’t you actually let yourself feel?', 'What would you decide once the grief has run its course?', 'What is this pain telling you that’s worth listening to?'], es: ['¿Qué dolor aquí no te has permitido sentir de verdad?', '¿Qué decidirías cuando el duelo haya seguido su curso?', '¿Qué te está diciendo este dolor que vale la pena escuchar?'] }
  };

  CARDS['swords-4'] = {
    theme: { en: 'RECOVERY', es: 'RECUPERACIÓN' },
    archetype: { en: 'Rest taken deliberately, not given up on', es: 'Un descanso tomado a propósito, no una rendición' },
    vocabulary: { en: ['rest', 'recovery', 'pause', 'recuperation', 'stillness', 'mental quiet'], es: ['descanso', 'recuperación', 'pausa', 'reposo', 'quietud', 'calma mental'] },
    positive: { en: ['genuine rest that restores clarity, not just delays it', 'stepping back deliberately before a decision, not out of fear', 'recovering from a difficult stretch before making a big choice', 'quiet that lets an overworked mind actually reset'], es: ['un descanso genuino que restaura la claridad, no solo la retrasa', 'retirarte a propósito antes de una decisión, no por miedo', 'recuperarte de una etapa difícil antes de hacer una gran elección', 'una calma que permite que una mente agotada por fin se restablezca'] },
    shadow: { en: ['rest used to avoid a decision that’s actually ready', 'staying still so long the pause becomes stagnation', 'mistaking exhaustion for a reason to give up entirely', 'recovering from a difficulty by pretending it didn’t happen'], es: ['un descanso usado para evitar una decisión que ya está lista', 'quedarte tan quieto que la pausa se convierte en estancamiento', 'confundir el agotamiento con una razón para rendirte del todo', 'recuperarte de una dificultad fingiendo que no ocurrió'] },
    yesNo: 'MAYBE',
    yesNoWhy: { en: 'The Four of Swords supports pausing before deciding — not forever, but long enough for a genuinely tired mind to think clearly again.', es: 'El Cuatro de Espadas respalda hacer una pausa antes de decidir, no para siempre, pero sí lo suficiente para que una mente realmente agotada vuelva a pensar con claridad.' },
    domains: {
      career: { en: 'Before deciding, this card asks whether you’re actually too exhausted right now to think clearly about this job. Rest first; the decision will hold.', es: 'Antes de decidir, esta carta pregunta si ahora mismo estás demasiado agotado como para pensar con claridad sobre este trabajo. Descansa primero; la decisión aguantará.' },
      relationship: { en: 'This card can mean you need genuine rest — from dating, from the effort of pursuing — before you can see this clearly. That pause is legitimate, not avoidance.', es: 'Esta carta puede significar que necesitas un descanso genuino, del ligar, del esfuerzo de perseguir, antes de poder ver esto con claridad. Esa pausa es legítima, no evasión.' },
      money: { en: 'This card suggests stepping back from financial anxiety long enough to think clearly, rather than deciding from a place of mental exhaustion.', es: 'Esta carta sugiere alejarte de la ansiedad financiera el tiempo suficiente para pensar con claridad, en lugar de decidir desde un lugar de agotamiento mental.' },
      movement: { en: 'This card can mean the decision to move should wait until you’ve genuinely rested — a big decision made from exhaustion tends to need revisiting later.', es: 'Esta carta puede significar que la decisión de mudarte debería esperar hasta que descanses de verdad; una gran decisión tomada desde el agotamiento suele necesitar revisarse después.' },
      creative: { en: 'This card supports deliberately resting from a project rather than forcing more output from an exhausted mind. The work will still be there when you return.', es: 'Esta carta respalda descansar a propósito de un proyecto en lugar de forzar más producción desde una mente agotada. El trabajo seguirá ahí cuando vuelvas.' },
      family: { en: 'This card suggests you may need space from a draining family dynamic before you can respond to it clearly, rather than reactively.', es: 'Esta carta sugiere que quizá necesites espacio frente a una dinámica familiar agotadora antes de poder responder con claridad, en lugar de reactivamente.' },
      growth: { en: 'This card treats rest itself as part of growth — recovering from a hard stretch before demanding clarity of yourself too soon.', es: 'Esta carta trata el descanso en sí como parte del crecimiento: recuperarte de una etapa difícil antes de exigirte claridad demasiado pronto.' },
      general: { en: 'This card suggests the honest move right now is rest, not resolution — a genuinely tired mind rarely makes its clearest decision.', es: 'Esta carta sugiere que el movimiento honesto ahora es descansar, no resolver; una mente realmente agotada rara vez toma su decisión más clara.' }
    },
    advice: { en: ['Rest deliberately before deciding, not indefinitely.', 'Check whether exhaustion, not the situation, is the real problem.', 'Let the decision wait until your mind has actually reset.'], es: ['Descansa a propósito antes de decidir, no de forma indefinida.', 'Comprueba si el agotamiento, no la situación, es el verdadero problema.', 'Deja que la decisión espere hasta que tu mente realmente se restablezca.'] },
    reflection: { en: ['Are you too tired right now to see this clearly?', 'What would rest, not avoidance, actually look like here?', 'What decision is waiting for you to recover first?'], es: ['¿Estás demasiado agotado ahora mismo para ver esto con claridad?', '¿Cómo sería aquí un descanso real, y no una evasión?', '¿Qué decisión te espera a que te recuperes primero?'] }
  };

  CARDS['swords-5'] = {
    theme: { en: 'HOLLOW VICTORY', es: 'VICTORIA VACÍA' },
    archetype: { en: 'Winning something that cost more than it was worth', es: 'Ganar algo que costó más de lo que valía' },
    vocabulary: { en: ['conflict', 'hollow win', 'betrayal', 'cost', 'discord', 'a battle not worth having'], es: ['conflicto', 'victoria vacía', 'traición', 'coste', 'discordia', 'una batalla que no valía la pena'] },
    positive: { en: ['recognizing a fight isn’t worth its cost before entering it', 'walking away from conflict without needing to win it first', 'honesty about who actually benefits from continuing to fight', 'choosing your battles instead of fighting all of them'], es: ['reconocer que una pelea no vale su coste antes de entrar en ella', 'alejarte de un conflicto sin necesidad de ganarlo primero', 'honestidad sobre quién se beneficia realmente de seguir peleando', 'elegir tus batallas en lugar de librarlas todas'] },
    shadow: { en: ['winning an argument while losing something that mattered more', 'conflict pursued for its own sake, not for a real reason', 'a victory that leaves everyone worse off, including you', 'confusing being right with actually resolving anything'], es: ['ganar una discusión mientras se pierde algo que importaba más', 'un conflicto perseguido por sí mismo, sin una razón real', 'una victoria que deja a todos peor, incluido tú', 'confundir tener razón con resolver algo de verdad'] },
    yesNo: 'NO',
    yesNoWhy: { en: 'The Five of Swords warns that whatever you’d win here may cost more than it’s worth — check the actual price before continuing to push.', es: 'El Cinco de Espadas advierte que lo que ganarías aquí puede costar más de lo que vale; comprueba el precio real antes de seguir insistiendo.' },
    domains: {
      career: { en: 'This card warns that leaving in the middle of an active conflict may cost you more than staying to resolve it calmly — or vice versa. Check what you’d actually be winning.', es: 'Esta carta advierte que irte en medio de un conflicto activo puede costarte más que quedarte a resolverlo con calma, o al revés. Comprueba qué estarías ganando en realidad.' },
      relationship: { en: 'This card warns against pursuing this if it means winning someone away from another situation at real cost to everyone involved, including your own integrity.', es: 'Esta carta advierte contra perseguir esto si implica ganar a alguien alejándolo de otra situación a un coste real para todos, incluida tu propia integridad.' },
      money: { en: 'This card warns against a financial "win" that costs a relationship, your reputation or your peace of mind more than the money is worth.', es: 'Esta carta advierte contra una "victoria" financiera que cueste una relación, tu reputación o tu paz mental más de lo que vale el dinero.' },
      movement: { en: 'This card warns against a move made mainly to win an argument or prove a point — check that you actually want the destination, not just the victory of leaving.', es: 'Esta carta advierte contra una mudanza hecha sobre todo para ganar una discusión o demostrar algo; comprueba que de verdad quieras el destino, y no solo la victoria de irte.' },
      creative: { en: 'This card warns against a creative choice made to prove someone wrong rather than because it genuinely serves the work — that kind of win rarely satisfies for long.', es: 'Esta carta advierte contra una decisión creativa tomada para demostrar que alguien se equivocaba, y no porque de verdad sirva al trabajo; ese tipo de victoria rara vez satisface por mucho tiempo.' },
      family: { en: 'This card warns that winning a family argument may cost the relationship more than the point was worth. Consider whether being right is actually the goal here.', es: 'Esta carta advierte que ganar una discusión familiar puede costar más a la relación de lo que valía el punto. Considera si tener razón es realmente el objetivo aquí.' },
      growth: { en: 'This card asks whether you’re fighting for something that genuinely matters, or fighting because stopping would feel like losing. Those aren’t the same thing.', es: 'Esta carta pregunta si luchas por algo que de verdad importa, o luchas porque parar se sentiría como perder. No es lo mismo.' },
      general: { en: 'This card warns that whatever "win" is available here may cost more than it’s worth. Check the actual price before continuing to push for it.', es: 'Esta carta advierte que la "victoria" disponible aquí puede costar más de lo que vale. Comprueba el precio real antes de seguir insistiendo en conseguirla.' }
    },
    advice: { en: ['Check what winning here would actually cost.', 'Choose this battle deliberately, not by default.', 'Consider walking away without needing to win first.'], es: ['Comprueba qué costaría en realidad ganar aquí.', 'Elige esta batalla a propósito, no por defecto.', 'Considera alejarte sin necesidad de ganar primero.'] },
    reflection: { en: ['What would winning here actually cost you?', 'Is this a battle worth having, or just one you’re used to having?', 'What would you let go of if being right stopped mattering?'], es: ['¿Qué te costaría en realidad ganar aquí?', '¿Esta batalla vale la pena, o solo estás acostumbrado a librarla?', '¿Qué soltarías si tener razón dejara de importar?'] }
  };

  CARDS['swords-6'] = {
    theme: { en: 'MOVING ON', es: 'SEGUIR ADELANTE' },
    archetype: { en: 'Calmer water reached by leaving the storm behind', es: 'Aguas más tranquilas alcanzadas al dejar atrás la tormenta' },
    vocabulary: { en: ['transition', 'moving on', 'gradual healing', 'departure', 'calmer waters', 'quiet progress'], es: ['transición', 'seguir adelante', 'sanación gradual', 'partida', 'aguas más tranquilas', 'progreso silencioso'] },
    positive: { en: ['leaving a difficult situation for genuinely calmer waters', 'healing that happens gradually, in transit, not all at once', 'trusting a quiet, steady move away from what’s been hard', 'carrying only what’s needed into the next chapter'], es: ['dejar una situación difícil por aguas realmente más tranquilas', 'una sanación que ocurre poco a poco, en el trayecto, no de golpe', 'confiar en un movimiento tranquilo y constante lejos de lo que ha sido difícil', 'llevar contigo solo lo necesario hacia el próximo capítulo'] },
    shadow: { en: ['leaving without processing what actually happened here', 'a transition rushed before you’re genuinely ready for it', 'quiet resignation mistaken for peaceful acceptance', 'moving on in location without moving on emotionally'], es: ['irte sin procesar lo que en realidad ocurrió aquí', 'una transición apresurada antes de estar realmente listo', 'confundir la resignación silenciosa con la aceptación serena', 'cambiar de lugar sin haber avanzado emocionalmente'] },
    yesNo: 'YES',
    yesNoWhy: { en: 'The Six of Swords supports moving toward calmer circumstances — the transition may be gradual, but the direction is the right one.', es: 'El Seis de Espadas respalda moverte hacia circunstancias más tranquilas; la transición puede ser gradual, pero la dirección es la correcta.' },
    domains: {
      career: { en: 'This card supports leaving a difficult job for genuinely calmer circumstances — the transition may take time, but the direction is sound.', es: 'Esta carta respalda dejar un trabajo difícil por unas circunstancias realmente más tranquilas; la transición puede llevar tiempo, pero la dirección es acertada.' },
      relationship: { en: 'This card can support pursuing this if it genuinely represents calmer, more stable waters than what you’re leaving behind — check that it isn’t just a change of scenery for the same storm.', es: 'Esta carta puede respaldar esto si de verdad representa aguas más tranquilas y estables que lo que dejas atrás; comprueba que no sea solo un cambio de escenario para la misma tormenta.' },
      money: { en: 'This card supports a gradual financial transition toward more stability, rather than a dramatic move made in the middle of the storm.', es: 'Esta carta respalda una transición financiera gradual hacia más estabilidad, en lugar de un movimiento dramático hecho en medio de la tormenta.' },
      movement: { en: 'This is one of the clearest cards for this exact question — it supports leaving difficulty behind for calmer waters, even if the transition takes a while to complete.', es: 'Esta es una de las cartas más claras para exactamente esta pregunta: respalda dejar la dificultad atrás por aguas más tranquilas, aunque la transición tarde un tiempo en completarse.' },
      creative: { en: 'This card supports moving a project away from a stuck, difficult phase toward calmer, more workable ground — even gradually, rather than all at once.', es: 'Esta carta respalda alejar un proyecto de una fase difícil y estancada hacia un terreno más tranquilo y manejable, aunque sea de forma gradual y no de golpe.' },
      family: { en: 'This card can support gaining some distance from a difficult family situation in order to heal, rather than staying immersed in the same storm indefinitely.', es: 'Esta carta puede respaldar tomar algo de distancia de una situación familiar difícil para sanar, en lugar de quedarte inmerso en la misma tormenta de forma indefinida.' },
      growth: { en: 'This card supports a gradual transition toward a calmer version of your life — healing here happens in motion, not all at once before you’re allowed to move.', es: 'Esta carta respalda una transición gradual hacia una versión más tranquila de tu vida; aquí la sanación ocurre en movimiento, no toda de golpe antes de permitirte avanzar.' },
      general: { en: 'This card supports moving toward calmer circumstances, even if the transition is gradual rather than immediate. The direction is sound.', es: 'Esta carta respalda moverte hacia circunstancias más tranquilas, aunque la transición sea gradual y no inmediata. La dirección es acertada.' }
    },
    advice: { en: ['Trust the direction even if the transition is gradual.', 'Carry only what you actually need forward.', 'Let healing happen in motion, not all at once.'], es: ['Confía en la dirección aunque la transición sea gradual.', 'Lleva contigo solo lo que realmente necesitas.', 'Deja que la sanación ocurra en movimiento, no toda de golpe.'] },
    reflection: { en: ['What are you ready to leave behind, even gradually?', 'What would calmer waters actually look like for you?', 'What do you need to process before this transition feels complete?'], es: ['¿Qué estás listo para dejar atrás, aunque sea gradualmente?', '¿Cómo serían para ti unas aguas realmente más tranquilas?', '¿Qué necesitas procesar antes de que esta transición se sienta completa?'] }
  };

  CARDS['swords-7'] = {
    theme: { en: 'GOING IT ALONE', es: 'IR POR TU CUENTA' },
    archetype: { en: 'A strategy carried out without telling everyone the plan', es: 'Una estrategia llevada a cabo sin contarle a todos el plan' },
    vocabulary: { en: ['strategy', 'independence', 'discretion', 'self-reliance', 'a quiet exit', 'calculated risk'], es: ['estrategia', 'independencia', 'discreción', 'autosuficiencia', 'una salida discreta', 'riesgo calculado'] },
    positive: { en: ['handling something independently instead of waiting for consensus', 'strategic discretion about a plan that isn’t ready to be shared', 'trusting your own judgment over a committee of opinions', 'a quiet, calculated move instead of a dramatic announcement'], es: ['manejar algo de forma independiente en vez de esperar el consenso', 'una discreción estratégica sobre un plan que aún no está listo para compartirse', 'confiar en tu propio criterio por encima de un comité de opiniones', 'un movimiento tranquilo y calculado en lugar de un anuncio dramático'] },
    shadow: { en: ['secrecy that’s really about avoiding honest accountability', 'convincing yourself a shortcut is actually a strategy', 'isolating a decision that genuinely needed other input', 'getting away with something at a cost you haven’t counted yet'], es: ['un secretismo que en realidad busca evitar la responsabilidad honesta', 'convencerte de que un atajo es en realidad una estrategia', 'aislar una decisión que de verdad necesitaba otra opinión', 'salirte con la tuya a un coste que todavía no has contado'] },
    yesNo: 'MAYBE',
    yesNoWhy: { en: 'The Seven of Swords supports acting independently, but asks you to be honest about whether discretion here is strategy or avoidance.', es: 'El Siete de Espadas respalda actuar de forma independiente, pero pide ser honesto sobre si la discreción aquí es estrategia o evasión.' },
    domains: {
      career: { en: 'This card can support handling a job transition quietly and strategically, on your own terms — but check you’re not avoiding a conversation that honesty actually requires.', es: 'Esta carta puede respaldar manejar una transición laboral con discreción y estrategia, en tus propios términos, pero comprueba que no estés evitando una conversación que la honestidad realmente exige.' },
      relationship: { en: 'This card warns against pursuing this in a way that requires hiding something important — from them, or from yourself. A strategy built on secrecy tends to cost more later.', es: 'Esta carta advierte contra perseguir esto de una forma que requiera ocultar algo importante, a esa persona, o a ti mismo. Una estrategia basada en el secreto suele costar más después.' },
      money: { en: 'This card supports a discreet, independent financial strategy — as long as it’s a genuine plan and not simply avoiding transparency with people it actually affects.', es: 'Esta carta respalda una estrategia financiera discreta e independiente, siempre que sea un plan genuino y no simplemente evitar la transparencia con quienes de verdad afecta.' },
      movement: { en: 'This card can support planning this move quietly before announcing it — a private strategy, not secrecy for its own sake, tends to serve you here.', es: 'Esta carta puede respaldar planear esta mudanza en silencio antes de anunciarla; una estrategia privada, no un secreto por sí mismo, suele servirte aquí.' },
      creative: { en: 'This card supports working on a project privately before it’s ready for feedback — discretion here protects the work, rather than avoiding accountability.', es: 'Esta carta respalda trabajar en un proyecto en privado antes de que esté listo para recibir opiniones; la discreción aquí protege el trabajo, en lugar de evitar la responsabilidad.' },
      family: { en: 'This card warns against handling a family matter through secrecy rather than honest, if difficult, conversation. Strategy here should not mean deception.', es: 'Esta carta advierte contra manejar un asunto familiar mediante el secreto en lugar de una conversación honesta, aunque sea difícil. La estrategia aquí no debería significar engaño.' },
      growth: { en: 'This card asks whether you’re handling this independently out of genuine self-trust, or avoiding input you actually need. Growth requires being honest about the difference.', es: 'Esta carta pregunta si estás manejando esto de forma independiente por una confianza genuina en ti mismo, o evitando una opinión que en realidad necesitas. Crecer exige ser honesto sobre la diferencia.' },
      general: { en: 'This card supports a discreet, independent approach — but only once you’ve honestly checked that discretion here is strategy, not a way of avoiding accountability.', es: 'Esta carta respalda un enfoque discreto e independiente, pero solo una vez que hayas comprobado con honestidad que la discreción aquí es estrategia, y no una forma de evitar la responsabilidad.' }
    },
    advice: { en: ['Check whether discretion here is strategy or avoidance.', 'Trust your own judgment, but stay honest about the cost.', 'Plan privately, but don’t use secrecy to dodge accountability.'], es: ['Comprueba si la discreción aquí es estrategia o evasión.', 'Confía en tu propio criterio, pero sé honesto sobre el coste.', 'Planea en privado, pero no uses el secreto para esquivar la responsabilidad.'] },
    reflection: { en: ['Is this discretion, or avoidance dressed up as strategy?', 'What are you keeping quiet that honesty actually requires?', 'What would you do differently if nobody needed to know yet?'], es: ['¿Esto es discreción, o evasión disfrazada de estrategia?', '¿Qué mantienes en silencio que la honestidad en realidad exige?', '¿Qué harías distinto si nadie necesitara saberlo todavía?'] }
  };

  CARDS['swords-8'] = {
    theme: { en: 'SELF-IMPOSED LIMITS', es: 'LÍMITES AUTOIMPUESTOS' },
    archetype: { en: 'Bindings that were never actually locked', es: 'Ataduras que en realidad nunca estuvieron cerradas' },
    vocabulary: { en: ['restriction', 'powerlessness', 'self-imposed limits', 'fear', 'a story about being trapped', 'the way out'], es: ['restricción', 'impotencia', 'límites autoimpuestos', 'miedo', 'una historia sobre estar atrapado', 'la salida'] },
    positive: { en: ['recognizing that the trap is at least partly a story you’re telling yourself', 'finding you have more freedom to move than fear has allowed you to see', 'naming exactly what feels blocked instead of staying vaguely stuck', 'the relief of realizing the way out was always available'], es: ['reconocer que la trampa es, al menos en parte, una historia que te cuentas', 'descubrir que tienes más libertad para moverte de la que el miedo te ha dejado ver', 'nombrar con precisión lo que se siente bloqueado en vez de quedarte vagamente atascado', 'el alivio de descubrir que la salida siempre estuvo disponible'] },
    shadow: { en: ['believing you have no choice when you actually do', 'fear that convinces you the bindings are tighter than they are', 'staying trapped because leaving feels more frightening than the trap itself', 'waiting for someone else to free you from a situation you can leave yourself'], es: ['creer que no tienes elección cuando en realidad sí la tienes', 'un miedo que te convence de que las ataduras son más fuertes de lo que son', 'quedarte atrapado porque irte da más miedo que la propia trampa', 'esperar a que otro te libere de una situación que puedes dejar tú mismo'] },
    yesNo: 'YES',
    yesNoWhy: { en: 'The Eight of Swords usually means you have more room to move than fear has let you believe — the restriction is largely self-imposed.', es: 'El Ocho de Espadas suele significar que tienes más margen para moverte del que el miedo te ha dejado creer; la restricción es en gran parte autoimpuesta.' },
    domains: {
      career: { en: 'This card suggests you likely have more freedom to leave than fear is currently allowing you to see. The bindings here are mostly a story, not an actual lock.', es: 'Esta carta sugiere que probablemente tienes más libertad para irte de la que el miedo te deja ver ahora mismo. Las ataduras aquí son sobre todo una historia, no un cierre real.' },
      relationship: { en: 'This card can mean fear is convincing you that you have less freedom to pursue this than you actually do. Check what’s genuinely blocking you versus what’s just a scary story.', es: 'Esta carta puede significar que el miedo te está convenciendo de que tienes menos libertad para esto de la que en realidad tienes. Comprueba qué te bloquea de verdad frente a lo que solo es una historia que asusta.' },
      money: { en: 'This card suggests the financial trap here may be less absolute than it feels — fear is likely narrowing your view of the actual options available.', es: 'Esta carta sugiere que la trampa financiera aquí puede ser menos absoluta de lo que se siente; el miedo probablemente esté estrechando tu visión de las opciones realmente disponibles.' },
      movement: { en: 'This card suggests whatever feels like it’s preventing this move is likely less fixed than it appears — fear has probably tied more knots than reality actually requires.', es: 'Esta carta sugiere que lo que parece impedir esta mudanza probablemente sea menos fijo de lo que parece; el miedo seguramente ha hecho más nudos de los que la realidad exige.' },
      creative: { en: 'This card suggests a creative block may be more self-imposed than it feels — fear of judgment tying knots that don’t actually need to hold you back.', es: 'Esta carta sugiere que un bloqueo creativo puede ser más autoimpuesto de lo que se siente; el miedo al juicio hace nudos que en realidad no tienen por qué frenarte.' },
      family: { en: 'This card suggests you may have more freedom in this family situation than obligation has let you see — check what’s genuinely fixed versus what fear has kept tied.', es: 'Esta carta sugiere que quizá tengas más libertad en esta situación familiar de la que la obligación te ha dejado ver; comprueba qué está realmente fijo frente a lo que el miedo ha mantenido atado.' },
      growth: { en: 'This card asks what story about being trapped you’re still telling yourself, even though the actual restriction may have loosened a while ago.', es: 'Esta carta pregunta qué historia sobre estar atrapado sigues contándote, aunque la restricción real quizás se haya aflojado hace tiempo.' },
      general: { en: 'This card suggests the situation may be less fixed than it feels — fear is likely doing more of the binding here than the actual circumstances are.', es: 'Esta carta sugiere que la situación puede ser menos fija de lo que parece; probablemente el miedo esté atando más aquí que las circunstancias reales.' }
    },
    advice: { en: ['Check what’s actually fixed versus what fear has tied.', 'Name the specific thing that feels blocked.', 'Test the restriction before assuming it’s absolute.'], es: ['Comprueba qué está realmente fijo frente a lo que ató el miedo.', 'Nombra con precisión lo que se siente bloqueado.', 'Prueba la restricción antes de asumir que es absoluta.'] },
    reflection: { en: ['What story about being trapped are you still telling yourself?', 'What freedom do you actually have that fear has hidden from you?', 'What would you do if the restriction turned out to be looser than it feels?'], es: ['¿Qué historia sobre estar atrapado sigues contándote?', '¿Qué libertad tienes en realidad que el miedo te ha ocultado?', '¿Qué harías si la restricción resultara más floja de lo que se siente?'] }
  };

  CARDS['swords-9'] = {
    theme: { en: 'ANXIETY', es: 'ANSIEDAD' },
    archetype: { en: 'The mind at 3am, rehearsing the worst version', es: 'La mente a las tres de la madrugada, ensayando la peor versión' },
    vocabulary: { en: ['anxiety', 'worry', 'sleeplessness', 'mental anguish', 'catastrophizing', 'the dark hour'], es: ['ansiedad', 'preocupación', 'insomnio', 'angustia mental', 'catastrofismo', 'la hora oscura'] },
    positive: { en: ['naming the specific fear instead of letting it stay a formless dread', 'recognizing that 3am thinking rarely reflects daylight reality', 'compassion for how hard this has actually been to carry', 'seeking real support instead of processing this entirely alone'], es: ['nombrar el miedo concreto en lugar de dejarlo como un temor sin forma', 'reconocer que pensar a las tres de la madrugada rara vez refleja la realidad de pleno día', 'compasión por lo difícil que ha sido cargar con esto de verdad', 'buscar un apoyo real en lugar de procesarlo todo en soledad'] },
    shadow: { en: ['catastrophizing until the fear feels bigger than the actual situation', 'losing sleep over a version of events that hasn’t happened', 'isolating with the worry instead of sharing the weight of it', 'letting anxiety make a decision that clarity should be making instead'], es: ['catastrofizar hasta que el miedo se siente más grande que la situación real', 'perder el sueño por una versión de los hechos que no ha ocurrido', 'aislarte con la preocupación en lugar de compartir su peso', 'dejar que la ansiedad tome una decisión que debería tomar la claridad'] },
    yesNo: 'MAYBE',
    yesNoWhy: { en: 'The Nine of Swords warns against deciding from the middle of anxious rumination — the fear is real, but it isn’t necessarily accurate.', es: 'El Nueve de Espadas advierte contra decidir en medio de una rumiación ansiosa; el miedo es real, pero no necesariamente es preciso.' },
    domains: {
      career: { en: 'If anxiety about this job has been keeping you up at night, separate what you’re actually afraid of from what’s genuinely likely before deciding anything.', es: 'Si la ansiedad por este trabajo te ha quitado el sueño, separa lo que en realidad temes de lo que es genuinamente probable antes de decidir nada.' },
      relationship: { en: 'This card warns against deciding whether to pursue this from a place of anxious rumination. Give the fear a name, then check it against what you actually know.', es: 'Esta carta advierte contra decidir si perseguir esto desde un lugar de rumiación ansiosa. Ponle nombre al miedo, y luego contrástalo con lo que realmente sabes.' },
      money: { en: 'This card describes financial anxiety that may be larger than the actual numbers warrant. Look at the real figures in daylight before deciding from the 3am version.', es: 'Esta carta describe una ansiedad financiera que puede ser mayor de lo que las cifras reales justifican. Mira las cifras reales de día antes de decidir desde la versión de las tres de la madrugada.' },
      movement: { en: 'This card warns that anxiety about this move may be catastrophizing more than reflecting real risk. Separate the worst imagined outcome from the likely one.', es: 'Esta carta advierte que la ansiedad por esta mudanza puede estar catastrofizando más de lo que refleja un riesgo real. Separa el peor resultado imaginado del probable.' },
      creative: { en: 'This card can describe anxious perfectionism keeping you from the work entirely. The fear of it being bad is likely louder than the actual risk of trying.', es: 'Esta carta puede describir un perfeccionismo ansioso que te aleja por completo del trabajo. El miedo a que salga mal probablemente suene más fuerte que el riesgo real de intentarlo.' },
      family: { en: 'This card suggests worry about a family situation may have grown larger in your mind than the situation itself currently warrants. Check it against what’s actually happening.', es: 'Esta carta sugiere que la preocupación por una situación familiar puede haber crecido en tu mente más de lo que la situación en sí justifica ahora mismo. Contrástala con lo que realmente ocurre.' },
      growth: { en: 'This card asks what fear you’ve been carrying alone that would feel lighter if you actually named it out loud to someone.', es: 'Esta carta pregunta qué miedo has estado cargando en soledad que se sentiría más ligero si de verdad lo nombraras en voz alta a alguien.' },
      general: { en: 'This card warns against deciding from anxious rumination. Separate the fear from the evidence, and consider whether you need support rather than more solitary worry.', es: 'Esta carta advierte contra decidir desde la rumiación ansiosa. Separa el miedo de la evidencia, y considera si necesitas apoyo en lugar de más preocupación en soledad.' }
    },
    advice: { en: ['Separate the fear from what you actually know.', 'Name the specific worry instead of a vague dread.', 'Consider sharing this instead of carrying it alone.'], es: ['Separa el miedo de lo que realmente sabes.', 'Nombra la preocupación concreta en vez de un temor difuso.', 'Considera compartir esto en lugar de cargarlo en soledad.'] },
    reflection: { en: ['What specifically are you afraid of, named plainly?', 'What would this look like in daylight instead of at 3am?', 'Who could you share this weight with instead of carrying it alone?'], es: ['¿Qué temes exactamente, dicho con claridad?', '¿Cómo se vería esto a plena luz del día, en vez de a las tres de la madrugada?', '¿Con quién podrías compartir este peso en vez de cargarlo solo?'] }
  };

  CARDS['swords-10'] = {
    theme: { en: 'ROCK BOTTOM', es: 'TOCAR FONDO' },
    archetype: { en: 'The point past which it genuinely cannot get worse', es: 'El punto a partir del cual ya no puede empeorar de verdad' },
    vocabulary: { en: ['rock bottom', 'painful ending', 'release', 'exhaustion', 'betrayal', 'the only way is up'], es: ['tocar fondo', 'final doloroso', 'liberación', 'agotamiento', 'traición', 'de aquí solo se puede subir'] },
    positive: { en: ['recognizing that this has genuinely ended, which is its own relief', 'nowhere left to fall, which means only rebuilding from here', 'release from a situation that had already taken everything it could', 'the clarity that arrives only after something is completely over'], es: ['reconocer que esto de verdad ha terminado, lo cual ya es un alivio', 'no quedar más abajo adónde caer, lo que significa que solo queda reconstruir', 'la liberación de una situación que ya había tomado todo lo que podía', 'la claridad que solo llega cuando algo está completamente terminado'] },
    shadow: { en: ['staying in a situation past the point it had anything left to give', 'melodrama that exaggerates an ending that’s actually survivable', 'refusing to acknowledge that this is, in fact, over', 'reliving the worst moment instead of building from what’s next'], es: ['quedarte en una situación más allá del punto en que ya no tenía nada que dar', 'un melodrama que exagera un final que en realidad es superable', 'negarte a reconocer que esto, de hecho, ya terminó', 'revivir el peor momento en lugar de construir desde lo que sigue'] },
    yesNo: 'YES',
    yesNoWhy: { en: 'The Ten of Swords marks a definitive ending — painful, but this card usually supports finally letting it be over rather than dragging it further.', es: 'El Diez de Espadas marca un final definitivo; doloroso, pero esta carta suele respaldar dejar por fin que termine, en lugar de alargarlo más.' },
    domains: {
      career: { en: 'This card suggests this job situation has genuinely run its course, however painful the ending feels. There’s a real relief available once you stop trying to salvage what’s already over.', es: 'Esta carta sugiere que esta situación laboral ya ha cumplido su ciclo del todo, por doloroso que se sienta el final. Hay un alivio real disponible en cuanto dejas de intentar salvar lo que ya terminó.' },
      relationship: { en: 'This card can mean a previous chapter needs to be fully acknowledged as over before you pursue anything new — closure here isn’t optional, it’s the actual foundation for what comes next.', es: 'Esta carta puede significar que un capítulo anterior necesita reconocerse del todo como terminado antes de perseguir algo nuevo; el cierre aquí no es opcional, es la base real de lo que viene.' },
      money: { en: 'This card can mark the definitive end of a financial situation that had already taken what it could. There’s relief available once you stop trying to revive it.', es: 'Esta carta puede marcar el final definitivo de una situación financiera que ya había tomado todo lo que podía. Hay un alivio disponible en cuanto dejas de intentar revivirla.' },
      movement: { en: 'This card can support moving on because a chapter here has genuinely, painfully ended — the move isn’t running from something salvageable, it’s building from something that’s already over.', es: 'Esta carta puede respaldar seguir adelante porque un capítulo aquí de verdad, y dolorosamente, ha terminado; la mudanza no es huir de algo recuperable, es construir desde algo que ya acabó.' },
      creative: { en: 'This card can mean a project or approach has genuinely reached its end. Letting it be fully over, rather than reviving it endlessly, makes room for what’s next.', es: 'Esta carta puede significar que un proyecto o enfoque de verdad ha llegado a su fin. Dejar que termine del todo, en lugar de revivirlo sin fin, abre espacio para lo que sigue.' },
      family: { en: 'This card can mark a painful but genuine ending in a family relationship or dynamic. Acknowledging that fully tends to help more than continuing to fight for what’s already over.', es: 'Esta carta puede marcar un final doloroso pero genuino en una relación o dinámica familiar. Reconocerlo del todo suele ayudar más que seguir peleando por algo que ya terminó.' },
      growth: { en: 'This card marks the bottom of something, which means the only direction left is up. Growth here starts with fully acknowledging the ending, not skipping past it.', es: 'Esta carta marca el fondo de algo, lo que significa que la única dirección que queda es hacia arriba. Aquí el crecimiento empieza por reconocer del todo el final, no saltárselo.' },
      general: { en: 'This card marks a genuine, painful ending. The relief available here comes from acknowledging it fully rather than trying to extend what’s already over.', es: 'Esta carta marca un final genuino y doloroso. El alivio disponible aquí viene de reconocerlo del todo, en lugar de intentar prolongar lo que ya terminó.' }
    },
    advice: { en: ['Let this be fully over instead of trying to revive it.', 'Acknowledge the ending before building what’s next.', 'Trust that the only direction from here is up.'], es: ['Deja que esto termine del todo en vez de intentar revivirlo.', 'Reconoce el final antes de construir lo que sigue.', 'Confía en que desde aquí la única dirección es hacia arriba.'] },
    reflection: { en: ['What has actually ended here that you haven’t fully acknowledged?', 'What relief becomes available once you stop trying to salvage this?', 'What would you build if you accepted this chapter is genuinely closed?'], es: ['¿Qué ha terminado aquí de verdad que todavía no has reconocido del todo?', '¿Qué alivio se hace posible en cuanto dejas de intentar salvar esto?', '¿Qué construirías si aceptaras que este capítulo está realmente cerrado?'] }
  };

  CARDS['swords-page'] = {
    theme: { en: 'VIGILANT CURIOSITY', es: 'CURIOSIDAD VIGILANTE' },
    archetype: { en: 'A sharp mind gathering information before deciding anything', es: 'Una mente aguda que reúne información antes de decidir nada' },
    vocabulary: { en: ['curiosity', 'vigilance', 'new information', 'alertness', 'questions', 'watchfulness'], es: ['curiosidad', 'vigilancia', 'información nueva', 'alerta', 'preguntas', 'observación'] },
    positive: { en: ['staying alert to new information instead of assuming you already know', 'asking sharp, honest questions before committing to an answer', 'genuine curiosity about a truth that hasn’t fully surfaced yet', 'watching a situation carefully instead of reacting immediately'], es: ['mantenerte alerta a la información nueva en vez de suponer que ya sabes', 'hacer preguntas agudas y honestas antes de comprometerte con una respuesta', 'una curiosidad genuina por una verdad que aún no ha salido del todo a la luz', 'observar una situación con cuidado en lugar de reaccionar de inmediato'] },
    shadow: { en: ['gossip or speculation mistaken for genuine information', 'so much vigilance that you can’t actually relax into a decision', 'overanalyzing a situation instead of asking the direct question', 'suspicion without any actual evidence behind it'], es: ['el chisme o la especulación confundidos con información genuina', 'tanta vigilancia que no puedes relajarte lo suficiente para decidir', 'sobreanalizar una situación en lugar de hacer la pregunta directa', 'sospechar sin ninguna evidencia real detrás'] },
    yesNo: 'MAYBE',
    yesNoWhy: { en: 'The Page of Swords suggests you don’t have all the information yet — ask the direct question before deciding rather than continuing to speculate.', es: 'El Paje de Espadas sugiere que todavía no tienes toda la información; haz la pregunta directa antes de decidir, en lugar de seguir especulando.' },
    domains: {
      career: { en: 'This card suggests you need one more piece of real information before deciding — ask the direct, uncomfortable question rather than continuing to guess.', es: 'Esta carta sugiere que necesitas un dato real más antes de decidir: haz la pregunta directa e incómoda en lugar de seguir suponiendo.' },
      relationship: { en: 'This card favors asking directly rather than continuing to read signals and guess. A genuine question tends to serve you better here than more speculation.', es: 'Esta carta favorece preguntar directamente en lugar de seguir leyendo señales y suponiendo. Una pregunta genuina suele servirte mejor aquí que más especulación.' },
      money: { en: 'This card suggests you need more concrete information before deciding — verify the actual terms or numbers rather than working from an assumption.', es: 'Esta carta sugiere que necesitas más información concreta antes de decidir: verifica los términos o las cifras reales en lugar de partir de una suposición.' },
      movement: { en: 'This card favors researching this move directly — real information about cost, logistics, daily life — rather than deciding from an untested impression.', es: 'Esta carta favorece investigar esta mudanza directamente (el coste real, la logística, la vida diaria) en lugar de decidir desde una impresión sin probar.' },
      creative: { en: 'This card favors genuine curiosity and research as part of the creative process — gather real information before assuming you already know how this should go.', es: 'Esta carta favorece la curiosidad genuina y la investigación como parte del proceso creativo: reúne información real antes de suponer que ya sabes cómo debería ser esto.' },
      family: { en: 'This card favors asking a direct, honest question about a family situation rather than continuing to speculate about what other people actually mean or want.', es: 'Esta carta favorece hacer una pregunta directa y honesta sobre una situación familiar, en lugar de seguir especulando sobre lo que otras personas realmente quieren o piensan.' },
      growth: { en: 'This card supports staying genuinely curious about yourself — asking honest questions rather than assuming you already have the full picture.', es: 'Esta carta respalda mantenerte genuinamente curioso sobre ti mismo: hacer preguntas honestas en lugar de suponer que ya tienes el cuadro completo.' },
      general: { en: 'This card suggests you’re missing a piece of real information here — ask the direct question rather than continuing to decide from speculation.', es: 'Esta carta sugiere que te falta un dato real aquí: haz la pregunta directa en lugar de seguir decidiendo desde la especulación.' }
    },
    advice: { en: ['Ask the direct question instead of continuing to guess.', 'Gather real information before deciding.', 'Stay alert without letting vigilance become suspicion.'], es: ['Haz la pregunta directa en vez de seguir suponiendo.', 'Reúne información real antes de decidir.', 'Mantente alerta sin que la vigilancia se convierta en sospecha.'] },
    reflection: { en: ['What question have you been avoiding asking directly?', 'What information are you missing that you could actually go find?', 'What are you assuming that you haven’t actually confirmed?'], es: ['¿Qué pregunta has estado evitando hacer directamente?', '¿Qué información te falta que en realidad podrías ir a buscar?', '¿Qué estás suponiendo que en realidad no has confirmado?'] }
  };

  CARDS['swords-knight'] = {
    theme: { en: 'DECISIVE ACTION', es: 'ACCIÓN DECIDIDA' },
    archetype: { en: 'A mind made up, already moving before it’s questioned', es: 'Una mente ya decidida, moviéndose antes de que se le cuestione' },
    vocabulary: { en: ['decisiveness', 'speed', 'directness', 'single-mindedness', 'assertiveness', 'sharp focus'], es: ['decisión', 'velocidad', 'franqueza', 'determinación', 'firmeza', 'un enfoque agudo'] },
    positive: { en: ['acting decisively once the facts are actually clear', 'directness that cuts through unnecessary hesitation', 'single-minded focus on the one thing that matters most', 'confidence that comes from having already thought it through'], es: ['actuar con decisión una vez que los hechos están realmente claros', 'una franqueza que corta la duda innecesaria', 'un enfoque decidido en lo único que más importa', 'una confianza que viene de ya haberlo pensado bien'] },
    shadow: { en: ['moving fast enough to skip over an important detail', 'bluntness that damages something it didn’t need to', 'certainty that arrived before all the facts actually did', 'single-mindedness that ignores anyone slower to catch up'], es: ['moverte tan rápido que se salta un detalle importante', 'una franqueza que daña algo que no hacía falta dañar', 'una certeza que llegó antes de que llegaran todos los hechos', 'una determinación tan cerrada que ignora a quien tarda más en seguirla'] },
    yesNo: 'YES',
    yesNoWhy: { en: 'The Knight of Swords supports decisive action once the facts genuinely support it — the risk here isn’t moving too slowly, it’s moving too fast.', es: 'El Caballero de Espadas respalda la acción decidida una vez que los hechos realmente la respaldan; el riesgo aquí no es moverse demasiado despacio, sino demasiado rápido.' },
    domains: {
      career: { en: 'This card supports acting decisively on this job decision once you’ve actually confirmed the facts — but check you haven’t skipped a detail in the rush to resolve it.', es: 'Esta carta respalda actuar con decisión sobre esta decisión laboral una vez que de verdad has confirmado los hechos, pero comprueba que no te hayas saltado un detalle en la prisa por resolverlo.' },
      relationship: { en: 'This card favors being direct and decisive about how you feel — say it plainly. Just make sure the bluntness doesn’t override genuine care for how it lands.', es: 'Esta carta favorece ser directo y decidido sobre lo que sientes: dilo con claridad. Solo asegúrate de que la franqueza no anule un cuidado genuino por cómo llega.' },
      money: { en: 'This card supports acting quickly and decisively on a financial decision once the facts are genuinely confirmed — don’t let overthinking replace a clear-eyed decision.', es: 'Esta carta respalda actuar con rapidez y decisión sobre una decisión financiera una vez que los hechos están realmente confirmados; no dejes que pensar de más sustituya a una decisión clara.' },
      movement: { en: 'This card favors deciding quickly and acting on this move once you’ve confirmed the key facts — decisiveness serves you here more than prolonged deliberation.', es: 'Esta carta favorece decidir con rapidez y actuar sobre esta mudanza una vez confirmados los datos clave; la decisión te sirve aquí más que una deliberación prolongada.' },
      creative: { en: 'This card supports moving fast on a clear creative idea — decisiveness and focus will get this further than continuing to second-guess the direction.', es: 'Esta carta respalda avanzar rápido sobre una idea creativa clara; la decisión y el enfoque llevarán esto más lejos que seguir dudando de la dirección.' },
      family: { en: 'This card can mean addressing a family issue directly and quickly, rather than letting it linger — but check the bluntness is paired with genuine care.', es: 'Esta carta puede significar abordar un asunto familiar de forma directa y rápida, en lugar de dejarlo prolongarse, pero comprueba que la franqueza vaya acompañada de un cuidado genuino.' },
      growth: { en: 'This card supports deciding quickly and acting on a clear internal conclusion — the growth here is trusting your own decisiveness instead of second-guessing it.', es: 'Esta carta respalda decidir con rapidez y actuar sobre una conclusión interna clara; el crecimiento aquí es confiar en tu propia decisión en lugar de dudar de ella.' },
      general: { en: 'This card supports quick, decisive action once the facts genuinely support it — just check the speed hasn’t skipped over an important detail.', es: 'Esta carta respalda una acción rápida y decidida una vez que los hechos realmente la respaldan; solo comprueba que la velocidad no se haya saltado un detalle importante.' }
    },
    advice: { en: ['Confirm the facts, then act decisively.', 'Say it plainly, but pair directness with care.', 'Check the speed hasn’t skipped an important detail.'], es: ['Confirma los hechos, y actúa con decisión.', 'Dilo con claridad, pero acompaña la franqueza de cuidado.', 'Comprueba que la velocidad no se haya saltado un detalle importante.'] },
    reflection: { en: ['What decision have you already made that you’re still delaying?', 'What detail might you be skipping in the rush to decide?', 'What would you say plainly if directness weren’t a risk?'], es: ['¿Qué decisión ya has tomado y todavía sigues postergando?', '¿Qué detalle podrías estar saltándote en la prisa por decidir?', '¿Qué dirías con claridad si la franqueza no fuera un riesgo?'] }
  };

  CARDS['swords-queen'] = {
    theme: { en: 'CLEAR BOUNDARIES', es: 'LÍMITES CLAROS' },
    archetype: { en: 'Truth spoken without softening it into something smaller', es: 'La verdad dicha sin suavizarla hasta hacerla más pequeña' },
    vocabulary: { en: ['clarity', 'independence', 'directness', 'discernment', 'boundaries', 'unsentimental truth'], es: ['claridad', 'independencia', 'franqueza', 'discernimiento', 'límites', 'verdad sin sentimentalismo'] },
    positive: { en: ['seeing a situation exactly as it is, without softening it', 'a boundary stated clearly, without guilt attached', 'independence that doesn’t need anyone else’s validation', 'discernment sharp enough to see through a flattering story'], es: ['ver una situación exactamente como es, sin suavizarla', 'un límite expresado con claridad, sin culpa de por medio', 'una independencia que no necesita la validación de nadie más', 'un discernimiento lo bastante agudo como para ver a través de una historia halagadora'] },
    shadow: { en: ['clarity delivered so coldly it stops being useful', 'independence used to avoid genuine emotional connection', 'cutting someone off before actually hearing them out', 'directness that reads as cruelty rather than honesty'], es: ['una claridad entregada tan fríamente que deja de ser útil', 'una independencia usada para evitar una conexión emocional genuina', 'cortar a alguien antes de escucharlo de verdad', 'una franqueza que se lee como crueldad y no como honestidad'] },
    yesNo: 'YES',
    yesNoWhy: { en: 'The Queen of Swords supports the choice grounded in clear-eyed truth rather than a more flattering story — trust your own sharp read of this.', es: 'La Reina de Espadas respalda la elección fundada en una verdad clara y no en una historia más halagadora; confía en tu propia lectura aguda de esto.' },
    domains: {
      career: { en: 'This card supports an honest, unsentimental read of this job situation — see it exactly as it is, and set the boundary this decision requires without guilt.', es: 'Esta carta respalda una lectura honesta y sin sentimentalismos de esta situación laboral: velo exactamente como es, y pon sin culpa el límite que esta decisión exige.' },
      relationship: { en: 'This card favors seeing this person clearly, without a flattering story attached — and being direct about what you want, rather than hoping they’ll guess it.', es: 'Esta carta favorece ver a esta persona con claridad, sin una historia halagadora de por medio, y ser directo sobre lo que quieres, en lugar de esperar que lo adivine.' },
      money: { en: 'This card supports an unsentimental, clear-eyed read of the actual numbers — independence in this decision serves you better than seeking everyone’s approval first.', es: 'Esta carta respalda una lectura clara y sin sentimentalismos de las cifras reales; la independencia en esta decisión te sirve más que buscar primero la aprobación de todos.' },
      movement: { en: 'This card supports deciding independently, based on a clear-eyed read of what you actually need, rather than what others expect you to want.', es: 'Esta carta respalda decidir de forma independiente, basándote en una lectura clara de lo que realmente necesitas, y no en lo que otros esperan que quieras.' },
      creative: { en: 'This card favors an honest, unsentimental assessment of the work — clear feedback, even to yourself, tends to serve this project better than comforting vagueness.', es: 'Esta carta favorece una evaluación honesta y sin sentimentalismos del trabajo; una opinión clara, incluso hacia ti mismo, suele servir a este proyecto más que una vaguedad reconfortante.' },
      family: { en: 'This card supports setting a clear boundary in a family relationship, stated plainly and without excessive guilt — clarity here tends to serve everyone better than an unspoken resentment.', es: 'Esta carta respalda poner un límite claro en una relación familiar, dicho con sencillez y sin culpa excesiva; la claridad aquí suele servir a todos mejor que un resentimiento no dicho.' },
      growth: { en: 'This card supports seeing yourself exactly as you are, without a more flattering or more damning story attached. That clear-eyed honesty is where real growth starts.', es: 'Esta carta respalda verte a ti mismo exactamente como eres, sin una historia más halagadora ni más severa de por medio. Esa honestidad clara es donde empieza el crecimiento real.' },
      general: { en: 'This card supports the choice grounded in a clear, unsentimental read of the actual situation — trust your own sharp discernment over a more comfortable story.', es: 'Esta carta respalda la elección fundada en una lectura clara y sin sentimentalismos de la situación real; confía en tu propio discernimiento agudo por encima de una historia más cómoda.' }
    },
    advice: { en: ['See the situation exactly as it is.', 'State the boundary plainly, without excessive guilt.', 'Trust your own clear-eyed read over a comfortable story.'], es: ['Ve la situación exactamente como es.', 'Expresa el límite con sencillez, sin culpa excesiva.', 'Confía en tu propia lectura clara por encima de una historia cómoda.'] },
    reflection: { en: ['What would you see if you removed the flattering version of this story?', 'What boundary have you been too gentle to actually state?', 'What do you know clearly that you’ve been softening for someone else’s comfort?'], es: ['¿Qué verías si le quitaras a esta historia la versión halagadora?', '¿Qué límite has sido demasiado suave como para expresar de verdad?', '¿Qué sabes con claridad que has estado suavizando por la comodidad de otro?'] }
  };

  CARDS['swords-king'] = {
    theme: { en: 'INTELLECTUAL AUTHORITY', es: 'AUTORIDAD INTELECTUAL' },
    archetype: { en: 'Judgment that stays clear under real pressure', es: 'Un juicio que se mantiene claro bajo presión real' },
    vocabulary: { en: ['clarity', 'discernment', 'authority', 'principle', 'objectivity', 'reasoned judgment'], es: ['claridad', 'discernimiento', 'autoridad', 'principio', 'objetividad', 'juicio razonado'] },
    positive: { en: ['reasoned judgment that holds up even under real pressure', 'authority earned through clear thinking, not force', 'objectivity applied fairly, even to your own case', 'a decision made on principle rather than mood'], es: ['un juicio razonado que se sostiene incluso bajo presión real', 'una autoridad ganada con el pensamiento claro, no con la fuerza', 'una objetividad aplicada con justicia, incluso a tu propio caso', 'una decisión tomada por principio y no por estado de ánimo'] },
    shadow: { en: ['objectivity used to avoid any actual feeling about the decision', 'authority that dismisses input simply because it’s emotional', 'over-relying on logic to justify a decision already made emotionally', 'principle applied so rigidly it stops actually serving anyone'], es: ['una objetividad usada para evitar cualquier sentimiento real sobre la decisión', 'una autoridad que descarta cualquier opinión solo por ser emocional', 'confiar en exceso en la lógica para justificar una decisión ya tomada emocionalmente', 'un principio aplicado con tal rigidez que deja de servir a nadie'] },
    yesNo: 'YES',
    yesNoWhy: { en: 'The King of Swords supports a decision reasoned through carefully and objectively — trust the clear thinking you’ve actually done here.', es: 'El Rey de Espadas respalda una decisión razonada con cuidado y objetividad; confía en el pensamiento claro que de verdad has hecho aquí.' },
    domains: {
      career: { en: 'This card supports a clear-headed, principled decision about this job — reason it through carefully, and trust the conclusion once you’ve actually done that work.', es: 'Esta carta respalda una decisión serena y basada en principios sobre este trabajo: razónala con cuidado, y confía en la conclusión una vez que de verdad hayas hecho ese trabajo.' },
      relationship: { en: 'This card favors thinking this through clearly rather than purely emotionally — but check that objectivity isn’t being used to avoid feeling anything about it at all.', es: 'Esta carta favorece pensarlo con claridad y no solo emocionalmente, pero comprueba que la objetividad no se esté usando para evitar sentir nada al respecto.' },
      money: { en: 'This card strongly supports a reasoned, principle-based financial decision — trust the careful analysis you’ve actually done over a purely emotional impulse.', es: 'Esta carta respalda con fuerza una decisión financiera razonada y basada en principios: confía en el análisis cuidadoso que de verdad has hecho, por encima de un impulso puramente emocional.' },
      movement: { en: 'This card supports weighing this move with clear, objective reasoning — the logic here is trustworthy, as long as it isn’t drowning out something you also genuinely feel.', es: 'Esta carta respalda sopesar esta mudanza con un razonamiento claro y objetivo; la lógica aquí es fiable, siempre que no esté ahogando algo que también sientes de verdad.' },
      creative: { en: 'This card favors approaching the work with disciplined, clear-headed judgment — structure and reason can strengthen this project rather than constrain it.', es: 'Esta carta favorece afrontar el trabajo con un juicio disciplinado y sereno: la estructura y la razón pueden fortalecer este proyecto en lugar de limitarlo.' },
      family: { en: 'This card supports approaching a family conflict with fair, reasoned judgment rather than reacting from whoever’s emotion is loudest in the moment.', es: 'Esta carta respalda afrontar un conflicto familiar con un juicio justo y razonado, en lugar de reaccionar según la emoción de quien grite más fuerte en el momento.' },
      growth: { en: 'This card supports trusting your own careful, reasoned judgment about yourself — authority here comes from clear thinking you’ve actually earned.', es: 'Esta carta respalda confiar en tu propio juicio cuidadoso y razonado sobre ti mismo; la autoridad aquí viene de un pensamiento claro que realmente has ganado.' },
      general: { en: 'This card supports a decision reasoned through carefully, on principle — trust the clear thinking, as long as it hasn’t crowded out what you actually feel.', es: 'Esta carta respalda una decisión razonada con cuidado, por principio; confía en el pensamiento claro, siempre que no haya desplazado lo que realmente sientes.' }
    },
    advice: { en: ['Reason this through carefully before deciding.', 'Trust the clear thinking you’ve actually done.', 'Check objectivity isn’t avoiding a real feeling.'], es: ['Razona esto con cuidado antes de decidir.', 'Confía en el pensamiento claro que de verdad has hecho.', 'Comprueba que la objetividad no esté evitando un sentimiento real.'] },
    reflection: { en: ['What does careful, honest reasoning actually conclude here?', 'What feeling might objectivity be helping you avoid?', 'What principle matters most to you in this specific decision?'], es: ['¿A qué conclusión llega en realidad un razonamiento cuidadoso y honesto aquí?', '¿Qué sentimiento podría estar ayudándote a evitar la objetividad?', '¿Qué principio te importa más en esta decisión concreta?'] }
  };

  // ---- PENTACLES (earth: money, work, the material world, the body) ---------

  CARDS['pentacles-1'] = {
    theme: { en: 'NEW OPPORTUNITY', es: 'OPORTUNIDAD NUEVA' },
    archetype: { en: 'A seed with genuinely good soil around it', es: 'Una semilla con una tierra realmente buena alrededor' },
    vocabulary: { en: ['opportunity', 'new beginning', 'potential', 'groundwork', 'a solid start', 'seed money'], es: ['oportunidad', 'comienzo nuevo', 'potencial', 'base', 'un comienzo sólido', 'capital inicial'] },
    positive: { en: ['a genuinely solid opportunity worth taking seriously', 'practical potential, not just an exciting idea', 'the groundwork for real, lasting security', 'a concrete first step instead of a vague hope'], es: ['una oportunidad genuinamente sólida que vale la pena tomar en serio', 'un potencial práctico, no solo una idea emocionante', 'la base para una seguridad real y duradera', 'un primer paso concreto en lugar de una esperanza vaga'] },
    shadow: { en: ['an opportunity that looks solid but hasn’t actually been verified', 'excitement about potential without a plan to realize it', 'planting the seed and then neglecting to tend it', 'confusing a small win with a fully secured outcome'], es: ['una oportunidad que parece sólida pero en realidad no se ha verificado', 'entusiasmo por el potencial sin un plan para hacerlo realidad', 'plantar la semilla y luego descuidar cuidarla', 'confundir una pequeña victoria con un resultado ya asegurado'] },
    yesNo: 'YES',
    yesNoWhy: { en: 'The Ace of Pentacles supports a practical, well-grounded opportunity — the potential here is real, as long as it’s actually tended.', es: 'El As de Oros respalda una oportunidad práctica y bien fundamentada; el potencial aquí es real, siempre que de verdad se cuide.' },
    domains: {
      career: { en: 'This card suggests a genuinely solid opportunity is available — verify the concrete details, then trust that the groundwork here is real, not just promising in theory.', es: 'Esta carta sugiere que hay disponible una oportunidad genuinamente sólida: verifica los detalles concretos, y luego confía en que la base aquí es real, no solo prometedora en teoría.' },
      relationship: { en: 'This card can mean a practical, grounded foundation for this connection — less about fireworks and more about something that could actually be built to last.', es: 'Esta carta puede significar una base práctica y sólida para esta conexión: menos sobre los fuegos artificiales y más sobre algo que de verdad podría construirse para durar.' },
      money: { en: 'This is one of the clearest cards for a genuinely good financial opportunity — practical, grounded potential worth acting on, as long as you tend it deliberately.', es: 'Esta es una de las cartas más claras para una oportunidad financiera genuinamente buena: un potencial práctico y fundamentado que vale la pena aprovechar, siempre que lo cuides de forma deliberada.' },
      movement: { en: 'This card supports a move with genuinely solid, practical groundwork behind it — a real job, a real plan — rather than one built purely on hope.', es: 'Esta carta respalda una mudanza con una base genuinamente sólida y práctica detrás (un trabajo real, un plan real), y no una construida solo sobre esperanza.' },
      creative: { en: 'This card supports a creative idea with real, practical potential — worth investing concrete time and resources into, not just admiring from a distance.', es: 'Esta carta respalda una idea creativa con un potencial real y práctico: merece invertir tiempo y recursos concretos, no solo admirarla desde lejos.' },
      family: { en: 'This card can mean a genuine opportunity to build something more stable within a family relationship — a solid, practical start worth actually tending.', es: 'Esta carta puede significar una oportunidad genuina de construir algo más estable dentro de una relación familiar: un comienzo sólido y práctico que vale la pena cuidar.' },
      growth: { en: 'This card supports the practical groundwork of self-improvement — a real, concrete habit or skill worth planting now, rather than an abstract wish to be different.', es: 'Esta carta respalda la base práctica de la mejora personal: un hábito o una habilidad reales y concretos que vale la pena plantar ahora, en lugar de un deseo abstracto de ser diferente.' },
      general: { en: 'This card suggests a genuinely solid, practical opportunity is available here — worth taking seriously, as long as you give it real tending rather than just hope.', es: 'Esta carta sugiere que aquí hay disponible una oportunidad genuinamente sólida y práctica: vale la pena tomarla en serio, siempre que le des un cuidado real y no solo esperanza.' }
    },
    advice: { en: ['Verify the concrete details before committing.', 'Give the opportunity real, ongoing attention.', 'Take the practical first step now.'], es: ['Verifica los detalles concretos antes de comprometerte.', 'Dale a la oportunidad una atención real y continua.', 'Da el primer paso práctico ahora.'] },
    reflection: { en: ['What practical first step have you been putting off?', 'What opportunity here have you verified, versus just hoped is solid?', 'What would you plant now if you trusted the soil was actually good?'], es: ['¿Qué paso práctico has estado postergando?', '¿Qué oportunidad aquí has verificado, frente a solo esperar que sea sólida?', '¿Qué plantarías ahora si confiaras en que la tierra es realmente buena?'] }
  };

  CARDS['pentacles-2'] = {
    theme: { en: 'JUGGLING PRIORITIES', es: 'MALABARES CON PRIORIDADES' },
    archetype: { en: 'Keeping several real things moving at once', es: 'Mantener varias cosas reales en movimiento a la vez' },
    vocabulary: { en: ['balance', 'adaptability', 'juggling', 'flexibility', 'competing priorities', 'staying afloat'], es: ['equilibrio', 'adaptabilidad', 'malabares', 'flexibilidad', 'prioridades encontradas', 'mantenerse a flote'] },
    positive: { en: ['adapting skillfully as circumstances keep shifting', 'balancing more than one priority without dropping either', 'flexibility that lets you handle change gracefully', 'staying afloat through genuinely busy circumstances'], es: ['adaptarte con habilidad mientras las circunstancias siguen cambiando', 'equilibrar más de una prioridad sin dejar caer ninguna', 'una flexibilidad que te permite manejar el cambio con soltura', 'mantenerte a flote en circunstancias genuinamente ocupadas'] },
    shadow: { en: ['juggling so many things that none get real attention', 'balance that’s actually just barely avoiding collapse', 'overcommitting because saying no feels harder than adding more', 'mistaking constant motion for actual progress'], es: ['hacer malabares con tantas cosas que ninguna recibe atención real', 'un equilibrio que en realidad es apenas evitar el colapso', 'sobrecomprometerte porque decir no se siente más difícil que añadir más', 'confundir el movimiento constante con el progreso real'] },
    yesNo: 'MAYBE',
    yesNoWhy: { en: 'The Two of Pentacles asks whether you can genuinely handle one more thing right now, or whether the balance is already close to tipping.', es: 'El Dos de Oros pregunta si de verdad puedes con una cosa más ahora mismo, o si el equilibrio ya está cerca de romperse.' },
    domains: {
      career: { en: 'This card asks whether leaving now means juggling too much at once — a transition on top of everything else already in motion. Check the timing honestly.', es: 'Esta carta pregunta si irte ahora significa hacer malabares con demasiado a la vez: una transición encima de todo lo demás ya en marcha. Comprueba el momento con honestidad.' },
      relationship: { en: 'This card asks whether you genuinely have the capacity to pursue this right now, alongside everything else you’re already balancing — or whether it needs to wait.', es: 'Esta carta pregunta si de verdad tienes la capacidad para perseguir esto ahora mismo, junto a todo lo demás que ya equilibras, o si necesita esperar.' },
      money: { en: 'This card describes juggling multiple financial priorities — the decision here is less about the money itself and more about what you can genuinely sustain at once.', es: 'Esta carta describe hacer malabares con varias prioridades financieras; la decisión aquí es menos sobre el dinero en sí y más sobre lo que realmente puedes sostener a la vez.' },
      movement: { en: 'This card asks whether this move fits realistically alongside everything else currently in motion in your life, or whether it’s one priority too many right now.', es: 'Esta carta pregunta si esta mudanza encaja de forma realista junto a todo lo demás que ahora está en marcha en tu vida, o si es una prioridad de más por ahora.' },
      creative: { en: 'This card asks whether you have the actual bandwidth for this project right now, alongside everything else — flexibility helps, but it isn’t infinite.', es: 'Esta carta pregunta si de verdad tienes la capacidad para este proyecto ahora, junto a todo lo demás; la flexibilidad ayuda, pero no es infinita.' },
      family: { en: 'This card describes balancing family obligations with everything else you’re carrying — check honestly whether the balance is sustainable or quietly close to tipping.', es: 'Esta carta describe equilibrar obligaciones familiares con todo lo demás que cargas; comprueba con honestidad si el equilibrio es sostenible o está a punto de romperse en silencio.' },
      growth: { en: 'This card asks whether you’re trying to work on too many things about yourself at once, rather than choosing one and actually seeing it through.', es: 'Esta carta pregunta si intentas trabajar en demasiadas cosas de ti mismo a la vez, en lugar de elegir una y llevarla realmente a término.' },
      general: { en: 'This card asks whether you genuinely have the capacity for this right now, given everything else already in motion — the timing matters as much as the decision itself.', es: 'Esta carta pregunta si de verdad tienes la capacidad para esto ahora, dado todo lo demás ya en marcha; el momento importa tanto como la decisión en sí.' }
    },
    advice: { en: ['Check honestly whether the balance is sustainable.', 'Choose fewer priorities and give them real attention.', 'Consider whether the timing, not the decision, is the issue.'], es: ['Comprueba con honestidad si el equilibrio es sostenible.', 'Elige menos prioridades y dales atención real.', 'Considera si el problema es el momento, no la decisión.'] },
    reflection: { en: ['What are you juggling that’s close to tipping over?', 'What would you set down to give the rest real attention?', 'Is this the right decision, or just the wrong moment for it?'], es: ['¿Qué estás malabareando que está cerca de romperse?', '¿Qué soltarías para darle al resto una atención real?', '¿Es esta la decisión correcta, o solo el momento equivocado?'] }
  };

  CARDS['pentacles-3'] = {
    theme: { en: 'SKILLED COLLABORATION', es: 'COLABORACIÓN CON OFICIO' },
    archetype: { en: 'Real craft, recognized by people who know the difference', es: 'Un oficio real, reconocido por quienes saben notar la diferencia' },
    vocabulary: { en: ['craftsmanship', 'teamwork', 'recognition', 'skill', 'collaboration', 'building together'], es: ['oficio', 'trabajo en equipo', 'reconocimiento', 'habilidad', 'colaboración', 'construir juntos'] },
    positive: { en: ['skill recognized by people who genuinely know good work when they see it', 'building something better through real collaboration', 'craftsmanship that improves with feedback rather than resisting it', 'taking pride in work that’s actually well made'], es: ['una habilidad reconocida por quienes de verdad saben distinguir un buen trabajo', 'construir algo mejor a través de una colaboración real', 'un oficio que mejora con la opinión ajena en lugar de resistirse a ella', 'sentir orgullo por un trabajo realmente bien hecho'] },
    shadow: { en: ['working alone on something that genuinely needs other hands', 'skill without the humility to keep improving', 'collaboration slowed by too many competing opinions', 'recognition sought more than the actual quality of the work'], es: ['trabajar en solitario en algo que de verdad necesita otras manos', 'una habilidad sin la humildad de seguir mejorando', 'una colaboración ralentizada por demasiadas opiniones encontradas', 'buscar el reconocimiento más que la calidad real del trabajo'] },
    yesNo: 'YES',
    yesNoWhy: { en: 'The Three of Pentacles supports collaboration and genuine skill-building — this card favors working with others over going it entirely alone.', es: 'El Tres de Oros respalda la colaboración y el desarrollo real de una habilidad; esta carta favorece trabajar con otros por encima de ir completamente solo.' },
    domains: {
      career: { en: 'This card supports a move that lets your actual skill be recognized by people who know good work — leaving for a place that values craft over politics fits this energy.', es: 'Esta carta respalda un cambio que permita que tu habilidad real sea reconocida por quienes saben distinguir un buen trabajo; irte a un lugar que valore el oficio por encima de la política encaja con esta energía.' },
      relationship: { en: 'This card can mean a connection built through genuine collaboration and mutual respect for what each person brings — something built together, not just felt.', es: 'Esta carta puede significar una conexión construida a través de una colaboración genuina y un respeto mutuo por lo que cada uno aporta: algo construido juntos, no solo sentido.' },
      money: { en: 'This card favors a financial approach built on real skill and collaboration — pooling expertise or resources with people who know what they’re doing.', es: 'Esta carta favorece un enfoque financiero construido sobre habilidad real y colaboración: reunir experiencia o recursos con personas que saben lo que hacen.' },
      movement: { en: 'This card can support a move made to join a community of skilled, like-minded people — one where your craft would be recognized rather than overlooked.', es: 'Esta carta puede respaldar una mudanza hecha para unirte a una comunidad de personas hábiles y afines, donde tu oficio sería reconocido en lugar de pasado por alto.' },
      creative: { en: 'This card strongly favors seeking feedback and collaboration on this project — the work will likely improve more through others’ skilled eyes than in isolation.', es: 'Esta carta favorece con fuerza buscar opinión y colaboración en este proyecto; el trabajo probablemente mejore más con ojos expertos ajenos que en soledad.' },
      family: { en: 'This card can mean building something together as a family — a shared project or effort that lets everyone’s actual contribution be recognized.', es: 'Esta carta puede significar construir algo juntos en familia: un proyecto o esfuerzo compartido que permita reconocer la contribución real de cada uno.' },
      growth: { en: 'This card supports growth through mentorship or collaboration rather than trying to figure everything out entirely on your own.', es: 'Esta carta respalda el crecimiento a través de la mentoría o la colaboración, en lugar de intentar resolverlo todo completamente solo.' },
      general: { en: 'This card favors an approach built on real skill and genuine collaboration — seek out people who know what they’re doing rather than handling this entirely alone.', es: 'Esta carta favorece un enfoque construido sobre una habilidad real y una colaboración genuina: busca a quienes saben lo que hacen en lugar de manejar esto completamente solo.' }
    },
    advice: { en: ['Seek collaboration instead of going it entirely alone.', 'Let genuine feedback improve the work.', 'Choose the option where your actual skill gets recognized.'], es: ['Busca colaboración en lugar de ir completamente solo.', 'Deja que una opinión genuina mejore el trabajo.', 'Elige la opción donde tu habilidad real sea reconocida.'] },
    reflection: { en: ['Who could you actually build this with, instead of alone?', 'Where is your real skill going unrecognized right now?', 'What feedback have you been avoiding that could improve this?'], es: ['¿Con quién podrías construir esto de verdad, en lugar de solo?', '¿Dónde está tu habilidad real sin reconocimiento ahora mismo?', '¿Qué opinión has estado evitando que podría mejorar esto?'] }
  };

  CARDS['pentacles-4'] = {
    theme: { en: 'HOLDING TIGHT', es: 'AFERRARSE' },
    archetype: { en: 'Security that has turned into a clenched fist', es: 'Una seguridad que se ha convertido en un puño cerrado' },
    vocabulary: { en: ['control', 'security', 'conservatism', 'holding on', 'scarcity', 'guardedness'], es: ['control', 'seguridad', 'conservadurismo', 'aferrarse', 'escasez', 'cautela'] },
    positive: { en: ['protecting real security you’ve genuinely worked to build', 'caution that comes from having learned a hard lesson before', 'holding steady instead of taking an unnecessary risk', 'valuing stability as a legitimate goal, not a lesser one'], es: ['proteger una seguridad real que de verdad has trabajado para construir', 'una cautela que viene de haber aprendido antes una lección difícil', 'mantenerte firme en lugar de tomar un riesgo innecesario', 'valorar la estabilidad como una meta legítima, no menor'] },
    shadow: { en: ['holding so tightly that nothing new can actually come in', 'scarcity thinking even when there’s genuinely enough', 'control used to manage anxiety rather than real risk', 'staying rigid long after the original threat has passed'], es: ['aferrarte con tanta fuerza que nada nuevo puede entrar', 'un pensamiento de escasez incluso cuando de verdad hay suficiente', 'un control usado para calmar la ansiedad y no un riesgo real', 'seguir rígido mucho después de que la amenaza original haya pasado'] },
    yesNo: 'NO',
    yesNoWhy: { en: 'The Four of Pentacles usually describes a grip that’s tightened past the point of usefulness — this card rarely supports holding on any harder.', es: 'El Cuatro de Oros suele describir un agarre que se ha cerrado más allá de lo útil; esta carta rara vez respalda sujetar aún más fuerte.' },
    domains: {
      career: { en: 'This card warns that staying purely out of fear of financial insecurity may be holding on tighter than the actual risk requires. Check what you’re really protecting.', es: 'Esta carta advierte que quedarte solo por miedo a la inseguridad financiera puede ser sujetar más fuerte de lo que el riesgo real exige. Comprueba qué estás protegiendo en realidad.' },
      relationship: { en: 'This card warns against pursuing this from a place of scarcity — grasping at connection out of fear of being alone rather than genuine desire.', es: 'Esta carta advierte contra perseguir esto desde un lugar de escasez: aferrarte a una conexión por miedo a la soledad y no por un deseo genuino.' },
      money: { en: 'This card warns against holding onto money so tightly that it stops serving any purpose beyond the holding itself. Some controlled release may serve you better than a clenched fist.', es: 'Esta carta advierte contra aferrarte tanto al dinero que deje de servir para algo más que el propio aferrarte. Soltar algo de forma controlada puede servirte mejor que un puño cerrado.' },
      movement: { en: 'This card warns that staying purely to protect a sense of security may be holding on tighter than the situation actually requires. Check if the fear is bigger than the real risk.', es: 'Esta carta advierte que quedarte solo para proteger una sensación de seguridad puede ser sujetar más fuerte de lo que la situación realmente exige. Comprueba si el miedo es mayor que el riesgo real.' },
      creative: { en: 'This card warns against holding a project so tightly — protecting it from feedback, from change — that it can’t actually grow into anything more.', es: 'Esta carta advierte contra sujetar tanto un proyecto (protegerlo de las opiniones, del cambio) que no pueda en realidad crecer hacia algo más.' },
      family: { en: 'This card can describe controlling a family situation out of fear rather than genuine need — check whether loosening your grip might actually serve the relationship better.', es: 'Esta carta puede describir controlar una situación familiar por miedo y no por una necesidad genuina; comprueba si aflojar el agarre podría en realidad servir mejor a la relación.' },
      growth: { en: 'This card asks what you’re holding onto so tightly — an old identity, an old fear — that it’s actually preventing the growth you say you want.', es: 'Esta carta pregunta a qué te aferras con tanta fuerza (una vieja identidad, un viejo miedo) que en realidad está impidiendo el crecimiento que dices querer.' },
      general: { en: 'This card warns that the grip here has likely tightened past what the actual situation requires. Some release, not more holding on, is probably what’s needed.', es: 'Esta carta advierte que el agarre aquí probablemente se ha cerrado más allá de lo que la situación realmente requiere. Probablemente haga falta soltar algo, no aferrarse más.' }
    },
    advice: { en: ['Check what fear, not real risk, is making you hold on.', 'Consider a controlled release instead of a clenched fist.', 'Ask if the grip has outlasted the actual threat.'], es: ['Comprueba qué miedo, no un riesgo real, te hace aferrarte.', 'Considera soltar algo de forma controlada en lugar de un puño cerrado.', 'Pregúntate si el agarre ha durado más que la amenaza real.'] },
    reflection: { en: ['What are you holding onto so tightly that nothing new can get in?', 'What would loosening your grip here actually risk?', 'Is this security, or fear wearing security’s clothes?'], es: ['¿A qué te aferras con tanta fuerza que nada nuevo puede entrar?', '¿Qué arriesgaría en realidad aflojar el agarre aquí?', '¿Esto es seguridad, o miedo disfrazado de seguridad?'] }
  };

  CARDS['pentacles-5'] = {
    theme: { en: 'HARDSHIP', es: 'DIFICULTAD' },
    archetype: { en: 'Feeling left out in the cold, closer to warmth than it looks', es: 'Sentirte al margen, en el frío, más cerca del calor de lo que parece' },
    vocabulary: { en: ['hardship', 'scarcity', 'exclusion', 'worry', 'need', 'overlooked help'], es: ['dificultad', 'escasez', 'exclusión', 'preocupación', 'necesidad', 'ayuda pasada por alto'] },
    positive: { en: ['recognizing that help may be closer than it currently feels', 'honesty about genuine hardship instead of pretending it isn’t there', 'resourcefulness that develops through a real difficult stretch', 'reaching out instead of suffering through this in isolation'], es: ['reconocer que la ayuda puede estar más cerca de lo que ahora se siente', 'honestidad sobre una dificultad real en lugar de fingir que no existe', 'un ingenio que se desarrolla a través de una etapa realmente difícil', 'pedir ayuda en lugar de sufrir esto en aislamiento'] },
    shadow: { en: ['so focused on what’s lacking that you miss the help available', 'pride that keeps you from asking for support you actually need', 'a scarcity mindset that persists even once things improve', 'isolating with a hardship instead of letting anyone else in'], es: ['tan centrado en lo que falta que se te escapa la ayuda disponible', 'un orgullo que te impide pedir el apoyo que realmente necesitas', 'una mentalidad de escasez que persiste incluso cuando las cosas mejoran', 'aislarte con una dificultad en lugar de dejar entrar a alguien más'] },
    yesNo: 'NO',
    yesNoWhy: { en: 'The Five of Pentacles suggests this isn’t the moment for a risky move — the priority right now is stability and support, not further exposure.', es: 'El Cinco de Oros sugiere que este no es el momento para un movimiento arriesgado; la prioridad ahora es la estabilidad y el apoyo, no más exposición.' },
    domains: {
      career: { en: 'This card warns against leaving during a genuinely precarious financial stretch without a real safety net first. Address the hardship directly before adding more uncertainty.', es: 'Esta carta advierte contra irte durante una etapa financiera realmente precaria sin antes contar con una red de seguridad real. Aborda la dificultad directamente antes de sumar más incertidumbre.' },
      relationship: { en: 'This card can describe pursuing someone while feeling genuinely excluded or unworthy — check whether that feeling reflects the actual situation, or an old wound talking.', es: 'Esta carta puede describir perseguir a alguien mientras te sientes genuinamente excluido o indigno; comprueba si ese sentimiento refleja la situación real, o si habla una vieja herida.' },
      money: { en: 'This card describes real financial hardship — the priority right now is finding the help or resources that are likely more available than they currently feel.', es: 'Esta carta describe una dificultad financiera real; la prioridad ahora es encontrar la ayuda o los recursos que probablemente estén más disponibles de lo que ahora se sienten.' },
      movement: { en: 'This card warns against a move made during real financial hardship without a solid plan — stabilize the current situation before taking on a bigger unknown.', es: 'Esta carta advierte contra una mudanza hecha en medio de una dificultad financiera real sin un plan sólido; estabiliza la situación actual antes de asumir una incertidumbre mayor.' },
      creative: { en: 'This card can describe pursuing creative work while genuinely under-resourced. Seek out overlooked support — a grant, a mentor, a community — rather than doing this entirely without help.', es: 'Esta carta puede describir hacer trabajo creativo con recursos genuinamente escasos. Busca un apoyo que hayas pasado por alto (una beca, un mentor, una comunidad) en lugar de hacer esto sin ninguna ayuda.' },
      family: { en: 'This card can describe feeling genuinely excluded from a family situation. Check whether help or reconciliation is closer than it currently feels before assuming you’re truly alone in this.', es: 'Esta carta puede describir sentirte genuinamente excluido de una situación familiar. Comprueba si la ayuda o la reconciliación están más cerca de lo que ahora se sienten, antes de asumir que estás realmente solo en esto.' },
      growth: { en: 'This card asks what support you’ve been too proud, or too used to going without, to actually ask for. Growth here may mean letting help in.', es: 'Esta carta pregunta qué apoyo has sido demasiado orgulloso, o demasiado acostumbrado a prescindir, como para pedir de verdad. Crecer aquí puede significar dejar entrar la ayuda.' },
      general: { en: 'This card describes a genuinely difficult stretch — the priority is stability and support right now, not a bigger risk on top of an already precarious situation.', es: 'Esta carta describe una etapa genuinamente difícil; la prioridad ahora es la estabilidad y el apoyo, no un riesgo mayor encima de una situación ya precaria.' }
    },
    advice: { en: ['Look for help that may be closer than it feels.', 'Stabilize the current hardship before adding a new risk.', 'Let someone else in instead of isolating with this.'], es: ['Busca la ayuda que puede estar más cerca de lo que se siente.', 'Estabiliza la dificultad actual antes de sumar un riesgo nuevo.', 'Deja entrar a alguien más en lugar de aislarte con esto.'] },
    reflection: { en: ['What help might be closer than it currently feels?', 'What are you too proud to actually ask for?', 'What would change if you let someone else in on this?'], es: ['¿Qué ayuda podría estar más cerca de lo que ahora se siente?', '¿Qué eres demasiado orgulloso como para pedir de verdad?', '¿Qué cambiaría si dejaras entrar a alguien más en esto?'] }
  };

  CARDS['pentacles-6'] = {
    theme: { en: 'GENEROSITY', es: 'GENEROSIDAD' },
    archetype: { en: 'An exchange, weighed carefully on both sides', es: 'Un intercambio, sopesado con cuidado en ambos lados' },
    vocabulary: { en: ['generosity', 'exchange', 'balance of power', 'giving and receiving', 'fairness', 'support'], es: ['generosidad', 'intercambio', 'balance de poder', 'dar y recibir', 'justicia', 'apoyo'] },
    positive: { en: ['generosity that goes both ways, not just one', 'receiving help gracefully, without shame attached', 'giving from genuine abundance rather than obligation', 'a fair exchange where both sides actually benefit'], es: ['una generosidad que va en ambas direcciones, no solo en una', 'recibir ayuda con gracia, sin vergüenza de por medio', 'dar desde una abundancia genuina y no desde la obligación', 'un intercambio justo donde ambas partes realmente se benefician'] },
    shadow: { en: ['generosity that comes with strings quietly attached', 'a power imbalance disguised as simple kindness', 'giving so much you deplete your own resources', 'accepting help that comes at a cost you haven’t noticed yet'], es: ['una generosidad que en silencio viene con condiciones', 'un desequilibrio de poder disfrazado de simple amabilidad', 'dar tanto que agotas tus propios recursos', 'aceptar una ayuda que tiene un coste que todavía no has notado'] },
    yesNo: 'MAYBE',
    yesNoWhy: { en: 'The Six of Pentacles asks you to check the actual balance of power in this exchange before assuming it’s as generous as it looks.', es: 'El Seis de Oros te pide comprobar el balance real de poder en este intercambio, antes de asumir que es tan generoso como parece.' },
    domains: {
      career: { en: 'This card asks whether this job offers a fair exchange — what you give versus what you actually receive — or whether the balance has quietly tipped unfairly against you.', es: 'Esta carta pregunta si este trabajo ofrece un intercambio justo (lo que das frente a lo que realmente recibes), o si el balance se ha inclinado en silencio de forma injusta en tu contra.' },
      relationship: { en: 'This card asks whether give and take here is genuinely balanced, or whether one person is quietly in the position of giving, and the other of receiving.', es: 'Esta carta pregunta si el dar y recibir aquí está realmente equilibrado, o si una persona está en silencio en la posición de dar, y la otra de recibir.' },
      money: { en: 'This card favors a financial exchange that’s genuinely fair to both sides — check whether you’re over-giving, or accepting help that comes with an unspoken cost.', es: 'Esta carta favorece un intercambio financiero genuinamente justo para ambas partes; comprueba si estás dando de más, o aceptando una ayuda que trae un coste no dicho.' },
      movement: { en: 'If this move involves financial support from someone else, this card asks whether that arrangement is genuinely balanced, or whether it changes the power dynamic in a way worth naming.', es: 'Si esta mudanza implica apoyo financiero de otra persona, esta carta pregunta si ese acuerdo está realmente equilibrado, o si cambia la dinámica de poder de una forma que vale la pena nombrar.' },
      creative: { en: 'This card favors a fair creative exchange — collaboration, mentorship or funding where both sides genuinely benefit, rather than one party quietly giving more.', es: 'Esta carta favorece un intercambio creativo justo: colaboración, mentoría o financiación donde ambas partes se benefician de verdad, y no una en la que una parte da más en silencio.' },
      family: { en: 'This card asks whether generosity within the family currently flows both ways, or whether you’ve quietly become the only one giving.', es: 'Esta carta pregunta si la generosidad dentro de la familia fluye actualmente en ambas direcciones, o si en silencio te has convertido en el único que da.' },
      growth: { en: 'This card asks whether you’re able to receive support as gracefully as you offer it — growth here includes learning to accept generosity without guilt.', es: 'Esta carta pregunta si eres capaz de recibir apoyo con la misma gracia con la que lo ofreces; el crecimiento aquí incluye aprender a aceptar la generosidad sin culpa.' },
      general: { en: 'This card asks you to check the actual balance of give and take here — before assuming an exchange is as fair or as generous as it currently appears.', es: 'Esta carta te pide comprobar el balance real de dar y recibir aquí, antes de asumir que un intercambio es tan justo o generoso como ahora parece.' }
    },
    advice: { en: ['Check whether the exchange is genuinely balanced.', 'Notice if generosity here comes with unspoken strings.', 'Let yourself receive as gracefully as you give.'], es: ['Comprueba si el intercambio está realmente equilibrado.', 'Fíjate si esta generosidad viene con condiciones no dichas.', 'Permítete recibir con la misma gracia con la que das.'] },
    reflection: { en: ['Is the give and take here actually balanced?', 'What has this generosity quietly cost you?', 'Where do you need to let yourself receive, not just give?'], es: ['¿El dar y recibir aquí está realmente equilibrado?', '¿Qué le ha costado en silencio esta generosidad?', '¿Dónde necesitas permitirte recibir, y no solo dar?'] }
  };

  CARDS['pentacles-7'] = {
    theme: { en: 'PATIENT ASSESSMENT', es: 'EVALUACIÓN PACIENTE' },
    archetype: { en: 'Standing back to see if the effort has actually grown', es: 'Dar un paso atrás para ver si el esfuerzo realmente ha crecido' },
    vocabulary: { en: ['patience', 'assessment', 'long-term investment', 'evaluation', 'growth over time', 'a pause to check progress'], es: ['paciencia', 'evaluación', 'inversión a largo plazo', 'valoración', 'crecimiento con el tiempo', 'una pausa para comprobar el progreso'] },
    positive: { en: ['genuinely assessing progress instead of assuming success or failure', 'patience with something that needs more time to show results', 'trusting an investment already made rather than abandoning it early', 'stepping back to evaluate honestly instead of reacting impulsively'], es: ['evaluar de verdad el progreso en lugar de suponer éxito o fracaso', 'paciencia con algo que necesita más tiempo para dar resultados', 'confiar en una inversión ya hecha en lugar de abandonarla pronto', 'dar un paso atrás para evaluar con honestidad en lugar de reaccionar por impulso'] },
    shadow: { en: ['so much waiting that action never actually resumes', 'patience mistaken for a reason to avoid a real decision', 'assessing endlessly instead of eventually acting on the assessment', 'sticking with something long after honest evaluation says otherwise'], es: ['tanta espera que la acción nunca se retoma', 'confundir la paciencia con una excusa para evitar una decisión real', 'evaluar sin fin en lugar de actuar finalmente según la evaluación', 'seguir con algo mucho después de que una evaluación honesta diga lo contrario'] },
    yesNo: 'MAYBE',
    yesNoWhy: { en: 'The Seven of Pentacles asks for an honest assessment before deciding — not more waiting for its own sake, but a genuine look at whether the effort has paid off.', es: 'El Siete de Oros pide una evaluación honesta antes de decidir, no más espera por sí misma, sino una mirada genuina a si el esfuerzo ha dado fruto.' },
    domains: {
      career: { en: 'This card asks for an honest assessment of the effort you’ve already invested here — has it genuinely started to pay off, or has enough time passed to conclude it won’t?', es: 'Esta carta pide una evaluación honesta del esfuerzo que ya has invertido aquí: ¿de verdad ha empezado a dar fruto, o ha pasado suficiente tiempo como para concluir que no lo hará?' },
      relationship: { en: 'This card favors patience with something that’s genuinely still developing — but asks for an honest check-in on whether it’s actually growing, or simply staying the same.', es: 'Esta carta favorece la paciencia con algo que de verdad todavía se está desarrollando, pero pide una comprobación honesta de si realmente está creciendo, o simplemente se mantiene igual.' },
      money: { en: 'This card supports patience with a long-term financial investment, as long as an honest assessment shows genuine, if slow, growth — not stagnation.', es: 'Esta carta respalda la paciencia con una inversión financiera a largo plazo, siempre que una evaluación honesta muestre un crecimiento genuino, aunque lento, y no un estancamiento.' },
      movement: { en: 'This card asks whether you’ve given your current situation genuinely enough time to assess fairly, or whether you’re deciding before the results have had a real chance to show.', es: 'Esta carta pregunta si le has dado a tu situación actual el tiempo suficiente como para evaluarla con justicia, o si estás decidiendo antes de que los resultados hayan tenido una oportunidad real de mostrarse.' },
      creative: { en: 'This card favors patience with a project that’s genuinely still developing — step back and assess honestly whether the slow progress is actually progress.', es: 'Esta carta favorece la paciencia con un proyecto que de verdad todavía se está desarrollando: da un paso atrás y evalúa con honestidad si el progreso lento es en realidad progreso.' },
      family: { en: 'This card supports patience with a slowly healing family relationship — but asks for an honest look at whether it’s actually improving, or simply not getting worse.', es: 'Esta carta respalda la paciencia con una relación familiar que sana lentamente, pero pide una mirada honesta a si realmente está mejorando, o solo no empeora.' },
      growth: { en: 'This card asks you to honestly assess your own progress rather than assuming either failure or success by default — real change often takes longer to see than to happen.', es: 'Esta carta te pide evaluar con honestidad tu propio progreso en lugar de suponer por defecto el fracaso o el éxito; el cambio real suele tardar más en verse que en ocurrir.' },
      general: { en: 'This card favors an honest assessment of actual progress before deciding — not more waiting for its own sake, but a genuine look at whether the effort has paid off.', es: 'Esta carta favorece una evaluación honesta del progreso real antes de decidir, no más espera por sí misma, sino una mirada genuina a si el esfuerzo ha dado fruto.' }
    },
    advice: { en: ['Assess the actual progress honestly before deciding.', 'Give genuine growth enough time to show.', 'Don’t let patience become an excuse to avoid deciding.'], es: ['Evalúa con honestidad el progreso real antes de decidir.', 'Dale al crecimiento genuino tiempo suficiente para mostrarse.', 'No dejes que la paciencia se convierta en excusa para no decidir.'] },
    reflection: { en: ['What honest progress have you made that you haven’t acknowledged?', 'Has this had a genuinely fair chance to grow?', 'What would an honest assessment say, separate from your patience or your impatience?'], es: ['¿Qué progreso real has hecho y no has reconocido?', '¿Esto ha tenido una oportunidad realmente justa de crecer?', '¿Qué diría una evaluación honesta, aparte de tu paciencia o tu impaciencia?'] }
  };

  CARDS['pentacles-8'] = {
    theme: { en: 'MASTERY THROUGH PRACTICE', es: 'DOMINIO A TRAVÉS DE LA PRÁCTICA' },
    archetype: { en: 'Skill built one repetition at a time', es: 'Una habilidad construida repetición tras repetición' },
    vocabulary: { en: ['craftsmanship', 'diligence', 'skill-building', 'apprenticeship', 'focus', 'steady improvement'], es: ['oficio', 'diligencia', 'desarrollo de habilidad', 'aprendizaje', 'concentración', 'mejora constante'] },
    positive: { en: ['genuine skill developing through steady, focused repetition', 'pride in craftsmanship, not just the outcome', 'the confidence that comes from real, practiced competence', 'staying in the apprentice phase without shame about it'], es: ['una habilidad genuina que se desarrolla con repetición constante y enfocada', 'orgullo por el oficio, no solo por el resultado', 'la confianza que viene de una competencia real y practicada', 'quedarte en la fase de aprendiz sin vergüenza por ello'] },
    shadow: { en: ['perfectionism that mistakes endless practice for actual progress', 'skill-building used to avoid the discomfort of using the skill', 'diligence applied to something that isn’t actually worth mastering', 'staying an apprentice long after you’re ready to move on'], es: ['un perfeccionismo que confunde la práctica sin fin con el progreso real', 'desarrollar una habilidad para evitar la incomodidad de usarla', 'diligencia aplicada a algo que en realidad no vale la pena dominar', 'quedarte de aprendiz mucho después de estar listo para avanzar'] },
    yesNo: 'MAYBE',
    yesNoWhy: { en: 'The Eight of Pentacles asks whether you’ve genuinely put in the practice this decision requires, or whether more focused skill-building should come first.', es: 'El Ocho de Oros pregunta si de verdad has invertido la práctica que esta decisión exige, o si primero debería llegar más desarrollo de habilidad enfocado.' },
    domains: {
      career: { en: 'This card asks whether you’ve genuinely developed the skill this next step requires, or whether some focused practice first would serve you better than leaving right now.', es: 'Esta carta pregunta si de verdad has desarrollado la habilidad que exige este próximo paso, o si un poco de práctica enfocada primero te serviría mejor que irte ahora mismo.' },
      relationship: { en: 'This card can mean the skill here is emotional — genuinely practicing honesty or vulnerability, one small step at a time, rather than expecting mastery immediately.', es: 'Esta carta puede significar que la habilidad aquí es emocional: practicar de verdad la honestidad o la vulnerabilidad, un pequeño paso a la vez, en lugar de esperar el dominio de inmediato.' },
      money: { en: 'This card favors steadily building financial skill or discipline over time — the mastery you need here comes from practice, not a single decisive move.', es: 'Esta carta favorece construir con constancia habilidad o disciplina financiera con el tiempo; el dominio que necesitas aquí viene de la práctica, no de un solo movimiento decisivo.' },
      movement: { en: 'This card can support a move made specifically to develop a real skill or craft — an apprenticeship, a training, somewhere that lets you actually get better at something.', es: 'Esta carta puede respaldar una mudanza hecha específicamente para desarrollar una habilidad u oficio real: un aprendizaje, una formación, un lugar que te permita de verdad mejorar en algo.' },
      creative: { en: 'This is one of the strongest cards for creative discipline — steady, unglamorous practice will take this further than waiting for inspiration or talent alone.', es: 'Esta es una de las cartas más fuertes para la disciplina creativa: una práctica constante y poco glamurosa llevará esto más lejos que esperar solo a la inspiración o al talento.' },
      family: { en: 'This card can mean patiently practicing a new way of relating to family — small, repeated efforts, rather than expecting the dynamic to change all at once.', es: 'Esta carta puede significar practicar con paciencia una nueva forma de relacionarte con la familia: esfuerzos pequeños y repetidos, en lugar de esperar que la dinámica cambie de golpe.' },
      growth: { en: 'This card strongly supports growth through steady, deliberate practice — the skill you want is built one repetition at a time, not through a single insight.', es: 'Esta carta respalda con fuerza el crecimiento a través de una práctica constante y deliberada: la habilidad que quieres se construye repetición a repetición, no con una sola idea.' },
      general: { en: 'This card asks whether more focused practice or skill-building should come before this decision, rather than expecting mastery or certainty to already be there.', es: 'Esta carta pregunta si debería llegar antes de esta decisión más práctica o desarrollo de habilidad, en lugar de esperar que el dominio o la certeza ya estén ahí.' }
    },
    advice: { en: ['Build the skill through steady, repeated practice.', 'Don’t expect mastery before you’ve actually practiced.', 'Take pride in the craft, not just the outcome.'], es: ['Construye la habilidad con práctica constante y repetida.', 'No esperes el dominio antes de haber practicado de verdad.', 'Enorgullécete del oficio, no solo del resultado.']},
    reflection: { en: ['What skill are you still developing that deserves more patience?', 'Where have you expected mastery before doing the actual practice?', 'What would steady, repeated effort accomplish here that urgency can’t?'], es: ['¿Qué habilidad todavía estás desarrollando que merece más paciencia?', '¿Dónde has esperado el dominio antes de hacer la práctica real?', '¿Qué lograría aquí un esfuerzo constante y repetido que la urgencia no puede?'] }
  };

  CARDS['pentacles-9'] = {
    theme: { en: 'SELF-SUFFICIENCY', es: 'AUTOSUFICIENCIA' },
    archetype: { en: 'Comfort built entirely by your own hand', es: 'Una comodidad construida enteramente con tus propias manos' },
    vocabulary: { en: ['independence', 'self-sufficiency', 'refinement', 'earned comfort', 'discipline', 'solitary success'], es: ['independencia', 'autosuficiencia', 'refinamiento', 'comodidad ganada', 'disciplina', 'éxito en solitario'] },
    positive: { en: ['genuine independence built through your own discipline', 'enjoying comfort you’ve actually earned, without guilt', 'confidence that doesn’t require anyone else’s approval', 'refinement that comes from caring for yourself well'], es: ['una independencia genuina construida con tu propia disciplina', 'disfrutar de una comodidad que de verdad has ganado, sin culpa', 'una confianza que no requiere la aprobación de nadie más', 'un refinamiento que viene de cuidarte bien a ti mismo'] },
    shadow: { en: ['independence that’s tipped into genuine isolation', 'self-sufficiency used to avoid needing anyone at all', 'comfort that’s stopped growing into anything more ambitious', 'refinement that’s really about proving something to others'], es: ['una independencia que se ha convertido en un aislamiento real', 'una autosuficiencia usada para evitar necesitar a nadie en absoluto', 'una comodidad que ha dejado de crecer hacia algo más ambicioso', 'un refinamiento que en realidad busca demostrarle algo a otros'] },
    yesNo: 'YES',
    yesNoWhy: { en: 'The Nine of Pentacles supports trusting your own independence and self-built stability — this card favors the option you can genuinely sustain on your own.', es: 'El Nueve de Oros respalda confiar en tu propia independencia y en una estabilidad autoconstruida; esta carta favorece la opción que de verdad puedes sostener por ti mismo.' },
    domains: {
      career: { en: 'This card supports a move toward genuine independence — work that lets you rely on your own discipline and skill rather than needing anyone else’s validation.', es: 'Esta carta respalda un cambio hacia una independencia genuina: un trabajo que te permita depender de tu propia disciplina y habilidad, y no de la validación de nadie más.' },
      relationship: { en: 'This card asks whether you’re pursuing this from genuine desire, or from a discomfort with being alone. Real independence here means wanting this, not needing it to feel complete.', es: 'Esta carta pregunta si persigues esto por un deseo genuino, o por una incomodidad con estar solo. La independencia real aquí significa querer esto, no necesitarlo para sentirte completo.' },
      money: { en: 'This card supports self-built financial stability — trust the security you’ve genuinely earned through your own discipline over one that depends on someone else.', es: 'Esta carta respalda una estabilidad financiera autoconstruida: confía en la seguridad que de verdad has ganado con tu propia disciplina, por encima de una que dependa de otra persona.' },
      movement: { en: 'This card supports a move made from genuine self-sufficiency — going somewhere because you can build a good life there on your own terms, not to escape dependency elsewhere.', es: 'Esta carta respalda una mudanza hecha desde una autosuficiencia genuina: ir a un lugar porque puedes construir allí una buena vida en tus propios términos, no para escapar de una dependencia en otro sitio.' },
      creative: { en: 'This card supports pursuing creative work independently — trust your own discipline and taste rather than waiting for outside validation to confirm it’s worthwhile.', es: 'Esta carta respalda perseguir el trabajo creativo de forma independiente: confía en tu propia disciplina y gusto en lugar de esperar una validación externa que confirme que vale la pena.' },
      family: { en: 'This card supports building your own stable, independent life alongside family ties — closeness doesn’t have to mean dependency, and independence doesn’t have to mean distance.', es: 'Esta carta respalda construir tu propia vida estable e independiente junto a los lazos familiares; la cercanía no tiene que significar dependencia, ni la independencia distancia.' },
      growth: { en: 'This card supports trusting the stability and comfort you’ve built through your own effort — you don’t need anyone else’s approval to call this a genuine success.', es: 'Esta carta respalda confiar en la estabilidad y la comodidad que has construido con tu propio esfuerzo; no necesitas la aprobación de nadie más para llamar a esto un éxito genuino.' },
      general: { en: 'This card supports the option you can genuinely sustain through your own effort and discipline — trust the independence you’ve already built.', es: 'Esta carta respalda la opción que de verdad puedes sostener con tu propio esfuerzo y disciplina; confía en la independencia que ya has construido.' }
    },
    advice: { en: ['Trust the stability you’ve genuinely built yourself.', 'Choose from desire, not fear of being alone.', 'Enjoy what you’ve earned without needing permission.'], es: ['Confía en la estabilidad que de verdad has construido tú mismo.', 'Elige desde el deseo, no desde el miedo a la soledad.', 'Disfruta lo que has ganado sin necesitar permiso.'] },
    reflection: { en: ['What have you built entirely through your own effort that you haven’t fully credited?', 'Are you choosing this from desire, or from discomfort with being alone?', 'What would independence look like here without it tipping into isolation?'], es: ['¿Qué has construido enteramente con tu propio esfuerzo y no te has reconocido del todo?', '¿Eliges esto desde el deseo, o desde la incomodidad de estar solo?', '¿Cómo sería aquí la independencia sin convertirse en aislamiento?'] }
  };

  CARDS['pentacles-10'] = {
    theme: { en: 'LEGACY', es: 'LEGADO' },
    archetype: { en: 'A foundation built to outlast any one person', es: 'Una base construida para durar más que una sola persona' },
    vocabulary: { en: ['legacy', 'long-term security', 'foundation', 'lasting wealth', 'generational thinking', 'roots'], es: ['legado', 'seguridad a largo plazo', 'cimiento', 'riqueza duradera', 'pensamiento generacional', 'raíces'] },
    positive: { en: ['building something that will genuinely outlast this moment', 'security considered across the long term, not just right now', 'roots deep enough to support real, lasting growth', 'wealth defined broadly — as stability, family, belonging, not only money'], es: ['construir algo que de verdad dure más allá de este momento', 'una seguridad pensada a largo plazo, no solo para ahora mismo', 'raíces lo bastante profundas como para sostener un crecimiento real y duradero', 'una riqueza definida en sentido amplio: estabilidad, familia, pertenencia, no solo dinero'] },
    shadow: { en: ['inheriting an obligation you never actually chose', 'legacy used to justify staying somewhere that no longer serves you', 'wealth or stability that comes at the cost of genuine happiness', 'building for a future you’ll never actually get to enjoy'], es: ['heredar una obligación que en realidad nunca elegiste', 'un legado usado para justificar quedarte donde ya no te sirve', 'una riqueza o estabilidad que cuesta la felicidad genuina', 'construir para un futuro que en realidad nunca llegarás a disfrutar'] },
    yesNo: 'MAYBE',
    yesNoWhy: { en: 'The Ten of Pentacles asks you to weigh this against the long term, not just the present — what serves the foundation you’re actually building?', es: 'El Diez de Oros te pide sopesar esto a largo plazo, no solo en el presente: ¿qué sirve a la base que realmente estás construyendo?' },
    domains: {
      career: { en: 'This card asks how this decision fits into the long-term foundation you’re building, not just the immediate feeling. What serves the next ten years, not just this one?', es: 'Esta carta pregunta cómo encaja esta decisión en la base a largo plazo que estás construyendo, no solo en el sentimiento inmediato. ¿Qué sirve a los próximos diez años, no solo a este?' },
      relationship: { en: 'This card asks whether this pursuit could genuinely build toward a lasting foundation, or whether it’s more about the present moment than the long-term picture.', es: 'Esta carta pregunta si esta búsqueda podría de verdad construir hacia una base duradera, o si trata más del momento presente que del panorama a largo plazo.' },
      money: { en: 'This card favors long-term financial thinking — building something that lasts and can genuinely be passed on, rather than optimizing purely for right now.', es: 'Esta carta favorece un pensamiento financiero a largo plazo: construir algo que dure y de verdad pueda transmitirse, en lugar de optimizar solo para ahora.' },
      movement: { en: 'This card asks whether this move builds toward genuine long-term roots, or whether it’s a shorter-term answer to a longer-term question.', es: 'Esta carta pregunta si esta mudanza construye hacia unas raíces genuinas a largo plazo, o si es una respuesta a corto plazo para una pregunta más larga.' },
      creative: { en: 'This card favors work built to last — a body of work, a legacy, rather than a single piece optimized purely for immediate attention.', es: 'Esta carta favorece un trabajo construido para durar: una obra, un legado, en lugar de una sola pieza optimizada solo para la atención inmediata.' },
      family: { en: 'This card can mean weighing an old family pattern or inheritance — deciding what to carry forward and what to finally set down before it passes to the next generation.', es: 'Esta carta puede significar sopesar un viejo patrón o herencia familiar: decidir qué llevar adelante y qué soltar por fin antes de que pase a la siguiente generación.' },
      growth: { en: 'This card asks what foundation you’re actually building for your future self, and whether this decision genuinely serves that, or just this immediate moment.', es: 'Esta carta pregunta qué base estás construyendo realmente para tu yo futuro, y si esta decisión sirve de verdad a eso, o solo a este momento inmediato.' },
      general: { en: 'This card asks you to weigh this decision against the longer arc, not just the present feeling — what actually serves the foundation you’re building over time?', es: 'Esta carta te pide sopesar esta decisión frente al arco más largo, no solo el sentimiento presente: ¿qué sirve realmente a la base que estás construyendo con el tiempo?' }
    },
    advice: { en: ['Weigh this against the long-term foundation, not just now.', 'Decide what legacy or pattern to carry forward, and what to set down.', 'Build for something that can genuinely last.'], es: ['Sopesa esto frente a la base a largo plazo, no solo el presente.', 'Decide qué legado o patrón llevar adelante, y qué soltar.', 'Construye algo que de verdad pueda durar.'] },
    reflection: { en: ['What foundation are you actually building for the long term?', 'What inherited pattern are you ready to set down?', 'What would this decision look like from ten years out?'], es: ['¿Qué base estás construyendo realmente a largo plazo?', '¿Qué patrón heredado estás listo para soltar?', '¿Cómo se vería esta decisión desde dentro de diez años?'] }
  };

  CARDS['pentacles-page'] = {
    theme: { en: 'PRACTICAL CURIOSITY', es: 'CURIOSIDAD PRÁCTICA' },
    archetype: { en: 'A student testing an idea against the real world', es: 'Un estudiante que pone a prueba una idea contra el mundo real' },
    vocabulary: { en: ['curiosity', 'learning', 'a new plan', 'groundedness', 'practical steps', 'patience with the process'], es: ['curiosidad', 'aprendizaje', 'un plan nuevo', 'sensatez', 'pasos prácticos', 'paciencia con el proceso'] },
    positive: { en: ['genuine curiosity about a practical new skill or opportunity', 'a willingness to start as a beginner without shame', 'grounded, patient planning instead of rushing ahead', 'testing an idea in the real world before committing fully'], es: ['una curiosidad genuina por una nueva habilidad u oportunidad práctica', 'la disposición a empezar como principiante sin vergüenza', 'una planificación sensata y paciente en lugar de precipitarse', 'poner a prueba una idea en el mundo real antes de comprometerte del todo'] },
    shadow: { en: ['an idea that stays theoretical because it’s never actually tested', 'impatience with the slow, unglamorous beginning of learning something', 'excitement about a plan without the practical steps to back it', 'underestimating how much groundwork a new direction actually needs'], es: ['una idea que se queda en lo teórico porque nunca se pone a prueba de verdad', 'impaciencia con el comienzo lento y poco glamuroso de aprender algo', 'entusiasmo por un plan sin los pasos prácticos que lo respalden', 'subestimar cuánta base necesita en realidad una dirección nueva'] },
    yesNo: 'MAYBE',
    yesNoWhy: { en: 'The Page of Pentacles supports exploring this practically — as a real, testable plan, not yet a fully proven direction.', es: 'El Paje de Oros respalda explorar esto de forma práctica, como un plan real y comprobable, todavía no como una dirección plenamente probada.' },
    domains: {
      career: { en: 'This card favors treating a new career direction as a practical experiment — a course, a small project, a conversation — before committing fully to it.', es: 'Esta carta favorece tratar una nueva dirección profesional como un experimento práctico (un curso, un proyecto pequeño, una conversación) antes de comprometerte del todo.' },
      relationship: { en: 'This card describes early, practical curiosity about this person — get to know them through real, grounded time together rather than deciding from imagination alone.', es: 'Esta carta describe una curiosidad temprana y práctica por esta persona: conócela a través de un tiempo real y con los pies en la tierra juntos, en lugar de decidir solo desde la imaginación.' },
      money: { en: 'This card favors testing a new financial idea at small, practical scale first — a real, grounded plan will serve you better than enthusiasm alone.', es: 'Esta carta favorece probar primero una idea financiera nueva a pequeña escala y de forma práctica: un plan real y con los pies en la tierra te servirá mejor que solo el entusiasmo.' },
      movement: { en: 'This card favors researching this move practically — costs, logistics, a visit if possible — treating it as a plan to test rather than an idea to simply hope works out.', es: 'Esta carta favorece investigar esta mudanza de forma práctica (costes, logística, una visita si es posible), tratándola como un plan que probar y no como una idea que solo se espera que salga bien.' },
      creative: { en: 'This card favors approaching a new creative interest as a student — practicing the fundamentals patiently, without needing to be good at it immediately.', es: 'Esta carta favorece abordar un nuevo interés creativo como estudiante: practicar los fundamentos con paciencia, sin necesitar ser bueno de inmediato.' },
      family: { en: 'This card can mean a practical, grounded new approach to a family relationship — small, concrete gestures rather than a single dramatic conversation.', es: 'Esta carta puede significar un nuevo enfoque práctico y sensato hacia una relación familiar: gestos pequeños y concretos, en lugar de una sola conversación dramática.' },
      growth: { en: 'This card supports approaching personal growth practically — one concrete habit at a time, rather than an abstract wish to become someone different.', es: 'Esta carta respalda abordar el crecimiento personal de forma práctica: un hábito concreto a la vez, en lugar de un deseo abstracto de convertirte en alguien distinto.' },
      general: { en: 'This card favors treating this as a practical experiment worth testing at small scale, rather than a fully proven plan or a purely theoretical idea.', es: 'Esta carta favorece tratar esto como un experimento práctico que vale la pena probar a pequeña escala, y no como un plan plenamente probado ni una idea puramente teórica.' }
    },
    advice: { en: ['Test the idea practically before committing fully.', 'Start as a beginner without shame about the pace.', 'Ground the plan in real, concrete steps.'], es: ['Prueba la idea de forma práctica antes de comprometerte del todo.', 'Empieza como principiante sin vergüenza por el ritmo.', 'Fundamenta el plan en pasos reales y concretos.'] },
    reflection: { en: ['What practical, small step could test this idea honestly?', 'Where are you rushing past the groundwork this actually needs?', 'What would you try if being a beginner didn’t feel like a problem?'], es: ['¿Qué paso pequeño y práctico podría poner a prueba esta idea con honestidad?', '¿Dónde te estás saltando la base que esto realmente necesita?', '¿Qué intentarías si ser principiante no se sintiera como un problema?'] }
  };

  CARDS['pentacles-knight'] = {
    theme: { en: 'STEADY PROGRESS', es: 'PROGRESO CONSTANTE' },
    archetype: { en: 'Slow, reliable movement that actually arrives', es: 'Un movimiento lento y fiable que de verdad llega' },
    vocabulary: { en: ['reliability', 'routine', 'diligence', 'methodical progress', 'steadiness', 'patience'], es: ['fiabilidad', 'rutina', 'diligencia', 'progreso metódico', 'constancia', 'paciencia'] },
    positive: { en: ['reliable, methodical progress that actually gets somewhere', 'diligence that doesn’t need excitement to keep going', 'trusting the slow, steady route over the flashy shortcut', 'consistency that other people can genuinely count on'], es: ['un progreso fiable y metódico que de verdad llega a algún lugar', 'una diligencia que no necesita entusiasmo para seguir', 'confiar en la ruta lenta y constante frente al atajo llamativo', 'una constancia con la que otros pueden contar de verdad'] },
    shadow: { en: ['routine so rigid it stops adapting to what’s actually needed', 'stubbornness mistaken for genuine reliability', 'moving so slowly that a real opportunity passes by unnoticed', 'stalling on a decision under the guise of being careful'], es: ['una rutina tan rígida que deja de adaptarse a lo que realmente hace falta', 'confundir la terquedad con una fiabilidad genuina', 'moverte tan despacio que una oportunidad real pasa desapercibida', 'estancarte en una decisión bajo la excusa de ser cuidadoso'] },
    yesNo: 'MAYBE',
    yesNoWhy: { en: 'The Knight of Pentacles favors the slow, methodical route — this card asks whether patience or momentum is what this decision actually needs.', es: 'El Caballero de Oros favorece la ruta lenta y metódica; esta carta pregunta si lo que esta decisión realmente necesita es paciencia o impulso.' },
    domains: {
      career: { en: 'This card favors a methodical, well-planned transition over an abrupt exit — but check that careful planning hasn’t quietly become an excuse to stall indefinitely.', es: 'Esta carta favorece una transición metódica y bien planeada frente a una salida abrupta, pero comprueba que la planificación cuidadosa no se haya convertido en silencio en una excusa para estancarte indefinidamente.' },
      relationship: { en: 'This card favors a slow, steady, reliable approach to this pursuit — consistency over grand gestures. Just check the patience isn’t actually hesitation in disguise.', es: 'Esta carta favorece un enfoque lento, constante y fiable hacia esta búsqueda: la consistencia por encima de los grandes gestos. Solo comprueba que la paciencia no sea en realidad una duda disfrazada.' },
      money: { en: 'This card strongly favors a slow, methodical financial approach — steady, reliable progress over a flashier, riskier option.', es: 'Esta carta favorece con fuerza un enfoque financiero lento y metódico: un progreso constante y fiable frente a una opción más llamativa y arriesgada.' },
      movement: { en: 'This card favors a carefully planned, methodical move over a sudden leap — but check that careful planning hasn’t become a way of never actually going.', es: 'Esta carta favorece una mudanza cuidadosamente planeada y metódica frente a un salto repentino, pero comprueba que la planificación cuidadosa no se haya convertido en una forma de nunca irte en realidad.' },
      creative: { en: 'This card favors steady, reliable creative habits over waiting for a burst of inspiration — showing up consistently will get this further than intensity alone.', es: 'Esta carta favorece hábitos creativos constantes y fiables frente a esperar un arrebato de inspiración: aparecer con consistencia llevará esto más lejos que solo la intensidad.' },
      family: { en: 'This card favors patient, consistent effort in a family relationship over a single dramatic gesture — reliability, shown repeatedly, tends to rebuild trust here.', es: 'Esta carta favorece un esfuerzo paciente y constante en una relación familiar frente a un solo gesto dramático: la fiabilidad, mostrada una y otra vez, suele reconstruir la confianza aquí.' },
      growth: { en: 'This card favors slow, steady self-improvement over a dramatic reinvention — consistency, not intensity, is what actually builds lasting change here.', es: 'Esta carta favorece una mejora personal lenta y constante frente a una reinvención dramática: la consistencia, no la intensidad, es lo que realmente construye un cambio duradero aquí.' },
      general: { en: 'This card favors the slow, methodical route — but asks you to check honestly whether patience here is wisdom, or hesitation wearing a more respectable name.', es: 'Esta carta favorece la ruta lenta y metódica, pero te pide comprobar con honestidad si la paciencia aquí es sabiduría, o una duda con un nombre más respetable.' }
    },
    advice: { en: ['Choose the steady route over the flashy shortcut.', 'Check that patience isn’t actually hesitation.', 'Show up consistently rather than relying on intensity.'], es: ['Elige la ruta constante frente al atajo llamativo.', 'Comprueba que la paciencia no sea en realidad una duda.', 'Aparece con consistencia en lugar de depender de la intensidad.'] },
    reflection: { en: ['Is this patience, or hesitation dressed up more respectably?', 'What steady habit would get you further than one big move?', 'What has consistency already built here that you haven’t credited?'], es: ['¿Esto es paciencia, o una duda vestida de forma más respetable?', '¿Qué hábito constante te llevaría más lejos que un solo gran movimiento?', '¿Qué ha construido ya aquí la constancia que no has reconocido?'] }
  };

  CARDS['pentacles-queen'] = {
    theme: { en: 'GROUNDED NURTURING', es: 'CUIDADO CON LOS PIES EN LA TIERRA' },
    archetype: { en: 'Care that shows up in practical, tangible ways', es: 'Un cuidado que se muestra de forma práctica y tangible' },
    vocabulary: { en: ['nurturing', 'resourcefulness', 'practicality', 'comfort', 'groundedness', 'self-care'], es: ['cuidado', 'ingenio práctico', 'sensatez', 'comodidad', 'estabilidad', 'autocuidado'] },
    positive: { en: ['nurturing that shows up practically, not just in words', 'resourcefulness that makes the most of what’s actually available', 'comfort created deliberately, for yourself and others', 'grounded care that doesn’t require grand gestures to matter'], es: ['un cuidado que se muestra de forma práctica, no solo en palabras', 'un ingenio que aprovecha al máximo lo que realmente está disponible', 'una comodidad creada a propósito, para ti y para los demás', 'un cuidado con los pies en la tierra que no necesita grandes gestos para importar'] },
    shadow: { en: ['caretaking so consistently that your own needs go unmet', 'practicality used to avoid a harder emotional conversation', 'comfort that’s become complacency rather than genuine contentment', 'measuring your worth entirely by how useful you are to others'], es: ['cuidar de forma tan constante que tus propias necesidades quedan desatendidas', 'la practicidad usada para evitar una conversación emocional más difícil', 'una comodidad que se ha vuelto conformismo y no un contento genuino', 'medir tu valor únicamente por lo útil que eres para los demás'] },
    yesNo: 'YES',
    yesNoWhy: { en: 'The Queen of Pentacles supports the choice that lets you care for both yourself and others practically — grounded, sustainable care over grand but hollow gestures.', es: 'La Reina de Oros respalda la elección que te permite cuidarte a ti misma y a los demás de forma práctica; un cuidado sensato y sostenible por encima de gestos grandes pero vacíos.' },
    domains: {
      career: { en: 'This card supports a decision grounded in practical wellbeing — what actually lets you care for yourself and the people who depend on you, not just what looks impressive.', es: 'Esta carta respalda una decisión fundada en el bienestar práctico: lo que realmente te permite cuidarte a ti misma y a quienes dependen de ti, no solo lo que se ve impresionante.' },
      relationship: { en: 'This card favors pursuing this in practical, grounded ways — showing care through consistent action rather than only through words or intensity.', es: 'Esta carta favorece perseguir esto de forma práctica y con los pies en la tierra: mostrar cuidado a través de una acción constante, no solo con palabras o intensidad.' },
      money: { en: 'This card supports resourceful, practical money management — making the most of what’s actually available rather than waiting for an ideal financial situation.', es: 'Esta carta respalda una gestión del dinero ingeniosa y práctica: aprovechar al máximo lo que realmente está disponible, en lugar de esperar una situación financiera ideal.' },
      movement: { en: 'This card supports a move that lets you build a genuinely comfortable, practical home — one that cares for your actual daily needs, not just an idealized picture.', es: 'Esta carta respalda una mudanza que te permita construir un hogar genuinamente cómodo y práctico: uno que cuide tus necesidades diarias reales, y no solo una imagen idealizada.' },
      creative: { en: 'This card favors grounding creative work in something tangible and useful, rather than keeping it purely abstract — let the work actually serve someone, including yourself.', es: 'Esta carta favorece fundamentar el trabajo creativo en algo tangible y útil, en lugar de mantenerlo puramente abstracto: deja que el trabajo sirva de verdad a alguien, incluida tú misma.' },
      family: { en: 'This card supports practical, sustainable caretaking within family — but asks whether your own needs are also genuinely being met, not just everyone else’s.', es: 'Esta carta respalda un cuidado práctico y sostenible dentro de la familia, pero pregunta si tus propias necesidades también se están cumpliendo de verdad, y no solo las de los demás.' },
      growth: { en: 'This card supports practical self-care as a genuine growth practice — not indulgence, but the grounded maintenance that lets everything else actually function.', es: 'Esta carta respalda el autocuidado práctico como una verdadera práctica de crecimiento: no un capricho, sino el mantenimiento sensato que hace que todo lo demás funcione de verdad.' },
      general: { en: 'This card supports the choice that lets you practically care for yourself and the people who matter — grounded, sustainable action over an impressive but hollow gesture.', es: 'Esta carta respalda la elección que te permite cuidar de forma práctica de ti misma y de quienes importan: una acción sensata y sostenible por encima de un gesto impresionante pero vacío.' }
    },
    advice: { en: ['Choose practical, sustainable care over grand gestures.', 'Check your own needs are being met, not just everyone else’s.', 'Make the most of what’s actually available now.'], es: ['Elige un cuidado práctico y sostenible por encima de los grandes gestos.', 'Comprueba que tus propias necesidades también se cumplan, no solo las de los demás.', 'Aprovecha al máximo lo que realmente está disponible ahora.'] },
    reflection: { en: ['Where are you caretaking others while neglecting your own needs?', 'What practical step would actually show the care you feel?', 'What comfort have you built that you haven’t let yourself enjoy?'], es: ['¿Dónde cuidas a otros mientras descuidas tus propias necesidades?', '¿Qué paso práctico mostraría de verdad el cuidado que sientes?', '¿Qué comodidad has construido y no te has permitido disfrutar?'] }
  };

  CARDS['pentacles-king'] = {
    theme: { en: 'MATERIAL MASTERY', es: 'DOMINIO MATERIAL' },
    archetype: { en: 'Abundance built patiently, one deliberate decision at a time', es: 'Una abundancia construida con paciencia, decisión a decisión' },
    vocabulary: { en: ['abundance', 'security', 'mastery', 'steady leadership', 'generosity', 'earned stability'], es: ['abundancia', 'seguridad', 'dominio', 'liderazgo constante', 'generosidad', 'estabilidad ganada'] },
    positive: { en: ['security built steadily through real, sustained effort', 'generosity that flows from genuine abundance, not obligation', 'confident, grounded leadership that others can rely on', 'enjoying material comfort without letting it become the whole point'], es: ['una seguridad construida con constancia a través de un esfuerzo real y sostenido', 'una generosidad que fluye desde una abundancia genuina, no desde la obligación', 'un liderazgo seguro y con los pies en la tierra en el que otros pueden confiar', 'disfrutar la comodidad material sin dejar que se convierta en todo el sentido'] },
    shadow: { en: ['security so central it crowds out any real risk-taking', 'measuring your worth by material success alone', 'generosity that quietly expects control in return', 'stability that has become stagnation without you noticing'], es: ['una seguridad tan central que desplaza cualquier riesgo real', 'medir tu valor solo por el éxito material', 'una generosidad que en silencio espera control a cambio', 'una estabilidad que se ha vuelto estancamiento sin que lo notaras'] },
    yesNo: 'YES',
    yesNoWhy: { en: 'The King of Pentacles supports a decision made from genuine, earned stability — trust the security you’ve actually built rather than second-guessing it.', es: 'El Rey de Oros respalda una decisión tomada desde una estabilidad genuina y ganada; confía en la seguridad que de verdad has construido, en lugar de dudar de ella.' },
    domains: {
      career: { en: 'This card supports a decision made from genuine financial and professional stability — you likely have more real security to act from here than fear has let you notice.', es: 'Esta carta respalda una decisión tomada desde una estabilidad financiera y profesional genuina; probablemente tengas aquí más seguridad real para actuar de la que el miedo te ha dejado notar.' },
      relationship: { en: 'This card supports pursuing this from a place of genuine groundedness — steady, generous, without needing to control the outcome to feel secure.', es: 'Esta carta respalda acercarte a esto desde un lugar de estabilidad genuina: constante, generoso, sin necesitar controlar el resultado para sentirte seguro.' },
      money: { en: 'This is one of the strongest cards for a sound financial decision — trust the stability you’ve genuinely built, and let it fund a decision made calmly, not from scarcity.', es: 'Esta es una de las cartas más fuertes para una decisión financiera sólida: confía en la estabilidad que de verdad has construido, y deja que financie una decisión tomada con calma, no desde la escasez.' },
      movement: { en: 'This card supports a move made from genuine stability — building an even better foundation somewhere new, rather than escaping instability elsewhere.', es: 'Esta carta respalda una mudanza hecha desde una estabilidad genuina: construir una base aún mejor en un lugar nuevo, en lugar de escapar de una inestabilidad en otro sitio.' },
      creative: { en: 'This card supports investing real resources — time, money, structure — into creative work you take seriously, rather than treating it as a hobby kept small out of caution.', es: 'Esta carta respalda invertir recursos reales (tiempo, dinero, estructura) en un trabajo creativo que te tomas en serio, en lugar de tratarlo como un pasatiempo mantenido pequeño por cautela.' },
      family: { en: 'This card supports generous, grounded leadership within the family — offering real, practical stability to others from a place of genuine abundance, not obligation.', es: 'Esta carta respalda un liderazgo generoso y con los pies en la tierra dentro de la familia: ofrecer una estabilidad real y práctica a otros desde un lugar de abundancia genuina, no de obligación.' },
      growth: { en: 'This card supports trusting the real stability and mastery you’ve already built — you don’t need more proof of your own competence before acting from it.', es: 'Esta carta respalda confiar en la estabilidad y el dominio reales que ya has construido; no necesitas más pruebas de tu propia competencia para actuar desde ahí.' },
      general: { en: 'This card supports acting from genuine, earned stability — trust the security you’ve actually built rather than deciding as if you were starting from nothing.', es: 'Esta carta respalda actuar desde una estabilidad genuina y ganada: confía en la seguridad que de verdad has construido, en lugar de decidir como si partieras de cero.' }
    },
    advice: { en: ['Trust the security you’ve genuinely built.', 'Let generosity come from abundance, not obligation.', 'Act calmly instead of from scarcity.'], es: ['Confía en la seguridad que de verdad has construido.', 'Deja que la generosidad venga de la abundancia, no de la obligación.', 'Actúa con calma en lugar de desde la escasez.'] },
    reflection: { en: ['What real stability have you built that you haven’t given yourself credit for?', 'Where is security crowding out a risk actually worth taking?', 'What would you do here if you trusted your own competence fully?'], es: ['¿Qué estabilidad real has construido que no te has reconocido?', '¿Dónde la seguridad está desplazando un riesgo que en realidad vale la pena tomar?', '¿Qué harías aquí si confiaras del todo en tu propia competencia?'] }
  };

  global.ARCANA_CONTENT = global.ARCANA_CONTENT || {};
  Object.assign(global.ARCANA_CONTENT, CARDS);
  global.ARCANA_DOMAINS = ['career', 'relationship', 'money', 'movement', 'creative', 'family', 'growth', 'general'];
})(typeof window !== 'undefined' ? window : globalThis);
