"use client";
import { Project } from "@/types";
import styles from "./projects.module.scss";
import GitHubIcon from "@mui/icons-material/GitHub";
import { useEffect, useState } from "react";

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    const url =
      "https://api.github.com/users/SatooRu65536/repos?per_page=10&sort=pushed";
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        data.forEach((d: any) => {
          const updatedAt = new Date(d.updated_at);
          const twoWeekTime = 1000 * 60 * 60 * 24 * 14;
          if (new Date().getTime() - updatedAt.getTime() > twoWeekTime) return;

          const name = d.name;
          const summary = d.description;
          const tags = d.language ? [d.language] : [];
          tags.push(...d.topics);
          const repo = d.html_url;
          const project: Project = { name, summary, tags, repo };
          setProjects((projects) => [...projects, project]);
        });
      });
  }, []);

  return (
    <section className={styles.projects} id="projects">
      <h1 className={styles.title}>Active Projects</h1>

      <div className={styles.container}>
        {projects.map((project) => {
          return (
            <div className={styles.project} key={project.name}>
              <div className={styles.name}>{project.name}</div>
              <div className={styles.summary}>{project.summary}</div>

              <div className={styles.tags}>
                {project.tags.map((tag) => (
                  <div className={styles.tag} key={tag}>
                    {tag}
                  </div>
                ))}
              </div>

              {project.repo && (
                <a
                  className={styles.github}
                  href={project.repo}
                  target="_blank"
                  title="github"
                >
                  <GitHubIcon className={styles.icon} />
                </a>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
