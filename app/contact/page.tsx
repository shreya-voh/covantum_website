"use client";

import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Contact() {
  return (
    <>
      <Header />
      <main>
        <section
  style={{
    padding: '6rem 2rem 0.8rem',
    backgroundColor: 'var(--color-navy)',
    color: 'white',
    textAlign: 'center',
  }}
>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h1 style={{ fontSize: '3.5rem', color: 'white', marginBottom: '1.5rem' }}>
              Get in <span style={{ color: 'var(--color-gold)' }}>Touch</span>
            </h1>
            <p style={{ fontSize: '1.25rem', color: 'rgba(255,255,255,0.9)', fontWeight: '300' }}>
              Let's discuss how Covantum can help you communicate more effectively and grow with purpose.
            </p>
          </div>
        </section>

        <section style={{ padding: '6rem 2rem', backgroundColor: 'var(--background-secondary)' }}>
          <div style={{ maxWidth: '1000px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem' }}>
            
            <div style={{ background: 'white', padding: '3rem', borderRadius: '8px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
              <h2 style={{ fontSize: '2rem', marginBottom: '2rem',color:"#002348" }}>Send a Message</h2>
              <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }} onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label htmlFor="name" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', color: 'var(--color-navy)' }}>Full Name</label>
                  <input type="text" id="name" style={{ width: '100%', padding: '1rem', border: '1px solid #ddd', borderRadius: '4px', fontSize: '1rem' }} placeholder="John Doe" />
                </div>
                <div>
                  <label htmlFor="email" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', color: 'var(--color-navy)' }}>Email Address</label>
                  <input type="email" id="email" style={{ width: '100%', padding: '1rem', border: '1px solid #ddd', borderRadius: '4px', fontSize: '1rem' }} placeholder="john@example.com" />
                </div>
                <div>
                  <label htmlFor="message" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', color: 'var(--color-navy)' }}>Message</label>
                  <textarea id="message" rows={5} style={{ width: '100%', padding: '1rem', border: '1px solid #ddd', borderRadius: '4px', fontSize: '1rem', resize: 'vertical' }} placeholder="How can we help you?"></textarea>
                </div>
                <button type="submit" className="btn btn-primary" style={{ marginTop: '1rem' }}>Send Message</button>
              </form>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
              
              <div>
  <h3
    style={{
      fontSize: '1.5rem',
      marginBottom: '1rem',
      color: 'var(--color-teal)',
    }}
  >
    Office Location
  </h3>

  <p
    style={{
      color: '#555',
      lineHeight: '1.8',
      fontSize: '1.1rem',
    }}
  >
    {/* <strong>Corporate Office</strong> */}
    {/* <br /> */}
    104, First Floor, Tower B
    <br />
    Unitech Business Zone
    <br />
    Sector 50, Gurgaon
    <br />
    Haryana - 122018
  </p>
</div>
              <div>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--color-teal)' }}>Contact Information</h3>
                <p style={{ color: '#555', lineHeight: '1.6', fontSize: '1.1rem' }}>
                  <strong>Email:</strong><br />
                  info@covantum.com<br /><br />
                  <strong>Phone:</strong><br />
                  +91 95991 93575
                </p>
              </div>

              <div style={{ padding: '2rem', background: 'rgba(215, 176, 104, 0.1)', borderRadius: '8px', borderLeft: '4px solid var(--color-gold)' }}>
                <p style={{ color: 'var(--color-navy)', fontWeight: '500', fontStyle: 'italic', margin: 0 }}>
                  "Covantum brings rigour to every conversation and precision to every outcome."
                </p>
              </div>
            </div>

          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
