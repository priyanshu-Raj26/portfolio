import { learningRepositories, projects, publicRepositoryCount } from "../content";
import ProjectCard from "./ProjectCard";
import SectionLabel, { sectionLabelStyles } from "./shared/SectionLabel";
import styles from "./projects.module.scss";

export default function Projects() {
  const featuredProjects = projects.slice(0, 3);
  const secondaryProjects = projects.slice(3);

  return (
    <section
      id="projects"
      data-section="artifacts"
      className={styles.section}
      aria-labelledby="artifacts-title"
    >
      <SectionLabel
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
        <p className={sectionLabelStyles.infoLabel}>
          More work / learning repositories
        </p>
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
            <p className={sectionLabelStyles.infoLabel}>Learning repository</p>
            <h3>{repository.name}</h3>
            {repository.description && <p>{repository.description}</p>}
          </article>
        ))}
      </div>
    </section>
  );
}
