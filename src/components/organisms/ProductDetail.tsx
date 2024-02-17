'use client';
import React, { useState } from 'react';
import CartList from '@/components/molecules/CartList';
import { AiFillCaretRight } from 'react-icons/ai';

interface ProductDetailProps {
  id: number;
  name: string;
  price: number;
  onClick: () => void;
}

const ProductDetail: React.FC<ProductDetailProps> = ({
  id,
  name,
  price,
  onClick,
}) => {
  const [quantity, setQuantity] = useState(1);
  const [cart, setCart] = useState<
    { id: number; name: string; price: number; quantity: number }[]
  >([]);

  const handleAddToCart = () => {
    const itemAlreadyInCart = cart.find((item) => item.name === name);
    if (itemAlreadyInCart) {
      setCart(
        cart.map((item) =>
          item.name === name
            ? { ...item, quantity: item.quantity + quantity }
            : item,
        ),
      );
    } else {
      setCart([...cart, { id: cart.length + 1, name, price, quantity }]);
    }
    setQuantity(1);
  };

  return (
    <div className="flex flex-col">
      <h1 className="flex items-center text-3xl font-bold p-5 text-gray-700">
        <AiFillCaretRight size={30} />
        新規商品
      </h1>
      <div className="flex-1 border-t border-gray-400 pt-4 pr-4 ml-4 mr-4" />
      <CartList cart={cart} />
    </div>
  );
};

export default ProductDetail;
