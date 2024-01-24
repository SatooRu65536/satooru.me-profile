import Card from './card';
import styles from './index.module.scss';
import { getArticlesByCategory } from '@/component/util/loadFiles';

export default function Product() {
  const products = getArticlesByCategory('product');

  return (
    <section className={styles.product} id="product">
      <h2 className={styles.title}>Products</h2>

      <div className={styles.container}>
        {products.map((product) => (
          <Card key={product.id} article={product} />
        ))}
      </div>
    </section>
  );
}
