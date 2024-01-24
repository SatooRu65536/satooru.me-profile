import { Experience } from '@/types';
import styles from './index.module.scss';

export default function Experiences() {
  const experiences: Experience[] = [
    {
      description: '梶研究室に参加',
      organization: '梶研',
      start: '2023.04',
      location: '愛工大4号館別館 108',
      overview: '梶研究室に参加',
      url: 'https://kajilab.net/',
      fill: true,
    },
    {
      description: 'システム工学研究会 入部',
      organization: 'SET',
      start: '2023.04',
      location: '愛工大4号館別館 310',
      overview: 'システム工学研究会に入部',
      url: 'https://set1.ie.aitech.ac.jp/',
    },
    {
      description: '愛知工業大学 入学',
      organization: 'AIT',
      start: '2023.04',
      location: '愛知県豊田市',
      overview: '愛知工業大学 情報科学科コンピューターシステム専攻 に入学',
      url: 'https://set1.ie.aitech.ac.jp/',
      fill: true,
    },
    {
      description: '情報システム部 入部',
      organization: 'MISC',
      start: '2021.11',
      end: '2023.03',
      location: '名電高校415教室',
      overview:
        '情報システム(元システムコンピューター)部に転部。なんか部長なってた',
      url: 'https://misc-mdn.dev/',
    },
    {
      description: 'メカニカルアーツ部 参加',
      organization: 'メカ部',
      start: '2020.10',
      end: '2023.03',
      location: '名電高校淳和記念館',
      overview: 'メカニカルアーツ部に参加。(実質掛け持ち)',
      url: 'https://www.meiden.ed.jp/club/detail.html?id=380',
    },
    {
      description: '情報デザイン部 入部',
      organization: 'AMIDC',
      start: '2020.07',
      end: '2022.09',
      location: '名電高校224教室',
      overview: '情報デザイン部に入部。',
      url: 'https://meidenid.com/',
    },
    {
      description: '名電高校入学',
      organization: 'Meiden H.S.',
      start: '2020.40',
      end: '2023.03',
      location: '愛知県名古屋市',
      overview: '情報科学科に入学した。',
      url: 'https://www.meiden.ed.jp/',
      fill: true,
    },
  ];

  return (
    <section className={styles.experiences} id="experiences">
      <h1 className={styles.title}>Experiences</h1>

      <div className={styles.container}>
        <div className={styles.outline}>
          <div className={styles.container}>
            {experiences.map((experience, index) => {
              return (
                <div className={styles.card} key={index}>
                  <div className={styles.number_container}>
                    <div
                      className={`
                        ${styles.number} 
                        ${experience.fill && styles.fill}
                      `}
                    />
                    <div className={styles.line} />
                  </div>

                  <div className={styles.box}>
                    <div className={styles.content}>
                      <p className={styles.designation}>
                        {experience.description}
                      </p>
                      <a className={styles.name} href={experience.url}>
                        {experience.organization}
                      </a>
                      <p className={styles.position}>
                        {experience.start}
                        {' - '}
                        {experience.end ? experience.end : '現在'}
                        {experience.location && ', ' + experience.location}
                        {', '}
                      </p>
                      <p className={styles.overview}>{experience.overview}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
