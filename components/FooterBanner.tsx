import React from "react";
import Link from "next/link";
import { urlFor } from "@/lib/sanity";

const FooterBanner = ({ footerBanner }: any) => {
  return (
    <div className="py-25 footer-banner-gradient leading-1 relative mb-16 mt-28 h-96 w-full rounded-2xl px-10 text-black">
      <div className="flex justify-between">
        <div className="leading-2 p-5 mt-9">
          <p className="m-4">{footerBanner.discount}</p>
          <h3 className="ml-6 text-7xl font-extrabold">
            {footerBanner.largeText1}
          </h3>
          <h3 className="ml-6 text-7xl font-extrabold">
            {footerBanner.largeText2}
          </h3>
          <p className="m-4">{footerBanner.saleTime}</p>
        </div>
        <div className="leading-2 p-5 mt-9">
          <p className="text-lg mt-4">{footerBanner.smallText}</p>
          <h3 className="text-7xl font-bold mt-4">{footerBanner.midText}</h3>
          <p className="text-lg">{footerBanner.desc}</p>
          <Link href={`/product/${footerBanner.product}`}>
            <button type="button" className="banner-btn">{footerBanner.buttonText}</button>
          </Link>
        </div>

        <img
          src={urlFor(footerBanner.image).url()}
          className="absolute -top-1/4 right-1/3 h-[520px] w-[500px] hover:drop-shadow-2xl transition-all duration-500"
          alt={`${footerBanner.midText} image`}
        />
      </div>
    </div>
  );
};

export default FooterBanner;
