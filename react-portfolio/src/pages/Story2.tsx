import StoryHero from '../components/StoryHero';
import { Callout, Chapter, Figure, Flow, Item, MeasurePlan, NextStory, Stats, Video } from '../components/ui';
import { ROUTES } from '../content/site';
import { useTitle } from '../lib/hooks';

export default function Story2() {
  useTitle('AI-Assisted Drafting for CCH iFirm · Laura Benavente');
  return (
    <article>
      <StoryHero
        label="Story 2"
        company="Wolters Kluwer · AI product design"
        title="AI-Assisted Drafting for CCH iFirm"
        subtitle="Removing the blank page from client documents"
        stats={[
          { value: '3/3', label: 'Customers validated the concept', accent: true },
          { value: 'Shipped', label: 'Canadian market' },
          { value: '1', label: 'CCH iFirm' },
        ]}
        tags={['Systems thinking', 'Product strategy', 'Human AI system', 'MVP definition', 'Stakeholder alignment']}
        intro="Built inside CCH iFirm at Wolters Kluwer, their cloud practice management product for accounting and tax firms, and released in the Canadian market. Some of this work cannot be shown as it was built. The interfaces here are redrawn and the data is altered; the decisions, constraints and outcomes are not."
        poster="/images/story-2-poster.jpg"
        posterAlt="AI-Assisted Drafting for CCH iFirm"
      />

      <Chapter num="01" kicker="The context" title="Our users were already using AI. They were just using it outside the product."
        intro={<p className="big-line" style={{ fontSize: 'clamp(24px, 2.4vw, 34px)' }}>The brief was about editing. The real problem was starting.</p>}>
        <div className="grid-3">
          <Item n="The research insight">Professionals already used ChatGPT to draft emails and written content during their working day.</Item>
          <Item n="Product problem">Our product still gave them a blank page to start from.</Item>
          <Item n="Design opportunity">Bring that behaviour into the product. Improving the editor would make the blank page slightly better. AI-assisted drafting could remove it.</Item>
        </div>
        <div className="stack gap-20">
          <p className="kicker kicker--muted">Research method</p>
          <Stats items={[{ value: '5', label: 'Foundational research sessions conducted in 2024 on AI and usage among Wolters Kluwer customers' }]} />
        </div>
      </Chapter>

      <Chapter num="02" kicker="The problem" tone="soft" title="From template to AI assistant"
        intro={<p className="lead">Accounting and tax professionals regularly create documents that clients need to review and sign. The original requirement was to improve the document editing experience.</p>}>
        <div className="table-wrap">
          <table className="table">
            <caption className="sr-only">The three routes professionals had to create a document</caption>
            <thead><tr><th scope="col">Route</th><th scope="col">What it meant</th><th scope="col">Friction</th></tr></thead>
            <tbody>
              <tr><td>Template</td><td>Rarely fit the actual client situation.</td><td className="risk">Heavy editing anyway</td></tr>
              <tr><td>Write from scratch</td><td>Slow, and introduced typing errors in client-facing documents.</td><td className="risk">Risk in a signed document</td></tr>
              <tr><td>Leave the product</td><td>Draft in an external tool, then paste the content back.</td><td className="risk">Client information leaves the system</td></tr>
            </tbody>
          </table>
        </div>
        <div className="grid-2">
          <Item n="Business goal" title="Make document creation faster and keep the workflow inside the product." />
          <Item n="Friction" title="Every route was slow." />
        </div>
        <Callout label="The problem" variant="accent">The product handed professionals an empty page at the exact moment they needed to start writing.</Callout>
        <Figure src="/images/s2-blank-page.jpg" caption="CCH iFirm · The blank page the requirement was written about" alt="A new engagement letter open in CCH iFirm with nothing in it: a blank document, an empty editor, and the words nothing here yet above the choice between inserting a template and drafting with AI." />
      </Chapter>

      <Chapter num="03" kicker="The opportunity" tone="dark" title={<span className="accent">Make document creation faster and keep the workflow inside the product.</span>} />

      <Chapter num="04" kicker="The strategic decision" title="Turn a document-editing requirement into an AI-assisted drafting experience">
        <Flow label="From brief to direction" steps={['Original brief · Improve editing', 'Reframed problem · Remove the blank page', 'Proposed direction · AI-assisted drafting']} />
        <div className="grid-3">
          <Item n="The proposal was mine">AI was not in the original requirement. I proposed AI-assisted drafting based on research we already had.</Item>
          <Item n="Stakeholder reviews">I defended the direction using the existing user research rather than a new discovery cycle.</Item>
          <Item n="Result">Stakeholders expanded the scope of the initiative and phased the work into the roadmap.</Item>
        </div>
        <Callout label="Main principle" variant="accent">Don't optimise the blank page. Remove the blank page.</Callout>
      </Chapter>

      <Chapter num="05" kicker="The system" tone="soft" title="AI had to fit a professional workflow, not replace it">
        <div className="grid-3">
          <div className="card">
            <span className="mono-s">AI</span>
            <p className="h-s">Creates a first draft</p>
            <p className="body">From the professional's instruction.</p>
          </div>
          <div className="card card--chosen">
            <span className="mono-s">The professional</span>
            <p className="h-s">Reviews · Edits · Approves</p>
            <ol className="card__pros">
              <li className="card__pro"><b>01</b>Nothing is stored before approval</li>
              <li className="card__pro"><b>02</b>Nothing is sent before approval</li>
              <li className="card__pro"><b>03</b>The professional stays accountable for the content</li>
            </ol>
          </div>
          <div className="card">
            <span className="mono-s">Client</span>
            <p className="h-s">Receives the final document</p>
            <p className="body">Only after human approval.</p>
          </div>
        </div>
        <p className="big-line">Review is not a step after generation. Review is part of the product.</p>
        <Callout label="Main principle">
          <div className="stack gap-12">
            <p>Research shows users don't reliably verify AI outputs by default.</p>
            <p className="mono-s muted">Appropriate reliance on generative AI: research synthesis · Microsoft</p>
          </div>
        </Callout>
      </Chapter>

      <Chapter num="06" kicker="The experience" title="The AI creates a starting point. The professional stays responsible for the final document."
        intro={<p className="h-s">Generate → Review → Decide</p>}>
        <div className="grid-6">
          <Item n="01" title="Start">A document is needed for a client.</Item>
          <Item n="02" title="Instruction">The professional describes what the document should say.</Item>
          <Item n="03" title="AI draft">A first version replaces the empty page.</Item>
          <Item n="04" title="Review and edit">The professional reads, corrects and adjusts.</Item>
          <Item n="05" title="Approve">Explicit human decision.</Item>
          <Item n="06" title="Save or send">The document goes to the client for signature.</Item>
        </div>
        <Video src="/video/s2-draft-with-ai.mp4" poster="/images/story-2-poster.jpg" label="The instruction step inside the product: the professional picks the document type and the client, then writes in plain sentences what the letter should cover, with a note that nothing is sent to the client." caption="CCH iFirm · The instruction step. Intent, not prompt engineering" />
        <Figure src="/images/s2-wireflow.jpg" caption="The flow used to argue the scope change. The annotations are the argument, not the pixels" alt="Lo-fi wireflow in six frames: the blank document, the instruction in the user's own words, generating with a cancel, the draft landing in the document rather than a preview, review and edit, and approval as a named act." />
        <div className="figure-row">
          <Callout label="The instruction panel" regular>Intent in plain language. No prompt fields and no model picker: choosing the model is the product's job, not the professional's. The panel states what it will not do before it does anything.</Callout>
          <Figure src="/images/s2-spec-panel.jpg" caption="The instruction panel · Spacing on an 8px grid" alt="The instruction panel with its redlines: 24 pixel padding, a 104 pixel input, a panel between 640 and 720 wide, all spacing on an eight pixel grid, and a line stating that nothing is sent to the client." />
        </div>
      </Chapter>

      <Chapter num="07" kicker="Accessibility, written into the spec" tone="dark" title="Three of the notes the specification carries, so they are built rather than retrofitted.">
        <div className="grid-3">
          <Item n="01">The panel is a <strong className="accent">labelled region, not a dialog</strong>. It does not trap focus, and the document stays readable and editable behind it.</Item>
          <Item n="02">Generation progress is <strong className="accent">announced politely</strong>, so a screen reader hears that work is happening without the draft interrupting whatever is being read.</Item>
          <Item n="03"><strong className="accent">Colour is never the only signal.</strong> The rail that marks machine-written text is paired with a chip that says so in words.</Item>
        </div>
        <Figure src="/images/s2-spec-sheet.jpg" caption="Every state, with the notes development needed to build it" alt="The full interaction specification: entry point, instruction, review and edit, approve and send, each state drawn and annotated, with developer notes covering that generation is never terminal, that nothing persists before approval, that markers are paragraph-scoped, that failure is not a dead end, that the panel is a labelled region announced politely and colour is never the only signal, and what was left out of the MVP." />
      </Chapter>

      <Chapter num="08" kicker="MVP definition" title="Not everything useful belongs in the first release">
        <div className="grid-3">
          <div className="card card--chosen"><span className="mono-s">Shipped</span><p className="h-s">Instruction-based AI drafting</p></div>
          <div className="card card--chosen"><span className="mono-s">Shipped</span><p className="h-s">Full human review before saving or sending</p></div>
          <div className="card"><span className="mono-s">Deferred</span><p className="h-s">Reusable templates for generated documents</p></div>
        </div>
        <Callout label="Why templates were deferred" regular>Templates introduced a second lifecycle: ownership, versioning, editing rights and what happens when the underlying rules change.</Callout>
        <Callout label="Decision">Validate the core drafting behaviour first. A smaller MVP gave us a safer way to validate the core behaviour before introducing lifecycle complexity.</Callout>
      </Chapter>

      <Chapter num="09" kicker="The validation" tone="soft" title="Test small. Release for real.">
        <div className="stack gap-20">
          <p className="kicker kicker--muted">What we needed to know</p>
          <div className="grid-3">
            <Item n="01" title="Is it intuitive?" />
            <Item n="02" title="Is it useful?" />
            <Item n="03" title="Does the review model feel appropriate?" />
          </div>
        </div>
        <Callout label="Result" variant="accent">
          <div className="stack gap-12">
            <p>3 of 3 trusted customers validated the concept positively.</p>
            <p style={{ fontSize: 17, fontWeight: 400 }}>A directional signal, strong enough to justify building the MVP. Not statistical evidence.</p>
          </div>
        </Callout>
      </Chapter>

      <Chapter num="10" kicker="The build" title="From strategic proposal to shipped AI feature">
        <div className="grid-5">
          <Item n="Product strategy">Reframed the brief from editing to starting.</Item>
          <Item n="AI product design">Proposed AI-assisted drafting and the human review model.</Item>
          <Item n="UX">Designed the end-to-end navigation and interaction flow, from wireframes to validation concepts.</Item>
          <Item n="MVP">Defined what shipped and what was deferred.</Item>
          <Item n="Stakeholders">Defended the direction; scope was expanded and phased into the roadmap.</Item>
        </div>
        <Flow label="Delivery" steps={['Concept', 'Validation', 'Roadmap', 'MVP', 'Canadian release']} />
        <Callout label="Build">I helped turn an AI opportunity into a product decision and a shippable MVP.</Callout>
      </Chapter>

      <Chapter num="11" kicker="How I would measure it" tone="soft" title="Are people reading what the AI wrote?"
        intro={<p className="lead">No product analytics were available to me on this work, so this is the plan rather than the result. Written as it would go to the team.</p>}>
        <MeasurePlan rows={[
          ['Target behaviour', 'Starting a document from a draft instead of an empty page, and editing it before approving'],
          ['Event to instrument', 'Drafts generated, drafts edited before save, drafts discarded without saving'],
          ['The question', 'What proportion of generated drafts are edited before approval?'],
          ['At thirty days', 'A high edit rate is the good outcome here: it means people are reading. A high discard rate points at the instruction step, not the model'],
        ]} />
      </Chapter>

      <Chapter num="12" kicker="The outcome" tone="dark" title="AI moved from an external workaround into the product">
        <div className="grid-3">
          <Item n="User" title="A faster way to get started">No empty page, and no leaving the product to draft elsewhere.</Item>
          <Item n="Product" title="AI-assisted document creation inside CCH iFirm">With human review built into the flow, not bolted on.</Item>
          <Item n="Business and delivery" title={<span className="accent">A validated MVP released in Canada</span>}>3 of 3 customers validated the concept. Users needed to accelerate their workflow with AI.</Item>
        </div>
        <div className="callout">
          <p className="callout__label">After release</p>
          <div className="stack gap-20">
            <h3 className="h-m">I thought this was a tool for contracts. People used it for anything that needed a signature.</h3>
            <p className="body">My working assumption throughout design was that the feature served formal, structured documents: engagement letters, contracts, the heavyweight paperwork of a practice.</p>
            <p className="body">In use, the pattern was broader. People reached for it for anything that required a client signature, including short, routine correspondence. The opportunity was wider than the brief, and wider than my own framing of it.</p>
          </div>
        </div>
      </Chapter>

      <NextStory to={ROUTES.story3} label="Story 3" title="Designing across connected consumer experiences" />
    </article>
  );
}
