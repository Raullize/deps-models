import Hero from '@/components/Hero';
import Portfolio from '@/components/Portfolio';
import Services from '@/components/Services';
import DepsModels from '@/components/DepsModels';
import About from '@/components/About';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
export default function Home() {
  return (
    <main className="min-h-screen text-white">
      <Navbar />
      <Hero />
      <Portfolio />
      <DepsModels />
      <Services />
      <About />
      <FAQ />
      <Footer />
    </main>
  );
}
