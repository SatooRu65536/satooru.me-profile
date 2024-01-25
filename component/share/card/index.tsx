'use client';

import { useState } from 'react';
import styles from './index.module.scss';
import Thumbnail from './thumbnail';
import { formatdate, mdToText } from '@/component/util/format';
import { Article, ArticleMetaFormatted } from '@/types';

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
          <h2 className={styles.title}>{article.meta.title}</h2>
          <p className={styles.content}>{mdToText(article.content)}</p>
          <p className={styles.date}>{formatdate(article.meta.createdAt)}</p>
        </div>
      </div>
    </a>
  );
}
