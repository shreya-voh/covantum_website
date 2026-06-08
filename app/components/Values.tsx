"use client";

import styles from './Values.module.css';

const values = [
  {
    title: "Precision",
    desc: "We bring rigour to every conversation and precision to every outcome.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle>
      </svg>
    )
  },
  {
    title: "Integrity",
    desc: "The bridge between medicine and the market is built on trust, not just transactions.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
      </svg>
    )
  },
  {
    title: "Impact",
    desc: "We deliver measurable impact for healthcare organisations making better decisions.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path>
      </svg>
    )
  },
  {
    title: "Fluency",
    desc: "We understand the regulatory environment, the clinical mindset, and the commercial imperatives.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
      </svg>
    )
  }
];

export default function Values() {
  return (
    <section id="values" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Our <span>Values</span></h2>
          <p>Four values that guide every engagement, every recommendation, and every relationship.</p>
        </div>
        
        <div className={styles.grid}>
          {values.map((value, index) => (
            <div key={index} className={styles.valueCard}>
              <div className={styles.iconWrapper}>
                {value.icon}
              </div>
              <h3 className={styles.cardTitle}>{value.title}</h3>
              <p className={styles.cardDesc}>{value.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
