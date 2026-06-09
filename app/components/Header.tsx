"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';
import styles from './Header.module.css';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
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
        <Link href="/" className={styles.logoLink}>
          <Logo />
        </Link>
        
        <nav className={styles.navDesktop}>
          <Link href="/about" className={styles.navLink}>About Us</Link>
          <Link href="/#practice-areas" className={styles.navLink}>What We Do</Link>
          <Link href="/#values" className={styles.navLink}>Our Values</Link>
          <Link href="/#who-we-serve" className={styles.navLink}>Who We Serve</Link>
           <Link href="/careers" className={styles.navLink}>Careers</Link>
          <Link href="/contact" className={styles.contactBtn}>Let's Connect</Link>
           
        </nav>

        <button 
          className={styles.mobileMenuBtn} 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className={styles.mobileNav}
          >
            <Link href="/about" className={styles.mobileNavLink} onClick={() => setMobileMenuOpen(false)}>About Us</Link>
            <Link href="/#practice-areas" className={styles.mobileNavLink} onClick={() => setMobileMenuOpen(false)}>What We Do</Link>
            <Link href="/#values" className={styles.mobileNavLink} onClick={() => setMobileMenuOpen(false)}>Our Values</Link>
            <Link href="/#who-we-serve" className={styles.mobileNavLink} onClick={() => setMobileMenuOpen(false)}>Who We Serve</Link>
            <Link href="/contact" className={styles.mobileContactBtn} onClick={() => setMobileMenuOpen(false)}>Let's Connect</Link>
          <Link
  href="/careers"
  className={styles.mobileNavLink}
  onClick={() => setMobileMenuOpen(false)}
>
  Careers
</Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
