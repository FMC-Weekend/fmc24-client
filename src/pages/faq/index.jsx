import Header from "../landingpage/Header";
import Head from "next/head";
import Footer from "../landingpage/Footer";
import React ,{useState} from "react";
import Layout from "../../../components/Layout";
import data from "./Data.json";


const divStyle = {
    minHeight: "100px",
  };

export default function Faq() {
  const [active, setActive] = useState([false, false, false, false, false, false, false, false, false, false]);
  const isSomeActive = active.some((element) => element);
  const handleClick = () => {
    isSomeActive
      ? setActive([false, false, false, false,false, false, false, false, false, false])
      : setActive([true, true, true, true, true, true,true, true, true, true, true, true]);
  };

  return (
    <>

        <Header/>
        <div style={divStyle}></div>
      <div className='grid place-items-center w-full'>
      <Layout
        handleClick={handleClick}
        isSomeActive={isSomeActive}
        data={data}
        turn={active}
        setTurn={setActive}
      />
    </div>
    <div style={divStyle}></div>
    <Footer/>
    </>
  )
}

