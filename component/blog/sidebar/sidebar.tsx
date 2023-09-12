import { getPostSlugs } from "@/component/util/util";
import styles from "./sidebar.module.scss";
import { Slug } from "@/types";

export default function Sidebar() {
  const postSlugs = getPostSlugs();

  function folder(slug: Slug[]) {
    return (
      <>
        {slug.map((slug) => {
          if (!slug.isFolder && !slug.name.includes(".md")) return null;

          return (
            <li key={slug.name}>
              {slug.name}
              {slug.isFolder ? <ul>{folder(slug.children)}</ul> : null}
            </li>
          );
        })}
      </>
    );
  }

  return (
    <nav className={styles.sidebar}>
      <h2>Posts</h2>
      {folder(postSlugs)}
    </nav>
  );
}
