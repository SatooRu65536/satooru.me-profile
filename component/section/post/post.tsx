import NotFound from "@/component/base/notfound/notfound";
import styles from "./post.module.scss";
import { Post } from "@/types";
import { marked } from "marked";

export default function Post({ post }: { post: Post | null }) {
  const content = post ? marked(post.content) : null;

  return (
    <>
      {content ? (
        <div
          className={styles.post}
          dangerouslySetInnerHTML={{ __html: content }}
        ></div>
      ) : (
        <NotFound />
      )}
    </>
  );
}
