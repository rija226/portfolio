"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import styles from "./StickyHeader.module.css";

export default function StickyHeader({ children }: { children: ReactNode }) {
  const sentinelRef = useRef<HTMLDivElement>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const el = sentinelRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => setScrolled(!entry.isIntersecting),
      { threshold: 0 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div ref={sentinelRef} className={styles.sentinel} />
      <div
        className={`${styles.sticky} ${scrolled ? styles.scrolled : ""}`}
        data-scrolled={scrolled}
      >
        {children}
      </div>
    </>
  );
}
