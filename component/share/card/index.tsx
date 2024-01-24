'use client';

import { useState } from 'react';
import Thumbnail from './thumbnail';
import { formatdate, mdToText } from '@/component/util/format';
import { Article, ArticleMetaFormatted } from '@/types';
import styles from './index.module.scss';

const DEFAULT_POST_THUMBNAIL = '/images/default.webp';

type Props = {
  article: Article<ArticleMetaFormatted>;
};

export default function Card({ article }: Props) {
  const [hovered, setHovered] = useState(false);

  return (
    <a key={article.id} href={article.path}>
      <div
        className={styles.card}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <Thumbnail
          height="200px"
          hovered={hovered}
          src={article.meta.thumbnail || DEFAULT_POST_THUMBNAIL}
          alt={article.meta.title}
        />
        <div className={styles.container}>
          <h3 className={styles.title}>{article.meta.title}</h3>
          <p className={styles.content}>{mdToText(article.content)}</p>
          <h3 className={styles.date}>{formatdate(article.meta.createdAt)}</h3>
        </div>
      </div>
    </a>
  );
}
