import Image from "next/image";
import styles from "./Header.module.css";
import shared from "@/styles/shared.module.css";
import HeaderNav from "./HeaderNav";
import { locales, type Dictionary, type Locale } from "@/dictionaries/get-dictionary";

const localeLabels: Record<Locale, string> = {
  en: "EN",
  hr: "HR",
};

export default function Header({ dict, lang }: { dict: Dictionary["header"]; lang: Locale }) {
  return (
    <header className={`${shared.container} ${styles.header}`}>
      <a href="#" className={styles.logoLink}>
        <Image
          src="/logo-primary-transparent.png"
          alt={dict.name}
          width={1191}
          height={384}
          priority
          className={styles.logo}
        />
      </a>
      <HeaderNav label={dict.menu}>
        {dict.nav.map((link) => (
          <a key={link.href} href={link.href}>
            {link.label}
          </a>
        ))}
        <span className={styles.localeSwitch} aria-label="Language">
          {locales.map((locale, i) => (
            <span key={locale}>
              {i > 0 && <span aria-hidden="true">/</span>}
              {locale === lang ? (
                <span aria-current="page">{localeLabels[locale]}</span>
              ) : (
                <a href={`/${locale}`}>{localeLabels[locale]}</a>
              )}
            </span>
          ))}
        </span>
      </HeaderNav>
    </header>
  );
}
