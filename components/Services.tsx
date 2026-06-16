'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'
import { SectionLabel } from './ui/SectionLabel'

const services = [
  {
    title: 'Projeto Residencial Completo',
    body: 'Do conceito à entrega: planejamento total do espaço, gestão de obra e styling final. Para quem deseja zero preocupação e resultado impecável.',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=700&q=80',
    tag: 'Mais solicitado',
  },
  {
    title: 'Interiores Personalizados',
    body: 'Design de ambientes específicos: sala, dormitório, escritório, banheiro. Cada espaço tratado como uma obra em si, com atenção irrestrita.',
    image: 'https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=700&q=80',
    tag: null,
  },
  {
    title: 'Mobiliário Sob Medida',
    body: 'Desenvolvimento e produção de móveis exclusivos em parceria com marceneiros e ateliês selecionados. Peças que não existem em catálogo, porque são suas.',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=700&q=80',
    tag: null,
  },
  {
    title: 'Curadoria de Materiais',
    body: 'Seleção criteriosa de revestimentos, tecidos, metais, vidros e acabamentos de alto padrão. Acesso a fornecedores exclusivos nacionais e internacionais.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=700&q=80',
    tag: null,
  },
  {
    title: 'Acompanhamento de Execução',
    body: 'Gestão ativa da obra com visitas regulares, supervisão técnica e comunicação transparente. Para quem contratou outro arquiteto mas precisa de rigor na execução.',
    image: 'https://images.unsplash.com/photo-1503174971373-b1f69850bded?w=700&q=80',
    tag: null,
  },
  {
    title: 'Consultoria Estratégica',
    body: 'Sessão de consultoria para projetos em andamento, revisão de layouts, definição de paleta e direção de compra. Clareza e direção em poucas horas.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=700&q=80',
    tag: null,
  },
]

export function Services() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 })
  const [featured, ...rest] = services

  const handleCtaClick = () => {
    const el = document.querySelector('#contact')
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' })
  }

  return (
    <section
      id="services"
      className="bg-beige/30 section-padding py-24 md:py-32 lg:py-40"
      aria-label="Serviços oferecidos"
    >
      <div className="container-maison" ref={ref}>
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16 lg:mb-20">
          <div>
            <SectionLabel className="mb-8">Serviços</SectionLabel>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="font-serif text-display text-noir"
            >
              O que podemos
              <br />
              <em className="not-italic text-brass">construir juntos.</em>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-body text-taupe-300 font-sans max-w-sm self-end"
          >
            Projetos residenciais acima de R$ 300 mil de investimento total.
            Atendemos em São Paulo e capitais selecionadas.
          </motion.p>
        </div>

        {/* Featured service — the flagship offering, given its own weight */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
          className="group grid md:grid-cols-2 bg-cream overflow-hidden mb-16 lg:mb-20"
        >
          <div className="relative aspect-[4/3] md:aspect-auto md:min-h-[24rem] overflow-hidden">
            <Image
              src={featured.image}
              alt={`${featured.title}, projeto residencial completo da Maison Étoile`}
              fill
              className="object-cover object-center transition-transform duration-700 ease-premium group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 50vw"
              loading="lazy"
            />
            {featured.tag && (
              <div className="absolute top-5 left-5 bg-brass text-cream text-micro uppercase tracking-[0.12em] px-3 py-1.5">
                {featured.tag}
              </div>
            )}
          </div>
          <div className="flex flex-col justify-center p-8 lg:p-14">
            <span className="text-micro uppercase tracking-[0.14em] text-brass mb-5">
              Serviço principal
            </span>
            <h3 className="font-serif text-heading text-noir mb-5">{featured.title}</h3>
            <p className="text-body-lg text-taupe-300 font-sans leading-relaxed mb-8 max-w-md">
              {featured.body}
            </p>
            <button onClick={handleCtaClick} className="btn-primary self-start group/btn">
              Solicitar proposta
              <span className="transition-transform duration-300 group-hover/btn:translate-x-1" aria-hidden="true">→</span>
            </button>
          </div>
        </motion.div>

        {/* Remaining services — an editorial list of offerings, not a card matrix */}
        <div className="grid md:grid-cols-2 gap-x-14">
          {rest.map((service, i) => (
            <motion.button
              key={service.title}
              onClick={handleCtaClick}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.15 + i * 0.07, ease: [0.16, 1, 0.3, 1] }}
              className="group/item text-left border-t border-beige/60 py-7 flex items-start gap-5
                transition-colors duration-400 hover:border-brass/50"
            >
              <span className="flex-1">
                <span className="flex items-center justify-between gap-4">
                  <span className="font-serif text-title text-noir transition-colors duration-300 group-hover/item:text-brass-300">
                    {service.title}
                  </span>
                  <span
                    className="text-brass shrink-0 -translate-x-1 opacity-0 transition-all duration-300 group-hover/item:translate-x-0 group-hover/item:opacity-100"
                    aria-hidden="true"
                  >
                    →
                  </span>
                </span>
                <span className="block mt-2 text-body text-taupe-300 font-sans leading-relaxed pr-6">
                  {service.body}
                </span>
              </span>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  )
}
