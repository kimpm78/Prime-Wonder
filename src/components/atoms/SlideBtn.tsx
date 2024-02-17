import { DirectionBtnType } from '@/utils/types';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';

function SlidBtn({ direction, onClick }: DirectionBtnType) {
  return (
    <div
      className={
        direction === 'left'
          ? 'hidden md:absolute md:top-1/2 md:left-2 md:text-white md:z-10 md:group-hover:block'
          : 'hidden md:absolute md:top-1/2 md:right-2 md:text-white md:z-10 md:group-hover:block'
      }
    >
      <button onClick={onClick}>
        {direction === 'left' ? (
          <AiOutlineLeft size={30} />
        ) : (
          <AiOutlineRight size={30} />
        )}
      </button>
    </div>
  );
}

export default SlidBtn;
