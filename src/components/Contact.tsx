import { links, profile } from "../content";
import type { ContentLink } from "../content/types";
import OptionalLink from "./shared/OptionalLink";
import SectionLabel, { sectionLabelStyles } from "./shared/SectionLabel";
import PhotoImage, { photoImageStyles } from "./shared/PhotoImage";
import styles from "./contact.module.scss";

function findLink(label: string): ContentLink {
  const link = links.find((entry) => entry.label === label);

  if (!link) {
    throw new Error(`Missing "${label}" link in the content layer.`);
  }

  return link.href;
}

export default function Contact() {
  const contactLinks = links.filter((entry) =>
    ["GitHub", "LinkedIn", "LeetCode", "Instagram"].includes(entry.label)
  );

  return (
    <section
      id="contact"
      data-section="deploy"
      className={styles.section}
      aria-labelledby="contact-title"
    >
      <SectionLabel
        id="contact-title"
        number="07"
        name="DEPLOY"
        title="Ready to ship."
        payoff="Let's talk."
      />
      <div className={styles.contactGrid}>
        <div>
          <p className={styles.contactCopy}>
            {profile.availability.join(" / ")}
          </p>
          <OptionalLink
            label="Email"
            href={findLink("Email")}
            className={styles.emailLink}
            showValue
            isEmail
          />
        </div>
        <nav className={styles.contactLinks} aria-label="Contact and profile links">
          {contactLinks.map((entry) => (
            <OptionalLink
              key={entry.label}
              label={entry.label}
              href={entry.href}
              className={styles.contactLink}
            />
          ))}
        </nav>
      </div>
      <div className={styles.contactPhoto}>
        <PhotoImage
          name="contact"
          sizes="(max-width: 760px) 82vw, 32vw"
          className={styles.contactPortrait}
        />
        <p
          className={`${photoImageStyles.imageCaption} ${styles.contactImageCaption}`}
        >
          03 / Contact
        </p>
      </div>
    </section>
  );
}
