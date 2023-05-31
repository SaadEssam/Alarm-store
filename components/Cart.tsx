import React, { useRef } from "react";
import Link from "next/link";
import {
  AiOutlineMinus,
  AiOutlinePlus,
  AiOutlineLeft,
  AiOutlineShoppingCart,
  AiTwotoneDelete,
} from "react-icons/ai";
import toast from "react-hot-toast";

import { useStateContext } from "@/context/StateContext";
import { urlFor } from "@/lib/sanity";
import getStripe from "@/lib/getStripe";

const Cart = () => {
  const cartRef = useRef<HTMLDivElement>(null);
  const {
    totalPrice,
    totalQuantities,
    cartItems,
    setShowCart,
    onRemove,
    toggleCartItemQuantity,
  } = useStateContext();

  const handleCheckout = async () => {
    const stripe = await getStripe();

    const response = await fetch("/api/stripe", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(cartItems),
    });

    if (response.status === 500) return;

    const data = await response.json();

    toast.loading("Redirecting...");

    stripe.redirectToCheckout({ sessionId: data.id });
  };

  return (
    <div
      className="z-100 fixed right-0 top-0 h-screen w-screen bg-black bg-opacity-50"
      ref={cartRef}
    >
      <div className="w-600 animate-fade-left animate-once animate-ease-in-out relative float-right h-screen w-[550px] bg-white px-5 py-20">
        <button
          type="button"
          className="flex cursor-pointer items-center gap-2 border-none bg-transparent text-lg font-medium"
          onClick={() => setShowCart(false)}
        >
          <AiOutlineLeft />
          <span>Your Cart</span>
          <span className="text-primary">({totalQuantities} items)</span>
        </button>

        {cartItems.length < 1 && (
          <div className="m-40 flex flex-col items-center text-center">
            <AiOutlineShoppingCart size={150} />
            <h3 className="text-2xl font-medium">
              Your Shopping cart is empty
            </h3>
            <Link href="/">
              <button
                type="button"
                className="primary-btn w-52"
                onClick={() => setShowCart(false)}
              >
                Continue Shopping
              </button>
            </Link>
          </div>
        )}

        <div className="mt-4 max-h-screen overflow-auto px-2 py-5">
          {cartItems.length >= 1 &&
            cartItems.map((item) => (
              <div
                className="flex gap-5 border-b border-gray-300 p-3"
                key={item._id}
              >
                <img
                  src={urlFor(item?.image[0]).url()}
                  className="h-1/4 w-1/4 rounded-lg bg-gray-200"
                  alt={item.name}
                />
                <div className="">
                  <div className="flex w-[350px] flex-wrap justify-between gap-4 text-secondary">
                    <h5 className="text-2xl font-semibold">{item.name}</h5>
                    <h4 className="text-lg font-semibold">{item.price} EGP</h4>
                  </div>
                  <div className="mt-10 flex justify-between">
                    <div>
                      <p className="flex items-center gap-5 border border-solid border-gray-300 p-1 px-3 py-1 text-lg">
                        <span
                          className="cursor-pointer text-primary"
                          onClick={() =>
                            toggleCartItemQuantity(item._id, "dec")
                          }
                        >
                          <AiOutlineMinus />
                        </span>
                        <span className="text-xl font-medium text-secondary">
                          {item.quantity}
                        </span>
                        <span
                          className="cursor-pointer text-green-500"
                          onClick={() =>
                            toggleCartItemQuantity(item._id, "inc")
                          }
                        >
                          <AiOutlinePlus />
                        </span>
                      </p>
                    </div>
                    <button
                      type="button"
                      className="duration-400 border-0 bg-transparent text-2xl text-red-600 transition ease-in-out hover:text-primary"
                      onClick={() => onRemove(item)}
                    >
                      <AiTwotoneDelete />
                    </button>
                  </div>
                </div>
              </div>
            ))}
        </div>
        {cartItems.length >= 1 && (
          <div className="absolute bottom-3 right-1 w-full px-16 py-7 ">
            <div className="flex justify-between text-xl font-semibold">
              <h3>Subtotal:</h3>
              <h3>{totalPrice} EGP</h3>
            </div>
            <div className="m-auto w-96">
              <button
                type="button"
                className="primary-btn w-96 uppercase"
                onClick={handleCheckout}
              >
                Pay with Stripe
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
