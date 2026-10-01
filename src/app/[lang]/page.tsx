import { notFound } from "next/navigation";
import styles from "./page.module.css";
import { getDictionary, hasLocale } from "@/dictionaries/get-dictionary";
import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import TechStrip from "@/components/TechStrip/TechStrip";
import Services from "@/components/Services/Services";
import About from "@/components/About/About";
import Process from "@/components/Process/Process";
import Projects from "@/components/Projects/Projects";
import FAQ from "@/components/FAQ/FAQ";
import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";
import Reveal from "@/components/Reveal/Reveal";
import StickyHeader from "@/components/StickyHeader/StickyHeader";

export default async function Home({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = await getDictionary(lang);

  return (
    <>
      <StickyHeader>
        <Header dict={dict.header} lang={lang} />
      </StickyHeader>
      <div className={styles.heroBand}>
        <Reveal>
          <Hero dict={dict.hero} />
        </Reveal>
      </div>
      <main>
        <Reveal delay={100}>
          <TechStrip dict={dict.techStrip} />
        </Reveal>
        <Reveal>
          <Services dict={dict.services} />
        </Reveal>
        <Reveal>
          <About dict={dict.about} />
        </Reveal>
        <Reveal>
          <Process dict={dict.process} />
        </Reveal>
        <Reveal>
          <Projects dict={dict.projects} />
        </Reveal>
        <Reveal>
          <FAQ dict={dict.faq} />
        </Reveal>
      </main>
      <Reveal>
        <Contact dict={dict.contact} />
      </Reveal>
      <Reveal>
        <Footer dict={dict.footer} />
      </Reveal>
    </>
  );
}
