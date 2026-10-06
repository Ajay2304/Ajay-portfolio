import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Certifications from './components/Certifications'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#02040a]">
      {/* Global grid background */}
      <div className="fixed inset-0 grid-bg opacity-100 pointer-events-none z-0" />
      {/* Global spotlight */}
      <div className="fixed inset-0 spotlight pointer-events-none z-0" />
      {/* Subtle noise texture */}
      <div className="fixed inset-0 noise-overlay pointer-events-none z-0" />

      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Certifications />
        <Contact />
        <Footer />
      </div>
    </div>
  )
}
