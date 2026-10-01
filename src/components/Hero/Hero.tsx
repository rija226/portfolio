import styles from "./Hero.module.css";
import shared from "@/styles/shared.module.css";
import CodeEditorCard from "@/components/CodeEditorCard/CodeEditorCard";
import type { Dictionary } from "@/dictionaries/get-dictionary";

export default function Hero({ dict }: { dict: Dictionary["hero"] }) {
  return (
    <section className={`${shared.container} ${styles.hero}`}>
      <div className={styles.grid}>
        <div className={styles.copy}>
          <div className={styles.badge}>
            <span className={styles.badgeDot} aria-hidden="true" />
            {dict.availability}
          </div>
          <h1 className={styles.heading}>
            {dict.heading}
            <span className={styles.dot}>.</span>
          </h1>
          <p className={styles.intro}>{dict.intro}</p>
          <div className={styles.actions}>
            <a href={dict.primaryCta.href} className={styles.primaryCta}>
              {dict.primaryCta.label}
              <span aria-hidden="true">&#8594;</span>
            </a>
            <a href={dict.secondaryCta.href} className={styles.secondaryCta}>
              {dict.secondaryCta.label}
            </a>
          </div>
        </div>
        <div className={styles.visual}>
          <CodeEditorCard />
        </div>
      </div>
    </section>
  );
}
