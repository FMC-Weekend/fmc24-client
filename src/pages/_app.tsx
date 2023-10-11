import "@/styles/globals.css";
import "./landingpage/styles/Header.css";
// import "@/styles/FooterUpd.css";
import "./landingpage/styles/Competitions.css";
import type { AppProps } from "next/app";
import '@/styles/customfont.css';
import Head from 'next/head'

import { useEffect } from "react";
export default function App({ Component, pageProps }: AppProps) {

  return (
   
    <>
    <Head>
    <title>FMC Weekend</title>
        <link rel='favicon' href='/favicon.ico' />
      </Head>
      <div
      style={{
        backgroundImage: `url("/gradientbg.png")`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        // backgroundPosition: "center center",
        minHeight: "100vh",
        overflow: "hidden", 
              
      }}
    >
      <Component {...pageProps} />
    </div>
    </>
    
  );
}
