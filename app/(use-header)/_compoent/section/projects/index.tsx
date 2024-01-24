'use client';
import { Project } from '@/types';
import styles from './projects.module.scss';
import GitHubIcon from '@mui/icons-material/GitHub';
import WebAssetIcon from '@mui/icons-material/WebAsset';
import { useEffect, useState } from 'react';

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    const url =
      'https://api.github.com/users/SatooRu65536/repos?per_page=10&sort=pushed';
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        data.forEach((d: any) => {
          const updatedAt = new Date(d.pushed_at);
          const twoWeekTime = 1000 * 60 * 60 * 24 * 14;
          if (new Date().getTime() - updatedAt.getTime() > twoWeekTime) return;

          const name = d.name;
          const summary = d.description;
          const tags = d.topics;
          if (d.language) tags.unshift(d.language);
          const repo = d.html_url;
          const site = d.homepage;
          const project: Project = { name, summary, tags, repo, site };
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

              <div className={styles.footer}>
                <div className={styles.tags} data-links={project.site ? 2 : 1}>
                  {project.tags.map((tag) => (
                    <div className={styles.tag} key={tag}>
                      {tag}
                    </div>
                  ))}
                </div>

                <div className={styles.links}>
                  {project.site && (
                    <a
                      className={styles.link}
                      href={project.site}
                      target="_blank"
                      title="github"
                    >
                      <WebAssetIcon className={styles.icon} />
                    </a>
                  )}

                  <a
                    className={styles.link}
                    href={project.repo}
                    target="_blank"
                    title="github"
                  >
                    <GitHubIcon className={styles.icon} />
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
