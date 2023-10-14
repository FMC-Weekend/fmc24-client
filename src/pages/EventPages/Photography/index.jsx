import React from "react";
import Header from "../../landingpage/Header";
import Footer from "../../landingpage/Footer";
import Index from "../../events";
import Link from "next/link";
import Classes from "../indexe.module.css";

import Image from "next/image";
import "./styles.module.css";
const divStyle = {
    minHeight: "100px",
  };

const Photography = () => {
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

<div className={Classes.CardPh}>
  <div class="flex flex-col text-center justify-center  px-6 py-4 ">
    <div class=" flex flex-rows h-[40px] justify-center font-bold text-3xl mb-2 my-3.5"><div><Image className="icon" src={"/icon_photo.png"} width={40} height={10} alt="cameras"/></div><div className="ml-4">Snapchase</div></div>
    <p class="text-justify my-3.5 h-[180px]">
    Snapchase is a treasure hunt where you have to take pictures of a special place by solving clues and riddles and submit them before time runs out.
    </p>
    <a href="https://drive.google.com/file/d/15WUfJ3wn_mWCNDiFmcOw_6DlY3z7ch5P/view?usp=drive_link" className="text-white-800 my-3.5 italic hover:underline">View Problem Statement</a>
    <div className="my-3.5 align-middle justify-evenly">
        <button className="border p-2 border-white rounded-[15px] hover:text-[15px] hover:font-semibold transition-all duration-5000 ease-in-out ">REGISTRATION WILL BE LIVE SOON</button>
    </div>
  </div>
</div>

<div className={Classes.CardPh}>
      <div class="flex flex-col text-center justify-center align-middle px-6 py-4">
      <div class=" flex flex-rows h-[40px] justify-center font-bold text-[24px] max-md:text-[23px] mb-2 my-3.5"><div><Image className="icon" src={"/icon_photo.png"} width={40} height={10} alt="cameras"/></div><div className="ml-4">Portfolio in 24 Hours</div></div>
        <p class="text-justify my-3.5 h-[180px]">
        We click a number of pictures and put them in the gallery, but Portfolio in 24 hrs of FMC Weekend brings you a chance to show your skills on Indias largest digital art festival. 
        </p>
        <a href="https://drive.google.com/file/d/1BhtGMD-lpnIZAv-8f1CIjZhPV2PDiS-B/view?usp=drive_link" className="text-white-800 my-3.5 italic hover:underline">View Problem Statement</a>
        <div className="my-3.5 align-middle justify-evenly">
            <button className="border p-2 border-white rounded-[15px] hover:text-[15px] hover:font-semibold transition-all duration-5000 ease-in-out ">REGISTRATION WILL BE LIVE SOON</button>
        </div>
      </div>
    </div>

<div className={Classes.CardPh}>
  <div class="flex flex-col text-center justify-center align-middle px-6 py-4">
  <div class=" flex flex-rows h-[40px] justify-center font-bold text-3xl mb-2 my-3.5"><div><Image className="icon" src={"/icon_photo.png"} width={40} height={10} alt="cameras"/></div><div className="ml-4">Photoart</div></div>
    <p class="text-justify my-3.5 h-[180px]">
    This is what Manipulation means,so lets dive into this imaginary world and paint the canvas with our imagination.Themes on which the event will take place are given below: Post Apocalypse, Wildlife, Retro Futurism, Surrealism
    </p>
    <a href="https://drive.google.com/file/d/1qSMgfIKxQB8GIQBn74k2hwd01Jkt4HEo/view?usp=drive_link" className="text-white-800 my-3.5 italic hover:underline">View Problem Statement</a>
    <div className="my-3.5 align-middle justify-evenly">
        <button className="border p-2 border-white rounded-[12.5px] hover:text-[15px] hover:font-semibold transition-all duration-5000 ease-in-out ">REGISTRATION WILL BE LIVE SOON</button>
    </div>
  </div>
</div>

<div class={Classes.CardPh}>
  <div class="flex flex-col text-center justify-center align-middle px-6 py-4">
  <div class=" flex flex-rows h-[40px] justify-center font-bold text-3xl mb-2 my-3.5"><div><Image className="icon" src={"/icon_photo.png"} width={40} height={10} alt="cameras"/></div><div className="ml-4">Instameet</div></div>
    <p class="text-justify my-3.5 h-[180px]">
    This is an offline theme based photography event.This event bears the challenge to capture the beauty of Varanasi, its lifestyle, communities, cultures, rituals, and religion. A photowalk will be organized during which you will have to click the pictures for the event submission.
    </p>
    <a href="https://drive.google.com/file/d/1x4_OCREwU6SjhTbnKNcIQ9o-2774uam-/view?usp=drive_link" className="text-white-800 my-3.5 italic hover:underline">View Problem Statement</a>
    <div className="my-3.5 align-middle justify-evenly">
        <button className="border p-2 border-white rounded-[15px] hover:text-[15px] hover:font-semibold transition-all duration-5000 ease-in-out ">REGISTRATION WILL BE LIVE SOON</button>
    </div>
  </div>
</div>

<div class={Classes.CardPh}>
  <div class="flex flex-col text-center justify-center align-middle px-6 py-4">
  <div class=" flex flex-rows h-[40px] justify-center font-bold text-3xl mb-2 my-3.5"><div><Image className="icon" src={"/icon_photo.png"} width={40} height={10} alt="cameras"/></div><div className="ml-4">Infocus</div></div>
    <p class="text-justify my-3.5 h-[180px]">
    Embrace the essence of creativity and composition as the pivotal criteria for your submissions. Your artwork should resonate with one of the following themes, and winners will be recognized separately for each theme: 1.Long Exposure 2.Minimal 3.Culture of India  4.Monochrome
    </p>
    <a href="https://drive.google.com/file/d/1Nw5y8pmE8JL4BKq_CNwyhi90_nfqN9w3/view?usp=drive_link" className="text-white-800 my-3.5 italic hover:underline">View Problem Statement</a>
    <div className="my-3.5 align-middle justify-evenly">
        <button className="border p-2 border-white rounded-[15px] hover:text-[15px] hover:font-semibold transition-all duration-5000 ease-in-out ">REGISTRATION WILL BE LIVE SOON</button>
    </div>
  </div>
</div>
<div className={Classes.Ghost}>
  
</div>

</div>
</div>
        </div>
        <Footer/>
    </div>
    );
};

export default Photography
