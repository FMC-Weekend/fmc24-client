import React from "react";
import Header from "../../landingpage/Header";
import Footer from "../../landingpage/Footer";
import Index from "../../events";
import Link from "next/link";
import Classes from "../indexe.module.css";

import Image from "next/image";

const divStyle = {
    minHeight: "100px",
  };

const Cinematography = () => {
    return (
<div className={Classes.FullPage}>
        <Header/>
<div>
<div className="mt-[80px]"><h1 hidden>Hello</h1></div>
<div className={Classes.showMobile}>
    <div className="w-[300px]  h-[125px] flex justify-center items-center"> 
        <Link href="../events"><button className={Classes.backButton}>Back</button></Link>
         </div>
</div> 
<div className={Classes.MainArea}>
    <div className={Classes.TopBar}>
       <div className={Classes.BarIn}>
       <div className="w-[275px]  h-[125px] flex justify-center items-center glow-effect-blue"> 
         <Link href="../EventPages/Photography" className="text-[20px] hover:text-[36px] hover:font-semibold transition-all duration-5000 ease-in-out">Photography</Link>
         </div>
         <div className="w-[275px]  h-[125px] flex justify-center items-center glow-effect-green">
         <Link href="../EventPages/Design" className="text-[20px] hover:text-[36px] hover:font-semibold transition-all duration-5000 ease-in-out">Design</Link>
         </div>
         <div className="w-[275px]  h-[125px] flex justify-center items-center glow-effect-red">
         <Link href="../EventPages/Animation" className="text-[20px] hover:text-[36px] hover:font-semibold transition-all duration-5000 ease-in-out">Animation</Link>
         </div>
         <div className="w-[275px]  h-[125px] flex justify-center items-center glow-effect-yellow">
         <Link href="../EventPages/Cinematography" className="text-[20px] hover:text-[36px] hover:font-semibold transition-all duration-5000 ease-in-out">Cinematography</Link>
         </div>
         <div className="w-[275px]  h-[125px] flex justify-center items-center glow-effect-orange">
         <Link href="../EventPages/Media" className="text-[20px] hover:text-[36px] hover:font-semibold transition-all duration-5000 ease-in-out">Media</Link>
         </div>
         <div className="w-[275px]  h-[125px] flex justify-center items-center glow-effect-purple">
         <Link href="../EventPages/Outreach" className="text-[20px] hover:text-[36px] hover:font-semibold transition-all duration-5000 ease-in-out">Outreach</Link> 
         </div>
        </div> 
      </div>
        <div className={Classes.MajorBod} >

<div className={Classes.CardCi}>
  <div class="flex flex-col text-center justify-center align-middle px-6 py-4">
  <div class=" flex flex-rows h-[40px] justify-center font-bold text-3xl mb-2 my-3.5"><div><Image className="icon" src={"/icon_cine.png"} width={40} height={10} alt="cameras"/></div><div className="ml-4">Director&apos;s Cut</div></div>
    <p class="text-justify my-3.5 h-[180px]">
    Participants of the event will be tasked with producing a short film within a tight deadline of 50 hours. The theme for their film will be unveiled at the start of the event, and all filming and production will be conducted on the campus.
    </p>
    <a href="https://drive.google.com/file/d/1hMvmOgtINusjSAHijt9OXxh5x9GBrHc2/view?usp=drive_link" className="text-white-800 my-3.5 italic hover:underline">View Problem Statement</a>
    <div className="my-3.5 align-middle justify-evenly">
        <button className="border p-2 border-white rounded-[15px] hover:text-[15px] hover:font-semibold transition-all duration-5000 ease-in-out ">REGISTRATION WILL BE LIVE SOON</button>
    </div>
  </div>
</div>

<div className={Classes.CardCi}>
  <div class="flex flex-col text-center justify-center align-middle px-6 py-4">
  <div class=" flex flex-rows h-[40px] justify-center font-bold text-3xl mb-2 my-3.5 max-md:text-[27px]"><div><Image className="icon" src={"/icon_cine.png"} width={40} height={10} alt="cameras"/></div><div className="ml-4">Frame By Frame</div></div>
    <p class="text-justify my-3.5 h-[180px]">
    Frame by Frame is an Open-theme Online event, and stop-motion entries are to be submitted in due time. The participants need to create a stop-motion movie using only inanimate objects.
    </p>
    <a href="https://drive.google.com/file/d/1mKRsu2kBdiTaDy2K5Ce7n0rk0uopbvgB/view?usp=drive_link" className="text-white-800 my-3.5 italic hover:underline">View Problem Statement</a>
    <div className="my-3.5 align-middle justify-evenly">
        <button className="border p-2 border-white rounded-[15px] hover:text-[15px] hover:font-semibold transition-all duration-5000 ease-in-out ">REGISTRATION WILL BE LIVE SOON</button>
    </div>
  </div>
</div>

<div className={Classes.CardCi}>
  <div class="flex flex-col text-center justify-center align-middle px-6 py-4">
  <div class=" flex flex-rows h-[40px] justify-center font-bold text-3xl mb-2 my-3.5"><div><Image className="icon" src={"/icon_cine.png"} width={40} height={10} alt="cameras"/></div><div className="ml-4">Make It short</div></div>
    <p class="text-justify my-3.5 h-[180px]">
    Participants will be given different genres ,from which they will choose to make a video based on the clips given to them .The time duration of the video can be from 30-60 seconds.
    </p>
    <a href="https://drive.google.com/file/d/1FiV4Zsg5ieR0t6Tq9IuxAuV155Ea_U2c/view?usp=drive_link" className="text-white-800 my-3.5 italic hover:underline">View Problem Statement</a>
    <div className="my-3.5 align-middle justify-evenly">
        <button className="border p-2 border-white rounded-[12.5px] hover:text-[15px] hover:font-semibold transition-all duration-5000 ease-in-out ">REGISTRATION WILL BE LIVE SOON</button>
    </div>
  </div>
</div>

<div className={Classes.CardCi}>
  <div class="flex flex-col text-center justify-center align-middle px-6 py-4">
  <div class=" flex flex-rows h-[40px] justify-center font-bold text-3xl mb-2 my-3.5 max-md:text-[27px]"><div><Image className="icon" src={"/icon_cine.png"} width={40} height={10} alt="cameras"/></div><div className="ml-4">That&apos;s How B-roll</div></div>
    <p class="text-justify my-3.5 h-[180px]">
    For this event, you&apos;ve got to aim the lenses inwards and indulge in the mesmerizing beauty of life&apos;s precious moments; hence the theme - “Joy in Motion: Cinematic Vignettes of Life&apos;s Beauty”. Let each frame ignite your senses and remind you of the remarkable beauty that surrounds us all and make everyone and their friends turn their heads
    </p>
    <a href="https://drive.google.com/file/d/1QD-WIBJJnv0KRfJFqomDZrLSo-7LdhNs/view?usp=drive_link
" className="text-white-800 my-3.5 italic hover:underline">View Problem Statement</a>
    <div className="my-3.5 align-middle justify-evenly">
        <button className="border p-2 border-white rounded-[15px] hover:text-[15px] hover:font-semibold transition-all duration-5000 ease-in-out ">REGISTRATION WILL BE LIVE SOON</button>
    </div>
  </div>
</div>
</div>
</div>

        </div>
        <Footer/>
    </div>
    );
};

export default Cinematography
