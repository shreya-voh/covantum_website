"use client";

import Link from 'next/link';
import { BiLogoFacebook } from 'react-icons/bi';
import { FaInstagram, FaYoutube, FaLinkedin,FaWhatsapp ,FaEnvelope} from 'react-icons/fa';
import Image from "next/image";
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

  {/* Left Column - Company Logo & Content */}

  <div className={styles.logoSection}>
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      textAlign: "left",
      width: "100%",
    }}
  >
    
      <Image
      src="/cov_logo.png"
      alt="Covantum Logo"
      width={190}
      height={55}
      style={{
        filter: "brightness(0) invert(1)",
        display: "block",
        marginLeft: 0
      }}/>

    <p
      style={{
        marginTop: "20px",
        lineHeight: "1.8",
        maxWidth: "400px",
      }}
      className={styles.companyDesc}
    >
     Covantum is where healthcare companies, brands, and medical professionals come to think more clearly, communicate more effectively, and grow with purpose.
   
    </p>
  </div>
</div>

  {/* Center Column */}
  <div className={styles.linkGroup}>
    <h4>What We Do</h4>
    <ul>
      <li><Link href="/#practice-areas">Healthcare Advisory</Link></li>
      <li><Link href="/#practice-areas">Scientific Communications</Link></li>
      <li><Link href="/#practice-areas">Doctor Engagement</Link></li>
      <li><Link href="/#practice-areas">Digital Marketing, Media & Technology</Link></li>
    </ul>
  </div>

  {/* Right Column */}
  <div className={styles.linkGroup } >
    <h4>Corporate Office</h4>

    <ul >
      <li>104, First Floor, Tower B</li>
      <li>Unitech Business Zone</li>
      <li>Sector 50, Gurgaon</li>
      <li>Haryana - 122018</li>
    </ul>

    <div className={styles.contactInfo}>
      <FaLinkedin size={16} style={{ color: "#0A66C2" }} />
      <Link
        href="https://www.linkedin.com/company/vohglobal/?viewAsMember=true"
        target="_blank"
      >
        LinkedIn
      </Link>
    </div>

    <div className={styles.contactInfo}>
      <FaWhatsapp size={16} style={{ color: "#25D366" }} />
      <Link
        href="https://wa.me/919599193575"
        target="_blank"
      >
        +91 95991 93575
      </Link>
    </div>
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


            <Link href="/privacy-policy">Privacy Policy</Link>
            <span className={styles.dot}>•</span>

            <Link href="/terms-and-conditions">Terms & Conditions</Link>
            <span className={styles.dot}>•</span>

            <Link href="/cookie-policy">Cookie Policy</Link>
            <span className={styles.dot}>•</span>

            <Link href="/medical-disclaimer">Medical Disclaimer </Link>
              <span className={styles.dot}>•</span>

            <Link href="/ai-use-policy">AI & Generative AI Use Policy</Link>

          </div>

        </div>
      </div>

      {/* Solid Bottom Bar */}
      <div className={styles.bottomBar}>
        &copy; ALL RIGHTS RESERVED BY COVANTUM {new Date().getFullYear()} (A unit of VOH MEDIA TECH PVT LTD)
      </div>
    </footer>
  );
}
