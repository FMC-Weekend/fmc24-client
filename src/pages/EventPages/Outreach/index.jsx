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

const Outreach = () => {
    return (
      <div className={Classes.FullPage}>
            <Header/>
            <div>
            <div className="mt-[80px]"><h1 hidden>Hello</h1></div>
<div className={Classes.showMobile}>
    <div className="w-[300px]  h-[125px] flex justify-center items-center "> 
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

<div className={Classes.CardOu}>
  <div class="flex flex-col text-center justify-center align-middle px-6 py-4">
  <div class=" flex flex-rows h-[40px] justify-center font-bold text-3xl mb-2 my-3.5"><div><Image className="icon" src={"/icon_outreach.png"} width={40} height={10} alt="cameras"/></div><div className="ml-4">AdMad</div></div>
    <p class="text-justify my-3.5 h-[180px]">
    The participants need to make an advertisement on the provided, within 36 hrs. The themes for the same would be released at the start of theevent and participants need to submit their entries in due time.
    </p>
    <a href="https://drive.google.com/file/d/1gnNykqXp5YDkPydygZo4D-IhukmH9KH4/view?usp=drive_link" className="text-white-800 my-3.5 italic hover:underline">View Problem Statement</a>
    <div className="my-3.5 align-middle justify-evenly">
        <button className="border p-2 border-white rounded-[15px] hover:text-[15px] hover:font-semibold transition-all duration-5000 ease-in-out ">REGISTRATION WILL BE LIVE SOON</button>
    </div>
  </div>
</div>

<div className={Classes.CardOu}>
  <div class="flex flex-col text-center justify-center align-middle px-6 py-4">
  <div class=" flex flex-rows h-[40px] justify-center font-bold text-3xl mb-2 my-3.5"><div><Image className="icon" src={"/icon_outreach.png"} width={40} height={10} alt="cameras"/></div><div className="ml-4">Vlogoholic</div></div>
    <p class="text-justify my-3.5 h-[180px]">
    You have to make a video log in the range of 60-600 seconds. It can be about anything- visiting nearby attractions, indulging in festive activities,pulling pranks on people, etc. - as long as it is exciting and in which you can show the theme “COLOUR OF MY CITY”.
    </p>
    <a href="https://drive.google.com/file/d/1sB71TnZAhPaZH3NUMgVYNG2HqgQYBkQ-/view?usp=drive_link
" className="text-white-800 my-3.5 italic hover:underline">View Problem Statement</a>
    <div className="my-3.5 align-middle justify-evenly">
        <button className="border p-2 border-white rounded-[15px] hover:text-[15px] hover:font-semibold transition-all duration-5000 ease-in-out ">REGISTRATION WILL BE LIVE SOON</button>
    </div>
  </div>
</div>

<div className={Classes.CardOu}>
  <div class="flex flex-col text-center justify-center align-middle px-6 py-4">
  <div class=" flex flex-rows h-[40px] justify-center font-bold text-3xl mb-2 my-3.5"><div><Image className="icon" src={"/icon_outreach.png"} width={40} height={10} alt="cameras"/></div><div className="ml-4">Rant It</div></div>
    <p class="text-justify my-3.5 h-[180px]">
    You will have to give a live solo open-mic performance of your rant. It could be a monologue, an interview, a prank or anything else that can captivate the interest of the public
    </p>
    <a href="https://drive.google.com/file/d/1xUAcYefHYvTkBAYSGQ9ROoLctT9ddDwO/view?usp=drive_link" className="text-white-800 my-3.5 italic hover:underline">View Problem Statement</a>
    <div className="my-3.5 align-middle justify-evenly">
        <button className="border p-2 border-white rounded-[12.5px] hover:text-[15px] hover:font-semibold transition-all duration-5000 ease-in-out ">REGISTRATION WILL BE LIVE SOON</button>
    </div>
  </div>
</div>
 
<div className={Classes.CardOu}>
  <div class="flex flex-col text-center justify-center align-middle px-6 py-4">
  <div class=" flex flex-rows h-[40px] justify-center font-bold text-3xl mb-2 my-3.5"><div><Image className="icon" src={"/icon_outreach.png"} width={40} height={10} alt="cameras"/></div><div className="ml-4">Documentary</div></div>
    <p class="text-justify my-3.5 h-[180px] max-md:h-[230px]">
    Step into the world of storytelling through lenses and frames, where truth meets creativity, and reality is transformed into compelling narratives. Join us for &apos;Capturing Reality: The Art of Documentary Filmmaking,&apos; a captivating and enlightening documentary-making event that dives deep into the fascinating realm of non-fiction storytelling. Participants are required to prepare a documentary film on any topic about any genre.
    </p>
    <a href="https://drive.google.com/file/d/1sZVovLahZ1jiyv31_uyQYAdKmIwyHtZ3/view?usp=drive_link" className="text-white-800 my-3.5 italic hover:underline">View Problem Statement</a>
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

export default Outreach;
