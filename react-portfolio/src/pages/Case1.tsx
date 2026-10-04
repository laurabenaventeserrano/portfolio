import CaseHero from '../components/CaseHero';
import { CaseSection, Callout, Flow, Item, CaseNote, NextCase, Pair, Stats, Steps, Video } from '../components/ui';
import { ROUTES } from '../content/site';
import { useTitle } from '../lib/hooks';

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
        tags={['Product design', 'Product strategy', 'Systems', 'Design systems']}
      />

      <CaseSection num="01" label="Context" title="Six products moving from on-premise to the cloud.">
        <p className="lead">Accounting, tax and practice management products at Wolters Kluwer. We were bringing six products into one cloud experience.</p>
        <Stats items={[
          { value: '6', label: 'Products unified' },
          { value: '5', label: 'Markets' },
          { value: '1', label: 'Shared design system' },
        ]} />
      </CaseSection>

      <CaseSection num="02" label="The problem" tone="dark" title="There is a mismatch between the user mental model and the product model.">
        <p className="lead">Users think in the work they need to do: “I'm working on a tax return”. The products were built around the client or the product. So every time users moved from one product to another, they had to pick the client again.</p>
      </CaseSection>

      <CaseSection num="03" label="Before → after">
        <Pair
          before={{ src: '/images/s1-empty-state.jpg', caption: 'Before · You arrive in a new product with no client selected', alt: 'CCH iFirm Personal Tax opening with no client selected: the workspace is greyed out behind a panel that says no client selected, and a contact list waiting to be searched.' }}
          after={{ src: '/images/s1-experience.jpg', caption: 'After · The active client carried in the header', alt: 'The returns list inside CCH iFirm with the firm and the active client carried in the header, and every return listed with its status.' }}
        />
      </CaseSection>

      <CaseSection num="04" label="The decision" title="The client travels with you.">
        <p className="lead">I explored three ways to solve the problem and chose the simplest: deep linking with the client context. You select a client once, open another product, and it opens with that same client.</p>
        <Callout label="What I chose not to build">Context assistance: deep linking, switcher and AI. Highest potential, highest complexity.</Callout>
      </CaseSection>

      <CaseSection num="05" label="The experience" title="Select a client, change product, the client is still there.">
        <p className="body">I used GitHub Copilot as a development partner to translate the designed experience into a functional prototype while keeping the design system and interaction decisions consistent with the intended product.</p>
        <Video src="/video/s1-coded-prototype.mp4" poster="/images/story-1-poster.jpg" label="The coded prototype running: selecting a client, moving to another product and arriving with the context intact." caption="The coded prototype · Tested with 5 customers moving from the on-premise product" />
      </CaseSection>

      <CaseSection num="06" label="How I work">
        <Steps label="How I worked on this case" items={[
          ['Research', '5 sessions with customers and 2 with subject matter experts.'],
          ['Framing', 'How do we keep the client across products without adding more navigation?'],
          ['Exploration', 'Three ways to solve the problem, plotted on value against effort.'],
          ['Decision', 'Deep linking with the client context.'],
          ['Validation', 'A coded prototype, tested with 5 customers.'],
          ['Implementation', 'Design system, interaction and behaviour, implementation specs, developer handoff.'],
        ]} />
      </CaseSection>

      <CaseSection num="07" label="Shipped" title="From design system to implementation-ready product.">
        <div className="grid-4">
          <Item n="01" title="Design system">Components and variants. Reusable components.</Item>
          <Item n="02" title="Interaction and behaviour">States, interactions and edge cases.</Item>
          <Item n="03" title="Implementation specs">Layout and spacing, visual properties, responsive behaviour.</Item>
          <Item n="04" title="Developer handoff">Ready for development. Design to development.</Item>
        </div>
      </CaseSection>

      <CaseSection num="08" label="Outcome" title="It solved the core problem with the smallest build.">
        <Stats items={[
          { value: '4 / 5', label: 'Customers completed the task on their own' },
          { value: '~10 sec', label: 'To reach the information' },
          { value: 'L → S', label: 'Development effort' },
        ]} />
        <p className="body">Testing before building let us ship an S instead of an L.</p>
      </CaseSection>

      <CaseSection num="09" label="My contribution">
        <Flow label="My contribution" steps={['Research', 'Information architecture', 'Exploration and trade-offs', 'Coded prototype', 'Customer validation', 'Stakeholder alignment', 'Design system and handoff']} />
      </CaseSection>

      <CaseNote>The interfaces are redrawn and the data is altered. The decisions and outcomes are real.</CaseNote>

      <NextCase to={ROUTES.case2} label="Case 02" title="AI-Powered Customer Communications" />
    </article>
  );
}
