import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({ productId }) => {
    const handleViewDetails = () => {
        // Handle the click event to show details of the selected product
        console.log('View Details clicked for product ID:', productId);
        // You can implement logic here to show the details of the selected product
    };

    return (
        <div>
            {/* Use Link component to navigate to '/product/:productId' when button is clicked */}
            <Link to={`/product/${productId}`}>
                <button
                    style={{
                        backgroundColor: '#3b82f6',
                        color: 'white',
                        fontWeight: 'bold',
                        padding: '0.3rem 0.8rem',
                        borderRadius: '0.25rem',
                        cursor: 'pointer',
                        transition: 'background-color 0.3s ease',
                        fontSize: '0.9rem',
                        marginTop: '10px',
                    }}
                    onClick={handleViewDetails}
                >
                    View Details
                </button>
            </Link>
        </div>
    );
};

export default Button;
