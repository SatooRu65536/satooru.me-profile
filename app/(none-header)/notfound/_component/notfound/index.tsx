import Image from 'next/image';
import styles from './index.module.scss';

export default function NotFound() {
  return (
    <a href="/">
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
        <div className={styles.lineContainer} />
      </div>
    </a>
  );
}
