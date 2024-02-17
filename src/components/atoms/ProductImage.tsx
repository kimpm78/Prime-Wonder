interface ProductImageProps {
  src: string;
  alt: string;
}

const ProductImage: React.FC<ProductImageProps> = ({ src, alt }) => {
  return <img src={src} alt={alt} className="max-w-full w-[200px] h-[200px]" />;
};

export default ProductImage;
