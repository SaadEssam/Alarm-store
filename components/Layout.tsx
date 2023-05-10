import React, { ReactNode } from "react";
import Head from "next/head";

import Navbar from "./Navbar";
import Footer from "./Footer";

type Props = {
  children: ReactNode;
};
const Layout = ({ children }: Props) => {
  return (
      <div className="layout">
        <Head>
          <title>Alarm Store</title>
        </Head>
        <header>
          <Navbar />
        </header>
        <main className="main-container">{children}</main>
        <footer>
          <Footer />
        </footer>
      </div>
  );
};

export default Layout;
