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
            Terms <span style={{ color: "var(--color-gold)" }}>of Use</span>
          </h1>

          
          <p
            style={{
              maxWidth: "800px",
              margin: "0 auto",
              fontSize: "1.1rem",
              color: "rgba(255,255,255,0.85)",
            }}
          >
              Please review these Terms of Use carefully before accessing or using the
  Covantum website. </p>
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
              By accessing or using the Covantum website, you agree to these
              Terms & Conditions.
            </Paragraph>

            <SectionTitle>Website Use</SectionTitle>
            <Paragraph>
              You agree to use this website only for lawful purposes and in a
              manner that does not infringe upon the rights of others or
              restrict their use of the website.
            </Paragraph>

            <SectionTitle>Eligibility</SectionTitle>
            <Paragraph>
              This website is intended for use by individuals who are 18
              years of age or older. By using this website, you represent
              that you are at least 18 years old or are accessing the website
              under the supervision of a parent, guardian, or authorized
              organization where permitted by applicable law.
            </Paragraph>

            <SectionTitle>Intellectual Property</SectionTitle>
            <Paragraph>
              All content on this website, including text, graphics, logos,
              designs, documents, and other materials, is owned by or
              licensed to{" "}
              <strong style={{ color: "#002B5B" }}>Covantum</strong> and is
              protected by applicable intellectual property laws.
            </Paragraph>
            <Paragraph>
              No content may be copied, reproduced, distributed, modified, or
              reused without prior written permission.
            </Paragraph>

            <SectionTitle>No Professional Advice</SectionTitle>
            <Paragraph>
              Content provided on this website is for informational purposes
              only and does not constitute medical, legal, regulatory,
              scientific, or professional advice.
            </Paragraph>

            <SectionTitle>Limitation of Liability</SectionTitle>
            <Paragraph>
              Covantum shall not be liable for any direct, indirect,
              incidental, consequential, or special damages arising from the
              use of this website or reliance upon its content.
            </Paragraph>

            <SectionTitle>Third-Party Links</SectionTitle>
            <Paragraph>
              Links to external websites are provided for convenience only.
              Covantum does not endorse and is not responsible for
              third-party content.
            </Paragraph>

            <SectionTitle>Modifications</SectionTitle>
            <Paragraph>
              We reserve the right to modify these Terms & Conditions and
              website content at any time without prior notice.
            </Paragraph>

            <SectionTitle>Governing Law</SectionTitle>
            <Paragraph>
              These Terms shall be governed by and interpreted in accordance
              with the laws applicable in India.
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