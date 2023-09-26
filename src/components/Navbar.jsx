import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import "./navbar.css";
import logo from "../assets/buycheap.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/home">
        <img src={logo} alt="Buy Cheap logo" className="logo" />
      </Link>
      <div className="links">
        <Link to="/">Shop</Link>
        <Link to="/carts">
          <ShoppingCart size={35} />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
