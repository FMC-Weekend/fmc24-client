import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
// import Classes from "./styles/awardSection.module.css";
import { inView } from "framer-motion"
import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";
import {} from "@next/font/google";
const textStyleBold = {
  textAlign: "center",
  color: "#FFF",
  fontFamily: "'Work Sans', sans-serif",
  fontSize: "72px",
  fontStyle: "normal",
  fontWeight: "700",
};
const textStyleBoldMobile = {
  textAlign: "center",
  color: "#FFF",
  fontFamily: "'Work Sans', sans-serif",
  fontSize: "28px",
  padding: "0px 20px",
  fontStyle: "normal",
  fontWeight: "700",
};
const textStyle = {
  textAlign: "center",
  color: "#FFF",
  fontFamily: "'Work Sans', sans-serif",
  fontSize: "24px",
  fontStyle: "normal",
  fontWeight: "400",
};
const textStyleMobile = {
  textAlign: "center",
  color: "#FFF",
  fontFamily: "'Work Sans', sans-serif",
  padding: "20px 15px",
  fontSize: "16px",
  fontStyle: "normal",
  fontWeight: "400",
};

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

const topSectionPadding = {
  paddingTop: "200px",
  paddingBottom: "100px",
};

const bottomPadding = {
  paddingBottom: "75px",
};

const AwardSection = () => {
  const text1 = "Unleash Your Potential Through ";
  const text2 = "Thrilling Competitive Events!";
  const text3 =
    "Showcase Your Skills and Win Big in Our Prestigious and Thrilling ";
  const text4 = "Competitive Challenges and Contests! ";
  const text5 = "Explore More!";
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", checkIsMobile);
    checkIsMobile();
    return () => {
      window.removeEventListener("resize", checkIsMobile);
    };
  }, []);

  return (
    <>
      {isMobile ? (
        <>
          <div className="pt-16">
            <center>
              <div style={bottomPadding}>
                <Marquee gradient={false} speed={50}>
                  <div style={filledTextStyle}>EVENTS</div>
                  <div style={strokeTextStyle}>EVENTS</div>
                  <div style={filledTextStyle}>EVENTS</div>
                  <div style={strokeTextStyle}>EVENTS</div>
                  <div style={filledTextStyle}>EVENTS</div>
                  <div style={strokeTextStyle}>EVENTS</div>
                  <div style={filledTextStyle}>EVENTS</div>
                  <div style={strokeTextStyle}>EVENTS</div>
                  <div style={filledTextStyle}>EVENTS</div>
                  <div style={strokeTextStyle}>EVENTS</div>
                </Marquee>
              </div>

              <div style={textStyleBoldMobile}>
                {text1}
                
                {text2}
              </div>
              <div style={textStyleMobile}>
                {text3}
                <br />
                {text4}

                <center>
                  <br />
                  <Link href="/events">
                  
                  <button className="border-solid border-2 mt-6 text-white rounded-3xl h-10 w-48 text-lg transition duration-300 transform  hover:shadow-xl hover:text-blue-950 bg-transparent hover:bg-white">
                    {text5}
                  </button>

                  </Link>
                </center>
              </div>
              <br />
              <Image
                src="/Frame29.svg"
                alt="frame29"
                width={300}
                height={300}
                style={{}}
              />
            </center>
          </div>
        </>
      ) : (
        <>
          <motion.div 
          initial={{ opacity: 0, transform:3 }}
          whileInView={{ opacity: 1,translate:1 ,transform:1}}
          style={topSectionPadding}>
            <center>
              <div style={bottomPadding}>
                <Marquee gradient={false} speed={50}>
                  <div style={filledTextStyle}>EVENTS</div>
                  <div style={strokeTextStyle}>EVENTS</div>
                  <div style={filledTextStyle}>EVENTS</div>
                  <div style={strokeTextStyle}>EVENTS</div>
                  <div style={filledTextStyle}>EVENTS</div>
                  <div style={strokeTextStyle}>EVENTS</div>
                  <div style={filledTextStyle}>EVENTS</div>
                  <div style={strokeTextStyle}>EVENTS</div>
                  <div style={filledTextStyle}>EVENTS</div>
                  <div style={strokeTextStyle}>EVENTS</div>
                </Marquee>
              </div>

              <div style={textStyleBold}>
                {text1}
                
                {text2}
              </div>
              <div style={textStyle}>
                {text3}
                
                {text4}

                <center>
                  <br />
                  <Link href="/events">
                  <button className="border-solid border-2 mt-6 text-white rounded-3xl h-10 w-48 text-lg transition duration-300 transform  hover:shadow-xl hover:text-blue-950 bg-transparent hover:bg-white">
                    {text5}
                  </button>
                  </Link>
                </center>
              </div>
              <br />
             
              <Image
                src="/Frame29.svg"
                alt="frame29"
                width={500}
                height={500}
                style={{}}
              />
            </center>
          </motion.div>
        </>
      )}
    </>
  );
};

export default AwardSection;
