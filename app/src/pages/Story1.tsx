import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { Nav } from '../components/Nav'
import { SectionHead } from '../components/SectionHead'
import { Columns } from '../components/Columns'
import { StatRow } from '../components/StatRow'
import { HeroNote } from '../components/HeroNote'
import { IndexedList } from '../components/IndexedList'
import { PullQuote } from '../components/PullQuote'
import { Figure } from '../components/Figure'
import { FactList } from '../components/FactList'
import { LevelGrid } from '../components/LevelGrid'
import { ProcessChain } from '../components/ProcessChain'
import { LearningsList } from '../components/LearningsList'
import { QuestionGrid } from '../components/QuestionGrid'
import { StepList } from '../components/StepList'
import { RegionGrid } from '../components/RegionGrid'
import { TagList } from '../components/TagList'
import { Pivot } from '../components/Pivot'
import { usePageScope } from '../hooks/usePageScope'
import { useJsFlag } from '../hooks/useJsFlag'
import { useReveal } from '../hooks/useReveal'
import { useDrift } from '../hooks/useDrift'
import { useDocumentTitle } from '../hooks/useDocumentTitle'
import '../styles/case-study-common.css'
import '../styles/story1.css'

import ukOnPremise from '../assets/images/CCH ifirm UK_On premise _01.png'
import ukCloud from '../assets/images/CCH ifirm UK_02.png'
import canadaTaxPrep from '../assets/images/CCH ifirm Canada Tax Prep_03.png'
import canadaCloud from '../assets/images/CCH ifirm Canada_05.png'
import apacTax from '../assets/images/CCH ifirm APAC Tax Return_04.png'
import apacCloud from '../assets/images/CCH ifirm APAC_04.png'
import fromOnPremise from '../assets/images/from on premise.png'
import toTheCloud from '../assets/images/To the could.png'
import clientContextImg from '../assets/images/IMAGE_05.png'
import dashboardImg from '../assets/images/IMAGE_10.png'
import navBeforeImg from '../assets/images/IMAGE_08.png'
import navAfterImg from '../assets/images/IMAGE_09.png'
import contextLayerImg from '../assets/images/IMAGE_07.png'
import componentLibraryImg from '../assets/images/IMAGE_15.png'
import researchBoardImg from '../assets/images/IMAGE_14.png'
import handoffBoardImg from '../assets/images/13.Design-handoff.png'
import dashboardRegionImg from '../assets/images/06-01.png'
import dashboardGlobalImg from '../assets/images/06-02.png'
import codeGamesVideo from '../assets/video/code-games.mp4'

