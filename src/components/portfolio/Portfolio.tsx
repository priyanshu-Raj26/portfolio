import Image from "next/image";
import {
  dsaPractice,
  dsaStats,
  education,
  experience,
  learningRepositories,
  links,
  navigation,
  profile,
  projects,
  publicRepositoryCount,
  skillGroups
} from "../../content";
import { images } from "../../content/images";
import type { ContentLink, ExperienceEntry, ProjectEntry } from "../../content/types";
import type { PhotoName, ProcessedImage } from "../../content/images";
import styles from "./portfolio.module.scss";

function getPhoto(name: PhotoName): ProcessedImage & { altText: string; src: string } {
  const photo = images[name];

  if (!photo) {
    throw new Error(`Missing processed ${name} image in the image manifest.`);
  }

  if (photo.alt.isTodo || !photo.alt.value) {
    throw new Error(`Missing alt text for the processed ${name} image.`);
  }

  const source = photo.sources.webp[photo.sources.webp.length - 1];

  if (!source) {
    throw new Error(`Missing WebP source for the processed ${name} image.`);
  }

  return { ...photo, altText: photo.alt.value, src: source.src };
}

function findLink(label: string): ContentLink {
  const link = links.find((entry) => entry.label === label);

  if (!link) {
    throw new Error(`Missing "${label}" link in the content layer.`);
  }

  return link.href;
}

function OptionalLink({
  label,
  href,
  className,
  showValue = false,
  isEmail = false
}: {
  label: string;
  href: ContentLink;
  className?: string;
  showValue?: boolean;
  isEmail?: boolean;
}) {
  if (href.isTodo) {
    if (process.env.NODE_ENV !== "development") {
      return null;
    }

    return (
      <span className={`${styles.unavailableLink} ${className ?? ""}`}>
        <span>{label}</span>
        <span
          className={styles.dashedMarker}
          aria-label={`${label} is not available yet`}
        />
      </span>
    );
  }

  const destination = isEmail ? `mailto:${href.value}` : href.value;
  const opensNewTab = destination.startsWith("https://");

  return (
    <a
      className={className}
      href={destination}
      target={opensNewTab ? "_blank" : undefined}
      rel={opensNewTab ? "noreferrer" : undefined}
    >
      {showValue ? href.value : label}
      {opensNewTab && <span aria-hidden="true"> ↗</span>}
    </a>
  );
}

