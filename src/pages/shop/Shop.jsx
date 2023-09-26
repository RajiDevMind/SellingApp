import React from "react";
import Product from "./Product.jsx";
import "./shop.css";
import { PRODUCTS } from "../../products.js";

const Shop = () => {
  return (
    <div className="shop">
      <div className="shopTitle">
        <h1>Shop in Buy-Cheap</h1>
      </div>
      <div className="products">
        {PRODUCTS.map((product) => (
          <div key={product.id}>
            <Product data={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;
