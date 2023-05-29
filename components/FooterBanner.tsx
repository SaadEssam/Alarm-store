import React from "react";
import Link from "next/link";
import { urlFor } from "@/lib/sanity";

const FooterBanner = ({ footerBanner }: any) => {
  return (
    <div className="py-25 footer-banner-gradient leading-1 relative mb-16 mt-28 h-96 w-full rounded-2xl px-10 text-black">
      <div className="flex justify-between">
        <div className="left">
          <p className="m-4">{footerBanner.discount}</p>
          <h3 className="ml-6 text-7xl font-extrabold">
            {footerBanner.largeText1}
          </h3>
          <h3 className="ml-6 text-7xl font-extrabold">
            {footerBanner.largeText2}
          </h3>
          <p className="m-4">{footerBanner.saleTime}</p>
        </div>
        <div className="leading-2">
          <p className="text-lg">{footerBanner.smallText}</p>
          <h3 className="text-6xl font-bold">{footerBanner.midText}</h3>
          <p className="text-lg">{footerBanner.desc}</p>
          <Link href={`/product/${footerBanner.product}`}>
            <button type="button">{footerBanner.buttonText}</button>
          </Link>
        </div>

        <img
          src={urlFor(footerBanner.image).url()}
          className="absolute -top-1/4 right-1/3 h-[520px] w-[500px]"
          alt={`${footerBanner.midText} image`}
        />
      </div>
    </div>
  );
};

export default FooterBanner;
