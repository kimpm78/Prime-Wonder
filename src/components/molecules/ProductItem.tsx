import React from 'react';
import { Product } from '@/lib/models/ProductMode';
import Link from 'next/link';
import Image from 'next/image';
import { Rating } from '../products/Rating';

const ProductItem: React.FC<{ product: Product }> = ({ product }) => {
  return (
    <div className="card bg-base-300 shadow-xl mb-4">
      <figure>
        <Link href={`/products/${product.slug}`}>
          <Image
            src={product.image}
            alt={product.name}
            width={200}
            height={200}
            className="object-cover h-64 w-full"
          />
        </Link>
      </figure>
      <div className="card-body">
        <Link href={`/product/${product.slug}`}>
          <h2 className="card-title font-normal">{product.name}</h2>
        </Link>
        <Rating value={product.rating} caption={`(${product.numReviews})`} />
        <p className="mb-2">{product.brand}</p>
        <div className="card-actions flex items-center justify-between">
          <span className="text-2xl">{product.price}円（税込）</span>
        </div>
      </div>
    </div>
  );
};
export default ProductItem;
