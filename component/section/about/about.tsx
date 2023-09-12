import styles from "./about.module.scss";

export default function About() {
  return (
    <section className={styles.about}>
      <div className={styles.container}>
        <h1 className={styles.name}>佐藤 さとる</h1>

        <p className={styles.profile}>
          名古屋の大学生。
          プログラミングが好きで主にフロントエンド開発しています。
          システム開発や電子工作もやります。
          これからAndroidアプリ開発を勉強する予定です。
          webデザインとごく稀に映像制作もします。 夢はペンギンと同居すること。
          お世話は面倒なので、いずれペンギン型ロボットが誕生することを願っています。
          本名ではない。
        </p>
      </div>
    </section>
  );
}
