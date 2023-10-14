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
    <div className={Classes.CardCi}>
      <div class="flex flex-col text-center justify-center items-center ">
        <Image src={"/Sumit.png"} width={387} height={350} className="rounded-tr-[25px] rounded-tl-[25px]" alt="null"></Image>
        <div class=" flex flex-rows h-[30px] justify-center font-bold text-3xl"><div className="ml-4  font-bold text-[30px] p-[10px]">Panel Discussion</div></div>
        <a href="https://drive.google.com/file/d/15WUfJ3wn_mWCNDiFmcOw_6DlY3z7ch5P/view?usp=drive_link" className="text-black mt-5 italic hover:underline text-[20px]  px-10 p-1">-by Sumit Saxena </a>
        <p class="text-justify mx-2  mt-4 w-[290px]">Sumit Saxena is known for Doctor G (2022), Hamid (2018) ,Lust Stories (2018)and Pyaar Ka Punchnama (2011) for his role as dialogue and screenplay writer . His writing has a lot of versatility , with well known works in genres of Romance, Drama ,Comedy and their combinations.
        </p>
        
        <div className="my-8 align-middle justify-evenly">
            <button className="border px-6 py-2 border-black rounded-[20px] hover:text-[15px] hover:font-semibold transition-all duration-5000 ease-in-out text-black ">Checkout</button>
        </div>
      </div>
    </div>
    <div className={Classes.CardCi}>
      <div class="flex flex-col text-center justify-center items-center  ">
        <Image src={"/Abhijeet.png"} width={387} height={350} className="rounded-tr-[25px] rounded-tl-[25px]" alt="null"></Image>
        <div class=" flex flex-rows h-[30px] justify-center font-bold text-3xl"><div className="ml-4 font-bold text-[30px] p-[10px]">Panel Discussion</div></div>
        <a href="https://drive.google.com/file/d/15WUfJ3wn_mWCNDiFmcOw_6DlY3z7ch5P/view?usp=drive_link" className="text-black mt-5 italic hover:underline text-[20px]  px-10 p-1 ">-by Abhijeet Singh Parmar</a>
        <p class="text-justify mx-2 mt-6 w-[290px]"> Abhijeet Singh Parmar is a versatile cinematographer with roles as associate director , creative and executive producer and screenplay writer in various web series like Panchayat(2020-2022) , Rocket Boys(2022) , Gullak(2018).
        </p>
        
        <div className="my-10 align-middle justify-evenly">
            <button className="border px-6 py-2 border-black rounded-[20px] hover:text-[15px] hover:font-semibold transition-all duration-5000 ease-in-out text-black ">Checkout</button>
        </div>
      </div>
    </div>
    <div className={Classes.CardCi}>
      <div class="flex flex-col text-center justify-center items-center ">
        <Image src={"/Dhawalika.png"} width={387} height={350} className="rounded-tr-[25px] rounded-tl-[25px]" alt="null"></Image>
        <div class=" flex flex-rows h-[30px] justify-center font-bold text-3xl"><div className="ml-4 mt-5 font-bold text-[30px] p-[10px]">Cinematography</div></div>
        <a href="https://drive.google.com/file/d/15WUfJ3wn_mWCNDiFmcOw_6DlY3z7ch5P/view?usp=drive_link" className="text-black mt-10 italic hover:underline text-[20px]  px-10 p-1">-by Dhawalika Singh</a>
        <p class="text-justify mx-2 w-[290px] mt-5">Dhawalika Singh is a cinematographer and Director of Photography,who has worked on various Gujarati feature films like Kutch Express(2023) and Dear Father (2022) and Web Series like Aarya (2020) .[Aarya is not a Gujarati web series. Its in Hindi, starring Sushmita Sen]
        </p>
        
        <div className="my-8 align-middle justify-evenly">
            <button className="border px-6 py-2 border-black rounded-[20px] hover:text-[15px] hover:font-semibold transition-all duration-5000 ease-in-out text-black ">Checkout</button>
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

