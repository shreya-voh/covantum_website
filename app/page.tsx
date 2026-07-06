import Header from './components/Header';
import HeroSection from './components/HeroSection';
import PracticeAreas from './components/PracticeAreas';
import Values from './components/Values';
import WhoWeServe from './components/WhoWeServe';
import ClientMarquee from './components/ClientMarquee';
import Footer from './components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main style={{ backgroundColor: '#ffffff' }}>
        <HeroSection />
        
        <section style={{ 
          padding: '6rem 2rem', 
          backgroundColor: '#fff', 
          textAlign: 'center',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          position: 'relative'
        }}>
          {/* Overlay */}
          <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(255, 255, 255, 0.95)', zIndex: 1 }}></div>
          <div style={{ maxWidth: '900px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: 'var(--color-navy)' }}>
              {/* A healthcare-first firm that  */}
              A Strategic Healthcare Partner
              <br/>
              {/* <span style={{ color: 'var(--color-teal)' }}>happens to communicate exceptionally well.</span> */}
            </h2>
            <p style={{ fontSize: '1.1rem', color: '#555', lineHeight: '1.8' }}>
              Founded by healthcare professionals with deep roots in medical education, research and digital media, Covantum is not a generalist agency that works in healthcare. We partner with healthcare companies, brands and medical professionals to translate complex clinical knowledge into clear, credible and impactful communication.
            </p>
          </div>
        </section>

        <PracticeAreas />
        <Values />
        <WhoWeServe />
        
      </main>
      <ClientMarquee />
      <Footer />
    </>
  );
}
