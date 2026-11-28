import styles from "./section-label.module.scss";

export default function SectionLabel({
  id,
  number,
  name,
  title,
  payoff
}: {
  id: string;
  number: string;
  name: string;
  title: string;
  payoff: string;
}) {
  return (
    <div className={styles.sectionIntro}>
      <p className={styles.sectionLabel}>
        <span>{number}</span> / {name}
      </p>
      <h2 id={id} className={styles.sectionTitle}>
        {title} <em>{payoff}</em>
      </h2>
    </div>
  );
}

export { styles as sectionLabelStyles };
