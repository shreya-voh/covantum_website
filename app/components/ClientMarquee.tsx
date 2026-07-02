import styles from './ClientMarquee.module.css';

const logosRow1 = [
  { id: 1, src: "https://voh-buckets.s3.ap-south-1.amazonaws.com/stage/1750929444133%3A0.6026340230187128.png", alt: "Lupin" },
  { id: 2, src: "https://voh-buckets.s3.ap-south-1.amazonaws.com/stage/1750932619919%3A0.7113229920799513.png", alt: "Invest India" },
  { id: 3, src: "https://voh-buckets.s3.ap-south-1.amazonaws.com/stage/1750933179439%3A0.6225826135120784.png", alt: "National Cheng Kung University" },
  { id: 4, src: "https://voh-buckets.s3.ap-south-1.amazonaws.com/stage/1750933347671%3A0.8393588210214353.png", alt: "Partner" },
  { id: 5, src: "https://voh-buckets.s3.ap-south-1.amazonaws.com/stage/1750933701679%3A0.6467578318268317.png", alt: "Indian Cancer Society" },
  { id: 6, src: "https://voh-buckets.s3.ap-south-1.amazonaws.com/stage/1750933823154%3A0.5177170000842153.png", alt: "Pfizer" },
  { id: 7, src: "https://voh-buckets.s3.ap-south-1.amazonaws.com/stage/1750934025418%3A0.5992155934196994.png", alt: "AstraZeneca" },
  { id: 8, src: "https://voh-buckets.s3.ap-south-1.amazonaws.com/stage/1750934525728%3A0.803521372546512.png", alt: "Merck" },
  { id: 9, src: "https://voh-buckets.s3.ap-south-1.amazonaws.com/stage/1750934707489%3A0.08456030554991423.png", alt: "National Health Authority" },
  { id: 10, src: "https://voh-buckets.s3.ap-south-1.amazonaws.com/stage/1772735749400%3A0.9648104733011644.png", alt: "Servier" },
  { id: 11, src: "https://voh-buckets.s3.ap-south-1.amazonaws.com/stage/1772735872124%3A0.6614601191637239.png", alt: "Amneal" },
  { id: 12, src: "https://voh-buckets.s3.ap-south-1.amazonaws.com/stage/1772735928507%3A0.3601906316434409.png", alt: "BSV" },
  { id: 13, src: "https://voh-buckets.s3.ap-south-1.amazonaws.com/stage/1772735978106%3A0.5678958166424986.png", alt: "Natco" },
  { id: 14, src: "https://voh-buckets.s3.ap-south-1.amazonaws.com/stage/1772736006699%3A0.2179788325920078.png", alt: "Eisai" },
  { id: 15, src: "https://voh-buckets.s3.ap-south-1.amazonaws.com/stage/1773604296016%3A0.3870093367109806.png", alt: "Akums" },
  { id: 16, src: "https://voh-buckets.s3.ap-south-1.amazonaws.com/stage/1773604323621%3A0.6636846468981661.png", alt: "Alkem" },
  { id: 17, src: "https://voh-buckets.s3.ap-south-1.amazonaws.com/stage/1773604837819%3A0.672202970715237.png", alt: "Vios" },
  { id: 18, src: "https://voh-buckets.s3.ap-south-1.amazonaws.com/stage/1773604869450%3A0.5321187742416427.png", alt: "Dr. Reddy's" },
  { id: 19, src: "https://voh-buckets.s3.ap-south-1.amazonaws.com/stage/1773605198505%3A0.045076647232180855.png", alt: "Hemex Health" },
  { id: 20, src: "https://voh-buckets.s3.ap-south-1.amazonaws.com/stage/1773605226750%3A0.9109111073770346.png", alt: "HORIBA" },
  { id: 21, src: "https://voh-buckets.s3.ap-south-1.amazonaws.com/stage/1773605254666%3A0.020919669364619198.png", alt: "Sebia" },
  { id: 22, src: "https://voh-buckets.s3.ap-south-1.amazonaws.com/stage/1773605283992%3A0.4963219852161751.png", alt: "Metropolis" },
  { id: 23, src: "https://voh-buckets.s3.ap-south-1.amazonaws.com/stage/1773605312777%3A0.20420137703103514.png", alt: "Novo Nordisk" },
  { id: 24, src: "https://voh-buckets.s3.ap-south-1.amazonaws.com/stage/1773605348993%3A0.4235681477706261.jpg", alt: "QAI" },
  { id: 25, src: "https://voh-buckets.s3.ap-south-1.amazonaws.com/stage/1773605409175%3A0.983550176048767.png", alt: "Thermo Fisher Scientific" },
  { id: 26, src: "https://voh-buckets.s3.ap-south-1.amazonaws.com/stage/1773605437700%3A0.056463063737286934.png", alt: "Thalassemics India" },
  { id: 27, src: "https://voh-buckets.s3.ap-south-1.amazonaws.com/stage/1773605465518%3A0.36053438948543204.png", alt: "Wolters Kluwer" },
  { id: 28, src: "https://voh-buckets.s3.ap-south-1.amazonaws.com/stage/1773606623683%3A0.2696882594423573.png", alt: "Guardant" },
  { id: 29, src: "https://voh-buckets.s3.ap-south-1.amazonaws.com/stage/1773606816279%3A0.7625646416396596.png", alt: "Bristol Myers Squibb" },
  { id: 30, src: "https://voh-buckets.s3.ap-south-1.amazonaws.com/stage/1773606862851%3A0.2377921021008529.png", alt: "Agilus Diagnostics" },
  { id: 31, src: "https://voh-buckets.s3.ap-south-1.amazonaws.com/stage/1773607254460%3A0.21686444996321175.png", alt: "Zydus" },
  { id: 32, src: "https://voh-buckets.s3.ap-south-1.amazonaws.com/stage/1773607293587%3A0.11525420741618597.png", alt: "Radiometer" },
  { id: 33, src: "https://voh-buckets.s3.ap-south-1.amazonaws.com/stage/1773610800207%3A0.19674874486205018.jpg", alt: "AIMED" },
  { id: 34, src: "https://voh-buckets.s3.ap-south-1.amazonaws.com/stage/1773610833856%3A0.5296847411774495.jpg", alt: "Amandeep Hospital" },
  { id: 35, src: "https://voh-buckets.s3.ap-south-1.amazonaws.com/stage/1773610863443%3A0.6112528041631005.png", alt: "AMTZ" },
  { id: 36, src: "https://voh-buckets.s3.ap-south-1.amazonaws.com/stage/1773610892847%3A0.16737272647610757.png", alt: "Beckman Coulter" },
  { id: 37, src: "https://voh-buckets.s3.ap-south-1.amazonaws.com/stage/1773610922110%3A0.914603753249621.png", alt: "Cipla" },
];

