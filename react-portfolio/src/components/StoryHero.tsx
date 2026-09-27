import type { ReactNode } from 'react';
import { Kicker, Stats, Tags, type Stat } from './ui';

interface Props {
  label: string;
  company: string;
  title: ReactNode;
  subtitle: string;
  stats: Stat[];
  tags: string[];
  intro: string;
  poster: string;
  posterAlt: string;
}

export default function StoryHero({ label, company, title, subtitle, stats, tags, intro, poster, posterAlt }: Props) {
  return (
    <section className="story-hero" aria-labelledby="story-title">
      <div className="container stack gap-56">
        <div className="story-hero__top">
          <div className="story-hero__meta">
            <span className="chip" style={{ background: 'var(--accent)', borderColor: 'var(--ink)' }}>{label}</span>
            <Kicker tone="muted">{company}</Kicker>
          </div>
          <h1 id="story-title" className="h-xl balance" style={{ maxWidth: 1100 }}>{title}</h1>
          <p className="lead" style={{ fontSize: 'clamp(20px, 1.8vw, 26px)', color: 'var(--ink)', fontWeight: 500 }}>{subtitle}</p>
        </div>
        <Stats items={stats} />
        <div className="stack gap-20">
          <Tags items={tags} />
          <p className="disclaimer">{intro}</p>
        </div>
        <div className="media"><img src={poster} alt={posterAlt} /></div>
      </div>
    </section>
  );
}
