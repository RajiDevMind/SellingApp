import React, { createContext, useEffect, useContext, useState } from "react";

// import { ShopContext } from "../../context/ShopContext.jsx";

export const ShopContext = createContext({});

export const ShopContextProvider = (props) => {
  // const { cartItems, setCartItems } = useContext(ShopContext);
  const [cartItems, setCartItems] = useState([]);

  const getTotalAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let getItemInfo = cartItems.find(
          (product) => product.id === Number(item)
        );
        totalAmount += cartItems[item] * getItemInfo.price;
      }
    }
    return totalAmount;
  };

  const contextValues = {};
  return (
    <ShopContext.Provider value={contextValues}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
