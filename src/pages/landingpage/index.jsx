
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image'
import Link from 'next/link'
import Classes from '@/styles/LandingPage.module.css';
import Fade from "react-awesome-reveal"
import Marquee from "react-fast-marquee"
import winner1 from './static/winner.svg';
import briefing from './static/briefing.svg';
import redcarpet from './static/red-carpet.svg';
import banner4 from './static/banner4.svg';
import ScrollTrigger from "react-scroll-trigger"
import Header from "./Header"
import Footer from "./Footer"
import AboutUs from "./AboutUs"
import Hero from "./Hero"
import OAT from "./OAT"
import Testimonials from "./Testimonials"
import Competitions from "./Competitions"
import Sponsors from "./Sponsors"

const IndexLanding = () => {
    const [counterOn, setCounterOn] = useState(false);
  const [button, setButton] = useState(true);
  const [visits, setVisits] = useState(0);
  const [isShown, setIsShown] = useState(false);
  const [isShown2, setIsShown2] = useState(false);
  const modalState = () => {
    setIsShown((current) => !current);
  };
  const modalState2 = () => {
    setIsShown2((current) => !current);
  };

  const showButton = () => {
    if (window.innerWidth > 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };
  const ref_container = useRef();
  // useEffect(() => {
  //   const scrollDiv = document.getElementById('header').offsetTop;
  //   window.scrollTo({ top: scrollDiv - 200, behavior: 'smooth' });
  //   showButton();
  // }, []);
  const logoutHandler = () => {
    sessionStorage.clear();
    window.location.href = '/';
    closeMobileMenu();
  };

  return (
    <>
    <Header/>
    <Hero/>
    <AboutUs/>
    <Competitions/>
    <OAT/>
    <Testimonials/>
    <Sponsors/>
 
    <Footer/>
  </>
  )
}

export default IndexLanding
