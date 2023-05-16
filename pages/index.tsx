import React from "react";
import Head from "next/head";
import { sanityClient } from "@/lib/sanity";
import HeroBanner from "@/components/HeroBanner";
import Product from "@/components/Product";
import FooterBanner from "@/components/FooterBanner";
// import Footer from "@/components/Footer";

import { Products, Banner, HomeProps } from "@/typings";

const Home: React.FC<HomeProps> = ({ products, bannerData }) => {
  return (
    <div>
      <Head>
        <title>Alarm Store</title>
        <meta
          name="description"
          content="The Apple items, solutions or devices are located at the alarm shop."
        />
      </Head>
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
      {/* <Footer /> */}
    </div>
  );
};

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products: Products[] = await sanityClient.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData: Banner[] = await sanityClient.fetch(bannerQuery);

  return {
    props: { products, bannerData },
  };
};

export default Home;
