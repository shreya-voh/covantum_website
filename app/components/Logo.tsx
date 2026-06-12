// import Image from 'next/image';
// import styles from './Logo.module.css';

// interface LogoProps {
//   variant?: 'full' | 'compact';
// }

// export default function Logo({ variant = 'compact' }: LogoProps) {
//   return (
//     <div className={styles.logoContainer}>
//       {/* Logo Image */}
//       <Image
//   src="/cov_logo.png"
//   alt="Covantum Logo"
//   // width={160}
//   // height={45}
//     width={190}
//   height={55}
// />
//     </div>
//   );
// }


import Image from 'next/image';
import styles from './Logo.module.css';

interface LogoProps {
  variant?: 'full' | 'compact';
  white?: boolean;
}

export default function Logo({
  variant = 'compact',
  white = false,
}: LogoProps) {
  return (
    <div className={styles.logoContainer}>
      <Image
        src="/cov_logo.png"
        alt="Covantum Logo"
        width={190}
        height={55}
        className={white ? styles.whiteLogo : ''}
      />
      
    </div>
  );
}