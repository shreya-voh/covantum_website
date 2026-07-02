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
            Cookie <span style={{ color: "var(--color-gold)" }}>Policy</span>  
          </h1>

            



          <p
            style={{
              maxWidth: "800px",
              margin: "0 auto",
              fontSize: "1.1rem",
              color: "rgba(255,255,255,0.85)",
            }}
          >
            Learn how Covantum uses cookies and similar technologies to improve your
  experience and enhance website performance. </p>


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
            <SectionTitle>What Are Cookies?</SectionTitle>
            <Paragraph>
              Cookies are small text files stored on your device when you
              visit a website. They help websites function efficiently and
              provide information about site usage.
            </Paragraph>

            <SectionTitle>How We Use Cookies</SectionTitle>
            <Paragraph>Covantum may use cookies to:</Paragraph>
            <ul style={listStyle}>
              <li>Ensure website functionality</li>
              <li>Improve user experience</li>
              <li>Analyze website traffic and performance</li>
              <li>Maintain website security</li>
            </ul>

            <SectionTitle>Types of Cookies We May Use</SectionTitle>
            <Paragraph>
              <strong style={{ color: "#002B5B" }}>Essential Cookies</strong>
              <br />
              Required for website operation and security.
            </Paragraph>
            <Paragraph>
              <strong style={{ color: "#002B5B" }}>Analytics Cookies</strong>
              <br />
              Help us understand how visitors interact with our website.
            </Paragraph>
            <Paragraph>
              <strong style={{ color: "#002B5B" }}>Preference Cookies</strong>
              <br />
              Remember user settings and preferences.
            </Paragraph>

            <SectionTitle>Managing Cookies</SectionTitle>
            <Paragraph>
              Most browsers allow you to control or disable cookies through
              browser settings. Disabling cookies may affect website
              functionality.
            </Paragraph>

            <SectionTitle>Updates</SectionTitle>
            <Paragraph>
              We may update this Cookie Policy periodically. Continued use of
              the website constitutes acceptance of any updates.
            </Paragraph>

            <p
              style={{
                marginTop: "3rem",
                color: "#666",
                fontSize: "0.95rem",
              }}
            >
              Effective Date: June 2026
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