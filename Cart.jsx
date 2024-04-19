import React, { useState, useEffect } from 'react';
import './Cart.css'; // Assuming you have a Cart.css file for styling

const Cart = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Fetch product data from your API
        fetch('https://fakestoreapi.com/products')
            .then(response => response.json())
            .then(data => {
                setProducts(data); // Set fetched product data
                setLoading(false); // Set loading state to false
            })
            .catch(error => {
                setError(error); // Set error state
                setLoading(false); // Set loading state to false
            });
    }, []); // Empty dependency array means this effect runs once after the first render

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div className="cart-container">
            <h2 className="cart-heading">Your Cart</h2>
            <ul className="cart-list">
                {products.map(product => (
                    <li key={product.id} className="cart-item">
                        <div className="cart-item-details">
                            <img className="cart-item-image" src={product.image} alt={product.title} />
                            <div className="cart-item-info">
                                <h3 className="cart-item-title">{product.title}</h3>
                                <p className="cart-item-description">{product.description}</p>
                                <div className="cart-item-price">
                                    <p className="current-price">Price: {product.price} €</p>
                                    <p className="original-price">{product.originalPrice}</p>
                                </div>
                            </div>
                        </div>
                        <div className="cart-item-actions">
                            <button type="button" className="cart-action-button remove-button">Remove</button>
                            <button type="button" className="cart-action-button favorite-button">Add to Favorites</button>
                        </div>
                    </li>
                ))}
            </ul>
            <div className="cart-total">
                <p>Total amount: <span className="total-amount">357 €</span></p>
                <p className="additional-info">Not including taxes and shipping costs</p>
            </div>
            <div className="cart-buttons">
                <button type="button" className="cart-action-button back-button">Back to Shop</button>
                <button type="button" className="cart-action-button checkout-button">Proceed to buy</button>
            </div>
        </div>
    );
};

export default Cart;