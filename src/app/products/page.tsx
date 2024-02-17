import connectMongoDB from '@/lib/mongodb';
import ProductImage from '@/components/atoms/ProductImage';
import ProductInfo from '@/components/atoms/ProductInfo';
import Product from '@/models/product';
import { GetServerSidePropsContext } from 'next';
import ProductIntroduction from '@/components/organisms/ProductIntroduction';
import ProductDetail from '@/components/organisms/ProductDetail';

interface ProductDetailPageProps {
  product: typeof Product | null;
}

const ProductDetailPage: React.FC<ProductDetailPageProps> = ({ product }) => {
  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {product.map((product) => (
        <ProductDetail key={product._id} product={product} alt={product.name} />
      ))}
    </div>
  );
};

export default ProductDetailPage;
