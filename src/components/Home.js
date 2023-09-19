import React from 'react';
import ProductCard from '../components/ProductCard';
import productImage from '../assets/261991_hhfa33.png';

const sampleProducts = [
    {
        id: 1,
        title: "Produit 1",
        description: "Description du produit 1",
        price: 700000,
        imageUrl: productImage
    },
    {
        id: 2,
        title: "Produit 2",
        description: "Description du produit 2",
        price: 600000,
        imageUrl: productImage
    },
    {
        id: 3,
        title: "Produit 3",
        description: "Description du produit 3",
        price: 800000,
        imageUrl: productImage
    },
    
];



function Home() {
    return (
        <div className="products-container">
            {sampleProducts.map(product => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    );
}

export default Home;
