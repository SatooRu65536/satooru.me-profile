import styles from "./top.module.scss";
import Image from "next/image";

export default function Top() {
  return (
    <div className={styles.top}>
      <Image
        className={styles.backgroundImage}
        src="/images/penguin.jpg"
        layout="fill"
        objectFit="cover"
        alt={"背景"}
      />
    </div>
  );
}
