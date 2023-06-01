import React, { useState } from "react";
import Head from "next/head";
import {
  AiOutlineMinus,
  AiOutlinePlus,
  AiFillStar,
  AiOutlineStar,
} from "react-icons/ai";
import { sanityClient, urlFor } from "@/lib/sanity";
import { Products, StateContextProps } from "@/typings";
import Product from "@/components/Product";
import { useStateContext } from "@/context/StateContext";
import { formatPriceInEGP } from "@/lib/priceFormatter";


const ProductDetails: React.FC<Products> = ({ product, products }: any) => {
  const [index, setIndex] = useState(0);
  const { decQty, incQty, qty, onAdd, setShowCart }: StateContextProps =
    useStateContext();

  const handleBuyNow = () => {
    onAdd(product, qty);
    setShowCart(true);
  };


  return (
    <div>
      <Head>
        <title>{product.name} | Alarm Store</title>
        <meta name="description" content={`Check out '${product.details}'.`} />
      </Head>
      <div className="m-10 mt-24 flex gap-10 text-secondary sm:flex-wrap">
        <div>
          <div className="image-container">
            <img
              src={urlFor(product.image && product.image[index]).url()}
              alt={product.name}
              className="cursor-pointer rounded-2xl bg-gray-200 transition-all duration-300 ease-in-out hover:bg-rose-100 sm:h-[350px] sm:w-[350px] md:h-[400px] md:w-[400px]"
            />
          </div>
          <div className="mt-5 flex gap-2">
            {product.image.map((item: React.ReactNode, i: number) => (
              <img
                key={i}
                src={urlFor(item).url()}
                className={
                  i === index
                    ? "h-20 w-20 cursor-pointer rounded-xl bg-gray-200 hover:bg-rose-100"
                    : "h-20 w-20 cursor-pointer rounded-xl bg-gray-200"
                }
                onMouseEnter={() => setIndex(i)}
              />
            ))}
          </div>
        </div>
        <div>
          <h1 className="text-3xl font-extrabold">{product.name}</h1>
          <div className="mt-3 flex items-center gap-1 text-primary">
            <div className="flex items-center">
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiOutlineStar />
            </div>
            <p className="mt-0 text-secondary">(20)</p>
          </div>
          <h4 className="font-bold">Details:</h4>
          <p className="sm:w-82 font-base mt-2 text-base md:w-[800px]">
            {product.details}
          </p>
          <p className="mt-8 text-3xl font-bold text-primary">
            {formatPriceInEGP(product.price)}
          </p>
          <div className="mt-3 flex items-center gap-5">
            <h3 className="font-bold">Quantity:</h3>
            <p className="flex items-center gap-5 border border-solid border-gray-300 p-1 px-3 py-1 text-lg">
              <span className="cursor-pointer text-primary" onClick={decQty}>
                <AiOutlineMinus />
              </span>
              <span className="text-xl font-medium">{qty}</span>
              <span className="cursor-pointer text-green-500" onClick={incQty}>
                <AiOutlinePlus />
              </span>
            </p>
          </div>
          <div className="flex gap-8">
            <button
              type="button"
              className="secondary-btn"
              onClick={() => onAdd(product, qty)}
            >
              Add to Cart
            </button>
            <button
              type="button"
              className="primary-btn w-52"
              onClick={handleBuyNow}
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
      <div className="mt-28">
        <h2 className="m-12 text-center text-2xl font-bold capitalize text-secondary">
          related products
        </h2>
        <div className="relative h-96 w-full overflow-x-hidden mb-3">
          <div className="flex justify-center gap-4 mt-5 track">
            {products.map((item: any) => (
              <Product key={item._id} product={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export const getStaticPaths = async () => {
  const query = `*[_type == "product"] {
    slug {
      current
    }
  }`;

  const products = await sanityClient.fetch(query);
  const paths = products.map((product: any) => ({
    params: {
      slug: product.slug.current,
    },
  }));

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps = async ({ params: { slug } }: any) => {
  const query = `*[_type == "product" && slug.current == '${slug}'][0]`;
  const productsQuery = '*[_type == "product"]';
  const product = await sanityClient.fetch(query);
  const products = await sanityClient.fetch(productsQuery);

  return {
    props: { product, products },
  };
};

export default ProductDetails;
