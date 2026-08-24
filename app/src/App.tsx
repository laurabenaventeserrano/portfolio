import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ScrollToTop } from './ScrollToTop'
import { Home } from './pages/Home'
import { Story1 } from './pages/Story1'
import { Story2 } from './pages/Story2'
import { Story3 } from './pages/Story3'

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/story1" element={<Story1 />} />
        <Route path="/story2" element={<Story2 />} />
        <Route path="/story3" element={<Story3 />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
