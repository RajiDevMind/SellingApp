import React, { useEffect, useState } from "react";
import Product from "./Product.jsx";
import "./shop.css";
import axios from "axios";

const Shop = () => {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get("/api/v1/products");
        const data = response.data;
        setCartItems(data.productData);
        setLoading(false);
      } catch (err) {
        console.error(err);
      }
    }

    fetchData(); // Call the fetchData function to trigger the API request when the component mounts
  }, []); // The empty array as the second argument ensures this effect runs once on mount

  return (
    <div className="shop">
      <div className="shopTitle">
        <h1>Shop in Buy-Cheap</h1>
      </div>
      <div className="products">
        {!window.navigator.onLine ? (
          "check your internet connection"
        ) : loading ? (
          <p>Loading...</p>
        ) : cartItems ? (
          cartItems.map((product) => (
            <div key={product._id}>
              <p>{product.category}</p>
              <Product data={product} cartItems={cartItems} />
            </div>
          ))
        ) : (
          <div>No Product data</div>
        )}
      </div>
    </div>
  );
};

export default Shop;
