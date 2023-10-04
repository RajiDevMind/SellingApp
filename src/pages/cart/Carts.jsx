import React, { useContext } from "react";
import { PRODUCTS } from "../../products";
import { ShopContext } from "../../context/ShopContext";

import CartItem from "./CartItem";
import "./cart.css";
import { useNavigate } from "react-router-dom";

const Carts = () => {
  const { _id, cartItems } = useContext(ShopContext);

  let navigate = useNavigate();

  return (
    <div className="cart">
      <div>
        <h1>Your Cart Items</h1>
      </div>
      <div key={_id} className="cartItem">
        {/* {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) { */}
        <CartItem data={cartItems} />;
        {/* }
        })} */}
      </div>

      <div className="checkout">
        <p>Subtotal:</p>
        <button onClick={() => navigate("/")}>Continue Shopping</button>
        <button>CheckOut!</button>
      </div>

      <h1>Your Cart is Empty!</h1>
    </div>
  );
};

export default Carts;
