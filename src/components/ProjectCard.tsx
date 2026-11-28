import type { ProjectEntry } from "../content/types";
import OptionalLink from "./shared/OptionalLink";
import { sectionLabelStyles } from "./shared/SectionLabel";
import TagList from "./shared/TagList";
import ProjectDetail from "./ProjectDetail";
import styles from "./project-card.module.scss";

function ProjectLinks({ project }: { project: ProjectEntry }) {
  return (
    <div className={styles.projectLinks}>
      <OptionalLink label="Live" href={project.links.live} />
      <OptionalLink label="Code" href={project.links.code} />
    </div>
  );
}

export default function ProjectCard({
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
            <p
              className={`${sectionLabelStyles.infoLabel} ${styles.projectLabel}`}
            >
              {project.period ? `${project.period} / ` : ""}
              {project.category}
            </p>
            <h3>{project.name}</h3>
          </div>
        </div>
        <p className={styles.projectDescription}>{project.description}</p>
        <p className={sectionLabelStyles.infoLabel}>Stack</p>
        <TagList items={project.stack} />
        <ProjectDetail project={project} />
        <ProjectLinks project={project} />
      </div>
    </article>
  );
}
