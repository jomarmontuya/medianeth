import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import OurService from '../components/OurService'
import Work from '../components/Work'

export default function Home() {

  return (
    <>
      <main>
        <Navbar />
        <Hero />
        <OurService />
        <Work />
      </main>
    </>
  )
}
