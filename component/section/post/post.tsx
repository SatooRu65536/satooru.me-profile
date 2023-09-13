import styles from "./post.module.scss";
import { Post } from "@/types";
import { marked } from "marked";

export default function Post({ post }: { post: Post }) {
  const content = marked(post.content);

  return (
    <div
      className={styles.post}
      dangerouslySetInnerHTML={{ __html: content }}
    ></div>
  );
}
