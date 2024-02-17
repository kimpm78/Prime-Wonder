import { useState } from 'react';

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

interface CartListProps {
  cart: CartItem[];
}

const CartList: React.FC<CartListProps> = ({ cart }) => {
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    //
  };

  return (
    <div className="flex flex-col text-gray-600 mt-20">
      {cart.length === 0 ? (
        <div className="text-center font-bold mt-4">
          <h1>現在、カートには商品が入っておりません。</h1>
          <p>引き続き、お買い物をお楽しみください。</p>
        </div>
      ) : (
        <ul>
          {cart.map((item) => (
            <li key={item.id}>
              {item.name} - ${item.price.toFixed(2)} - Quantity: {item.quantity}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CartList;
