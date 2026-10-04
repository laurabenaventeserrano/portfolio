import CaseHero from '../components/CaseHero';
import { CaseSection, Callout, Figure, Item, CaseNote, NextCase, Stats, Steps } from '../components/ui';
import { ROUTES } from '../content/site';
import { useTitle } from '../lib/hooks';

const PRODUCTS = [
  { platform: 'Web', name: 'Conexión Segura', desc: 'Security self-service dashboard.', goal: 'Increase service activation and improve service management.', img: '/images/s3-conexion-segura.jpg', alt: 'Conexión Segura: a security dashboard listing threats blocked this month, devices covered, trusted pages and permission requests.' },
  { platform: 'Mobile · iOS + Android', name: 'Smart WiFi Selfcare', desc: 'Connectivity diagnosis and self-service.', goal: 'Increase self-service and reduce calls to 1002.', img: '/images/s3-smart-wifi.jpg', alt: 'Smart WiFi Selfcare: the diagnostic running, its results, and the help content that follows from them.' },
  { platform: 'TV · Remote · Voice', name: 'Living Apps', desc: 'TV experiences and partner-built Living Apps.', goal: 'Enable Telefónica partners to create and update Living Apps more independently.', img: '/images/s3-living-apps.jpg', alt: 'Living Apps on television: an IKEA interior design course with its episodes laid out along the bottom of the screen.' },
];

export default function Case4() {
  useTitle('Multi-device Product Design for Telefónica · Laura Benavente');
  return (
    <article>
      <CaseHero
        num="04"
        title="Multi-device Product Design for Telefónica"
        hook="Three products. Three interaction models."
        company="frog / Telefónica"
        role="Product Designer"
        status="Shipped"
        tags={['Multi-device', 'Interaction', 'Mobile', 'TV', 'Voice']}
      />

      <CaseSection num="01" label="Context" title="Two years at frog for Telefónica, across web, mobile and television.">
        {/* Una sola figura: el abanico de plataformas */}
        <div className="platforms">
          {PRODUCTS.map((p) => (
            <figure key={p.name} className="platform">
              <div className="media" style={{ aspectRatio: '731 / 578' }}><img src={p.img} alt={p.alt} loading="lazy" /></div>
              <figcaption>
                <span className="mono-s muted">{p.platform}</span>
                <span className="platform__name">{p.name}</span>
                <span className="body">{p.desc} {p.goal}</span>
              </figcaption>
            </figure>
          ))}
        </div>
        <Callout label="The challenge">Design simple experiences while working within very different technical, business and interaction constraints.</Callout>
      </CaseSection>

      <CaseSection num="02" label="The problem" tone="dark" title="How can the experience make a slow technical process understandable enough that users stay with it instead of abandoning it and calling support?">
        <p className="lead">Smart WiFi Selfcare. Users needed to understand and manage a technically complex connectivity problem. Business goal: decrease calls to 1002 by making users feel in control.</p>
      </CaseSection>

      <CaseSection num="03" label="The decision" title="“There are two kinds of time: clock time and brain time.”">
        <p className="lead">The test was slow and would stay slow. Accepting that moved the problem from speed to comprehension, and comprehension was solvable.</p>
      </CaseSection>

      <CaseSection num="04" label="The experience" title="Progress, feedback, motion and illustration.">
        <Figure src="/images/story-3-movistar.png" caption="Smart WiFi Selfcare · The shipped experience, iOS and Android" alt="The Smart WiFi self-diagnosis flow: the app screens laid out as a grid, from the autodiagnostic entry point through the speed test to the help and interference advice." />
      </CaseSection>

      <CaseSection num="05" label="How I work" title="The flow engineering could break.">
        <p className="body">I brought a wireflow to every grooming session. Not a finished design for approval: a working flow that engineering could break, so technical reality shaped it while it was still cheap to change.</p>
        <Steps label="How I worked on this case" items={[
          ['Research', 'Workshop synthesis of what users did not understand.'],
          ['Wireflow', 'Every screen, decision point, error state and recovery path.'],
          ['Engineering grooming', 'Edge cases mapped with engineering across iOS and Android.'],
          ['Motion', 'The diagnostic sequence, to make waiting legible.'],
          ['Ship', 'Final designs delivered within the Movistar design system.'],
        ]} />
      </CaseSection>

      <CaseSection num="06" label="Shipped · Outcome" title="People diagnosed their own connection.">
        <p className="lead">We couldn't make the test faster. We could make the waiting understandable.</p>
        <Stats items={[
          { value: '−12%', label: 'Call centre calls', accent: true },
          { value: '2019', label: 'Released in the Movistar Smart WiFi app' },
        ]} />
      </CaseSection>

      <CaseSection num="07" label="My contribution">
        <div className="grid-3">
          <Item n="Experience">End-to-end interaction and navigation flow. Motion design for the diagnostic sequence. Original illustrations for the help and FAQ content.</Item>
          <Item n="System">iOS + Android · technical states · permissions · device conditions · navigation · edge cases.</Item>
          <Item n="The build">Wireflows brought into engineering grooming · close front-end collaboration · Movistar Mystica design system.</Item>
        </div>
      </CaseSection>

      <CaseNote>The interfaces are redrawn and the data is altered. The decisions, constraints and outcomes are real.</CaseNote>

      <NextCase to={ROUTES.case1} label="Case 01" title="CCH iFirm Cloud Migration" />
    </article>
  );
}
