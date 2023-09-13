"use client";
import { useRouter } from "next/navigation";
import styles from "./header.module.scss";
import { useDisclosure } from "@mantine/hooks";

export default function Header() {
  const [opened, { open, close }] = useDisclosure(false);
  const router = useRouter();

  const navigation = [
    { name: "top", href: "#top" },
    { name: "about", href: "#about" },
    { name: "main-skills", href: "#main-skills" },
    { name: "skills", href: "#skills" },
    { name: "experiences", href: "#experiences" },
    { name: "active-projects", href: "#projects" },
    { name: "recent-posts", href: "#recent-posts" },
    { name: "posts", href: "/posts" },
  ];

  function trigle() {
    if (opened) close();
    else open();
  }

  return (
    <>
      <div className={styles.drawer} data-opend={opened}>
        <ul className={styles.navArea}>
          {navigation.map((nav) => (
            <li key={nav.name}>
              <a href={nav.href} onClick={close}>
                {nav.name}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <header className={styles.header}>
        <h1 className={styles.title} onClick={() => router.push("/")}>
          SatooRu&apos;s Profile
        </h1>

        <div className={styles.hamburger} onClick={trigle} data-opend={opened}>
          <div style={{ ["--i" as string]: 0 }}></div>
          <div style={{ ["--i" as string]: 1 }}></div>
          <div style={{ ["--i" as string]: 2 }}></div>
        </div>
      </header>
    </>
  );
}
