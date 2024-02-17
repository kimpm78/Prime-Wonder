import { slideArr, PaginationBtnType } from '@/utils/types';

function Pagination({ slideIndex, setSlideIndex }: PaginationBtnType) {
  const slideLength = slideArr.length;

  // 改修を動的で変更するため　slideLengthは配列を持つ状態に生成
  let paginationArr = new Array(slideLength);
  paginationArr.fill(1);

  // pagenation　buttonの状態
  // setSlideIndexを該当するボタンの indexで差し込み
  const paginationHandler = (index: number) => {
    setSlideIndex(index + 1);
  };

  return (
    <div className="absolute z-10 justify-center hidden w-screen bottom-2 group-hover:flex">
      <ol className="flex">
        {paginationArr.map((item, index) => (
          <li
            className="w-[15px] h-[15px] rounded-full bg-[rgba(255,255,255,0.5)] mx-1 hover:bg-[rgba(255,255,255,0.8)] hover:cursor-pointer"
            style={{
              backgroundColor: `${slideIndex === index + 1 ? 'rgba(255,255,255,0.8)' : 'rgba(255,255,255,0.5)'}`,
            }}
            key={index}
            onClick={() => paginationHandler(index)}
          ></li>
        ))}
      </ol>
    </div>
  );
}

export default Pagination;
