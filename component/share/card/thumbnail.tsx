import styles from './thumbnail.module.scss';

const DEFAULT_POST_THUMBNAIL = '/images/default.webp';

type Props = {
  src: string;
  alt: string;
  height: string;
  hovered?: boolean;
};

export default function Thumbnail({ src, alt, height, hovered }: Props) {
  return (
    <div className={styles.thumbnail} style={{ height }}>
      <img
        src={src}
        alt={alt}
        className={styles.image}
        style={hovered ? { transform: 'scale(1.05)' } : {}}
      />
    </div>
  );
}
