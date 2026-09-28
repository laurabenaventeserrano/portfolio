import StoryHero from '../components/StoryHero';
import { Callout, Chapter, Figure, Flow, Item, MeasurePlan, NextStory, Stats, Video } from '../components/ui';
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
        intro="Several years of work across accounting, tax and practice management products, while a fragmented portfolio was moving towards a more connected cloud environment. Some of this work cannot be shown as it was built. The interfaces here are redrawn and the data is altered; the decisions, constraints and outcomes are not."
        poster="/images/story-1-poster.jpg"
        posterAlt="CCH iFirm by Wolters Kluwer"
      />

      <Chapter num="01" kicker="The context" title="From segmented, on-premise products to one connected cloud experience"
        intro={<p className="lead">Global iFirm was evolving from a collection of products into a more connected cloud experience.</p>}>
        <div className="figure-row">
          <Figure src="/images/s1-onpremise.jpg" caption="On-premise" alt="The on-premise product: a Windows desktop application with a document list, ribbon toolbar and a tax return open in a preview pane." />
          <Figure src="/images/s1-cloud.jpg" caption="One environment" alt="The cloud product: a single CCH iFirm dashboard gathering last returns, resource allocation, work in progress, documents and annual revenue." />
        </div>
        <Callout label="Design challenge" variant="accent">How might we help users move between products without losing context?</Callout>
      </Chapter>

      <Chapter num="02" kicker="The research insight" tone="dark" title="Users don't think in products or clients. They think in the work they need to do.">
        <Callout label="The research insight">There is a mismatch between the user's mental model and the product model.</Callout>
        <div className="grid-3">
          <Item n="The key user mental model was"><p className="quote accent">“I'm working on a tax return.”</p></Item>
          <Item n="The existing system, however, was built around a different mental model"><p className="quote">“I'm working on a client.”<br />“I'm working on a product.”</p></Item>
          <Item n="A design opportunity might be"><p className="h-s">Shift the experience from client-based navigation towards workflow continuity.</p></Item>
        </div>
        <div className="stack gap-20">
          <p className="kicker kicker--muted">Research method</p>
          <Stats items={[
            { value: '5', label: 'Foundational research sessions with existing customers' },
            { value: '2', label: 'Meetings with subject matter experts' },
          ]} />
        </div>
      </Chapter>

      <Chapter num="03" kicker="The core problem" title="Unifying the Wolters Kluwer product ecosystem exposed a fundamental information architecture problem.">
        <div className="table-wrap">
          <table className="table">
            <caption className="sr-only">The two product models and their risk</caption>
            <thead><tr><th scope="col">Model</th><th scope="col">Step 1</th><th scope="col">Step 2</th><th scope="col">Step 3</th><th scope="col">Risk</th></tr></thead>
            <tbody>
              <tr><td>Client-context products</td><td>Select a client</td><td>Select a product</td><td>Work</td><td className="risk">Systems only work with a client selected</td></tr>
              <tr><td>Firm-context products</td><td>Select a product</td><td>Select a client</td><td>Work</td><td className="risk">Breaks workflow continuity</td></tr>
            </tbody>
          </table>
        </div>
        <div className="figure-row">
          <div className="stack gap-24">
            <h3 className="h-s">The risk of client-context</h3>
            <Figure src="/images/s1-risk-client.jpg" caption="CCH iFirm · The client switcher opens the full list" alt="The on-premise client list: a long alphabetical roster of every client in the firm, opened in full whenever the user needs to switch." />
            <div className="grid-2">
              <Item n="01">On-premise and CCH iFirm compliance apps are client centric</Item>
              <Item n="02">Some applications only work with client context</Item>
              <Item n="03">The current client switcher opens the full list of clients</Item>
              <Item n="04">The component is inefficient: slow and not smart</Item>
            </div>
          </div>
          <div className="stack gap-24">
            <h3 className="h-s">The risk of firm-context</h3>
            <Figure src="/images/s1-risk-firm.jpg" caption="CCH iFirm · The product opens at firm level" alt="The returns list in firm context: corporate returns for the whole firm, none of them started, with no client selected to work within." />
            <div className="grid-2">
              <Item n="01">Doesn't support a continuous workflow</Item>
              <Item n="02">Users have to go back and forward to select another client</Item>
              <Item n="03">Open the selected client documentation or data</Item>
              <Item n="04">Move to the next job</Item>
            </div>
          </div>
        </div>
        <p className="big-line">The product makes users navigate between contexts instead of helping them progress through their work.</p>
        <Callout label="Design question" variant="box">How can we make client context persistent across the experience without adding another layer of navigation or creating unnecessary development complexity?</Callout>
      </Chapter>

      <Chapter num="04" kicker="My role" tone="soft" title="From problem definition to implementation">
        <div className="grid-6">
          <Item n="01" title="Frame the problem">Users were working across multiple products, but the experience didn't preserve their client context.</Item>
          <Item n="02" title="Understand the user">Conducted foundational research and interviews with SMEs to understand the jobs to be done, user goals and motivations.</Item>
          <Item n="03" title="Explore solutions">Explored multiple solutions for preserving client context across products while enhancing the user workflow.</Item>
          <Item n="04" title="Validate">Built a coded prototype of the proposed interaction.</Item>
          <Item n="05" title="Align and ship">Presented the findings and the different solution options to stakeholders.</Item>
          <Item n="06" title="Design handoff">Applied the existing design system to the new experience, ensuring the solution was consistent with the broader cloud product ecosystem.</Item>
        </div>
      </Chapter>

      <Chapter num="05" kicker="Expected outcome" title="Ensure the post-migration experience preserves a strong, persistent client context that aligns with UK user workflows, while fitting coherently within Global iFirm's existing firm-level architecture." />

      <Chapter num="06" kicker="The options" tone="soft" title="Three ways to solve the problem">
        <div className="grid-3">
          <div className="card card--chosen">
            <span className="mono-s">01 · Context preservation</span>
            <p className="h-s">Deep linking with client context.</p>
            <div className="card__pros"><p className="card__pro"><b>+</b>Lowest effort</p><p className="card__pro"><b>+</b>Solves the core problem</p></div>
          </div>
          <div className="card">
            <span className="mono-s">02 · Context management</span>
            <p className="h-s">Deep linking and an in-app client switcher.</p>
            <div className="card__pros"><p className="card__pro"><b>+</b>More flexibility</p><p className="card__pro"><b>−</b>More interaction complexity</p></div>
          </div>
          <div className="card">
            <span className="mono-s">03 · Context assistance</span>
            <p className="h-s">Deep linking, switcher and AI.</p>
            <div className="card__pros"><p className="card__pro"><b>+</b>Highest potential</p><p className="card__pro"><b>−</b>Highest complexity</p></div>
          </div>
        </div>
        <Figure src="/images/s1-proposals.jpg" caption="Solution exploration · The three proposals compared" alt="The exploration board: each of the three proposals written out with its concept, how it works, positive impact, limitations, who it is best for, and what it leaves missing." />
        <Callout label="The matrix">Which solution gives the right value for the effort?</Callout>
        <Figure src="/images/s1-matrix.jpg" caption="User and product value against implementation effort" alt="Value against effort: the three proposals plotted, with Proposal 1 marked as the one chosen." />
      </Chapter>

      <Chapter num="07" kicker="The strategic decision" tone="dark" title="Proposal 1"
        intro={<p className="big-line accent">Solve the core problem now. Keep the bigger opportunity open.</p>}>
        <div className="grid-4">
          <Item n="User value">Preserves client context</Item>
          <Item n="Product fit">Works with the existing experience</Item>
          <Item n="Delivery">Lower implementation complexity</Item>
          <Item n="Future">Keeps the path open for richer contextual experiences</Item>
        </div>
        <div className="figure-row">
          <div className="stack gap-16">
            <h3 className="h-s">From an empty state</h3>
            <Figure src="/images/s1-empty-state.jpg" caption="CCH iFirm Personal Tax · No client context" alt="CCH iFirm Personal Tax opening with no client selected: the workspace is greyed out behind a panel that says no client selected, and a contact list waiting to be searched." />
          </div>
          <div className="stack gap-16">
            <h3 className="h-s">To a more connected experience</h3>
            <Figure src="/images/s1-connected.jpg" caption="CCH iFirm · The client context carried across" alt="The same product with the work already in front of the user: the returns list populated, each row carrying its status, its filing state and when it was last touched." />
          </div>
        </div>
      </Chapter>

      <Chapter num="08" kicker="The outcome" title="A simpler solution that worked for users, product and delivery">
        <div className="grid-3">
          <Item n="User" title="Client context is preserved">Users move between products without repeatedly re-establishing their context.</Item>
          <Item n="Product" title="A more connected experience">The solution fits the existing product model and design system.</Item>
          <Item n="Business and delivery" title="From an L to an S">The two richer proposals were L-sized builds. Testing the direction with customers before committing is what let us ship an S instead: the evidence supported the simplest of the three, so the team never spent the months the others would have cost, and the core problem was still solved.</Item>
        </div>
        <Callout label="In closing" regular>My contribution was not just designing the interaction. I helped the team identify the right problem, explore the solution space, validate the direction with customers and converge on a solution that was both useful and feasible to build.</Callout>
      </Chapter>

      <Chapter num="09" kicker="The system" tone="soft" title="The solution had to feel like part of the product"
        intro={<p className="lead">The experience needed to work within the existing Global iFirm ecosystem, navigation model and design system.</p>}>
        <div className="grid-4">
          <Item title="Navigation">Preserve context across product transitions.</Item>
          <Item title="Information architecture">Keep the experience clear within the existing structure.</Item>
          <Item title="Design system">Use established components, patterns and behaviours.</Item>
          <Item title="Consistency">Make the experience feel native to the receiving product.</Item>
        </div>
        <div className="callout">
          <p className="callout__label">Accessibility and design system adoption</p>
          <div className="stack gap-20">
            <h3 className="h-m">Auditing the old product was how we argued for the new one</h3>
            <p className="body">Alongside the interaction work I ran accessibility audits of the legacy software. The findings were not filed as a compliance report. They were the argument: most of what the audits surfaced was something the design system had already solved, so the audits stopped being a separate backlog competing for the same engineering time and became the case for adopting the system faster.</p>
            <p className="body">Before AI I ran them by hand, screen by screen. Since, I run them with tools like Figma Make and GitHub Copilot. That changed the pace, not the judgement. The tools surface candidates; deciding which are real barriers, which are noise, and which are worth the team's next sprint is still the design decision.</p>
          </div>
        </div>
        <p className="big-line">Improve the journey without creating a new interaction model.</p>
        <div className="stack gap-24">
          <p className="kicker">The experience</p>
          <h3 className="h-m">Context follows the user</h3>
          <Figure src="/images/s1-experience.jpg" caption="Final proposal · Less repetition, more continuity" alt="The returns list inside CCH iFirm with the firm and the active client carried in the header, and every return listed with its status." />
          <div className="grid-3">
            <Item n="01" title="Select a client">The client becomes the active context.</Item>
            <Item n="02" title="Start an action">The user navigates to another product.</Item>
            <Item n="03" title="Context is preserved">The destination opens within the same client context.</Item>
          </div>
        </div>
      </Chapter>

      <Chapter num="10" kicker="The validation" title="From static screens to a working experience"
        intro={<p className="lead">I translated the proposed experience into a functional coded prototype to test the interaction, behaviour and feasibility of the solution beyond static designs.</p>}>
        <Flow label="Validation flow" steps={['Design', 'Coded prototype', 'Customer testing', 'Evidence', 'Confidence to proceed']} />
        <div className="stack gap-24">
          <p className="kicker">Why code</p>
          <div className="grid-3">
            <Item n="01" title="Test the real interaction.">Identify potential issues before development and refine the solution with a more realistic representation of the product.</Item>
            <Item n="02" title="Explore behaviour.">Validate navigation, context and component behaviour across the experience.</Item>
            <Item n="03" title="Reduce implementation uncertainty.">Move beyond static screens and test the flow as users would actually experience it.</Item>
          </div>
        </div>
        <Callout label="Built with" regular>
          <div className="stack gap-16">
            <div className="tags">{['HTML', 'CSS', 'JavaScript', 'TypeScript', 'GitHub Copilot', 'Vibe coding'].map((t) => <span key={t} className="tag">{t}</span>)}</div>
            <p>I built it by vibe coding with GitHub Copilot: describing the behaviour I wanted in plain language and steering the result, rather than writing every line myself. The judgement stayed mine. Which interaction to test, what the design system allowed, where the edge cases were, and when the prototype was faithful enough to put in front of a customer.</p>
          </div>
        </Callout>
        <Video src="/video/s1-coded-prototype.mp4" poster="/images/story-1-poster.jpg" label="The coded prototype running: selecting a client, moving to another product and arriving with the context intact." caption="The coded prototype · HTML, CSS, JavaScript and TypeScript" />
      </Chapter>

      <Chapter num="11" kicker="Validation" tone="dark" title="Testing the new experience with customers"
        intro={<p className="lead">We tested the experience with 5 customers who were transitioning from the on-premise product.</p>}>
        <Callout label="The task">Open the return for client Acme and check a piece of information in the client record.</Callout>
        <div className="stack gap-20">
          <p className="kicker kicker--muted">What we observed</p>
          <Stats items={[
            { value: '4 / 5', label: 'Completed the task', accent: true },
            { value: '1 / 5', label: 'Needed assistance' },
            { value: '~10 sec', label: 'To reach the requested information' },
          ]} />
          <p className="body">Avoided unnecessary implementation complexity</p>
        </div>
        <div className="quotes">
          <figure className="quote-card"><span className="mono-s">Customer</span><blockquote>“It makes sense.”</blockquote></figure>
          <figure className="quote-card"><span className="mono-s">Customer</span><blockquote>“It's a question of getting used to it.”</blockquote></figure>
        </div>
        <Callout label="The takeaway" regular>
          <div className="stack gap-16">
            <p>The test indicated that customers transitioning from the on-premise experience could successfully understand and navigate the new structure, with most participants completing the task independently.</p>
            <p>The remaining friction was primarily related to familiarity with the new experience rather than the underlying information architecture.</p>
          </div>
        </Callout>
      </Chapter>

      <Chapter num="12" kicker="Implementation and handoff" title="From design system to implementation-ready product">
        <div className="grid-4">
          <Item n="01" title="Design system">Components and variants. Reusable components.</Item>
          <Item n="02" title="Interaction and behaviour">States, interactions and edge cases.</Item>
          <Item n="03" title="Implementation specs">Layout and spacing, visual properties, responsive behaviour.</Item>
          <Item n="04" title="Developer handoff">Ready for development. Design to development.</Item>
        </div>
        <Figure src="/images/s1-ai-changes.jpg" caption="Handoff review · An assistant reading the screen alongside the inspector" alt="A detail of the handoff workflow: an assistant panel open over the returns list proposing changes to the screen, beside the inspector showing width, alignment and padding." />
        <div className="stack gap-24">
          <h3 className="h-m">From design to implementation</h3>
          <Figure src="/images/s1-handoff-board.jpg" caption="Design handoff · The select-a-return flow, ready for dev" alt="The handoff board for the select-a-return flow, marked ready for dev: every screen of the journey laid out in sequence, each state annotated and linked to the step before it." />
        </div>
      </Chapter>

      <Chapter num="13" kicker="How I would measure it" tone="soft" title="Is the context actually travelling?"
        intro={<p className="lead">No product analytics were available to me on this work, so this is the plan rather than the result. Written as it would go to the team.</p>}>
        <MeasurePlan rows={[
          ['Target behaviour', 'Arriving in a second product with the client already loaded, instead of selecting it again'],
          ['Event to instrument', 'Destination product opened from a client context, against opened cold'],
          ['The question', 'Does the share of context-carried entries grow release over release?'],
          ['At thirty days', 'If it does not move, the deep link is not discoverable. That is a placement problem, not a model problem'],
        ]} />
      </Chapter>

      <Chapter num="14" kicker="Future direction" tone="dark" title="From preserving context to understanding context"
        intro={<p className="lead">An AI-powered contextual sidebar. The future opportunity was to make client context dynamic and helpful, rather than something the user has to manually maintain.</p>}>
        <div className="grid-3">
          <Item title="Workflow patterns">How the user typically works across products and tasks.</Item>
          <Item title="Assigned jobs">What work is currently assigned to them and which clients or jobs require attention.</Item>
          <Item title={<span className="accent">Result</span>}>The product understands what the user is working on and helps them stay within that context.</Item>
        </div>
        <div className="figure-row">
          <Figure src="/images/s1-ai-sidebar.jpg" caption="iFirm AI · Contextual assistant, marked future concept" alt="The contextual assistant open beside the returns list: asked which returns need attention first, it answers that eighteen of the hundred and forty two open across the firm need attention today, breaks that into deadline risk, rejected filings and waiting on client, and names the source it read." />
          <Video src="/video/s1-ai-concept.mp4" label="Concept of the AI contextual sidebar reading the user's workflow and assigned jobs." caption="Concept · An AI-powered contextual sidebar" />
        </div>
        <Callout label="End to end" regular>I stayed involved beyond the final screens, connecting design decisions to a working prototype, validating the experience with customers and translating the final solution into implementation-ready specifications.</Callout>
      </Chapter>

      <NextStory to={ROUTES.story2} label="Story 2" title="AI-Assisted Drafting for CCH iFirm" />
    </article>
  );
}
