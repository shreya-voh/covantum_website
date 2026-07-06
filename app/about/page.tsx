import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata = {
  title: 'About Us | Covantum',
  description: 'Learn more about Covantum, our vision, mission, and how we translate complex clinical knowledge into clear, credible, and impactful communication.'
};

export default function About() {
  return (
    <>
      <Header />
      <main>
        <section style={{ 
          padding: '10rem 2rem 6rem', 
          backgroundColor: 'var(--color-navy)', 
          color: 'white',
          textAlign: 'center'
        }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h1 style={{ fontSize: '3.5rem', color: 'white', marginBottom: '1.5rem' }}>
              About <span style={{ color: 'var(--color-gold)' }}>Us</span>
            </h1>
            <p style={{ fontSize: '1.25rem', color: 'rgba(255,255,255,0.9)', fontWeight: '300' }}>
              Covantum is a healthcare advisory and communication organization built at the intersection of science, strategy, data and emerging technology. We partner with healthcare companies, brands and medical professionals to translate complex clinical knowledge into clear, credible and impactful communication.
<br/>
<br/>
Whatever the challenge — strategic, scientific or commercial — Covantum brings rigour to every conversation and precision to every outcome.
<br/>
<br/>
We understand the regulatory environment, the clinical mindset and the commercial imperatives of the healthcare industry — and we work fluently across all three.
<br/>
<br/>
Founded by healthcare professionals with deep roots in medical education, research and digital media, Covantum is not a generalist agency that works in healthcare. We are a healthcare-first organization focused on effective communication with authenticity and purpose.
              </p>
          </div>
        </section>

        <section style={{ padding: '6rem 2rem', backgroundColor: '#fff' }}>
          <div style={{ maxWidth: '1000px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '4rem' }}>
            
            <div>
              <h2 style={{ fontSize: '2.5rem', color: 'var(--color-navy)', marginBottom: '1.5rem', borderBottom: '2px solid var(--color-teal)', paddingBottom: '0.5rem', display: 'inline-block' }}>
                Our Vision
              </h2>
              <p style={{ fontSize: '1.1rem', color: '#444', lineHeight: '1.8', fontStyle: 'italic', borderLeft: '4px solid var(--color-gold)', paddingLeft: '1.5rem' }}>
                "To be the most trusted advisory and communications partner for healthcare brands in India and beyond — known for the precision of our thinking, the integrity of our science, and the outcomes we deliver."
              </p>
              <p style={{ fontSize: '1.1rem', color: '#555', lineHeight: '1.8', marginTop: '1.5rem' }}>
                Covantum envisions a healthcare ecosystem where scientific evidence support reaches every clinician who needs it, where healthcare brands communicate with authenticity and purpose, and where the bridge between medicine and the market is built on trust — not just transactions.
              </p>
            </div>

            <div>
              <h2 style={{ fontSize: '2.5rem', color: 'var(--color-navy)', marginBottom: '1.5rem', borderBottom: '2px solid var(--color-teal)', paddingBottom: '0.5rem', display: 'inline-block' }}>
                Our Mission
              </h2>
              <p style={{ fontSize: '1.1rem', color: '#444', lineHeight: '1.8', fontStyle: 'italic', borderLeft: '4px solid var(--color-gold)', paddingLeft: '1.5rem' }}>
                "To deliver precision advisory, evidence-based  communications and data-driven digital strategies that help healthcare organisations make better decisions, reach the right audiences and build lasting credibility with doctors, patients and industry stakeholders."
              </p>
              <p style={{ fontSize: '1.1rem', color: '#555', lineHeight: '1.8', marginTop: '1.5rem' }}>
                We fulfil this mission by combining deep healthcare expertise with creative intelligence — bringing together medical experts, strategic advisors, digital specialists and industry consultants under one roof to serve our clients with integrity and measurable impact.
              </p>
            </div>

          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
