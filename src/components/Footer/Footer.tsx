import styles from "./Footer.module.css";
import shared from "@/styles/shared.module.css";
import type { Dictionary } from "@/dictionaries/get-dictionary";

export default function Footer({ dict }: { dict: Dictionary["footer"] }) {
  return (
    <div className={styles.band}>
      <footer className={`${shared.container} ${styles.footer}`}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <div className={styles.brandHead}>
              <span className={styles.mark} aria-hidden="true">
                {dict.name.charAt(0)}
                <span className={styles.markDot}>.</span>
              </span>
              <span className={styles.wordmark}>{dict.name}</span>
            </div>
            <p className={styles.blurb}>{dict.blurb}</p>
            <div className={styles.status}>
              <span className={styles.statusDot} aria-hidden="true" />
              {dict.status}
            </div>
          </div>
          <nav className={styles.sections} aria-label={dict.sectionsLabel}>
            <span className={styles.sectionsLabel}>{dict.sectionsLabel}</span>
            {dict.sections.map((s) => (
              <a key={s.href} href={s.href}>
                {s.label}
              </a>
            ))}
          </nav>
        </div>
        <div className={styles.bottom}>
          <span>{dict.copyright}</span>
          <div className={styles.bottomRight}>
            <span>{dict.builtWith}</span>
            <a href="#" className={styles.backToTop}>
              {dict.backToTop}
              <span aria-hidden="true">&#8593;</span>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
