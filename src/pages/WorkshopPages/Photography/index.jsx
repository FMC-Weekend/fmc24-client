import React from "react";
import Header from "../../landingpage/Header";
import Footer from "../../landingpage/Footer";
import Link from "next/link";
import Image from "next/image";
import Classes from "../indexe.module.css";

const divStyle = {
    minHeight: "100px",
  };
  

const Index = () => {
    return (
<div className={Classes.FullPage}>
            <Header/>
            <div>
    <div className="mt-[80px]"><h1 hidden>Hello</h1></div>
    <div className={Classes.showMobile}>
    <div className="w-[300px]  h-[125px] flex justify-center items-center"> 
        <Link href="../workshops"><button className={Classes.backButton}>Back</button></Link>
         </div>
     </div>
      <div className={Classes.MainArea}>
        
        <div className={Classes.TopBar}>
           <div className={Classes.BarIn}>
             <div className="w-[275px]  h-[125px] flex justify-center items-center glow-effect-blue"> 
             <Link href="../WorkshopPages/Photography" className="text-[20px] hover:text-[36px] hover:font-semibold transition-all duration-5000 ease-in-out">Photography</Link>
             </div>
             <div className="w-[275px]  h-[125px] flex justify-center items-center glow-effect-green">
             <Link href="../WorkshopPages/Design" className="text-[20px] hover:text-[36px] hover:font-semibold transition-all duration-5000 ease-in-out">Design</Link>
             </div>
             <div className="w-[275px]  h-[125px] flex justify-center items-center glow-effect-red">
             <Link href="../WorkshopPages/Animation" className="text-[20px] hover:text-[36px] hover:font-semibold transition-all duration-5000 ease-in-out">Animation</Link>
             </div>
             <div className="w-[275px]  h-[125px] flex justify-center items-center glow-effect-yellow">
             <Link href="../WorkshopPages/Cinematography" className="text-[20px] hover:text-[36px] hover:font-semibold transition-all duration-5000 ease-in-out">Cinematography</Link>
             </div>
             <div className="w-[275px]  h-[125px] flex justify-center items-center glow-effect-orange">
             <Link href="../WorkshopPages/Media" className="text-[20px] hover:text-[36px] hover:font-semibold transition-all duration-5000 ease-in-out">Media</Link>
             </div>
             <div className="w-[275px]  h-[125px] flex justify-center items-center glow-effect-purple">
             <Link href="../WorkshopPages/Outreach" className="text-[20px] hover:text-[36px] hover:font-semibold transition-all duration-5000 ease-in-out">Outreach</Link> 
             </div>
           </div>
        </div> 
  <div className={Classes.MajorBod} >
    <div className={Classes.CardPh }>
      <div class="flex flex-col text-center justify-center items-center ">
        <Image src={"/Subhash.png"} width={387} height={300} className="rounded-tr-[25px] rounded-tl-[25px]" alt="null" ></Image>
        <div class=" flex flex-rows h-[30px] justify-center font-bold text-3xl"><div className="ml-4 mt-5 font-bold text-[30px] p-[10px]">Wildlife Photography</div></div>
        <a href="https://drive.google.com/file/d/15WUfJ3wn_mWCNDiFmcOw_6DlY3z7ch5P/view?usp=drive_link" className="text-black mt-10 italic hover:underline text-[20px]  px-10 p-1  ">-by Subhash Nair</a>
        <p class="text-justify mx-2 w-[290px] mt-10">Subhash Nair, a renowned wildlife photographer and avid traveler, captures the beauty of the natural world. He is a brand ambassador for Nikon India,framing breathtaking moments.
        </p>
        
        <div className="my-8 align-middle justify-evenly">
            <button className="border mb-8 px-6 py-2 border-black rounded-[20px] hover:text-[15px] hover:font-semibold transition-all duration-5000 ease-in-out text-black ">Checkout</button>
        </div>
      </div>
    </div>
    <div className={Classes.CardPh} >
      <div class="flex flex-col text-center justify-center items-center  ">
        <Image src={"/Bhalovashi.png"} width={387} height={300} className="rounded-tr-[25px] rounded-tl-[25px]" alt="null"></Image>
        <div class=" flex flex-rows h-[30px] justify-center font-bold text-3xl"><div className="ml-4 mt-4 font-bold text-[30px] p-[10px]">Travel & Lifestyle Photography</div></div>
        <a href="https://drive.google.com/file/d/15WUfJ3wn_mWCNDiFmcOw_6DlY3z7ch5P/view?usp=drive_link" className="text-black mt-20 italic hover:underline text-[20px]  px-10 p-1 ">-by Bhalovashi</a>
        <p class="text-justify mx-2 w-[290px] mt-3">She is involved in filmmaking, product promotions, drone photography, and creative direction. Her work spans across various landscapes  capturing emotions and unique perspectives.
        </p>
        
        <div className="my-6 align-middle justify-evenly ">
            <button className="border mb-10 px-6 py-2 border-black rounded-[20px] hover:text-[15px] hover:font-semibold transition-all duration-5000 ease-in-out text-black ">Checkout</button>
        </div>
      </div>
    </div>
    <div className={Classes.CardPh}>
      <div class="flex flex-col text-center justify-center items-center  ">
        <Image src={"/Satyam.png"} width={387} height={350} className="rounded-tr-[25px] rounded-tl-[25px]" alt="null"></Image>
        <div class=" flex flex-rows h-[30px] justify-center font-bold text-3xl"><div className="ml-4  mt-5 font-bold text-[30px] p-[10px]">Instameet & Adobe Lightroom</div></div>
        <a href="https://drive.google.com/file/d/15WUfJ3wn_mWCNDiFmcOw_6DlY3z7ch5P/view?usp=drive_link" className="text-black mt-14 italic hover:underline text-[20px]  px-10 p-1 ">-by Satyam Bhuyan</a>
        <p class="text-justify mx-2 w-[290px] ">Satyam Bhuyan, a gifted photographer with an engineering and MBA background, creates visual masterpieces. As a Nikon India and Lightroom Ambassador, he elevates travel photography and NFT artistry to new heights.
        </p>
        
        <div className="my-8 align-middle justify-evenly">
            <button className="border mb-10 px-6 py-2 border-black rounded-[20px] hover:text-[15px] hover:font-semibold transition-all duration-5000 ease-in-out text-black ">Checkout</button>
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

export default Index

