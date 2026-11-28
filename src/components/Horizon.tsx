import { profile, skillGroups } from "../content";
import SectionLabel, { sectionLabelStyles } from "./shared/SectionLabel";
import TagList from "./shared/TagList";
import styles from "./horizon.module.scss";

export default function Horizon() {
  const learningGroup = skillGroups.find((group) => group.category === "Learning now");

  if (!learningGroup) {
    throw new Error('Missing "Learning now" skills in the content layer.');
  }

  return (
    <section
      id="career-vision"
      data-section="horizon"
      className={styles.section}
      aria-labelledby="horizon-title"
    >
      <div className={styles.horizonBackdrop} aria-hidden="true" />
      <SectionLabel
        id="horizon-title"
        number="06"
        name="HORIZON"
        title="Keep learning."
        payoff="Understand the system."
      />
      <div className={styles.horizonContent}>
        <p>{profile.careerVision}</p>
        <div className={styles.horizonSkills}>
          <p className={sectionLabelStyles.infoLabel}>Learning next</p>
          <TagList items={learningGroup.skills} />
        </div>
      </div>
    </section>
  );
}
