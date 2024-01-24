type BaseMeta<T extends string[] | null, U extends string | Date> = {
  title: string;
  category: string;
  number: number;
  tags: T;
  created_at: U;
  updated_at: U;
};

/**
 * @package
 */
export type PageMeta = BaseMeta<string[] | null, string>;

/**
 * @package
 */
export type PageMetaFormatted = BaseMeta<string[], Date> & {
  thumbnail: string | null;
};

/**
 * @package
 */
export type Article<T extends PageMeta | PageMetaFormatted> = {
  path: string;
  filename: string;
  id: number;
  content: string;
  meta: T;
};
