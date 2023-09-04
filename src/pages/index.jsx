import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Header } from 'next/dist/lib/load-custom-routes'
const inter = Inter({ subsets: ['latin'] })
import Classes from '@/styles/LandingPage.module.css';
import React, { useState, useEffect, useRef } from 'react';
import Fade from "react-awesome-reveal"
import Marquee from "react-fast-marquee"
import ScrollTrigger from "react-scroll-trigger"
import IndexLanding from "./landingpage/index"

export default function Home() {
  return (
 <>
 <IndexLanding/>
 </>
  
  )
}
