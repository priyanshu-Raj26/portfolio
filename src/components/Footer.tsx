import { profile } from "../content";
import styles from "./footer.module.scss";

export default function Footer() {
  return (
    <footer
      id="site-footer"
      data-section="footer"
      className={styles.footer}
    >
      <p>STATUS / {profile.availability[0]}</p>
      <a href="#main-content">Back to top ↑</a>
    </footer>
  );
}
