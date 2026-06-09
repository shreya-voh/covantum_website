import Image from 'next/image';
import styles from './Logo.module.css';

interface LogoProps {
  variant?: 'full' | 'compact';
}

export default function Logo({ variant = 'compact' }: LogoProps) {
  return (
    <div className={styles.logoContainer}>
      {/* Logo Image */}
      <Image
  src="/cov_logo.png"
  alt="Covantum Logo"
  width={100}
  height={80}
/>
      {/* <Image
  src="/covantumlogo.png"
  alt="Covantum Logo"
  width={80}
  height={80}
  loading="eager"
/> */}
      {/* Text */}
      {/* <span className={styles.brandName}>COVANTUM</span> */}
    </div>
  );
}
