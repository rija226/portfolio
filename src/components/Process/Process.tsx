import styles from "./Process.module.css";
import shared from "@/styles/shared.module.css";
import type { Dictionary } from "@/dictionaries/get-dictionary";

export default function Process({ dict }: { dict: Dictionary["process"] }) {
  return (
    <div className={styles.band}>
      <section
        id="process"
        className={`${shared.container} ${styles.process}`}
        aria-labelledby="process-heading"
      >
        <div className={styles.heading}>
          <span className={shared.eyebrow}>{dict.eyebrow}</span>
          <h2 id="process-heading">{dict.heading}</h2>
        </div>
        <ol className={styles.grid}>
          {dict.steps.map((st, i) => (
            <li key={st.title} className={styles.step}>
              <div className={styles.row}>
                <span className={styles.number}>0{i + 1}</span>
                <span className={styles.rule} aria-hidden="true" />
                <span className={styles.arrow}>{st.arrow}</span>
              </div>
              <h3>{st.title}</h3>
              <p>{st.blurb}</p>
            </li>
          ))}
        </ol>
      </section>
    </div>
  );
}
