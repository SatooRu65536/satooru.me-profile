import { getPosts } from "@/component/util/util";
import PostCard from "@/component/ui/card/card";
import styles from "./page.module.scss";

export default function PostsPage() {
  const sllPosts = getPosts("/");

  sllPosts.sort((a, b) => (a.date < b.date ? 1 : -1)).slice(0, 24);

  return (
    <main className={styles.posts}>
      {sllPosts.map((post) => (
        <PostCard post={post} key={post.slug} />
      ))}
    </main>
  );
}
