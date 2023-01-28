import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import OurService from '../components/OurService'
import WhoWeAre from '../components/WhoWeAre'
import Work from '../components/Work'

export default function Home() {

  return (
    <>
      <main>
        <Navbar />
        <Hero />
        <OurService />
        <Work />
        <WhoWeAre />
      </main>
    </>
  )
}
