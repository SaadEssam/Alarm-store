import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import { useStateContext } from "@/context/StateContext";
import { runFireworks } from "@/lib/utils";

const Success = () => {
  const { setCartItems, setTotalPrice, setTotalQuantities } = useStateContext();
  const [order, setOrder] = useState(null);

  useEffect(() => {
    localStorage.clear();
    setCartItems([]);
    setTotalPrice(0);
    setTotalQuantities(0);
    runFireworks();
  }, []);

  return (
    <div className="flex items-center justify-around sm:mt-52 sm:h-full sm:flex-col md:mt-0 md:h-screen md:flex-row">
      <div className="flex flex-col items-center justify-center space-y-5 rounded-2xl text-center">
        <h2 className="mt-4 font-extrabold capitalize text-secondary sm:text-3xl md:text-5xl">
          Thank you for your order!
        </h2>
        <p className="font-semibold sm:text-lg md:text-xl">
          Check your email inbox for the receipt.
        </p>
        <p className="m-3 font-semibold sm:text-sm md:text-base">
          If you have any questions, please email
          <a className="ml-1 text-primary" href="mailto:info@alarmstore.com">
            info@alarmstore.com
          </a>
        </p>
        <Link href="/">
          <button type="button" className="primary-btn sm:w-52 md:w-96">
            Continue Shopping
          </button>
        </Link>
      </div>
      <div className="sm:mt-11 md:mt-0">
        <img
          src="/assets/success-payment.png/"
          alt="success-payment"
          className="w-96"
        />
      </div>
    </div>
  );
};

export default Success;
