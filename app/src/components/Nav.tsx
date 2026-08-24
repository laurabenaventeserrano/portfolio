import { Link } from 'react-router-dom'
import { useNavClose } from '../hooks/useNavClose'
import '../styles/nav.css'

interface NavProps {
  variant: 'home' | 'case-study'
}

export function Nav({ variant }: NavProps) {
  useNavClose()
  const outerClass = variant === 'home' ? 'nav' : 'navbar'

  return (
    <nav className={outerClass}>
      <details className="nav-d" id="nav-d">
        <summary className="nav-bar">
          {variant === 'home' ? (
            <a className="nav-logo" href="#hero">Laura Benavente</a>
          ) : (
            <Link className="nav-logo" to="/">Laura Benavente</Link>
          )}
          <span className="nav-toggle" aria-label="Toggle navigation">
            <span className="lbl-open">Menu</span>
            <span className="lbl-close">Close</span>
          </span>
        </summary>
        <div className="nav-panel">
          <ul className="nav-links">
            <li>{variant === 'home' ? <a href="#hero"><span>Home</span></a> : <Link to="/"><span>Home</span></Link>}</li>
            <li><Link to="/story1"><span>Story 1</span></Link></li>
            <li><Link to="/story2"><span>Story 2</span></Link></li>
            <li><Link to="/story3"><span>Story 3</span></Link></li>
            <li><a href="/Laura_Benavente_CV_En.pdf?v=2" target="_blank" rel="noopener"><span>CV</span></a></li>
          </ul>
          <ul className="nav-foot">
            <li><a href="mailto:laurabenavente@me.com"><span>Contact me</span></a></li>
            <li><a href="https://www.linkedin.com/in/laura-benavente-serrano/"><span>LinkedIn</span></a></li>
            <li><a href="https://dribbble.com/LauraBenavente" target="_blank" rel="noopener"><span>Dribbble</span></a></li>
          </ul>
        </div>
      </details>
    </nav>
  )
}
