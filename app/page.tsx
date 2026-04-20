import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { About } from '@/components/about'
import { Experience } from '@/components/experience'
import { Skills } from '@/components/skills'
import { Contact } from '@/components/contact'
import { Footer } from '@/components/footer'
import { Certifications } from '@/components/Certifications'

export default function Home() {
  return (
    <main className="bg-white">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Certifications />
      <Contact />
      <Footer />
    </main>
  )
}
