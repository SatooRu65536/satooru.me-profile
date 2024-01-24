import styles from "./index.module.scss";
import Image from "next/image";

export default function Top() {
  return (
    <section className={styles.top} id="top">
      <h1 className={styles.message}>ペンギンを愛でよ。</h1>

      <Image
        className={styles.backgroundImage}
        src="/images/penguin.webp"
        sizes="100%"
        fill
        priority
        alt={"背景"}
      />
    </section>
  );
}
