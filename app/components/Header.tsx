"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './Header.module.css';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`${styles.header} ${scrolled ? styles.headerScrolled : ''}`}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <span>COV<span className={styles.logoAccent}>A</span>NTUM</span>
        </Link>
        <nav className={styles.nav}>
          <Link href="/about" className={styles.navLink}>About Us</Link>
          <Link href="/#practice-areas" className={styles.navLink}>Practice Areas</Link>
          <Link href="/#values" className={styles.navLink}>Our Values</Link>
          <Link href="/contact" className={styles.contactBtn}>Contact</Link>
        </nav>
      </div>
    </header>
  );
}
