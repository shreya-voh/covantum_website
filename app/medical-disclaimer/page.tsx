"use client";

import Header from "../components/Header";
import Footer from "../components/Footer";

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />

      <main>
        {/* Hero Section */}
        <section
          style={{
            padding: "8rem 1rem 2rem",
            backgroundColor: "var(--color-navy)",
            color: "white",
            textAlign: "center",
          }}
        >
          <h1
            style={{
              fontSize: "3rem",
              marginBottom: "1rem",
            }}
          >
            Medical <span style={{ color: "var(--color-gold)" }}>Disclaimer</span>  
          </h1>


   <p
            style={{
              maxWidth: "800px",
              margin: "0 auto",
              fontSize: "1.1rem",
              color: "rgba(255,255,255,0.85)",
            }}
          > Important information regarding the medical and healthcare content available
  on the Covantum website.</p>
          
        </section>

        {/* Content Section */}
        <section
          style={{
            padding: "5rem 2rem",
            backgroundColor: "#f8f9fb",
          }}
        >
          <div
            style={{
              maxWidth: "1000px",
              margin: "0 auto",
              background: "#fff",
              padding: "3rem",
              borderRadius: "12px",
              boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
            }}
          >
            <SectionTitle>Medical Disclaimer</SectionTitle>
            <Paragraph>
              The information provided on this website is for general
              informational purposes only. It does not constitute medical,
              clinical, legal, regulatory, or professional advice and should
              not be relied upon as a substitute for consultation with
              qualified professionals.
            </Paragraph>
            <Paragraph>
              Covantum does not provide patient care, diagnosis, treatment
              recommendations, or medical advice through this website. Any
              healthcare-related decisions should be made in consultation
              with appropriately qualified healthcare professionals.
            </Paragraph>

            <SectionTitle>Compliance & Ethics Statement</SectionTitle>
            <Paragraph>
              Covantum is committed to conducting business with integrity,
              transparency, and professionalism.
            </Paragraph>
            <Paragraph>
              Our healthcare communication, medical affairs, scientific
              engagement, and consulting activities are designed to support
              ethical stakeholder interactions and compliance with applicable
              laws, regulations, industry codes, and professional standards.
              Where relevant, our work aligns with principles reflected in
              industry guidance, including the Uniform Code for
              Pharmaceutical Marketing Practices (UCPMP).
            </Paragraph>
            <Paragraph>
              We strive to maintain scientific accuracy, balanced
              communication, confidentiality, and respect for patient welfare
              in all engagements.
            </Paragraph>

            <SectionTitle>Contact & Grievance Information</SectionTitle>
            <Paragraph>
              For questions, concerns, complaints, or requests regarding our
              website, privacy practices, or services, please contact:
            </Paragraph>
            <Paragraph>
              <strong style={{ color: "#002B5B" }}>Covantum</strong>
              <br />
              Email:{" "}
              <a
                href="mailto:contact@covantum.com"
                style={{
                  color: "#002B5B",
                  fontWeight: 600,
                  textDecoration: "none",
                }}
              >
                contact@covantum.com
              </a>
              <br />
              Phone:{" "}
              <a
                href="tel:+919599193575"
                style={{
                  color: "#002B5B",
                  fontWeight: 600,
                  textDecoration: "none",
                }}
              >
                +91-9599193575
              </a>
              <br />
              Address: 104, Tower B, Unitech Business Zone, Sector 50,
              Gurgaon-122018, Haryana, India.
            </Paragraph>
            <Paragraph>
              We will make reasonable efforts to acknowledge and respond to
              inquiries in a timely manner.
            </Paragraph>

            <p
              style={{
                marginTop: "3rem",
                color: "#666",
                fontSize: "0.95rem",
              }}
            >
              Last Updated: June 2026
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2
      style={{
        color: "#002B5B",
        marginTop: "2rem",
        marginBottom: "1rem",
        fontSize: "1.5rem",
      }}
    >
      {children}
    </h2>
  );
}

function Paragraph({ children }: { children: React.ReactNode }) {
  return (
    <p
      style={{
        color: "#555",
        lineHeight: "1.8",
        marginBottom: "1rem",
      }}
    >
      {children}
    </p>
  );
}

const listStyle = {
  color: "#555",
  lineHeight: "1.8",
  paddingLeft: "1.5rem",
  marginBottom: "1rem",
};