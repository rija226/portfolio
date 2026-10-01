"use client";

import { useState, type ReactNode } from "react";
import styles from "./Header.module.css";

// Nav links are passed in as server-rendered children; this only owns the open/closed state.
export default function HeaderNav({ label, children }: { label: string; children: ReactNode }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        className={styles.toggle}
        aria-label={label}
        aria-expanded={open}
        aria-controls="primary-nav"
        onClick={() => setOpen((o) => !o)}
      >
        <span className={styles.bars} aria-hidden="true" />
      </button>
      <nav
        id="primary-nav"
        className={`${styles.nav} ${open ? styles.open : ""}`}
        aria-label="Primary"
        onClick={(e) => {
          if ((e.target as HTMLElement).closest("a")) setOpen(false);
        }}
      >
        {children}
      </nav>
    </>
  );
}
