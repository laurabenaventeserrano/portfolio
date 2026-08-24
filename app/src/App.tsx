import { HashRouter, Routes, Route } from 'react-router-dom'
import { ScrollToTop } from './ScrollToTop'
import { Home } from './pages/Home'
import { Story1 } from './pages/Story1'
import { Story2 } from './pages/Story2'
import { Story3 } from './pages/Story3'

function App() {
  // HashRouter, not BrowserRouter: GitHub Pages serves static files with no
  // server-side rewrite, so a direct link or refresh on /story1 would 404.
  // Hash routes (/#/story1) always resolve to index.html first.
  return (
    <HashRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/story1" element={<Story1 />} />
        <Route path="/story2" element={<Story2 />} />
        <Route path="/story3" element={<Story3 />} />
      </Routes>
    </HashRouter>
  )
}

export default App
