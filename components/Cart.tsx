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
      <div className="w-600 slide-right relative float-right h-screen bg-white px-5 py-20">
        <button
          type="button"
          className="ml-5 flex cursor-pointer items-center gap-2 border-none bg-transparent text-lg font-medium"
          onClick={() => setShowCart(false)}
        >
          <AiOutlineLeft />
          <span>Your Cart</span>
          <span className="text-red-500">({totalQuantities} items)</span>
        </button>

        {cartItems.length < 1 && (
          <div className="m-40 text-center">
            <AiOutlineShoppingCart size={150} />
            <h3 className="text-xl font-medium">Your Shopping cart is empty</h3>
            <Link href="/">
              <button
                type="button"
                className="btn"
                onClick={() => setShowCart(false)}
              >
                Continue Shopping
              </button>
            </Link>
          </div>
        )}

        <div className="mt-15 max-h-70vh overflow-auto px-5 py-10">
          {cartItems.length >= 1 &&
            cartItems.map((item) => (
              <div
                className="gap-30 flex border-b border-gray-300 p-20"
                key={item._id}
              >
                <img
                  src={urlFor(item?.image[0]).url()}
                  className="h-1/6 w-1/6 rounded-lg bg-gray-200"
                  alt={item.name}
                />
                <div className="item-desc">
                  <div className="flex flex-wrap justify-between gap-4 text-sky-950">
                    <h5 className="text-xl font-medium">{item.name}</h5>
                    <h4 className="text-lg font-medium">{item.price} EGP</h4>
                  </div>
                  <div className="mt-10">
                    <div>
                      <p className="quantity-desc">
                        <span
                          className="minus"
                          onClick={() =>
                            toggleCartItemQuantity(item._id, "dec")
                          }
                        >
                          <AiOutlineMinus />
                        </span>
                        <span className="num">{item.quantity}</span>
                        <span
                          className="plus"
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
                      className="duration-400 border-0 bg-transparent text-2xl text-red-600 transition ease-in-out hover:text-red-500"
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
          <div className="absolute bottom-3 right-1 w-full px-16 py-7">
            <div className="flex justify-between text-xl font-semibold">
              <h3>Subtotal:</h3>
              <h3>{totalPrice} EGP</h3>
            </div>
            <div className="w-96 m-auto">
              <button type="button" className="btn" onClick={handleCheckout}>
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
