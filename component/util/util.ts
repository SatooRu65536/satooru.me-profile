import { Post, Slug } from "@/types";
import { sync } from "glob";
import fs from "fs-extra";
import matter from "gray-matter";
import path from "path";

const postsDirectory = "posts";

// /posts のディレクトリ構成を取得する
export function getPostSlugs(): Slug[] {
  const getChildren = (path: string): Slug[] => {
    const children = sync(`${path}/*`);
    return children.map((child) => {
      // path の中に index.md があれば isFolder とする
      const isFolder = !child.includes(".");
      const name = isFolder
        ? child.replace(path, "").replace("/", "")
        : child.replace(path, "").replace("/", "");
      return isFolder
        ? { isFolder, name, children: getChildren(child) }
        : { isFolder, name };
    });
  };
  return getChildren(postsDirectory);
}

// 指定したpath以下のmdファイル一覧を取得する
export function getPostFiles(path: string): string[] {
  if (path) {
    return sync(`${postsDirectory}/${path}/**/*.md`);
  } else {
    return sync(`${postsDirectory}/**/*.md`);
  }
}

/**
 * 指定したフィールド名から、記事のフィールドの値を取得する
 */
export function getPostBySlug(filePath: string) {
  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContents);
  const slug = filePath.replace(/index\.md/, "");
  const heroPath = data.hero ? path.join("/", slug, data.hero) : "";

  const items: Post = {
    slug: slug,
    heroImage: heroPath,
    content: content,
    title: data.title || "",
    shortTitle: data.shortTitle || "",
    date: data.date || "",
  };

  return items;
}

/**
 * すべての記事について、指定したフィールドの値を取得して返す
 */
export function getPosts(path: string) {
  const filepathes = getPostFiles(path);
  const posts = filepathes.map((p) => getPostBySlug(p));
  return posts;
}
