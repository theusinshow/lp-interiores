'use client'

import { useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'
import { SectionLabel } from './ui/SectionLabel'

interface Project {
  id: number
  title: string
  category: string
  location: string
  area: string
  cover: string
  images: string[]
  description: string
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Apartamento Vila Nova',
    category: 'Residencial',
    location: 'São Paulo, SP',
    area: '320 m²',
    cover: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=900&q=85',
    images: [
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=900&q=85',
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=900&q=85',
      'https://images.unsplash.com/photo-1618220179428-22790b461013?w=900&q=85',
    ],
    description: 'Elegância atemporal em mármore travertino e madeira nogueira.',
  },
  {
    id: 2,
    title: 'Casa Jardins',
    category: 'Residencial',
    location: 'São Paulo, SP',
    area: '580 m²',
    cover: 'https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=900&q=85',
    images: [
      'https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=900&q=85',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=900&q=85',
      'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=900&q=85',
    ],
    description: 'Casa autoral com conceito orgânico e paleta de natureza.',
  },
  {
    id: 3,
    title: 'Cobertura Higienópolis',
    category: 'Alto Padrão',
    location: 'São Paulo, SP',
    area: '430 m²',
    cover: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=900&q=85',
    images: [
      'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=900&q=85',
      'https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e?w=900&q=85',
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=900&q=85',
    ],
    description: 'Duplex com volumes escultóricos e arte contemporânea integrada.',
  },
  {
    id: 4,
    title: 'Residência Alphaville',
    category: 'Residencial',
    location: 'Alphaville, SP',
    area: '780 m²',
    cover: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=900&q=85',
    images: [
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=900&q=85',
      'https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=900&q=85',
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=900&q=85',
    ],
    description: 'Amplitude e sofisticação em uma residência familiar exclusiva.',
  },
  {
    id: 5,
    title: 'Studio Itaim',
    category: 'Compact Luxury',
    location: 'São Paulo, SP',
    area: '120 m²',
    cover: 'https://images.unsplash.com/photo-1618220179428-22790b461013?w=900&q=85',
    images: [
      'https://images.unsplash.com/photo-1618220179428-22790b461013?w=900&q=85',
      'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=900&q=85',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=900&q=85',
    ],
    description: 'Luxo concentrado em cada metro quadrado.',
  },
]

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [hovered, setHovered] = useState(false)
  const [activeImg, setActiveImg] = useState(0)

  const handleCtaClick = () => {
    const el = document.querySelector('#contact')
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' })
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.8, delay: index * 0.07, ease: [0.16, 1, 0.3, 1] }}
      className="flex-shrink-0 w-[340px] md:w-[400px] lg:w-[460px] group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => { setHovered(false); setActiveImg(0) }}
    >
      {/* Image container */}
      <div className="relative overflow-hidden aspect-[4/5] bg-beige/20">
        <AnimatePresence mode="sync">
          <motion.div
            key={activeImg}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0"
          >
            <Image
              src={project.images[activeImg]}
              alt={`${project.title} — ${project.description}`}
              fill
              className={`object-cover object-center transition-transform duration-700 ease-premium ${
                hovered ? 'scale-105' : 'scale-100'
              }`}
              sizes="(max-width: 768px) 340px, (max-width: 1024px) 400px, 460px"
              loading="lazy"
            />
          </motion.div>
        </AnimatePresence>

        {/* Hover overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.4 }}
          className="absolute inset-0 bg-noir/40 flex flex-col justify-between p-6"
        >
          {/* Image switcher dots */}
          <div className="flex gap-2 self-end">
            {project.images.map((_, i) => (
              <button
                key={i}
                onMouseEnter={() => setActiveImg(i)}
                onClick={() => setActiveImg(i)}
                aria-label={`Ver imagem ${i + 1} do projeto ${project.title}`}
                className={`w-6 h-0.5 transition-all duration-300 ${
                  i === activeImg ? 'bg-cream' : 'bg-cream/40'
                }`}
              />
            ))}
          </div>

          {/* CTA on hover */}
          <button
            onClick={handleCtaClick}
            className="self-start btn-secondary text-cream border-cream/50 hover:border-cream py-2.5 px-5 text-micro"
          >
            Projeto semelhante →
          </button>
        </motion.div>
      </div>

      {/* Meta */}
      <div className="pt-5 pb-2">
        <div className="flex items-start justify-between gap-4 mb-2">
          <h3 className="font-serif text-[1.25rem] text-noir font-medium">{project.title}</h3>
          <span className="text-micro uppercase tracking-[0.12em] text-taupe mt-1 shrink-0">{project.area}</span>
        </div>
        <div className="flex items-center gap-3 text-caption text-taupe/70">
          <span>{project.category}</span>
          <span className="w-1 h-1 rounded-full bg-taupe/30" aria-hidden="true" />
          <span>{project.location}</span>
        </div>
        <p className="mt-2 text-caption text-taupe italic font-serif">{project.description}</p>
      </div>
    </motion.div>
  )
}

export function Portfolio() {
  const trackRef = useRef<HTMLDivElement>(null)
  const isDragging = useRef(false)
  const startX = useRef(0)
  const scrollLeft = useRef(0)

  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 })

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!trackRef.current) return
    isDragging.current = true
    startX.current = e.pageX - trackRef.current.offsetLeft
    scrollLeft.current = trackRef.current.scrollLeft
    trackRef.current.style.cursor = 'grabbing'
  }
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current || !trackRef.current) return
    e.preventDefault()
    const x = e.pageX - trackRef.current.offsetLeft
    const walk = (x - startX.current) * 1.4
    trackRef.current.scrollLeft = scrollLeft.current - walk
  }
  const handleMouseUp = () => {
    isDragging.current = false
    if (trackRef.current) trackRef.current.style.cursor = 'grab'
  }

  const handleCtaClick = () => {
    const el = document.querySelector('#contact')
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' })
  }

  return (
    <section
      id="portfolio"
      className="bg-cream-200 py-24 md:py-32 lg:py-40 overflow-hidden"
      aria-label="Portfólio de projetos"
    >
      <div className="container-maison section-padding mb-12 md:mb-16" ref={ref}>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <SectionLabel className="mb-8">Portfólio</SectionLabel>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="font-serif text-display text-noir font-light"
            >
              Projetos que{' '}
              <em className="italic text-taupe">ficam na memória.</em>
            </motion.h2>
          </div>

          <motion.button
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            onClick={handleCtaClick}
            className="btn-ghost text-noir hover:text-gold group shrink-0 self-end"
          >
            Falar sobre meu projeto
            <span className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true">→</span>
          </motion.button>
        </div>
      </div>

      {/* Horizontal scroll track */}
      <div
        ref={trackRef}
        className="flex gap-6 pl-6 md:pl-12 lg:pl-20 xl:pl-28 pr-8 overflow-x-auto cursor-grab select-none
          scrollbar-none pb-4"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        role="region"
        aria-label="Carrossel de projetos — arraste para navegar"
      >
        {projects.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} />
        ))}
        {/* End spacer */}
        <div className="flex-shrink-0 w-6 lg:w-20" aria-hidden="true" />
      </div>

      {/* Hint */}
      <div className="section-padding mt-6">
        <div className="container-maison">
          <p className="text-micro text-taupe/50 uppercase tracking-[0.14em]">
            Arraste para explorar · {projects.length} projetos
          </p>
        </div>
      </div>
    </section>
  )
}
