import React from "react";
import Link from "next/link";
import Head from "next/head";

const Error = () => {
  return (
    <div className="error404">
      <Head>
        <title>Page Not Found - Alarm Store</title>
        <meta name="description" content="Page Not Found" />
      </Head>
      <h1 className="">404</h1>
      <h3 className="">Sorry, but this page does not exist.</h3>
      <Link href="/" className="Go-Home">
        Homepage
      </Link>
    </div>
  );
};

export default Error;
