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
      <div className="mx-0 my-10 text-center text-secondary">
        <h2 className="text-4xl font-extrabold">Best Seller Products</h2>
        <p className="text-base font-light">
          speaker there are many variations passages
        </p>
      </div>
      <div className="mt-5 flex w-full flex-wrap justify-center gap-4">
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
