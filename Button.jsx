import React from 'react';
// import { Route, Switch } from 'react-router-dom';


const Button = () => {
  return (
    <div>
      <button
        style={{
          backgroundColor: '#3b82f6',
          color: 'white',
          fontWeight: 'bold',
          padding: '0.3rem 0.8rem', // Adjusted padding for smaller size
          borderRadius: '0.25rem',
          cursor: 'pointer',
          transition: 'background-color 0.3s ease',
          fontSize: '0.9rem', // Adjusted font size for smaller size
          marginTop: '10px',
        }}
      >
        Buy Now!
      </button>
    </div>
  );
};

export default Button;