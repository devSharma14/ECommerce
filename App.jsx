import React from "react";
import "./App.css";
import Header from "./components/Header"; // Adjusted import path
import Cards from "./components/Cards"; // Import the Cards component\
import products from "./ProductData";
import Footer from "./components/Footer";
import Cart from "./components/Cart";

function App() {
  // Array of different product details

  return (
    <div>
      <Header />

      {/* Pass the products array to the Cards component */}
      <Cards products={products} />
      {/* <Product_description></Product_description> */}
      {/* <Footer></Footer> */}
      <Footer />

      {/* <Cart /> */}
    </div>
  );
}

export default App;
