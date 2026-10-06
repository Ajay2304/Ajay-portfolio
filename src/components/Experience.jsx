import { motion } from 'framer-motion'
import FadeIn from './FadeIn'
import { useInView } from '../hooks/useInView'
import { FaMapMarkerAlt } from 'react-icons/fa'
import Lanyard from './Lanyard'
import aboutPic from '../assets/About_pic.png'

const experiences = [
  {
    period: 'July 2026 – Present',
    role: 'Junior Developer',
    company: 'Standard Insights',
    type: 'Onsite',
    location: 'Chennai, India',
    sub: 'Enterprise List View Systems & Ticket Automation',
    bullets: [
      'Built a customizable list view system with configurable columns, filters, saved views, and CSV export across 6 modules.',
      'Developed reusable table, header, and layout components to standardize list pages and improve maintainability.',
      'Enhanced the Item List module with 40+ configurable attributes as dynamic columns for flexible data views.',
      'Diagnosed and resolved a Ticketing module issue that captured incorrect page URLs during ticket creation.',
    ],
    tags: [
      { label: 'React & TS', color: 'text-sky-300 bg-blue-500/20 border-blue-400/30' },
      { label: 'Dynamic Tables', color: 'text-sky-300 bg-blue-500/20 border-blue-400/30' },
      { label: 'Tailwind CSS', color: 'text-sky-300 bg-blue-500/20 border-blue-400/30' },
      { label: 'REST APIs', color: 'text-sky-300 bg-blue-500/20 border-blue-400/30' },
    ],
  },
  {
    period: 'Jan 2026 – June 2026',
    role: 'Full Stack Developer Intern',
    company: 'Standard Insights',
    type: 'Onsite',
    location: 'Chennai, India',
    sub: 'Turborepo Monorepo, Nest.JS APIs & Redis Caching',
    bullets: [
      'Developed reusable React and TypeScript UI components and layouts using Tailwind CSS within a Turborepo monorepo.',
      'Implemented Redis-based caching to improve application performance and reduce API response latency.',
      'Developed backend features using Nest.JS and REST APIs for the Organization module and User-Organization mapping.',
      'Worked with BullMQ, Redis, Python forecasting microservices, and Docker for background processing and service development.',
    ],
    tags: [
      { label: 'Turborepo', color: 'text-sky-300 bg-blue-500/20 border-blue-400/30' },
      { label: 'Nest.JS', color: 'text-sky-300 bg-blue-500/20 border-blue-400/30' },
      { label: 'Redis & BullMQ', color: 'text-sky-300 bg-blue-500/20 border-blue-400/30' },
      { label: 'Python & Docker', color: 'text-sky-300 bg-blue-500/20 border-blue-400/30' },
    ],
  },
  {
    period: 'June 2024 – August 2024',
    role: 'Machine Learning Engineer Intern',
    company: 'Pragyashal Private Limited',
    type: 'Remote',
    location: 'Remote',
    sub: 'Anomaly Detection in Large Transaction Datasets',
    bullets: [
      'Designed and implemented machine learning models to detect anomalies within large-scale transaction datasets.',
      'Applied resampling strategies and feature engineering techniques to improve precision and recall on minority classes.',
      'Conducted model validation using AUC/PR metrics and cross-validation to ensure robust model performance.',
    ],
    tags: [
      { label: 'Python', color: 'text-sky-300 bg-blue-500/20 border-blue-400/30' },
      { label: 'Scikit-learn', color: 'text-sky-300 bg-blue-500/20 border-blue-400/30' },
      { label: 'Feature Engineering', color: 'text-sky-300 bg-blue-500/20 border-blue-400/30' },
      { label: 'AUC/PR Validation', color: 'text-sky-300 bg-blue-500/20 border-blue-400/30' },
    ],
  },
]

