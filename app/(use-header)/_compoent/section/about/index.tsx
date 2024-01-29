import GitHubIcon from '@mui/icons-material/GitHub';
import styles from './index.module.scss';
import { RiTwitterXFill } from '@/component/share/icon/icon';

export default function About() {
  return (
    <section className={styles.about} id="about">
      <div className={styles.container}>
        <h1 className={styles.name}>佐藤 さとる</h1>

        <p className={styles.profile}>
          名古屋の大学生。
          プログラミングが好きで主にweb開発をしています。
          フロントエンドが中心ですが、必要に応じてバックエンドもやります。
          webに集中するためにモバイルアプリ開発は諦めました。
          多くの人に使ってもらえるサービスを作ろうと画策中です。
          夢はペンギンと同居すること。 
          お世話は面倒なので、いずれペンギン型ロボットが誕生することを願っています。 
          本名ではない。
        </p>

        <div className={styles.accounts}>
          <a
            className={styles.link}
            target="_blank"
            href="https://github.com/SatooRu65536"
            aria-label="GitHub"
          >
            <GitHubIcon className={styles.icon} />
          </a>
          <a
            className={styles.link}
            target="_blank"
            href="https://x.com/SatooRu_65536"
            aria-label="Twitter(X)"
          >
            <RiTwitterXFill className={styles.icon} />
          </a>
        </div>
      </div>
    </section>
  );
}
