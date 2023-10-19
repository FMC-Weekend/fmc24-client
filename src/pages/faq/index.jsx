import Header from "../landingpage/Header";
import Head from "next/head";
import Footer from "../landingpage/Footer";
import React ,{useState} from "react";
import LayoutR from "../../../components/LayoutRegister";
import LayoutC from "../../../components/LayoutCampus";
import LayoutComp from "../../../components/LayoutCompetitions";
import LayoutA from "../../../components/LayoutAccomodation";
import datacomp from "./DataCompetitions.json";
import dataR from "./DataRegistration.json";
import dataC from "./DataCampus.json";
import dataA from "./DataAccomodation.json";


const divStyle = {
    minHeight: "50px",
  };

export default function Faq() {
  const [active, setActive] = useState([false, false, false, false,false, false, false, false, false,false,false,false, false, false, false, false, false, false, false, false,false,false]);
  const isSomeActive = active.some((element) => element);
  const handleClick = () => {
    isSomeActive
      ? setActive([false, false, false, false,false, false, false, false, false,false,false,false, false, false, false, false, false, false, false, false,false,false])
      : setActive([true, true, true, true, true, true,true, true, true, true, true,true,true,true, true, true, true, true, true,true, true, true, true, true,true,true]);
  };

  return (
    <>

        <Header/>
        <div style={divStyle}></div>
        <div style={divStyle}></div>
        <div className="flex flex-row items-center w-full align-middle text-white text-6xl justify-center">FAQs</div>
        <div style={divStyle}></div>
      <div className='grid place-items-center w-full'>
      <LayoutR
        handleClick={handleClick}
        isSomeActive={isSomeActive}
        data={dataR}
        turn={active}
        setTurn={setActive}
      />
    </div>
    <div style={divStyle}></div>
      <div className='grid place-items-center w-full'>
      <LayoutC
        handleClick={handleClick}
        isSomeActive={isSomeActive}
        data={dataC}
        turn={active}
        setTurn={setActive}
      />
    </div>
    <div style={divStyle}></div>
    <div className='grid place-items-center w-full'>
      <LayoutComp
        handleClick={handleClick}
        isSomeActive={isSomeActive}
        data={datacomp}
        turn={active}
        setTurn={setActive}
      />
    </div>
    <div style={divStyle}></div>
    <div className='grid place-items-center w-full'>
      <LayoutA
        handleClick={handleClick}
        isSomeActive={isSomeActive}
        data={dataA}
        turn={active}
        setTurn={setActive}
      />
    </div>
    <div style={divStyle}></div>
    <Footer/>
    </>
  )
}