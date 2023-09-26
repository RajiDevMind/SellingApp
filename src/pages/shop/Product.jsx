import React from "react";

const Product = (props) => {
  const { id, productName, price, category, productImage } = props.data;
  return (
    <div key={id} className="products">
      <div className="product">
        <img src={productImage} alt={productName} />
        <div className="description">
          <p>
            <b>{productName}</b>
          </p>
          <p>${price}</p>
          <p>{category}</p>
        </div>
        <button className="addToCartBttn">Add To Cart</button>
      </div>
    </div>
  );
};

export default Product;
