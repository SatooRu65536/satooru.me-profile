'use client';
import Image from 'next/image';
import styles from './index.module.scss';
import { useRouter } from 'next/navigation';

export default function NotFound() {
  const router = useRouter();

  return (
    <div className={styles.notfound} onClick={() => router.push('/')}>
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
      <div className={styles.lineContainer}></div>
    </div>
  );
}
