"use client";

import { useState, type FormEvent } from "react";
import styles from "./Contact.module.css";
import shared from "@/styles/shared.module.css";
import type { Dictionary } from "@/dictionaries/get-dictionary";

export default function Contact({ dict }: { dict: Dictionary["contact"] }) {
  const { form } = dict;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [topic, setTopic] = useState(form.topics[0]);
  const [message, setMessage] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const body = [
      `${form.nameLabel}: ${name}`,
      `${form.emailLabel}: ${email}`,
      `${form.topicLabel}: ${topic}`,
      "",
      message,
    ].join("\n");
    const mailto = `mailto:${form.recipient}?subject=${encodeURIComponent(
      `${form.subject}: ${topic}`
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
  };

  return (
    <div className={styles.band}>
      <section
        id="contact"
        className={`${shared.container} ${styles.contact}`}
        aria-labelledby="contact-heading"
      >
        <div className={styles.intro}>
          <span className={styles.eyebrow}>{dict.eyebrow}</span>
          <h2 id="contact-heading">{dict.heading}</h2>
          <p className={styles.lead}>{dict.intro}</p>
        </div>
        <div className={styles.grid}>
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.field}>
              <label htmlFor="contact-name">{form.nameLabel}</label>
              <input
                id="contact-name"
                type="text"
                required
                placeholder={form.namePlaceholder}
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={styles.input}
              />
            </div>
            <div className={styles.field}>
              <label htmlFor="contact-email">{form.emailLabel}</label>
              <input
                id="contact-email"
                type="email"
                required
                placeholder={form.emailPlaceholder}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={styles.input}
              />
            </div>
            <div className={styles.field}>
              <span className={styles.topicLabel} id="contact-topic-label">
                {form.topicLabel}
              </span>
              <div className={styles.topics} role="radiogroup" aria-labelledby="contact-topic-label">
                {form.topics.map((t) => (
                  <button
                    key={t}
                    type="button"
                    role="radio"
                    aria-checked={topic === t}
                    className={`${styles.topic} ${topic === t ? styles.topicActive : ""}`}
                    onClick={() => setTopic(t)}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>
            <div className={styles.field}>
              <label htmlFor="contact-message">{form.messageLabel}</label>
              <textarea
                id="contact-message"
                required
                rows={4}
                placeholder={form.messagePlaceholder}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className={`${styles.input} ${styles.textarea}`}
              />
            </div>
            <div className={styles.formFooter}>
              <button type="submit" className={styles.submit}>
                {form.submit}
                <span aria-hidden="true">&#8594;</span>
              </button>
              <span className={styles.helper}>{form.helper}</span>
            </div>
          </form>
          <div className={styles.list}>
            {dict.links.map((l) => (
              <a key={l.label} href={l.href} className={styles.link}>
                <span className={styles.linkText}>
                  <span className={styles.linkLabel}>{l.label}</span>
                  <span className={styles.linkValue}>{l.value}</span>
                </span>
                <span className={styles.linkArrow} aria-hidden="true">
                  &#8599;
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
