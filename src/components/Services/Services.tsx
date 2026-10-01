import styles from "./Services.module.css";
import shared from "@/styles/shared.module.css";
import type { Dictionary } from "@/dictionaries/get-dictionary";

export default function Services({ dict }: { dict: Dictionary["services"] }) {
  return (
    <div className={styles.band}>
      <section
        id="services"
        className={`${shared.container} ${styles.services}`}
        aria-labelledby="services-heading"
      >
        <div className={styles.intro}>
          <div className={styles.heading}>
            <span className={shared.eyebrow}>{dict.eyebrow}</span>
            <h2 id="services-heading">{dict.heading}</h2>
          </div>
          <p className={styles.lead}>{dict.intro}</p>
        </div>
        <div className={styles.grid}>
          {dict.items.map((s, i) => (
            <div key={s.title} className={styles.card}>
              <span className={styles.number}>0{i + 1}</span>
              <h3>{s.title}</h3>
              <p>{s.blurb}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