function TimelineCard({ exp, idx }) {
  const [ref, inView] = useInView()
  const isEven = idx % 2 === 0

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30, x: isEven ? -20 : 20 }}
      animate={inView ? { opacity: 1, y: 0, x: 0 } : {}}
      transition={{ duration: 0.7, delay: idx * 0.15, ease: [0.22, 1, 0.36, 1] }}
      className="relative flex gap-4 lg:gap-6"
    >
      {/* Timeline line + dot */}
      <div className="hidden sm:flex flex-col items-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={inView ? { scale: 1 } : {}}
          transition={{ type: 'spring', stiffness: 300, damping: 20, delay: idx * 0.15 + 0.1 }}
          className="relative"
        >
          <div className="w-4 h-4 rounded-full bg-sky-400 flex-shrink-0 mt-2 relative z-10 shadow-[0_0_12px_rgba(56,189,248,0.8)]" />
          <div className="absolute inset-0 w-4 h-4 rounded-full bg-sky-400 mt-2 animate-ping opacity-40" />
        </motion.div>

        {idx < experiences.length - 1 && (
          <motion.div
            initial={{ scaleY: 0 }}
            animate={inView ? { scaleY: 1 } : {}}
            transition={{ duration: 0.8, delay: idx * 0.15 + 0.3 }}
            className="w-px flex-1 mt-3 origin-top"
            style={{ background: 'linear-gradient(180deg, rgba(56,189,248,0.4), rgba(56,189,248,0.05))' }}
          />
        )}
      </div>

      {/* Card */}
      <motion.div
        whileHover={{ y: -6, transition: { duration: 0.25, ease: 'easeOut' } }}
        className="rounded-3xl p-6 lg:p-7 flex-1 mb-6 glass-card group"
      >
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-4 pb-4 border-b border-blue-500/20">
          {/* Left: Role & Company */}
          <div>
            <h3 className="font-outfit font-bold text-xl lg:text-2xl text-white group-hover:text-sky-300 transition-colors duration-300">
              {exp.role}
            </h3>
            <p className="font-outfit text-sky-400 font-semibold text-sm mt-1">{exp.company}</p>
          </div>

          {/* Right: Period & Location/Type */}
          <div className="sm:text-right flex flex-col sm:items-end gap-1.5">
            <span className="font-outfit text-sky-300 text-sm font-semibold tracking-wide">{exp.period}</span>
            <div className="flex items-center gap-2 flex-wrap sm:justify-end text-xs text-slate-300">
              <span className="px-2.5 py-0.5 rounded-full bg-blue-500/20 border border-blue-400/30 text-[10px] font-bold text-sky-300 uppercase tracking-wider font-outfit">
                {exp.type}
              </span>
              <span className="flex items-center gap-1 text-slate-300 font-inter">
                <FaMapMarkerAlt className="text-sky-400" />
                {exp.location}
              </span>
            </div>
          </div>
        </div>

        <p className="text-xs text-sky-300/90 font-mono tracking-wide mb-4 px-3 py-1.5 rounded-lg bg-blue-500/10 border border-blue-400/20 inline-block">
          {exp.sub}
        </p>

        {/* Bullet points with stagger animation */}
        <ul className="space-y-2.5 mb-6">
          {exp.bullets.map((b, bIdx) => (
            <motion.li
              key={b}
              initial={{ opacity: 0, x: -10 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.4, delay: idx * 0.15 + 0.2 + bIdx * 0.08 }}
              whileHover={{ x: 4, transition: { duration: 0.2 } }}
              className="flex gap-3 text-sm text-slate-300 leading-relaxed font-inter group/bullet cursor-default"
            >
              <span className="text-sky-400 group-hover/bullet:text-sky-300 mt-0.5 flex-shrink-0 text-xs transition-colors duration-200">
                ▹
              </span>
              {b}
            </motion.li>
          ))}
        </ul>

        {/* Tech tags with spring hover */}
        <div className="flex flex-wrap gap-2">
          {exp.tags.map(t => (
            <motion.span
              key={t.label}
              whileHover={{ scale: 1.08, y: -2 }}
              transition={{ type: 'spring', stiffness: 400, damping: 15 }}
              className={`text-xs px-3 py-1.5 rounded-lg border font-outfit font-medium cursor-default ${t.color}`}
            >
              {t.label}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function Experience() {
  return (
    <section id="experience" className="relative overflow-hidden pt-8 pb-16 font-inter text-slate-200 px-4 sm:px-6 lg:px-12">
      <div className="relative max-w-7xl mx-auto z-10">
        {/* 2-Column Responsive Layout: Left 3D Lanyard, Right Header & Career Timeline */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Pure 3D Interactive Lanyard starting at the top */}
          <div className="lg:col-span-5 lg:sticky lg:top-8 flex justify-center items-center">
            <div className="w-full h-[650px] sm:h-[720px] lg:h-[780px] relative flex justify-center items-center">
              <Lanyard
                position={[0, 0.1, 17]}
                gravity={[0, -40, 0]}
                frontImage={aboutPic}
                imageFit="cover"
                lanyardWidth={1}
                className="w-full h-full"
              />
            </div>
          </div>

          {/* Right Column: Section Header + Career Timeline */}
          <div className="lg:col-span-7 pt-4">
            <FadeIn className="mb-10 text-left">
              <div className="flex items-center gap-3 mb-2">
                <span className="h-px w-8 bg-sky-500" />
                <span className="font-inter text-xs sm:text-sm font-medium uppercase tracking-[0.25em] text-sky-500">
                  Career Journey
                </span>
              </div>
              <h2 className="font-outfit text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
                Work{' '}
                <span className="bg-gradient-to-r from-blue-500 to-sky-400 bg-clip-text text-transparent">
                  Experience
                </span>
              </h2>
              <p className="text-slate-400 mt-3 text-sm sm:text-base font-inter max-w-xl">
                Professional roles across full-stack software development, AI engineering, and enterprise SaaS systems.
              </p>
            </FadeIn>

            <div>
              {experiences.map((exp, i) => (
                <TimelineCard key={`${exp.role}-${i}`} exp={exp} idx={i} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
