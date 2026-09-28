import StoryHero from '../components/StoryHero';
import { Callout, Chapter, Figure, Item, NextStory, Stats, Video } from '../components/ui';
import { ROUTES } from '../content/site';
import { useTitle } from '../lib/hooks';

export default function Story1() {
  useTitle('CCH iFirm by Wolters Kluwer · Laura Benavente');
  return (
    <article>
      <StoryHero
        label="Story 1"
        company="Wolters Kluwer"
        title="CCH iFirm by Wolters Kluwer"
        subtitle="Designing continuity across a fragmented SaaS ecosystem"
        stats={[
          { value: '6', label: 'Products unified' },
          { value: '5', label: 'Markets' },
          { value: '1', label: 'Shared design system' },
          { value: 'L → S', label: 'Development effort', accent: true },
        ]}
        tags={['Systems thinking', 'Product design', 'Design system', 'Customer validation', 'Stakeholder alignment']}
        intro="Accounting, tax and practice management products at Wolters Kluwer. The interfaces are redrawn and the data is altered. The decisions and outcomes are real."
        poster="/images/story-1-poster.jpg"
        posterAlt="CCH iFirm by Wolters Kluwer"
      />

      <Chapter num="01" kicker="The problem" title="There is a mismatch between the user mental model and the product model."
        intro={<p className="lead">We were bringing six products into one cloud experience. Users think in the work they need to do: “I'm working on a tax return”. The products were built around the client or the product. So every time users moved from one product to another, they had to pick the client again.</p>}>
        <Figure src="/images/s1-empty-state.jpg" caption="Before · You arrive in a new product with no client selected" alt="CCH iFirm Personal Tax opening with no client selected: the workspace is greyed out behind a panel that says no client selected, and a contact list waiting to be searched." />
        <Callout label="The question" variant="accent">How do we keep the client across products without adding more navigation?</Callout>
      </Chapter>

      <Chapter num="02" kicker="What I did" tone="soft" title="Research, three options, a coded prototype and a test.">
        <div className="grid-4">
          <Item n="01" title="Listened">5 sessions with customers and 2 with subject matter experts.</Item>
          <Item n="02" title="Explored">Three options, from a simple deep link to an AI assistant, compared on value against effort.</Item>
          <Item n="03" title="Prototyped">I built a coded prototype with GitHub Copilot to test the real interaction.</Item>
          <Item n="04" title="Tested">With 5 customers moving from the on-premise product.</Item>
        </div>
        <Figure src="/images/s1-matrix.jpg" caption="Value against effort · Proposal 1 was the one chosen" alt="Value against effort: the three proposals plotted, with Proposal 1 marked as the one chosen." />
      </Chapter>

      <Chapter num="03" kicker="The solution" tone="dark" title="The client travels with you."
        intro={<p className="lead">I chose the simplest option: deep linking with the client context. You select a client once, open another product, and it opens with that same client.</p>}>
        <Video src="/video/s1-coded-prototype.mp4" poster="/images/story-1-poster.jpg" label="The coded prototype running: selecting a client, moving to another product and arriving with the context intact." caption="The coded prototype · Select a client, change product, the client is still there" />
        <Figure src="/images/s1-experience.jpg" caption="Final proposal · The active client carried in the header" alt="The returns list inside CCH iFirm with the firm and the active client carried in the header, and every return listed with its status." />
      </Chapter>

      <Chapter num="04" kicker="The outcome" title="It solved the core problem with the smallest build.">
        <Stats items={[
          { value: '4 / 5', label: 'Customers completed the task on their own', accent: true },
          { value: '~10 sec', label: 'To reach the information' },
          { value: 'L → S', label: 'Development effort' },
        ]} />
        <p className="body">Testing before building let us ship an S instead of an L. It also left the door open for an AI sidebar that understands what you are working on.</p>
      </Chapter>

      <NextStory to={ROUTES.story2} label="Story 2" title="AI-Assisted Drafting for CCH iFirm" />
    </article>
  );
}
