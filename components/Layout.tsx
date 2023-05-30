import React, { ReactNode } from "react";
import Head from "next/head";

import Navbar from "./Navbar";
import Footer from "./Footer";

type Props = {
  children: ReactNode;
};
const Layout = ({ children }: Props) => {
  return (
    <div>
      <Head>
        <title>Alarm Store</title>
      </Head>
      <header>
        <Navbar />
      </header>
      <main className="m-auto w-full max-w-[1400px]">{children}</main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
