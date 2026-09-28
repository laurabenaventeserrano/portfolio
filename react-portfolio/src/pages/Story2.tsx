import StoryHero from '../components/StoryHero';
import { Callout, Chapter, Figure, Flow, Item, NextStory, Video } from '../components/ui';
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
        subtitle="Bulk customer communications using AI"
        stats={[
          { value: '3/3', label: 'Customers validated the concept', accent: true },
          { value: 'Shipped', label: 'Canadian market' },
          { value: '1', label: 'CCH iFirm' },
        ]}
        tags={['Systems thinking', 'Product strategy', 'Human AI system', 'MVP definition', 'Stakeholder alignment']}
        intro="CCH iFirm, the cloud practice management product of Wolters Kluwer. Released in Canada. The interfaces are redrawn and the data is altered. The decisions and outcomes are real."
        poster="/images/story-2-poster.jpg"
        posterAlt="AI-Assisted Drafting for CCH iFirm"
      />

      <Chapter num="01" kicker="The problem" title="Engagement letters, regulatory updates and other communications are created once and sent manually to many clients."
        intro={<p className="lead">Creating a communication meant switching between tools. The original requirement was to improve the document editing experience.</p>}>
        <div className="grid-4">
          <Item n="01" title="Create or write the letter">Normally, outside the software.</Item>
          <Item n="02" title="Paste and review">The grammar and structure.</Item>
          <Item n="03" title="Select the clients">One by one.</Item>
          <Item n="04" title="Review and send">And potentially save for later.</Item>
        </div>
      </Chapter>

      <Chapter num="02" kicker="How" tone="soft" title="I connected a past research insight."
        intro={<p className="lead">Professionals already used ChatGPT to draft emails and written content during their working day.</p>}>
        <div className="grid-2">
          <Item n="User goal" title="Users needed to accelerate their workflow with AI." />
          <Item n="Business goal" title="Make document creation faster and keep the workflow inside the product." />
        </div>
        <Callout label="What I saw" variant="accent">The opportunity to design an AI-based product.</Callout>
        <div className="grid-5">
          <Item n="Product strategy">Reframed the brief from editing to starting.</Item>
          <Item n="AI product design">Proposed AI-assisted drafting and the human review model.</Item>
          <Item n="UX">Designed the end-to-end flow, from wireframes to validation concepts.</Item>
          <Item n="MVP">Defined what shipped and what was deferred.</Item>
          <Item n="Stakeholders">Defended the direction. Scope was expanded and phased into the roadmap.</Item>
        </div>
      </Chapter>

      <Chapter num="03" kicker="The solution" tone="dark" title="From blank template to AI assistant."
        intro={<p className="lead">The AI writes the letter, adds the tags and suggests the group of clients.</p>}>
        <div className="grid-4">
          <Item n="01" title="Create or write the letter">Now inside the software.</Item>
          <Item n="02" title="Insert application tags">So the letter can be customised.</Item>
          <Item n="03" title="Select a group of clients">For example individuals or new clients.</Item>
          <Item n="04" title="Review and send">Users want to review what the AI did.</Item>
        </div>
        <Callout label="Main principle">
          <div className="stack gap-12">
            <p>Research shows users don't reliably verify AI outputs by default. The AI creates a starting point. The professional stays responsible for the final document.</p>
            <p className="mono-s muted">Appropriate reliance on generative AI: research synthesis · Microsoft</p>
          </div>
        </Callout>
        <Video src="/video/s2-draft-with-ai.mp4" poster="/images/story-2-poster.jpg" label="The instruction step inside the product: the professional picks the document type and the client, then writes in plain sentences what the letter should cover, with a note that nothing is sent to the client." caption="CCH iFirm · Generate, review, decide" />
      </Chapter>

      <Chapter num="04" kicker="The outcome" title="AI moved from an external workaround into the product.">
        <div className="grid-3">
          <Item n="User" title="A faster way to get started">No empty page, and no leaving the product to draft elsewhere.</Item>
          <Item n="Product" title="AI-assisted document creation inside CCH iFirm">With human review built into the flow, not bolted on.</Item>
          <Item n="Business and delivery" title={<span className="accent">A validated MVP released in Canada</span>}>3 of 3 customers validated the concept.</Item>
        </div>
        <Flow label="Delivery" steps={['Concept', 'Validation', 'Roadmap', 'MVP', 'Canadian release']} />
        <Figure src="/images/s2-documents.jpg" caption="CCH iFirm · One reminder written once and sent to twelve clients" alt="The Documents list in CCH iFirm: letters, forms and agreements shared with clients, each with its client, type, date sent and status. One row, an RRSP contribution reminder, went to 12 clients and has been seen by 9 of them." />
        <p className="big-line">I helped turn an AI opportunity into a product decision and a shippable MVP.</p>
      </Chapter>

      <NextStory to={ROUTES.story3} label="Story 3" title="Designing across connected consumer experiences" />
    </article>
  );
}
