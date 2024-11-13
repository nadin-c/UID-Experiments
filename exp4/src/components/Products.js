import React from 'react';
import './Product.css';

const Products = ({ addToCart }) => {
  const products = [
    { id: 1, name: 'Smartphone', price: 499, image: '/images/product1.jpg' },
    { id: 2, name: 'Laptop', price: 899, image: '/images/product2.jpg' },
    { id: 3, name: 'Headphones', price: 199, image: '/images/product3.jpg' },
  ];

  return (
    <div className="products">
      <h2>Our Products</h2>
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>${product.price}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
