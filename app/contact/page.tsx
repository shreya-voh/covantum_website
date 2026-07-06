"use client";

import Header from "../components/Header";
import Footer from "../components/Footer";
import ContactForm from "./components/ContactForm";

export default function ContactPage() {
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
            Let&apos;s <span style={{ color: "var(--color-gold)" }}>Collaborate</span>
          </h1>

          <p
            style={{
              maxWidth: "800px",
              margin: "0 auto",
              fontSize: "1.1rem",
              color: "rgba(255,255,255,0.85)",
            }}
          >
            Contact us for inquiries, feedback or grievance resolution. We
            are committed to responding in a timely and professional manner.
          </p>
        </section>

        {/* Content Section */}
        <section
          style={{
            padding: "3rem 1rem 5rem",
            backgroundColor: "#f8f9fb",
          }}
        >
          <ContactForm />

          <p
            style={{
              maxWidth: "42rem",
              margin: "2rem auto 0",
              textAlign: "center",
              color: "#666",
              fontSize: "0.95rem",
            }}
          >
            Prefer email or phone? Reach us at{" "}
            <a
              href="mailto:contact@covantum.com"
              style={{
                color: "#002B5B",
                fontWeight: 600,
                textDecoration: "none",
              }}
            >
              contact@covantum.com
            </a>{" "}
            or{" "}
            <a
              href="tel:+919599193575"
              style={{
                color: "#002B5B",
                fontWeight: 600,
                textDecoration: "none",
              }}
            >
              +91 95991 93575
            </a>
            .
          </p>
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