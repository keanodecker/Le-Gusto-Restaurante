import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import MenuTeaser from '@/components/MenuTeaser'
import OpeningHours from '@/components/OpeningHours'
import Atmosphere from '@/components/Atmosphere'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <MenuTeaser />
      <OpeningHours />
      <Atmosphere />
      <Contact />
      <Footer />
    </main>
  )
}
