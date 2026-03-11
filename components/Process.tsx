'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { SectionLabel } from './ui/SectionLabel'

const steps = [
  {
    number: '01',
    title: 'Conversa inicial',
    subtitle: 'Gratuita e sem compromisso',
    body: 'Tudo começa com uma escuta. Em uma reunião de imersão, entendemos seu projeto, seus gostos, sua rotina e suas expectativas — antes de qualquer linha desenhada.',
    duration: '1 reunião',
  },
  {
    number: '02',
    title: 'Proposta e conceito',
    subtitle: 'Direção criativa única',
    body: 'Apresentamos uma proposta conceitual com referências visuais, paleta, identidade espacial e o escopo detalhado do projeto.',
    duration: '5–7 dias',
  },
  {
    number: '03',
    title: 'Desenvolvimento do projeto',
    subtitle: 'Precisão técnica + estética',
    body: 'Desenvolvemos plantas, perspectivas 3D, especificações de materiais, mobiliário e iluminação. Você acompanha cada etapa com aprovações claras.',
    duration: '3–6 semanas',
  },
  {
    number: '04',
    title: 'Curadoria e compras',
    subtitle: 'Materiais e peças exclusivas',
    body: 'Gerenciamos todo o processo de compra: móveis, revestimentos, louças, tecidos, arte e objetos de decoração. Acesso a fornecedores exclusivos.',
    duration: 'Paralelo à obra',
  },
  {
    number: '05',
    title: 'Acompanhamento de obra',
    subtitle: 'Presença ativa no canteiro',
    body: 'Visitas regulares, reuniões com engenheiro e empreiteira, controle de qualidade de execução e resolução ágil de imprevistos.',
    duration: 'Duração da obra',
  },
  {
    number: '06',
    title: 'Entrega e styling',
    subtitle: 'O momento mais esperado',
    body: 'Realizamos a entrega final com montagem de mobiliário, disposição de objetos e staging completo. O seu espaço pronto para ser vivido.',
    duration: '1–2 dias',
  },
]

export function Process() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 })

  return (
    <section
      id="process"
      className="bg-brown section-padding py-24 md:py-32 lg:py-40"
      aria-label="Processo de atendimento"
    >
      <div className="container-maison" ref={ref}>
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16 lg:mb-24">
          <div>
            <SectionLabel light className="mb-8">Como trabalhamos</SectionLabel>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="font-serif text-display text-cream font-light"
            >
              Método que
              <br />
              <em className="italic text-beige/70">elimina imprevistos.</em>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="text-body-lg text-beige/60 font-sans font-light self-end max-w-lg"
          >
            Cada etapa é planejada para que você experiencie o processo com leveza,
            confiança e total clareza — sem surpresas, sem ruídos, sem retrabalho.
          </motion.p>
        </div>

        {/* Steps grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-taupe/20">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.8,
                delay: 0.1 + i * 0.07,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="bg-brown-200 p-8 lg:p-10 group hover:bg-noir transition-colors duration-400 ease-premium"
            >
              {/* Number */}
              <div className="flex items-start justify-between mb-6">
                <span className="font-serif text-[2.8rem] text-beige/20 font-light leading-none group-hover:text-gold/20 transition-colors duration-400">
                  {step.number}
                </span>
                <span className="text-micro uppercase tracking-[0.14em] text-taupe-100/50 mt-2">
                  {step.duration}
                </span>
              </div>

              <h3 className="font-serif text-heading text-cream font-medium mb-1">
                {step.title}
              </h3>
              <p className="text-micro uppercase tracking-[0.12em] text-gold/60 mb-4">
                {step.subtitle}
              </p>
              <p className="text-body text-beige/50 font-sans leading-relaxed">
                {step.body}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="mt-14 flex flex-col sm:flex-row items-start sm:items-center gap-6"
        >
          <button
            onClick={() => {
              const el = document.querySelector('#contact')
              if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' })
            }}
            className="btn-primary bg-cream text-noir hover:bg-beige group"
          >
            Iniciar meu projeto
            <span className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true">→</span>
          </button>
          <p className="text-caption text-beige/40 font-sans italic">
            Primeira conversa gratuita e sem compromisso.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
