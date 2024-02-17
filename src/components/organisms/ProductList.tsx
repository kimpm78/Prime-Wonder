import { ProductProps } from '@/utils/types';
import ProductCard from '@/components/molecules/ProductCard';

interface ProductListProps {
  products: ProductProps[];
  onClick: (id: number) => void;
}

const addToCart = (product: ProductProps) => {
  console.log('Add to cart:', product);
};

const ProductList: React.FC<ProductListProps> = ({ products, onClick }) => {
  return (
    <>
      <div className="flex flex-wrap justify-center">
        <ProductCard product={products[0]} addToCart={addToCart} />
      </div>
    </>
  );
};

export default ProductList;
