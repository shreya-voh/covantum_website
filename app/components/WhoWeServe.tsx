"use client";

import { motion } from 'framer-motion';
import styles from './WhoWeServe.module.css';

const clients = [
  "Healthcare companies, pharma, biotech, and medical device firms seeking credible, UCPMP-compliant doctor engagement and publication support",
  "Hospital groups and healthcare networks building their brand and physician relationships",
  "Health-tech and medical device companies entering or expanding in the Indian market",
  "Healthcare startups needing strategic advisory and go-to-market support",
  "Medical professionals and academic institutions seeking communications and publication support"
];

export default function WhoWeServe() {
  return (
    <section id="who-we-serve" className={styles.section}>
      <div className="container">
        <motion.div 
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className={styles.title}>Who We Serve</h2>
          <div className={styles.separator}></div>
          <p className={styles.subtitle}>
            We work with organisations across the healthcare ecosystem — wherever precision, trust, and impact matter.
          </p>
        </motion.div>

        <motion.div 
          className={styles.clientsList}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {clients.map((client, index) => (
            <div key={index} className={styles.clientItem}>
              <div className={styles.bulletDot}></div>
              <p className={styles.clientText}>{client}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
