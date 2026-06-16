'use client'

import { MotionConfig } from 'framer-motion'

/**
 * App-wide motion policy. `reducedMotion="user"` makes Framer honor the OS
 * "reduce motion" setting for every motion component at once: transform and
 * layout animations are disabled (no slides, scales, or parallax) while opacity
 * fades are kept. This covers all scroll-reveal entrances without per-component
 * guards. Imperative animations (e.g. the count-up) still gate on
 * useReducedMotion() at their call site.
 */
export function MotionProvider({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>
}
