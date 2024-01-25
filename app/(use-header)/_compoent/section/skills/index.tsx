import styles from './index.module.scss';

export default function Skills() {
  const skills = [
    {
      name: 'HTML/CSS',
      summary: 'SCSSがめっちゃ好き。CSS Modules とは仲良いです',
    },
    {
      name: 'JavaScript/TypeScript',
      summary:
        '一番好きな言語でフロントとバック両方で使ってます。型パズルはじめました。',
    },
    {
      name: 'Python',
      summary:
        'センシングしてこねこねしてグラフを生成するために使いまくってます。きらい',
    },
    {
      name: 'Rust',
      summary: '特に目的はないけど、楽しそうだから勉強中。',
    },
    {
      name: 'Ruby',
      summary: 'お仕事で触ってるけどきらい。if修飾子だけは好き',
    },
    {
      name: 'C/C#/PHP/Fortran...',
      summary: '稀に触ります。授業とか Unity とか他大学の研究とか...',
    },
    {
      name: 'web開発',
      summary:
        'Next.js をメインにたまに Svelte, Vue, Qwik を触ってみたりしてる',
    },
    {
      name: 'センシング',
      summary:
        'センシング用Andoid端末でいろんな動作をセンシングしてる。一番のお気に入りは Dragon Night のフェスセンシング',
    },
    {
      name: 'illustrator',
      summary:
        'ベジェ曲線描くのが得意です（適当）最近はロゴとサイトイメージなどを制作するのに使ってます',
    },
    {
      name: 'After Effects',
      summary: 'モーショングラフィックス作ってました。現在はデモ動画編集用。',
    },
    {
      name: 'ペンギン',
      summary:
        '幼い頃からすき。アデリーペンギンが一番すきだが、フンボルト属のペン達も結構すき。年パスは必需品。',
    },
    {
      name: '城・歴史',
      summary:
        '石垣がすき。城・古戦場・古墳を巡ってる。何気に城郭検定2級もってます。（1級は無理）',
    },
  ];

  return (
    <section className={styles.skills} id="skills">
      <h1 className={styles.title}>Skills</h1>
      <div className={styles.container}>
        {skills.map((item) => {
          return (
            <div className={styles.card} key={item.name}>
              <div className={styles.name}>{item.name}</div>
              <div className={styles.summary}>{item.summary}</div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
