import React from 'react';
import { useCart } from './CartContext';

const ViewCart = () => {
  const { state, dispatch } = useCart();
  const { cartItems } = state;

  const handleDecrease = (id) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id, change: -1 } });
  };

  const handleIncrease = (id) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id, change: 1 } });
  };

  const handleDelete = (id) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: { id } });
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div>
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <div>No items in cart</div>
      ) : (
        <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid black' }}>
          <thead>
            <tr style={{ borderBottom: '1px solid black' }}>
              <th style={{ padding: '8px', textAlign: 'left', borderRight: '1px solid black' }}>Product Image</th>
              <th style={{ padding: '8px', textAlign: 'left', borderRight: '1px solid black' }}>Price</th>
              <th style={{ padding: '8px', textAlign: 'left', borderRight: '1px solid black' }}>Description</th>
              <th style={{ padding: '8px', textAlign: 'left', borderRight: '1px solid black' }}>Quantity</th>
              <th style={{ padding: '8px', textAlign: 'left' }}>Action</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map(item => (
              <tr key={item.id} style={{ borderBottom: '1px solid black' }}>
                <td style={{ padding: '8px', borderRight: '1px solid black' }}><img src={item.image} alt={item.name} style={{ width: '100px', height: '100px' }} /></td>
                <td style={{ padding: '8px', borderRight: '1px solid black' }}>{item.price}$</td>
                <td style={{ padding: '8px', borderRight: '1px solid black' }}>{item.description}</td>
                <td style={{ padding: '8px', display: 'flex', alignItems: 'center', borderRight: '1px solid black' }}>
                  <button onClick={() => handleDecrease(item.id)}>-</button>
                  {item.quantity}
                  <button onClick={() => handleIncrease(item.id)}>+</button>
                </td>
                <td style={{ padding: '8px' }}><button onClick={() => handleDelete(item.id)}>Delete</button></td>
              </tr>
            ))}
            <tr>
              <td colSpan="3" style={{ padding: '8px', textAlign: 'right' }}>Total Price:</td>
              <td style={{ padding: '8px', textAlign: 'center' }}>{getTotalPrice()}$</td>
              <td style={{ padding: '8px' }}></td>
            </tr>
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ViewCart;
