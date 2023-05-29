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
    <div className="flex h-screen items-center justify-around">
      <div className="flex flex-col items-center justify-center space-y-5 rounded-2xl text-center">
        <h2 className="mt-4 text-5xl font-extrabold capitalize text-sky-900">
          Thank you for your order!
        </h2>
        <p className="font-semibold text-xl">Check your email inbox for the receipt.</p>
        <p className="m-3 text-base font-semibold">
          If you have any questions, please email
          <a className="ml-1 text-red-500" href="mailto:info@alarmstore.com">
            info@alarmstore.com
          </a>
        </p>
        <Link href="/">
          <button type="button" className="primary-btn w-96">
            Continue Shopping
          </button>
        </Link>
      </div>
      <div>
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
