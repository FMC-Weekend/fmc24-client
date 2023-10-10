import React from "react";
import Header from "../landingpage/Header";
import Footer from "../landingpage/Footer";
import Link from "next/link";
import Image from "next/image";
import Classes from "./index.module.css";
import { colors } from "@mui/material";


const imageStyle = {
  width: '631px',
  height: '360px',
  margin: 0,
  padding: 0, 
  objectFit: "cover",
  borderRadius: "25px",
  border:"1px solid"
}




const Index = () => {
    return (
    <div className={Classes.PageWrapper}>
          <Header />
          <div className={Classes.Content}>
            <div className="text-justify text-5xl font-['Work_Sans'] font-bold text-white mt-[136px] ml-[163px]">
            Ongoing Workshop
            </div>
              <div className={Classes.cardSection}>
                <div className={Classes.Card}>
                  <div className="text-justify text-3xl font-['Work_Sans'] font-bold text-white mt-[30px] ml-[54px]">
                    Lorem Ipsom dolor sit amit
                  </div>
                  <div className="text-justify text-2xl font-['Work_Sans'] text-black ml-[54px]">
                    - by lorem ipsom
                  </div>
                  <div className="text-justify text-3xl font-['Work_Sans'] font-bold text-white mt-[30px] ml-[54px]">
                    Lorem Ipsom dolor sit amit
                  </div>
                  <div className="text-justify text-2xl font-['Work_Sans'] text-black ml-[54px]">
                    - by lorem ipsom
                  </div>
                  <div className="text-justify text-3xl font-['Work_Sans'] font-bold text-white mt-[30px] ml-[54px]">
                    Lorem Ipsom dolor sit amit
                  </div>
                  <div className="text-justify text-2xl font-['Work_Sans'] text-black ml-[54px]">
                    - by lorem ipsom
                  </div>
                </div>
                <div className={Classes.ImageCard}>
                  <img style={imageStyle} src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80" alt="" />
                </div>
              </div>


              <div className={Classes.UpcomingSection}>
                 <div className="text-justify text-5xl font-['Work_Sans'] font-bold text-white mt-[136px] ml-[163px]">Upcoming Workshop</div>



                 <div className={Classes.slides} id="slides">
                    <img src="https://file.rendit.io/n/G4BKnfmndADgENjDRHvk.svg" id="imageToChange" style={{height:"48px", width:"65px"}}/>
                    <div className="text-justify text-5xl font-['Work_Sans'] font-bold ml-[102px]">
                      13 : 00 - 14 : 00
                    </div>
                    <div className="bg-cover bg-50%_50% bg-blend-normal bg-no-repeat self-start flex flex-col items-start ml-[102px] w-[172px] h-[115px]">
                      <img src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80" className="mx-0 w-[172px] h-[115px]" style={{border:"2px solid white",borderRadius:"10px"}}/>
                    </div>
                    <div className="text-justify text-5xl font-['Work_Sans'] font-bold ml-[102px]">
                      Lorem Ipsom Dolor
                    </div>
                  </div>
                  

              </div>
            
          </div>
          <Footer />
        </div>
        );
};

export default Index
