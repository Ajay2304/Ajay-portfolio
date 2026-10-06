import { motion } from 'framer-motion'
import FadeIn from './FadeIn'

const certs = [
  { icon: '🧠', name: 'AI Fundamentals', issuer: 'IBM', date: '2024', color: 'border-sky-500/20 hover:border-sky-500/40' },
  { icon: '🐍', name: 'Python Data Structures', issuer: 'Coursera', date: '2024', color: 'border-emerald-500/20 hover:border-emerald-500/40' },
  { icon: '☁️', name: 'Journey to Cloud', issuer: 'IBM', date: '2023', color: 'border-violet-500/20 hover:border-violet-500/40' },
]

export default function Certifications() {
  return (
    <section id="certifications" className="relative overflow-hidden py-16 font-inter text-slate-200 px-6 lg:px-16">
      <div className="relative max-w-7xl mx-auto z-10">
        <FadeIn className="text-center mb-14">
          <div className="flex items-center justify-center gap-4 mb-2">
            <span className="h-px w-10 bg-sky-500" />
            <span className="font-inter text-sm font-medium uppercase tracking-[0.3em] text-sky-500">
              Credentials
            </span>
            <span className="h-px w-10 bg-sky-500" />
          </div>
          <h2 className="font-outfit text-4xl sm:text-5xl font-extrabold text-white">
            Professional{' '}
            <span className="bg-gradient-to-r from-blue-500 to-sky-400 bg-clip-text text-transparent">
              Certifications
            </span>
          </h2>
          <p className="text-slate-400 mt-4 max-w-md mx-auto text-sm sm:text-base font-inter">
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
                <p className="text-sm font-bold text-white group-hover:text-electric transition-colors duration-300 font-outfit">{c.name}</p>
                <p className="text-xs text-slate-400 mt-0.5 font-inter">{c.issuer} · {c.date}</p>
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
