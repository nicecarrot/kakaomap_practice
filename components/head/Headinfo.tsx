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
        src="https://developers.kakao.com/sdk/js/kakao.js"
        crossOrigin="anonymous"
      ></Script>
    </>
  );
};

export default Headinfo;
