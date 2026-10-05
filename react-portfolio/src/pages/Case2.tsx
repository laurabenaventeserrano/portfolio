import CaseHero from '../components/CaseHero';
import { CaseSection, Callout, Figure, Item, CaseNote, NextCase, Stats, Steps, Video } from '../components/ui';
import { ROUTES } from '../content/site';

export default function Case2() {
  return (
    <article>
      <CaseHero
        num="02"
        title="AI-Powered Customer Communications"
        hook="I helped turn an AI opportunity into a product decision and a shippable MVP."
        company="Wolters Kluwer / CCH iFirm"
        role="Senior Product Designer · AI product design"
        status="Shipped · Canada"
        tags={['AI product design', 'Product strategy', 'Human-AI interaction']}
      />

      <CaseSection num="01" label="Context" title="Engagement letters, regulatory updates and other communications are created once and sent manually to many clients.">
        <p className="lead">Creating a communication meant switching between tools. The original requirement was to improve the document editing experience.</p>
        <Steps label="The workflow before" items={[
          ['Create or write the letter', 'Normally, outside the software.'],
          ['Paste and review', 'The grammar and structure.'],
          ['Select the clients', 'One by one.'],
          ['Review and send', 'And potentially save for later.'],
        ]} />
      </CaseSection>

      <CaseSection num="02" label="The problem" tone="dark" title="Professionals already used ChatGPT to draft emails and written content during their working day.">
        <p className="lead">AI was already part of the workflow, outside the product. The product question was where and how AI should enter the workflow inside it.</p>
      </CaseSection>

      <CaseSection num="03" label="The decision" title="Reframe the brief from editing to starting.">
        <div className="grid-2">
          <Item n="User goal" title="Users needed to accelerate their workflow with AI." />
          <Item n="Business goal" title="Make document creation faster and keep the workflow inside the product." />
        </div>
        <Callout label="What I proposed">AI-assisted drafting and the human review model.</Callout>
      </CaseSection>

      <CaseSection num="04" label="The experience" title="From blank template to AI assistant.">
        <p className="lead">The AI writes the letter, adds the tags and suggests the group of clients. The professional reviews and decides.</p>
        <Video src="/video/s2-template-ai.mp4" poster="/images/story-2-poster.jpg" label="Creating a communication inside CCH iFirm: write from scratch, select a template or draft with AI, then the instruction step where the professional picks the document type and the client and writes what the letter should cover." caption="CCH iFirm · Write from scratch, select a template or draft with AI" />
        <Steps label="The workflow after" items={[
          ['Create or write the letter', 'Now inside the software.'],
          ['Insert application tags', 'So the letter can be customised.'],
          ['Select a group of clients', 'For example individuals or new clients.'],
          ['Review and send', 'Users want to review what the AI did.'],
        ]} />
      </CaseSection>

      <CaseSection num="05" label="AI + human review" title="The AI creates a starting point. The professional stays responsible for the final document.">
        <p className="body">Research shows users don't reliably verify AI outputs by default. <span className="muted">Appropriate reliance on generative AI: research synthesis · Microsoft</span></p>
        <Figure src="/images/s2-wireflow.jpg" caption="Wireflow · Blank page → approved document, used to argue the scope change" alt="Lo-fi wireflow in six frames: blank document, instruction, generating, draft in place, review and edit, approve and send. Below, three principles: the AI never finishes the document, no state is hidden, nothing stored before a human says so." />
      </CaseSection>

      <CaseSection num="06" label="Shipped · Outcome" title="AI moved from an external workaround into the product.">
        <Stats items={[
          { value: '3/3', label: 'Customers validated the concept' },
          { value: 'Shipped', label: 'Canadian market' },
        ]} />
        <div className="grid-3">
          <Item n="User" title="A faster way to get started">No empty page, and no leaving the product to draft elsewhere.</Item>
          <Item n="Product" title="AI-assisted document creation inside CCH iFirm">With human review built into the flow, not bolted on.</Item>
          <Item n="Business and delivery" title="A validated MVP released in Canada">Concept → validation → roadmap → MVP → Canadian release.</Item>
        </div>
      </CaseSection>

      <CaseSection num="07" label="My contribution">
        <div className="grid-4">
          <Item n="Product strategy">Reframed the brief from editing to starting.</Item>
          <Item n="UX">Designed the end-to-end flow, from wireframes to validation concepts.</Item>
          <Item n="MVP">Defined what shipped and what was deferred.</Item>
          <Item n="Stakeholders">Defended the direction. Scope was expanded and phased into the roadmap.</Item>
        </div>
      </CaseSection>

      <CaseNote>The interfaces are redrawn and the data is altered. The decisions and outcomes are real.</CaseNote>

      <NextCase to={ROUTES.case3} label="Case 03" title="AI-Powered Client Data Migration" />
    </article>
  );
}
