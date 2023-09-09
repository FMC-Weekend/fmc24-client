import "@/styles/globals.css";
import "./landingpage/styles/Header.css";
import "./landingpage/styles/Competitions.css";
import type { AppProps } from "next/app";
import '@/styles/customfont.css';



export default function App({ Component, pageProps }: AppProps) {
  return (
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
  );
}
