/**
 * @package
 */
export type Progresses = {
  name: string;
  color: 'green' | 'blue' | 'orange' | 'red';
  persentage: number;
}[];

type date = `${number}.${number}`;

/**
 * @package
 */
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

/**
 * @package
 */
export type Award = {
  award: string;
  name: string;
  date: date;
  description: string;
  link?: string;
};

/**
 * @package
 */
export type Project = {
  name: string;
  summary: string;
  tags: string[];
  repo: string;
  site: string | undefined;
};

/**
 * @package
 */
export type Work = {
  genre: string;
  name: string;
  summary: string;
  start: date;
  end?: date;
  technologies: string[];
};
