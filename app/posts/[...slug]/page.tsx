import styles from "./page.module.scss";
import { getContent } from "@/component/util/util";
import Post from "@/component/section/post/post";
import PostCard from "@/component/ui/card/card";
import NotFound from "@/app/(none)/not-found";

export default function PostPage({ params }: { params: { slug: string[] } }) {
  const dirname = `posts/${params.slug.join("/")}`;
  const post = getContent(dirname);

  if (post === null) {
    return <NotFound />;
  } else if (Array.isArray(post)) {
    return (
      <div className={styles.posts}>
        {post.map((p) => (
          <PostCard post={p} key={p.slug} />
        ))}
      </div>
    );
  } else {
    return <Post post={post} />;
  }
}
