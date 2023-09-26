import React from "react";

const CartItem = (props) => {
  const { id, productName, price, category, productImage } = props.data;
  return (
    <div className="cartItem">
      <img src={productImage} alt={productName} />
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p>{price}</p>
      </div>
    </div>
  );
};

export default CartItem;
