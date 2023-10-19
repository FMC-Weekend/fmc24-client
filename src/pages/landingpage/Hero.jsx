import React, { useState, useEffect } from "react";
import Classes from "./styles/Hero.module.css";
import Link from "next/link"
import Image from "next/image"
// import "@/styles/globals.css";
// import '@/styles/customfont.css';
import Design from "./hoverDesign/design";
import Header from "./Header";
import Marquee from "react-fast-marquee";
import { motion } from "framer-motion"

const strokeTextStyle = {
  fontFamily: "'Work Sans', sans-serif",
  fontSize: "36px",
  fontStyle: "normal",
  fontWeight: "600",
  lineHeight: "normal",
  WebkitTextFillColor: "transparent",
  WebkitTextStrokeWidth: "2px",
  WebkitTextStrokeColor: "white",
  paddingRight: "36px",
};
const filledTextStyle = {
  fontFamily: "'Work Sans', sans-serif",
  fontSize: "36px",
  fontStyle: "normal",
  fontWeight: "600",
  lineHeight: "normal",
  color: "white",
  paddingRight: "36px",
};

const aboutusdiv = {
  marginTop: "-250px",
  paddingBottom: "100px",
};
const aboutusdivm = {
  marginTop: "20px",
  paddingBottom: "100px",
};
const VideoWithText = () => {
  const [isMobile, setIsMobile] = useState("");

  useEffect(() => {
    const checkIsMobile = () => {
      if (window.innerWidth <= 768) setIsMobile("");
      else if (window.innerWidth > 768) setIsMobile("");
    };
    window.addEventListener("resize", checkIsMobile);
    checkIsMobile();
    return () => {
      window.removeEventListener("resize", checkIsMobile);
    };
  }, []);
  return (
    <>
     
        <>
         
          <div style={aboutusdivm}>
            <Marquee gradient={false} speed={50} direction="right">
              <div style={filledTextStyle}>ABOUT US</div>
              <div style={strokeTextStyle}>ABOUT US</div>
              <div style={filledTextStyle}>ABOUT US</div>
              <div style={strokeTextStyle}>ABOUT US</div>
              <div style={filledTextStyle}>ABOUT US</div>
              <div style={strokeTextStyle}>ABOUT US</div>
              <div style={filledTextStyle}>ABOUT US</div>
              <div style={strokeTextStyle}>ABOUT US</div>
              <div style={filledTextStyle}>ABOUT US</div>
              <div style={strokeTextStyle}>ABOUT US</div>
            </Marquee>
          </div>
        </>
  
      
    </>
  );
};
const Hero = () => {
  const [dashboard,setDashboard]=useState(false);
  const [register,setRegister]=useState(false);
  useEffect(()=>{
    if(sessionStorage.getItem('isNewUser')!==null){
      if(sessionStorage.getItem('isNewUser')=="true"){
        setRegister(true);
      }
      if(sessionStorage.getItem('isNewUser')=="false"){
        setDashboard(true);
      }
    }
  },[]);
  return (
    <>
      {/* <div className={Classes.hero_text}>
        <Header/>
        <VideoWithText />
      </div> */}
         <motion.div 
         className={Classes.outermaind }
         initial={{ opacity: 0 }}
         whileInView={{ opacity: 1 }}
         >
     <div className={Classes.innerdiv1}>
     <Image src="/FMCswa-02 (1) 1.png" height={200} width={480} alt="logo"/>
     <div className={Classes.content}>
     <p>India&rsquo;s Largest Digital Art Fest</p>
     <h1>FMC Weekend</h1>

      {dashboard? (<Link href="/dashboard"><button className="border-solid border-2 mt-20 text-white rounded-3xl h-10 w-44 text-xl transition duration-300 transform  hover:shadow-xl hover:text-blue-950 bg-transparent hover:bg-white" style={{'zIndex':'100'}}>Dashboard</button></Link>):<>
      <Link href="/login"><button className="border-solid border-2 mt-20 text-white rounded-3xl h-10 w-44 text-xl transition duration-300 transform  hover:shadow-xl hover:text-blue-950 bg-transparent hover:bg-white" style={{'zIndex':'100'}} >Register</button></Link>
      </>}
      {register?(
        <Link href="/login"><button className="border-solid border-2 mt-20 text-white rounded-3xl h-10 w-44 text-xl transition duration-300 transform  hover:shadow-xl hover:text-blue-950 bg-transparent hover:bg-white" style={{'zIndex':'100'}} >Register</button></Link>)
        :<></>}
     {/* <button className="border-solid border-2 mt-20 text-white rounded-3xl h-10 w-44 text-xl transition duration-300 transform  hover:shadow-xl hover:text-blue-950 bg-transparent hover:bg-white">Register Now</button> */}
     </div>
     
     </div>
     <div className={Classes.innerdiv2}>
      <Image  className={Classes.img1} src="/endgraffhigh.png" width={820} height={100} alt="img1" />
      <Image  className={Classes.img2} src="/endgraffhigh.png" width={820} height={100} alt="img2" />
     </div>
    
     </motion.div>
     <VideoWithText />

    </>
  );
};

export default Hero;
