import styles from "./Projects.module.css";
import shared from "@/styles/shared.module.css";
import type { Dictionary } from "@/dictionaries/get-dictionary";

export default function Projects({ dict }: { dict: Dictionary["projects"] }) {
  return (
    <div className={styles.band}>
      <section
        id="work"
        className={`${shared.container} ${styles.projects}`}
        aria-labelledby="projects-heading"
      >
        <div className={styles.intro}>
          <span className={shared.eyebrow} id="projects-heading">
            {dict.eyebrow}
          </span>
          <p className={styles.lead}>{dict.intro}</p>
        </div>
        <div className={styles.grid}>
          {dict.items.map((p, i) => (
            <a key={p.title} href={p.href} className={styles.card}>
              <div className={styles.cardTop}>
                <span className={styles.number}>0{i + 1}</span>
                <span className={styles.year}>{p.year}</span>
              </div>
              <h3>{p.title}</h3>
              <p className={styles.blurb}>{p.blurb}</p>
              <div className={styles.stack}>
                {p.stack.map((s) => (
                  <span key={s} className={styles.stackItem}>
                    {s}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}
