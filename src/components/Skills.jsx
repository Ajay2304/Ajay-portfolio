import { useState, useRef, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const skillCategories = [
  {
    id: 'frontend',
    label: 'Frontend Engineering',
    short: 'Frontend',
    icon: '🎨',
    desc: 'Building responsive, highly-performant, and accessible user interfaces with modern React ecosystem.',
    skills: [
      { name: 'React 19', level: 95, icon: '⚛️', tag: 'Server Components · Hooks', experience: 'Expert' },
      { name: 'TypeScript', level: 90, icon: '📘', tag: 'Type-Safe Architecture · Generics', experience: 'Advanced' },
      { name: 'Tailwind CSS', level: 92, icon: '🎨', tag: 'Responsive Design · Custom Themes', experience: 'Expert' },
      { name: 'Redux Toolkit', level: 85, icon: '🔄', tag: 'Global State · RTK Query', experience: 'Advanced' },
      { name: 'Framer Motion', level: 88, icon: '✨', tag: 'Micro-Interactions · 3D Transforms', experience: 'Advanced' },
      { name: 'Vite', level: 90, icon: '⚡', tag: 'HMR · Fast Production Bundling', experience: 'Expert' },
      { name: 'Next.js', level: 82, icon: '▲', tag: 'App Router · SSR & Static Gen', experience: 'Proficient' },
      { name: 'HTML5 & Modern CSS', level: 95, icon: '🌐', tag: 'Semantic HTML · Flexbox / Grid', experience: 'Expert' },
    ],
  },
  {
    id: 'backend',
    label: 'Backend & APIs',
    short: 'Backend',
    icon: '⚙️',
    desc: 'Designing scalable REST microservices, asynchronous message queues, and bulletproof auth workflows.',
    skills: [
      { name: 'NestJS', level: 92, icon: '🦁', tag: 'Dependency Injection · Microservices', experience: 'Expert' },
      { name: 'Node.js & Express', level: 88, icon: '🟢', tag: 'Async Event Loop · Middleware', experience: 'Advanced' },
      { name: 'FastAPI (Python)', level: 85, icon: '⚡', tag: 'Pydantic · Async IO APIs', experience: 'Advanced' },
      { name: 'REST & WebSockets', level: 92, icon: '🔌', tag: 'Real-time Event Streaming', experience: 'Expert' },
      { name: 'JWT & OAuth 2.0', level: 90, icon: '🔒', tag: 'Role-Based Access Control (RBAC)', experience: 'Expert' },
      { name: 'TypeORM & Prisma', level: 85, icon: '💎', tag: 'ORM Entity Mapping · Migrations', experience: 'Advanced' },
    ],
  },
  {
    id: 'database',
    label: 'Databases & Storage',
    short: 'Databases',
    icon: '🗄️',
    desc: 'Architecting high-throughput relational schemas, low-latency caching layers, and distributed document stores.',
    skills: [
      { name: 'PostgreSQL', level: 90, icon: '🐘', tag: 'ACID Transactions · Indexing', experience: 'Expert' },
      { name: 'MongoDB', level: 86, icon: '🍃', tag: 'Aggregation Pipelines · BSON', experience: 'Advanced' },
      { name: 'Redis Cache', level: 85, icon: '🔴', tag: 'In-Memory Caching · Rate Limiting', experience: 'Advanced' },
      { name: 'MySQL', level: 84, icon: '🐬', tag: 'Relational Modeling · Complex Joins', experience: 'Advanced' },
      { name: 'Query Optimization', level: 88, icon: '⚡', tag: 'Execution Plans · Partitioning', experience: 'Advanced' },
      { name: 'Schema Architecture', level: 90, icon: '📐', tag: 'Multi-Tenant Data Design', experience: 'Expert' },
    ],
  },
  {
    id: 'ai',
    label: 'AI & Machine Learning',
    short: 'AI & ML',
    icon: '🤖',
    desc: 'Developing computer vision solutions, skeletal landmark models, and predictive classification algorithms.',
    skills: [
      { name: 'YOLOv8', level: 88, icon: '👁️', tag: 'Real-Time Object Detection', experience: 'Expert' },
      { name: 'MediaPipe Pose', level: 86, icon: '🧘', tag: '33 Skeletal Landmark Tracking', experience: 'Expert' },
      { name: 'Scikit-learn', level: 85, icon: '📊', tag: 'SMOTE · Classification · Ensemble', experience: 'Advanced' },
      { name: 'OpenCV', level: 82, icon: '📷', tag: 'Image Filtering & Perspective Warp', experience: 'Advanced' },
      { name: 'TensorFlow / Keras', level: 78, icon: '🧠', tag: 'Neural Networks & Loss Functions', experience: 'Proficient' },
      { name: 'Computer Vision', level: 85, icon: '🎯', tag: 'Pose Correction & Video Feeds', experience: 'Advanced' },
    ],
  },
  {
    id: 'devops',
    label: 'DevOps & Systems',
    short: 'DevOps',
    icon: '🚀',
    desc: 'Optimizing continuous deployment pipelines, monorepo package tooling, and containerized cloud setups.',
    skills: [
      { name: 'Docker', level: 88, icon: '🐳', tag: 'Multi-Stage Builds · Compose', experience: 'Advanced' },
      { name: 'Turborepo Monorepo', level: 90, icon: '🏎️', tag: 'Pipeline Caching · Monorepo', experience: 'Expert' },
      { name: 'pnpm Workspaces', level: 90, icon: '📦', tag: 'Symlinked Monorepo Packages', experience: 'Expert' },
      { name: 'Git & GitHub', level: 94, icon: '🐙', tag: 'Branching · PR Reviews · Hooks', experience: 'Expert' },
      { name: 'CI/CD Pipelines', level: 82, icon: '🔄', tag: 'GitHub Actions Automated CI/CD', experience: 'Advanced' },
      { name: 'Linux Server Admin', level: 80, icon: '🐧', tag: 'Bash Scripts · Nginx · Systemd', experience: 'Advanced' },
    ],
  },
]

export default function Skills() {
  const [selectedCat, setSelectedCat] = useState(skillCategories[0].id)
  const [hoveredSkill, setHoveredSkill] = useState(null)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const stageRef = useRef(null)

  const activeCategoryData = skillCategories.find(c => c.id === selectedCat) || skillCategories[0]

  const handleMouseMove = useCallback((e) => {
    if (!stageRef.current) return
    const rect = stageRef.current.getBoundingClientRect()
    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top })
  }, [])

  const handleMouseLeave = useCallback(() => {
    setMousePos({ x: -999, y: -999 })
    setHoveredSkill(null)
  }, [])

  return (
    <section id="skills" className="relative overflow-hidden py-16 font-inter text-slate-200 px-6 lg:px-16">
      <div className="relative mx-auto max-w-7xl z-10">
        
        {/* Header matched with About section design */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div>
            <div className="flex items-center gap-4">
              <span className="h-px w-10 bg-sky-500" />
              <span className="font-inter text-sm font-medium uppercase tracking-[0.3em] text-sky-500">
                Technical Proficiency
              </span>
            </div>
            <h2 className="mt-3 font-outfit text-4xl sm:text-5xl font-extrabold text-white">
              Skills &amp;{' '}
              <span className="bg-gradient-to-r from-blue-500 to-sky-400 bg-clip-text text-transparent">
                Technologies
              </span>
            </h2>
          </div>

          {/* Category Tabs Switcher styled with About design system */}
          <div className="flex flex-wrap items-center gap-2">
            {skillCategories.map(cat => {
              const isActive = selectedCat === cat.id
              return (
                <motion.button
                  key={cat.id}
                  onClick={() => setSelectedCat(cat.id)}
                  onMouseEnter={() => setSelectedCat(cat.id)}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className={`group relative flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 backdrop-blur-md cursor-pointer ${
                    isActive
                      ? 'bg-gradient-to-r from-blue-600 to-sky-500 text-white shadow-lg shadow-blue-500/25 border border-sky-400/40'
                      : 'glass-card text-slate-300 hover:text-white hover:border-blue-400/50'
                  }`}
                >
                  <span className="text-base transition-transform duration-200 group-hover:scale-110">
                    {cat.icon}
                  </span>
                  <span className="font-outfit">{cat.short}</span>
                  {isActive && (
                    <motion.span
                      layoutId="activeCategoryDot"
                      className="w-1.5 h-1.5 rounded-full bg-sky-300 shadow-sm"
                    />
                  )}
                </motion.button>
              )
            })}
          </div>
        </div>

        {/* Stage matching About glass card style */}
        <div
          ref={stageRef}
          className="relative rounded-3xl p-5 sm:p-7 glass-card overflow-hidden"
        >

          {/* Subheader description bar */}
          <div className="flex items-center justify-between gap-4 mb-5 pb-4 border-b border-blue-500/20 relative z-10 text-sm text-slate-300">
            <span className="truncate max-w-2xl font-inter">
              <strong className="text-white font-semibold font-outfit">{activeCategoryData.label}:</strong> {activeCategoryData.desc}
            </span>
            <span className="rounded-lg border border-blue-400/30 bg-blue-500/20 px-3 py-1 text-xs font-semibold text-sky-300 shrink-0 font-outfit">
              {activeCategoryData.skills.length} Core Technologies
            </span>
          </div>

          {/* Skill Cards Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategoryData.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3.5 relative z-10"
            >
              {activeCategoryData.skills.map((skill, idx) => {
                const isHovered = hoveredSkill?.name === skill.name
                return (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.96, y: 8 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{
                      duration: 0.3,
                      delay: idx * 0.025,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    onMouseEnter={() => setHoveredSkill(skill)}
                    whileHover={{
                      scale: 1.02,
                      y: -2,
                      transition: { duration: 0.15 },
                    }}
                    className={`group relative p-4 rounded-2xl border transition-all duration-200 cursor-pointer overflow-hidden flex flex-col justify-between ${
                      isHovered
                        ? 'bg-[#0b1022] border-sky-400/60 shadow-lg shadow-sky-500/10'
                        : 'bg-[#050814]/90 border-white/[0.08] hover:border-sky-400/40 hover:bg-[#080d1c]'
                    }`}
                  >
                    {/* Top ambient highlight line on hover */}
                    <div
                      className="absolute top-0 inset-x-0 h-[2px] transition-opacity duration-200 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-blue-500 to-sky-400"
                    />

                    {/* Header: Icon + Level Percentage */}
                    <div className="flex items-center justify-between mb-2.5">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500/20 to-blue-700/10 border border-blue-400/20 flex items-center justify-center text-xl group-hover:scale-105 group-hover:border-sky-400/40 transition-transform duration-200">
                        {skill.icon}
                      </div>

                      <div className="flex flex-col items-end leading-none">
                        <span className="font-outfit font-bold text-base text-white group-hover:text-sky-300 transition-colors duration-200">
                          {skill.level}%
                        </span>
                        <span className="text-[9px] text-sky-400/80 uppercase tracking-wider font-semibold mt-0.5">
                          {skill.experience}
                        </span>
                      </div>
                    </div>

                    {/* Skill Name & Tag */}
                    <div>
                      <h4 className="font-outfit font-bold text-sm text-white group-hover:text-sky-300 transition-colors duration-200 truncate">
                        {skill.name}
                      </h4>
                      <p className="text-[11px] text-slate-400 group-hover:text-slate-300 transition-colors duration-200 truncate mt-0.5 font-inter">
                        {skill.tag}
                      </p>
                    </div>

                    {/* Dynamic Progress Fill Bar */}
                    <div className="mt-3 pt-2.5 border-t border-blue-500/15">
                      <div className="h-1.5 w-full rounded-full bg-blue-950/60 overflow-hidden border border-blue-500/10">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ duration: 0.6, delay: 0.05 + idx * 0.03, ease: [0.22, 1, 0.36, 1] }}
                          className="h-full rounded-full bg-gradient-to-r from-blue-500 to-sky-400"
                          style={{
                            boxShadow: isHovered ? '0 0 10px rgba(56, 189, 248, 0.5)' : 'none',
                          }}
                        />
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  )
}

