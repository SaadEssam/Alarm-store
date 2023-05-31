import React from "react";
import Link from "next/link";
import { urlFor } from "@/lib/sanity";

const Product = ({ product }: any) => {
  return (
    <div>
      <Link href={`/product/${product.slug.current}`}>
        <div className="scale-100 cursor-pointer pb-6 text-secondary transition-transform duration-500 ease-in-out hover:scale-110">
          <img
            src={urlFor(product.image && product.image[0]).url()}
            alt={product.name}
            width={250}
            height={250}
            className="rounded-2xl bg-gray-200"
          />
          <p className="text-base font-medium">{product.name}</p>
          <p className="mt-1 text-lg font-extrabold text-black">
            {product.price} EGP
          </p>
        </div>
      </Link>
    </div>
  );
};

export default Product;
