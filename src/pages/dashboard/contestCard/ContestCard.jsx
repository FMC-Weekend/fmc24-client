import Image from "next/image";
import React from "react";
import { useState } from "react";

const ContestCard = ({ title, imageSrc }) => {
  const [isVer,setIsVer]=useState(false);
    return (
      <div className="w-[340px] h-[250px] justify-center my-6 shadow-amber-100/20 border mx-2 border-white bg-gradient-to-t from-white/10 to-white/30 text-white rounded-[14px] bg-opacity-10 backdrop-blur-lg shadow-xl drop-shadow-xl bg-blend-normal z-10">
        <div className="flex flex-col text-center justify-center px-6 py-4">
          <div className="flex flex-rows justify-around font-bold text-2xl text-black mb-2 my-3.5">
            <div className="mr-4">Contest</div>
          </div>
          <p className="my-3.5 h-[180px] text-3xl font-semibold text-center">
            {title}
            <div className="my-8 text-xl">
            {isVer?(<>  <button type="button" style={{backgroundColor:"green" , borderRadius:"10px", padding:"5px"}}>Verified</button></>):(<>  <button type="button" style={{backgroundColor:"red", borderRadius:"10px", padding:"5px"}}>Not Verified</button></>)}
            </div>
          </p>
          
        </div>
      </div>
    );
  };
  
  export default ContestCard;