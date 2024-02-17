'use client';
import { useEffect, useState } from 'react';

import ProductImage from '@/components/atoms/ProductImage';
import ProductInfo from '@/components/atoms/ProductInfo';
import { ProductProps } from '@/utils/types';
import Link from 'next/link';
import Button from '../atoms/Button';
import Modal from '../atoms/Modal';

interface ProductCardProps {
  product: ProductProps;
  addToCart: (product: ProductProps) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, addToCart }) => {
  const [showModal, setShowModal] = useState(false); // モーダルの状態
  const [products, setProducts] = useState<ProductProps[]>([]);

  const handleAddToCart = () => {
    addToCart(product); // addToCart 함수를 호출하여 제품 정보를 전달
    setShowModal(true); // 모달을 보이도록 설정
  };

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await fetch('http://localhost:3020/api/product', {
          cache: 'no-store',
        });
        if (!res.ok) {
          throw new Error('Failed to fetch products');
        }
        const data = await res.json();
        setProducts(data.products);
      } catch (error) {
        console.log('Failed to fetch products:', error);
      }
    };
    getProducts();
  }, []);

  return (
    <>
      {products.map((product) => (
        <div
          className="flex flex-col items-center w-full md:-1/2 lg:w-1/3 xl:w-1/4 p-4 "
          key={product._id}
        >
          <Link href={`/products/${product._id}`}>
            <ProductImage
              key={product._id}
              src={product.image}
              alt={product.name}
            />
          </Link>
          <ProductInfo
            key={product._id}
            name={product.name}
            price={product.price}
            description={product.description}
          />
          <Button onClick={handleAddToCart}>カートに入れる</Button>
        </div>
      ))}
      {showModal && <Modal onClose={() => setShowModal(false)} />}
    </>
  );
};

export default ProductCard;
