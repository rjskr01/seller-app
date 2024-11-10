// pages/index.tsx
import React, { useState } from 'react';
import ProductCard from '../components/ProductCard';
import Pagination from '../components/Pagination';
import products from '../data/products';

const ITEMS_PER_PAGE = 20;

const Home: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  
  const totalPages = Math.ceil(products.length / ITEMS_PER_PAGE);
  
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentProducts = products.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Product List</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-4">
        {currentProducts.map(product => (
          <ProductCard
                key={product.id}
                image={product.image}
                title={product.title}
                description={product.description}
                quantity={product.quantity}
                price={parseFloat(product.price)}         />
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default Home;