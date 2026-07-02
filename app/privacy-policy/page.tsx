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
            <Paragraph>
              Covantum ("we," "our," or "us") respects your privacy and is
              committed to protecting the personal information you share with
              us.
            </Paragraph>

            <SectionTitle>Information We Collect</SectionTitle>
            <Paragraph>
              We may collect personal information that you voluntarily
              provide through our website, including:
            </Paragraph>
            <ul style={listStyle}>
              <li>Name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Organization name</li>
              <li>Information submitted through contact forms or inquiries</li>
            </ul>
            <Paragraph>
              We may also collect certain technical information
              automatically, including IP address, browser type, device
              information, and website usage data through cookies and
              analytics tools.
            </Paragraph>

            <SectionTitle>How We Use Information</SectionTitle>
            <Paragraph>We use collected information to:</Paragraph>
            <ul style={listStyle}>
              <li>Respond to inquiries and requests</li>
              <li>Provide information about our services</li>
              <li>Improve website functionality and user experience</li>
              <li>Maintain website security and performance</li>
              <li>Comply with legal and regulatory obligations</li>
            </ul>

            <SectionTitle>Information Sharing</SectionTitle>
            <Paragraph>
              We do not sell, rent, or trade personal information to third
              parties.
            </Paragraph>
            <Paragraph>
              Information may be shared with trusted service providers who
              support website operations or where required by law,
              regulation, or legal process.
            </Paragraph>

            <SectionTitle>Children's Privacy</SectionTitle>
            <Paragraph>
              This website and our services are intended for business,
              professional, and healthcare audiences and are not directed to
              individuals under the age of 18.
            </Paragraph>
            <Paragraph>
              We do not knowingly collect personal information from children
              under 18 years of age. If we become aware that personal
              information has been collected from a person under 18 without
              appropriate consent where required by law, we will take
              reasonable steps to delete such information promptly.
            </Paragraph>
            <Paragraph>
              If you believe that a child under 18 has provided personal
              information through this website, please contact us at{" "}
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
              .
            </Paragraph>

            <SectionTitle>Data Security</SectionTitle>
            <Paragraph>
              We implement reasonable administrative, technical, and
              organizational measures to protect personal information against
              unauthorized access, disclosure, alteration, or destruction.
            </Paragraph>

            <SectionTitle>Third-Party Links</SectionTitle>
            <Paragraph>
              Our website may contain links to third-party websites. We are
              not responsible for the privacy practices or content of those
              websites.
            </Paragraph>

            <SectionTitle>Your Rights</SectionTitle>
            <Paragraph>
              Subject to applicable laws, you may request access to,
              correction of, or deletion of your personal information by
              contacting us.
            </Paragraph>

            <SectionTitle>Contact</SectionTitle>
            <Paragraph>
              For privacy-related questions or requests, email us at{" "}
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
              .
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