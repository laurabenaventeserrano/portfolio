import type { ReactNode } from 'react';
import { Tags } from './ui';

interface Props {
  num: string;
  title: string;
  hook: ReactNode;
  company: string;
  role: string;
  status: string;
  tags: string[];
  /* Lo primero que se ve tras la ficha: el prototipo, la pantalla clave */
  media?: ReactNode;
  /* Cifras de contexto, solo reales */
  facts?: [string, string][];
}

/* Cabecera de un caso con la firma de la identidad: etiqueta, línea de prisma y estado; titular directo, una frase y la ficha. */
export default function CaseHero({ num, title, hook, company, role, status, tags, media, facts }: Props) {
  return (
    <header className="case-hero" aria-labelledby="case-title">
      <div className="container">
        <p className="sig"><span>Case {num} · {company}</span><i className="sig__rule" aria-hidden="true" /><span className="sig__status">{status}</span></p>
        <h1 id="case-title" className="case-hero__title balance">{title}</h1>
        <p className="case-hero__hook">{hook}</p>
        <dl className="case-meta">
          <div><dt>Company</dt><dd>{company}</dd></div>
          <div><dt>Role</dt><dd>{role}</dd></div>
          <div><dt>Status</dt><dd>{status}</dd></div>
          {facts?.map(([k, v]) => <div key={k}><dt>{k}</dt><dd>{v}</dd></div>)}
        </dl>
        <Tags items={tags} />
        {media && <div className="case-hero__media">{media}</div>}
      </div>
    </header>
  );
}
