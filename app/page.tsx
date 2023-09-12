import styles from "./page.module.scss";
import Top from "@/component/section/top/top";
import About from "@/component/section/about/about";
import Mainskills from "@/component/section/mainskills/mainskills";

export default function Home() {
  return (
    <main className={styles.main}>
      <Top />
      <About />
      <Mainskills />
    </main>
  );
}
