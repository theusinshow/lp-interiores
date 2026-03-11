'use client'

import { motion } from 'framer-motion'

interface SectionLabelProps {
  children: React.ReactNode
  className?: string
  light?: boolean
}

export function SectionLabel({ children, className = '', light = false }: SectionLabelProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -12 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`flex items-center gap-4 ${className}`}
    >
      <span className={`block w-8 h-px ${light ? 'bg-beige/60' : 'bg-gold'}`} />
      <span className={`section-label ${light ? 'text-beige/70' : 'text-taupe'}`}>
        {children}
      </span>
    </motion.div>
  )
}
