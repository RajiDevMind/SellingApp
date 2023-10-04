import React, { useContext, useState } from "react";
import { ShopContext } from "../../context/ShopContext";

const CartItem = ({ id, productName, price, category, productImage }) => {
  // const { id, productName, price, category, productImage } = props.data;
  const { cartItems, addToCart, removeFromCart, updateCartItemCount } =
    useContext(ShopContext);

  return (
    <div key={id} className="cartItem">
      <img src={productImage} alt={productName} />
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p>${price}</p>
        <div className="countHandler">
          <button>-</button>
          <input type="text" />
          <button>+</button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
