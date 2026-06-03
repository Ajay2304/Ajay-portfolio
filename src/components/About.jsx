import { motion } from 'framer-motion'
import FadeIn from './FadeIn'

const highlights = [
  { icon: '💻', title: 'Full Stack Development', desc: 'React, NestJS, FastAPI — end-to-end product development with production-grade architecture.' },
  { icon: '🤖', title: 'AI & Machine Learning', desc: 'Computer vision with YOLOv8, pose detection, anomaly detection, and intelligent automation systems.' },
  { icon: '🗄️', title: 'Database Architecture', desc: 'PostgreSQL, MySQL, MongoDB, Redis caching — multi-tenant data solutions at scale.' },
  { icon: '🚀', title: 'DevOps & Tooling', desc: 'Docker, Turborepo monorepo, CI/CD pipelines, and pnpm workspace optimization.' },
]

const quickFacts = [
  '🎓 B.Tech CSE (AI) — Graduating 2026',
  '📍 Andhra Pradesh, India',
  '💼 Open to Opportunities',
  '⭐ 8.3 CGPA'
]

export default function About() {
  return (
    <section id="about" className="py-28 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-30 pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(0,102,255,0.08) 0%, transparent 70%)' }} />
      <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full opacity-20 pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(0,212,255,0.06) 0%, transparent 70%)' }} />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-20 items-start">
          {/* Left — Text */}
          <FadeIn className="flex-1">
            <p className="section-tag">About Me</p>
            <h2 className="section-title mb-6">
              Building the future,<br/>
              <span className="text-gradient">one commit</span> at a time.
            </h2>
            <p className="text-slate-400 leading-relaxed mb-4 text-[15px]">
              I'm a passionate final-year B.Tech student in Computer Science & Engineering (AI) at MITS Deemed University,
              graduating in 2026 with a strong academic record (8.3 CGPA) and hands-on industry experience.
            </p>
            <p className="text-slate-400 leading-relaxed mb-8 text-[15px]">
              From real-time yoga posture detection with MediaPipe to enterprise SaaS analytics dashboards,
              I thrive on transforming complex challenges into elegant, production-ready solutions that make a real impact.
            </p>

            {/* Quick fact tags */}
            <div className="flex flex-wrap gap-3">
              {quickFacts.map(tag => (
                <span key={tag} className="px-4 py-2.5 rounded-xl bg-white/[0.03] border border-white/[0.06] text-sm text-slate-400 font-medium hover:border-electric/20 hover:bg-electric/5 transition-all duration-300">
                  {tag}
                </span>
              ))}
            </div>
          </FadeIn>

          {/* Right — Capability cards */}
          <FadeIn delay={0.15} className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {highlights.map((c, i) => (
              <motion.div
                key={c.title}
                whileHover={{ y: -4 }}
                className="glass-card p-6 group"
              >
                <div className="w-12 h-12 rounded-xl bg-electric/10 border border-electric/20 flex items-center justify-center text-2xl mb-4 group-hover:bg-electric/15 group-hover:border-electric/30 transition-all duration-300">
                  {c.icon}
                </div>
                <h3 className="font-display font-bold text-white mb-2 text-[15px]">{c.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{c.desc}</p>
              </motion.div>
            ))}
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
