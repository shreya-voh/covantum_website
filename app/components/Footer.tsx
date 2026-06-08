"use client";

import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.col} style={{ flex: '2', minWidth: '300px' }}>
            <div className={styles.logo}>
              <span>COV<span className={styles.logoAccent}>A</span>NTUM</span>
            </div>
            <p className={styles.desc}>
              Healthcare Advisory & Communications.<br />
              Precision thinking. Proven outcomes.
            </p>
          </div>
          
          <div className={styles.col}>
            <h3>Company</h3>
            <ul className={styles.links}>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/#practice-areas">Practice Areas</Link></li>
              <li><Link href="/#values">Our Values</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>
          
          <div className={styles.col}>
            <h3>Contact</h3>
            <ul className={styles.links}>
              <li>info@covantum.com</li>
              <li>+91 98765 43210</li>
            </ul>
          </div>
        </div>
        
        <div className={styles.bottom}>
          &copy; {new Date().getFullYear()} Covantum. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
