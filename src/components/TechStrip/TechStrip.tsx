import styles from "./TechStrip.module.css";
import shared from "@/styles/shared.module.css";
import type { Dictionary } from "@/dictionaries/get-dictionary";

export default function TechStrip({ dict }: { dict: Dictionary["techStrip"] }) {
  return (
    <div className={styles.band}>
      <div className={`${shared.container} ${styles.strip}`}>
        <span className={styles.label}>{dict.label}</span>
        <div className={styles.marquee}>
          <div className={styles.track}>
            <div className={styles.group}>
              {dict.tech.map((t) => (
                <span key={t} className={styles.item}>
                  {t}
                </span>
              ))}
            </div>
            <div className={styles.group} aria-hidden="true">
              {dict.tech.map((t) => (
                <span key={t} className={styles.item}>
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
