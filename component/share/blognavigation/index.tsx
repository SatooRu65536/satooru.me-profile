import styles from './index.module.scss';
import { getCategories, getCategoryName } from '@/component/util/loadFiles';
import Tag from './tag';
import { MaterialSymbolsArrowBackIos } from '../icon/icon';

export default function BlogNavigation() {
  const categoryNames = getCategories().map((c) => ({
    id: c,
    name: getCategoryName(c),
  }));

  return (
    <div className={styles.blog_head}>
      <MaterialSymbolsArrowBackIos className={styles.arrow} />

      <Tag id={'/'} name={'全ての記事'} />
      {categoryNames.map((c) => (
        <Tag key={c.id} id={c.id} name={c.name} />
      ))}
    </div>
  );
}
