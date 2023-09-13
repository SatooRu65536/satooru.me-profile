"use client";
import styles from "./branch.module.scss";
import { Folder, Slug } from "@/types";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import { useRouter } from "next/navigation";
import { useState } from "react";

type Props = {
  folder: Folder;
  path: string;
};

export default function Branch({ folder, path }: Props) {
  const [isOpened, setIsOpened] = useState(false);
  const router = useRouter();

  function getIsLeaf(slug: Slug) {
    if (!slug.isFolder) return true;

    return (
      slug.children.filter((s) => {
        return s.isFolder && !s.name.startsWith("_");
      }).length !== 0
    );
  }

  function folderEle(slug: Slug[], path: string) {
    return (
      <>
        {slug.map((slug) => {
          if (slug.isFolder && !slug.name.startsWith("_")) {
            return <Branch folder={slug} path={path} key={slug.name} />;
          } else {
            return null;
          }
        })}
      </>
    );
  }

  return (
    <li className={styles.branch} key={folder.name}>
      <span className={styles.line}>
        {getIsLeaf(folder) &&
          (isOpened ? (
            <RemoveCircleOutlineIcon
              className={styles.icon}
              onClick={() => setIsOpened(false)}
            />
          ) : (
            <AddCircleOutlineIcon
              className={styles.icon}
              onClick={() => setIsOpened(true)}
            />
          ))}
        <a
          className={styles.title}
          onClick={() => router.push(`${path}/${folder.name}`)}
        >
          {folder.name}
        </a>
      </span>
      <ul data-opened={isOpened}>
        {folderEle(folder.children, `${path}/${folder.name}`)}
      </ul>
    </li>
  );
}
