import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from "framer-motion"

const AboutUs = () => {
  const text1 =
    " FMC Weekend stands as India's grandest digital arts extravaganza, where artists from diverse backgrounds unite to celebrate their boundless creativity. Immerse yourself in a tapestry of enlightening workshops hosted by industry luminaries, and relish evenings filled with beloved entertainers. Our unrivalled, joy-infused atmosphere sets the stage for exhilarating competitions spanning a wide spectrum of creative domains, with the added allure of enticing awards. Join us for an unforgettable celebration of boundless creativity!";
  const text2 = "To know more click below";
  const text3 = "About Us";
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener('resize', checkIsMobile);
    checkIsMobile();
    return () => {
      window.removeEventListener('resize', checkIsMobile);
    };
  }, []);

  return (
    <>
      {isMobile ? (
        <>
          <center>

            <p className="text-5xl place-content-center text-white font-bold font-sans">{text3}</p>
            <br />
            <p className="text-white text-justify px-12">{text1}</p>
            
            <center>
              <Link href="/comingsoon">
                <button className="border-solid border-2 mt-6 text-white rounded-3xl h-10 w-36 text-xl transition duration-300 transform hover:shadow-xl  hover:text-blue-950 bg-transparent hover:bg-white">
                  {text3}
                </button>
              </Link>
            </center>

          </center>
        </>
      ) : (
        <>
          <motion.div 
           initial={{ opacity: 0, transform:2 }}
           whileInView={{ opacity: 1,translate:2 }}
          
           
          
          className="h-426">




            <Image src={require("./static/aboutuspic.png")} className="float-right mr-24 ml-8"  alt="logo" objectFit='cover' width={400} height={50} />

            <div>
              <p className="text-7xl text-white font-semibold ml-24 mb-9 font-sans">{text3}</p>
              <p className="ml-24 text-white text-xl text-justify">
              {text1}
              </p>
              <p className="ml-24 text-white text-xl text-justify">{text2}</p>
              <Link href="/comingsoon">

                <button className="border-solid border-2 ml-24 mt-6 text-white rounded-3xl h-10 w-36 text-xl transition duration-300 transform  hover:shadow-xl hover:text-blue-950 bg-transparent hover:bg-white">{text3}</button>
              </Link>
            </div>
          </motion.div>
        </>
      )}
    </>
  );
};

export default AboutUs;
