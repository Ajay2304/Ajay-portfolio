import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'

export default function FadeIn({ children, delay = 0, direction = 'up', className = '' }) {
  const [ref, inView] = useInView()

  const variants = {
    hidden: {
      opacity: 0,
      y: direction === 'up' ? 30 : direction === 'down' ? -30 : 0,
      x: direction === 'left' ? 30 : direction === 'right' ? -30 : 0,
    },
    show: {
      opacity: 1, y: 0, x: 0,
      transition: { duration: 0.65, delay, ease: 'easeOut' },
    },
  }

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={inView ? 'show' : 'hidden'}
      className={className}
    >
      {children}
    </motion.div>
  )
}
