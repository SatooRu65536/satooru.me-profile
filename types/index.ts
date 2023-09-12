export type Progresses = {
  name: string;
  color: "green" | "blue" | "orange" | "red";
  persentage: number;
}[];

type date = `${number}.${number}`;

export type Experience = {
  description: string;
  organization: string;
  start: date;
  end?: date;
  location?: string;
  overview: string;
  url: string;
  fill?: boolean;
};


