import styles from "./card.module.scss";
import { Post } from "@/types";
import Image from "next/image";

export default function PostCard({ post }: { post: Post }) {
  const heroSrc = post.heroImage || "/images/hero.jpg";

  return (
    <div className={styles.card}>
      <div className={styles.heroWrapper}>
        {heroSrc}
        <Image
          src={heroSrc}
          alt="hero"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </div>
  );
}
