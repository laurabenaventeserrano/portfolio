import { useRef } from 'react'
import { Nav } from '../components/Nav'
import { Chapter } from '../components/Chapter'
import { Columns } from '../components/Columns'
import { StatRow } from '../components/StatRow'
import { HeroNote } from '../components/HeroNote'
import { IndexedList } from '../components/IndexedList'
import { PullQuote } from '../components/PullQuote'
import { FactList } from '../components/FactList'
import { Pivot } from '../components/Pivot'
import { usePageScope } from '../hooks/usePageScope'
import { useJsFlag } from '../hooks/useJsFlag'
import { useRevealSimple } from '../hooks/useRevealSimple'
import { useDocumentTitle } from '../hooks/useDocumentTitle'
import '../styles/case-study-common.css'
import '../styles/story23.css'

export function Story2() {
  usePageScope('page-case-study page-story23')
  useDocumentTitle('Removing the blank page from client documents · Laura Benavente')
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
              <span>Laura Benavente · Story 02</span>
              <span>B2B SaaS · AI-native</span>
            </div>
            <h1>Removing the<br />blank page from<br /><em>client documents</em></h1>
            <StatRow stats={[{ value: '3/3', label: 'Customers validated' }, { value: 'Shipped', label: 'Canadian market' }]} />
            <div className="hero-meta">
              <span>AI product design</span><span>Design strategy</span><span>Human review</span>
              <span>Concept validation</span><span>MVP definition</span><span>Stakeholder alignment</span>
            </div>
            <HeroNote variant="conf">
              Built inside <strong>CCH&nbsp;iFirm</strong> at <strong>Wolters Kluwer</strong>, their cloud practice
              management product for accounting and tax firms, and released in the Canadian market.
            </HeroNote>
          </div>
        </header>

        <section className="sec">
          <div className="w">
            <Chapter n="01" k="The context" lines={['A requirement', 'about editing']}>
              <Columns cols="5:7">
                <div>
                  <p>Accounting and tax professionals regularly send documents to their end clients for signature. The
                    product requirement I was given was narrow and reasonable: <strong>improve the document editing
                    experience</strong> for those documents.</p>
                  <p>At the time, a professional had three options. Start from a predefined template that rarely fit. Write
                    the whole thing by hand. Or leave the product entirely, draft it somewhere else, and paste it back.</p>
                  <p>All three were slow. The handwritten route also introduced exactly the kind of typing errors you do not
                    want in a document a client is about to sign.</p>
                </div>
                <div className="rv">
                  <figure>
                    <svg viewBox="0 0 640 330" role="img" aria-label="Three existing routes to produce a client document, all of them slow, one of them leaving the product entirely">
                      <text className="tl" x="0" y="10">HOW A DOCUMENT GOT WRITTEN</text>
                      <rect x="0" y="24" width="640" height="1" fill="rgba(255,255,255,.14)" />
                      <g>
                        <rect x="0" y="46" width="200" height="76" fill="#17171B" />
                        <text className="tt" x="16" y="70">Predefined template</text>
                        <text className="ts" x="16" y="88">Rigid. Rarely a real fit.</text>
                        <text className="ts" x="16" y="104">Heavy editing anyway.</text>

                        <rect x="220" y="46" width="200" height="76" fill="#17171B" />
                        <text className="tt" x="236" y="70">Write it by hand</text>
                        <text className="ts" x="236" y="88">Slow. From an empty page.</text>
                        <text className="ts" x="236" y="104">Typing errors carry risk.</text>

                        <rect x="440" y="46" width="200" height="76" fill="#1E1E24" stroke="#E0714F" strokeWidth="1" />
                        <text className="tt" x="456" y="70" style={{ fill: '#E0714F' }}>Leave and come back</text>
                        <text className="ts" x="456" y="88">Draft it in another tool,</text>
                        <text className="ts" x="456" y="104">paste the result back in.</text>
                      </g>
                      <g stroke="rgba(255,255,255,.3)" strokeWidth=".75" strokeDasharray="2 3" fill="none">
                        <path d="M100 122 V168" /><path d="M320 122 V168" />
                      </g>
                      <path d="M540 122 V168" stroke="#E0714F" strokeWidth="1" strokeDasharray="2 3" fill="none" />
                      <rect x="0" y="168" width="640" height="42" fill="#F6F4EF" />
                      <text className="tt" x="16" y="194" style={{ fill: '#0E0E11' }}>Document sent to the end client for signature</text>
                      <text className="ts" x="0" y="248">The third route was the one nobody had designed,</text>
                      <text className="ts" x="0" y="266">and the one that took client information outside the product.</text>
                    </svg>
                    <figcaption>Reconstructed · routes, not interfaces</figcaption>
                  </figure>
                </div>
              </Columns>
            </Chapter>
          </div>
        </section>

        <Pivot
          k="02 · The insight"
          statement={<>Our users were already writing with AI. They were just <i>doing it outside our product.</i></>}
        >
          <Columns cols="1:1">
            <div className="rv">
              <p>AI was not in the requirement. But earlier research among our own users had already established something
                nobody had connected to this brief: <strong>they were using ChatGPT to draft emails and written content as
                part of their working day.</strong></p>
              <p>So the real problem was not that editing was clumsy. It was that the product handed people an empty page,
                and people had already found their own way around it, one that sat outside the system entirely.</p>
              <p>Improving the editor would have made a bad starting point slightly more comfortable. It would not have
                addressed why people were leaving.</p>
            </div>
            <div className="rv">
              <figure>
                <svg viewBox="0 0 640 300" role="img" aria-label="Two pieces of evidence that already existed inside the company, connected for the first time by this proposal">
                  <text className="tl" x="0" y="10" style={{ fill: '#6E6E76' }}>WHAT THE COMPANY ALREADY KNEW</text>
                  <rect x="0" y="26" width="286" height="88" fill="none" stroke="rgba(255,255,255,.2)" strokeWidth=".75" />
                  <text className="tt" x="18" y="52" style={{ fill: '#F2F0EA' }}>The product requirement</text>
                  <text className="ts" x="18" y="72" style={{ fill: '#9E9EA6' }}>Improve document editing for</text>
                  <text className="ts" x="18" y="88" style={{ fill: '#9E9EA6' }}>documents sent to end clients.</text>

                  <rect x="354" y="26" width="286" height="88" fill="none" stroke="rgba(255,255,255,.2)" strokeWidth=".75" />
                  <text className="tt" x="372" y="52" style={{ fill: '#F2F0EA' }}>Prior user research</text>
                  <text className="ts" x="372" y="72" style={{ fill: '#9E9EA6' }}>Our users already used AI to</text>
                  <text className="ts" x="372" y="88" style={{ fill: '#9E9EA6' }}>draft emails and written content.</text>

                  <g stroke="#7FA3E8" strokeWidth="1.2" fill="none">
                    <path d="M143 114 C143 158 320 150 320 176" />
                    <path d="M497 114 C497 158 320 150 320 176" />
                  </g>
                  <circle cx="143" cy="114" r="3.2" fill="#7FA3E8" /><circle cx="497" cy="114" r="3.2" fill="#7FA3E8" />
                  <rect x="150" y="176" width="340" height="52" fill="#F2F0EA" />
                  <text className="tt" x="170" y="200" style={{ fill: '#0E0E11' }}>Nobody had put these two together</text>
                  <text className="ts" x="170" y="218" style={{ fill: '#3A3A42' }}>That connection was the proposal.</text>
                  <text className="ts" x="0" y="270" style={{ fill: '#6E6E76' }}>The evidence was not new. Using it to redefine the scope was.</text>
                </svg>
                <figcaption>Reconstructed · reasoning, not findings</figcaption>
              </figure>
            </div>
          </Columns>
        </Pivot>

        <section className="sec tint">
          <div className="w">
            <Chapter n="03" k="My role" lines={['The AI was not', 'in the brief.', 'It was my proposal.']}>
              <Columns cols="5:7">
                <div>
                  <p>I designed the full navigation and interaction flow for the improved signature experience, from the
                    first wireframes through to the concepts used for user validation.</p>
                  <p>But the decision that mattered came earlier. As a design strategy, I proposed incorporating AI-assisted
                    drafting into a requirement that had asked for none, and <strong>I defended it in stakeholder reviews
                    using the research the company already had.</strong></p>
                  <p>The outcome of those reviews was not a yes or a no. Stakeholders expanded the scope of the initiative
                    and phased its construction into the roadmap.</p>
                </div>
                <div className="rv">
                  <IndexedList
                    items={[
                      { i: '01', text: 'Reframed a document-editing requirement as a blank-page problem' },
                      { i: '02', text: 'Proposed AI-assisted drafting, justified with existing user research' },
                      { i: '03', text: 'Defended the direction in stakeholder reviews, which expanded the scope' },
                      { i: '04', text: 'Designed the end-to-end flow, from wireframes to validation concepts' },
                      { i: '05', text: 'Defined what the first release would and would not include' },
                    ]}
                  />
                </div>
              </Columns>
            </Chapter>
          </div>
        </section>

        <section className="sec">
          <div className="w">
            <Chapter n="04" k="The design" lines={['Review is not', 'a step. It is', 'the product.']}
              lead={<p style={{ marginBottom: 'clamp(44px,5vw,72px)', maxWidth: '58ch' }}>
                These documents go to an end client for signature. A generated draft that reaches a client unread is not a
                time saving. It is a liability. So the flow was built around a single non-negotiable principle:{' '}
                <strong>the professional reads and approves before anything is stored or sent.</strong>
              </p>}
            >
              <figure className="rv">
                <svg viewBox="0 0 1100 260" role="img" aria-label="The drafting flow: the user writes an instruction, the system generates a draft, the professional reviews and edits it, and only then saves and sends">
                  <text className="tl" x="0" y="10">THE FLOW</text>
                  <g>
                    <rect x="0" y="30" width="196" height="92" fill="#17171B" />
                    <text className="tl" x="16" y="52">01 · THE USER</text>
                    <text className="tt" x="16" y="76">Writes an instruction</text>
                    <text className="ts" x="16" y="94">What the document needs to say,</text>
                    <text className="ts" x="16" y="109">in their own words.</text>

                    <rect x="226" y="30" width="196" height="92" fill="#17171B" />
                    <text className="tl" x="242" y="52">02 · THE SYSTEM</text>
                    <text className="tt" x="242" y="76">Generates a draft</text>
                    <text className="ts" x="242" y="94">A starting point, inside the</text>
                    <text className="ts" x="242" y="109">product. Never an empty page.</text>

                    <rect x="452" y="30" width="230" height="92" fill="#1E1E24" stroke="#E0714F" strokeWidth="1.4" />
                    <text className="tl" x="470" y="52" style={{ fill: '#E0714F' }}>03 · THE PROFESSIONAL</text>
                    <text className="tt" x="470" y="76" style={{ fill: '#E0714F' }}>Reviews and edits</text>
                    <text className="ts" x="470" y="94">Full editing. Nothing is stored</text>
                    <text className="ts" x="470" y="109">until the human is satisfied.</text>

                    <rect x="712" y="30" width="176" height="92" fill="#17171B" />
                    <text className="tl" x="728" y="52">04</text>
                    <text className="tt" x="728" y="76">Saves</text>
                    <text className="ts" x="728" y="94">A deliberate act,</text>
                    <text className="ts" x="728" y="109">not an automatic one.</text>

                    <rect x="918" y="30" width="182" height="92" fill="#F6F4EF" />
                    <text className="tl" x="934" y="52" style={{ fill: '#686872' }}>05</text>
                    <text className="tt" x="934" y="76" style={{ fill: '#0E0E11' }}>Sends for signature</text>
                    <text className="ts" x="934" y="94" style={{ fill: '#33333A' }}>Reaches the end client</text>
                    <text className="ts" x="934" y="109" style={{ fill: '#33333A' }}>only after approval.</text>
                  </g>
                  <g stroke="rgba(255,255,255,.34)" strokeWidth="1" fill="none">
                    <path d="M196 76 H226" /><path d="M422 76 H452" /><path d="M682 76 H712" /><path d="M888 76 H918" />
                  </g>
                  <path d="M567 122 V154" stroke="#E0714F" strokeWidth="1" strokeDasharray="2 3" fill="none" />
                  <rect x="360" y="154" width="414" height="30" fill="none" stroke="#E0714F" strokeWidth="1" />
                  <text className="tt" x="378" y="174" style={{ fill: '#E0714F' }}>The AI never finishes the document. A person does.</text>
                  <text className="ts" x="0" y="230">Generation is assistance. Approval stays with the professional who signs their name to the work.</text>
                </svg>
                <figcaption>Reconstructed flow · no original UI</figcaption>
              </figure>
            </Chapter>
          </div>
        </section>

        <section className="sec light">
          <div className="w">
            <Chapter n="05" k="Scope" lines={['What I chose', 'not to build']}>
              <Columns cols="1:1">
                <div>
                  <p>The concept included saving a generated document as a reusable template, a genuinely useful idea, and
                    the obvious next step for anyone producing similar documents repeatedly.</p>
                  <p><strong>It did not ship in the MVP.</strong> Templates introduce a second lifecycle: ownership,
                    versioning, who can edit them, what happens when the underlying rules change. None of that could be
                    answered responsibly before we knew whether the core drafting behaviour worked at all.</p>
                  <p>It went into a later phase of the roadmap. Deferred, with a reason, not dropped.</p>
                </div>
                <div className="rv">
                  <FactList
                    facts={[
                      { k: 'Shipped', v: 'Instruction-based drafting inside the product' },
                      { k: 'Shipped', v: 'Full human review before saving or sending' },
                      { k: 'Deferred', v: 'Saving generated documents as reusable templates' },
                      { k: 'Reason', v: 'Template ownership and versioning were unanswered' },
                    ]}
                  />
                </div>
              </Columns>
            </Chapter>
          </div>
        </section>

        <section className="sec">
          <div className="w">
            <Chapter n="06" k="Validation and release" lines={['Tested small,', 'released for real']}>
              <Columns cols="1:1">
                <div>
                  <p>We ran a fast concept validation with three trusted customers before committing to build. The results
                    were strongly positive: they found the feature intuitive and useful, and the concept design validated
                    well enough to proceed.</p>
                  <p>I want to be precise about what that was and was not. Three customers is a directional signal, not
                    statistical evidence. It was enough to justify building the MVP. It was not enough to tell us how the
                    feature would behave once it met a whole market.</p>
                  <p>The feature was released within the practice management product in the Canadian market.</p>
                </div>
                <div className="rv" style={{ alignSelf: 'end' }}>
                  <PullQuote>Three customers told us it was worth building. The market told us what we had actually built.</PullQuote>
                </div>
              </Columns>
            </Chapter>
          </div>
        </section>

        <Pivot
          k="07 · What I got wrong"
          statement={<>I thought this was a tool for contracts. People used it for <i>anything that needed a signature.</i></>}
        >
          <Columns cols="1:1">
            <div className="rv">
              <p>My working assumption throughout design was that the feature served formal, structured documents:
                engagement letters, contracts, the heavyweight paperwork of a practice.</p>
              <p>In use, the pattern was broader. People reached for it for anything that required a client signature,
                including short, routine correspondence. In effect it became <strong>a better way to write anything that
                had to go out formally</strong>, closer to an improved email than to a contract generator.</p>
              <p>The blank page was a bigger problem than the document type. I had scoped the feature around the artefact
                when I should have scoped it around the moment.</p>
            </div>
            <div className="rv">
              <figure>
                <svg viewBox="0 0 640 300" role="img" aria-label="Expected usage limited to formal contracts, against actual usage spanning anything requiring a client signature">
                  <text className="tl" x="0" y="10" style={{ fill: '#6E6E76' }}>WHAT I DESIGNED FOR</text>
                  <rect x="0" y="24" width="180" height="104" fill="none" stroke="rgba(255,255,255,.2)" strokeWidth=".75" />
                  <rect x="18" y="46" width="144" height="14" fill="#F2F0EA" />
                  <rect x="18" y="70" width="120" height="14" fill="#F2F0EA" />
                  <rect x="18" y="94" width="136" height="14" fill="#F2F0EA" />
                  <text className="ts" x="0" y="150" style={{ fill: '#6E6E76' }}>Formal, structured documents.</text>

                  <text className="tl" x="300" y="10" style={{ fill: '#6E6E76' }}>WHAT PEOPLE USED IT FOR</text>
                  <rect x="300" y="24" width="340" height="104" fill="none" stroke="#E0714F" strokeWidth=".75" />
                  <g fill="#F2F0EA">
                    <rect x="318" y="42" width="120" height="12" /><rect x="452" y="42" width="86" height="12" /><rect x="552" y="42" width="68" height="12" />
                    <rect x="318" y="62" width="94" height="12" /><rect x="426" y="62" width="112" height="12" /><rect x="552" y="62" width="68" height="12" />
                    <rect x="318" y="82" width="140" height="12" /><rect x="472" y="82" width="74" height="12" /><rect x="560" y="82" width="60" height="12" />
                    <rect x="318" y="102" width="78" height="12" /><rect x="410" y="102" width="128" height="12" /><rect x="552" y="102" width="68" height="12" />
                  </g>
                  <text className="ts" x="300" y="150" style={{ fill: '#E0714F' }}>Anything that needed a client signature.</text>
                  <path d="M180 76 H300" stroke="#E0714F" strokeWidth="1" fill="none" />
                  <text className="tt" x="0" y="212" style={{ fill: '#F2F0EA' }}>The scope was set by the artefact.</text>
                  <text className="tt" x="0" y="234" style={{ fill: '#F2F0EA' }}>The need was set by the moment: facing an empty page.</text>
                </svg>
                <figcaption>Reconstructed · qualitative observation, not measured data</figcaption>
              </figure>
            </div>
          </Columns>
        </Pivot>

        <section className="sec">
          <div className="w">
            <Chapter n="08" k="What I took from it" lines={['Three things', 'I kept']}>
              <Columns cols="3">
                <div className="rv">
                  <h3>The best AI feature is often already happening</h3>
                  <p style={{ fontSize: 16 }}>Our users had solved their own problem with an outside tool. The research
                    existed; the work was connecting it to a requirement nobody had linked it to. Behaviour that routes
                    around your product is a specification.</p>
                </div>
                <div className="rv">
                  <h3>In regulated work, review is the feature</h3>
                  <p style={{ fontSize: 16 }}>When a document carries a client's signature, the value is not what the model
                    writes. It is that a qualified person read it, changed it, and chose to stand behind it. Design the
                    approval, not just the generation.</p>
                </div>
                <div className="rv">
                  <h3>Scope the moment, not the artefact</h3>
                  <p style={{ fontSize: 16 }}>I framed this around contracts. Users framed it around the blank page. Getting
                    that boundary wrong is cheap to discover after launch and expensive to assume before it.</p>
                </div>
              </Columns>
            </Chapter>
          </div>
        </section>
      </main>

      <footer>
        <div className="w"><p>Wolters Kluwer · CCH iFirm · Laura Benavente</p></div>
      </footer>
    </div>
  )
}
