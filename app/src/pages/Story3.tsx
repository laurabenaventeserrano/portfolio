import { useRef } from 'react'
import { Nav } from '../components/Nav'
import { Chapter } from '../components/Chapter'
import { Columns } from '../components/Columns'
import { StatRow } from '../components/StatRow'
import { HeroNote } from '../components/HeroNote'
import { IndexedList } from '../components/IndexedList'
import { FactList } from '../components/FactList'
import { Figure } from '../components/Figure'
import { Pivot } from '../components/Pivot'
import { usePageScope } from '../hooks/usePageScope'
import { useJsFlag } from '../hooks/useJsFlag'
import { useRevealSimple } from '../hooks/useRevealSimple'
import { useDocumentTitle } from '../hooks/useDocumentTitle'
import '../styles/case-study-common.css'
import '../styles/story23.css'

import wireflowImg from '../assets/images/s3-fig1-wireflow.png'
import resultsImg from '../assets/images/s3-fig2-results.png'
import testGif from '../assets/images/s3-fig3-test.gif'

export function Story3() {
  usePageScope('page-case-study page-story23')
  useDocumentTitle('Designing for a wait that could not be shortened · Laura Benavente')
  useJsFlag()
  const rootRef = useRef<HTMLDivElement>(null)
  useRevealSimple(rootRef)

  return (
    <div ref={rootRef}>
      <a className="skip-link" href="#main">Skip to content</a>
      <Nav variant="case-study" />

      <main id="main">
        <header className="hero">
          <div className="w">
            <div className="hero-top">
              <span>Laura Benavente · Story 03</span>
              <span>Consumer · Telecom</span>
            </div>
            <h1>Designing for<br />a wait that<br /><em>could not be shortened</em></h1>
            <StatRow stats={[{ value: '−12%', label: 'Call centre calls' }, { value: 'Goal', label: 'Reduce call centre volume' }]} />
            <div className="hero-meta">
              <span>Interaction design</span><span>Technical constraints</span><span>Self-service</span>
              <span>Motion design</span><span>Illustration</span><span>Design system</span>
            </div>
            <HeroNote variant="conf">
              Smart WiFi Selfcare, a diagnostics feature inside Movistar's Smart WiFi app, designed at{' '}
              <strong>frog</strong> for Telefónica. Released 2019.
            </HeroNote>
          </div>
        </header>

        <section className="sec">
          <div className="w">
            <Chapter n="01" k="The context" lines={['An app tied', 'to a physical', 'router']}>
              <Columns cols="5:7">
                <div>
                  <p>Smart WiFi is a mobile app that lets Movistar customers set up their router, change the WiFi password
                    and share their connection. Selfcare was a new feature inside it: help people diagnose and resolve
                    their own connectivity problems.</p>
                  <p>The business goal was direct: <strong>encourage self-service and reduce support calls.</strong> Every
                    problem a customer could solve alone was a call the operator did not have to take.</p>
                  <p>What made it hard is that the app is bound to real hardware in someone's home. The behaviour of the
                    product depended on the router, the network, and on differences between iOS and Android that we did not
                    control.</p>
                </div>
                <div className="rv">
                  <Figure
                    src={wireflowImg} width={1600} height={1144}
                    caption="Wireflow taken into grooming · Smart WiFi Selfcare, Movistar"
                    alt="The wireflow for the diagnostic experience: every screen of the Smart WiFi Selfcare flow laid out with its connections, decision points and error branches, as taken into grooming with the engineering team."
                  />
                </div>
              </Columns>
            </Chapter>
          </div>
        </section>

        <Pivot
          k="02 · The challenge"
          statement={<>The diagnostic test was slow, and no amount of design <i>was going to make it faster.</i></>}
        >
          <Columns cols="1:1">
            <div className="rv">
              <p>Running a real performance test against a home network takes as long as it takes. That was a technical
                fact, not a design problem I could solve.</p>
              <p>Which meant the actual problem was not duration. It was <strong>what a person believes is happening while
                they wait</strong>, and whether they stay with the process instead of abandoning it and calling support,
                which was precisely the outcome the feature existed to avoid.</p>
              <p>A spinner would have been honest and useless. The design had to make the wait legible: something is
                happening, this is what it is, you are still in control of it.</p>
            </div>
            <div className="rv">
              <Figure
                className="fig-mid"
                src={resultsImg} width={1023} height={1400}
                caption="Results screen · Smart WiFi Selfcare, Movistar"
                alt="The results screen on a phone: a plain-language list of what the connection can support, followed by the measured download and upload speeds and a signal section."
              />
            </div>
          </Columns>
        </Pivot>

        <section className="sec tint">
          <div className="w">
            <Chapter n="03" k="My role" lines={['Designing inside', 'the constraints,', 'not around them']}>
              <Columns cols="5:7">
                <div>
                  <p>I was the UX designer on the feature, working within Movistar's existing design system and alongside
                    the engineering team building it.</p>
                  <p>The method that mattered: <strong>I brought a wireflow to every grooming session.</strong> Not a
                    finished design for approval, a working flow that engineering could break, so that technical reality
                    and product requirements shaped it while it was still cheap to change.</p>
                  <p>That is how the edge cases got mapped. Not by documenting them afterwards, but by designing in the room
                    where they surfaced.</p>
                </div>
                <div className="rv">
                  <IndexedList
                    items={[
                      { i: '01', text: 'End-to-end interaction and navigation flow for the Selfcare feature' },
                      { i: '02', text: 'Edge-case mapping with engineering across iOS and Android' },
                      { i: '03', text: 'Motion design for the diagnostic sequence, to make waiting legible' },
                      { i: '04', text: 'A set of original illustrations for the help and FAQ content' },
                      { i: '05', text: 'Final designs delivered within the Movistar design system' },
                    ]}
                  />
                </div>
              </Columns>
            </Chapter>
          </div>
        </section>

        <section className="sec">
          <div className="w">
            <Chapter n="04" k="The work" lines={['Two problems,', 'two languages']}>
              <Columns cols="1:1">
                <div>
                  <h3>Motion, for the part you wait through</h3>
                  <p style={{ fontSize: 16 }}>The diagnostic sequence was designed as visible stages rather than a single
                    indeterminate load. Each stage names what the system is doing, so the passing time reads as progress
                    rather than as absence. The goal was never to disguise the duration. It was to make it comprehensible.</p>
                </div>
                <div>
                  <h3>Illustration, for the part you read</h3>
                  <p style={{ fontSize: 16 }}>A large part of Selfcare is explanatory content: why your connection behaves
                    the way it does, what you can do about it. I created a set of illustrations so each topic was
                    recognisable at a glance, turning a help section people avoid into something they could actually
                    navigate.</p>
                </div>
              </Columns>
              <Figure
                reveal
                className="fig-phone"
                style={{ marginTop: 'clamp(44px,5vw,72px)' }}
                src={testGif} width={375} height={667}
                caption="The test running · Smart WiFi Selfcare, Movistar"
                alt="The diagnostic test running on a phone: the wait is broken into named stages that announce what is being measured, so the person can see progress instead of an unexplained spinner."
              />
            </Chapter>
          </div>
        </section>

        <section className="sec light">
          <div className="w">
            <Chapter n="05" k="Outcome" lines={['People diagnosed', 'their own', 'connection']}>
              <Columns cols="1:1">
                <div>
                  <p>The feature let customers analyse their own connectivity without calling for assistance, which was the
                    point of building it, and the measure the business cared about.</p>
                  <p>For a support organisation, a customer who resolves their own problem is not only a cost avoided. It is
                    a customer who did not spend twenty minutes on hold being told to restart the router.</p>
                </div>
                <FactList
                  reveal
                  facts={[
                    { k: 'Released', v: '2019, inside the Movistar Smart WiFi app' },
                    { k: 'Goal', v: 'Self-service diagnosis, fewer support calls' },
                    { k: 'Constraint', v: 'A test duration that could not be reduced' },
                    { k: 'Approach', v: 'Design the perception of the wait, not the wait' },
                  ]}
                />
              </Columns>
            </Chapter>
          </div>
        </section>

        <section className="sec">
          <div className="w">
            <Chapter n="06" k="What I took from it" lines={['Three things', 'I kept']}>
              <Columns cols="3">
                <div className="rv">
                  <h3>Some constraints are the brief</h3>
                  <p style={{ fontSize: 16 }}>The test was slow and would stay slow. Accepting that early moved the problem
                    from speed to comprehension, and comprehension was solvable. Arguing with a technical fact wastes the
                    time you could spend designing around it.</p>
                </div>
                <div className="rv">
                  <h3>Design in the room where reality lives</h3>
                  <p style={{ fontSize: 16 }}>Bringing a wireflow to every grooming meant edge cases surfaced while the
                    design was still cheap to change. A flow engineering can break is worth more than a comp they can only
                    approve.</p>
                </div>
                <div className="rv">
                  <h3>Waiting is an experience, not a gap</h3>
                  <p style={{ fontSize: 16 }}>People will stay with a slow process they understand and abandon a fast one
                    they do not. Control is what holds attention, and it can be designed.</p>
                </div>
              </Columns>
            </Chapter>
          </div>
        </section>
      </main>

      <footer>
        <div className="w"><p>Original work delivered for Telefónica at frog, 2019 · Laura Benavente</p></div>
      </footer>
    </div>
  )
}
