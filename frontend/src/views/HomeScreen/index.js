import React from 'react';
import data from '../../data';
import { Link } from 'react-router-dom';

function HomeScreen(props) {
    return (
        <ul className="products">
            {data.products.map((product, index) => (
            <li key={index}>
                <div className="product">
                <img
                    src={product.image}
                    alt={product.name}
                    className="product-image"
                />
                <div className="product-name">
                    <Link to={'products/' + product.id}>{product.name}</Link>
                </div>
                <div className="product-brand">{product.brand}</div>
                <div className="product-price">${product.price}</div>
                <div className="product-rating">
                    {product.rating} Stars ({product.reviewers} Reviews)
                </div>
                </div>
            </li>
            ))}
        </ul>
    );
}

export default HomeScreen;