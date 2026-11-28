import type { ProjectEntry } from "../content/types";
import { sectionLabelStyles } from "./shared/SectionLabel";
import styles from "./project-detail.module.scss";

export default function ProjectDetail({ project }: { project: ProjectEntry }) {
  return (
    <div className={styles.projectDetails}>
      <p className={sectionLabelStyles.infoLabel}>Project details</p>
      <ul>
        {project.details.map((detail) => (
          <li key={detail}>{detail}</li>
        ))}
      </ul>
    </div>
  );
}
