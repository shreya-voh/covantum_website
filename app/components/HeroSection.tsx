// // "use client";

// // import { motion } from 'framer-motion';
// // import Link from 'next/link';
// // import { ArrowRight } from 'lucide-react';
// // import styles from './HeroSection.module.css';

// // const textVariant: any = {
// //   hidden: { opacity: 0, y: 30 },
// //   visible: (i: number) => ({
// //     opacity: 1,
// //     y: 0,
// //     transition: {
// //       delay: i * 0.15,
// //       duration: 0.8,
// //       ease: [0.215, 0.61, 0.355, 1]
// //     }
// //   })
// // };

// // export default function HeroSection() {
// //   return (
// //     <section className={styles.hero}>
// //       {/* Dynamic Animated Background */}
// //       <div className={styles.bgWrapper}>
// //         <div className={styles.gradientOrbPrimary}></div>
// //         <div className={styles.gradientOrbSecondary}></div>
        
// //         {/* Abstract Hexagons */}
// //         <motion.div 
// //           className={`${styles.hexagon} ${styles.hex1}`}
// //           animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
// //           transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
// //         />
// //         <motion.div 
// //           className={`${styles.hexagon} ${styles.hex2}`}
// //           animate={{ y: [0, 30, 0], rotate: [0, -10, 0] }}
// //           transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
// //         />
// //       </div>

// //       <div className={styles.container}>
// //         <div className={styles.content}>
// //           <motion.div 
// //             initial="hidden"
// //             animate="visible"
// //             custom={0}
// //             variants={textVariant}
// //             className={styles.eyebrow}
// //           >
// //             A Healthcare-First Firm
// //           </motion.div>
          
// //           <motion.h1 
// //             initial="hidden"
// //             animate="visible"
// //             custom={1}
// //             variants={textVariant}
// //             className={styles.title}
// //           >
// //             Thinking <span className="text-gold">clearly.</span><br />
// //             Communicating <span className="text-teal">effectively.</span>
// //           </motion.h1>
          
// //           <motion.p 
// //             initial="hidden"
// //             animate="visible"
// //             custom={2}
// //             variants={textVariant}
// //             className={styles.subtitle}
// //           >
// //             Covantum is where healthcare companies, brands, and medical professionals come to think more clearly, communicate more effectively, and grow with purpose.
// //             </motion.p>
          
// //           <motion.div 
// //             initial="hidden"
// //             animate="visible"
// //             custom={3}
// //             variants={textVariant}
// //             className={styles.ctaGroup}
// //           >
// //             <Link href="/about" className="btn btn-primary">
// //               Discover Our Vision
// //               <ArrowRight size={18} className={styles.btnIcon} />
// //             </Link>
// //             <Link href="/#practice-areas" className="btn btn-secondary">
// //               Explore Practices
// //             </Link>
// //           </motion.div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }

// "use client";

// import { motion } from "framer-motion";
// import Link from "next/link";
// import { ArrowRight } from "lucide-react";
// import styles from "./HeroSection.module.css";

// const textVariant: any = {
//   hidden: { opacity: 0, y: 30 },
//   visible: (i: number) => ({
//     opacity: 1,
//     y: 0,
//     transition: {
//       delay: i * 0.15,
//       duration: 0.8,
//       ease: [0.215, 0.61, 0.355, 1],
//     },
//   }),
// };

// // const hexagons = [
// //   { color: "#D4AF5A", size: 140, top: "5%", left: "35%", duration: 12 },
// //   { color: "#2A9D8F", size: 90, top: "15%", left: "75%", duration: 15 },
// //   { color: "#002B5B", size: 180, top: "45%", left: "15%", duration: 18 },
// //   { color: "#D4AF5A", size: 70, top: "70%", left: "70%", duration: 10 },
// //   { color: "#2A9D8F", size: 110, top: "50%", left: "75%", duration: 14 },
// //   { color: "#002B5B", size: 100, top: "10%", left: "5%", duration: 16 },
// //   { color: "#D4AF5A", size: 60, top: "35%", left: "55%", duration: 11 },
// //   { color: "#2A9D8F", size: 130, top: "75%", left: "30%", duration: 17 },
// //   { color: "#002B5B", size: 80, top: "60%", left: "50%", duration: 13 },
// //   { color: "#D4AF5A", size: 100, top: "25%", left: "25%", duration: 15 },
// //   { color: "#2A9D8F", size: 70, top: "80%", left: "85%", duration: 12 },
// //   { color: "#002B5B", size: 120, top: "35%", left: "85%", duration: 20 },
// // ];
// const hexagons = [
//   { color: "#D4AF5A", size: 70, top: "10%", left: "10%", duration: 15 },
//   { color: "#2A9D8F", size: 90, top: "25%", left: "20%", duration: 18 },
//   { color: "#002B5B", size: 110, top: "75%", left: "15%", duration: 16 },

//   { color: "#D4AF5A", size: 100, top: "15%", left: "40%", duration: 12 },
//   { color: "#2A9D8F", size: 130, top: "65%", left: "35%", duration: 14 },
//   { color: "#002B5B", size: 90, top: "40%", left: "50%", duration: 20 },

