import React from "react";
import Link from "next/link";
import Image from "next/image";

import { urlFor } from "@/lib/sanity";
import { formatPriceInEGP } from "@/lib/priceFormatter";

const Product = ({ product }: any) => {
  return (
    <div>
      <Link href={`/product/${product.slug.current}`}>
        <div className="scale-100 cursor-pointer pb-6 text-secondary transition-transform duration-500 ease-in-out hover:scale-110">
          <Image
            src={urlFor(product.image && product.image[0]).url()}
            alt={product.name}
            width={250}
            height={250}
            className="rounded-2xl bg-gray-200"
          />
          <p className="text-base font-medium">{product.name}</p>
          <p className="mt-1 text-lg font-extrabold text-black">
            {formatPriceInEGP(product.price)}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default Product;
