import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Core palette — Maison Étoile
        cream: '#F5F1EB',
        beige: '#D8CBB8',
        taupe: '#8D7F73',
        brown: '#4A3A32',
        noir: '#1C1A19',
        gold: '#B79A6B',
        // Tonal scale
        'cream-100': '#FAF8F4',
        'cream-200': '#F5F1EB',
        'beige-100': '#EDE5D8',
        'beige-200': '#D8CBB8',
        'taupe-100': '#A89B8F',
        'taupe-200': '#8D7F73',
        'taupe-300': '#6E6259',
        'brown-100': '#6B5548',
        'brown-200': '#4A3A32',
        'noir-100': '#2E2B2A',
        'noir-200': '#1C1A19',
        'gold-100': '#D4B88A',
        'gold-200': '#B79A6B',
        'gold-300': '#9A7E52',
      },
      fontFamily: {
        serif: ['var(--font-cormorant)', 'Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['var(--font-inter)', 'Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        // H1 hero
        'hero': ['clamp(3rem, 7vw, 6.5rem)', { lineHeight: '1.05', letterSpacing: '-0.02em', fontWeight: '300' }],
        // H2 section
        'display': ['clamp(2rem, 4vw, 3.75rem)', { lineHeight: '1.1', letterSpacing: '-0.015em', fontWeight: '300' }],
        // H3 support
        'heading': ['clamp(1.25rem, 2.5vw, 2rem)', { lineHeight: '1.2', letterSpacing: '-0.01em', fontWeight: '400' }],
        // Body large
        'body-lg': ['1.125rem', { lineHeight: '1.75', letterSpacing: '0.01em' }],
        // Body standard
        'body': ['1rem', { lineHeight: '1.7', letterSpacing: '0.005em' }],
        // Caption
        'caption': ['0.875rem', { lineHeight: '1.5', letterSpacing: '0.02em' }],
        // Label
        'label': ['0.75rem', { lineHeight: '1.4', letterSpacing: '0.12em' }],
        // Microcopy
        'micro': ['0.6875rem', { lineHeight: '1.4', letterSpacing: '0.1em' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
        '34': '8.5rem',
        '38': '9.5rem',
        '42': '10.5rem',
        '46': '11.5rem',
        '50': '12.5rem',
        '54': '13.5rem',
        '58': '14.5rem',
        '62': '15.5rem',
        '68': '17rem',
        '72': '18rem',
        '76': '19rem',
        '84': '21rem',
        '88': '22rem',
        '92': '23rem',
        '96': '24rem',
        '100': '25rem',
        '120': '30rem',
      },
      borderRadius: {
        'none': '0',
        'sm': '2px',
        'DEFAULT': '3px',
        'md': '4px',
        'lg': '6px',
        'xl': '8px',
        'full': '9999px',
      },
      boxShadow: {
        'soft': '0 1px 3px 0 rgba(28, 26, 25, 0.06), 0 1px 2px 0 rgba(28, 26, 25, 0.04)',
        'card': '0 4px 24px 0 rgba(28, 26, 25, 0.08)',
        'elevated': '0 8px 40px 0 rgba(28, 26, 25, 0.12)',
        'gold': '0 0 0 1px rgba(183, 154, 107, 0.3)',
      },
      transitionTimingFunction: {
        'premium': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        'reveal': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      transitionDuration: {
        '400': '400ms',
        '600': '600ms',
        '800': '800ms',
        '1000': '1000ms',
        '1200': '1200ms',
      },
      animation: {
        'fade-in': 'fadeIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'slide-up': 'slideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'ken-burns': 'kenBurns 12s ease-in-out infinite alternate',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        kenBurns: {
          '0%': { transform: 'scale(1.0) translate(0%, 0%)' },
          '100%': { transform: 'scale(1.08) translate(-1%, -1%)' },
        },
      },
      backgroundImage: {
        'grain': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [],
}

export default config
