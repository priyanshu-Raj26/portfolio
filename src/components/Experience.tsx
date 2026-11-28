import { experience } from "../content";
import type { ExperienceEntry } from "../content/types";
import OptionalLink from "./shared/OptionalLink";
import { sectionLabelStyles } from "./shared/SectionLabel";
import styles from "./experience.module.scss";

function ExperienceCard({ entry }: { entry: ExperienceEntry }) {
  return (
    <article className={styles.experienceEntry}>
      <div className={styles.experienceMeta}>
        <p
          className={`${sectionLabelStyles.infoLabel} ${styles.experienceInfoLabel}`}
        >
          {entry.period}
        </p>
        {entry.location && <p>{entry.location}</p>}
      </div>
      <div>
        <p
          className={`${sectionLabelStyles.infoLabel} ${styles.experienceInfoLabel}`}
        >
          {entry.organization}
        </p>
        <h3>{entry.role}</h3>
        {entry.department && (
          <p className={styles.experienceDepartment}>{entry.department}</p>
        )}
        <ul className={styles.experienceDetails}>
          {entry.details.map((detail) => (
            <li key={detail}>{detail}</li>
          ))}
        </ul>
        {entry.metrics?.isTodo && (
          <OptionalLink
            label="Club metrics"
            href={entry.metrics}
            className={styles.smallLink}
          />
        )}
      </div>
    </article>
  );
}

export default function Experience() {
  return (
    <div
      id="experience"
      data-section="experience"
      className={styles.experienceList}
    >
      {experience.map((entry) => (
        <ExperienceCard
          key={`${entry.organization}-${entry.role}`}
          entry={entry}
        />
      ))}
    </div>
  );
}
