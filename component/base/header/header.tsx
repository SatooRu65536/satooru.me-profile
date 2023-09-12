import styles from "./header.module.scss";

export default function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>SatooRu&apos;s Profile</h1>

      <div className={styles.hamburger}>
        <div style={{ ["--i" as string]: 0 }}></div>
        <div style={{ ["--i" as string]: 1 }}></div>
        <div style={{ ["--i" as string]: 2 }}></div>
      </div>
    </header>
  );
}
