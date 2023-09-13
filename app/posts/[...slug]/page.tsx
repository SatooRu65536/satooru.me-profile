import styles from "./page.module.scss";
import { getPostContent } from "@/component/util/util";
import Post from "@/component/section/post/post";

export default function PostPage({ params }: { params: { slug: string[] } }) {
  const dirname = `posts/${params.slug.join("/")}`;
  const post = getPostContent(dirname);

  return <Post post={post} />;
}
