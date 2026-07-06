"use client";

import { motion } from 'framer-motion';
import { Compass, ShieldCheck, Rocket, MessageSquareText } from 'lucide-react';
import styles from './Values.module.css';

const values = [
  {
    title: "Precision",
    desc: "Every recommendation, article and campaign we produce is grounded in evidence and crafted with exactness. We do not approximate.",
    icon: <Compass size={40} strokeWidth={1.5} />
  },
  {
    title: "Trust",
    desc: "We operate with complete transparency — with our clients, with the doctors we engage, and with the platforms we work with. No shortcuts.",
    icon: <ShieldCheck size={40} strokeWidth={1.5} />
  },
  {
    title: "Impact",
    desc: "We measure success not by deliverables produced but by outcomes achieved — strategies executed, people reached, brands grown.",
    icon: <Rocket size={40} strokeWidth={1.5} />
  },
  {
    title: "Integrity",
    desc: "We decline work that compromises scientific accuracy or regulatory compliance. Our credibility with the medical community is non-negotiable.",
    icon: <MessageSquareText size={40} strokeWidth={1.5} />
  }
];

export default function Values() {
  return (
    <section id="values" className={styles.section}>
      <div className="container">
        <div className={styles.flexContainer}>
          
          <motion.div 
            className={styles.headerBlock}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className={styles.title}>Our Core<br/><span className="text-gold">Values</span></h2>
            <p className={styles.subtitle}>
              Four pillars that guide every engagement, every recommendation and every relationship we build.
            </p>
            <div className={styles.accentLine}></div>
          </motion.div>
          
          <div className={styles.grid}>
            {values.map((value, index) => (
              <motion.div 
                key={index} 
                className={styles.valueCard}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className={styles.iconWrapper}>
                  {value.icon}
                </div>
                <h3 className={styles.cardTitle}>{value.title}</h3>
                <p className={styles.cardDesc}>{value.desc}</p>
              </motion.div>
            ))}
          </div>
          
        </div>
      </div>
    </section>
  );
}
