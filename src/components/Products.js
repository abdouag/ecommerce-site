import React from 'react';
import ProductCard from './ProductCard';
import productImage from '../assets/261991_hhfa33.png';
import '../styles/ProductCard.css';

const sampleProducts = [
    {
        id: 1,
        title: "Produit 1",
        description: "Description du produit 1",
        price: 700000,
        imageUrl: productImage
    },
];

function Products() {
    return (
      <div className="products-container">
        {sampleProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    );
  }
  
export default Products;
