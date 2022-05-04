import "../styles/globals.css";
import type { AppProps } from "next/app";
import Headinfo from "../components/head/Headinfo";
import Header from "../components/header/Header";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* Headinfo는 <head> 태그 */}
      <Headinfo />
      {/* Header는 <header> 태그 */}
      <Header />
      <main>
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default MyApp;
