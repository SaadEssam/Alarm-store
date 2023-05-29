import React from "react";
import Link from "next/link";
import { BsInstagram, BsFacebook, BsTwitter, BsLinkedin } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-white px-16 py-8">
      <div className="flex w-full flex-row flex-wrap items-start justify-between text-left">
        <div className="m-4 flex w-72 flex-col">
          <Link href="/">
            <img
              src="/assets/logo.png"
              className="w-100 mb-4 h-20"
              alt="logo"
            />
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
        <div className="flex flex-col justify-start w-80">
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
      <div className="mt-8 flex w-full items-center justify-between border-t border-black pt-4">
        <p className="text-xs font-medium text-gray-500">
          &copy; {new Date().getFullYear()} Alarm Store. All Rights Reserved.
        </p>
        <div className="mr-3 flex cursor-pointer gap-2 text-base text-gray-500">
          <a
            href="https://instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-all hover:text-red-500"
          >
            <BsInstagram />
          </a>
          <a
            href="https://facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-all hover:text-red-500"
          >
            <BsFacebook />
          </a>
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-all hover:text-red-500"
          >
            <BsTwitter />
          </a>
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-all hover:text-red-500"
          >
            <BsLinkedin />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
