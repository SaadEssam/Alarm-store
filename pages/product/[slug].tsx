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
      <div className="flex gap-10 m-10 text-sky-900 mt-24">
        <div>
          <div className="image-container">
            <img
              src={urlFor(product.image && product.image[index]).url()}
              alt={product.name}
              className="bg-gray-200 rounded-2xl w-[400px] h-[400px] cursor-pointer transition-all duration-300 ease-in-out hover:bg-rose-100"
            />
          </div>
          <div className="flex gap-2 mt-5">
            {product.image.map((item: React.ReactNode, i: number) => (
              <img
                key={i}
                src={urlFor(item).url()}
                className={
                  i === index ? "small-image selected-image" : "small-image"
                }
                onMouseEnter={() => setIndex(i)}
              />
            ))}
          </div>
        </div>
        <div className="product-details-desc">
          <h1 className="text-3xl font-extrabold">{product.name}</h1>
          <div className="text-red-500 mt-3 gap-1 flex items-center">
            <div className="flex items-center">
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiOutlineStar />
            </div>
            <p className="text-sky-900 mt-0">(20)</p>
          </div>
          <h4 className="font-bold">Details:</h4>
          <p className="mt-2 w-[800px] text-base font-base">{product.details}</p>
          <p className="text-3xl font-bold mt-8 text-red-500">{product.price} EGP</p>
          <div className="flex items-center gap-5 mt-3">
            <h3 className="font-bold">Quantity:</h3>
            <p className="p-1 border-solid border border-gray-300 text-lg py-1 px-3 flex items-center gap-5">
              <span className="text-red-500 cursor-pointer" onClick={decQty}>
                <AiOutlineMinus />
              </span>
              <span className="text-xl font-medium">{qty}</span>
              <span className="text-green-500 cursor-pointer" onClick={incQty}>
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
        <h2 className="text-2xl font-bold m-12 capitalize text-sky-900 text-center">related products</h2>
        <div className="marquee">
          <div className="related-products-container track">
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
