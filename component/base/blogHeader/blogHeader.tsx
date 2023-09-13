"use client";
import { Drawer } from "@mantine/core";
import styles from "./blogHeader.module.scss";
import { useDisclosure } from "@mantine/hooks";

type Props = {
  children: React.ReactNode;
};

export default function BlogHeader({ children }: Props) {
  const [opened, { open, close }] = useDisclosure(true);

  function trigle() {
    if (opened) close();
    else open();
  }

  return (
    <>
      <Drawer
        opened={opened}
        onClose={close}
        withCloseButton={false}
        overlayProps={{ opacity: 0.1 }}
      >
        {children}
      </Drawer>

      <header className={styles.header}>
        <h1 className={styles.title}>SatooRu&apos;s Profile</h1>

        <div className={styles.hamburger} onClick={trigle} data-opend={opened}>
          <div style={{ ["--i" as string]: 0 }}></div>
          <div style={{ ["--i" as string]: 1 }}></div>
          <div style={{ ["--i" as string]: 2 }}></div>
        </div>
      </header>
    </>
  );
}
