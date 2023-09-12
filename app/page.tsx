import Top from "@/component/page/top/top";
import styles from "./page.module.scss";
import About from "@/component/page/about/about";

export default function Home() {
  return (
    <main className={styles.main}>
      <Top />
      <About />
    </main>
  );
}
