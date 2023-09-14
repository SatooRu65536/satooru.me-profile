import Image from "next/image";
import styles from "./notfound.module.scss";

export default function NotFound() {
  return (
    <div className={styles.notfound}>
      <div className={styles.imgWrapper}>
        <Image
          className={styles.penguin}
          src="/404.svg"
          sizes="100%"
          fill
          priority
          alt="404"
        />
      </div>
      <h2 className={styles.message}>現在制作中です</h2>
      <div className={styles.lineContainer}></div>
    </div>
  );
}
