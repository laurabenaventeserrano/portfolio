import type { ReactNode } from 'react';
import { Kicker, Tags } from './ui';

interface Props {
  num: string;
  title: string;
  hook: ReactNode;
  company: string;
  role: string;
  status: string;
  tags: string[];
}

/* Cabecera de un caso: título directo, una frase y la ficha. Sin imagen: la evidencia va dentro. */
export default function CaseHero({ num, title, hook, company, role, status, tags }: Props) {
  return (
    <header className="case-hero" aria-labelledby="case-title">
      <div className="container stack gap-32">
        <Kicker tone="muted">Case {num} · {company}</Kicker>
        <h1 id="case-title" className="h-xl balance">{title}</h1>
        <p className="case-hero__hook">{hook}</p>
        <dl className="case-meta">
          <div><dt>Company</dt><dd>{company}</dd></div>
          <div><dt>Role</dt><dd>{role}</dd></div>
          <div><dt>Status</dt><dd><span className="status">{status}</span></dd></div>
        </dl>
        <Tags items={tags} />
      </div>
    </header>
  );
}
