import { getPagenationNums } from '@/component/util/pagenation';
import Button from './btn';
import Leader from './leader';
import styles from './index.module.scss';

type Props = {
  pageNum: number;
  PageMax: number;
  getPath: (page: number) => string;
};

export default function Pagenation({ pageNum, PageMax, getPath }: Props) {
  const pageNums = getPagenationNums(pageNum, PageMax, 2);
  const pageNumsLast = pageNums[pageNums.length - 1];

  console.log({ pageNums, pageNumsLast });

  return (
    <div className={styles.pagenation}>
      <Button
        pageNum={1}
        pagePath={getPath(1)}
        isHide={pageNums[0] === 1}
        isStart
      />

      <Leader isHide={pageNums[0] === 1} />

      {pageNums.map((n) => (
        <Button
          key={n}
          pageNum={n}
          pagePath={getPath(n)}
          isCurrent={n === pageNum}
        />
      ))}

      <Leader isHide={pageNumsLast === PageMax} />

      <Button
        pageNum={PageMax}
        pagePath={getPath(PageMax)}
        isHide={pageNumsLast === PageMax}
        isStart
      />
    </div>
  );
}
