"use client";

import styles from './HeroSection.module.css';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className={styles.hero}>
      <div 
        className={styles.videoBackground} 
        style={{
          background: 'url("https://images.unsplash.com/photo-1576091160550-2173ff9e5ee5?q=80&w=2069&auto=format&fit=crop") no-repeat center center',
          backgroundSize: 'cover'
        }}
      />
      <div className={styles.overlay} />
      
      <div className={styles.content}>
        <h1 className={styles.title}>
          Thinking clearly. <br />
          <span className={styles.highlight}>Communicating</span> effectively.
        </h1>
        <p className={styles.subtitle}>
          Covantum is where healthcare companies, brands, and medical professionals come to grow with purpose through precision advisory and communications.
        </p>
        
        <div className={styles.ctaGroup}>
          <Link href="/about" className={styles.primaryBtn}>
            Discover Our Vision
          </Link>
          <Link href="/#practice-areas" className={styles.secondaryBtn}>
            Explore Practices
          </Link>
        </div>
      </div>
    </section>
  );
}
