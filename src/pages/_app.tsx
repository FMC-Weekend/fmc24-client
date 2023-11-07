import "@/styles/globals.css";
import "./landingpage/styles/Header.css";
// import "@/styles/FooterUpd.css";
import "./landingpage/styles/Competitions.css";
import type { AppProps } from "next/app";
import '@/styles/customfont.css';
import Head from 'next/head'

import { useEffect } from "react";
import {AuthProvider} from "../context/auth";

export default function App({ Component, pageProps }: AppProps) {

  return (

    <AuthProvider>
   
    <>
    <Head>
      <meta name="google-site-verification" content="7_7hh2Lr3iCg5mgEIw_TWpF2F6n-OSPUWY05-ljte_U" />
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

    </AuthProvider>
    
  );
}
