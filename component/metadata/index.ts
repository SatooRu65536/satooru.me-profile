const siteName = "SatooRu's Profile";
const url = 'https://satooru.me/';

export const title = "SatooRu's Profile";
export const metadataBase = new URL(url);
export const description = '佐藤さとる のプロフィールサイトです.';
export const openGraph = {
  title: siteName,
  description,
  url,
  siteName,
  locale: 'ja_JP',
  type: 'website',
};
export const twitter = {
  card: 'summary_large_image',
  title: siteName,
  description,
  site: '@SatooRu_65536',
};