function SectionIntro({
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

function Photo({
  name,
  priority = false,
  sizes
}: {
  name: PhotoName;
  priority?: boolean;
  sizes: string;
}) {
  const photo = getPhoto(name);

  return (
    <Image
      className={styles.photo}
      src={photo.src}
      alt={photo.altText}
      width={photo.width}
      height={photo.height}
      sizes={sizes}
      priority={priority}
      placeholder="blur"
      blurDataURL={photo.blurDataURL}
    />
  );
}

function Header() {
  const sectionLinks = navigation.filter((entry) => entry.id !== "contact");

  return (
    <header className={styles.header}>
      <nav className={styles.headerNav} aria-label="Section navigation">
        {sectionLinks.map((entry) => (
          <a key={entry.id} href={`#${entry.id}`}>
            {entry.label}
          </a>
        ))}
      </nav>
      <a className={styles.headerCta} href="#contact">
        Let&apos;s talk <span aria-hidden="true">↗</span>
      </a>
    </header>
  );
}

function HeroSection() {
  const email = findLink("Email");

  return (
    <section className={styles.hero} aria-labelledby="hero-title">
      <div className={styles.heroCopy}>
        <p className={styles.sectionLabel}>
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
            href={email}
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
          <Photo
            name="hero"
            priority
            sizes="(max-width: 760px) 78vw, 42vw"
          />
          <span className={styles.frameCorner} aria-hidden="true" />
        </div>
        <figcaption className={styles.imageCaption}>
          <span>01 / Portrait</span>
          <span>Patna, India</span>
        </figcaption>
      </figure>
    </section>
  );
}

function StorySection() {
  return (
    <section
      id="about"
      className={`${styles.section} ${styles.storySection}`}
      aria-labelledby="story-title"
    >
      <SectionIntro
        id="story-title"
        number="02"
        name="NOISE"
        title="Learn by breaking."
        payoff="Understand why."
      />
      <div className={styles.storyGrid}>
        <div className={styles.storyImageWrap}>
          <Photo name="about" sizes="(max-width: 760px) 82vw, 36vw" />
          <p className={styles.imageCaption}>02 / Origin</p>
        </div>
        <div className={styles.storyContent}>
          <p className={styles.storyLead}>{profile.story}</p>
          <div className={styles.infoBox}>
            <p className={styles.infoLabel}>Working method</p>
            <p>{profile.approach}</p>
          </div>
          <div className={styles.educationBlock}>
            <p className={styles.infoLabel}>Education</p>
            {education.map((entry) => (
              <article className={styles.educationEntry} key={entry.qualification}>
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

  return (
    <div className={styles.dsaPanel} id="dsa">
      <div className={styles.dsaPanelHeader}>
        <div>
          <p className={styles.infoLabel}>{dsaStats.platform} / {dsaStats.username}</p>
          <h3>Practice, by pattern.</h3>
        </div>
        <OptionalLink
          label="DSA repository"
          href={findLink("DSA repository")}
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

function SkillsSection() {
  return (
    <section
      className={`${styles.section} ${styles.ascentSection}`}
      aria-labelledby="ascent-title"
    >
      <SectionIntro
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
              <p className={styles.infoLabel}>
                {String(index + 1).padStart(2, "0")} / {group.category}
              </p>
              <ul className={styles.tagList}>
                {group.skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </article>
          ))}
          <p className={styles.practiceNote}>{dsaPractice.approach}</p>
        </div>
        <DsaStats />
      </div>
    </section>
  );
}

function ProjectLinks({ project }: { project: ProjectEntry }) {
  return (
    <div className={styles.projectLinks}>
      <OptionalLink label="Live" href={project.links.live} />
      <OptionalLink label="Code" href={project.links.code} />
    </div>
  );
}

function ProjectCard({
  project,
  index,
  featured = false
}: {
  project: ProjectEntry;
  index: number;
  featured?: boolean;
}) {
  return (
    <article
      className={`${styles.projectCard} ${featured ? styles.featuredCard : ""}`}
    >
      <div
        className={styles.projectFrame}
        role="img"
        aria-label={`${project.name} screenshot placeholder`}
      >
        <span className={styles.frameIndex}>
          {String(index + 1).padStart(2, "0")} / SCREEN
        </span>
        <span className={styles.framePlaceholder}>Project screenshot</span>
        <span className={styles.frameName}>{project.name}</span>
      </div>
      <div className={styles.projectBody}>
        <div className={styles.projectHeading}>
          <div>
            <p className={styles.infoLabel}>
              {project.period ? `${project.period} / ` : ""}
              {project.category}
            </p>
            <h3>{project.name}</h3>
          </div>
        </div>
        <p className={styles.projectDescription}>{project.description}</p>
        <p className={styles.infoLabel}>Stack</p>
        <ul className={styles.tagList}>
          {project.stack.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <div className={styles.projectDetails}>
          <p className={styles.infoLabel}>Project details</p>
          <ul>
            {project.details.map((detail) => (
              <li key={detail}>{detail}</li>
            ))}
          </ul>
        </div>
        <ProjectLinks project={project} />
      </div>
    </article>
  );
}

function ArtifactsSection() {
  const featuredProjects = projects.slice(0, 3);
  const secondaryProjects = projects.slice(3);

  return (
    <section
      id="projects"
      className={`${styles.section} ${styles.artifactsSection}`}
      aria-labelledby="artifacts-title"
    >
      <SectionIntro
        id="artifacts-title"
        number="04"
        name="ARTIFACTS"
        title="Projects built."
        payoff="Details matter."
      />
      <div className={styles.featuredProjects}>
        {featuredProjects.map((project, index) => (
          <ProjectCard
            key={project.name}
            project={project}
            index={index}
            featured
          />
        ))}
      </div>
      <div className={styles.secondaryHeading}>
        <p className={styles.infoLabel}>More work / learning repositories</p>
        <p>{publicRepositoryCount} public repositories on GitHub</p>
      </div>
      <div className={styles.secondaryProjects}>
        {secondaryProjects.map((project, index) => (
          <ProjectCard
            key={project.name}
            project={project}
            index={index + featuredProjects.length}
          />
        ))}
      </div>
      <div className={styles.learningRepositories}>
        {learningRepositories.map((repository) => (
          <article className={styles.learningCard} key={repository.name}>
            <p className={styles.infoLabel}>Learning repository</p>
            <h3>{repository.name}</h3>
            {repository.description && <p>{repository.description}</p>}
          </article>
        ))}
      </div>
    </section>
  );
}

function ExperienceCard({ entry }: { entry: ExperienceEntry }) {
  return (
    <article className={styles.experienceEntry}>
      <div className={styles.experienceMeta}>
        <p className={styles.infoLabel}>{entry.period}</p>
        {entry.location && <p>{entry.location}</p>}
      </div>
      <div>
        <p className={styles.infoLabel}>{entry.organization}</p>
        <h3>{entry.role}</h3>
        {entry.department && <p className={styles.experienceDepartment}>{entry.department}</p>}
        <ul className={styles.experienceDetails}>
          {entry.details.map((detail) => (
            <li key={detail}>{detail}</li>
          ))}
        </ul>
        {entry.metrics?.isTodo && (
          <OptionalLink
            label="Club metrics"
            href={entry.metrics}
            className={styles.smallLink}
          />
        )}
      </div>
    </article>
  );
}

function CrewSection() {
  return (
    <section
      id="crew"
      className={`${styles.section} ${styles.crewSection}`}
      aria-labelledby="crew-title"
    >
      <SectionIntro
        id="crew-title"
        number="05"
        name="CREW"
        title="Build together."
        payoff="Ship as a team."
      />
      <div className={styles.crewGrid}>
        <div className={styles.experienceList} id="experience">
          {experience.map((entry) => (
            <ExperienceCard key={`${entry.organization}-${entry.role}`} entry={entry} />
          ))}
        </div>
        <figure className={styles.crewPlaceholder}>
          <span className={styles.infoLabel}>Robonixx / event photo</span>
          <span className={styles.crewPlaceholderMark} aria-hidden="true">
            +
          </span>
          <figcaption>Club and event photography</figcaption>
        </figure>
      </div>
    </section>
  );
}

function HorizonSection() {
  const learningGroup = skillGroups.find((group) => group.category === "Learning now");

  if (!learningGroup) {
    throw new Error('Missing "Learning now" skills in the content layer.');
  }

  return (
    <section
      id="career-vision"
      className={`${styles.section} ${styles.horizonSection}`}
      aria-labelledby="horizon-title"
    >
      <div className={styles.horizonBackdrop} aria-hidden="true" />
      <SectionIntro
        id="horizon-title"
        number="06"
        name="HORIZON"
        title="Keep learning."
        payoff="Understand the system."
      />
      <div className={styles.horizonContent}>
        <p>{profile.careerVision}</p>
        <div className={styles.horizonSkills}>
          <p className={styles.infoLabel}>Learning next</p>
          <ul className={styles.tagList}>
            {learningGroup.skills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  const contactLinks = links.filter((entry) =>
    ["GitHub", "LinkedIn", "LeetCode", "Instagram"].includes(entry.label)
  );

  return (
    <section
      id="contact"
      className={`${styles.section} ${styles.contactSection}`}
      aria-labelledby="contact-title"
    >
      <SectionIntro
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
        <Photo name="contact" sizes="(max-width: 760px) 82vw, 32vw" />
        <p className={styles.imageCaption}>03 / Contact</p>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className={styles.footer}>
      <p>STATUS / {profile.availability[0]}</p>
      <a href="#main-content">Back to top ↑</a>
    </footer>
  );
}

export default function Portfolio() {
  return (
    <>
      <Header />
      <main id="main-content" className={styles.main}>
        <div className={styles.content}>
          <HeroSection />
          <StorySection />
          <SkillsSection />
          <ArtifactsSection />
          <CrewSection />
          <HorizonSection />
          <ContactSection />
        </div>
      </main>
      <Footer />
    </>
  );
}
