'use client';

import { useState } from 'react';
import { FaRegHeart } from 'react-icons/fa';
import { FaHeart } from 'react-icons/fa6';

interface ProductInfoProps {
  name: string;
  price: number;
  description: string;
}

const ProductInfo: React.FC<ProductInfoProps> = ({
  name,
  price,
  description,
}) => {
  const [isActive, setIsActive] = useState(true);
  const toggleIcon = () => {
    setIsActive(!isActive);
  };
  // 　価格を　貨形式に　変換
  const formattedPrice = price
    .toLocaleString('ja-JP', {
      style: 'currency',
      currency: 'JPY',
    })
    .slice(1);

  return (
    <div className="p-2 text-center max-w-[230px] relative">
      <div className="bg-gradient-to-r from-yellow-600 via-yellow-300 to-yellow-100 text-black py-2 px-4 ">
        {description}
      </div>
      <h3 className="text-ms font-bold overflow-hidden text-ellipsis whitespace-nowrap ">
        {name}
      </h3>
      <div className="flex justify-center items-center">
        <p className="text-xs text-gray-700">{formattedPrice}円（税込）</p>
        {isActive ? (
          <FaRegHeart className="w-5 h-5" onClick={toggleIcon} />
        ) : (
          <FaHeart className="text-red-500 w-5 h-5" onClick={toggleIcon} />
        )}
      </div>
    </div>
  );
};

export default ProductInfo;
