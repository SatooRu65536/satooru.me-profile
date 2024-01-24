import styles from './page.module.scss';
import Top from './_compoent/section/top';
import About from './_compoent/section/about';
import Mainskills from './_compoent/section/mainskills';
import Skills from './_compoent/section/skills';
import Experiences from './_compoent/section/experiences';
import Projects from './_compoent/section/projects';
import Awards from './_compoent/section/award';

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
