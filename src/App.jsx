import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Story from './pages/Story'
import Academics from './pages/Academics'
import Projects from './pages/Projects'
import Thoughts from './pages/Thoughts'
import Poetry from './pages/Poetry'
import Relationships from './pages/Relationships'
import Gallery from './pages/Gallery'
import Contact from './pages/Contact'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/story" element={<Story />} />
          <Route path="/academics" element={<Academics />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/thoughts" element={<Thoughts />} />
          <Route path="/poetry" element={<Poetry />} />
          <Route path="/relationships" element={<Relationships />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </>
  )
}

export default App
