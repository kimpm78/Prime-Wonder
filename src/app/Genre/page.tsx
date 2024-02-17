import ProductList from '@/components/organisms/ProductList';
import { AiFillCaretRight } from 'react-icons/ai';

const Genre = () => {
  return (
    <div className="flex flex-col">
      <h1 className="flex items-center text-3xl font-bold p-5 text-gray-700">
        <AiFillCaretRight size={30} />
        ジャンル
      </h1>
      <div className="flex-1 border-t border-gray-400 pt-4 pr-4 ml-4 mr-4" />
      <div className="flex">
        <ProductList products={[]} onClick={() => {}} />
      </div>
    </div>
  );
};

export default Genre;
