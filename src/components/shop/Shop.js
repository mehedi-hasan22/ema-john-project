import React, { useEffect, useState } from 'react';
import Product from '../product/Product';

import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])


    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))

    }, [])

    const handleAddToCart = (product) => {
        console.log('clicked', product)
        const newCart = [...cart, product]
        setCart(newCart)
    }

    return (
        <div className='Shop-container'>
            <div className="product-container">
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        handleAddToCart={handleAddToCart}
                    ></Product>)
                }
            </div>
            <div className="cart-container">
                <h3>Order Summary</h3>
                <p>Order Summary: {cart.length}</p>
            </div>
        </div>
    );
};

export default Shop;