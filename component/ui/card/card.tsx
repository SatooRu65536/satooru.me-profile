"use client";
import styles from "./card.module.scss";
import { Post } from "@/types";
import Image from "next/image";
import { marked } from "marked";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function PostCard({ post }: { post: Post }) {
  const [text, setText] = useState("");
  const router = useRouter();

  const heroSrc = post.heroImage || "/images/hero.jpg";
  const content = marked(post.content);

  useEffect(() => {
    const div = document.createElement("div");
    div.innerHTML = content;
    const text = div.textContent || div.innerText || "";
    setText(text);
  }, [content]);

  return (
    <div className={styles.card} onClick={() => router.push(`/${post.slug}`)}>
      <div className={styles.heroWrapper}>
        <Image
          className={styles.heroImage}
          src={heroSrc}
          alt="hero"
          sizes="100%"
          fill
          priority
        />
      </div>
      <div className={styles.content}>
        <h2 className={styles.title}>{post.title}</h2>
        <div className={styles.mdWrapper}>{text}</div>
      </div>
      <div className={styles.footer}>
        <span className={styles.date}>{post.date.toLocaleDateString()}</span>
      </div>
    </div>
  );
}
