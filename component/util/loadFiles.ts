import { Article, ArticleMetaFormatted, EsaMeta } from '@/types';
import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';

const IMAGE_REGEX = /^[\s\n]*(<img.*?src=['"](.*)['"].*>|!\[.*\]\((.*)\))/;

/**
 * @description カテゴリーを取得する
 * @returns { string[] } カテゴリー
 */
export function getCategories(): string[] {
  const contentsDir = path.join(process.cwd(), 'public/articles/');
  const dirs = fs.readdirSync(contentsDir);
  const filteredDirs = dirs.filter((f) => !f.startsWith('.'));
  return filteredDirs;
}

/**
 * @description カテゴリー名を取得する
 * @param category カテゴリー
 * @returns { string } カテゴリー名
 */
export function getCategoryName(category: string): string {
  const contentsDir = path.join(process.cwd(), 'public/articles/');
  const titlePath = path.join(contentsDir, category, '.title');

  if (fs.existsSync(titlePath)) return fs.readFileSync(titlePath, 'utf8');

  return category;
}

/**
 * @description ファイル名から記事を取得する
 * @param dir ディレクトリ名
 * @param filename ファイル名
 * @returns 記事
 */
function getArticleByFilename(
  dir: string,
  filename: string,
): Article<ArticleMetaFormatted> {
  const contentsDir = path.join(process.cwd(), 'public/articles/', dir);
  const filePath = path.join(contentsDir, filename);
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const md = matter(fileContents);
  const meta = md.data as EsaMeta;

  const tags = meta.tags?.split(', ') ?? [];
  const createdAtStr = parseMetaTag(
    tags,
    'date',
    meta.created_at,
    /\d{4}-\d{2}-\d{2}/,
  );
  const createdAt = new Date(createdAtStr);

  const article: Article<ArticleMetaFormatted> = {
    path: `/blog/${dir}/${meta.number}`,
    filename: filename,
    id: meta.number,
    content: md.content,
    meta: {
      title: meta.title,
      tags: [],
      createdAt: createdAt,
      thumbnail: null,
    },
  };

  const matches = md.content.match(IMAGE_REGEX);
  if (matches) article.meta.thumbnail = matches[2] || matches[3];

  return article;
}

/**
 * @description 記事を取得する
 * @returns
 */
export function getArticlesByCategory(
  dir: string,
): Article<ArticleMetaFormatted>[] {
  const contentsDir = path.join(process.cwd(), 'public/articles/', dir);
  const filenames = fs.readdirSync(contentsDir);
  const filteredFilenames = filenames.filter((f) => !f.startsWith('.'));

  const articles = filteredFilenames.map((fname) =>
    getArticleByFilename(dir, fname),
  );

  const filteredArticles = articles.filter((a) => a.meta.title !== 'README');
  filteredArticles.sort((a, b) =>
    a.meta.createdAt > b.meta.createdAt ? -1 : 1,
  );

  return filteredArticles;
}

/**
 * @description 記事数を取得する
 * @returns { number } 記事数
 */
export function getArticleCount(dir: string): number {
  const contentsDir = path.join(process.cwd(), 'public/articles/', dir);
  const filenames = fs.readdirSync(contentsDir);
  const filteredFilenames = filenames.filter((f) => !f.startsWith('.'));
  return filteredFilenames.length;
}

/**
 * @description 記事を取得する
 * @param category カテゴリー
 * @returns 記事
 */
export function getArticles(
  category: string | undefined,
): Article<ArticleMetaFormatted>[] {
  if (category === undefined) return getAllArticles();

  return getArticlesByCategory(category);
}

/**
 * @description 記事を取得する
 * @param category カテゴリー
 * @param id 記事ID
 * @returns 記事
 */
export function getArticle(
  category: string,
  id: string,
): Article<ArticleMetaFormatted> {
  const filename = `${id}.html.md`;
  return getArticleByFilename(category, filename);
}

/**
 * @returns 記事を全て取得する
 */
export function getAllArticles(): Article<ArticleMetaFormatted>[] {
  const contentsDir = path.join(process.cwd(), 'public/articles/');
  const dirs = fs.readdirSync(contentsDir);
  const filteredDirs = dirs.filter((f) => !f.startsWith('.'));

  const articles = filteredDirs.flatMap((dir) => getArticlesByCategory(dir));

  articles.sort((a, b) => (a.meta.createdAt > b.meta.createdAt ? -1 : 1));

  return articles;
}

/**
 * @description タグの文字列からタグを取得する
 * @param tags タグの文字列
 * @param key タグのキー
 * @param defaultValue デフォルト値
 * @param check 正規表現でチェックする
 * @returns タグ
 */
function parseMetaTag(
  tags: string[],
  key: string,
  defaultValue: string,
  check?: RegExp,
): string {
  const tag = tags?.filter((tag) => tag.startsWith(`${key}:`))[0];
  const value = tag && tag.replace(`${key}:`, '');

  if (check === undefined) return value ?? defaultValue;

  if (value && check.test(value)) return value;
  return defaultValue;
}
