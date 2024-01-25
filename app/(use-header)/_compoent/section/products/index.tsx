import Card from './card';
import styles from './index.module.scss';
import {
  getArticlesByCategoryWithT,
  parseMetaTag,
} from '@/component/util/loadFiles';

type Product = {
  type: string;
};

export default function Products() {
  const parsetag = (tags: string[]): Product => ({
    type: parseMetaTag(tags, 'type', 'その他'),
  });
  const products = getArticlesByCategoryWithT<Product>('product', parsetag);

  return (
    <section className={styles.product} id="products">
      <h2 className={styles.title}>Products</h2>

      <div className={styles.container}>
        {products.map((product) => (
          <Card key={product.id} article={product} />
        ))}
      </div>
    </section>
  );
}
