import Hero from '@/components/Hero';
import ValueProposition from '@/components/ValueProposition';
import Portfolio from '@/components/Portfolio';
import ProcessSection from '@/components/ProcessSection';
import FAQ from '@/components/FAQ';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen text-white">
      <Hero />
      <ValueProposition />
      <Portfolio />
      <ProcessSection />
      <FAQ />
      <ContactForm />
      <Footer />
    </main>
  );
}
