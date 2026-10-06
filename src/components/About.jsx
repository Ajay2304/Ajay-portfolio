import { motion, useReducedMotion } from 'framer-motion'
import { FaCode, FaGraduationCap, FaUsers, FaLaptopCode, FaBrain, FaRegLightbulb } from 'react-icons/fa6'
import photo from '../assets/about_pic0.png'

/* ---------- small building blocks ---------- */

function IconCircle({ children, className = '' }) {
  return (
    <span className={`grid place-items-center rounded-full bg-gradient-to-br from-blue-500/30 to-blue-700/20 border border-blue-400/30 text-sky-400 ${className}`}>
      {children}
    </span>
  )
}

// Badge that floats up/down forever (each one gets its own duration/delay)
function FloatBadge({ icon, value, label, className, duration = 5, delay = 0 }) {
  const reduce = useReducedMotion()
  return (
    <motion.div
      className={`absolute z-20 flex items-center gap-3 rounded-2xl px-4 py-3 glass-card ${className}`}
      animate={reduce ? undefined : { y: [0, -10, 0] }}
      transition={{ duration, delay, repeat: Infinity, ease: 'easeInOut' }}
    >
      <IconCircle className="h-11 w-11 text-lg">{icon}</IconCircle>
      <div className="leading-tight">
        <p className="font-outfit text-2xl font-semibold text-white">{value}</p>
        <p className="font-inter text-xs text-slate-300">{label}</p>
      </div>
    </motion.div>
  )
}

function DotGrid({ rows = 5, cols = 5, className = '' }) {
  return (
    <div
      className={`absolute grid gap-3 ${className}`}
      style={{ gridTemplateColumns: `repeat(${cols}, 4px)` }}
      aria-hidden
    >
      {Array.from({ length: rows * cols }).map((_, i) => (
        <span key={i} className="h-1 w-1 rounded-full bg-sky-400/70" />
      ))}
    </div>
  )
}

const reveal = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.12 } }),
}

/* ---------- main section ---------- */

export default function About() {
  const skills = [
    { icon: <FaLaptopCode />, label: 'Full Stack Development' },
    { icon: <FaBrain />, label: 'Machine Learning' },
    { icon: <FaRegLightbulb />, label: 'Problem Solving' },
  ]

  return (
    <section
      id="about"
      className="relative overflow-hidden py-20 font-inter text-slate-200 px-6 lg:px-16"
    >
      <div className="relative mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
        {/* ================= LEFT: photo composition ================= */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="relative mx-auto aspect-square w-full max-w-[560px]"
        >
          {/* handwritten signature */}
          <span className="absolute -left-2 top-2 z-10 -rotate-12 font-caveat text-5xl leading-[0.9] text-blue-400/50">
            Ajay<br />Kumar
          </span>

          <DotGrid rows={5} cols={5} className="left-[22%] top-[6%]" />
          <DotGrid rows={6} cols={4} className="bottom-[2%] left-[2%]" />

          {/* blob + orbit ring */}
          <svg viewBox="0 0 500 500" className="absolute inset-0 h-full w-full" aria-hidden>
            <defs>
              <linearGradient id="blob" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#1e90ff" />
                <stop offset="100%" stopColor="#0b3fd6" />
              </linearGradient>
            </defs>
            <path
              d="M120 150C150 70 300 40 380 100c60 45 40 130 70 190s-20 120-110 130S120 440 90 340 100 210 120 150Z"
              fill="url(#blob)"
              opacity="0.9"
            />
            <ellipse cx="250" cy="330" rx="225" ry="140" transform="rotate(-14 250 330)"
              fill="none" stroke="#3b9bff" strokeOpacity="0.6" strokeWidth="1.5" />
            <circle cx="365" cy="52" r="9" fill="#1d8bff" />
            <circle cx="425" cy="395" r="11" fill="#1d8bff" />
          </svg>

          {/* photo (fades out at the bottom edge) */}
          <img
            src={photo}
            alt="Ajay Kumar"
            className="absolute bottom-[6%] left-1/2 z-10 h-[88%] -translate-x-1/2 object-contain"
            style={{ maskImage: 'linear-gradient(to bottom, #000 80%, transparent)' }}
          />

          <FloatBadge icon={<FaCode />} value="10+" label="Projects Built" className="left-0 top-[34%]" duration={5} />
          <FloatBadge icon={<FaGraduationCap />} value="8.4" label="CGPA Excellence" className="right-[2%] top-[18%]" duration={6} delay={0.8} />
          <FloatBadge icon={<FaUsers />} value="Full Stack" label="SaaS & AI Developer" className="bottom-[12%] right-0" duration={5.5} delay={1.4} />
        </motion.div>

        {/* ================= RIGHT: copy ================= */}
        <div>
          <motion.div variants={reveal} initial="hidden" whileInView="show" viewport={{ once: true }} custom={0}
            className="flex items-center gap-4">
            <span className="h-px w-10 bg-sky-500" />
            <span className="font-inter text-sm font-medium uppercase tracking-[0.3em] text-sky-500">
              Let me introduce myself
            </span>
          </motion.div>

          <motion.h2 variants={reveal} initial="hidden" whileInView="show" viewport={{ once: true }} custom={1}
            className="mt-4 font-outfit text-6xl font-extrabold text-white sm:text-7xl">
            About{' '}
            <span className="bg-gradient-to-r from-blue-500 to-sky-400 bg-clip-text text-transparent">Me</span>
          </motion.h2>

        

          <motion.p variants={reveal} initial="hidden" whileInView="show" viewport={{ once: true }} custom={3}
            className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">
            Junior Developer with proven expertise in building and maintaining production-grade software applications. Proficient in <strong className="font-semibold text-sky-400">Python, REST APIs, FastAPI, Nest.JS, and React full-stack development</strong>, with experience in debugging, object-oriented programming, Git, and database-driven applications. Experienced in developing clean, maintainable, and scalable software solutions.
          </motion.p>

          {/* education card */}
          <motion.div variants={reveal} initial="hidden" whileInView="show" viewport={{ once: true }} custom={4}
            className="mt-6 flex items-center gap-5 rounded-2xl p-5 glass-card">
            <IconCircle className="h-14 w-14 rounded-xl text-2xl"><FaGraduationCap /></IconCircle>
            <div className="flex-1">
              <h3 className="font-outfit text-lg font-semibold text-white">B.Tech — Computer Science &amp; Engineering</h3>
              <p className="font-medium text-sky-400">Artificial Intelligence</p>
              <p className="text-sm text-slate-400">MITS Deemed-to-be University, Andhra Pradesh</p>
            </div>
            <div className="text-right">
              <span className="rounded-lg border border-blue-400/30 bg-blue-500/20 px-3 py-1 text-sm font-semibold text-sky-300">2026</span>
              <p className="mt-3 text-sm text-slate-300">CGPA: <b className="text-white">8.4</b> / 10</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
