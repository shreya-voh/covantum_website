"use client";

import Link from 'next/link';
import { BiLogoFacebook } from 'react-icons/bi';
import { FaInstagram, FaYoutube, FaLinkedin,FaWhatsapp ,FaEnvelope} from 'react-icons/fa';

import { RiTwitterXFill } from 'react-icons/ri';
import Logo from './Logo';
import styles from './Footer.module.css';

const socialLinks = [
  // { Icon: BiLogoFacebook, url: 'https://www.facebook.com/vohglobal', color: '#1877F2', label: 'Facebook' },
  // { Icon: FaInstagram, url: 'https://www.instagram.com/vohglobal/?igshid=NDk5N2NlZjQ%3D', gradient: true, label: 'Instagram' },
  // { Icon: FaYoutube, url: 'https://www.youtube.com/@VoiceofHealthcare', color: '#FF0000', label: 'YouTube' },
  // { Icon: RiTwitterXFill, url: 'https://x.com/vohglobal', color: '#FFFFFF', label: 'X' },
  
  { Icon: FaLinkedin, url: 'https://www.linkedin.com/company/vohglobal/?viewAsMember=true', color: '#0A66C2', label: 'LinkedIn' },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.topSection}>
        <div className={styles.container}>
          <div className={styles.mainGrid}>
            
            {/* Left Column - Logo & About */}
            {/* <div className={styles.logoCol}>
              <div className={styles.logoWrapper}>
                <Logo />
              </div>
              <p className={styles.desc}>
                Covantum is a healthcare advisory and communications firm built at the intersection of science, strategy, data, and emerging technology.
              </p>
            </div> */}

            {/* Right Columns - Links Grid */}
            <div className={styles.linksGrid}>
              <div className={styles.linkGroup}>
                <h4>What We Do</h4>
                <ul>
                  <li><Link href="#">Healthcare Advisory</Link></li>
                  <li><Link href="#">Scientific Communications</Link></li>
                  <li><Link href="#">Doctor Outreach & Engagement</Link></li>
                  <li><Link href="#">Digital Marketing, Media & Technology</Link></li>
                  <li><Link href="#">Brand Consulting</Link></li>
                  <li><Link href="#">Precision Medicine</Link></li>
                </ul>
              </div>
<div className={styles.linkGroup}>
  <h4>Corporate Office</h4>

  <ul>
    <li><Link href="#">104, First Floor, Tower B</Link></li>
    <li><Link href="#">Unitech Business Zone</Link></li>
    <li><Link href="#">Sector 50, Gurgaon</Link></li>
    <li><Link href="#">Haryana - 122018</Link></li>
  </ul>

  <div className={styles.contactInfo}>
    <FaLinkedin
      size={16}
      style={{ color: "#0A66C2" }}
    />

    <Link
      href="https://www.linkedin.com/company/vohglobal/?viewAsMember=true"
      target="_blank"
    >
      LinkedIn
    </Link>
  </div>
  <div className={styles.contactInfo}>
    <FaWhatsapp
      size={16}
      style={{ color: "#25D366" }}
    />

    <Link
      href="https://wa.me/919599193575"
      target="_blank"
    >
      +91 95991 93575
    </Link>
  </div>
</div>

<div className={styles.linkGroup}>
  <h4>Registered Office</h4>

  <ul>
    <li><Link href="#">8B/Tower 3, The Hibiscus</Link></li>
    <li><Link href="#">Sector 50, Nirvana Country</Link></li>
    <li><Link href="#">South City, Gurgaon</Link></li>
    <li><Link href="#">Haryana - 122018</Link></li>
  </ul>
  <div className={styles.contactInfo}>
  <FaEnvelope
    size={16}
    style={{ color: "#FFFFFF" }}
  />

  <Link href="mailto:contact@covantum.com">
    info@covantum.com
  </Link>
</div>
</div>
              {/* <div className={styles.linkGroup}>
                <h4>COVANTUM TV</h4>
                <ul>
                  <li><Link href="#">Expert Speaks</Link></li>
                  <li><Link href="#">Daily Broadcast</Link></li>
                </ul>
                <h4 className={styles.mt4}><Link href="#">PODCAST</Link></h4>
              </div>

              <div className={styles.linkGroup}>
                <h4>EXCLUSIVE</h4>
                <ul>
                  <li><Link href="#">Brands In Focus</Link></li>
                  <li><Link href="#">Idea Leader</Link></li>
                  <li><Link href="#">Listicles</Link></li>
                  <li><Link href="#">Editorials</Link></li>
                  <li><Link href="#">Knowledge Hub</Link></li>
                </ul>
              </div>

              <div className={styles.linkGroup}>
                <h4>EVENTS</h4>
                <ul>
                  <li><Link href="#">Health Awareness</Link></li>
                  <li><Link href="#">Conferences & Summits</Link></li>
                  <li><Link href="#">Brand Solutions</Link></li>
                </ul>
                <h4 className={styles.mt4}><Link href="#">PRODUCTS</Link></h4>
              </div> */}
            </div>
            
          </div>

          {/* Social Row */}
          <div className={styles.socialRow}>
            {/* {socialLinks.map((link, index) => (
              <a 
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialIcon}
                aria-label={link.label}
                style={{ color: link.color || undefined }}
              >
                <link.Icon size={26} />
              </a>
            ))} */}
          </div>

          {/* Bottom Links Row */}
          <div className={styles.bottomLinks}>
            <Link href="/about">About Us</Link>
            <span className={styles.dot}>•</span>
            <Link href="/careers">Careers</Link>
            {/* <span className={styles.dot}>•</span> */}
            {/* <Link href="#">Ethics</Link> */}
            <span className={styles.dot}>•</span>
            <Link href="#">Privacy Policy</Link>
            {/* <span className={styles.dot}>•</span> */}
            {/* <Link href="#">Refund Policy</Link> */}
            <span className={styles.dot}>•</span>
            <Link href="#">Terms & Conditions</Link>
            {/* <span className={styles.dot}>•</span> */}
            {/* <Link href="#">AI Editorial Policy</Link> */}
          </div>

        </div>
      </div>

      {/* Solid Bottom Bar */}
      <div className={styles.bottomBar}>
        &copy; ALL RIGHTS RESERVED BY COVANTUM {new Date().getFullYear()}
      </div>
    </footer>
  );
}
