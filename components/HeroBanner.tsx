import React from "react";
import Link from "next/link";
import Image from "next/image";

import { urlFor } from "@/lib/sanity";

const HeroBanner = ({ heroBanner }: any) => {
  return (
    <div className="leading-2 relative mt-20 flex h-[500px] w-full items-center rounded-2xl bg-gradient-to-r from-pink-100 to-rose-300 px-10 py-24">
      <div>
        <p className="text-xl font-medium">{heroBanner.smallText}</p>
        <h3 className="mt-1 text-6xl font-medium">{heroBanner.midText}</h3>
        <h1 className="-ml-5 text-9xl font-semibold uppercase text-white">
          {heroBanner.largeText1}
        </h1>
        <div className="absolute right-1/4 transition-all duration-500 hover:drop-shadow-2xl sm:bottom-0 sm:end-3 sm:h-80 sm:w-80 md:-top-1 md:end-1 md:h-[550px] md:w-[550px]">
          <Image
            src={urlFor(heroBanner.image).url()}
            alt="banner image"
            width={550}
            height={550}
          />
        </div>

        <div>
          <Link href={`/product/${heroBanner.product}`}>
            <button type="button" className="banner-btn">
              {heroBanner.buttonText}
            </button>
          </Link>
          {/* <div className="absolute bottom-3 right-4 flex w-96 flex-col leading-5 text-secondary p-3">
            <h5 className="mb-3 self-end text-lg font-semibold">Description</h5>
            <p className="text-end font-normal text-gray-500">
              {heroBanner.description}
            </p>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
