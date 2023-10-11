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

const Animation = () => {
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

<div className={Classes.CardAn}>
  <div class="flex flex-col text-center justify-center align-middle px-6 py-4">
  <div class=" flex flex-rows h-[40px] justify-center font-bold text-[23px] mb-2 my-3.5 max-md:text-[18px]"><div><Image className="icon" src={"/icon_anim.png"} width={40} height={10} alt="cameras"/></div><div className="ml-4">Capture The Imagination</div></div>
    <p class="text-justify my-3.5 h-[180px]">
    Experience the boundless realm of 3D artistry! Create a captivating and immersive scene with no limitations on theme or subject matter. However, remember that in the end, a single image will be your masterpiece, the culmination of your creative process.
    </p>
    <a href="https://drive.google.com/file/d/1FYlKT4s0syayaT8ES99ZzV5C2BXAbG5_/view?usp=drive_link" className="text-white-800 my-3.5 italic hover:underline">View Problem Statement</a>
    <div className="my-3.5 align-middle justify-evenly">
        <button className="border p-2 border-white rounded-[15px] hover:text-[15px] hover:font-semibold transition-all duration-5000 ease-in-out ">REGISTRATION WILL BE LIVE SOON</button>
    </div>
  </div>
</div>

<div className={Classes.CardAn}>
  <div class="flex flex-col text-center justify-center align-middle px-6 py-4">
  <div class=" flex flex-rows h-[40px] justify-center font-bold text-3xl mb-2 my-3.5"><div><Image className="icon" src={"/icon_anim.png"} width={40} height={10} alt="cameras"/></div><div className="ml-4">Logomotion</div></div>
    <p class="text-justify my-3.5 h-[180px]">
    Create an innovative 2D logo animation within specified duration, showcasing seamless motion, creative transitions, and a harmonious blend of visual elements. 
    </p>
    <a href="https://drive.google.com/file/d/1fUyknpFgaFkaaVSGFOJVIVoFf3ukg_fQ/view?usp=drive_link" className="text-white-800 my-3.5 italic hover:underline">View Problem Statement</a>
    <div className="my-3.5 align-middle justify-evenly">
        <button className="border p-2 border-white rounded-[15px] hover:text-[15px] hover:font-semibold transition-all duration-5000 ease-in-out ">REGISTRATION WILL BE LIVE SOON</button>
    </div>
  </div>
</div>

<div className={Classes.CardAn}>
  <div class="flex flex-col text-center justify-center align-middle px-6 py-4">
  <div class=" flex flex-rows h-[40px] justify-center font-bold text-3xl mb-2 my-3.5 max-md:text-[26px]"><div><Image className="icon" src={"/icon_anim.png"} width={40} height={10} alt="cameras"/></div><div className="ml-4">Realm of Wonders</div></div>
    <p class="text-justify my-3.5 h-[180px]">
    Participants have to make the looping animation. The theme and elements of the animation will be anything of your choice. Also we will provide you raw/base animation.
    </p>
    <a href="https://drive.google.com/file/d/13Uu9pN_UHPtQt8Nz203ji3gmg3hMYzo4/view?usp=drive_link" className="text-white-800 my-3.5 italic hover:underline">View Problem Statement</a>
    <div className="my-3.5 align-middle justify-evenly">
        <button className="border p-2 border-white rounded-[12.5px] hover:text-[15px] hover:font-semibold transition-all duration-5000 ease-in-out ">REGISTRATION WILL BE LIVE SOON</button>
    </div>
  </div>
</div>

<div className={Classes.CardAn}>
  <div class="flex flex-col text-center justify-center align-middle px-6 py-4">
  <div class=" flex flex-rows h-[40px] justify-center font-bold text-3xl mb-2 my-3.5"><div><Image className="icon" src={"/icon_anim.png"} width={40} height={10} alt="cameras"/></div><div className="ml-4">VFXorama</div></div>
    <p class="text-justify my-3.5 h-[180px]">
    Participants have to create a VFX based video. The scene must be set in Varanasi with all elements having links to Varanasi.
    </p>
    <a href="https://drive.google.com/file/d/1XUqCm_JVBWU00pt_yby1VWD9Cp2T5GUM/view?usp=drive_link" className="text-white-800 my-3.5 italic hover:underline">View Problem Statement</a>
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

export default Animation;
