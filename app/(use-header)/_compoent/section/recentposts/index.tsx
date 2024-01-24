import { getAllArticles } from '@/component/util/loadFiles';
import styles from './index.module.scss';
import Card from '@/component/share/card';

export default function RecentPosts() {
  const article = getAllArticles();
  const recent = article.slice(-3).reverse();

  return (
    <section className={styles.recent_post} id="recent-post">
      <h1 className={styles.title}>Recent Post</h1>

      <div className={styles.container}>
        {recent.map((article) => (
          <Card key={article.id} article={article} />
        ))}
      </div>
    </section>
  );
}
