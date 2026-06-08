"use client";

import styles from './PracticeAreas.module.css';

const practices = [
  {
    title: "Strategic Advisory",
    desc: "Rigorous strategic thinking applied to commercial and medical challenges to drive clear outcomes.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 7h-9"></path><path d="M14 17H5"></path><circle cx="17" cy="17" r="3"></circle><circle cx="7" cy="7" r="3"></circle>
      </svg>
    )
  },
  {
    title: "Scientific Communications",
    desc: "Evidence-based communication that translates complex clinical knowledge into impactful narratives.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 12h4l2-9 5 18 3-9h6"></path>
      </svg>
    )
  },
  {
    title: "Data-Driven Digital Strategy",
    desc: "Precision digital strategies that help healthcare organizations reach the right audiences effectively.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="16" height="20" x="4" y="2" rx="2" ry="2"></rect><path d="M9 22v-4h6v4"></path><path d="M8 6h.01"></path><path d="M16 6h.01"></path><path d="M12 6h.01"></path><path d="M12 10v4"></path><path d="M10 12h4"></path>
      </svg>
    )
  },
  {
    title: "Brand Consulting",
    desc: "Building lasting credibility with doctors, patients, and industry stakeholders through authentic branding.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"></circle><path d="m12 8 4 4-4 4"></path><path d="M8 12h8"></path>
      </svg>
    )
  }
];

export default function PracticeAreas() {
  return (
    <section id="practice-areas" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Practice <span>Areas</span></h2>
          <p>Distinct specialities, unified by a commitment to precision and trust.</p>
        </div>
        
        <div className={styles.grid}>
          {practices.map((practice, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.hexagon}></div>
              <div className={styles.iconWrapper}>
                <div className={styles.icon}>{practice.icon}</div>
              </div>
              <h3 className={styles.cardTitle}>{practice.title}</h3>
              <p className={styles.cardDesc}>{practice.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
