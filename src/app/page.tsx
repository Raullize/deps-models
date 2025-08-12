import Hero from '@/components/Hero';
import Portfolio from '@/components/Portfolio';
import Services from '@/components/Services';
import About from '@/components/About';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import BackgroundWrapper from '@/components/BackgroundWrapper';
export default function Home() {
  return (
    <main className="min-h-screen text-white">
      <Navbar />
      <Hero />
      
      <BackgroundWrapper withLightRays={true} raysOrigin="top-center">
        <Portfolio />
      </BackgroundWrapper>
    
      <Services />
      <About />
      <FAQ />
      <Footer />
    </main>
  );
}
