import { motion } from 'framer-motion'
import FadeIn from './FadeIn'

const groups = [
  {
    label: 'Frontend',
    icon: '🎨',
    color: 'from-electric to-cyan',
    skills: [
      { name: 'React 19', level: 92 },
      { name: 'TypeScript', level: 85 },
      { name: 'Redux Toolkit', level: 80 },
      { name: 'Tailwind CSS', level: 90 },
      { name: 'Framer Motion', level: 78 },
      { name: 'Vite', level: 85 },
    ],
  },
  {
    label: 'Backend',
    icon: '⚙️',
    color: 'from-accent to-electric',
    skills: [
      { name: 'NestJS', level: 88 },
      { name: 'FastAPI', level: 75 },
      { name: 'Node.js', level: 85 },
      { name: 'Express', level: 82 },
      { name: 'REST APIs', level: 90 },
      { name: 'TypeORM', level: 78 },
    ],
  },
  {
    label: 'Databases',
    icon: '🗄️',
    color: 'from-cyan to-cyan-soft',
    skills: [
      { name: 'PostgreSQL', level: 85 },
      { name: 'MySQL', level: 80 },
      { name: 'MongoDB', level: 78 },
      { name: 'Redis', level: 72 },
      { name: 'JWT Auth', level: 88 },
      { name: 'OAuth 2.0', level: 75 },
    ],
  },
  {
    label: 'AI & ML',
    icon: '🤖',
    color: 'from-accent to-cyan',
    skills: [
      { name: 'YOLOv8', level: 80 },
      { name: 'MediaPipe', level: 78 },
      { name: 'OpenCV', level: 75 },
      { name: 'Scikit-learn', level: 82 },
      { name: 'TensorFlow', level: 70 },
      { name: 'Keras', level: 68 },
    ],
  },
  {
    label: 'DevOps',
    icon: '🚀',
    color: 'from-electric to-accent',
    skills: [
      { name: 'Docker', level: 80 },
      { name: 'Turborepo', level: 85 },
      { name: 'pnpm', level: 82 },
      { name: 'Git', level: 90 },
      { name: 'Linux', level: 75 },
      { name: 'CI/CD', level: 70 },
    ],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-28 relative overflow-hidden">
      {/* Background effect */}
      <div className="absolute inset-0 bg-navy-950/50" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full opacity-20 pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(0,163,255,0.1) 0%, transparent 70%)' }} />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <FadeIn className="text-center mb-16">
          <p className="section-tag justify-center">Tech Stack</p>
          <h2 className="section-title">Skills & Technologies</h2>
          <p className="text-slate-500 mt-4 max-w-lg mx-auto text-[15px]">
            Proficient across the full stack with expertise in modern frameworks, AI/ML, and cloud infrastructure.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {groups.map((g, gi) => (
            <FadeIn key={g.label} delay={gi * 0.08}>
              <div className="glass-card p-6 h-full">
                {/* Category header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-electric/10 border border-electric/20 flex items-center justify-center text-lg">
                    {g.icon}
                  </div>
                  <h3 className="font-display font-bold text-white text-lg">{g.label}</h3>
                </div>

                {/* Skill bars */}
                <div className="space-y-4">
                  {g.skills.map((s, si) => (
                    <div key={s.name}>
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-sm text-slate-400 font-medium">{s.name}</span>
                        <span className="text-xs text-slate-600 font-mono">{s.level}%</span>
                      </div>
                      <div className="h-1.5 rounded-full bg-white/[0.04] overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${s.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: gi * 0.08 + si * 0.05, ease: [0.22, 1, 0.36, 1] }}
                          className={`h-full rounded-full bg-gradient-to-r ${g.color}`}
                          style={{ boxShadow: '0 0 8px rgba(0,163,255,0.3)' }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
