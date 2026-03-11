'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { SectionLabel } from './ui/SectionLabel'

const faqs = [
  {
    q: 'Qual é o investimento mínimo para um projeto?',
    a: 'Trabalhamos com projetos residenciais a partir de R$ 300 mil de investimento total na obra e decoração. Isso nos permite manter o padrão de curadoria e acompanhamento que a Maison Étoile se propõe a entregar.',
  },
  {
    q: 'Em quais cidades vocês atendem?',
    a: 'Temos base em São Paulo e atendemos regularmente Alphaville, Campinas, Balneário Camboriú e Florianópolis. Para projetos em outras cidades, avaliamos caso a caso — entre em contato para conversarmos.',
  },
  {
    q: 'Quanto tempo dura um projeto típico?',
    a: 'O desenvolvimento do projeto (prancha técnica + 3D) leva entre 3 e 6 semanas. A obra, dependendo do escopo, varia de 4 meses a 1 ano. Trabalhamos com cronograma detalhado desde o início para que você tenha previsibilidade total.',
  },
  {
    q: 'Como funciona a primeira conversa?',
    a: 'É uma reunião presencial ou por videochamada, sem compromisso e sem custo. Queremos entender seu projeto, seus gostos e expectativas — e você terá a oportunidade de nos conhecer antes de qualquer decisão.',
  },
  {
    q: 'Vocês acompanham a obra ou apenas desenvolvem o projeto?',
    a: 'Oferecemos ambas as opções. Para projetos completos, o acompanhamento de obra está incluído. Também é possível contratar apenas o desenvolvimento do projeto executivo, com suporte técnico durante a execução.',
  },
  {
    q: 'Trabalham com móveis planejados ou apenas sob medida?',
    a: 'Priorizamos mobiliário sob medida e peças autorais, mas podemos incorporar móveis de design assinado quando faz sentido para o projeto. O critério é sempre a coerência estética e funcional do espaço.',
  },
  {
    q: 'O que está incluído na curadoria de materiais?',
    a: 'Seleção de revestimentos, tecidos, acabamentos, metais, vidros, louças, iluminação e objetos decorativos. Temos acesso a fornecedores exclusivos nacionais e internacionais com condições diferenciadas para nossos clientes.',
  },
]

export function FAQ() {
  const [open, setOpen] = useState<number | null>(null)
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 })

  return (
    <section
      id="faq"
      className="bg-cream section-padding py-24 md:py-32 lg:py-40"
      aria-label="Perguntas frequentes"
    >
      <div className="container-maison" ref={ref}>
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.8fr] gap-12 lg:gap-24">
          {/* Left */}
          <div>
            <SectionLabel className="mb-8">Dúvidas frequentes</SectionLabel>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="font-serif text-display text-noir font-light mb-8 text-balance"
            >
              Respondemos
              <br />
              <em className="italic text-taupe">com clareza.</em>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="text-body text-taupe font-sans leading-relaxed"
            >
              Sua tranquilidade começa antes mesmo de assinarmos qualquer contrato.
              Aqui estão as perguntas que mais recebemos de novos clientes.
            </motion.p>
          </div>

          {/* Right: accordion */}
          <div className="divide-y divide-beige/50" role="list">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                role="listitem"
                initial={{ opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.05 + i * 0.06 }}
              >
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  aria-expanded={open === i}
                  className="w-full flex items-start justify-between gap-6 py-6 text-left group"
                >
                  <span
                    className={`font-serif text-[1.1rem] leading-snug transition-colors duration-300 ${
                      open === i ? 'text-noir' : 'text-noir/80 group-hover:text-noir'
                    }`}
                  >
                    {faq.q}
                  </span>
                  <motion.span
                    animate={{ rotate: open === i ? 45 : 0 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className={`flex-shrink-0 mt-1 w-5 h-5 flex items-center justify-center text-body transition-colors duration-300 ${
                      open === i ? 'text-gold' : 'text-taupe group-hover:text-noir'
                    }`}
                    aria-hidden="true"
                  >
                    +
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {open === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="pb-6 text-body text-taupe font-sans leading-relaxed pr-8">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
