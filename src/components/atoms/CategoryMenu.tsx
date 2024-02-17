'use client';
import { useRouter } from 'next/navigation';

const CategoryMenu = () => {
  const router = useRouter(); // Call useRouter as a function

  const handleCategoryClick = (category: string) => {
    router.push(category);
  };

  return (
    <div className="flex space-x-4 p-4">
      <button
        className={'hover:font-bold'}
        onClick={() => handleCategoryClick('/NewProduct')}
      >
        新規商品
      </button>
      <span className="flex px-1 text-gray-300 text-sm items-center">|</span>
      <button
        className={'hover:font-bold'}
        onClick={() => handleCategoryClick('/LaunchProduct')}
      >
        開始前商品
      </button>
      <span className="flex px-1 text-gray-300 text-sm items-center">|</span>
      <button
        className={'hover:font-bold'}
        onClick={() => handleCategoryClick('/Character')}
      >
        キャラクター
      </button>
      <span className="flex px-1 text-gray-300 text-sm items-center">|</span>
      <button
        className={'hover:font-bold'}
        onClick={() => handleCategoryClick('/Genre')}
      >
        ジャンル
      </button>
      <span className="flex px-1 text-gray-300 text-sm items-center">|</span>
      <button
        className={'hover:font-bold'}
        onClick={() => handleCategoryClick('/Shop')}
      >
        ショップ
      </button>
      <span className="flex px-1 text-gray-300 text-sm items-center">|</span>
      <button
        className={'hover:font-bold'}
        onClick={() => handleCategoryClick('/Brand')}
      >
        ブランド
      </button>
    </div>
  );
};

export default CategoryMenu;
