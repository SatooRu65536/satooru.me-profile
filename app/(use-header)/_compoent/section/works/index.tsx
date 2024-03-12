import styles from './index.module.scss';
import { Work as WordT } from '@/types/';

export default function Works() {
  const works: WordT[] = [
    {
      genre: 'コメダ珈琲',
      name: 'バイト',
      start: '2023.02',
      end: '2023.11',
      summary: 'ホールスタッフ',
      technologies: [],
    },
    {
      genre: '個人',
      name: '業務委託',
      summary: 'ウェブメディアを管理するwebシステム開発',
      start: '2023.09',
      end: '2024.02',
      technologies: [
        'Nest.js',
        'vue.js',
        'Bootstrap',
        'ejs',
        'GraphQL',
        'MySQL',
        'TypeORM',
      ],
    },
    {
      genre: '個人',
      name: '業務委託',
      summary: '印刷会社のwebシステム開発',
      start: '2023.09',
      end: '2024.02',
      technologies: ['Rails', 'Haml', 'Bootstrap', 'jQuery', 'DataTables'],
    },
    {
      genre: 'pluszero',
      name: 'インターン(バイト)',
      start: '2024.02',
      summary: 'Webシステム開発',
      technologies: ['React.js', 'Nest.js'],
    },
  ];

  works.sort((a, b) => {
    const aStartDate = new Date(a.start);
    const bStartDate = new Date(b.start);

    if (aStartDate !== bStartDate) return aStartDate > bStartDate ? 1 : -1;

    const aEndDate = new Date(a.end || '9999-12-31');
    const bEndDate = new Date(b.end || '9999-12-31');
    return aEndDate > bEndDate ? 1 : -1;
  });

  return (
    <section className={styles.works} id="works">
      <h1 className={styles.title}>Works</h1>

      <div className={styles.container}>
        {works.map((work, index) => {
          return (
            <div className={styles.box} key={index}>
              <p className={styles.date}>
                <span>{work.start}</span>
                {work.end ? (
                  <span>
                    {' - '}
                    {work.end}
                  </span>
                ) : (
                  <span>{' - 現在'}</span>
                )}
              </p>

              <p className={styles.about}>
                <span className={styles.genre}>[{work.genre}]</span>
                <span>{work.name}</span>
              </p>
              <p className={styles.summary}>{work.summary}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
