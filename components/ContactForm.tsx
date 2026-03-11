'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import Image from 'next/image'
import { SectionLabel } from './ui/SectionLabel'

const schema = z.object({
  name: z.string().min(2, 'Informe seu nome completo'),
  email: z.string().email('E-mail inválido'),
  whatsapp: z.string().min(10, 'Informe um número válido'),
  propertyType: z.string().min(1, 'Selecione o tipo de imóvel'),
  city: z.string().min(2, 'Informe a cidade do projeto'),
  budget: z.string().min(1, 'Selecione uma faixa de investimento'),
  timeline: z.string().min(1, 'Selecione o prazo desejado'),
  message: z.string().optional(),
})

type FormData = z.infer<typeof schema>

const WHATSAPP_NUMBER = '5511999999999'

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 })

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) })

  const onSubmit = async (data: FormData) => {
    setLoading(true)
    // Simulate API call — replace with real endpoint (RD Station / Mailchimp)
    await new Promise((resolve) => setTimeout(resolve, 1200))
    console.log('Form data:', data)
    setLoading(false)
    setSubmitted(true)
  }

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    'Olá Isabela! Vim pelo site da Maison Étoile e gostaria de conversar sobre meu projeto.'
  )}`

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-cream-200"
      aria-label="Formulário de contato"
    >
      {/* Background split */}
      <div className="absolute inset-y-0 right-0 w-full lg:w-1/2 hidden lg:block">
        <Image
          src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1000&q=80"
          alt="Interior de luxo — Maison Étoile Interiors"
          fill
          className="object-cover object-center"
          sizes="50vw"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-noir/50" />
      </div>

      <div className="relative z-10 section-padding py-24 md:py-32 lg:py-40">
        <div className="container-maison">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Left: form */}
            <div ref={ref}>
              <SectionLabel className="mb-8">Contato</SectionLabel>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="font-serif text-display text-noir font-light mb-4 text-balance"
              >
                Vamos conversar
                <br />
                <em className="italic text-taupe">sobre o seu projeto.</em>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.25 }}
                className="text-body text-taupe font-sans leading-relaxed mb-12"
              >
                Preencha o formulário abaixo e entraremos em contato em até 48 horas
                úteis. A primeira conversa é gratuita e sem compromisso.
              </motion.p>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7 }}
                  className="py-12 border border-beige/60 px-8 text-center"
                >
                  <span className="block font-serif text-[3rem] text-gold/60 mb-4">✦</span>
                  <h3 className="font-serif text-heading text-noir mb-3">
                    Mensagem recebida.
                  </h3>
                  <p className="text-body text-taupe font-sans">
                    Obrigada pelo contato. A Isabela retornará em breve com atenção exclusiva
                    para o seu projeto.
                  </p>
                </motion.div>
              ) : (
                <motion.form
                  initial={{ opacity: 0, y: 16 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.7, delay: 0.35 }}
                  onSubmit={handleSubmit(onSubmit)}
                  noValidate
                  aria-label="Formulário de solicitação de proposta"
                  className="space-y-6"
                >
                  {/* Row 1 */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block section-label mb-2">
                        Nome completo *
                      </label>
                      <input
                        {...register('name')}
                        id="name"
                        type="text"
                        placeholder="Seu nome"
                        autoComplete="name"
                        className="form-input"
                        aria-describedby={errors.name ? 'name-error' : undefined}
                      />
                      {errors.name && (
                        <p id="name-error" role="alert" className="mt-1.5 text-micro text-red-500/80">
                          {errors.name.message}
                        </p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="email" className="block section-label mb-2">
                        E-mail *
                      </label>
                      <input
                        {...register('email')}
                        id="email"
                        type="email"
                        placeholder="seu@email.com"
                        autoComplete="email"
                        className="form-input"
                        aria-describedby={errors.email ? 'email-error' : undefined}
                      />
                      {errors.email && (
                        <p id="email-error" role="alert" className="mt-1.5 text-micro text-red-500/80">
                          {errors.email.message}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Row 2 */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="whatsapp" className="block section-label mb-2">
                        WhatsApp *
                      </label>
                      <input
                        {...register('whatsapp')}
                        id="whatsapp"
                        type="tel"
                        placeholder="(11) 99999-9999"
                        autoComplete="tel"
                        className="form-input"
                        aria-describedby={errors.whatsapp ? 'whatsapp-error' : undefined}
                      />
                      {errors.whatsapp && (
                        <p id="whatsapp-error" role="alert" className="mt-1.5 text-micro text-red-500/80">
                          {errors.whatsapp.message}
                        </p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="city" className="block section-label mb-2">
                        Cidade do projeto *
                      </label>
                      <input
                        {...register('city')}
                        id="city"
                        type="text"
                        placeholder="Ex: São Paulo, SP"
                        className="form-input"
                        aria-describedby={errors.city ? 'city-error' : undefined}
                      />
                      {errors.city && (
                        <p id="city-error" role="alert" className="mt-1.5 text-micro text-red-500/80">
                          {errors.city.message}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Row 3 */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="propertyType" className="block section-label mb-2">
                        Tipo de imóvel *
                      </label>
                      <div className="relative">
                        <select
                          {...register('propertyType')}
                          id="propertyType"
                          className="form-select w-full"
                          defaultValue=""
                          aria-describedby={errors.propertyType ? 'propertyType-error' : undefined}
                        >
                          <option value="" disabled>Selecione</option>
                          <option value="apartamento">Apartamento</option>
                          <option value="casa">Casa</option>
                          <option value="cobertura">Cobertura</option>
                          <option value="estudio">Studio / Flat</option>
                          <option value="outro">Outro</option>
                        </select>
                        <span className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 text-taupe" aria-hidden="true">
                          ↓
                        </span>
                      </div>
                      {errors.propertyType && (
                        <p id="propertyType-error" role="alert" className="mt-1.5 text-micro text-red-500/80">
                          {errors.propertyType.message}
                        </p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="budget" className="block section-label mb-2">
                        Investimento estimado *
                      </label>
                      <div className="relative">
                        <select
                          {...register('budget')}
                          id="budget"
                          className="form-select w-full"
                          defaultValue=""
                          aria-describedby={errors.budget ? 'budget-error' : undefined}
                        >
                          <option value="" disabled>Selecione</option>
                          <option value="300-500k">R$ 300 mil – R$ 500 mil</option>
                          <option value="500k-1m">R$ 500 mil – R$ 1 milhão</option>
                          <option value="1m-2m">R$ 1 milhão – R$ 2 milhões</option>
                          <option value="2m+">Acima de R$ 2 milhões</option>
                        </select>
                        <span className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 text-taupe" aria-hidden="true">
                          ↓
                        </span>
                      </div>
                      {errors.budget && (
                        <p id="budget-error" role="alert" className="mt-1.5 text-micro text-red-500/80">
                          {errors.budget.message}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Row 4 */}
                  <div>
                    <label htmlFor="timeline" className="block section-label mb-2">
                      Prazo desejado *
                    </label>
                    <div className="relative">
                      <select
                        {...register('timeline')}
                        id="timeline"
                        className="form-select w-full"
                        defaultValue=""
                        aria-describedby={errors.timeline ? 'timeline-error' : undefined}
                      >
                        <option value="" disabled>Selecione</option>
                        <option value="urgente">Menos de 3 meses</option>
                        <option value="medio">3 a 6 meses</option>
                        <option value="longo">6 meses a 1 ano</option>
                        <option value="flexivel">Flexível / ainda planejando</option>
                      </select>
                      <span className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 text-taupe" aria-hidden="true">
                        ↓
                      </span>
                    </div>
                    {errors.timeline && (
                      <p id="timeline-error" role="alert" className="mt-1.5 text-micro text-red-500/80">
                        {errors.timeline.message}
                      </p>
                    )}
                  </div>

                  {/* Row 5 */}
                  <div>
                    <label htmlFor="message" className="block section-label mb-2">
                      Conte-nos sobre o projeto
                    </label>
                    <textarea
                      {...register('message')}
                      id="message"
                      rows={4}
                      placeholder="Descreva brevemente o que você tem em mente..."
                      className="form-input resize-none"
                    />
                  </div>

                  {/* Submit */}
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 pt-2">
                    <button
                      type="submit"
                      disabled={loading}
                      className="btn-primary disabled:opacity-60 disabled:cursor-not-allowed group"
                      aria-label="Enviar solicitação de proposta"
                    >
                      {loading ? (
                        <span className="flex items-center gap-2">
                          <span className="w-3 h-3 border border-cream/40 border-t-cream rounded-full animate-spin" />
                          Enviando...
                        </span>
                      ) : (
                        <>
                          Enviar solicitação
                          <span className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true">→</span>
                        </>
                      )}
                    </button>
                    <p className="text-micro text-taupe/50 italic">
                      Seus dados são tratados com total confidencialidade.
                    </p>
                  </div>
                </motion.form>
              )}

              {/* WhatsApp alternative */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="mt-10 pt-8 border-t border-beige/50 flex items-center gap-4"
              >
                <p className="text-caption text-taupe font-sans">Prefere uma conversa direta?</p>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost text-noir hover:text-gold group text-caption"
                >
                  WhatsApp
                  <span className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true">→</span>
                </a>
              </motion.div>
            </div>

            {/* Right: empty on mobile / image handled by background on desktop */}
            <div className="hidden lg:block" aria-hidden="true" />
          </div>
        </div>
      </div>
    </section>
  )
}
