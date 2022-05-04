import Head from "next/head";
import Script from "next/script";
import React from "react";

const Headinfo = () => {
  return (
    <>
      <Head>
        <title>Kakao Map</title>
      </Head>
      <Script
        src="https://kit.fontawesome.com/8886ab1b1d.js"
        crossOrigin="anonymous"
      ></Script>
    </>
  );
};

export default Headinfo;
