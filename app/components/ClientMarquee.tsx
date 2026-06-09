import styles from './ClientMarquee.module.css';

const clients = [
  "Pfizer",
  "Novartis",
  "AstraZeneca",
  "GlaxoSmithKline",
  "Johnson & Johnson",
  "Merck",
  "Sanofi",
  "Roche",
  "Bayer",
  "Abbott"
];

export default function ClientMarquee() {
  return (
    <section className={styles.marqueeSection}>
      <div className={styles.container}>
        <p className={styles.label}>TRUSTED BY LEADING HEALTHCARE BRANDS</p>
        <div className={styles.marqueeWrapper}>
          <div className={styles.marqueeContent}>
            {/* Render twice for seamless loop */}
            {[...clients, ...clients, ...clients].map((client, i) => (
              <span key={i} className={styles.clientItem}>
                {client}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
