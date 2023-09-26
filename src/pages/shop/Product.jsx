import React, { useContext } from "react";
import { ShopContext } from "../../context/ShopContext";

const Product = (props) => {
  const { id, productName, price, category, productImage } = props.data;
  const { cartItems, addToCart, removeFromCart } = useContext(ShopContext);

  const cartItemAmount = cartItems[id];

  return (
    <div key={id} className="products">
      <div className="product">
        <img src={productImage} alt={productName} />
        <div className="description">
          <p>
            <b>{productName}</b>
          </p>
          <p>${price}</p>
          {/* <p>{category}</p> */}
        </div>
        <button className="addToCartBttn" onClick={() => addToCart(id)}>
          Add To Cart
          {cartItemAmount > 0 && (
            <>
              ({cartItemAmount} {productName})
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default Product;
