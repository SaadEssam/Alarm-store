import React from "react";
import { sanityClient } from "@/lib/sanity";
import HeroBanner from "@/components/HeroBanner";

type Product = {
  // Define your product type here
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
  products: Product[];
  bannerData: Banner[];
};

const Home = ({ products, bannerData }: HomeProps) => {
  return (
    <div>
      <HeroBanner heroBanner={bannerData.length && bannerData[0]} />
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
