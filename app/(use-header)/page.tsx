import About from './_compoent/section/about';
import Awards from './_compoent/section/award';
import Experiences from './_compoent/section/experiences';
import Mainskills from './_compoent/section/mainskills';
import Product from './_compoent/section/product';
import Projects from './_compoent/section/projects';
import RecentPosts from './_compoent/section/recentposts';
import Skills from './_compoent/section/skills';
import Top from './_compoent/section/top';
import styles from './page.module.scss';

export default function Home() {
  return (
    <main className={styles.main}>
      <Top />
      <About />
      <Mainskills />
      <Skills />
      <Awards />
      <Experiences />
      <RecentPosts />
      <Product />
      <Projects />
    </main>
  );
}
