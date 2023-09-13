import { Slug } from "@/types";
import { sync } from "glob";

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
  return getChildren("posts");
}
