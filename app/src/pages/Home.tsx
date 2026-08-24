import { useRef } from 'react'
import { Nav } from '../components/Nav'
import { usePageScope } from '../hooks/usePageScope'
import { useHomeMotion } from '../hooks/useHomeMotion'
import { useDocumentTitle } from '../hooks/useDocumentTitle'
import '../styles/home.css'

import portraitImg from '../assets/images/laurabenavente.jpeg'
import story1Img from '../assets/images/story-1-ifirm-v3.png'
import story2Img from '../assets/images/story-2-hero.jpg'
import story2Img2x from '../assets/images/story-2-hero@2x.jpg'
import story3Img from '../assets/images/story-3-movistar.png'

export function Home() {
  usePageScope('page-home')
  useDocumentTitle('Laura Benavente · Senior Product Designer')
  const rootRef = useRef<HTMLDivElement>(null)
  useHomeMotion(rootRef)

  return (
    <div ref={rootRef}>
      <a className="skip-link" href="#main">Skip to content</a>

      <Nav variant="home" />

      <div className="counter" id="counter" aria-hidden="true">
        <span id="counter-n">01</span> / 05
      </div>

      <main id="main">
        <section className="intro" id="intro">
          <div className="w">
            <p className="intro-h">
              <span className="tw-static">
                <span className="ln"><i>Hello, I&rsquo;m Laura Benavente</i></span>
                <span className="ln"><i>A Senior product Designer</i></span>
                <span className="ln"><i>based in Madrid</i></span>
              </span>
              <span className="tw-live" aria-hidden="true">
                <span className="tw-l" data-tw="0" />
                <span className="tw-l" data-tw="1" />
                <span className="tw-l" data-tw="2" />
              </span>
            </p>
          </div>
        </section>

        <header className="hero" id="hero">
          <div className="w">
            <h1>
              <span className="ln"><i>I&rsquo;m focus on complex</i></span>
              <span className="ln"><i>B2B SaaS systems and</i></span>
              <span className="ln"><i><span className="nb">AI-native</span> experiences</i></span>
            </h1>
          </div>
          <div className="cue"><span />Scroll</div>
          <div className="spot" id="spot" aria-hidden="true">
            <div className="w">
              <h1>
                <span className="ln"><i>I&rsquo;m focus on complex</i></span>
                <span className="ln"><i>B2B SaaS systems and</i></span>
                <span className="ln"><i><span className="nb">AI-native</span> experiences</i></span>
              </h1>
            </div>
            <div className="cue"><span />Scroll</div>
          </div>
        </header>

        <section className="second-sec">
          <div className="w second-row">
            <p className="second rv">
              I combine strategic thinking, emerging technology and narrative interaction to create experiences people LOVE
            </p>
            <figure className="portrait rv" data-d="1">
              <div className="portrait__box">
                <img className="portrait__grey" src={portraitImg} width={768} height={1024} loading="lazy" decoding="async" alt="" />
                <img
                  className="portrait__color"
                  src={portraitImg}
                  width={768}
                  height={1024}
                  loading="lazy"
                  decoding="async"
                  alt="Laura Benavente, de chaqueta de cuero y auriculares al cuello, delante de un muro vegetal."
                />
              </div>
            </figure>
          </div>
        </section>

        <section>
          <div className="w">
            <div className="bg-row">
              <div className="lab rv">My background</div>
              <div>
                <h2 className="rv" data-d="1">From financial operations to product systems</h2>
                <p className="rv" data-d="2">
                  I bring together financial-domain knowledge, systems thinking and product strategy to turn complex business
                  operations into clear, connected and scalable experiences.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="about" id="about">
          <div className="about-track" id="about-track">
            <div className="about-sticky">
              <div className="w">
                <h2 className="rv">About me</h2>
                <ul className="lines">
                  <li><span className="ln"><i>I design connections.</i></span></li>
                  <li><span className="ln"><i>Between people and systems.</i></span></li>
                  <li><span className="ln"><i>Between business and technology.</i></span></li>
                  <li><span className="ln"><i>Between complexity and clarity.</i></span></li>
                  <li><span className="ln"><i>Between human intention and artificial intelligence.</i></span></li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <div className="dark">
          <a className="story-hero story-hero--float" id="story-1" href="/story1">
            <div className="story-hero__media rv rv--mask">
              <img
                src={story1Img}
                width={1600}
                height={777}
                loading="lazy"
                decoding="async"
                alt="The CCH iFirm services panel: each product a firm subscribes to shown as a card with a short description and a launch action."
              />
            </div>
            <div className="story-hero__scrim" />
            <div className="story-hero__glow" />
            <div className="story-hero__copy">
              <div className="prism" aria-hidden="true"><span className="prism__band" /></div>
              <p className="story-hero__eyebrow">Story 1</p>
              <h2 className="story-hero__title">Wolters Kluwer<br />ecosystem</h2>
              <p className="story-hero__standfirst">Designing a cloud ecosystem for tax professionals</p>
              <ul className="story-hero__tags">
                <li>Product design</li>
                <li>B2B SaaS</li>
                <li>Complex workflows</li>
                <li>Multi-market</li>
                <li>Cloud migration</li>
              </ul>
            </div>
          </a>

          <a className="story-hero" id="story-2" href="/story2">
            <div className="story-hero__media rv rv--mask">
              <img
                src={story2Img}
                srcSet={`${story2Img} 1x, ${story2Img2x} 2x`}
                width={2880}
                height={1620}
                loading="lazy"
                decoding="async"
                alt="The drafting assistant open on a laptop against a dark ground: an engagement letter with the AI-written paragraphs highlighted, marked as a draft not yet sent, beside the instruction panel."
              />
            </div>
            <div className="story-hero__scrim" />
            <div className="story-hero__glow" />
            <div className="story-hero__copy">
              <div className="prism" aria-hidden="true"><span className="prism__band" /></div>
              <p className="story-hero__eyebrow">Story 2</p>
              <h2 className="story-hero__title">Wolters Kluwer<br />strategy</h2>
              <p className="story-hero__standfirst">
                Bringing AI-Assisted drafting inside the product, so professionals never start a client from an empty page.
              </p>
              <ul className="story-hero__tags">
                <li>Product design</li>
                <li>B2B SaaS</li>
                <li>AI-native</li>
                <li>Human review</li>
                <li>MVP definition</li>
              </ul>
            </div>
          </a>

          <a className="story-hero story-hero--float" id="story-3" href="/story3">
            <div className="story-hero__media rv rv--mask">
              <img
                src={story3Img}
                width={1200}
                height={800}
                loading="lazy"
                decoding="async"
                alt="The Smart WiFi self-diagnosis flow: the app screens laid out as a grid, from the autodiagnostic entry point through the speed test to the help and interference advice."
              />
            </div>
            <div className="story-hero__scrim" />
            <div className="story-hero__glow" />
            <div className="story-hero__copy">
              <div className="prism" aria-hidden="true"><span className="prism__band" /></div>
              <p className="story-hero__eyebrow">Story 3</p>
              <h2 className="story-hero__title">Movistar</h2>
              <p className="story-hero__standfirst">
                Designing a self-diagnosis experience for home connectivity, where the test could not be made faster and the
                wait had to be made understandable.
              </p>
              <ul className="story-hero__tags">
                <li>Interaction design</li>
                <li>Consumer</li>
                <li>Self-service</li>
                <li>Motion</li>
                <li>Design system</li>
              </ul>
            </div>
          </a>

          {/* Lab section: disabled until there are 3 Instagram posts (per project memory).
              Kept out of the DOM, matching the current live site, rather than hidden with CSS. */}

          <section className="connect" id="connect">
            <div className="w">
              <h2 className="rv">Let&rsquo;s connect</h2>
              <a className="btn btn-l rv" data-d="1" href="mailto:laurabenavente@me.com">Contact me</a>
            </div>
          </section>
        </div>
      </main>

      <div className="glow" id="glow" aria-hidden="true">
        <svg viewBox="0 0 1271 599" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="glow-grad" x1="0" y1="1" x2="0" y2="0">
              <stop offset="0" stopColor="#340B05" />
              <stop offset="0.1827" stopColor="#0358F7" />
              <stop offset="0.2837" stopColor="#5092C7" />
              <stop offset="0.4135" stopColor="#E1ECFE" />
              <stop offset="0.5866" stopColor="#FFD400" />
              <stop offset="0.6827" stopColor="#FA3D1D" />
              <stop offset="0.8029" stopColor="#FD02F5" />
              <stop offset="1" stopColor="#FFC0FD00" />
            </linearGradient>
            <filter id="glow-blur" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="15" />
            </filter>
          </defs>
          <g filter="url(#glow-blur)"><rect x="0.00" y="276.14" width="173.70" height="322.86" fill="url(#glow-grad)" /></g>
          <g filter="url(#glow-blur)"><rect x="141.22" y="196.88" width="173.70" height="402.12" fill="url(#glow-grad)" /></g>
          <g filter="url(#glow-blur)"><rect x="282.44" y="123.82" width="173.70" height="475.18" fill="url(#glow-grad)" /></g>
          <g filter="url(#glow-blur)"><rect x="423.67" y="59.33" width="173.70" height="539.67" fill="url(#glow-grad)" /></g>
          <g filter="url(#glow-blur)"><rect x="564.89" y="11.98" width="173.70" height="587.02" fill="url(#glow-grad)" /></g>
          <g filter="url(#glow-blur)"><rect x="706.11" y="59.33" width="173.70" height="539.67" fill="url(#glow-grad)" /></g>
          <g filter="url(#glow-blur)"><rect x="847.33" y="123.82" width="173.70" height="475.18" fill="url(#glow-grad)" /></g>
          <g filter="url(#glow-blur)"><rect x="988.56" y="196.88" width="173.70" height="402.12" fill="url(#glow-grad)" /></g>
          <g filter="url(#glow-blur)"><rect x="1129.78" y="276.14" width="173.70" height="322.86" fill="url(#glow-grad)" /></g>
        </svg>
      </div>
    </div>
  )
}
