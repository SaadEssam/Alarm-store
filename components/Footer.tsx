import React from "react";
import Link from "next/link";
import { BsInstagram, BsFacebook, BsTwitter, BsLinkedin } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-links">
        <div className="footer-links_logo">
          <Link href="/">
            <img src="/assets/logo.png" alt="logo" />
          </Link>
          <p>
            The Apple items, solutions or devices are located at the alarm shop.
          </p>
        </div>
        <div className="footer-links_div">
          <h4>Useful Links</h4>
          <p>Shop</p>
          <p>Contact US</p>
          <p>Privacy Policy</p>
          <p>Terms and Conditions</p>
        </div>
        <div className="footer-links_div">
          <h4>Get in touch</h4>
          <p>Mostafa El-Nahaas, Nasr City, Cairo Governorate</p>
          <p>085-132567</p>
          <p>info@alarmstore.com</p>
        </div>
      </div>
      <div className="footer-copyright">
        <p>
          &copy; {new Date().getFullYear()} Alarm Store. All Rights Reserved.
        </p>
        <div className="footer-social-media">
          <a
            href="https://instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsInstagram />
          </a>
          <a
            href="https://facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsFacebook />
          </a>
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsTwitter />
          </a>
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsLinkedin />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
