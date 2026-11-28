import Portfolio from "../components/portfolio/Portfolio";
import styles from "../components/portfolio/portfolio.module.scss";

export default function HomePage() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <div className={styles.site}>
        <Portfolio />
      </div>
    </>
  );
}
