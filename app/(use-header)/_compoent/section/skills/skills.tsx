import styles from "./skills.module.scss";

export default function Skills() {
  const skills = [
    {
      name: "HTML/CSS",
      summary:
        "HTMLできる。SCSSがめっちゃ好き。最近CSSフレームワークの意義を理解した。mantine最高!",
    },
    {
      name: "JavaScript",
      summary:
        "Node.js でフロントとバック両方触ってます。",
    },
    {
      name: "TypeScript",
      summary:
        "最近TypeScriptの魅力に気付いた。普通にできるけどえぐい型は知らない。",
    },
    {
      name: "Python",
      summary:
        "センシングしてこねこねしてグラフを生成するために使いまくってます。きらい",
    },
    {
      name: "Kotlin",
      summary: "研究室で使えた方が良いから勉強する。",
    },
    {
      name: "Rust",
      summary: "特に目的はないけど、楽しそうだから勉強中。",
    },
    {
      name: "Swift/Ruby/PHP",
      summary: "触ったことがあり、触れるが、触らない。",
    },
    {
      name: "web開発",
      summary: "Next.js が好き。AppRouterを絶賛使ってます。",
    },
    {
      name: "illustrator",
      summary:
        "ベジェ曲線描くのが得意です（適当）最近はロゴと画面イメージなどを制作するのに使ってます",
    },
    {
      name: "After Effects",
      summary:
        "超極稀にモーショングラフィックス作ってる。プログラミングの方が楽しい。現在はデモ動画編集用。",
    },
    {
      name: "ペンギン",
      summary:
        "幼い頃からすき。アデリーペンギンが一番すきだが、フンボルト属のペン達も結構すき。年パスは必需品。",
    },
    {
      name: "城・歴史",
      summary:
        "石垣が一番すき。城巡りしたり古戦場回ったりしてる。何気に城郭検定2級もってます。（1級は無理）",
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
