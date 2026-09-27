import StoryHero from '../components/StoryHero';
import { Callout, Chapter, Figure, Item, MeasurePlan, NextStory } from '../components/ui';
import { ROUTES } from '../content/site';
import { useTitle } from '../lib/hooks';

const PRODUCTS = [
  { platform: '01 · Web', name: 'Conexión Segura', desc: 'Security self-service dashboard.', goal: 'Increase service activation and improve service management.', img: '/images/s3-conexion-segura.jpg', alt: 'Conexión Segura: a security dashboard listing threats blocked this month, devices covered, trusted pages and permission requests.' },
  { platform: '02 · Mobile · iOS + Android', name: 'Smart WiFi Selfcare', desc: 'Connectivity diagnosis and self-service.', goal: 'Increase self-service and reduce calls to 1002.', img: '/images/s3-smart-wifi.jpg', alt: 'Smart WiFi Selfcare: the diagnostic running, its results, and the help content that follows from them.', focus: true },
  { platform: '03 · TV · Remote · Voice', name: 'Living Apps', desc: 'TV experiences and partner-built Living Apps.', goal: 'Enable Telefónica partners to create and update Living Apps more independently.', img: '/images/s3-living-apps.jpg', alt: 'Living Apps on television: an IKEA interior design course with its episodes laid out along the bottom of the screen.' },
];

