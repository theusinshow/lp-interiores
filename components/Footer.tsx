'use client'

import Link from 'next/link'

const socialLinks = [
  {
    label: 'Instagram',
    href: 'https://instagram.com/maisonetoileinteriors',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: 'Pinterest',
    href: 'https://pinterest.com/maisonetoile',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 0 1 .083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z" />
      </svg>
    ),
  },
  {
    label: 'Houzz',
    href: 'https://houzz.com/pro/maisonetoile',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 0L1.5 7.5V24H9v-9h6v9h7.5V7.5L12 0z" />
      </svg>
    ),
  },
]

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-noir section-padding py-16 md:py-20" role="contentinfo">
      <div className="container-maison">
        {/* Top grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="mb-4">
              <p className="font-serif text-[1.6rem] text-cream tracking-[0.05em]">Maison Étoile</p>
              <p className="text-micro uppercase tracking-[0.2em] text-taupe/60">Interiors</p>
            </div>
            <p className="text-body text-taupe/70 font-sans font-light leading-relaxed max-w-sm mt-4">
              Estúdio boutique especializado em arquitetura de interiores e mobiliário sob
              medida de alto padrão. São Paulo, Brasil.
            </p>
            {/* Social */}
            <div className="flex gap-4 mt-6">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Seguir no ${s.label}`}
                  className="w-9 h-9 border border-taupe/30 flex items-center justify-center text-taupe/60
                    hover:border-gold hover:text-gold transition-colors duration-400"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-label uppercase tracking-[0.14em] text-taupe/60 mb-5">Contato</h3>
            <ul className="space-y-3 text-body text-taupe/70 font-sans">
              <li>
                <a
                  href="mailto:contato@maisonetoile.com.br"
                  className="hover:text-cream transition-colors duration-300"
                >
                  contato@maisonetoile.com.br
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/5511999999999"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cream transition-colors duration-300"
                >
                  +55 (11) 99999-9999
                </a>
              </li>
              <li className="text-taupe/50">São Paulo — SP, Brasil</li>
              <li className="text-taupe/50 text-caption">
                Seg–Sex: 9h às 18h
              </li>
            </ul>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-label uppercase tracking-[0.14em] text-taupe/60 mb-5">Navegação</h3>
            <ul className="space-y-3">
              {[
                { label: 'Estúdio', href: '#studio' },
                { label: 'Portfólio', href: '#portfolio' },
                { label: 'Serviços', href: '#services' },
                { label: 'Processo', href: '#process' },
                { label: 'FAQ', href: '#faq' },
                { label: 'Contato', href: '#contact' },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault()
                      const el = document.querySelector(link.href)
                      if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' })
                    }}
                    className="text-body text-taupe/70 hover:text-cream transition-colors duration-300 font-sans"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-taupe/20 mb-8" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="text-micro text-taupe/40 font-sans">
            © {year} Maison Étoile Interiors. Todos os direitos reservados.
          </p>
          <div className="flex gap-6">
            <a href="/privacidade" className="text-micro text-taupe/40 hover:text-taupe/70 transition-colors duration-300">
              Política de Privacidade
            </a>
            <a href="/termos" className="text-micro text-taupe/40 hover:text-taupe/70 transition-colors duration-300">
              Termos de Uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
