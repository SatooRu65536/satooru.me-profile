import styles from "./page.module.scss";
import Top from "@/component/section/top/top";
import About from "@/component/section/about/about";
import Mainskills from "@/component/section/mainskills/mainskills";
import Skills from "@/component/section/skills/skills";
import Experiences from "@/component/section/experiences/experiences";
import Projects from "@/component/section/projects/projects";

export default function Home() {
  return (
    <main className={styles.main}>
      <Top />
      <About />
      <Mainskills />
      <Skills />
      <Experiences />
      <Projects />
    </main>
  );
}
