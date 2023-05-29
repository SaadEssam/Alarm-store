import React from "react";
import Link from "next/link";

const Canceled = () => {
  return (
    <div className="flex h-screen items-center justify-around">
      <div className="flex flex-col items-center justify-center space-y-5 rounded-2xl">
        <h2 className="mt-4 text-5xl font-extrabold capitalize text-sky-900">
          Payment Failed!
        </h2>
        <p className="text-center text-xl font-semibold">
          We're sorry, but your payment has been canceled.
        </p>
        <p className="text-center text-xl font-semibold">
          Please try again later or use another payment method.
        </p>
        <Link href="/contact-us">
          <button type="button" className="primary-btn w-52">
            Contact Us
          </button>
        </Link>
      </div>
      <div>
        <img
          src="/assets/cancel-payment.png/"
          alt="cancel-payment"
          className="w-96"
        />
      </div>
    </div>
  );
};

export default Canceled;
