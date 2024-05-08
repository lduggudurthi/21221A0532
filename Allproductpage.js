// pages/AllProductsPage.js
import React, { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import { getTopProducts } from '../api'; // Fetch top products function from your API

function AllProductsPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch top N products data from API
    getTopProducts()
      .then((data) => setProducts(data))
      .catch((error) => console.error('Error fetching top products:', error));
  }, []);

  return (
    <div>
      <h1>All Products</h1>
      <div className="products-container">
        {products.map((product) => (
          <ProductCard key={product.productId} product={product} />
        ))}
      </div>
    </div>
  );
}

export default AllProductsPage;