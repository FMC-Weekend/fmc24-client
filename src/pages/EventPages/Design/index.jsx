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

const Design = () => {
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

<div className={Classes.CardDe}>
  <div class="flex flex-col text-center justify-center align-middle px-6 py-4">
  <div class=" flex flex-rows h-[40px] justify-center font-bold text-3xl mb-2 my-3.5"><div><Image className="icon" src={"/icon_design.png"} width={40} height={10} alt="cameras"/></div><div className="ml-4">ReInevent</div></div>
    <p class="text-justify my-3.5 h-[180px]">
    Logos have always been an integral part of a brand&apos;s identity. The perfect blend of a minimal versatile and memorable design creates a great logo. The FMC Weckend brings you the opportunity to redesign a logo and create a fresh impression for a brand. The most original and creative design amongst all will be rewarded!
    </p>
    <a href="https://drive.google.com/file/d/1W3By7kVROQn54LgVeubcEUk7q8Xub4r2/view?usp=drive_link" className="text-white-800 my-3.5 italic hover:underline">View Problem Statement</a>
    <div className="my-3.5 align-middle justify-evenly">
        <button className="border p-2 border-white rounded-[15px] hover:text-[15px] hover:font-semibold transition-all duration-5000 ease-in-out ">REGISTRATION WILL BE LIVE SOON</button>
    </div>
  </div>
</div>

<div className={Classes.CardDe}>
  <div class="flex flex-col text-center justify-center align-middle px-6 py-4">
  <div class=" flex flex-rows h-[40px] justify-center font-bold text-3xl mb-2 my-3.5"><div><Image className="icon" src={"/icon_design.png"} width={40} height={10} alt="cameras"/></div><div className="ml-4">Design-a-thon</div></div>
    <p class="text-justify my-3.5 h-[180px]">
    This is a rebranding challenge, you&apos;ll have to rebrand an intriguing company using a different product line than the one it now uses. It will be a 24-hour offline event. It will be a Team event with 1-4 people in each team.
    </p>
    <a href="https://drive.google.com/file/d/1l3lonQjxsKCUFfhKQk3TcVpEJ1YQndOo/view?usp=drive_link" className="text-white-800 my-3.5 italic hover:underline">View Problem Statement</a>
    <div className="my-3.5 align-middle justify-evenly">
        <button className="border p-2 border-white rounded-[15px] hover:text-[15px] hover:font-semibold transition-all duration-5000 ease-in-out ">REGISTRATION WILL BE LIVE SOON</button>
    </div>
  </div>
</div>

<div className={Classes.CardDe}>
  <div class="flex flex-col text-center justify-center align-middle px-6 py-4">
  <div class=" flex flex-rows h-[40px] justify-center font-bold text-3xl mb-2 my-3.5 max-md:text-[27px]"><div><Image className="icon" src={"/icon_design.png"} width={40} height={10} alt="cameras"/></div><div className="ml-4">Design the Tunes</div></div>
    <p class="text-justify my-3.5 h-[180px]">
    Its an Online design challenge to design the cover page of an English song or an English album.You can also use the elements of the songs or album for the cover. And the prior entries are also allowed. But also submit the 3 screenshot showing stages of your work in process with submission
    </p>
    <a href="https://drive.google.com/file/d/1nM_s0yW-ohc4RovJC11QlsqYUAZL4EmZ/view?usp=drive_link" className="text-white-800 my-3.5 italic hover:underline">View Problem Statement</a>
    <div className="my-3.5 align-middle justify-evenly">
        <button className="border p-2 border-white rounded-[12.5px] hover:text-[15px] hover:font-semibold transition-all duration-5000 ease-in-out ">REGISTRATION WILL BE LIVE SOON</button>
    </div>
  </div>
</div>

<div className={Classes.Ghost}></div>
</div>
</div>
        </div>
        <Footer/>
    </div>
    );
};

export default Design
