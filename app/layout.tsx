import type { Metadata } from 'next'
import { Marcellus, Hanken_Grotesk } from 'next/font/google'
import { MotionProvider } from '@/components/MotionProvider'
import './globals.css'

// Display: an inscriptional roman serif. Architectural, elegant, and
// deliberately not the Cormorant/editorial-italic reflex. Single weight by design.
const marcellus = Marcellus({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-marcellus',
  display: 'swap',
})

// Body: a clean neo-grotesque with a wide weight range for real hierarchy.
const hanken = Hanken_Grotesk({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-hanken',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://maisonetoile.com.br'),
  title: 'Maison Étoile Interiors · Arquitetura de Interiores de Alto Padrão',
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
    title: 'Maison Étoile Interiors · Arquitetura de Interiores de Alto Padrão',
    description:
      'Espaços que traduzem quem você é. Projetos residenciais exclusivos com curadoria de materiais nobres e acompanhamento próximo em cada etapa.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Maison Étoile Interiors · Ambiente de luxo contemporâneo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Maison Étoile Interiors · Arquitetura de Interiores de Alto Padrão',
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
    <html lang="pt-BR" className={`${marcellus.variable} ${hanken.variable}`}>
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
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-noir focus:text-cream focus:px-5 focus:py-3 focus:text-label focus:uppercase focus:tracking-[0.12em]"
        >
          Pular para o conteúdo
        </a>
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  )
}
