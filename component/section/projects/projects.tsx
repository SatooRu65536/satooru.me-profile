import styles from "./projects.module.scss";
import GitHubIcon from "@mui/icons-material/GitHub";

export default function Projects() {
  type Project = {
    name: string;
    summary: string;
    tags: string[];
    repo?: string;
  };

  const projects: Project[] = [
    {
      name: "センシング",
      summary: "梶研究室での活動。スマホを用いたセンシングと端末姿勢推定",
      tags: ["Python"],
      repo: "https://github.com/SatooRu65536/kajilab",
    },
    {
      name: "プロフィールサイト",
      summary: "AppRouterの勉強を兼ねて、プロフィールサイトを制作",
      tags: ["Next.js", "TypeScript", "SCSS", "Mantine"],
      repo: "https://github.com/SatooRu65536/satooru.me",
    },
  ];

  return (
    <section className={styles.projects}>
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
                  href="{{ .repo }}"
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
