import React from "react";
import Link from "next/link";

const Canceled = () => {
  return (
    <div className="cancel-wrapper">
      <div className="cancel">
        <h2>Payment Failed!</h2>
        <p className="email-msg">
          We're sorry, but your payment has been canceled.
        </p>
        <p className="email-msg">
          Please try again later or use another payment method.
        </p>
        <Link href="/contact-us">
          <button type="button" className="btn">
            Contact Us
          </button>
        </Link>
      </div>
      <div>
        <img src="/assets/cancel-payment.png/" alt="cancel-payment" />
      </div>
    </div>
  );
};

export default Canceled;
