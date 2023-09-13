"use client";
import { useRouter } from "next/navigation";
import styles from "./tree.module.scss";
import { Slug } from "@/types";
import Branch from "../branch/branch";

export default function Tree({ postSlugs }: { postSlugs: Slug[] }) {
  const router = useRouter();

  function folder(slug: Slug[], path: string) {
    return (
      <>
        {slug.map((slug) => {
          if (!slug.isFolder) return null;
          if (slug.name.startsWith("_")) return null;

          return <Branch folder={slug} path={path} key={slug.name} />;
        })}
      </>
    );
  }

  return (
    <nav className={styles.tree}>
      <a onClick={() => router.push("/")}>Posts</a>
      {folder(postSlugs, "/posts")}
    </nav>
  );
}
