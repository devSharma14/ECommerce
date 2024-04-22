import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './Cart.css'; // Import CSS file for table styling

const Cart = () => {
  const { productId } = useParams(); // Get the product ID from the URL
  const [product, setProduct] = useState(null); // State to store the product details
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  useEffect(() => {
    // Fetch product details based on the product ID
    fetch(`https://fakestoreapi.com/products/${productId}`)
      .then(response => response.json())
      .then(data => {
        setProduct({ ...data, quantity: 1 }); // Set fetched product data with default quantity 1
        setLoading(false); // Set loading state to false
      })
      .catch(error => {
        setError(error); // Set error state
        setLoading(false); // Set loading state to false
      });
  }, [productId]); // Dependency on productId to fetch data when it changes

  const updateQuantity = (change) => {
    setProduct(prevProduct => ({
      ...prevProduct,
      quantity: Math.max(prevProduct.quantity + change, 1) // Ensure quantity is never less than 1
    }));
  };

  const updatePrice = () => {
    return product ? product.price * product.quantity : 0;
  };

  const removeProduct = () => {
    // Implement logic to remove product from cart
    setProduct(null); // Reset product state to remove the product from cart
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
    <section className="h-100 h-custom" style={{ backgroundColor: '#eee' }}>
      <div className="container h-100 py-5">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col">
            <div className="card shopping-cart" style={{ borderRadius: '15px' }}>
              <div className="card-body text-black">
                <h3 className="mb-5 pt-2 text-center fw-bold text-uppercase">Your Cart</h3>
                <div className="table-responsive">
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th>Photo</th>
                        <th>Name of Product</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <img src={product.image} className="img-fluid" style={{ width: '150px' }} alt="Product Image" />
                        </td>
                        <td>
                          <h5 className="text-primary">{product.title}</h5>
                          <h6 style={{ color: '#9e9e9e' }}>Color: {product.color}</h6>
                        </td>
                        <td>{updatePrice()}$</td>
                        <td>
                          <div className="quantity-buttons def-number-input number-input safari_only">
                            <button onClick={() => updateQuantity(-1)} className="minus">-</button>
                            <input
                              className="quantity fw-bold text-black"
                              min="1"
                              name="quantity"
                              value={product.quantity}
                              type="number"
                              readOnly
                            />
                            <button onClick={() => updateQuantity(1)} className="plus">+</button>
                          </div>
                        </td>
                        <td>
                          <button onClick={removeProduct} className="btn btn-danger">Delete</button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;