export function Story1() {
  usePageScope('page-case-study page-story1')
  useDocumentTitle('The Wolters Kluwer Story · Laura Benavente')
  useJsFlag()
  const rootRef = useRef<HTMLDivElement>(null)
  useReveal(rootRef, { rootMargin: '0px 0px -10% 0px', continuousSweep: true, sweepThreshold: 0.78, failSafeMs: 4000 })
  useDrift(rootRef)

  return (
    <div ref={rootRef}>
      <a className="skip-link" href="#main">Skip to content</a>

      <Nav variant="case-study" />

      <main id="main">
        <header className="hero" id="top">
          <div className="w">
            <div className="hero-top">
              <span>Story 1</span>
              <span>Wolters Kluwer</span>
            </div>
            <h1 className="rv long">
              From fragmented<br />products to a<br /><em>connected ecosystem</em>
            </h1>
            <p className="hero-sub rv" data-d="1">The Wolters Kluwer Story</p>
            <StatRow
              reveal
              dataD="2"
              stats={[
                { value: '6', label: 'Products unified' },
                { value: '5', label: 'Markets' },
                { value: '1', label: 'Shared design system' },
              ]}
            />
            <div className="hero-meta rv" data-d="3">
              <span>Senior Product Designer</span>
              <span>B2B SaaS</span>
              <span>Accounting, tax and finance</span>
              <span>UK · Netherlands · Belgium · Italy · Scandinavia</span>
            </div>
            <HeroNote variant="hero-note" reveal dataD="4">
              Several years of work across accounting, tax and practice management products, while a fragmented portfolio was
              moving towards a more connected cloud environment.
            </HeroNote>
          </div>
        </header>

        <section className="sec sec--open" id="not-one-project">
          <div className="w">
            <SectionHead reveal n="01" k="Scope" lines={['This was not', 'one project']}
              lead="It was work across several products, several markets and several teams, over a number of years." />
            <Columns cols="1:1" style={{ marginTop: 'clamp(46px,5vw,80px)' }}>
              <div className="rv">
                <p>There is no single launch date here, and no single screen that contains the work. Different products were at
                  different stages of maturity, owned by different teams, sold into different countries.</p>
                <p>What connected all of it was one question that kept coming back in different disguises.</p>
              </div>
              <div className="rv" data-d="1">
                <PullQuote>How do separate products start behaving like one ecosystem?</PullQuote>
              </div>
            </Columns>
          </div>
        </section>

        <section className="sec tint" id="starting-point">
          <div className="w">
            <SectionHead reveal n="02" k="The starting point" lines={['The products worked.', 'The ecosystem did not.']}
              lead="Wolters Kluwer builds the software that accounting, tax and financial professionals use to do their work. On screen it looks like forms and tables. The complexity sits underneath." />
            <Columns cols="5:7" style={{ marginTop: 'clamp(50px,6vw,90px)' }}>
              <div className="rv">
                <p className="k">What the software covers</p>
                <IndexedList
                  items={[
                    { i: '01', text: 'Accounting and client accounting' },
                    { i: '02', text: 'Tax' },
                    { i: '03', text: 'Client management and contacts' },
                    { i: '04', text: 'Time tracking, jobs and billing' },
                    { i: '05', text: 'Documents' },
                    { i: '06', text: 'Workflows and reporting' },
                  ]}
                />
              </div>
              <div className="rv" data-d="1">
                <p className="k">How it got this way</p>
                <p>The portfolio had grown over time. Different teams. Different products. Different markets. Acquisitions that
                  arrived carrying their own conventions. Legacy foundations underneath. Regulation that changes by country.</p>
                <p>Each product made sense on its own terms. Together, they did not always behave like parts of the same
                  environment.</p>
                <p className="k" style={{ marginTop: 34 }}>Who uses it</p>
                <p>Accountants, tax advisers and finance professionals.</p>
              </div>
            </Columns>

            <div className="rv" style={{ marginTop: 'clamp(54px,6vw,96px)' }}>
              <p className="k">The same portfolio, market by market</p>
              <RegionGrid
                regions={[
                  {
                    market: 'United Kingdom',
                    shots: [
                      { src: ukOnPremise, width: 655, height: 369, caption: 'On premise · Document centre',
                        alt: 'The on-premise product on Windows: a dense ribbon of icons across the top, a client record open on the Document Centre tab, and a list of bills, correspondence and portal messages beside a preview of the invoice.' },
                      { src: ukCloud, width: 761, height: 369, caption: 'Cloud · Accounts Production',
                        alt: 'Accounts Production in the cloud: the client overview with business details along the top, a validations panel sorting fifteen items into errors, warnings and information, and the financial overview below.' },
                    ],
                  },
                  {
                    market: 'Canada',
                    shots: [
                      { src: canadaTaxPrep, width: 816, height: 380, caption: 'Tax Prep · Corporate returns',
                        alt: 'Taxprep Pro: a table of corporate returns with client code, business number, return status, filing eligibility and tax year dates, above a paging control.' },
                      { src: canadaCloud, width: 824, height: 399, caption: 'Cloud · Dashboard',
                        alt: 'The firm dashboard: a left navigation listing firm applications and the Taxprep products, beside panels for team efficiency, work in progress by partner, resource allocation and annual revenue.' },
                    ],
                  },
                  {
                    market: 'Asia Pacific',
                    shots: [
                      { src: apacTax, width: 655, height: 372, caption: 'Tax · Individual return',
                        alt: 'An individual tax return in preparation: a section list down the left from front cover to tax summary, and a form of personal details, residency dates and addresses on the right.' },
                      { src: apacCloud, width: 778, height: 375, caption: 'Cloud · Contacts',
                        alt: 'Contact details in the cloud product: a dark left navigation, a row of actions across the top, and the client summary split into client details, communication details and address.' },
                    ],
                  },
                ]}
              />
              <p style={{ marginTop: 'clamp(26px,2.8vw,40px)', fontSize: 15.5 }}>
                Each one internally reasonable. Each one with its own navigation model, its own vocabulary, its own idea of
                where a client lives. Nothing shared across the gaps.
              </p>
            </div>

            <div className="rv" style={{ marginTop: 'clamp(44px,5vw,72px)' }}>
              <p className="k">Markets</p>
              <TagList tags={['United Kingdom', 'Netherlands', 'Belgium', 'Italy', 'Scandinavia', 'Europe', 'Global']} />
            </div>
          </div>
        </section>

        <section className="sec sec--open" id="cloud">
          <div className="w">
            <SectionHead reveal n="03" k="Cloud migration" lines={['Then the cloud', 'changed the problem']}
              lead="Moving a product to the cloud is not a re-skin. It changes what the product is allowed to know about the person using it." />
            <Columns cols="5:7" style={{ marginTop: 'clamp(46px,5vw,80px)' }}>
              <div className="rv">
                <p>On-premise software had been a set of applications a firm installed and opened one at a time. Nobody
                  expected them to know about each other, because they could not.</p>
                <p>In the cloud they became parts of one environment, and people started expecting them to behave that way.
                  That expectation is the whole design problem.</p>
              </div>
              <div className="rv" data-d="1">
                <p className="k">What that reframing touched</p>
                <IndexedList
                  items={[
                    { i: '01', text: 'Navigation and information architecture' },
                    { i: '02', text: 'Identity and authentication' },
                    { i: '03', text: 'Client context across applications' },
                    { i: '04', text: 'Product discovery and entry points' },
                    { i: '05', text: 'Cross-product relationships and journeys' },
                  ]}
                />
              </div>
            </Columns>

            <Columns cols="1:1" reveal style={{ marginTop: 'clamp(50px,6vw,90px)' }}>
              <Figure src={fromOnPremise} width={655} height={369} tag="From" caption="Installed software, opened on its own"
                alt="The on-premise product on Windows: a dense ribbon of icons across the top, a client record open on the Document Centre tab, and a list of bills, correspondence and portal messages beside a preview of the invoice." />
              <Figure src={toTheCloud} width={742} height={360} tag="To" caption="One environment, several products"
                alt="The services panel in the cloud product: each product a firm subscribes to shown as a card with a short description and a launch action, marked as subscribed." />
            </Columns>
          </div>
        </section>

        <section className="sec tint" id="system-map">
          <div className="w">
            <SectionHead reveal n="04" k="Understanding the system"
              lines={['Before designing, I had to', 'understand what was', 'actually connected']}
              lead="In an ecosystem the interface is the last thing you should decide. Everything above it changes what it needs to be." />
            <Figure
              reveal mask drift
              style={{ marginTop: 'clamp(44px,5vw,76px)' }}
              src={clientContextImg} width={3195} height={1051} caption="The client context logic"
              alt="The journey mapped end to end: login, select a client, pick a product, work in accounts, exit to another product, work in tax, then remove the client and start again. A band across the middle marks how far the client context survives before it has to be established again."
            />
          </div>
        </section>

        <section className="sec" id="role">
          <div className="w">
            <SectionHead reveal n="05" k="Scope and role" lines={['My work moved', 'between three levels']} />
            <LevelGrid
              reveal
              levels={[
                { h3: 'System', p: 'How products connect. Architecture, navigation, identity, context, the relationships the interface has to express.' },
                { h3: 'Product', p: 'How workflows work. Sequence, grouping, what belongs on a screen and what belongs somewhere else.' },
                { h3: 'Detail', p: 'How people interact with the interface. States, naming, feedback, the small decisions that make dense software usable.' },
              ]}
            />
            <Columns cols="7:5" style={{ marginTop: 'clamp(46px,5vw,80px)' }}>
              <div className="rv">
                <FactList
                  facts={[
                    { k: 'Role', v: 'Senior Product Designer' },
                    { k: 'Products', v: 'Accounting, tax, client management, billing, documents' },
                    { k: 'Markets', v: 'UK, Netherlands, Belgium, Italy, Scandinavia' },
                    { k: 'Worked with', v: 'Product managers, engineers, researchers, other designers, regional stakeholders' },
                    { k: 'Contributed to', v: 'The company design system' },
                  ]}
                />
              </div>
              <div className="rv" data-d="1">
                <p>I designed end to end: understanding the workflow, mapping the information architecture, designing the
                  interaction, testing it, and staying with it through build.</p>
                <p>Some of the work was new product design. A lot of it was improving software that already existed and
                  already had users, which is a different discipline: you inherit decisions, constraints and habits, and you
                  have to decide which of them are worth changing.</p>
              </div>
            </Columns>
          </div>
        </section>

        <section className="sec sec--open" id="judgement">
          <div className="w">
            <SectionHead reveal n="06" k="Finding the real problems" lines={['Not every difference', 'was a problem']} />
            <div style={{ marginTop: 'clamp(44px,5vw,80px)' }}>
              <p className="principle rv">Global consistency, <i>regional flexibility.</i></p>
              <p className="lead rv" data-d="1">Not every country needs an identical interface. They need a coherent system
                that can adapt without fragmenting.</p>
            </div>
            <Columns cols="1:1" reveal style={{ marginTop: 'clamp(50px,6vw,90px)' }}>
              <Figure src={dashboardRegionImg} width={1677} height={812} tag="Region" caption="The dashboard in one market"
                alt="The dashboard as it existed in one market: a left navigation listing firm applications and the Taxprep products, beside panels for team efficiency, work in progress by partner, resource allocation and annual revenue." />
              <Figure src={dashboardGlobalImg} width={1280} height={810} tag="Global" caption="The dashboard as one system"
                alt="The unified dashboard: one navigation down the left, and a grid of panels showing last returns, resource allocation, work in progress by partner, documents and annual revenue." />
            </Columns>
          </div>
        </section>

        <section className="sec tint sec--tight" id="problems">
          <div className="w">
            <SectionHead reveal n="07" k="The four design problems" lines={['Four questions,', 'asked in order']}
              lead="Everything that follows is an answer to one of these. They are not four projects. They are four faces of the same problem." />
            <QuestionGrid
              questions={[
                { qn: '01', text: 'How do separate products become one environment?' },
                { qn: '02', text: 'How does context survive across products?' },
                { qn: '03', text: 'How do you make dense professional software easier to work with without oversimplifying it?' },
                { qn: '04', text: 'How do individual solutions become reusable patterns?' },
              ]}
            />
          </div>
        </section>

        <section className="sec sec--open" id="one-environment">
          <div className="w">
            <SectionHead reveal n="08" k="Design problem 01" lines={['How do separate products', 'become one environment?']}
              lead={<>Contacts, Jobs &amp; Billing, Tax, Documents, Time &amp; Billing, Client Accounting, Reporting. Each had its
                own navigation model, and each model was internally reasonable.</>} />
            <Columns cols="1:1" style={{ marginTop: 'clamp(46px,5vw,80px)' }}>
              <div className="rv">
                <p>Put together, they were not. A user crossing from one to another had to relearn where things live, what the
                  hierarchy means and how to get back.</p>
                <p>I worked on the level above the screens: information architecture, global navigation, contextual
                  navigation, entry points into each product, and the relationships between applications that the interface
                  had to express.</p>
              </div>
              <div className="rv" data-d="1">
                <PullQuote style={{ marginTop: 'clamp(28px,3vw,44px)' }}>System-level problems, not styling problems.</PullQuote>
              </div>
            </Columns>

            <Columns cols="5:7" style={{ marginTop: 'clamp(54px,6vw,96px)' }}>
              <div className="rv">
                <p className="k">Entry point</p>
                <p>A dashboard in a growing ecosystem has one honest job: get the person to the right place, with the right
                  context, quickly.</p>
                <p>The temptation is to make it the product, to fill it with everything because everything is available. That
                  produces a screen people scan once and then bypass. I designed it as a way in, not as the work itself.</p>
              </div>
              <div className="rv" data-d="1">
                <p className="k">What it had to do</p>
                <IndexedList
                  items={[
                    { i: '01', text: 'Make the product ecosystem understandable at a glance' },
                    { i: '02', text: 'Support discovery of products a firm may not know it has' },
                    { i: '03', text: 'Establish hierarchy between frequent and occasional work' },
                    { i: '04', text: 'Carry cross-product relationships, not just links' },
                  ]}
                />
              </div>
            </Columns>

            <Figure
              reveal mask drift
              style={{ marginTop: 'clamp(50px,6vw,90px)' }}
              src={dashboardImg} width={1280} height={810} caption="Dashboard · Wolters Kluwer"
              alt="The CCH iFirm dashboard: the product navigation down the left, and a grid of panels showing last returns, resource allocation, work in progress by partner, documents and annual revenue."
            />

            <Columns cols="1:1" style={{ marginTop: 'clamp(54px,6vw,96px)' }}>
              <div className="rv">
                <p className="k">Identity and authentication</p>
                <p>I worked on moving towards a unified authentication and single sign-on experience across Europe. On a
                  slide this is a technical project. In use, it is the first thing every person meets, every day, before any
                  of the design work further in gets a chance.</p>
              </div>
              <div className="rv" data-d="1">
                <p>It had to be consistent across products that had signed people in differently for years, hold up against
                  regional considerations, and scale as more products joined. Getting it wrong would have been felt
                  everywhere at once.</p>
                <p>This is what I mean by designing at ecosystem level: the decision is made once and lands in every product.</p>
              </div>
            </Columns>
          </div>
        </section>

        <section className="sec tint" id="context">
          <div className="w">
            <SectionHead reveal n="09" k="Design problem 02" lines={['Context is', 'a design object']} />
            <Columns cols="1:1" style={{ marginTop: 'clamp(40px,5vw,70px)' }}>
              <div className="rv">
                <p>I mapped the existing workflow to see exactly where context was lost and what it cost each time, then
                  explored how a persistent client context could travel with the user across applications.</p>
              </div>
              <div className="rv" data-d="1">
                <p>Treating context as an object the system carries, rather than a selection each screen makes, changes the
                  interaction design of every product that touches it. That is why it was worth the mapping before the
                  designing.</p>
              </div>
            </Columns>

            <Columns cols="1:1" style={{ marginTop: 'clamp(50px,6vw,90px)' }}>
              <Figure reveal src={navBeforeImg} width={1280} height={810} tag="Before" caption="3 levels of navigation"
                alt="Firm Settings with the product panel open on the right, listing the practice tools and the products a firm has access to, with two markers set against the two separate ways into the same ecosystem." />
              <Figure reveal mask dataD="1" src={navAfterImg} width={1280} height={810} tag="Proposed" caption="Unified navigation experience"
                alt="A single left navigation running from Dashboard through contacts, jobs and billing to the compliance products and settings, with two markers set against the levels of the hierarchy." />
            </Columns>

            <Figure
              reveal mask drift
              style={{ marginTop: 'clamp(44px,5vw,76px)' }}
              src={contextLayerImg} width={1140} height={536} caption="Client context carried across the ecosystem"
              alt="The proposed contextual layer: a client switcher pinned beside the tax return, with deeplinks that open documents, relationships and the client record in a new tab, annotated with what it reduces and what it still needs."
            />
          </div>
        </section>

        <section className="sec tint" id="patterns">
          <div className="w">
            <SectionHead reveal n="10" k="Design problem 04"
              lines={['When the same problem', 'appeared twice, it probably', 'did not belong to one screen']} />
            <Columns cols="1:1" style={{ marginTop: 'clamp(46px,5vw,80px)' }}>
              <div className="rv">
                <p>I applied the company design system across products and used it to pull inconsistent experiences back
                  towards a shared language, including acquired products that had arrived with conventions of their own.</p>
                <p>And I contributed to it regularly. Working across products meant I kept meeting the same problem in
                  different places, which is exactly the signal that something belongs in the system rather than in a
                  screen.</p>
              </div>
              <div className="rv" data-d="1">
                <IndexedList
                  items={[
                    { i: '01', text: 'Identified patterns that repeated across products' },
                    { i: '02', text: 'Reduced duplication of solved problems' },
                    { i: '03', text: 'Brought acquired products closer to the system' },
                    { i: '04', text: 'Contributed components and patterns back' },
                  ]}
                />
                <p style={{ marginTop: 26 }}>System work also reduces build effort. A pattern designed once, agreed once and
                  implemented once stops three teams solving it three ways.</p>
              </div>
            </Columns>

            <Figure
              reveal drift
              style={{ marginTop: 'clamp(44px,5vw,76px)' }}
              src={componentLibraryImg} width={1169} height={431} imgStyle={{ maxWidth: 1169 }}
              caption="Design system work"
              alt="The component library open beside a card component: the layers and assets panel listing the shared components, the card selected with its dimensions, and two of its states, one plain and one selected with an overflow menu open."
            />

            <Columns cols="1:1" style={{ marginTop: 'clamp(54px,6vw,96px)' }}>
              <div className="rv">
                <p className="k">Accessibility was part of the same quality problem</p>
                <p>I reviewed products for accessibility and usability together, because in dense professional software they
                  find the same faults. Weak hierarchy, low contrast, meaning carried by colour alone and unclear
                  interactive states fail an accessibility audit and also slow down everyone else.</p>
              </div>
              <div className="rv" data-d="1">
                <p>Treating it as a quality lens rather than a compliance checkbox meant the fixes improved the product for
                  all users, not only the ones the standard was written for.</p>
              </div>
            </Columns>
          </div>
        </section>

        <section className="sec sec--open" id="research">
          <div className="w">
            <SectionHead reveal n="11" k="Research and validation" lines={['Research changed', 'the direction']}
              lead="I led and contributed to foundational research to understand what users actually needed, and tested concepts with real users and customers before committing to them." />
            <ProcessChain
              style={{ marginTop: 'clamp(44px,5vw,76px)' }}
              items={[
                { ck: 'Research', p: 'Understanding current workflows, pain points, expectations and future needs, including where regional practice genuinely differs.' },
                { ck: 'Insight', p: 'Which differences were accidental and which were real. Where standardisation would help and where it would break someone’s job.' },
                { ck: 'Decision', p: 'What to unify, what to leave regional, what to sequence first, and what not to build at all.' },
                { ck: 'Validation', p: 'Prototypes tested with the people who do the work, then designed again with what came back.' },
              ]}
            />
            <Columns cols="1:1" style={{ marginTop: 'clamp(46px,5vw,80px)' }}>
              <div className="rv">
                <PullQuote>Research was most useful when it proved me wrong.</PullQuote>
              </div>
              <div className="rv" data-d="1">
                <p>Testing a concept with people who do the work daily is the fastest way to find the assumption you did not
                  know you had made, and it is far cheaper to find it in a prototype than in a release.</p>
                <p>Where testing confirmed a direction, it did something else useful: it gave the team the evidence to commit
                  properly instead of hedging.</p>
              </div>
            </Columns>
            <Figure
              reveal mask drift
              style={{ marginTop: 'clamp(50px,6vw,90px)' }}
              src={researchBoardImg} width={2126} height={1086} caption="Synthesis to decision"
              alt="The research board: two participant profiles with their personality scales, needs, motivations and pain points, a user journey map for each one running from planning the week through shopping and cooking to eating, the opportunities drawn out of every stage, and a context tree pulling the whole set into one structure."
            />
          </div>
        </section>

        <section className="sec sec--open" id="handoff">
          <div className="w">
            <SectionHead reveal n="12" k="Handoff"
              lines={['My handoff was not a file.', 'It was a shared', 'understanding.']} />
            <StepList
              steps={[
                { hn: '01', h3: 'Prepare the flow', p: 'I made sure the full journey was clear, not only individual screens. A screen that makes sense alone can still be impossible to arrive at.' },
                { hn: '02', h3: 'Define behaviour', p: 'States, interactions, empty states, errors and edge cases. In professional software the edge cases are not rare, they are Tuesday.' },
                { hn: '03', h3: 'Connect the system', p: 'Components, patterns and references to the design system, so what gets built is the shared thing and not a local copy of it.' },
                { hn: '04', h3: 'Work with engineering', p: 'Questions, technical constraints and alternatives. The constraint is usually real, and the alternative is usually findable.' },
                { hn: '05', h3: 'Review the build', p: 'Checking the implementation and resolving what changed on the way, before it reached the people who use it.' },
              ]}
            />
            <Figure
              reveal mask drift
              style={{ marginTop: 'clamp(50px,6vw,90px)' }}
              src={handoffBoardImg} width={1746} height={660} caption="Handoff · the flow, not the screens"
              alt="Handoff board titled select a contact: the dashboard, the contacts list and the job details screen laid out in sequence, with connectors running from the login entry point through each screen, so the whole journey can be read at once rather than screen by screen."
            />
          </div>
        </section>

        <section className="sec tint" id="build">
          <div className="w">
            <SectionHead reveal n="13" k="Engineering collaboration" lines={['The handoff often', 'changed the design too']} />
            <Columns cols="1:1" style={{ marginTop: 'clamp(40px,5vw,70px)' }}>
              <div className="rv">
                <p>Handoff was not the moment when I disappeared. Engineering questions often exposed assumptions,
                  constraints or missing states that had not appeared during the design phase.</p>
              </div>
              <div className="rv" data-d="1">
                <p>Sometimes that meant changing the implementation. Sometimes it meant changing the design.</p>
                <PullQuote style={{ marginTop: 'clamp(28px,3vw,44px)' }}>I stayed close to the build.</PullQuote>
              </div>
            </Columns>
            <LevelGrid
              reveal
              style={{ marginTop: 'clamp(44px,5vw,76px)' }}
              levels={[
                { h3: 'Before build', p: 'Clarify the flow, so the first question is not what happens here.' },
                { h3: 'During build', p: 'Answer questions and resolve ambiguity while it is still cheap to resolve.' },
                { h3: 'After build', p: 'Review the implementation against the intent, and agree what actually changed.' },
              ]}
            />
          </div>
        </section>

        <section className="sec" id="ai">
          <div className="w">
            <SectionHead reveal n="14" k="Emerging technology" lines={['AI as a tool,', 'not a theme']} />
            <Columns cols="1:1" style={{ marginTop: 'clamp(40px,5vw,70px)' }}>
              <div className="rv">
                <p className="k">In the design process</p>
                <p>I use AI to move faster through the parts of the work that are volume rather than judgement: exploring
                  more concepts before committing, analysing information, and cutting repetitive production work. It buys
                  time for the thinking, it does not do the thinking.</p>
              </div>
              <div className="rv" data-d="1">
                <p className="k">In the product</p>
                <p>I also explored where AI could genuinely improve customer workflows in professional software, which is a
                  narrower set of places than the current enthusiasm suggests.</p>
              </div>
            </Columns>

            <Columns cols="5:7" reveal style={{ marginTop: 'clamp(46px,5vw,80px)', paddingTop: 'clamp(30px,3.4vw,48px)', borderTop: '1px solid var(--line)' }}>
              <div>
                <p className="k">Also</p>
                <h3 style={{ margin: 0 }}>Code Games</h3>
              </div>
              <div>
                <p style={{ margin: 0 }}>I took part in Code Games, an internal initiative where people from different teams
                  build something together outside their usual work. I joined to contribute beyond my own projects, to learn
                  directly from engineers and data colleagues, and to get to know people across the company I would never
                  have met through the roadmap.</p>
              </div>
            </Columns>

            <figure className="rv" style={{ marginTop: 'clamp(34px,4vw,56px)' }}>
              <video className="figimg" id="code-games" autoPlay muted loop playsInline preload="auto" width={1442} height={836}>
                <source src={codeGamesVideo} type="video/mp4" />
                <a href={codeGamesVideo}>Download the Code Games video</a>
              </video>
              <figcaption>Code Games</figcaption>
            </figure>
          </div>
        </section>

        <section className="sec light sec--open" id="impact">
          <div className="w">
            <SectionHead reveal n="15" k="Impact" lines={['What changed']} />
            <Columns cols="1:1" style={{ marginTop: 'clamp(44px,5vw,76px)' }}>
              <div className="rv">
                <IndexedList
                  items={[
                    { i: '01', text: 'More coherent experiences across products that had grown apart' },
                    { i: '02', text: 'Greater consistency across markets, without flattening real local needs' },
                    { i: '03', text: 'Better cross-product navigation and clearer entry points' },
                    { i: '04', text: 'Shared foundations and reusable patterns contributed back to the design system' },
                  ]}
                />
              </div>
              <div className="rv" data-d="1">
                <IndexedList
                  items={[
                    { i: '05', text: 'Product decisions validated with users before they were built' },
                    { i: '06', text: 'Less duplicated design and development work' },
                    { i: '07', text: 'Improvements shipped into existing professional software' },
                    { i: '08', text: 'Modernised experiences as products moved to the cloud' },
                  ]}
                />
              </div>
            </Columns>
          </div>
        </section>

        <section className="sec" id="reflection">
          <div className="w">
            <SectionHead reveal n="16" k="Reflection" lines={['My learnings']} />
            <LearningsList
              items={[
                { i: '01', text: 'I learnt to zoom out far enough to understand the system, and in far enough to solve the interaction.' },
                { i: '02', text: 'Context is something the system carries, not something each screen asks for again.' },
                { i: '03', text: 'Not every difference is a problem. The job was deciding which ones to keep.' },
                { i: '04', text: 'Design does not end at handoff. The questions engineering asks are part of the design.' },
              ]}
            />
          </div>
        </section>

        <Pivot
          id="closing"
          reveal
          afterDataD="1"
          statement={<>My job was often to design the connection between things that had previously been designed <i>separately.</i></>}
          after="I am grateful for everything I learnt at Wolters Kluwer."
        />
      </main>

      <footer>
        <div className="w">
          <div className="next">
            <span>Next</span>
            <Link to="/story2">Removing the blank page</Link>
          </div>
          <p>Wolters Kluwer · CCH iFirm · Laura Benavente</p>
        </div>
      </footer>
    </div>
  )
}
