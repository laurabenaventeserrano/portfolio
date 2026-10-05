import CaseHero from '../components/CaseHero';
import { CaseSection, Callout, Figure, Flow, CaseNote, NextCase, Stats, Steps } from '../components/ui';
import { ROUTES } from '../content/site';

/* Textos de la presentación de Laura (Story 3 · Adsolut Accounting). */
export default function Case3() {
  return (
    <article>
      <CaseHero
        num="03"
        title="AI-Powered Client Data Migration"
        hook="An AI powered flow to migrate client data from competitor software."
        company="Adsolut Accounting"
        role="Product Designer · Design + build"
        status="Shipped"
        tags={['AI product design', 'Design + build', 'Prototyping']}
      />

      <CaseSection num="01" label="Context" title="Client data from competitor software, Exact and Yuki, migrated into Adsolut Accounting." />

      <CaseSection num="02" label="The problem" tone="dark" title="Migrating a client's data used to take a full day.">
        <p className="lead">Someone had to upload the files, categorize every entry by hand, then review it all before it was usable. Manual, repetitive, slow.</p>
      </CaseSection>

      <CaseSection num="03" label="The AI model" title="The AI reads and categorizes the incoming data on its own, and attaches a confidence score to each piece.">
        <p className="lead">Anything below the threshold gets flagged for the person to check.</p>
        <Callout label="The decision">AI takes over categorization and flags its own uncertainty, so the reviewer's job becomes checking, not doing.</Callout>
      </CaseSection>

      <CaseSection num="04" label="Design" title="One place to see every migration.">
        <Figure src="/images/s4-dashboard.jpg" caption="Data Migration dashboard · Every migration from Exact and Yuki, with its status" alt="The Data Migration dashboard in Adsolut: six client migrations from Exact and Yuki, each with client code, status, assignee and comment, and counts of connected, pending and failed migrations above the list." />
      </CaseSection>

      <CaseSection num="05" label="Build" title="Requirements and interaction spec first. Then the IDE built it.">
        <p className="lead">I wrote the requirements and the skills the IDE used to build the interface and interaction logic, then shaped the look and feel from there.</p>
      </CaseSection>

      <CaseSection num="06" label="How I work" title="The AI design process.">
        <Steps label="How I worked on this case" items={[
          ['Define the problem', 'Mapped out the current manual migration flow, day long, error prone, no visibility into progress. Identified where the client was losing the most time: categorization and review.'],
          ['Explore solutions', 'Framed how AI could take over categorization and flag its own uncertainty.'],
          ['Write requirements and skills for IDE', 'Translated the interaction logic into requirements and IDE skills so the model could be built with the intended behavior.'],
          ['Review and test the prototype', 'Went through the built prototype, checked the interaction against the spec, and adjusted flow and structure.'],
          ['Visual design and handoff', 'Rebuilt the validated prototype in Figma using our design system components, then prepared documentation for developers.'],
        ]} />
        <Flow label="From exploration to ship" steps={['AI exploration', 'Prototype', 'AI build', 'Testing', 'Ship']} />
      </CaseSection>

      <CaseSection num="07" label="Validation · Ship" title="Prototype tested for flow and usability, then rebuilt with the real design system.">
        <p className="body">Once validated, I moved into Figma to rebuild it with our real design system components and prepared the handoff for developers.</p>
        <Figure src="/images/s4-migration-complete.jpg" caption="Migration complete · Data transferred from Exact Online, audit documentation ready" alt="The Migration Complete screen in Adsolut Accounting: a success message confirming all data for a client was transferred from Exact Online, with its migration ID, completion time, and panels for the transfer summary and validation results." />
      </CaseSection>

      <CaseSection num="08" label="Outcome" title="A day of manual review, down to minutes.">
        <Stats items={[
          { value: '~80%', label: 'Model accuracy' },
          { value: '1 day → minutes', label: 'Review time' },
        ]} />
      </CaseSection>

      <CaseSection num="09" label="My contribution">
        <p className="lead">Product designer on the team. Problem definition, AI interaction model, requirements and IDE skills, prototype review, visual design in the design system and developer documentation.</p>
      </CaseSection>

      <CaseNote>Screens are from the prototype and the client data is fictional.</CaseNote>

      <NextCase to={ROUTES.case4} label="Case 04" title="AI Contextual Assistant for CCH iFirm" />
    </article>
  );
}
