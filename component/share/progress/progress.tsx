'use client';

import { RingProgress } from '@mantine/core';
import styles from './progress.module.scss';
import { Progresses } from '@/types';

export default function Progress({ progress }: { progress: Progresses }) {
  return (
    <div className={styles.progress}>
      {progress.map((item) => {
        return (
          <RingProgress
            className={styles.ringProgress}
            size={200}
            label={<h1 className={styles.label}>{item.name}</h1>}
            sections={[
              { value: item.persentage, color: `var(--${item.color})` },
            ]}
            key={item.name}
          />
        );
      })}
    </div>
  );
}
