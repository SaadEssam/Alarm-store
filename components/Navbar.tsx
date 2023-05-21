import React from "react";
import Link from "next/link";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useStateContext } from "@/context/StateContext";
import { Products, StateContextProps } from "@/typings";
import Cart from "./Cart";

const Navbar = () => {
  const { showCart, setShowCart, totalQuantities }: StateContextProps =
    useStateContext();

  return (
    <div className="navbar-container">
      <Link href="/">
        <img src="/assets/logo.png" alt="logo" className="logo-img" />
      </Link>
      <button
        type="button"
        className="cart-icon"
        onClick={() => setShowCart(true)}
      >
        <AiOutlineShoppingCart />
        <span className="cart-item-qty">{totalQuantities}</span>
      </button>

      {showCart && <Cart />}
    </div>
  );
};

export default Navbar;
