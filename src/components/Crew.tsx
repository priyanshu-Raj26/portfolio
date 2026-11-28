import Experience from "./Experience";
import SectionLabel, { sectionLabelStyles } from "./shared/SectionLabel";
import styles from "./crew.module.scss";

export default function Crew() {
  return (
    <section
      id="crew"
      data-section="crew"
      className={styles.section}
      aria-labelledby="crew-title"
    >
      <SectionLabel
        id="crew-title"
        number="05"
        name="CREW"
        title="Build together."
        payoff="Ship as a team."
      />
      <div className={styles.crewGrid}>
        <Experience />
        <figure className={styles.crewPlaceholder}>
          <span
            className={`${sectionLabelStyles.infoLabel} ${styles.crewPlaceholderLabel}`}
          >
            Robonixx / event photo
          </span>
          <span className={styles.crewPlaceholderMark} aria-hidden="true">
            +
          </span>
          <figcaption>Club and event photography</figcaption>
        </figure>
      </div>
    </section>
  );
}
