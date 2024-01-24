import { RiTwitterXFill } from '@/component/share/icon/icon';
import styles from './about.module.scss';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function About() {
  return (
    <section className={styles.about} id="about">
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

        <div className={styles.accounts}>
          <a
            className={styles.link}
            target="_blank"
            href="https://github.com/SatooRu65536"
          >
            <GitHubIcon className={styles.icon} />
          </a>
          <a
            className={styles.link}
            target="_blank"
            href="https://x.com/SatooRu_65536"
          >
            <RiTwitterXFill className={styles.icon} />
          </a>
        </div>
      </div>
    </section>
  );
}
