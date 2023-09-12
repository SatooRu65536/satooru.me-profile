import styles from "./mainskills.module.scss";
import Progress from "@/component/ui/progress/progress";
import { Progresses } from "@/types";

export default function Mainskills() {
  const progress: Progresses = [
    {
      name: "HTML/CSS",
      color: "green",
      persentage: 100,
    },
    {
      name: "JavaScript",
      color: "orange",
      persentage: 80,
    },
  ];

  return (
    <section className={styles.mainskills}>
      <Progress progress={progress} />
    </section>
  );
}