export default function Story3() {
  useTitle('Designing across connected consumer experiences · Laura Benavente');
  return (
    <article>
      <StoryHero
        label="Story 3"
        company="Movistar · Telefónica · Multidevice"
        title="Designing across connected consumer experiences"
        subtitle="Three products. Three interaction models."
        stats={[
          { value: '3', label: 'Products' },
          { value: '−12%', label: 'Call centre calls', accent: true },
          { value: '2019', label: 'Released' },
        ]}
        tags={['End to end', 'Multiplatform', 'Interaction design', 'Design systems', 'Technical constraints']}
        intro="Two years at frog for Telefónica, across web, mobile and television. This case follows Smart WiFi Selfcare all the way down. Some of this work cannot be shown as it was built. The interfaces here are redrawn and the data is altered; the decisions, constraints and outcomes are not."
        poster="/images/story-3-movistar.png"
        posterAlt="The Smart WiFi self-diagnosis flow: the app screens laid out as a grid, from the autodiagnostic entry point through the speed test to the help and interference advice."
      />

      <Chapter num="01" kicker="The work" title="Three products. Three different design challenges.">
        <div className="grid-3">
          {PRODUCTS.map((p) => (
            <div key={p.name} className={`card${p.focus ? ' card--chosen' : ''}`}>
              <span className="mono-s">{p.platform}</span>
              <div className="media" style={{ aspectRatio: '731 / 578' }}><img src={p.img} alt={p.alt} loading="lazy" /></div>
              <h3 className="h-s upper">{p.name}</h3>
              <p className="body" style={{ color: 'inherit' }}>{p.desc}</p>
              <div className="card__pros">
                <span className="mono-s">Business goal</span>
                <p style={{ fontWeight: 600 }}>{p.goal}</p>
              </div>
            </div>
          ))}
        </div>
        <Callout label="The challenge">Design simple experiences while working within very different technical, business and interaction constraints.</Callout>
      </Chapter>

      <Chapter num="02" kicker="Smart WiFi Selfcare" tone="dark" title="How can the experience make a slow technical process understandable enough that users stay with it instead of abandoning it and calling support?">
        <div className="grid-2">
          <Item n="The problem">Movistar's Smart WiFi experience spanned different touchpoints, but users needed to understand and manage a technically complex connectivity problem.</Item>
          <Item n="Business goal">Increase self-service and reduce dependence on customer support.</Item>
        </div>
        <Figure src="/images/s3-screens.jpg" caption="Smart WiFi Selfcare · The touchpoints the feature spans" alt="The Selfcare screens stacked together: the autodiagnostic menu, the speed test with its download and upload figures, the quality verdict, and the illustrated help topics on cable care and device load." className="" />
        <Callout label="Business goal" variant="accent">Decrease calls to 1002 by making users feel in control.</Callout>
      </Chapter>

      <Chapter num="03" kicker="My role" title="Designing inside the constraints, not around them"
        intro={<p className="lead">I was the UX designer on the feature, working within Movistar's existing design system and alongside the engineering team building it.</p>}>
        <div className="grid-5">
          <Item n="01">End-to-end interaction and navigation flow for the Selfcare feature</Item>
          <Item n="02">Edge-case mapping with engineering across iOS and Android</Item>
          <Item n="03">Motion design for the diagnostic sequence, to make waiting legible</Item>
          <Item n="04">A set of original illustrations for the help and FAQ content</Item>
          <Item n="05">Final designs delivered within the Movistar design system</Item>
        </div>
        <div className="callout">
          <p className="callout__label">The work</p>
          <div className="stack gap-20">
            <h3 className="h-m">The flow engineering could break</h3>
            <p className="body">I brought a wireflow to every grooming session. Not a finished design for approval: a working flow that engineering could break, so technical reality shaped it while it was still cheap to change.</p>
          </div>
        </div>
        <Figure src="/images/s3-wireflow.jpg" caption="Wireflow taken into grooming · Smart WiFi Selfcare, Movistar" alt="The Selfcare wireflow: every screen of the diagnostic journey connected by decision points, with the permission refusals, the location-disabled states and the recovery paths drawn in alongside the happy path." />
      </Chapter>

      <Chapter num="04" kicker="The idea" tone="soft" title={<>“There are two kinds of time: clock time and brain time.”</>}>
        <div className="figure-row" style={{ alignItems: 'center' }}>
          <p className="big-line" style={{ fontSize: 'clamp(24px, 2.4vw, 36px)' }}>The test was slow and would stay slow. Accepting that moved the problem from speed to comprehension, and comprehension was solvable.</p>
          <div style={{ maxWidth: 360, justifySelf: 'center' }}>
            <Figure src="/images/s3-brain-time.jpg" caption="The test running" alt="The diagnostic running on the phone: a single expanding pulse with the stage named underneath, so the wait reads as progress rather than absence." />
          </div>
        </div>
      </Chapter>

      <Chapter num="05" kicker="Smart WiFi" title="Final UI">
        <Figure src="/images/s3-final-ui.jpg" caption="Smart WiFi Selfcare · The shipped experience" alt="The shipped Selfcare screens laid out together: the autodiagnostic menu, the speed test running, download and upload results, the quality verdict with its recommendation, and the illustrated help articles on cable care, interference and device load." />
      </Chapter>

      <Chapter num="06" kicker="The research" tone="soft" title="Where the problems were written down">
        <Figure src="/images/s3-workshop.jpg" caption="Workshop wall · Synthesis and early screen options" alt="A workshop wall: hand-written notes about what users do not understand, grouped into themes and pinned beside sketched screen options for the dashboard, the device list and the notifications." />
      </Chapter>

      <Chapter num="07" kicker="How I would measure it" title="Do people stay with the wait?"
        intro={<p className="lead">No product analytics were available to me on this work, so this is the plan rather than the result. Written as it would go to the team.</p>}>
        <MeasurePlan rows={[
          ['Target behaviour', 'Finishing the diagnostic instead of abandoning it partway and calling support'],
          ['Event to instrument', 'Test started, test completed, test abandoned, and the stage it was abandoned at'],
          ['The question', 'Where in the sequence do people leave, and does naming that stage change it?'],
          ['At thirty days', 'Abandonment concentrated at one stage is a copy problem. Spread evenly, it is a duration problem'],
        ]} />
      </Chapter>

      <Chapter num="08" kicker="The outcome" tone="dark" title="People diagnosed their own connection"
        intro={<p className="lead">We couldn't make the test faster. We could make the waiting understandable.</p>}>
        <div className="grid-2" style={{ alignItems: 'end' }}>
          <div className="stack gap-12">
            <span className="h-giant accent">−12%</span>
            <span className="mono-s muted">Call centre calls</span>
          </div>
          <Item n="Released">2019, inside the Movistar Smart WiFi app</Item>
        </div>
        <div className="grid-3">
          <Item n="Experience">Progress · feedback · motion · illustration.</Item>
          <Item n="System">iOS + Android · technical states · permissions · device conditions · navigation · edge cases.</Item>
          <Item n="The build">Wireflows brought into engineering grooming · close front-end collaboration · Movistar Mystica design system · micro-interactions · illustrations.</Item>
        </div>
        <Callout label="Business goal">The design didn't remove the technical constraint. It translated it into an experience people could understand and complete.</Callout>
      </Chapter>

      <NextStory to={ROUTES.story1} label="Story 1" title="CCH iFirm by Wolters Kluwer" />
    </article>
  );
}
