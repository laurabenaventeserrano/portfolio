import CaseHero from '../components/CaseHero';
import { CaseSection, CaseNote, Cols, Figure, Flow, KeyLine, NextCase, NumberedBlocks, Pair, Stats, Video } from '../components/ui';
import { ROUTES } from '../content/site';
import { useTitle } from '../lib/hooks';

/*
  Case 01 · CCH iFirm Cloud Migration.
  Sigue la presentación de Laura (Laura-Deck.pdf, Story 1). Imágenes a resolución original, textos suyos y cortos:
  la evidencia manda.
*/

/* Matriz valor / esfuerzo de la lámina "The matrix": posiciones tal como Laura las dibujó */
function Matrix() {
  const x = (v: number) => 40 + (v - 1) * 110;
  const y = (v: number) => 250 - (v - 1) * 55;
  const pts: [string, number, number, string][] = [['P1', 1, 2.9, 'Immediate opportunity'], ['P2', 2.4, 3.9, 'More complete workflow'], ['P3', 4.9, 5, 'Future contextual experience']];
  return (
    <svg className="matrix" viewBox="0 0 560 300" role="img" aria-label="Value against effort: Proposal 1 sits at the lowest implementation effort with solid value, Proposal 2 in the middle, Proposal 3 at the highest value and the highest effort.">
      {[1, 2, 3, 4, 5].map((v) => <line key={`g${v}`} className="matrix__grid" x1={x(1)} x2={x(5)} y1={y(v)} y2={y(v)} />)}
      <line x1={x(1)} x2={x(1)} y1={y(5) - 10} y2={y(1)} />
      <line x1={x(1)} x2={x(5) + 10} y1={y(1)} y2={y(1)} />
      {[1, 2, 3, 4, 5].map((v) => <text key={`x${v}`} x={x(v)} y={y(1) + 22} textAnchor="middle">{v}</text>)}
      <text x={x(3)} y={y(1) + 46} textAnchor="middle">Implementation effort</text>
      <text transform={`translate(${x(1) - 22} ${y(3)}) rotate(-90)`} textAnchor="middle">User and product value</text>
      {pts.map(([n, ex, va, t]) => (
        <g key={n}>
          <circle cx={x(ex)} cy={y(va)} r={n === 'P1' ? 9 : 7} fill={n === 'P1' ? '#FFFFFF' : '#111111'} stroke="#111111" strokeWidth={n === 'P1' ? 2 : 0} />
          <text className="matrix__p" x={x(ex) + (n === 'P3' ? -14 : 16)} y={y(va) + 4} textAnchor={n === 'P3' ? 'end' : 'start'}>{n} · {t}</text>
        </g>
      ))}
    </svg>
  );
}

