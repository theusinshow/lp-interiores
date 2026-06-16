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
      className={`flex items-center gap-3 ${className}`}
    >
      {/* The Étoile mark — a deliberate brand device, not a generic kicker rule. */}
      <span
        aria-hidden="true"
        className={`text-[0.7rem] leading-none ${light ? 'text-brass-100' : 'text-brass'}`}
      >
        ✦
      </span>
      <span className={`section-label ${light ? 'text-beige' : 'text-taupe'}`}>
        {children}
      </span>
    </motion.div>
  )
}
