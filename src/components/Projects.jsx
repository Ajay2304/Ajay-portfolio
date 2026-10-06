import { motion } from 'framer-motion'
import FadeIn from './FadeIn'
import { useInView } from '../hooks/useInView'

const projects = [
  {
    emoji: '🧘',
    title: 'Yoga Posture Correction',
    badge: 'AI · Computer Vision',
    badgeColor: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20',
    gradient: 'from-emerald-500/20 to-cyan/20',
    accentColor: '#10b981',
    desc: 'Real-time AI yoga posture detection using MediaPipe Pose for skeletal landmark tracking, angle analysis, and live audio feedback for pose correction.',
    tags: ['React', 'FastAPI', 'MediaPipe', 'Python', 'WebRTC'],
    github: 'https://github.com/Ajay2304',
    demo: null,
  },
  {
    emoji: '📊',
    title: 'Sales Management Dashboard',
    badge: 'Full Stack',
    badgeColor: 'text-sky-400 bg-sky-500/10 border-sky-500/20',
    gradient: 'from-sky-500/20 to-violet-500/20',
    accentColor: '#0ea5e9',
    desc: 'Full-stack enterprise dashboard featuring secure JWT authentication, CRUD workflows with soft-deletes, inventory management, and revenue analytics.',
    tags: ['React', 'TypeScript', 'Express', 'MongoDB', 'JWT'],
    github: 'https://github.com/Ajay2304',
    demo: null,
  },
  {
    emoji: '💳',
    title: 'Credit Card Fraud Detection',
    badge: 'Machine Learning',
    badgeColor: 'text-violet-400 bg-violet-500/10 border-violet-500/20',
    gradient: 'from-violet-500/20 to-pink-500/20',
    accentColor: '#8b5cf6',
    desc: 'End-to-end ML classification pipeline utilizing SMOTE for extreme class imbalance, evaluating Logistic Regression, Random Forest, and XGBoost with AUC-ROC metrics.',
    tags: ['Python', 'Scikit-learn', 'SMOTE', 'AUC-ROC', 'Pandas'],
    github: 'https://github.com/Ajay2304',
    demo: null,
  },
]

function ProjectCard({ project, idx }) {
  const [ref, inView] = useInView()

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: idx * 0.12, ease: [0.22, 1, 0.36, 1] }}
      className="glass-card overflow-hidden flex flex-col group relative"
    >
      {/* Top gradient accent */}
      <div className="h-1 w-full relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{ background: `linear-gradient(90deg, ${project.accentColor}, #00D4FF)` }} />
        <div className="absolute inset-0 bg-white/[0.06]" />
      </div>

      {/* Content */}
      <div className="p-7 flex-1">
        {/* Header */}
        <div className="flex items-start justify-between mb-5">
          <div className="w-12 h-12 rounded-xl bg-white/[0.04] border border-white/[0.06] flex items-center justify-center text-2xl group-hover:border-electric/20 group-hover:bg-electric/5 transition-all duration-300">
            {project.emoji}
          </div>
          <span className={`text-[10px] px-3 py-1.5 rounded-full border font-bold uppercase tracking-wider ${project.badgeColor}`}>
            {project.badge}
          </span>
        </div>

        <h3 className="font-display font-bold text-lg text-white mb-3 group-hover:text-electric transition-colors duration-300">
          {project.title}
        </h3>
        <p className="text-sm text-slate-500 leading-relaxed mb-6">{project.desc}</p>

        {/* Separator with animation */}
        <div className="relative h-px bg-white/[0.04] mb-6 overflow-hidden rounded-full">
          <div className="absolute inset-y-0 left-0 w-0 group-hover:w-full transition-all duration-700 ease-out"
            style={{ background: `linear-gradient(90deg, ${project.accentColor}, transparent)` }} />
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {project.tags.map(t => (
            <span key={t} className="text-xs px-2.5 py-1.5 rounded-lg bg-white/[0.03] text-slate-500 border border-white/[0.05] font-medium">
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Footer with links */}
      <div className="px-7 pb-6 flex items-center gap-5">
        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 text-sm text-electric hover:text-cyan transition-colors duration-300 font-medium group/link"
        >
          <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24" className="group-hover/link:scale-110 transition-transform duration-200">
            <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0 0 22 12.017C22 6.484 17.522 2 12 2z"/>
          </svg>
          Source Code
        </a>
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-sm text-slate-500 hover:text-white transition-colors duration-300 group/link"
          >
            <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" className="group-hover/link:scale-110 transition-transform duration-200">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
              <polyline points="15,3 21,3 21,9"/>
              <line x1="10" y1="14" x2="21" y2="3"/>
            </svg>
            Live Demo
          </a>
        )}
      </div>

      {/* Hover glow effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ background: `radial-gradient(circle at 50% 0%, ${project.accentColor}08, transparent 60%)` }} />
    </motion.div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="relative overflow-hidden py-16 font-inter text-slate-200 px-6 lg:px-16">
      <div className="relative max-w-7xl mx-auto z-10">
        <FadeIn className="text-center mb-14">
          <div className="flex items-center justify-center gap-4 mb-2">
            <span className="h-px w-10 bg-sky-500" />
            <span className="font-inter text-sm font-medium uppercase tracking-[0.3em] text-sky-500">
              Portfolio
            </span>
            <span className="h-px w-10 bg-sky-500" />
          </div>
          <h2 className="font-outfit text-4xl sm:text-5xl font-extrabold text-white">
            Featured{' '}
            <span className="bg-gradient-to-r from-blue-500 to-sky-400 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-slate-400 mt-4 max-w-lg mx-auto text-sm sm:text-base font-inter">
            A collection of projects showcasing full-stack development, AI/ML engineering, and system design.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <ProjectCard key={p.title} project={p} idx={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
