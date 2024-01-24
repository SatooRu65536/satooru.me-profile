import styles from './index.module.scss';

type Props = {
  isHide: boolean;
};

export default function Leader({ isHide }: Props) {
  return (
    <span className={`${styles.leader} ${isHide && styles.hide}`}>
      {Array.from({ length: 3 }).map((_, i) => (
        <div key={i} className={styles.dot} />
      ))}
    </span>
  );
}
