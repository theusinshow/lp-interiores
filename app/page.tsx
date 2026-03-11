import { Navbar } from '@/components/Navbar'
import { Hero } from '@/components/Hero'
import { Manifesto } from '@/components/Manifesto'
import { About } from '@/components/About'
import { Differentials } from '@/components/Differentials'
import { Portfolio } from '@/components/Portfolio'
import { Process } from '@/components/Process'
import { Services } from '@/components/Services'
import { Testimonials } from '@/components/Testimonials'
import { SocialProof } from '@/components/SocialProof'
import { FAQ } from '@/components/FAQ'
import { ContactForm } from '@/components/ContactForm'
import { Footer } from '@/components/Footer'
import { WhatsAppButton } from '@/components/WhatsAppButton'

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />
        <Manifesto />
        <About />
        <Differentials />
        <Portfolio />
        <Process />
        <Services />
        <Testimonials />
        <SocialProof />
        <FAQ />
        <ContactForm />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
