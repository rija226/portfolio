import Image from "next/image";
import styles from "./About.module.css";
import shared from "@/styles/shared.module.css";
import type { Dictionary } from "@/dictionaries/get-dictionary";

export default function About({ dict }: { dict: Dictionary["about"] }) {
  return (
    <div className={styles.band}>
      <section
        id="about"
        className={`${shared.container} ${styles.about}`}
        aria-labelledby="about-heading"
      >
        <div className={styles.copy}>
          <span className={shared.eyebrow} id="about-heading">
            {dict.eyebrow}
          </span>
          {dict.paragraphs.map((p, i) => (
            <p key={i} className={i === 0 ? styles.leadParagraph : styles.paragraph}>
              {p}
            </p>
          ))}
          <p className={styles.callout}>{dict.callout}</p>
        </div>
        <div className={styles.photo}>
          <Image
            src="/image.jpg"
            alt={dict.photoAlt}
            fill
            sizes="(min-width: 960px) 420px, 100vw"
            className={styles.photoImg}
          />
        </div>
      </section>
    </div>
  );
}
