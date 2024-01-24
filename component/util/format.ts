/**
 * @description マークダウンをテキストに変換する
 * @param md マークダウン
 * @returns { string } テキスト
 */
export function mdToText(md: string): string {
  const text = md
    .replace(/#+ .*\n/g, "")
    .replace(/[ |:\\*-]/g, "")
    .replace(/<.+>/g, "")
    .replace(/\*/g, "")
    .replace(/`/g, "")
    .replace(/\\/g, "")
    .replace(/\[.*\]\(.*\)/g, "");
  return text;
}

/**
 * @package
 * @description 日付をフォーマットする
 * @param date 日付
 * @returns { string } フォーマットされた日付
 */
export function formatdate(date: Date): string {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  return `${year}年${month}月${day}日`;
}

/**
 * @description 桁数を揃える
 * @param num 数字
 * @param n 桁数
 * @returns { string } 桁数を揃えた文字列
 */
function toDigits(num: number, n: number): string {
  return `${num}`.padStart(n, "0");
}