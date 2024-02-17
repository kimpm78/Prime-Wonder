import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'Kim',
      email: 'admin@gmail.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: true,
    },
    {
      name: 'Suzuki',
      email: 'user@gmail.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: false,
    },
  ],

  products: [
    {
      name: 'Product 1',
      slug: 'product-1',
      category: 'Category 1',
      image: '/images/shirt1.jpg',
      price: 70,
      brand: 'Brand 1',
      rating: 4.5,
      numReviews: 10,
      countInStock: 20,
      description: 'Description 1',
      isFeatured: true,
      banner: '/images/banner1.jpg',
    },
    {
      name: 'Product 2',
      slug: 'product-1',
      category: 'Category 1',
      image: '/images/shirt2.jpg',
      price: 70,
      brand: 'Brand 1',
      rating: 4.5,
      numReviews: 10,
      countInStock: 20,
      description: 'Description 1',
      isFeatured: true,
      banner: '/images/banner2.jpg',
    },
    {
      name: 'Product 3',
      slug: 'product-1',
      category: 'Category 1',
      image: '/images/shirt3.jpg',
      price: 70,
      brand: 'Brand 1',
      rating: 4.5,
      numReviews: 10,
      countInStock: 20,
      description: 'Description 1',
      isFeatured: true,
      banner: '/images/banner3.jpg',
    },
    {
      name: 'Product 4',
      slug: 'product-1',
      category: 'Category 1',
      image: '/images/shirt4.jpg',
      price: 70,
      brand: 'Brand 1',
      rating: 4.5,
      numReviews: 10,
      countInStock: 20,
      description: 'Description 1',
      isFeatured: true,
      banner: '/images/banner4.jpg',
    },
  ],
};

export default data;
