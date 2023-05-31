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
    <div className="fixed left-0 right-0 top-0 z-50 flex items-center justify-between bg-white px-16 py-4 shadow-md">
      <Link href="/">
        <img src="/assets/logo.png" alt="logo" className="w-100 h-10" />
      </Link>
      <button
        type="button"
        className="duration-400 relative border-none bg-transparent text-2xl text-gray-500 transition-transform ease-in-out hover:scale-110 hover:text-primary"
        onClick={() => setShowCart(true)}
      >
        <AiOutlineShoppingCart />
        <span className="absolute -top-1 left-4 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-xs font-semibold text-gray-100">
          {totalQuantities}
        </span>
      </button>

      {showCart && <Cart />}
    </div>
  );
};

export default Navbar;
