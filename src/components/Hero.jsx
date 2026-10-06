import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaReact, FaPython, FaNodeJs, FaBrain } from 'react-icons/fa'
import { SiMysql } from 'react-icons/si'
import profileImg from '../assets/my_pic.png'
import heroBg from '../assets/BG.png'

const roles = [
  {
    title: 'Full Stack',
    accent: 'Developer',
    gradient: 'from-[#00A3FF] via-[#38BDF8] to-[#0066FF]',
    accentBar: 'linear-gradient(180deg, #00A3FF, #0066FF)',
    glow: 'rgba(0, 163, 255, 0.6)',
  },
  {
    title: 'AI & ML',
    accent: 'Engineer',
    gradient: 'from-[#A855F7] via-[#C084FC] to-[#00A3FF]',
    accentBar: 'linear-gradient(180deg, #A855F7, #00A3FF)',
    glow: 'rgba(168, 85, 247, 0.6)',
  },
]

const techBadges = [
  {
    name: 'React',
    icon: <FaReact className="text-lg text-[#61DAFB]" />,
    style: { top: '6%', left: '8%' },
    rotate: -4,
    floatY: [-6, 6],
    duration: 4.2,
    delay: 0,
  },
  {
    name: 'Python',
    icon: <FaPython className="text-lg text-[#38BDF8]" />,
    style: { top: '16%', right: '2%' },
    rotate: 3,
    floatY: [5, -5],
    duration: 3.8,
    delay: 0.2,
  },
  {
    name: 'Node.js',
    icon: <FaNodeJs className="text-lg text-[#22C55E]" />,
    style: { top: '34%', left: '16%' },
    rotate: -3,
    floatY: [-7, 7],
    duration: 4.6,
    delay: 0.4,
  },
  {
    name: 'MySQL',
    icon: <SiMysql className="text-xl text-[#00A3FF]" />,
    style: { top: '48%', right: '4%' },
    rotate: 1,
    floatY: [6, -6],
    duration: 4.0,
    delay: 0.6,
  },
  {
    name: 'AI/ML',
    icon: <FaBrain className="text-lg text-[#C084FC]" />,
    style: { top: '66%', left: '30%' },
    rotate: -3,
    floatY: [-5, 5],
    duration: 4.4,
    delay: 0.8,
  },
]

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIdx((i) => (i + 1) % roles.length)
    }, 3200)
    return () => clearInterval(interval)
  }, [])

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay: 0.3 + i * 0.12, ease: [0.22, 1, 0.36, 1] },
    }),
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: '#060d1f' }}
    >
      {/* ---- Background image ---- */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />
      {/* ---- Noise texture overlay ---- */}
      <div className="absolute inset-0 noise-overlay pointer-events-none opacity-40" />

      {/* ---- Main content ---- */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full relative z-10">
        <div className="flex flex-col lg:flex-row items-center lg:items-end justify-between gap-8 lg:gap-0 min-h-[85vh] lg:min-h-[90vh] pt-28 pb-12 lg:pb-0">

          {/* ========== LEFT TEXT CONTENT ========== */}
          <div className="flex-1 max-w-xl lg:max-w-lg xl:max-w-xl z-20 text-center lg:text-left lg:pb-16">
            {/* Hello tag */}
            <motion.p
              variants={fadeUp}
              custom={0}
              initial="hidden"
              animate="show"
              className="text-slate-400 text-xs sm:text-sm font-semibold tracking-[0.25em] uppercase mb-5"
            >
              Hello, I'm
            </motion.p>

            {/* Big Name */}
            <motion.h1
              variants={fadeUp}
              custom={1}
              initial="hidden"
              animate="show"
              className="font-display font-black text-6xl sm:text-7xl lg:text-8xl xl:text-[6.5rem] text-white leading-[0.95] mb-6"
            >
              Ajay
              <br />
              <span className="text-gradient">Kumar</span>
            </motion.h1>

            {/* Dynamic Animated Role Rotator */}
            <motion.div
              variants={fadeUp}
              custom={2}
              initial="hidden"
              animate="show"
              className="flex items-center gap-3.5 mb-6 justify-center lg:justify-start"
            >
              {/* Dynamic Vertical Accent Bar */}
              <motion.div
                animate={{
                  background: roles[roleIdx].accentBar,
                  boxShadow: `0 0 16px ${roles[roleIdx].glow}`,
                }}
                transition={{ duration: 0.6 }}
                className="w-[3.5px] h-10 sm:h-11 rounded-full flex-shrink-0"
              />

              {/* Vertical Roll Container */}
              <div className="relative h-10 sm:h-11 flex items-center overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={roleIdx}
                    initial={{ y: 28, opacity: 0, filter: 'blur(6px)' }}
                    animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
                    exit={{ y: -28, opacity: 0, filter: 'blur(6px)' }}
                    transition={{
                      duration: 0.5,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="flex items-baseline gap-2 whitespace-nowrap"
                  >
                    <span className="font-display font-bold text-2xl sm:text-3xl text-white tracking-tight">
                      {roles[roleIdx].title}
                    </span>
                    <span
                      className={`font-display font-bold text-2xl sm:text-3xl bg-gradient-to-r ${roles[roleIdx].gradient} bg-clip-text text-transparent`}
                    >
                      {roles[roleIdx].accent}
                    </span>
                  </motion.div>
                </AnimatePresence>
              </div>
            </motion.div>

            {/* Description */}
            <motion.p
              variants={fadeUp}
              custom={3}
              initial="hidden"
              animate="show"
              className="text-slate-400 text-sm sm:text-[15px] leading-relaxed mb-8 max-w-sm mx-auto lg:mx-0"
            >
              Building scalable web applications and intelligent solutions that create real impact.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={fadeUp}
              custom={4}
              initial="hidden"
              animate="show"
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4"
            >
              <a href="#projects" className="btn-primary">
                <span className="flex items-center gap-2">
                  View My Work
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </span>
              </a>
              <a href="mailto:kallaguntaajaykumar@gmail.com" className="btn-outline">
                <span className="flex items-center gap-2">
                  Download CV
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" y1="15" x2="12" y2="3" />
                  </svg>
                </span>
              </a>
            </motion.div>
          </div>

          {/* ========== CENTER-RIGHT: PROFILE IMAGE ========== */}
          <div className="relative flex-shrink-0 lg:absolute lg:bottom-0 lg:left-1/2 lg:-translate-x-[35%] z-10">
            {/* Profile image */}
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-[300px] h-[380px] sm:w-[360px] sm:h-[450px] lg:w-[460px] lg:h-[580px] xl:w-[520px] xl:h-[640px]"
            >
              <img
                src={profileImg}
                alt="Ajay Kumar"
                className="w-full h-full object-cover object-top"
                loading="eager"
                style={{
                  maskImage: 'linear-gradient(to bottom, black 50%, transparent 95%)',
                  WebkitMaskImage: 'linear-gradient(to bottom, black 50%, transparent 95%)',
                }}
              />
            </motion.div>
          </div>

          {/* ========== RIGHT: FLOATING TECH BADGES ========== */}
          <div className="hidden lg:block relative z-20 lg:pb-12 w-[340px] xl:w-[400px]">
            <div className="relative h-[490px] xl:h-[530px]">
              {techBadges.map((badge) => (
                <motion.div
                  key={badge.name}
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ delay: 0.8 + badge.delay, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute"
                  style={badge.style}
                >
                  <motion.div
                    animate={{
                      y: badge.floatY,
                      rotate: [badge.rotate - 0.8, badge.rotate + 0.8, badge.rotate - 0.8],
                    }}
                    transition={{ repeat: Infinity, duration: badge.duration, ease: 'easeInOut' }}
                    whileHover={{ scale: 1.08, rotate: 0, transition: { duration: 0.2 } }}
                    className="group flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-[#0B1528]/85 border border-white/[0.12] backdrop-blur-xl shadow-[0_10px_30px_-5px_rgba(0,0,0,0.6)] hover:border-[#00A3FF]/50 hover:bg-[#0e1d38]/95 transition-all duration-300 cursor-default"
                  >
                    {badge.icon}
                    <span className="text-[14px] font-semibold text-slate-200 group-hover:text-white transition-colors">{badge.name}</span>
                  </motion.div>
                </motion.div>
              ))}

              {/* "Turning Ideas into Products" handwritten text */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.8, duration: 0.8 }}
                className="absolute bottom-2 right-4 xl:right-10 pointer-events-none select-none"
              >
                {/* Curved connecting arrow */}
                <svg
                  width="70"
                  height="60"
                  viewBox="0 0 70 60"
                  fill="none"
                  className="absolute -left-16 -top-3 drop-shadow-[0_2px_8px_rgba(0,163,255,0.4)]"
                >
                  <path
                    d="M8 50 C18 12, 48 10, 60 28"
                    stroke="#00A3FF"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeDasharray="4 4"
                    fill="none"
                  />
                  <path
                    d="M52 20 L60 28 L50 31"
                    stroke="#00A3FF"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                  />
                </svg>

                <div className="relative">
                  <p
                    className="text-[#00A3FF] leading-snug drop-shadow-[0_2px_12px_rgba(0,163,255,0.35)]"
                    style={{
                      fontFamily: "'Caveat', cursive",
                      fontSize: '22px',
                      fontWeight: 600,
                      transform: 'rotate(-4deg)',
                    }}
                  >
                    Turning
                    <br />
                    <span className="ml-3">Ideas</span>
                    <br />
                    <span className="ml-6">into Products</span>
                  </p>

                  {/* Underline strokes under "into Products" */}
                  <svg
                    width="115"
                    height="14"
                    viewBox="0 0 115 14"
                    fill="none"
                    className="absolute -bottom-2 right-0 drop-shadow-[0_2px_6px_rgba(0,163,255,0.4)]"
                  >
                    <path
                      d="M6 5 C38 2, 80 6, 110 3"
                      stroke="#00A3FF"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      fill="none"
                    />
                    <path
                      d="M22 10 C54 8, 92 11, 106 8"
                      stroke="#00A3FF"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      fill="none"
                    />
                  </svg>
                </div>
              </motion.div>
            </div>
          </div>

        </div>
      </div>

      {/* ---- Bottom fade to match next section bg ---- */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#081229] to-transparent pointer-events-none z-20" />
    </section>
  )
}
