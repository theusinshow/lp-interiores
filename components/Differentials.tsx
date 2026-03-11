'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { SectionLabel } from './ui/SectionLabel'

const differentials = [
  {
    number: '01',
    title: 'Escuta antes do traço',
    body: 'Todo projeto começa com uma imersão no seu universo — sua rotina, sua estética, seus desejos conscientes e não ditos. Só então começamos a projetar.',
  },
  {
    number: '02',
    title: 'Curadoria de materiais nobres',
    body: 'Selecionamos cada revestimento, tecido, peça e acabamento com rigor técnico e sensibilidade estética. Nada genérico. Tudo escolhido para você.',
  },
  {
    number: '03',
    title: 'Presença total na execução',
    body: 'Acompanhamos cada fase da obra com visitas regulares, gestão ativa de fornecedores e controle rigoroso de prazos e qualidade.',
  },
  {
    number: '04',
    title: 'Projetos exclusivos, não templates',
    body: 'Cada ambiente que entregamos é inédito. Não replicamos fórmulas. O seu projeto reflete apenas você.',
  },
  {
    number: '05',
    title: 'Número selecionado de clientes',
    body: 'Trabalhamos com poucos projetos simultâneos por escolha — para garantir dedicação total e um atendimento à altura do seu padrão de exigência.',
  },
]

export function Differentials() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.08 })

  return (
    <section
      id="differentials"
      className="bg-cream section-padding py-24 md:py-32 lg:py-40"
      aria-label="Diferenciais do estúdio"
    >
      <div className="container-maison" ref={ref}>
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16 lg:mb-24">
          <div>
            <SectionLabel className="mb-8">Por que a Maison Étoile</SectionLabel>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="font-serif text-display text-noir font-light text-balance"
            >
              O que nos define{' '}
              <br className="hidden md:block" />
              <em className="italic text-taupe">é o que entregamos.</em>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="text-body-lg text-taupe font-sans font-light self-end max-w-lg leading-relaxed"
          >
            Não somos um escritório de arquitetura convencional. Somos um estúdio boutique
            que trata cada projeto com a precisão de uma obra de arte — e a responsabilidade
            de quem habita o espaço.
          </motion.p>
        </div>

        {/* Differentials grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-beige/40">
          {differentials.map((item, i) => (
            <motion.div
              key={item.number}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.8,
                delay: 0.1 + i * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="bg-cream p-8 lg:p-10 group hover:bg-cream-100 transition-colors duration-400"
            >
              <span className="block font-serif text-[3.5rem] text-beige/60 font-light leading-none mb-6 group-hover:text-gold/30 transition-colors duration-400">
                {item.number}
              </span>
              <h3 className="font-serif text-heading text-noir font-medium mb-4">
                {item.title}
              </h3>
              <p className="text-body text-taupe font-sans leading-relaxed">
                {item.body}
              </p>
            </motion.div>
          ))}

          {/* Fill empty slot for 3-col grid */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="bg-brown hidden lg:flex items-end p-10"
          >
            <div>
              <p className="font-serif text-[1.5rem] text-cream/80 font-light italic mb-4 leading-snug">
                &ldquo;Cada detalhe<br />é uma decisão.&rdquo;
              </p>
              <span className="text-micro uppercase tracking-[0.16em] text-beige/50">
                Isabela Monteiro
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
