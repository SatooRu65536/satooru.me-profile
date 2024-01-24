import { MaterialSymbolsArrowBackIos } from '../icon/icon';
import styles from './index.module.scss';
import Tag from './tag';
import { getCategories, getCategoryName } from '@/component/util/loadFiles';

export default function BlogNavigation() {
  const categoryNames = getCategories().map((c) => ({
    id: c,
    name: getCategoryName(c),
  }));

  return (
    <div className={styles.blog_head}>
      <a href="/">
        <MaterialSymbolsArrowBackIos className={styles.arrow} />
      </a>

      <Tag id={'/'} name={'全ての記事'} />
      {categoryNames.map((c) => (
        <Tag key={c.id} id={c.id} name={c.name} />
      ))}
    </div>
  );
}
