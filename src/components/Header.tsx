import { navigation } from "../content";
import styles from "./header.module.scss";

export default function Header() {
  const sectionLinks = navigation.filter((entry) => entry.id !== "contact");

  return (
    <header id="site-header" data-section="header" className={styles.header}>
      <nav className={styles.headerNav} aria-label="Section navigation">
        {sectionLinks.map((entry) => (
          <a key={entry.id} href={`#${entry.id}`}>
            {entry.label}
          </a>
        ))}
      </nav>
      <a className={styles.headerCta} href="#contact">
        Let&apos;s talk <span aria-hidden="true">↗</span>
      </a>
    </header>
  );
}
