import BlogNavigation from '@/component/share/BlogNavigation';
import Card from '@/component/share/card';
import Pagenation from '@/component/share/pagenation';
import {
  getArticleCount,
  getArticles,
  getCategories,
  getCategoryName,
} from '@/component/util/loadFiles';
import styles from './page.module.scss';

const CONTENTS_NUM = 24;

type StaticParams = {
  slug: string[];
};

export const generateStaticParams = (): StaticParams[] => {
  const categories = getCategories();
  let allCount = 0;
  const params: StaticParams[] = categories
    .map((category) => {
      const count = getArticleCount(category);
      const pages = Math.ceil(count / CONTENTS_NUM);
      allCount += count;

      return Array.from({ length: pages }).map((_, i) => ({
        slug: [category, String(i + 1)],
      }));
    })
    .flat();

  const allPages = Math.ceil(allCount / CONTENTS_NUM);
  const articlesParams = Array.from({ length: allPages }).map((_, i) => ({
    slug: [String(i + 1)],
  }));

  return [...params, ...articlesParams];
};

type Props = {
  params: {
    slug: string[];
  };
};

export default function Page(props: Props) {
  const { slug } = props.params;

  const page = Number(slug.at(-1));
  const category =
    slug.length > 1 ? slug[0] : isNaN(page) ? slug[0] : undefined;
  const articles = getArticles(category);

  const rangeMin = (page - 1) * CONTENTS_NUM;
  const pagenationMax = Math.ceil(articles.length / CONTENTS_NUM);
  const displayArticles = articles.splice(rangeMin, CONTENTS_NUM);
  const categoryName = category ? getCategoryName(category) : '全ての記事';

  return (
    <main className={styles.blog}>
      <BlogNavigation />

      <h1 className={styles.title}>{categoryName}</h1>

      <div className={styles.container}>
        {displayArticles.map((article) => (
          <Card key={article.id} article={article} />
        ))}
      </div>

      <Pagenation
        pageNum={page || 1}
        PageMax={pagenationMax}
        getPath={(page) => `/blogs/${page}`}
      />
    </main>
  );
}
