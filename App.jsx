import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import Cards from './components/Cards';
import ProductDetails from './components/ProductDetails';
import Cart from './components/Cart'; // Import Cart component
import Banner from './components/Banner';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Header />
              <Banner/>
              <Cards />
            </div>
          }
        />
        <Route path="/product/:productId" element={<ProductDetails />} />
        <Route path="/cart/:productId" element={<Cart />} /> {/* Update the route for Cart */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