const logosRow2 = [
  { id: 38, src: "https://voh-buckets.s3.ap-south-1.amazonaws.com/stage/1773610951307%3A0.21114193972344308.jpg", alt: "CooperSurgical" },
  { id: 39, src: "https://voh-buckets.s3.ap-south-1.amazonaws.com/stage/1773610978652%3A0.7435113650148077.png", alt: "Dozee" },
  { id: 40, src: "https://voh-buckets.s3.ap-south-1.amazonaws.com/stage/1773611008260%3A0.1367538773223378.png", alt: "Emversity" },
  { id: 41, src: "https://voh-buckets.s3.ap-south-1.amazonaws.com/stage/1773611034934%3A0.21774836392906405.png", alt: "Esperer Nutrition" },
  { id: 42, src: "https://voh-buckets.s3.ap-south-1.amazonaws.com/stage/1773611063264%3A0.5826181776836514.png", alt: "Fortis Hospital" },
  { id: 43, src: "https://voh-buckets.s3.ap-south-1.amazonaws.com/stage/1773611095419%3A0.14450532495936974.jpg", alt: "Forza Freedom" },
  { id: 44, src: "https://voh-buckets.s3.ap-south-1.amazonaws.com/stage/1773611125241%3A0.9797560325990309.jpg", alt: "Frost & Sullivan" },
  { id: 45, src: "https://voh-buckets.s3.ap-south-1.amazonaws.com/stage/1773611156123%3A0.44814237048215877.png", alt: "Apollo Hospitals" },
  { id: 46, src: "https://voh-buckets.s3.ap-south-1.amazonaws.com/stage/1773611209189%3A0.06493909329517189.png", alt: "IHCI" },
  { id: 47, src: "https://voh-buckets.s3.ap-south-1.amazonaws.com/stage/1773611238009%3A0.14825097091190242.png", alt: "Narayana Health" },
  { id: 48, src: "https://voh-buckets.s3.ap-south-1.amazonaws.com/stage/1773611265093%3A0.4115298223732802.png", alt: "Novartis" },
  { id: 49, src: "https://voh-buckets.s3.ap-south-1.amazonaws.com/stage/1773611296456%3A0.20099836581588093.png", alt: "Altus Airflow" },
  { id: 50, src: "https://voh-buckets.s3.ap-south-1.amazonaws.com/stage/1773611325382%3A0.929024662811615.png", alt: "Polymed" },
  { id: 51, src: "https://voh-buckets.s3.ap-south-1.amazonaws.com/stage/1773611355841%3A0.4222477314618629.png", alt: "Medi Karma" },
  { id: 52, src: "https://voh-buckets.s3.ap-south-1.amazonaws.com/stage/1773611393349%3A0.003856242256204734.png", alt: "DiaSys" },
  { id: 53, src: "https://voh-buckets.s3.ap-south-1.amazonaws.com/stage/1773611424453%3A0.40735662201112244.png", alt: "Transasia" },
  { id: 54, src: "https://voh-buckets.s3.ap-south-1.amazonaws.com/stage/1773611458726%3A0.23638478862947832.png", alt: "Haleon" },
  { id: 55, src: "https://voh-buckets.s3.ap-south-1.amazonaws.com/stage/1773611494734%3A0.8413814919474432.jpg", alt: "iCube" },
  { id: 56, src: "https://voh-buckets.s3.ap-south-1.amazonaws.com/stage/1773611533998%3A0.5844330184525188.png", alt: "PCOS Society India" },
  { id: 57, src: "https://voh-buckets.s3.ap-south-1.amazonaws.com/stage/1773611567065%3A0.5667035374408087.png", alt: "Jobizo" },
  { id: 58, src: "https://voh-buckets.s3.ap-south-1.amazonaws.com/stage/1773611607875%3A0.9049553736790086.png", alt: "Kriya" },
  { id: 59, src: "https://voh-buckets.s3.ap-south-1.amazonaws.com/stage/1773611639372%3A0.9916191750137817.jpeg", alt: "Brawn Laboratories" },
  { id: 60, src: "https://voh-buckets.s3.ap-south-1.amazonaws.com/stage/1773611693592%3A0.46592097599832294.png", alt: "Cepheid" },
  { id: 61, src: "https://voh-buckets.s3.ap-south-1.amazonaws.com/stage/1773611737484%3A0.16394408205111577.jpg", alt: "Partner" },
  { id: 62, src: "https://voh-buckets.s3.ap-south-1.amazonaws.com/stage/1773611791299%3A0.7179325714039855.jpg", alt: "Meyer Vitabiotics" },
  { id: 63, src: "https://voh-buckets.s3.ap-south-1.amazonaws.com/stage/1773611817870%3A0.9123266300814754.png", alt: "NeoWinn Biotech" },
  { id: 64, src: "https://voh-buckets.s3.ap-south-1.amazonaws.com/stage/1773611856326%3A0.06884316348403785.png", alt: "Noble Hospital" },
  { id: 65, src: "https://voh-buckets.s3.ap-south-1.amazonaws.com/stage/1773611885481%3A0.9977524315422701.png", alt: "Fitterfly" },
  { id: 66, src: "https://voh-buckets.s3.ap-south-1.amazonaws.com/stage/1773611912605%3A0.7669886549304685.png", alt: "Philips Healthcare" },
  { id: 67, src: "https://voh-buckets.s3.ap-south-1.amazonaws.com/stage/1773611953519%3A0.837006202644248.png", alt: "Praxis Global Alliance" },
  { id: 68, src: "https://voh-buckets.s3.ap-south-1.amazonaws.com/stage/1773612009699%3A0.33081176237064125.png", alt: "Roche" },
  { id: 69, src: "https://voh-buckets.s3.ap-south-1.amazonaws.com/stage/1773612036131%3A0.9440076452119619.jpg", alt: "Samarth Life Sciences" },
  { id: 70, src: "https://voh-buckets.s3.ap-south-1.amazonaws.com/stage/1773612218119%3A0.5810660355973922.jpg", alt: "ShineLife" },
  { id: 71, src: "https://voh-buckets.s3.ap-south-1.amazonaws.com/stage/1773612251392%3A0.2321078022971106.jpg", alt: "Snibe Diagnostic" },
  { id: 72, src: "https://voh-buckets.s3.ap-south-1.amazonaws.com/stage/1773612285141%3A0.4347868863946083.jpg", alt: "Unicorn DenMart" },
  { id: 73, src: "https://voh-buckets.s3.ap-south-1.amazonaws.com/stage/1773612312578%3A0.19875066297416288.jpg", alt: "Yashoda Medicity" },
];

function MarqueeRow({
  logos,
  direction,
}: {
  logos: { id: number; src: string; alt: string }[];
  direction: 'rtl' | 'ltr';
}) {
  const tripled = [...logos, ...logos, ...logos];
  return (
    <div className={styles.marqueeWrapper}>
      <div
        className={`${styles.marqueeContent} ${direction === 'rtl' ? styles.scrollRtl : styles.scrollLtr}`}
      >
        {tripled.map((logo, i) => (
          <div key={`${logo.id}-${i}`} className={styles.logoTile}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={logo.src} alt={logo.alt} className={styles.logoImg} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function ClientMarquee() {
  return (
    <section className={styles.marqueeSection}>
      <div className={styles.container}>
        <p className={styles.label}>TRUSTED BY LEADING HEALTHCARE BRANDS</p>
        <div className={styles.rows}>
          <MarqueeRow logos={logosRow1} direction="rtl" />
          <MarqueeRow logos={logosRow2} direction="ltr" />
        </div>
      </div>
    </section>
  );
}
