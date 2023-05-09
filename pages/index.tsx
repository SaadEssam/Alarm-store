import React from "react";
import { sanityClient } from "@/lib/sanity";
import HeroBanner from "@/components/HeroBanner";
import Product from "@/components/Product";
import FooterBanner from "@/components/FooterBanner";
import Footer from "@/components/Footer";

type Products = {
  Name: string;
  _id: string;
  Image: string;
  Slug: {
    current: string;
  }
  Price: number;
  Details: string;
};

type Banner = {
  smallText: string;
  midText: string;
  largeText1: string;
  image: string;
  product: string;
  buttonText: string;
  description: string;
};

type HomeProps = {
  products: Products[];
  bannerData: Banner[];
};

const Home = ({ products, bannerData }: HomeProps) => {
  return (
    <div>
      <HeroBanner heroBanner={bannerData.length && bannerData[1]} />
      <div className="products-heading">
        <h2>Best Seller Products</h2>
        <p>speaker there are many variations passages</p>
      </div>
      <div className="products-container">
        {products?.map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </div>
      <FooterBanner footerBanner={bannerData && bannerData[0]} />
      <Footer />
    </div>
  );
};

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await sanityClient.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await sanityClient.fetch(bannerQuery);

  return {
    props: { products, bannerData },
  };
};

export default Home;
