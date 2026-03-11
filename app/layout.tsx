import type { Metadata } from 'next'
import { Cormorant_Garamond, Inter } from 'next/font/google'
import './globals.css'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Maison Étoile Interiors — Arquitetura de Interiores de Alto Padrão',
  description:
    'Estúdio boutique especializado em interiores residenciais de luxo, projetos personalizados e curadoria de materiais nobres em São Paulo e todo o Brasil.',
  keywords: [
    'arquitetura de interiores',
    'interiores de luxo',
    'design de interiores alto padrão',
    'decoração sofisticada São Paulo',
    'projeto residencial exclusivo',
    'mobiliário sob medida',
  ],
  authors: [{ name: 'Maison Étoile Interiors' }],
  creator: 'Maison Étoile Interiors',
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://maisonetoile.com.br',
    siteName: 'Maison Étoile Interiors',
    title: 'Maison Étoile Interiors — Arquitetura de Interiores de Alto Padrão',
    description:
      'Espaços que traduzem quem você é. Projetos residenciais exclusivos com curadoria de materiais nobres e acompanhamento próximo em cada etapa.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Maison Étoile Interiors — Ambiente de luxo contemporâneo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Maison Étoile Interiors — Arquitetura de Interiores de Alto Padrão',
    description:
      'Espaços que traduzem quem você é. Projetos residenciais exclusivos com curadoria de materiais nobres.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://maisonetoile.com.br',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={`${cormorant.variable} ${inter.variable}`}>
      <head>
        {/* GTM — replace GTM-XXXXXXX with real ID */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-XXXXXXX');`,
          }}
        />
      </head>
      <body className="bg-cream text-noir antialiased">
        {/* GTM noscript */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-XXXXXXX"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {children}
      </body>
    </html>
  )
}
