import styles from "./about.module.scss";

export default function About() {
  return (
    <section className={styles.about}>
      <div className={styles.container}>
        <h1 className={styles.name}>SatooRu</h1>

        <div className={styles.profile}>
          <p>
            名古屋の大学生。
            プログラミングが好きで主にフロントエンドをしています。
            夢はペンギンと同居すること。
            お世話は面倒なので、いずれペンギン型ロボットが誕生することを願っています。
          </p>
          <p>ペンギン・城・歴史がめっちゃすきです。</p>
        </div>
      </div>
    </section>
  );
}
