import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import HowItWorks from './components/HowItWorks';
import Pricing from './components/Pricing';
import Portfolio from './components/Portfolio';
import NFCSection from './components/NFCSection';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';

export default function App() {
  return (
    <div style={{ background: '#0a0608', minHeight: '100vh' }}>
      {/* Sticky Navbar */}
      <Navbar />

      {/* Hero — full screen, background video */}
      <Hero />

      {/* Services Overview */}
      <Services />

      {/* How It Works */}
      <HowItWorks />

      {/* Pricing */}
      <Pricing />

      {/* Portfolio */}
      <Portfolio />

      {/* NFC Card Demo */}
      <NFCSection />

      {/* Testimonials */}
      <Testimonials />

      {/* FAQ */}
      <FAQ />

      {/* Contact Form */}
      <Contact />

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp */}
      <WhatsAppFloat />
    </div>
  );
}