//   { color: "#D4AF5A", size: 180, top: "15%", left: "65%", duration: 18 },
//   { color: "#2A9D8F", size: 150, top: "60%", left: "65%", duration: 15 },
//   { color: "#002B5B", size: 220, top: "35%", left: "75%", duration: 22 },

//   { color: "#D4AF5A", size: 120, top: "80%", left: "75%", duration: 17 },
//   { color: "#2A9D8F", size: 90, top: "85%", left: "55%", duration: 12 },
//   { color: "#002B5B", size: 140, top: "10%", left: "85%", duration: 19 },
// ];
// export default function HeroSection() {
//   return (
//     <section className={styles.hero}>
//       <div className={styles.bgWrapper}>
//         <div className={styles.gradientOrbPrimary}></div>
//         <div className={styles.gradientOrbSecondary}></div>
//       </div>

//       <div
//         className={styles.container}
//         style={{
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "space-between",
//           gap: "4rem",
//         }}
//       >
//         {/* LEFT CONTENT */}
//         <div className={styles.content}>
//           <motion.div
//             initial="hidden"
//             animate="visible"
//             custom={0}
//             variants={textVariant}
//             className={styles.eyebrow}
//           >
//             A Healthcare-First Firm
//           </motion.div>

//           <motion.h1
//             initial="hidden"
//             animate="visible"
//             custom={1}
//             variants={textVariant}
//             className={styles.title}
//           >
//             Thinking <span className="text-gold">clearly.</span>
//             <br />
//             Communicating <span className="text-teal">effectively.</span>
//           </motion.h1>

//           <motion.p
//             initial="hidden"
//             animate="visible"
//             custom={2}
//             variants={textVariant}
//             className={styles.subtitle}
//           >
//             Covantum is where healthcare companies, brands, and medical
//             professionals come to think more clearly, communicate more
//             effectively, and grow with purpose.
//           </motion.p>

//           <motion.div
//             initial="hidden"
//             animate="visible"
//             custom={3}
//             variants={textVariant}
//             className={styles.ctaGroup}
//           >
//             <Link href="/about" className="btn btn-primary">
//               Discover Our Vision
//               <ArrowRight size={18} className={styles.btnIcon} />
//             </Link>

//             <Link href="/#practice-areas" className="btn btn-secondary">
//               Explore Practices
//             </Link>
//           </motion.div>
//         </div>

//         {/* RIGHT SIDE ANIMATION */}
//         <div
//           style={{
//             flex: 1,
//             position: "relative",
//             minHeight: "550px",
//             overflow: "hidden",
//           }}
//         >
//           {/* {hexagons.map((hex, index) => (
//             <motion.div
//               key={index}
//               animate={{
//                 y: [0, -25, 0],
//                 rotate: [0, 15, 0],
//                 opacity: [0.1, 0.45, 0.1],
//               }}
//               transition={{
//                 duration: hex.duration,
//                 repeat: Infinity,
//                 ease: "easeInOut",
//               }}
//               style={{
//                 position: "absolute",
//                 top: hex.top,
//                 left: hex.left,
//               }}
//             >
//               <svg
//                 width={hex.size}
//                 height={hex.size}
//                 viewBox="0 0 100 100"
//               >
//                 <polygon
//                   points="25,5 75,5 100,50 75,95 25,95 0,50"
//                   fill="transparent"
//                   stroke={hex.color}
//                   strokeWidth="5"
//                   style={{
//                     filter: `drop-shadow(0 0 12px ${hex.color})`,
//                   }}
//                 />
//               </svg>
//             </motion.div>
//           ))} */}
// {hexagons.map((hex, index) => (
//   <motion.div
//     key={index}
//     animate={{
//       y: [0, -25, 0],
//       rotate: [0, 15, 0],
//       opacity: [0.15, 0.45, 0.15],
//     }}
//     transition={{
//       duration: hex.duration,
//       repeat: Infinity,
//       ease: "easeInOut",
//     }}
//     style={{
//       position: "absolute",
//       top: hex.top,
//       left: hex.left,
//       transform: "translate(-50%, -50%)",
//       pointerEvents: "none",
//     }}
//   >
//     <svg
//       width={hex.size}
//       height={hex.size}
//       viewBox="0 0 100 100"
//     >
//       <polygon
//         points="25,5 75,5 100,50 75,95 25,95 0,50"
//         fill="transparent"
//         stroke={hex.color}
//         strokeWidth="4"
//         opacity="0.7"
//         style={{
//           filter: `drop-shadow(0 0 10px ${hex.color})`,
//         }}
//       />
//     </svg>
//   </motion.div>
// ))}
//           {/* Floating Dots */}
//           {[...Array(30)].map((_, i) => (
//             <motion.div
//               key={`dot-${i}`}
//               animate={{
//                 y: [0, -20, 0],
//                 opacity: [0.1, 1, 0.1],
//                 scale: [1, 1.4, 1],
//               }}
//               transition={{
//                 duration: 3 + (i % 5),
//                 repeat: Infinity,
//                 ease: "easeInOut",
//               }}
//               style={{
//                 position: "absolute",
//                 width: "4px",
//                 height: "4px",
//                 borderRadius: "50%",
//                 background:
//                   i % 3 === 0
//                     ? "#D4AF5A"
//                     : i % 3 === 1
//                     ? "#2A9D8F"
//                     : "#002B5B",
//                 top: `${(i * 17) % 100}%`,
//                 left: `${(i * 23) % 100}%`,
//                 boxShadow: "0 0 10px currentColor",
//               }}
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }


