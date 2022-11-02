import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import './Product.css'

const Product = ({ product, handleAddToCart }) => {
    const { name, img, seller, ratings, price } = product;
    return (<div className='product'>
        <img src={img} alt="" />
        <div className="product-info">
            <h6 className='product-name'>{name}</h6>
            <div className='product-description'>
                <p>Price:${price}</p>
                <p><small>Manufacturer: {seller}</small></p>
                <p><small>ratings: {ratings} stars</small></p>
            </div>
        </div>
        <button onClick={() => handleAddToCart(product)} className="cart-btn">
            <p>Add To Cart             <FontAwesomeIcon icon={faCartShopping} /></p>
        </button>
    </div>
    );
};

export default Product;