import StoryHero from '../components/StoryHero';
import { Callout, Chapter, Figure, Item, NextStory, Stats, Video } from '../components/ui';
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

      <Chapter num="01" kicker="The problem" title="Our users wrote their letters outside the product."
        intro={<p className="lead">Accountants send the same letter to many clients: engagement letters, regulatory updates. They wrote it somewhere else, often in ChatGPT, pasted it in and picked the clients one by one. The brief asked me to improve the editor.</p>}>
        <Figure src="/images/s2-blank-page.jpg" caption="Before · A new letter starts from an empty page" alt="A new engagement letter open in CCH iFirm with nothing in it: a blank document, an empty editor, and the words nothing here yet above the choice between inserting a template and drafting with AI." />
        <Callout label="What I saw" variant="accent">The opportunity to design an AI-based product.</Callout>
      </Chapter>

      <Chapter num="02" kicker="What I did" tone="soft" title="I changed the brief from editing to drafting with AI.">
        <div className="grid-4">
          <Item n="01" title="Reframed">AI wasn't in the brief. I proposed it using research we already had: 5 sessions on how customers use AI.</Item>
          <Item n="02" title="Convinced">Stakeholders expanded the scope and added it to the roadmap.</Item>
          <Item n="03" title="Designed">The flow with human review. Nothing is saved or sent without approval.</Item>
          <Item n="04" title="Cut">Drafting and review went into the MVP. Templates waited.</Item>
        </div>
        <Figure src="/images/s2-wireflow.jpg" caption="The wireflow I used to argue the scope change" alt="Lo-fi wireflow in six frames: the blank document, the instruction in the user's own words, generating with a cancel, the draft landing in the document rather than a preview, review and edit, and approval as a named act." />
      </Chapter>

      <Chapter num="03" kicker="The solution" tone="dark" title="Describe the letter. Review it. Send it."
        intro={<p className="lead">You write in plain words what the letter should say. The AI drafts it, adds the client tags and suggests the group of clients. You review, edit and approve before anything goes out.</p>}>
        <Video src="/video/s2-draft-with-ai.mp4" poster="/images/story-2-poster.jpg" label="The instruction step inside the product: the professional picks the document type and the client, then writes in plain sentences what the letter should cover, with a note that nothing is sent to the client." caption="CCH iFirm · Drafting with AI inside the product" />
      </Chapter>

      <Chapter num="04" kicker="The outcome" title="AI moved from a workaround into the product.">
        <Stats items={[
          { value: '3 / 3', label: 'Customers validated the concept', accent: true },
          { value: 'Shipped', label: 'Canadian market' },
        ]} />
        <Figure src="/images/s2-documents.jpg" caption="One reminder written once and sent to twelve clients" alt="The Documents list in CCH iFirm: letters, forms and agreements shared with clients, each with its client, type, date sent and status. One row, an RRSP contribution reminder, went to 12 clients and has been seen by 9 of them." />
        <p className="body">I thought it was a tool for contracts. After release, people used it for anything that needed a signature.</p>
      </Chapter>

      <NextStory to={ROUTES.story3} label="Story 3" title="Designing across connected consumer experiences" />
    </article>
  );
}
