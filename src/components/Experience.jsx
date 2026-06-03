import { motion } from 'framer-motion'
import FadeIn from './FadeIn'
import { useInView } from '../hooks/useInView'

const experiences = [
  {
    period: 'Jan 2026 – Jul 2026',
    role: 'Software Engineering Intern',
    company: 'Standard Insights',
    type: 'Offline',
    sub: 'SIAIS Analytics — Multi-tenant SaaS',
    bullets: [
      'Architected monorepo with Turborepo & pnpm workspaces for 5+ packages',
      'Built scalable REST APIs with NestJS, TypeORM, PostgreSQL/MySQL',
      'Implemented Redis-based caching reducing API latency by 40%',
      'Integrated Stripe payment workflows with webhook event handling',
      'Developed interactive dashboards with React 19 + Redux Toolkit',
    ],
    tags: [
      { label: 'NestJS', color: 'text-sky-400 bg-sky-500/10 border-sky-500/20' },
      { label: 'React 19', color: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20' },
      { label: 'PostgreSQL', color: 'text-violet-400 bg-violet-500/10 border-violet-500/20' },
      { label: 'Redis', color: 'text-amber-400 bg-amber-500/10 border-amber-500/20' },
    ],
  },
  {
    period: 'Mar 2025 – Jun 2025',
    role: 'Full Stack Developer Intern',
    company: 'Codec Technologies',
    type: 'Remote',
    sub: 'Real-time Task Management App',
    bullets: [
      'Built React functional components with custom hooks for state management',
      'Designed NestJS CRUD endpoints with validation middleware',
      'Implemented MongoDB schemas with dynamic filtering & pagination',
      'Created file upload & image storage APIs for user profiles',
      'Containerized entire stack with Docker for consistent deployment',
    ],
    tags: [
      { label: 'React', color: 'text-sky-400 bg-sky-500/10 border-sky-500/20' },
      { label: 'NestJS', color: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20' },
      { label: 'MongoDB', color: 'text-violet-400 bg-violet-500/10 border-violet-500/20' },
      { label: 'Docker', color: 'text-amber-400 bg-amber-500/10 border-amber-500/20' },
    ],
  },
  {
    period: 'Jun 2024 – Aug 2024',
    role: 'ML Engineer Intern',
    company: 'Pragyashal Pvt. Ltd.',
    type: 'Remote',
    sub: 'Anomaly Detection in Transactions',
    bullets: [
      'Developed ML models for anomaly detection in large-scale transaction data',
      'Applied SMOTE resampling & feature engineering improving recall by 35%',
      'Implemented cross-validation and AUC/PR metrics for model evaluation',
    ],
    tags: [
      { label: 'Python', color: 'text-sky-400 bg-sky-500/10 border-sky-500/20' },
      { label: 'Scikit-learn', color: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20' },
      { label: 'Pandas', color: 'text-violet-400 bg-violet-500/10 border-violet-500/20' },
      { label: 'NumPy', color: 'text-amber-400 bg-amber-500/10 border-amber-500/20' },
    ],
  },
]

function TimelineCard({ exp, idx }) {
  const [ref, inView] = useInView()
  const isEven = idx % 2 === 0

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: isEven ? -30 : 30 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.7, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="relative flex gap-6"
    >
      {/* Timeline line + dot */}
      <div className="hidden lg:flex flex-col items-center">
        {/* Glowing dot */}
        <div className="relative">
          <div className="w-3.5 h-3.5 rounded-full bg-electric flex-shrink-0 mt-2 relative z-10" />
          <div className="absolute inset-0 w-3.5 h-3.5 rounded-full bg-electric mt-2 animate-ping opacity-30" />
        </div>
        {idx < experiences.length - 1 && (
          <div className="w-px flex-1 mt-3"
            style={{ background: 'linear-gradient(180deg, rgba(0,163,255,0.3), rgba(0,163,255,0.05))' }} />
        )}
      </div>

      {/* Card */}
      <div className="glass-card p-6 lg:p-8 flex-1 mb-8">
        {/* Header */}
        <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
          <div>
            <div className="flex items-center gap-3 mb-1">
              <span className="text-electric text-sm font-semibold">{exp.period}</span>
              <span className="px-2.5 py-0.5 rounded-full bg-electric/10 border border-electric/20 text-[10px] font-bold text-electric uppercase tracking-wider">
                {exp.type}
              </span>
            </div>
            <h3 className="font-display font-bold text-xl text-white mt-1">{exp.role}</h3>
            <p className="text-slate-500 text-sm mt-0.5">{exp.company}</p>
          </div>
        </div>

        <p className="text-xs text-slate-600 font-mono tracking-wide mb-4 px-3 py-1.5 rounded-lg bg-white/[0.02] border border-white/[0.04] inline-block">
          {exp.sub}
        </p>

        {/* Bullet points */}
        <ul className="space-y-2.5 mb-6">
          {exp.bullets.map(b => (
            <li key={b} className="flex gap-3 text-sm text-slate-400 leading-relaxed">
              <span className="text-electric mt-0.5 flex-shrink-0 text-xs">▹</span>
              {b}
            </li>
          ))}
        </ul>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-2">
          {exp.tags.map(t => (
            <span key={t.label} className={`text-xs px-3 py-1.5 rounded-lg border font-medium ${t.color}`}>
              {t.label}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default function Experience() {
  return (
    <section id="experience" className="py-28 relative">
      {/* Background effect */}
      <div className="absolute top-1/3 right-0 w-96 h-96 rounded-full opacity-15 pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(0,163,255,0.1) 0%, transparent 70%)' }} />

      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <FadeIn className="text-center mb-16">
          <p className="section-tag justify-center">Career</p>
          <h2 className="section-title">Work Experience</h2>
          <p className="text-slate-500 mt-4 max-w-lg mx-auto text-[15px]">
            Professional experience across full-stack development, AI engineering, and enterprise SaaS.
          </p>
        </FadeIn>

        <div>
          {experiences.map((exp, i) => (
            <TimelineCard key={exp.company} exp={exp} idx={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
