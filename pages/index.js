import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import OurService from "../components/OurService";
import WhoWeAre from "../components/WhoWeAre";
import Work from "../components/Work";

export default function Home() {
  return (
    <>
      <main>
        <Navbar />
        <Hero />
        <OurService />
        <Work />
        <WhoWeAre />
        <Newsletter />
      </main>
    </>
  );
}
