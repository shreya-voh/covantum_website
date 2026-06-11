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
            Privacy <span style={{ color: "var(--color-gold)" }}>Policy</span>
          </h1>

          <p
            style={{
              maxWidth: "800px",
              margin: "0 auto",
              fontSize: "1.1rem",
              color: "rgba(255,255,255,0.85)",
            }}
          >
            Your privacy is important to us. This Privacy Policy explains how
            Covantum collects, uses, and protects your information when you
            visit our website and interact with our services.
          </p>
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
       

            {/* <SectionTitle>3. Cookies and Analytics</SectionTitle> */}

            <Paragraph>
  We respect your privacy. Information submitted through our website,
  including contact forms and inquiries, is used solely to respond to your
  requests and provide our services. We do not sell personal information to
  third parties. We implement reasonable measures to protect the information
  you share with us. For privacy-related inquiries, please contact us at{" "}
  <a
    href="mailto:contact@covantum.com"
    style={{
      color: "#002B5B",
      fontWeight: 600,
      textDecoration: "none",
    }}
  >
    contact@covantum.com
  </a>.  
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