'use client';

import { usePathname } from 'next/navigation';
import styles from './index.module.scss';

type Props = {
  id: string;
  name: string;
};

export default function Tag(props: Props) {
  const { id, name } = props;

  const path = usePathname();
  const category = path?.split('/')[2];
  const isAll = !isNaN(Number(category));
  const isCurrent = category === id || (isAll && id === '/');

  return (
    <a
      href={id === '/' ? '/blogs/1' : `/blogs/${id}/1`}
      className={`${styles.btn} ${isCurrent && styles.current}`}
    >
      {name}
    </a>
  );
}
