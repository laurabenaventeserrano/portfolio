import CaseHero from '../components/CaseHero';
import { CaseSection, Callout, Figure, Item, CaseNote, NextCase, Stats, Steps, Video } from '../components/ui';
import { ROUTES } from '../content/site';
import { useTitle } from '../lib/hooks';

export default function Case2() {
  useTitle('AI-Powered Customer Communications · Laura Benavente');
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
        <Video src="/video/s2-draft-with-ai.mp4" poster="/images/story-2-poster.jpg" label="The instruction step inside the product: the professional picks the document type and the client, then writes in plain sentences what the letter should cover, with a note that nothing is sent to the client." caption="CCH iFirm · Generate, review, decide" />
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

      <CaseSection num="06" label="How I work">
        <Steps label="How I worked on this case" items={[
          ['Opportunity', 'A past research insight: professionals already drafted with ChatGPT.'],
          ['AI model', 'AI drafts, the professional reviews and approves.'],
          ['Workflow', ''],
          ['MVP', ''],
          ['Shipped', 'Canadian release.'],
        ]} />
      </CaseSection>

      <CaseSection num="07" label="Shipped · Outcome" title="AI moved from an external workaround into the product.">
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

      <CaseSection num="08" label="Future direction" title="From preserving context to understanding context.">
        <p className="lead"><strong>An AI-powered contextual sidebar.</strong> The future opportunity was to make client context dynamic and helpful, rather than something the user has to manually maintain.</p>
        <div className="grid-3">
          <Item title="Workflow patterns">How the user typically works across products and tasks.</Item>
          <Item title="Assigned jobs">What work is currently assigned to them and which clients or jobs require attention.</Item>
          <Item title="Result">The product understands what the user is working on and helps them stay within that context.</Item>
        </div>
        <Figure src="/images/s1-ai-sidebar.jpg" caption="iFirm AI · Contextual assistant, future concept" alt="The contextual assistant open beside the returns list: asked which returns need attention first, it answers that eighteen of the hundred and forty two open across the firm need attention today, breaks that into deadline risk, rejected filings and waiting on client, and names the source it read." />
      </CaseSection>

      <CaseSection num="09" label="My contribution">
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
