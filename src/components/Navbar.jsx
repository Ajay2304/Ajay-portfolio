import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const links = ['About', 'Skills', 'Experience', 'Projects', 'Certifications', 'Contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('home')
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40)
      const sections = ['home', ...links.map(l => l.toLowerCase())]
      for (let i = sections.length - 1; i >= 0; i--) {
        const sec = document.getElementById(sections[i])
        if (sec && window.scrollY >= sec.offsetTop - 160) {
          setActive(sections[i])
          break
        }
      }
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-navy-900/80 backdrop-blur-xl border-b border-white/[0.06] shadow-lg shadow-navy-950/50'
          : 'bg-transparent'
      }`}
      id="nav"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="font-display font-extrabold text-xl tracking-tight flex items-center gap-0.5 group">
          <span className="text-gradient">Port</span>
          <span className="text-white/80 group-hover:text-white transition-colors duration-300">folio</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden lg:flex items-center gap-1">
          {links.map(link => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className={`nav-link px-4 py-2 rounded-lg ${
                  active === link.toLowerCase() ? 'active text-white bg-white/[0.04]' : ''
                }`}
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="mailto:kallaguntaajaykumar@gmail.com"
          className="hidden lg:inline-flex btn-primary text-xs py-2.5 px-6"
        >
          <span className="flex items-center gap-2">
            <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
              <polyline points="22,6 12,13 2,6"/>
            </svg>
            Download CV
          </span>
        </a>

        {/* Hamburger */}
        <button
          onClick={() => setMobileOpen(o => !o)}
          className="lg:hidden w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.06] flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/[0.08] transition-all duration-300"
          aria-label="Toggle menu"
          id="nav-toggle"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {mobileOpen
              ? <><line x1="6" y1="6" x2="18" y2="18"/><line x1="18" y1="6" x2="6" y2="18"/></>
              : <><line x1="4" y1="7" x2="20" y2="7"/><line x1="4" y1="12" x2="20" y2="12"/><line x1="4" y1="17" x2="20" y2="17"/></>
            }
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="lg:hidden overflow-hidden"
          >
            <div className="bg-navy-900/95 backdrop-blur-2xl border-t border-white/[0.06] px-6 py-8">
              <div className="flex flex-col items-center gap-4">
                {links.map((link, i) => (
                  <motion.a
                    key={link}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05 }}
                    href={`#${link.toLowerCase()}`}
                    onClick={() => setMobileOpen(false)}
                    className={`text-lg font-medium transition-colors duration-200 py-2 ${
                      active === link.toLowerCase() ? 'text-white' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    {link}
                  </motion.a>
                ))}
                <a href="mailto:kallaguntaajaykumar@gmail.com" className="btn-primary mt-4 w-full text-center">
                  <span>Download CV</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
