/**
 * @package
 */
export type EsaMeta = {
  title: string;
  category: string | null;
  tags: string | null;
  created_at: string;
  updated_at: string;
  published: string;
  number: number;
};

type BaseMeta<T extends string[] | null, U extends string | Date> = {
  title: string;
  tags: T;
  createdAt: U;
};

/**
 * @package
 */
export type ArticleMeta = BaseMeta<string[] | null, string>;

/**
 * @package
 */
export type ArticleMetaFormatted = BaseMeta<string[], Date> & {
  thumbnail: string | null;
};

/**
 * @package
 */
export type Article<T extends ArticleMeta | ArticleMetaFormatted, U={}> = {
  path: string;
  filename: string;
  id: number;
  content: string;
  meta: T;
} & U;