"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import styles from "./HeroSection.module.css";

const textVariant: any = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.8,
      ease: [0.215, 0.61, 0.355, 1],
    },
  }),
};

const hexagons = [
  { color: "#D4AF5A", size: 180, top: "15%", left: "78%", duration: 18 },
  { color: "#2A9D8F", size: 150, top: "60%", left: "72%", duration: 15 },
  { color: "#002B5B", size: 220, top: "35%", left: "90%", duration: 22 },
  { color: "#D4AF5A", size: 120, top: "80%", left: "85%", duration: 17 },
  { color: "#2A9D8F", size: 90, top: "25%", left: "85%", duration: 12 },
  { color: "#002B5B", size: 140, top: "10%", left: "95%", duration: 19 },
];

export default function HeroSection() {
  return (
    <section className={styles.hero}>
      {/* Background */}
      <div className={styles.bgWrapper}>
        <div className={styles.gradientOrbPrimary}></div>
        <div className={styles.gradientOrbSecondary}></div>
      </div>

      {/* Hexagon Layer */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          overflow: "hidden",
          pointerEvents: "none",
          zIndex: 1,
        }}
      >
        {hexagons.map((hex, index) => (
          <motion.div
            key={index}
            animate={{
              y: [0, -25, 0],
              rotate: [0, 15, 0],
              opacity: [0.1, 0.4, 0.1],
            }}
            transition={{
              duration: hex.duration,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{
              position: "absolute",
              top: hex.top,
              left: hex.left,
              transform: "translate(-50%, -50%)",
            }}
          >
            <svg
              width={hex.size}
              height={hex.size}
              viewBox="0 0 100 100"
            >
              <polygon
                points="25,5 75,5 100,50 75,95 25,95 0,50"
                fill="transparent"
                stroke={hex.color}
                strokeWidth="4"
                opacity="0.7"
                style={{
                  filter: `drop-shadow(0 0 12px ${hex.color})`,
                }}
              />
            </svg>
          </motion.div>
        ))}

        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -20, 0],
              opacity: [0.1, 1, 0.1],
              scale: [1, 1.4, 1],
            }}
            transition={{
              duration: 3 + (i % 5),
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{
              position: "absolute",
              width: 4,
              height: 4,
              borderRadius: "50%",
              top: `${(i * 17) % 100}%`,
              left: `${60 + ((i * 23) % 40)}%`,
              background:
                i % 3 === 0
                  ? "#D4AF5A"
                  : i % 3 === 1
                  ? "#2A9D8F"
                  : "#002B5B",
              boxShadow: "0 0 10px currentColor",
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div
        className={styles.container}
        style={{
          position: "relative",
          zIndex: 2,
        }}
      >
        <div
          className={styles.content}
          style={{
            maxWidth: "700px",
          }}
        >
          <motion.div
            initial="hidden"
            animate="visible"
            custom={0}
            variants={textVariant}
            className={styles.eyebrow}
          >
            {/* A Healthcare-First Firm */}
A Strategic Healthcare Partner
            {/* A Healthcare Advisory Firm
A Healthcare Consulting & Communications Firm
A Healthcare Intelligence Firm
A Healthcare Growth Partner */}
          </motion.div>

          <motion.h1
            initial="hidden"
            animate="visible"
            custom={1}
            variants={textVariant}
            className={styles.title}
          >
            {/* Communicate clearly. Grow with purpose. */}
            {/* Thinking <span className="text-gold">clearly.</span>
            <br />
            Communicating <span className="text-teal">effectively.</span> */}

            <span style={{ whiteSpace: "nowrap" }}>
              Precision <span className="text-gold">Thinking.</span>
            </span>{" "}
            <span style={{ whiteSpace: "nowrap" }}>
              Proven <span className="text-teal">Outcomes.</span>
            </span>
          </motion.h1>

          <motion.p
            initial="hidden"
            animate="visible"
            custom={2}
            variants={textVariant}
            className={styles.subtitle}
          >
           Covantum helps healthcare companies, brands and medical professionals communicate more effectively, grow with purpose and build lasting credibility.
          </motion.p>

          <motion.div
            initial="hidden"
            animate="visible"
            custom={3}
            variants={textVariant}
            className={styles.ctaGroup}
          >
            <Link href="/about" className="btn btn-primary">
              Discover Our Vision
              <ArrowRight size={18} className={styles.btnIcon} />
            </Link>

            <Link href="/#practice-areas" className="btn btn-secondary">
              Explore Practices
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}