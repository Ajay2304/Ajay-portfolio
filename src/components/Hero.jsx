import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import profileImg from '../assets/Aj.jpeg'

const roles = ['Full Stack Developer', 'AI Engineer', 'React Specialist', 'NestJS Expert']

const stats = [
  { num: '10+', label: 'Projects Built' },
  { num: '30+', label: 'Clients' },
  { num: '5+', label: 'Technologies' },
  { num: '100+', label: 'Bot used' },
]

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [typing, setTyping] = useState(true)

  useEffect(() => {
    const role = roles[roleIdx]
    let timeout
    if (typing) {
      if (displayed.length < role.length) {
        timeout = setTimeout(() => setDisplayed(role.slice(0, displayed.length + 1)), 65)
      } else {
        timeout = setTimeout(() => setTyping(false), 2200)
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35)
      } else {
        setRoleIdx(i => (i + 1) % roles.length)
        setTyping(true)
      }
    }
    return () => clearTimeout(timeout)
  }, [displayed, typing, roleIdx])

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
  }
  const item = {
    hidden: { opacity: 0, y: 25 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-28 pb-16 overflow-hidden">
      {/* Ambient glow effects */}
      <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full opacity-30 pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(0,163,255,0.12) 0%, transparent 70%)' }} />
      <div className="absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full opacity-20 pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(0,102,255,0.1) 0%, transparent 70%)' }} />

      {/* Floating particles */}
      <div className="particle-dot w-2 h-2 top-[20%] left-[15%] animate-float opacity-40" />
      <div className="particle-dot w-1.5 h-1.5 top-[60%] left-[8%] animate-float-delay opacity-30" />
      <div className="particle-dot w-1 h-1 top-[30%] right-[20%] animate-float opacity-25" />
      <div className="particle-dot w-2.5 h-2.5 bottom-[25%] right-[12%] animate-float-delay opacity-35" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-16 lg:gap-20">

          {/* ---- LEFT: Profile Image (as per requirement: image left, content right) ---- */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex items-center justify-center flex-shrink-0"
          >
            {/* Outer glow */}
            <div className="absolute inset-0 rounded-full blur-[60px] opacity-40"
              style={{ background: 'radial-gradient(circle, rgba(0,163,255,0.4), transparent 70%)' }} />

            {/* Ring container */}
            <div className="relative w-72 h-72 lg:w-[340px] lg:h-[340px]">
              {/* Conic gradient spinning ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 8, ease: 'linear' }}
                className="absolute inset-0 rounded-full p-[3px]"
                style={{
                  background: 'conic-gradient(from 0deg, #00A3FF, #0066FF, #00D4FF, #00A3FF)',
                }}
              >
                <div className="w-full h-full rounded-full bg-navy-900" />
              </motion.div>

              {/* Secondary dashed ring */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ repeat: Infinity, duration: 15, ease: 'linear' }}
                className="absolute inset-4 rounded-full border border-dashed border-electric/15"
              />

              {/* Inner glow pulse */}
              <motion.div
                animate={{ scale: [1, 1.06, 1], opacity: [0.3, 0.6, 0.3] }}
                transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
                className="absolute inset-8 rounded-full"
                style={{ background: 'radial-gradient(circle, rgba(0,163,255,0.2) 0%, transparent 70%)' }}
              />

              {/* Profile photo */}
              <div className="absolute inset-[14px] rounded-full overflow-hidden border-2 border-navy-900 bg-navy-800 flex items-center justify-center">
                <img
                  src={profileImg}
                  alt="Ajay Kumar"
                  className="w-full h-full object-cover object-top"
                  loading="eager"
                />
              </div>

              {/* ---- Floating tech badges ---- */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 3.5, ease: 'easeInOut' }}
                className="absolute -left-6 top-8 px-3.5 py-2 rounded-xl bg-navy-800/90 border border-white/10 text-xs font-semibold backdrop-blur-md shadow-lg shadow-navy-950/50"
              >
                <span className="text-electric">⚛</span>
                <span className="text-slate-300 ml-1.5">React 19</span>
              </motion.div>
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut', delay: 0.5 }}
                className="absolute -right-4 top-14 px-3.5 py-2 rounded-xl bg-navy-800/90 border border-white/10 text-xs font-semibold backdrop-blur-md shadow-lg shadow-navy-950/50"
              >
                <span className="text-cyan">🤖</span>
                <span className="text-slate-300 ml-1.5">YOLOv8</span>
              </motion.div>
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ repeat: Infinity, duration: 4.5, ease: 'easeInOut', delay: 1 }}
                className="absolute left-4 -bottom-3 px-3.5 py-2 rounded-xl bg-navy-800/90 border border-white/10 text-xs font-semibold backdrop-blur-md shadow-lg shadow-navy-950/50"
              >
                <span className="text-accent">⚡</span>
                <span className="text-slate-300 ml-1.5">NestJS</span>
              </motion.div>
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut', delay: 1.5 }}
                className="absolute -right-2 bottom-8 px-3.5 py-2 rounded-xl bg-navy-800/90 border border-white/10 text-xs font-semibold backdrop-blur-md shadow-lg shadow-navy-950/50"
              >
                <span className="text-cyan-soft">🐍</span>
                <span className="text-slate-300 ml-1.5">Python</span>
              </motion.div>
            </div>
          </motion.div>

          {/* ---- RIGHT: Text content ---- */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="flex-1 text-center lg:text-left"
          >
            <motion.p variants={item} className="text-slate-500 text-sm font-medium tracking-[0.2em] uppercase mb-4">
              Hello, I'm
            </motion.p>

            <motion.h1 variants={item} className="font-display font-extrabold text-5xl lg:text-6xl xl:text-[4.5rem] text-white leading-[1.1] mb-4">
              Ajay Kumar
            </motion.h1>

            <motion.div variants={item} className="mb-3">
              <span className="text-sm text-slate-500 font-medium">And I'm a </span>
              <span className="font-display font-bold text-xl lg:text-2xl text-gradient type-cursor">
                {displayed}
              </span>
            </motion.div>

            <motion.p variants={item} className="text-slate-400 text-base leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
              Final-year B.Tech (CSE — AI) student building scalable full-stack applications
              and real-time AI systems. Transforming complex problems into elegant, production-ready solutions.
            </motion.p>

            <motion.div variants={item} className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-10">
              <a href="#projects" className="btn-primary">
                <span>View Projects</span>
              </a>
              <a href="#contact" className="btn-outline">Contact Me</a>
            </motion.div>

            {/* Social icons */}
            <motion.div variants={item} className="flex items-center justify-center lg:justify-start gap-3">
              {[
                { href: 'https://linkedin.com/in/kallaguntaajaykumar', label: 'LinkedIn', icon: <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z M4 4a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"/> },
                { href: 'mailto:kallaguntaajaykumar@gmail.com', label: 'Email', icon: <><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" fill="none" stroke="currentColor" strokeWidth="2"/><polyline points="22,6 12,13 2,6" fill="none" stroke="currentColor" strokeWidth="2"/></> },
                { href: 'https://github.com/Ajay2304', label: 'GitHub', icon: <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0 0 22 12.017C22 6.484 17.522 2 12 2z"/> },
              ].map(social => (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith('mailto') ? undefined : '_blank'}
                  rel="noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.06] flex items-center justify-center text-slate-400 hover:text-electric hover:border-electric/30 hover:bg-electric/5 transition-all duration-300 hover:-translate-y-0.5"
                >
                  <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">{social.icon}</svg>
                </a>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* ---- STATS ROW ---- */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mt-20 relative"
        >
          {/* Stats container with glass effect */}
          <div className="glass-card px-6 py-8 lg:py-10 hover:translate-y-0">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0">
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2 + i * 0.1, duration: 0.5 }}
                  className={`text-center relative ${
                    i < stats.length - 1 ? 'md:border-r md:border-white/[0.06]' : ''
                  }`}
                >
                  <p className="font-display font-extrabold text-3xl lg:text-4xl text-gradient">{s.num}</p>
                  <p className="text-slate-500 text-xs uppercase tracking-[0.15em] mt-1.5 font-medium">{s.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
