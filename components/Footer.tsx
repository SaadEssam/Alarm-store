import React from "react";
import Link from "next/link";
import { BsInstagram, BsFacebook, BsTwitter, BsLinkedin } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-white px-16 py-8">
      <div className="flex w-full flex-wrap items-start justify-between space-y-3 text-left sm:flex-col md:flex-row">
        <div className="flex w-72 flex-col sm:m-0 md:m-4">
          <Link href="/">
            <img src="/assets/logo.png" className="w-82 mb-4 h-14" alt="logo" />
          </Link>
          <p className="text-sm font-medium text-black">
            The Apple items, solutions or devices are located at the alarm shop.
          </p>
        </div>
        <div className="flex flex-col justify-start">
          <h4 className="mb-4 text-base font-semibold text-black">
            Useful Links
          </h4>
          <p className="custom-footer-links">Shop</p>
          <p className="custom-footer-links">Contact US</p>
          <p className="custom-footer-links">Privacy Policy</p>
          <p className="custom-footer-links">Terms and Conditions</p>
        </div>
        <div className="flex w-80 flex-col justify-start">
          <h4 className="mb-4 text-base font-semibold text-black">
            Get in touch
          </h4>
          <p className="custom-footer-links">
            Mostafa El-Nahaas, Nasr City, Cairo Governorate
          </p>
          <a href="tel:+123xxx7890" className="custom-footer-links">
            +123xxx7890
          </a>
          <a href="mailto:info@alarmstore.com" className="custom-footer-links">
            info@alarmstore.com
          </a>
        </div>
      </div>
      <div className="mt-8 flex w-full items-center justify-between border-t border-black pt-4 sm:flex-col md:flex-row">
        <p className="text-xs font-medium text-gray-500 sm:order-2 sm:pt-3 md:order-2">
          &copy; {new Date().getFullYear()} Alarm Store. All Rights Reserved.
        </p>
        <div className="mr-3 flex cursor-pointer gap-2 text-base text-gray-500 sm:order-1 md:order-2">
          <a
            href="https://instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="instagram"
            role="link"
            className="transition-all hover:text-primary"
          >
            <BsInstagram />
          </a>
          <a
            href="https://facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="facebook"
            role="link"
            className="transition-all hover:text-primary"
          >
            <BsFacebook />
          </a>
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="twitter"
            role="link"
            className="transition-all hover:text-primary"
          >
            <BsTwitter />
          </a>
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="linkedin"
            role="link"
            className="transition-all hover:text-primary"
          >
            <BsLinkedin />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
