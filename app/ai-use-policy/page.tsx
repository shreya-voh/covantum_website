"use client";

import Header from "../components/Header";
import Footer from "../components/Footer";

export default function AIUsePolicyPage() {
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
            AI & Generative{" "}
            <span style={{ color: "var(--color-gold)" }}>AI Use Policy</span>
          </h1>

          <p
            style={{
              maxWidth: "800px",
              margin: "0 auto",
              fontSize: "1.1rem",
              color: "rgba(255,255,255,0.85)",
            }}
          >
            Our commitment to using Artificial Intelligence and Generative AI
            technologies responsibly, ethically, and in compliance with
            applicable laws and industry standards.
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
            <SectionTitle>Purpose</SectionTitle>
            <Paragraph>
              Covantum recognizes the potential benefits of Artificial
              Intelligence (AI) and Generative AI technologies in supporting
              research, content development, operational efficiency, and
              innovation. We are committed to using these technologies
              responsibly, ethically, and in a manner consistent with
              applicable laws, industry standards, and client expectations.
            </Paragraph>

            <SectionTitle>Human Oversight</SectionTitle>
            <Paragraph>
              AI-generated outputs are used only as supportive tools and do
              not replace professional expertise, scientific judgment,
              medical review, regulatory assessment, or strategic
              decision-making.
            </Paragraph>
            <Paragraph>
              All client-facing deliverables, scientific communications,
              medical content, analyses, and recommendations undergo
              appropriate human review before release or use.
            </Paragraph>

            <SectionTitle>Confidentiality and Data Protection</SectionTitle>
            <Paragraph>
              Covantum takes reasonable measures to protect confidential,
              proprietary, and personal information.
            </Paragraph>
            <Paragraph>Where AI tools are utilized:</Paragraph>
            <ul style={listStyle}>
              <li>
                Sensitive client information will not be shared with public AI
                systems unless appropriate safeguards are in place.
              </li>
              <li>
                Personal data will be handled in accordance with applicable
                privacy laws and our Privacy Policy.
              </li>
              <li>
                Confidential information will be protected through
                appropriate contractual, technical, and organizational
                controls.
              </li>
            </ul>

            <SectionTitle>Accuracy and Quality Assurance</SectionTitle>
            <Paragraph>
              Generative AI systems may produce inaccurate, incomplete,
              outdated, or misleading information. Accordingly:
            </Paragraph>
            <ul style={listStyle}>
              <li>
                AI-generated content is independently reviewed and validated
                by qualified personnel.
              </li>
              <li>
                Scientific, medical, regulatory, and healthcare-related
                information is verified against reliable sources where
                appropriate.
              </li>
              <li>
                Final responsibility for accuracy rests with Covantum and its
                designated reviewers, not with AI systems.
              </li>
            </ul>

            <SectionTitle>Ethical Use</SectionTitle>
            <Paragraph>
              Covantum is committed to responsible and ethical AI use. We do
              not intentionally use AI technologies to:
            </Paragraph>
            <ul style={listStyle}>
              <li>Generate misleading, deceptive, or fraudulent content;</li>
              <li>Misrepresent scientific evidence or clinical data;</li>
              <li>Violate intellectual property rights;</li>
              <li>Discriminate against individuals or groups;</li>
              <li>
                Circumvent applicable laws, regulations, or industry
                standards.
              </li>
            </ul>

            <SectionTitle>Intellectual Property</SectionTitle>
            <Paragraph>
              AI-assisted content may be incorporated into internal workflows
              where appropriate. However, ownership, originality review,
              attribution requirements, and intellectual property
              considerations are evaluated before deliverables are provided
              to clients.
            </Paragraph>

            <SectionTitle>Regulatory and Industry Compliance</SectionTitle>
            <Paragraph>
              When supporting healthcare, pharmaceutical, biotechnology,
              medical device, or scientific communications activities,
              AI-assisted processes are used in a manner intended to support
              compliance with applicable laws, regulations, industry codes,
              and client requirements.
            </Paragraph>
            <Paragraph>
              The use of AI does not replace required medical, legal,
              regulatory, or compliance review processes.
            </Paragraph>

            <SectionTitle>Transparency</SectionTitle>
            <Paragraph>
              Where appropriate and requested by clients, Covantum may
              disclose the use of AI-assisted tools within project workflows.
            </Paragraph>
            <Paragraph>
              The extent of such disclosure may vary depending on project
              requirements, contractual obligations, regulatory expectations,
              and client preferences.
            </Paragraph>

            <SectionTitle>Continuous Monitoring</SectionTitle>
            <Paragraph>
              As AI technologies evolve, Covantum will periodically review and
              update its practices, safeguards, and governance measures to
              promote responsible use and alignment with emerging standards.
            </Paragraph>

            <SectionTitle>Contact</SectionTitle>
            <Paragraph>
              Questions regarding this AI & Generative AI Use Policy may be
              directed to{" "}
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
            <Paragraph>
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
