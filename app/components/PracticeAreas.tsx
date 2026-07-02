"use client";

import { motion } from 'framer-motion';
import { BrainCircuit, Microscope, BarChart3, Target } from 'lucide-react';
import styles from './PracticeAreas.module.css';

const practices = [
  {
    title: "Healthcare Advisory",
    desc: "Strategic consulting for healthcare companies, brands, hospital groups, and health-tech firms. Market access, brand strategy, stakeholder engagement, and regulatory navigation.",
    icon: <BrainCircuit size={32} />,
    colorClass: styles.gold
  },
  {
    title: "Scientific Communications",
    desc: "End-to-end medical writing and publication support — survey design, data analysis, manuscript preparation, author coordination, and journal submission. Compliant publication services for healthcare companies.",
    icon: <Microscope size={32} />,
    colorClass: styles.teal
  },
  {
    title: "Doctor Engagement",
    desc: "Multi-channel programmes connecting healthcare brands with clinicians — continuing medical education support, webinars, podcasts for doctors, and scientific community building according to regulatory compliance.",
    icon: <BarChart3 size={32} />,
    colorClass: styles.navy
  },
  {
    title: "Digital Marketing, Media & Technology",
    desc: "Performance-driven digital campaigns — SEO, social media, content marketing, multimedia production, targeted digital outreach to doctors and healthcare professionals across compliant platforms and Tech & AI products.",
    icon: <Target size={32} />,
    colorClass: styles.goldTeal
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const itemVariants: any = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.215, 0.61, 0.355, 1]
    }
  }
};

export default function PracticeAreas() {
  return (
    <section id="practice-areas" className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className={styles.title}>
              What We <span className="text-teal">Do</span>
            </h2>
            <p className={styles.subtitle}>
              we operates across four practice areas — each distinct, but all connected by the same commitment to precision and trust.</p>
          </motion.div>
        </div>
        
        <motion.div 
          className={styles.bentoGrid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {practices.map((practice, index) => (
            <motion.div 
              key={index} 
              className={`${styles.card} ${practice.colorClass}`}
              variants={itemVariants}
            >
              <div className={styles.cardHeader}>
                <div className={styles.iconWrapper}>
                  {practice.icon}
                </div>
                <h3 className={styles.cardTitle}>{practice.title}</h3>
              </div>
              <p className={styles.cardDesc}>{practice.desc}</p>
              
              <div className={styles.hexagonAccent}></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
