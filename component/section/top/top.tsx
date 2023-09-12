import styles from "./top.module.scss";
import Image from "next/image";

export default function Top() {
  return (
    <section className={styles.top}>
      <h1 className={styles.message}>ペンギンを愛でよ。</h1>

      <Image
        className={styles.backgroundImage}
        src="/images/penguin.jpg"
        layout="fill"
        objectFit="cover"
        alt={"背景"}
      />
    </section>
  );
}
