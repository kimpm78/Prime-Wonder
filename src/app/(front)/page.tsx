import ProductItem from '@/components/products/ProductItem';
import data from '@/lib/data';
import productService from '@/lib/services/productService';
import { convertDocToObj } from '@/lib/utils';
import { Metadata } from 'next';
import Link from 'next/link';
import { Key } from 'react';

import { BsFire } from 'react-icons/bs';

// メータ情報を読み取る
export const metadata: Metadata = {
  title: process.env.NEXT_PUBLIC_APP_NAME || 'PrimeWonder',
  description: process.env.NEXT_PUBLIC_APP_DESC || 'figure by EC-site',
  icons: {
    icon: '/favicon.ico',
  },
};

//非同期処理を実行して重要な情報を取得
const Home = async () => {
  const featuredProducts = await productService.getFeatured();
  const latestProducts = await productService.getLatest();

  return (
    <>
      <div className="w-full carousel rounded-box mt-4">
        {featuredProducts.map((product, index) => (
          <div
            key={product._id as Key}
            id={`slide-${index}`}
            className="carousel-item relative w-full"
          >
            <Link href={`/product/${product.slug}`}>
              <img className="w-full" src={product.banner} alt={product.name} />
            </Link>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a
                href={`#slide-${index === 0 ? featuredProducts.length - 1 : index - 1}`}
                className="btn btn-circle"
              >
                ❮
              </a>
            </div>
          </div>
        ))}
      </div>
      <h2 className="flex text-2xl py-2 font-bold m-4 items-center gap-2">
        <BsFire className="text-red-500" size={24} />
        人気商品
      </h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {latestProducts.map((product) => (
          <ProductItem key={product.slug} product={convertDocToObj(product)} />
        ))}
      </div>
    </>
  );
};

export default Home;
