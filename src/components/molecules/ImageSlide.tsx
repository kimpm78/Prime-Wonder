import React from 'react';

interface ImageSlideProps {
  src: string;
  alt: string;
}

const ImageSlide: React.FC<ImageSlideProps> = ({ src, alt }) => {
  return <img src={src} alt={alt} className="w-full h-full object-cover" />;
};

export default ImageSlide;
