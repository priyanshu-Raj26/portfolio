import { dsaPractice, dsaStats, links, skillGroups } from "../content";
import OptionalLink from "./shared/OptionalLink";
import SectionLabel, { sectionLabelStyles } from "./shared/SectionLabel";
import TagList from "./shared/TagList";
import styles from "./skills.module.scss";

function DsaStats() {
  const stats = [
    { label: "Problems solved", value: dsaStats.problemsSolved },
    { label: "Longest streak", value: `${dsaStats.longestStreakDays} days` },
    { label: "Active days / year", value: dsaStats.activeDaysPastYear },
    { label: "Submissions / year", value: dsaStats.submissionsPastYear },
    { label: "Badges", value: dsaStats.badges },
    {
      label: "Contest rating",
      value: `${dsaStats.contestRating} · ${dsaStats.topPercent}%`
    }
  ];
  const repository = links.find((entry) => entry.label === "DSA repository");

  if (!repository) {
    throw new Error('Missing "DSA repository" link in the content layer.');
  }

  return (
    <div className={styles.dsaPanel} id="dsa">
      <div className={styles.dsaPanelHeader}>
        <div>
          <p className={sectionLabelStyles.infoLabel}>
            {dsaStats.platform} / {dsaStats.username}
          </p>
          <h3>Practice, by pattern.</h3>
        </div>
        <OptionalLink
          label="DSA repository"
          href={repository.href}
          className={styles.smallLink}
        />
      </div>
      <dl className={styles.statsGrid}>
        {stats.map((stat) => (
          <div key={stat.label}>
            <dt>{stat.label}</dt>
            <dd>{stat.value}</dd>
          </div>
        ))}
      </dl>
      <p className={styles.statsFootnote}>
        {dsaStats.problemsByDifficulty.easy} easy /{" "}
        {dsaStats.problemsByDifficulty.medium} medium /{" "}
        {dsaStats.problemsByDifficulty.hard} hard · {dsaPractice.language} ·{" "}
        {dsaStats.figuresAsOf}
      </p>
    </div>
  );
}

export default function Skills() {
  return (
    <section
      id="ascent"
      data-section="ascent"
      className={styles.section}
      aria-labelledby="ascent-title"
    >
      <SectionLabel
        id="ascent-title"
        number="03"
        name="ASCENT"
        title="Skills in layers."
        payoff="Proof in practice."
      />
      <div className={styles.ascentGrid}>
        <div className={styles.skillsColumn} id="skills">
          <div className={styles.staircaseLine} aria-hidden="true" />
          {skillGroups.map((group, index) => (
            <article
              className={styles.skillGroup}
              key={group.category}
              data-step={index + 1}
            >
              <p className={sectionLabelStyles.infoLabel}>
                {String(index + 1).padStart(2, "0")} / {group.category}
              </p>
              <TagList items={group.skills} />
            </article>
          ))}
          <p className={styles.practiceNote}>{dsaPractice.approach}</p>
        </div>
        <DsaStats />
      </div>
    </section>
  );
}
