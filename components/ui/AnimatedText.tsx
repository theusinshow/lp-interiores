'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

interface AnimatedTextProps {
  children: React.ReactNode
  className?: string
  delay?: number
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span' | 'div'
}

export function AnimatedText({
  children,
  className = '',
  delay = 0,
  as: Tag = 'div',
}: AnimatedTextProps) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      <Tag className={className}>{children}</Tag>
    </motion.div>
  )
}
