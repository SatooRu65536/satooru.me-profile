/**
 * @description ページネーションの数字を取得する
 * @param current 現在のページ
 * @param max 最大ページ数
 * @param n 前後のページ数
 * @returns ページネーションの数字
 */
export function getPagenationNums(
  current: number,
  max: number,
  n: number,
): number[] {
  const nums: number[] = [];
  let rangeMin = current - n;
  let rangeMax = current + n;

  if (max - current < n) rangeMin -= n - max + current;
  if (rangeMin < 1) rangeMin = 1;

  if (n - current + 1 > 0) rangeMax += n - current + 1;
  if (rangeMax > max) rangeMax = max;

  for (let i = rangeMin; i <= rangeMax; i++) nums.push(i);

  return nums;
}
