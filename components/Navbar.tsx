'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'

const navLinks = [
  { label: 'Estúdio', href: '#studio' },
  { label: 'Portfólio', href: '#portfolio' },
  { label: 'Processo', href: '#process' },
  { label: 'Serviços', href: '#services' },
  { label: 'Contato', href: '#contact' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (href: string) => {
    setMenuOpen(false)
    const el = document.querySelector(href)
    if (el) {
      const offset = 80
      const top = el.getBoundingClientRect().top + window.scrollY - offset
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-600 ease-premium ${
          scrolled
            ? 'bg-cream/95 backdrop-blur-md border-b border-beige/60 py-4'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="container-maison section-padding flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex flex-col leading-none group"
            aria-label="Maison Étoile Interiors — Página inicial"
          >
            <span
              className={`font-serif text-[1.4rem] tracking-[0.06em] transition-colors duration-400 ${
                scrolled ? 'text-noir' : 'text-cream'
              }`}
            >
              Maison Étoile
            </span>
            <span
              className={`text-micro uppercase tracking-[0.2em] transition-colors duration-400 ${
                scrolled ? 'text-taupe' : 'text-beige/70'
              }`}
            >
              Interiors
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Navegação principal">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className={`text-label uppercase tracking-[0.1em] transition-all duration-400 ease-premium
                  hover:text-gold focus-visible:text-gold
                  ${scrolled ? 'text-taupe' : 'text-cream/80'}`}
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => handleNavClick('#contact')}
              className={`btn-secondary text-micro py-2.5 px-5 ${
                scrolled
                  ? 'text-noir border-noir hover:text-gold hover:border-gold'
                  : 'text-cream border-cream/60 hover:border-cream hover:text-gold hover:border-gold'
              }`}
            >
              Solicitar proposta
            </button>
          </nav>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={menuOpen}
            className={`md:hidden flex flex-col gap-[5px] p-2 transition-colors duration-400 ${
              scrolled ? 'text-noir' : 'text-cream'
            }`}
          >
            <motion.span
              animate={menuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
              className="block w-6 h-px bg-current origin-center transition-all duration-400"
            />
            <motion.span
              animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
              className="block w-4 h-px bg-current ml-auto transition-all duration-400"
            />
            <motion.span
              animate={menuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
              className="block w-6 h-px bg-current origin-center transition-all duration-400"
            />
          </button>
        </div>
      </motion.header>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-noir flex flex-col items-center justify-center gap-8 md:hidden"
          >
            {navLinks.map((link, i) => (
              <motion.button
                key={link.href}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                onClick={() => handleNavClick(link.href)}
                className="font-serif text-[2rem] text-cream/80 hover:text-cream tracking-wide transition-colors duration-300"
              >
                {link.label}
              </motion.button>
            ))}
            <motion.button
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: navLinks.length * 0.06, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              onClick={() => handleNavClick('#contact')}
              className="mt-4 btn-secondary text-cream border-cream/30 hover:border-gold hover:text-gold"
            >
              Solicitar proposta
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
