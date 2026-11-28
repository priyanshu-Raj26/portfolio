import Contact from "../Contact";
import Crew from "../Crew";
import Experience from "../Experience";
import Footer from "../Footer";
import Header from "../Header";
import Hero from "../Hero";
import Horizon from "../Horizon";
import Projects from "../Projects";
import Skills from "../Skills";
import Story from "../Story";
import styles from "./portfolio.module.scss";

export default function Portfolio() {
  return (
    <>
      <Header />
      <main id="main-content" className={styles.main}>
        <div className={styles.content}>
          <Hero />
          <Story />
          <Skills />
          <Projects />
          <Crew />
          <Horizon />
          <Contact />
        </div>
      </main>
      <Footer />
    </>
  );
}
