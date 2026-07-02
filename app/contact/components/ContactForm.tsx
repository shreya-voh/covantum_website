"use client";

import { useState } from "react";
import Link from "next/link";
import {
  User,
  Mail,
  Phone,
  Building2,
  Briefcase,
  Handshake,
  CheckCircle2,
  X,
  Sparkles,
  AlertCircle,
} from "lucide-react";
import styles from "./ContactForm.module.css";

interface CollaborationPayload {
  fullName: string;
  email: string;
  mobile: string;
  company: string;
  designation: string;
  collaboration: string;
}

// TODO: Point this at the real collaboration-submission endpoint once the
// backend accepts a free-text `collaboration` field (the current shared
// endpoint only accepts `collaboration_type_ids`). Until then this stub
// simulates the round trip so the form's UX can be built and tested.
async function submitCollaboration(payload: CollaborationPayload): Promise<void> {
  await new Promise((resolve) => setTimeout(resolve, 900));
  console.log("Collaboration request (stub submission):", payload);
}

export default function ContactForm() {
  const [formData, setFormData] = useState<CollaborationPayload>({
    fullName: "",
    email: "",
    mobile: "",
    company: "",
    designation: "",
    collaboration: "",
  });

  const [submitting, setSubmitting] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    if (error) setError("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!/^[0-9]{10}$/.test(formData.mobile)) {
      setError("Please enter a valid 10-digit mobile number");
      return;
    }

    if (!formData.collaboration.trim()) {
      setError("Please tell us what kind of collaboration you're looking for");
      return;
    }

    try {
      setSubmitting(true);
      setError("");

      await submitCollaboration(formData);

      setShowSuccessModal(true);

      setFormData({
        fullName: "",
        email: "",
        mobile: "",
        company: "",
        designation: "",
        collaboration: "",
      });
    } catch (err: any) {
      setError(err.message || "Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <div className={styles.formWrapper}>
        <div className={styles.topBar} />
        <div className={styles.blobTopRight} />
        <div className={styles.blobBottomLeft} />

        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.row}>
            <InputField
              icon={<User size={18} />}
              label="Full Name"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="John Doe"
            />
            <InputField
              icon={<Mail size={18} />}
              label="Email Address"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="john@example.com"
            />
          </div>

          <div className={styles.row}>
            <InputField
              icon={<Phone size={18} />}
              label="Mobile Number"
              name="mobile"
              type="tel"
              value={formData.mobile}
              onChange={handleChange}
              pattern="[0-9]{10}"
              maxLength={10}
              inputMode="numeric"
              placeholder="9876543210"
            />
            <InputField
              icon={<Building2 size={18} />}
              label="Company Name"
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder="Your Company"
            />
          </div>

          <InputField
            icon={<Briefcase size={18} />}
            label="Designation"
            name="designation"
            value={formData.designation}
            onChange={handleChange}
            placeholder="Your Role"
          />

          <InputField
            icon={<Handshake size={18} />}
            label="Collaboration"
            name="collaboration"
            value={formData.collaboration}
            onChange={handleChange}
            placeholder="Tell us how you'd like to collaborate"
          />

          <div className={styles.termsBox}>
            <input
              type="checkbox"
              required
              className={styles.checkbox}
            />
            <p className={styles.termsText}>
              I agree to the{" "}
              <Link href="/terms-and-conditions" className={styles.termsLink}>
                Terms & Conditions
              </Link>
            </p>
          </div>

          {error && (
            <div className={styles.errorBox}>
              <AlertCircle size={18} style={{ flexShrink: 0, marginTop: "1px" }} />
              <span>{error}</span>
            </div>
          )}

          <button type="submit" disabled={submitting} className={styles.submitBtn}>
            {submitting ? (
              <>
                <svg
                  className={styles.spinner}
                  width={20}
                  height={20}
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    opacity={0.25}
                    cx={12}
                    cy={12}
                    r={10}
                    stroke="currentColor"
                    strokeWidth={4}
                  />
                  <path
                    opacity={0.75}
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  />
                </svg>
                Submitting...
              </>
            ) : (
              "Submit"
            )}
          </button>
        </form>
      </div>

      <SuccessModal isOpen={showSuccessModal} onClose={() => setShowSuccessModal(false)} />
    </>
  );
}

/* ------------------ Reusable Input Field ------------------ */

interface InputProps {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  icon: React.ReactNode;
  pattern?: string;
  maxLength?: number;
  inputMode?: "numeric" | "text" | "tel" | "email";
  placeholder?: string;
}

function InputField({
  label,
  name,
  value,
  onChange,
  type = "text",
  icon,
  pattern,
  maxLength,
  inputMode,
  placeholder,
}: InputProps) {
  return (
    <div className={styles.fieldGroup}>
      <label className={styles.label}>{label}</label>

      <div className={styles.inputWrap}>
        <span className={styles.inputIcon}>{icon}</span>

        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          required
          pattern={pattern}
          maxLength={maxLength}
          inputMode={inputMode}
          placeholder={placeholder}
          className={styles.input}
        />
      </div>
    </div>
  );
}

/* ------------------ Success Modal ------------------ */

interface SuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
}

function SuccessModal({ isOpen, onClose }: SuccessModalProps) {
  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalCard}>
        <button onClick={onClose} className={styles.modalClose} aria-label="Close">
          <X size={24} />
        </button>

        <div className={styles.successIconWrap}>
          <div className={styles.successIconInner}>
            <div className={styles.successIconPulse} />
            <div className={styles.successIconCircle}>
              <CheckCircle2 size={40} />
            </div>
          </div>
        </div>

        <div className={styles.modalTextWrap}>
          <h3 className={styles.modalTitle}>Request Submitted!</h3>
          <p className={styles.modalText}>
            Thank you for your interest in collaborating with us. Our team will review your
            request and get back to you within <strong>24-48 hours</strong>.
          </p>
        </div>

        <div className={styles.nextStepsBox}>
          <div className={styles.nextStepsTitle}>
            <Sparkles size={18} color="var(--color-gold-dark)" />
            What&apos;s Next?
          </div>
          <ul className={styles.nextStepsList}>
            <li>
              <span className={styles.nextStepsNum}>1.</span>
              <span>Our team will review your collaboration request</span>
            </li>
            <li>
              <span className={styles.nextStepsNum}>2.</span>
              <span>We&apos;ll reach out via email with next steps</span>
            </li>
            <li>
              <span className={styles.nextStepsNum}>3.</span>
              <span>Schedule a meeting to discuss opportunities</span>
            </li>
          </ul>
        </div>

        <div className={styles.modalActions}>
          <button onClick={onClose} className={styles.modalCloseBtn}>
            Close
          </button>
          <Link href="/" className={styles.modalHomeBtn}>
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
