import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

const ProductDetails = () => {
    const { productId } = useParams(); // Get the product ID from the route parameters
    const [product, setProduct] = useState(null); // State to store the selected product
    const [loading, setLoading] = useState(true); // Loading state
    const [error, setError] = useState(null); // Error state
    const [addedToCart, setAddedToCart] = useState(false); // State to track if product is added to cart

    useEffect(() => {
        // Fetch product details based on the product ID
        fetch(`https://fakestoreapi.com/products/${productId}`)
            .then(response => response.json())
            .then(data => {
                setProduct(data); // Set fetched product data
                setLoading(false); // Set loading state to false
            })
            .catch(error => {
                setError(error); // Set error state
                setLoading(false); // Set loading state to false
            });
    }, [productId]); // Dependency on productId to fetch data when it changes

    const handleAddToCart = () => {
        // Pass product details to cart component
        window.location.href = `/cart/${product.id}`;
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    if (!product) {
        return <div>No product found.</div>;
    }

    return (
        <div style={{ display: 'flex' }}>
            <div style={{ flex: '0 0 200px', marginRight: '20px' }}>
                {/* Fixed-width container located to the right */}
                {/* <h2>Product Details</h2> */}
                <img
                    src={product.image}
                    alt={product.title}
                    style={{ maxWidth: '100%', height: 'auto' }}
                />
                {/* Add to Cart button with CSS styles */}
                {!addedToCart ? (
                    <button
                        onClick={handleAddToCart}
                        style={{
                            backgroundColor: '#3b82f6',
                            color: 'white',
                            fontWeight: 'bold',
                            padding: '0.3rem 0.8rem',
                            borderRadius: '0.25rem',
                            cursor: 'pointer',
                            transition: 'background-color 0.3s ease',
                            fontSize: '0.9rem',
                            marginTop: '20px',
                            marginLeft: '50px',
                        }}
                        className="add-to-cart-button"
                    >
                        Add to Cart
                    </button>
                ) : (
                    <div>Product already added to cart</div>
                )}
            </div>
            <div>
                {/* Details content */}
                <h3>{product.title}</h3>
                <p>{product.description}</p>
                <p>Price: {product.price} €</p>
                {/* Add more details as needed */}
            </div>
        </div>
    );
};

export default ProductDetails;
