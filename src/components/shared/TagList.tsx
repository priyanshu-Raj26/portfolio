import styles from "./tag-list.module.scss";

export default function TagList({ items }: { items: string[] }) {
  return (
    <ul className={styles.tagList}>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}
