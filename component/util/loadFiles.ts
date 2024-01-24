import { Article, ArticleMetaFormatted, EsaMeta } from '@/types';
import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';

const IMAGE_REGEX =
  /^[\s\n]*(<img.*?src=['"](.*)['"].*>|!\[.*\]\((.*)\))/;

/**
 * @description 記事を取得する
 * @returns
 */
export function getArticles(dir: string): Article<ArticleMetaFormatted>[] {
  const contentsDir = path.join(process.cwd(), 'public/articles/', dir);
  const filenames = fs.readdirSync(contentsDir);
  const filteredFilenames = filenames.filter((f) => !f.startsWith('.'));

  const articles = filteredFilenames.map((fname) => {
    const filePath = path.join(contentsDir, fname);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const md = matter(fileContents);
    const meta = md.data as EsaMeta;

    const tags = meta.tags?.split(", ") ?? [];
    const createdAtStr = parseMetaTag(tags, "date", meta.created_at, /\d{4}-\d{2}-\d{2}/);
    const createdAt = new Date(createdAtStr);

    const article: Article<ArticleMetaFormatted> = {
      path: `/post/${dir}/${meta.number}`,
      filename: fname,
      id: meta.number,
      content: md.content,
      meta: {
        title: meta.title,
        tags: [],
        createdAt: createdAt,
        thumbnail: null,
      },
    }

    const matches = md.content.match(IMAGE_REGEX);
    if (matches) article.meta.thumbnail = matches[2] || matches[3];

    return article;
  });

  const filteredArticles = articles.filter((a) => a.meta.title !== "README");
  filteredArticles.sort((a, b) => (a.meta.createdAt > b.meta.createdAt ? -1 : 1));

  return filteredArticles;
}

/**
 * @returns 記事を全て取得する 
 */
export function getAllArticles(): Article<ArticleMetaFormatted>[] {
  const contentsDir = path.join(process.cwd(), 'public/articles/');
  const dirs = fs.readdirSync(contentsDir);
  const filteredDirs = dirs.filter((f) => !f.startsWith('.'));

  const articles = filteredDirs.flatMap((dir) => getArticles(dir));

  return articles;
}

function parseMetaTag(
  tags: string[],
  key: string,
  defaultValue: string,
  check?: RegExp,
): string {
  const tag = tags?.filter((tag) => tag.startsWith(`${key}:`))[0];
  const value = tag && tag.replace(`${key}:`, "");

  if (check === undefined) return value ?? defaultValue;

  if (value && check.test(value)) return value;
  return defaultValue;
}
