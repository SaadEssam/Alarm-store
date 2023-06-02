import React from "react";
import Link from "next/link";
import Image from "next/image";

import { urlFor } from "@/lib/sanity";

const FooterBanner = ({ footerBanner }: any) => {
  return (
    <div className="py-25 footer-banner-gradient leading-1 relative mb-16 mt-28 w-full rounded-2xl px-10 text-black sm:h-64 md:h-96">
      <div className="flex justify-between">
        <div className="leading-2 mt-9 p-5">
          <p className="m-4">{footerBanner.discount}</p>
          <h3 className="ml-6 font-extrabold sm:text-2xl md:text-7xl">
            {footerBanner.largeText1}
          </h3>
          <h3 className="ml-6 font-extrabold sm:text-2xl md:text-7xl">
            {footerBanner.largeText2}
          </h3>
          <p className="m-4">{footerBanner.saleTime}</p>
        </div>
        <div className="leading-2 mt-9 p-5">
          <p className="mt-4 text-lg">{footerBanner.smallText}</p>
          <h3 className="mt-4 font-bold sm:text-3xl md:text-7xl">
            {footerBanner.midText}
          </h3>
          <p className="text-lg">{footerBanner.desc}</p>
          <Link href={`/product/${footerBanner.product}`}>
            <button type="button" className="banner-btn">
              {footerBanner.buttonText}
            </button>
          </Link>
        </div>

        <div className="absolute -top-1/4 right-1/3 transition-all duration-500 hover:drop-shadow-2xl sm:h-80 sm:w-80 md:h-[520px] md:w-[500px]">
          <Image
            src={urlFor(footerBanner.image).url()}
            alt={`${footerBanner.midText} image`}
            width={500}
            height={500}
          />
        </div>
      </div>
    </div>
  );
};

export default FooterBanner;
