import { links, profile, publicRepositoryCount } from "../content";
import type { ContentLink } from "../content/types";
import OptionalLink from "./shared/OptionalLink";
import { sectionLabelStyles } from "./shared/SectionLabel";
import PhotoImage, { photoImageStyles } from "./shared/PhotoImage";
import styles from "./hero.module.scss";

function findLink(label: string): ContentLink {
  const link = links.find((entry) => entry.label === label);

  if (!link) {
    throw new Error(`Missing "${label}" link in the content layer.`);
  }

  return link.href;
}

export default function Hero() {
  return (
    <section
      id="signal"
      data-section="signal"
      className={styles.hero}
      aria-labelledby="hero-title"
    >
      <div className={styles.heroCopy}>
        <p className={sectionLabelStyles.sectionLabel}>
          <span>01</span> / SIGNAL
        </p>
        <p className={styles.heroKicker}>Backend-first. Built to ship.</p>
        <h1 id="hero-title" className={styles.heroTitle}>
          {profile.name.split(" ").map((part) => (
            <span className={styles.heroNameLine} key={part}>
              {part}
            </span>
          ))}
        </h1>
        <p className={styles.heroRole}>{profile.headline}</p>
        <div className={styles.availability}>
          <span className={styles.statusDot} aria-hidden="true" />
          {profile.availability[0]}
        </div>
        <div className={styles.heroActions}>
          <a className={styles.primaryAction} href="#projects">
            View my work <span aria-hidden="true">↓</span>
          </a>
          <OptionalLink
            label="Let's talk"
            href={findLink("Email")}
            className={styles.textAction}
            isEmail
          />
        </div>
        <dl className={styles.heroMetadata}>
          <div>
            <dt>Location</dt>
            <dd>{profile.location}</dd>
          </div>
          <div>
            <dt>Public repositories</dt>
            <dd>{publicRepositoryCount}</dd>
          </div>
        </dl>
        <div className={styles.barcode} aria-hidden="true" />
      </div>
      <figure className={styles.heroPortrait}>
        <span className={styles.outlineWord} aria-hidden="true">
          SIGNAL
        </span>
        <div className={styles.portraitFrame}>
          <PhotoImage
            name="hero"
            priority
            sizes="(max-width: 760px) 78vw, 42vw"
            className={styles.portraitPhoto}
          />
          <span className={styles.frameCorner} aria-hidden="true" />
        </div>
        <figcaption className={photoImageStyles.imageCaption}>
          <span>01 / Portrait</span>
          <span>Patna, India</span>
        </figcaption>
      </figure>
    </section>
  );
}
