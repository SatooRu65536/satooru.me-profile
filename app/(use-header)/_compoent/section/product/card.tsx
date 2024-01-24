import styles from './index.module.scss';
import { Article, ArticleMetaFormatted } from '@/types';

const DEFAULT_POST_THUMBNAIL = '/images/default.webp';

type Props = {
  article: Article<ArticleMetaFormatted>;
};

export default function Card(props: Props) {
  const { article } = props;

  return (
    <a href={`/blog/product/${article.id}`}>
      <div className={styles.card}>
        <div className={styles.img_wrapper}>
          <img
            src={article.meta.thumbnail || DEFAULT_POST_THUMBNAIL}
            alt={article.meta.title}
            className={styles.image}
          />
        </div>

        <div className={styles.title_wrapper}>
          <h2 className={styles.product_title}>{article.meta.title}</h2>
        </div>
      </div>
    </a>
  );
}
