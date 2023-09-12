import styles from "./mainskills.module.scss";
import Progress from "@/component/ui/progress/progress";
import { Progresses } from "@/types";

export default function Mainskills() {
  const progress: Progresses = [
    {
      name: "HTML/CSS",
      color: "green",
      persentage: 95,
    },
    {
      name: "JavaScript",
      color: "orange",
      persentage: 95,
    },
    {
      name: "TypeScript",
      color: "blue",
      persentage: 70,
    },
    {
      name: "Python",
      color: "red",
      persentage: 95,
    },
  ];

  return (
    <section className={styles.mainskills}>
      <Progress progress={progress} />
    </section>
  );
}
