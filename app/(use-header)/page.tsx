import styles from './page.module.scss';
import Top from './_compoent/section/top/top';
import About from './_compoent/section/about/about';
import Mainskills from './_compoent/section/mainskills/mainskills';
import Skills from './_compoent/section/skills/skills';
import Experiences from './_compoent/section/experiences/experiences';
import Projects from './_compoent/section/projects/projects';
import Awards from './_compoent/section/award/awards';

export default function Home() {
  return (
    <main className={styles.main}>
      <Top />
      <About />
      <Mainskills />
      <Skills />
      <Awards />
      <Experiences />
      <Projects />
    </main>
  );
}