export default function Case1() {
  useTitle('CCH iFirm Cloud Migration · Laura Benavente');
  return (
    <article>
      <CaseHero
        num="01"
        title="CCH iFirm Cloud Migration"
        hook="Designing continuity across a fragmented SaaS ecosystem."
        company="Wolters Kluwer"
        role="Senior Product Designer"
        status="Shipped"
        facts={[['Scope', '6 products · 5 markets · 1 design system']]}
        tags={['Product design', 'Systems thinking', 'Design system', 'Customer validation', 'Stakeholder alignment']}
        media={<Video src="/video/s1-returns-prototype.mp4" poster="/images/s1-hd-dashboard.jpg" label="The CCH iFirm prototype: from the dashboard to the returns list, into Acme Corp’s return and on to the client record, with the client carried all the way." caption="CCH iFirm · From the dashboard to a return, and on to the client, without picking the client again" />}
      />

      <CaseSection num="01" label="Context" meta="CCH iFirm" title="From segmented, on-premise products to one connected cloud experience.">
        <Pair
          before={{ src: '/images/s1-hd-onpremise.jpg', caption: 'On-premise', alt: 'CCH Central on the desktop: a dense ribbon of tools above a client record and its document centre.' }}
          after={{ src: '/images/s1-hd-cloud.jpg', caption: 'One environment', alt: 'CCH iFirm in the cloud: one dashboard with last returns, resource allocation, work in progress, documents and annual revenue.' }}
        />
      </CaseSection>

      <CaseSection num="02" label="The core problem" meta="Information architecture" title="Unifying the product ecosystem exposed a fundamental information architecture problem.">
        <div className="models" role="table" aria-label="Two product models and where each one breaks">
          <div className="models__row" role="rowheader">Client-context products</div>
          <div className="models__step" role="cell"><span>Step 1</span>Select a client</div>
          <div className="models__step" role="cell"><span>Step 2</span>Select a product</div>
          <div className="models__step" role="cell"><span>Step 3</span>Work</div>
          <div className="models__risk" role="cell"><span>Risk</span>Systems only work with a client selected</div>
          <div className="models__row" role="rowheader">Firm-context products</div>
          <div className="models__step" role="cell"><span>Step 1</span>Select a product</div>
          <div className="models__step" role="cell"><span>Step 2</span>Select a client</div>
          <div className="models__step" role="cell"><span>Step 3</span>Work</div>
          <div className="models__risk" role="cell"><span>Risk</span>Breaks workflow continuity</div>
        </div>
        <Pair
          before={{ src: '/images/s1-before.jpg', caption: 'Client context · Some apps only work with a client selected', alt: 'CCH iFirm Personal Tax opening on an empty state: the workspace is greyed out with “Please select a contact to continue”, and the contacts panel shows no client selected above a long list to search.' }}
          after={{ src: '/images/s1-hd-firm-context.jpg', caption: 'Firm context · Users go back and forth between contexts', alt: 'The iFirm Taxprep list of returns at firm level: client code, client name, return status and tax year start, with no active client.' }}
        />
      </CaseSection>

      <CaseSection num="03" label="The research insight" meta="5 customers · 2 SMEs" tone="dark" title="There is a mismatch between the user’s mental model and the product model.">
        <div className="quotes">
          <div className="stack gap-16">
            <span className="sig"><span>How users think</span></span>
            <p className="quote-mark">I’m working on a tax return.</p>
          </div>
          <div className="stack gap-16">
            <span className="sig"><span>How the system was built</span></span>
            <p className="quote-mark">I’m working on a client. I’m working on a product.</p>
          </div>
        </div>
        <KeyLine label="The opportunity">Shift the experience from client-based navigation towards workflow continuity.</KeyLine>
      </CaseSection>

      <CaseSection num="04" label="Design question" meta="CCH iFirm" title="How can we make client context persistent across the experience without adding another layer of navigation or creating unnecessary development complexity?" />

      <CaseSection num="05" label="My role" meta="From problem definition to implementation">
        <NumberedBlocks label="My role, step by step" items={[
          ['Frame the problem', 'The experience didn’t preserve client context across products.'],
          ['Understand the user', 'Foundational research and SME interviews: jobs to be done, goals, motivations.'],
          ['Explore solutions', 'Several ways to preserve client context while improving the workflow.'],
          ['Validate', 'A coded prototype of the interaction, tested with customers.'],
          ['Align and ship', 'Findings and options presented to stakeholders.'],
          ['Design handoff', 'The existing design system, applied end to end.'],
        ]} />
      </CaseSection>

      <CaseSection num="06" label="The options" meta="Value against effort" title="Three ways to solve the problem.">
        <ol className="options3" aria-label="The three proposals">
          {[
            ['01 · Context preservation', 'Deep linking with client context', 'Lowest effort. Solves the core problem.', '/images/s1-option-1.png', 'Wireframe of proposal 1: the receiving product opens directly on Corporate, Client A, 2026, with the client carried in the breadcrumb.'],
            ['02 · Context management', 'Deep linking and an in-app client switcher', 'More flexibility. More interaction complexity.', '/images/s1-option-2.png', 'Wireframe of proposal 2: the Corporate module with a client switcher in the toolbar to change client without leaving the product.'],
            ['03 · Context assistance', 'Deep linking, switcher and AI', 'Highest potential. Highest complexity.', '/images/s1-option-3.png', 'Wireframe of proposal 3: the tax return with a contextual panel on the right suggesting where to continue.'],
          ].map(([k, t, d, src, alt]) => (
            <li key={k}>
              <div className="media"><img src={src} alt={alt} loading="lazy" /></div>
              <span className="options3__k">{k}</span>
              <span className="options3__t">{t}</span>
              <span className="options3__d">{d}</span>
            </li>
          ))}
        </ol>
        <Matrix />
      </CaseSection>

      <CaseSection num="07" label="The strategic decision" meta="Proposal 1" title="Solve the core problem now. Keep the bigger opportunity open.">
        <Pair
          before={{ src: '/images/s1-before.jpg', caption: 'From an empty state', alt: 'CCH iFirm Personal Tax opening on an empty state, asking the user to select a contact before anything else.' }}
          after={{ src: '/images/s1-hd-returns.jpg', caption: 'To a more connected experience', alt: 'The returns list inside CCH iFirm: 142 returns, 18 needing attention, each with its client, business number, return status, eFile state, last change and tax year end.' }}
        />
        <KeyLine label="Chose not to build yet">Context assistance with AI: the highest potential and the highest complexity. The next step, not the first one.</KeyLine>
      </CaseSection>

      <CaseSection num="08" label="The system" meta="Global iFirm · design system" title="The solution had to feel like part of the product.">
        <Figure className="figure--wide" src="/images/s1-figma-design-system.jpg" caption="Figma · The returns list built from the design system library" alt="Figma: the returns list frame next to the design system library panel, with breadcrumb, checkbox, button and dropdown components." />
        <KeyLine label="Key principle">Improve the journey without creating a new interaction model.</KeyLine>
      </CaseSection>

      <CaseSection num="09" label="The experience" meta="Less repetition · more continuity" title="Context follows the user.">
        <div className="split">
          <ol className="flowlist" aria-label="How the context follows the user">
            <li><b>01</b><div><strong>Select a return or create a new one</strong><span>The client becomes the active context.</span></div></li>
            <li><b>02</b><div><strong>Work on a return</strong><span>The user moves to another product.</span></div></li>
            <li><b>03</b><div><strong>Open the client’s data, or another task</strong><span>The context follows the user.</span></div></li>
          </ol>
          <Figure src="/images/s1-hd-dashboard.jpg" caption="CCH iFirm · One dashboard for the firm’s work" alt="The CCH iFirm dashboard: last returns, resource allocation, total work in progress by partner, documents and annual revenue." />
        </div>
      </CaseSection>

      <CaseSection num="10" label="The validation" meta="Build with AI" title="From static screens to a working experience.">
        <Video src="/video/s1-coded-prototype.mp4" poster="/images/story-1-poster.jpg" label="The coded prototype running: selecting a client, moving to another product and arriving with the context intact." caption="The coded prototype I built with GitHub Copilot · select a client, change product, the client is still there" />
        <Flow label="From design to confidence" steps={['Design', 'Coded prototype', 'Customer testing', 'Evidence', 'Confidence to proceed']} />
      </CaseSection>

      <CaseSection num="11" label="Testing with customers" meta="5 customers moving from on-premise" title="Open the return for client Acme and check a piece of information in the client record.">
        <Stats items={[
          { value: '4 / 5', label: 'Completed the task' },
          { value: '1 / 5', label: 'Needed assistance' },
          { value: '~10 sec', label: 'To reach the information' },
        ]} />
      </CaseSection>

      <CaseSection num="12" label="In their words" meta="Customer testing" tone="dark">
        <div className="quotes">
          <p className="quote-mark">It’s a question of getting used to it.</p>
          <p className="quote-mark">It makes sense.</p>
        </div>
      </CaseSection>

      <CaseSection num="13" label="Implementation and handoff" meta="Ready for development" title="From design system to implementation-ready product.">
        <Figure className="figure--wide" src="/images/s1-handoff-return.jpg" caption="Figma handoff · 01. Select a return · Ready for dev · every state of the journey, in sequence" alt="The Figma handoff board for the select-a-return flow, marked Ready for dev: four rows of screens, each step connected to the next, with the states and branches annotated." />
        <Figure className="figure--wide" src="/images/s1-handoff-contact.jpg" caption="Figma handoff · 01. Select a contact · from the dashboard to the client record" alt="The Figma handoff board for the select-a-contact flow: the dashboard, the contacts list and the client record, connected by the decision that opens each one." />
        <div className="split split--even">
          <Cols items={[
            { k: 'Design system', d: 'Components and variants.' },
            { k: 'Behaviour', d: 'States, interactions, edge cases.' },
            { k: 'Specs', d: 'Layout, spacing, responsive.' },
          ]} />
          <Figure src="/images/s1-figma-ai-review.jpg" caption="Handoff review · An AAA accessibility review with AI, inside Figma" alt="Figma: the returns list with an AI panel listing the top fixes to reach AAA: darker secondary text, darker primary blue, darker red for alerts, larger checkbox hit areas and icons on status badges." />
        </div>
      </CaseSection>

      <CaseSection num="14" label="The outcome" meta="Users · product · delivery" tone="dark" title="A simpler solution that worked for users, product and delivery.">
        <Cols items={[
          { k: 'User', t: 'Client context is preserved' },
          { k: 'Product', t: 'A more connected experience' },
          { k: 'Business and delivery', t: 'Lower implementation effort' },
        ]} />
        <Stats items={[{ value: 'L → S', label: 'Development effort' }]} />
      </CaseSection>

      <CaseSection num="15" label="End to end" meta="CCH iFirm">
        <p className="closing" style={{ color: 'var(--lb-cream-ink)' }}>I stayed involved beyond the final screens, connecting design decisions to a working prototype, validating the experience with customers and translating the final solution into implementation-ready specifications.</p>
      </CaseSection>

      <CaseNote>The interfaces are redrawn and the data is altered. The decisions and outcomes are real.</CaseNote>

      <NextCase to={ROUTES.case2} label="Case 02" title="AI-Powered Customer Communications" />
    </article>
  );
}
