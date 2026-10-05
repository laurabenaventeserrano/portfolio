/*
  Órgano ambiente generado en el navegador (Web Audio, sin archivos de audio).
  Composición original con el clima de las bandas sonoras de órgano de ciencia ficción:
  un acorde grave sostenido y un arpegio lento y constante por encima, con mucha reverberación.
  No reproduce ninguna melodía existente.

  · Empieza siempre en silencio y solo suena tras un clic (los navegadores lo exigen).
  · Volumen bajo, entra y sale con fundidos largos.
*/

const TEMPO = 76;                       // pulsos por minuto
const STEP = 60 / TEMPO / 2;            // corcheas
const VOLUME = 0.11;

// Progresión original en re menor: Dm(add9) · B♭maj7 · Fmaj7/A · C(sus2). Cada acorde dura 16 corcheas.
const CHORDS: { bass: number; tones: number[] }[] = [
  { bass: 38, tones: [62, 64, 65, 69] },  // D  · d e f a
  { bass: 34, tones: [62, 65, 69, 70] },  // B♭ · d f a b♭
  { bass: 33, tones: [60, 64, 65, 69] },  // A  · c e f a
  { bass: 36, tones: [60, 62, 67, 72] },  // C  · c d g c
];
// Patrón propio del arpegio, en índices del acorde (0–3) y la octava de arriba (4–5 = +12)
const PATTERN = [0, 2, 1, 3, 2, 4, 3, 1, 0, 3, 2, 5, 3, 2, 1, 2];

const hz = (midi: number) => 440 * Math.pow(2, (midi - 69) / 12);

// Registros de órgano: fundamental, octava, quinta y doble octava, como tiradores 8' 4' 2⅔' 2'
const STOPS = [
  { mult: 1, gain: 1 },
  { mult: 2, gain: 0.45 },
  { mult: 3, gain: 0.18 },
  { mult: 4, gain: 0.12 },
];

function impulse(ctx: AudioContext, seconds = 5.5, decay = 2.6) {
  const len = Math.floor(ctx.sampleRate * seconds);
  const buf = ctx.createBuffer(2, len, ctx.sampleRate);
  for (let c = 0; c < 2; c++) {
    const d = buf.getChannelData(c);
    for (let i = 0; i < len; i++) d[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / len, decay);
  }
  return buf;
}

export class Organ {
  private ctx: AudioContext | null = null;
  private master: GainNode | null = null;
  private bus: GainNode | null = null;
  private timer = 0;
  private step = 0;
  private nextTime = 0;
  playing = false;

  private voice(midi: number, start: number, dur: number, level: number) {
    const ctx = this.ctx!, out = this.bus!;
    const env = ctx.createGain();
    env.gain.setValueAtTime(0, start);
    env.gain.linearRampToValueAtTime(level, start + Math.min(0.35, dur * 0.3));
    env.gain.setValueAtTime(level, start + dur * 0.75);
    env.gain.linearRampToValueAtTime(0, start + dur + 0.6);
    env.connect(out);
    STOPS.forEach((s) => {
      const o = ctx.createOscillator(), g = ctx.createGain();
      o.type = 'sine';
      o.frequency.value = hz(midi) * s.mult;
      o.detune.value = (Math.random() - 0.5) * 4;   // un poco de vida, como tubos que no son idénticos
      g.gain.value = s.gain / STOPS.length;
      o.connect(g); g.connect(env);
      o.start(start); o.stop(start + dur + 0.7);
    });
  }

  private schedule = () => {
    const ctx = this.ctx!;
    while (this.nextTime < ctx.currentTime + 0.6) {
      const t = this.nextTime, i = this.step % 64, chord = CHORDS[Math.floor(i / 16)];
      if (i % 16 === 0) {
        // Acorde grave sostenido: bajo, su octava y la quinta, durante todo el compás
        const dur = STEP * 16;
        this.voice(chord.bass, t, dur, 0.5);
        this.voice(chord.bass + 12, t, dur, 0.35);
        this.voice(chord.bass + 19, t, dur, 0.22);
      }
      const p = PATTERN[i % 16];
      const note = p < 4 ? chord.tones[p] : chord.tones[p - 4] + 12;
      this.voice(note, t, STEP * 1.6, 0.22);
      this.nextTime += STEP;
      this.step++;
    }
  };

  async start() {
    if (this.playing) return;
    if (!this.ctx) {
      const AC = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      const ctx = new AC();
      const master = ctx.createGain(); master.gain.value = 0;
      const bus = ctx.createGain(); bus.gain.value = 1;
      const tone = ctx.createBiquadFilter(); tone.type = 'lowpass'; tone.frequency.value = 2600;
      const verb = ctx.createConvolver(); verb.buffer = impulse(ctx);
      const wet = ctx.createGain(); wet.gain.value = 0.55;
      const dry = ctx.createGain(); dry.gain.value = 0.6;
      bus.connect(tone);
      tone.connect(dry); tone.connect(verb); verb.connect(wet);
      dry.connect(master); wet.connect(master); master.connect(ctx.destination);
      this.ctx = ctx; this.master = master; this.bus = bus;
    }
    await this.ctx.resume();
    const now = this.ctx.currentTime;
    this.master!.gain.cancelScheduledValues(now);
    this.master!.gain.setValueAtTime(this.master!.gain.value, now);
    this.master!.gain.linearRampToValueAtTime(VOLUME, now + 4);    // entra despacio
    this.nextTime = now + 0.1; this.step = 0;
    this.timer = window.setInterval(this.schedule, 150);
    this.playing = true;
  }

  stop() {
    if (!this.ctx || !this.playing) return;
    const now = this.ctx.currentTime;
    this.master!.gain.cancelScheduledValues(now);
    this.master!.gain.setValueAtTime(this.master!.gain.value, now);
    this.master!.gain.linearRampToValueAtTime(0, now + 2);           // sale despacio
    window.clearInterval(this.timer);
    this.playing = false;
  }
}

export const organ = new Organ();
