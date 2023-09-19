import React from 'react';
import '../styles/ProductCard.css';

function addToCart(product) {
    console.log(`Produit ajouté au panier : ${product.title}`);
}

function ProductCard({ product }) {
    return (
        <div className="product-card">
            <img src={product.imageUrl} alt={product.title} />
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <p>{product.price}</p>
            <button onClick={() => addToCart(product)}>Ajouter au panier</button>
        </div>
    );
}

export default ProductCard;
