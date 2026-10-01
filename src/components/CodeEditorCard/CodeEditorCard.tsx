import type { CSSProperties } from "react";
import styles from "./CodeEditorCard.module.css";

type Segment = { text: string; cls?: "kw" | "str" | "muted" };
type Line = {
  id: string;
  chars: number;
  duration: number;
  delay: number;
  prompt?: boolean;
  parts: Segment[];
};

const NBSP = "  ";

const lines: Line[] = [
  {
    id: "comment",
    chars: 15,
    duration: 0.46,
    delay: 0.35,
    parts: [{ text: "// what you get", cls: "muted" }],
  },
  {
    id: "open",
    chars: 27,
    duration: 0.6,
    delay: 0.96,
    parts: [{ text: "export const", cls: "kw" }, { text: " aleksandar = {" }],
  },
  {
    id: "builds",
    chars: 36,
    duration: 0.71,
    delay: 1.71,
    parts: [
      { text: `${NBSP}builds: ` },
      { text: "'fast, polished web apps'", cls: "str" },
      { text: "," },
    ],
  },
  {
    id: "focus",
    chars: 43,
    duration: 0.8,
    delay: 2.57,
    parts: [
      { text: `${NBSP}focus: ` },
      { text: "'feels instant, works everywhere'", cls: "str" },
      { text: "," },
    ],
  },
  {
    id: "turnaround",
    chars: 33,
    duration: 0.68,
    delay: 3.52,
    parts: [
      { text: `${NBSP}turnaround: ` },
      { text: "'days, not months'", cls: "str" },
      { text: "," },
    ],
  },
  {
    id: "close",
    chars: 2,
    duration: 0.3,
    delay: 4.35,
    parts: [{ text: "};" }],
  },
  {
    id: "result",
    chars: 33,
    duration: 0.68,
    delay: 4.8,
    prompt: true,
    parts: [{ text: "❯ build passed · deployed in 1.2s" }],
  },
];

export default function CodeEditorCard() {
  return (
    <div className={styles.wrapper} aria-hidden="true">
      <div className={styles.card}>
        <div className={styles.titlebar}>
          <span className={`${styles.dot} ${styles.dotA}`} />
          <span className={`${styles.dot} ${styles.dotB}`} />
          <span className={`${styles.dot} ${styles.dotC}`} />
          <span className={styles.filename}>aleksandar.config.ts</span>
        </div>
        <div className={styles.body}>
          {lines.map((line, i) => {
            const style = {
              "--steps": line.chars,
              "--dur": `${line.duration}s`,
              "--delay": `${line.delay}s`,
            } as CSSProperties;
            return (
              <div
                key={line.id}
                className={`${styles.line} ${line.prompt ? styles.prompt : ""}`}
                style={style}
              >
                {line.parts.map((part, j) => (
                  <span key={j} className={part.cls ? styles[part.cls] : undefined}>
                    {part.text}
                  </span>
                ))}
                {i === lines.length - 1 && <span className={styles.caret} />}
              </div>
            );
          })}
        </div>
      </div>
      <div className={styles.status}>
        <span className={styles.pulseDot} />
        <span className={styles.statusText}>Currently building — Celeste</span>
      </div>
    </div>
  );
}
