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
    chars: 8,
    duration: 0.39,
    delay: 0.35,
    parts: [{ text: "// tl;dr", cls: "muted" }],
  },
  {
    id: "open",
    chars: 27,
    duration: 0.6,
    delay: 0.89,
    parts: [{ text: "export const", cls: "kw" }, { text: " aleksandar = {" }],
  },
  {
    id: "role",
    chars: 38,
    duration: 0.74,
    delay: 1.64,
    parts: [
      { text: `${NBSP}role: ` },
      { text: "'full-stack, mostly frontend'", cls: "str" },
      { text: "," },
    ],
  },
  {
    id: "stack",
    chars: 35,
    duration: 0.7,
    delay: 2.53,
    parts: [
      { text: `${NBSP}stack: [` },
      { text: "'react'", cls: "str" },
      { text: ", " },
      { text: "'next'", cls: "str" },
      { text: ", " },
      { text: "'node'", cls: "str" },
      { text: "]," },
    ],
  },
  {
    id: "available",
    chars: 18,
    duration: 0.5,
    delay: 3.38,
    parts: [{ text: `${NBSP}available: ` }, { text: "true", cls: "kw" }, { text: "," }],
  },
  {
    id: "close",
    chars: 2,
    duration: 0.3,
    delay: 4.03,
    parts: [{ text: "};" }],
  },
  {
    id: "result",
    chars: 33,
    duration: 0.68,
    delay: 4.48,
    prompt: true,
    parts: [{ text: "❯ build passed · deployed in 1.2s" }],
  },
];

export default function CodeEditorCard({ status }: { status: string }) {
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
        <span className={styles.statusText}>{status}</span>
      </div>
    </div>
  );
}
