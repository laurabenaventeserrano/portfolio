import CaseHero from '../components/CaseHero';
import ValueEffortMatrix from '../components/ValueEffortMatrix';
import { CaseSection, CaseNote, Cols, KeyLine, NextCase, NumberedBlocks, Pair, Video } from '../components/ui';
import { ROUTES } from '../content/site';

/*
  Case 04 · AI Contextual Assistant for CCH iFirm.
  La propuesta 3 del Case 01 (context assistance) contada como su propia historia, tal como la cuenta Laura:
  la lámina "Future direction" y el vídeo de su presentación, y su documento de propuestas (Proposal 3).
  Es un concepto, no se lanzó: el estado lo dice.
*/
export default function Case4() {
  return (
    <article>
      <CaseHero
        num="04"
        title="AI Contextual Assistant for CCH iFirm"
        hook="From preserving context to understanding context."
        company="Wolters Kluwer"
        role="Senior Product Designer"
        status="Concept"
        facts={[['Origin', 'Proposal 3 · Context assistance']]}
        tags={['AI product design', 'Human-AI interaction', 'Product strategy', 'Prototyping']}
        media={<Video src="/video/s1-ai-concept.mp4" poster="/images/s1-hd-ask-ai.jpg" label="Future concept: from the CCH iFirm dashboard the user opens Ask iFirm AI, asks which returns need attention first, and the contextual sidebar answers with the source it read." caption="Ask iFirm AI · The contextual assistant, future concept" />}
      />

      <CaseSection num="01" label="The concept" meta="Future concept" title="An AI-powered contextual sidebar.">
        <p className="lead">The future opportunity was to make client context dynamic and helpful, rather than something the user has to manually maintain.</p>
      </CaseSection>

      <CaseSection num="02" label="Where it comes from" meta="CCH iFirm Cloud Migration" title="Context assistance: the highest potential, and the highest complexity.">
        <div className="split split--even">
          <div className="stack gap-24">
            <div className="options3__solo">
              <div className="media"><img src="/images/s1-option-3.png" alt="Wireframe of proposal 3: the tax return with a contextual panel on the right suggesting where to continue." loading="lazy" /></div>
              <span className="options3__k">Proposal 3 · Context assistance</span>
              <span className="options3__t">Deep linking, switcher and AI</span>
            </div>
          </div>
          <ValueEffortMatrix highlight="P3" />
        </div>
        <KeyLine label="The decision">Solve the core problem now. Keep the bigger opportunity open. This is that opportunity.</KeyLine>
      </CaseSection>

      <CaseSection num="03" label="What it knows" meta="The shift" tone="dark" title="From manual context management to assisted workflow.">
        <Cols items={[
          { k: 'Workflow patterns', d: 'How the user typically works across products and tasks.' },
          { k: 'Assigned jobs', d: 'What work is assigned to them, and which clients or jobs require attention.' },
          { k: 'Result', d: 'The product understands what the user is working on and helps them stay within that context.' },
        ]} />
      </CaseSection>

      <CaseSection num="04" label="How it works" meta="On top of deep linking and the client switcher">
        <NumberedBlocks label="What the assistant adds" items={[
          ['Context awareness', 'Knows the current client, recent clients and active jobs.'],
          ['Smart suggestions', '“Continue working on Client X: pending invoice.” “You were reviewing Job Y.”'],
          ['Quick actions', 'Jump directly to relevant tasks without navigation.'],
          ['Learning system', 'Adapts to user behaviour.'],
        ]} />
      </CaseSection>

      <CaseSection num="05" label="The experience" meta="Ask iFirm AI" title="Which returns need attention first?">
        <Pair
          before={{ src: '/images/s1-hd-ask-ai.jpg', caption: 'Ask iFirm AI · From the dashboard', alt: 'The CCH iFirm dashboard with the Ask iFirm AI button at the bottom left.' }}
          after={{ src: '/images/s1-hd-ai-sidebar.jpg', caption: 'The answer, with its source', alt: 'The contextual sidebar answering that 18 of the 142 returns need attention today, four at deadline risk, with the source it read and a link to open the returns.' }}
        />
        <KeyLine label="The answer">Of the 142 returns open across the firm, 18 need attention today. Four are at deadline risk in the next six days.</KeyLine>
      </CaseSection>

      <CaseSection num="06" label="Impact and trade-offs" meta="Proposal 3">
        <Cols items={[
          { k: 'How it helps', t: 'Moves from context preservation to context assistance', d: 'Reduces cognitive load, minimises navigation effort and unnecessary context switching, supports workflow continuity across modules, enables proactive guidance.' },
          { k: 'Limitation', t: 'Implementation complexity', d: 'Requires strong visual indicators.' },
          { k: 'What is missing', t: 'A consistent context model across products', d: 'Reliable data: jobs, deadlines, relationships.' },
        ]} />
        <KeyLine label="Best for">Complex workflows, and users managing multiple clients and tasks.</KeyLine>
      </CaseSection>

      <CaseNote>A future concept: the interfaces are designed for illustration and the data is fictional.</CaseNote>

      <NextCase to={ROUTES.case5} label="Case 05" title="Multi-device Product Design for Telefónica" />
    </article>
  );
}
