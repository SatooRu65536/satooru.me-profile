import styles from './index.module.scss';

type Props = {
  pageNum: number;
  pagePath: string;
  isCurrent?: boolean;
  isStart?: boolean;
  isHide?: boolean;
  isEnd?: boolean;
};

export default function Button({
  pageNum,
  pagePath,
  isCurrent,
  isHide,
}: Props) {
  return (
    <a
      href={pagePath}
      className={`
        ${styles.btn}
        ${isCurrent && styles.fill}
        ${isHide && styles.hide}
      `}
    >
      {pageNum}
    </a>
  );
}
