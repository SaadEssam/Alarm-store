import React from "react";
import Link from "next/link";

const Canceled = () => {
  return (
    <div className="flex items-center justify-around sm:mt-52 sm:h-full sm:flex-col md:mt-0 md:h-screen md:flex-row">
      <div className="flex flex-col items-center justify-center space-y-5 rounded-2xl">
        <h2 className="mt-4 font-extrabold capitalize text-secondary sm:text-3xl md:text-5xl">
          Payment Failed!
        </h2>
        <p className="text-center font-semibold sm:text-lg md:text-xl">
          We're sorry, but your payment has been canceled.
        </p>
        <p className="text-center font-semibold sm:text-sm md:text-base">
          Please try again later or use another payment method.
        </p>
        <Link href="/contact-us">
          <button type="button" className="primary-btn w-52">
            Contact Us
          </button>
        </Link>
      </div>
      <div className="sm:mt-11 md:mt-0">
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
