import Hero from '@/components/Hero';
import Problems from '@/components/Problems';
import Solutions from '@/components/Solutions';
import Portfolio from '@/components/Portfolio';
import ProcessSection from '@/components/ProcessSection';
import About from '@/components/About';
import FAQ from '@/components/FAQ';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen text-white">
      <Hero />
      <Problems />
      <Solutions />
      <Portfolio />
      <ProcessSection />
      <About />
      <FAQ />
      <ContactForm />
      <Footer />
    </main>
  );
}
