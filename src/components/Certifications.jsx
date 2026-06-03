import { motion } from 'framer-motion'
import FadeIn from './FadeIn'

const certs = [
  { icon: '🧠', name: 'AI Fundamentals', issuer: 'IBM', date: '2024', color: 'border-sky-500/20 hover:border-sky-500/40' },
  { icon: '🐍', name: 'Python Data Structures', issuer: 'Coursera', date: '2024', color: 'border-emerald-500/20 hover:border-emerald-500/40' },
  { icon: '☁️', name: 'Journey to Cloud', issuer: 'IBM', date: '2023', color: 'border-violet-500/20 hover:border-violet-500/40' },
]

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 relative">
      {/* Background */}
      <div className="absolute top-0 left-1/4 w-72 h-72 rounded-full opacity-15 pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(0,163,255,0.08) 0%, transparent 70%)' }} />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <FadeIn className="text-center mb-14">
          <p className="section-tag justify-center">Credentials</p>
          <h2 className="section-title">Certifications</h2>
          <p className="text-slate-500 mt-4 max-w-md mx-auto text-[15px]">
            Professional certifications validating expertise in AI, cloud, and data science.
          </p>
        </FadeIn>

        <FadeIn delay={0.1} className="flex flex-wrap justify-center gap-5">
          {certs.map((c, i) => (
            <motion.div
              key={c.name}
              whileHover={{ y: -4, scale: 1.02 }}
              transition={{ duration: 0.2 }}
              className={`glass-card flex items-center gap-5 px-7 py-5 group cursor-default ${c.color}`}
            >
              <div className="w-12 h-12 rounded-xl bg-white/[0.04] border border-white/[0.06] flex items-center justify-center text-2xl group-hover:bg-electric/5 group-hover:border-electric/20 transition-all duration-300">
                {c.icon}
              </div>
              <div>
                <p className="text-sm font-bold text-white group-hover:text-electric transition-colors duration-300">{c.name}</p>
                <p className="text-xs text-slate-600 mt-0.5">{c.issuer} · {c.date}</p>
              </div>
              {/* Verified badge */}
              <div className="ml-2 w-5 h-5 rounded-full bg-electric/10 border border-electric/20 flex items-center justify-center">
                <svg width="10" height="10" fill="none" viewBox="0 0 24 24" stroke="#00A3FF" strokeWidth="3">
                  <polyline points="20,6 9,17 4,12" />
                </svg>
              </div>
            </motion.div>
          ))}
        </FadeIn>
      </div>
    </section>
  )
}
