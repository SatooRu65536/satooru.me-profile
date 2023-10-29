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

export type Award = {
  award: string;
  name: string;
  date: date;
  description: string;
  link?: string;
}

export type File = {
  isFolder: false;
  name: string;
};

export type Folder = {
  isFolder: true;
  name: string;
  children: Slug[];
};

export type Slug = File | Folder;

export type Post = {
  slug: string;
  heroImage: string;
  content: string;
  title: string;
  shortTitle: string;
  date: Date;
};

export type Project = {
  name: string;
  summary: string;
  tags: string[];
  repo: string;
  site: string | undefined;
};
