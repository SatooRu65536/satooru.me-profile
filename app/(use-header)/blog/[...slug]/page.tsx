import {
  getArticle,
  getArticles,
  getCategories,
} from '@/component/util/loadFiles';
import styles from './page.module.scss';
import ToHtml from '@/component/share/toHtml';
import { formatdate } from '@/component/util/format';
import Thumbnail from '@/component/share/card/thumbnail';

type StaticParams = {
  slug: string[];
};

export const generateStaticParams = (): StaticParams[] => {
  const categories = getCategories();
  const params: StaticParams[] = categories
    .map((category) => {
      const articles = getArticles(category);
      return articles.map((a) => ({
        slug: [category, String(a.id)],
      }));
    })
    .flat();

  return params;
};

type Props = {
  params: {
    slug: string[];
  };
};

export default function Page(props: Props) {
  const { slug } = props.params;

  const category = slug[0];
  const id = slug[1];
  const article = getArticle(category, id);

  return (
    <main className={styles.blog}>
      <div className={styles.container}>
        <h1 className={styles.title}>{article.meta.title}</h1>
        <p className={styles.created_at}>
          {formatdate(article.meta.createdAt)}
        </p>

        {article.meta.thumbnail && (
          <Thumbnail
            src={article.meta.thumbnail}
            alt="thumbnail"
            height="300px"
          />
        )}

        <ToHtml className={styles.content} content={article.content} />
      </div>
    </main>
  );
}
