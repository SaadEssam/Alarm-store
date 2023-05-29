import React from "react";
import Link from "next/link";
import Head from "next/head";

const Error = () => {
  return (
    <div className="m-10 flex h-screen flex-col items-center justify-center gap-10">
      <Head>
        <title>Page Not Found - Alarm Store</title>
        <meta name="description" content="Page Not Found" />
      </Head>
      <h1 className="bg-gradient-to-br from-red-600 to-red-900 bg-clip-text sm:text-9xl md:text-[300px] font-semibold text-transparent">
        404
      </h1>
      <h3 className="text-xl">Sorry, but this page does not exist.</h3>
      <Link href="/" className="Go-Home">
        Homepage
      </Link>
    </div>
  );
};

export default Error;
