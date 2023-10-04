import React, { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import axios from "axios";

const Product = (props) => {
  const { _id, productName, price, category, productImage } = props.data;

  const [counts, setCounts] = useState(0);
  const [cart, setCarts] = useState([]);

  const addToCart = () => {
    if (counts > 0 - 1) {
      // axios.post("/api/v1/product");
      setCounts(counts + 1);
      let totalCounts = counts + 1,
        _id;
      console.log(totalCounts, productName);
      const itemInCart = { count: totalCounts, productName: productName };
      localStorage.setItem("carts", JSON.stringify(itemInCart));
    }
    console.log(counts + 1, _id);
  };

  return (
    <div key={_id} className="products">
      <div className="product">
        <LazyLoadImage
          src={productImage}
          alt={productName}
          placeholderSrc="placeholderImage"
          effects="blur"
        />
        <div className="description">
          <p>
            <b>{productName}</b>
          </p>
          <p>${price}</p>
          {/* <p>{category}</p> */}
        </div>
        <button className="addToCartBttn" onClick={addToCart}>
          Add To Cart
          {counts > 0 && <p style={{ color: "white" }}>({counts})</p>}
        </button>
      </div>
    </div>
  );
};

export default Product;
