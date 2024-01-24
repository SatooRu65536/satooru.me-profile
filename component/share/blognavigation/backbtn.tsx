'use client';

import { useRouter } from 'next/navigation';
import { MaterialSymbolsArrowBackIos } from '../icon/icon';
import styles from './index.module.scss';

export default function BackBtn() {
  const router = useRouter();

  return (
    <MaterialSymbolsArrowBackIos
      className={styles.arrow}
      onClick={() => router.back()}
    />
  );
}
