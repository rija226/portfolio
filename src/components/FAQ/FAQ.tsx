"use client";

import { useState } from "react";
import styles from "./FAQ.module.css";
import shared from "@/styles/shared.module.css";
import type { Dictionary } from "@/dictionaries/get-dictionary";

export default function FAQ({ dict }: { dict: Dictionary["faq"] }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className={styles.band}>
      <section
        id="faq"
        className={`${shared.container} ${styles.faq}`}
        aria-labelledby="faq-heading"
      >
        <div className={styles.heading}>
          <span className={shared.eyebrow}>{dict.eyebrow}</span>
          <h2 id="faq-heading">{dict.heading}</h2>
        </div>
        <div className={styles.list}>
          {dict.items.map((f, i) => {
            const open = openIndex === i;
            const panelId = `faq-panel-${i}`;
            return (
              <div key={f.q} className={styles.item}>
                <button
                  type="button"
                  className={styles.question}
                  aria-expanded={open}
                  aria-controls={panelId}
                  onClick={() => setOpenIndex(open ? -1 : i)}
                >
                  <span>{f.q}</span>
                  <span className={styles.sign} aria-hidden="true">
                    {open ? "−" : "+"}
                  </span>
                </button>
                {open && (
                  <p id={panelId} className={styles.answer}>
                    {f.a}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
