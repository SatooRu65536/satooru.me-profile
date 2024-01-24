import { Article, PageMeta } from '@/types';
import fs from 'fs';
import path from 'path';

/**
 * @description 記事を取得する
 * @returns 
 */
export function getArticles(dir: string): Article<PageMeta>[] {
  const contentsDir = path.join(process.cwd(), "public/articles/posts", dir);
  const filenames = fs.readdirSync(contentsDir);
  const filteredFilenames = filenames.filter((f) => !f.startsWith("."));

  console.log(filteredFilenames);

  return [];
}
