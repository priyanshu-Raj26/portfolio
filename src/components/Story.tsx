import { education, profile } from "../content";
import SectionLabel, { sectionLabelStyles } from "./shared/SectionLabel";
import PhotoImage, { photoImageStyles } from "./shared/PhotoImage";
import styles from "./story.module.scss";

export default function Story() {
  return (
    <section
      id="about"
      data-section="noise"
      className={styles.section}
      aria-labelledby="story-title"
    >
      <SectionLabel
        id="story-title"
        number="02"
        name="NOISE"
        title="Learn by breaking."
        payoff="Understand why."
      />
      <div className={styles.storyGrid}>
        <div className={styles.storyImageWrap}>
          <PhotoImage
            name="about"
            sizes="(max-width: 760px) 82vw, 36vw"
            className={styles.storyPhoto}
          />
          <p
            className={`${photoImageStyles.imageCaption} ${styles.storyImageCaption}`}
          >
            02 / Origin
          </p>
        </div>
        <div className={styles.storyContent}>
          <p className={styles.storyLead}>{profile.story}</p>
          <div className={styles.infoBox}>
            <p className={sectionLabelStyles.infoLabel}>Working method</p>
            <p>{profile.approach}</p>
          </div>
          <div className={styles.educationBlock}>
            <p className={sectionLabelStyles.infoLabel}>Education</p>
            {education.map((entry) => (
              <article
                className={styles.educationEntry}
                key={entry.qualification}
              >
                <div>
                  <h3>
                    {entry.qualification}
                    {entry.field ? ` / ${entry.field}` : ""}
                  </h3>
                  {entry.institution && <p>{entry.institution}</p>}
                  {entry.board && <p>{entry.board}</p>}
                </div>
                <div className={styles.educationMeta}>
                  <span>{entry.periodOrYear}</span>
                  {entry.result && <span>{entry.result}</span>}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
