"use client";

import Header from "../components/Header";
import Footer from "../components/Footer";

export default function CareersPage() {
  return (
    <>
      <Header />

      <main>
        {/* Hero Section */}
        <section
          style={{
            padding: "6rem 2rem 3rem",
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
            Join Our <span style={{ color: "var(--color-gold)" }}>Team</span>
          </h1>

          <p
            style={{
              maxWidth: "700px",
              margin: "0 auto",
              fontSize: "1.1rem",
              color: "rgba(255,255,255,0.85)",
            }}
          >
            We are always looking for passionate and talented professionals.
            Submit your application below and our team will get in touch if a
            suitable opportunity becomes available.
          </p>
        </section>

        {/* Application Form */}
        <section
          style={{
            padding: "5rem 2rem",
            backgroundColor: "#f8f9fb",
          }}
        >
          <div
            style={{
              maxWidth: "900px",
              margin: "0 auto",
              background: "#fff",
              padding: "3rem",
              borderRadius: "12px",
              boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
            }}
          >
            <h2
              style={{
                color: "#002B5B",
                marginBottom: "2rem",
              }}
            >
              Job Application Form
            </h2>

            <form
              style={{
                display: "grid",
                gap: "1.5rem",
              }}
              onSubmit={(e) => e.preventDefault()}
            >
              <div>
                <label style={labelStyle}>Full Name *</label>
                <input type="text" style={inputStyle} />
              </div>
              <div>
                <label style={labelStyle}>Email Address *</label>
                <input type="email" style={inputStyle} />
              </div>

              <div>
                <label style={labelStyle}>Phone Number *</label>
                <input type="tel" style={inputStyle} />
              </div>

              <div>
                <label style={labelStyle}>Current Location *</label>
                <input type="text" style={inputStyle} />
              </div>

              <div>
                <label style={labelStyle}>Position Applying For *</label>
                <input
                  type="text"
                  placeholder="e.g. Frontend Developer"
                  style={inputStyle}
                />
              </div>

              <div>
                <label style={labelStyle}>Years of Experience *</label>
                <input
                  type="number"
                  min="0"
                  style={inputStyle}
                />
              </div>

              <div>
                <label style={labelStyle}>Current Company</label>
                <input type="text" style={inputStyle} />
              </div>

              <div>
                <label style={labelStyle}>LinkedIn Profile</label>
                <input
                  type="url"
                  placeholder="https://linkedin.com/in/username"
                  style={inputStyle}
                />
              </div>

              <div>
                <label style={labelStyle}>Portfolio / Website</label>
                <input
                  type="url"
                  placeholder="https://yourportfolio.com"
                  style={inputStyle}
                />
              </div>

              <div>
                <label style={labelStyle}>Upload Resume *</label>
                <input
                  type="file"
                  accept=".pdf,.doc,.docx"
                  style={inputStyle}
                />
              </div>

              <div>
                <label style={labelStyle}>
                  Cover Letter / Why do you want to join us?
                </label>

                <textarea
                  rows={6}
                  style={{
                    ...inputStyle,
                    resize: "vertical",
                  }}
                />
              </div>

              <button
                type="submit"
                style={{
                  backgroundColor: "var(--color-gold)",
                  color: "#002B5B",
                  border: "none",
                  padding: "1rem",
                  borderRadius: "8px",
                  fontSize: "1rem",
                  fontWeight: 600,
                  cursor: "pointer",
                }}
              >
                Submit Application
              </button>
            </form>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

const labelStyle = {
  color: "#002B5B",
  fontWeight: 600,
  display: "block",
};

const inputStyle = {
  width: "100%",
  marginTop: "0.5rem",
  padding: "1rem",
  border: "1px solid #ddd",
  borderRadius: "6px",
  fontSize: "1rem",
} as const;

