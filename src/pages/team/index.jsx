import React from 'react'
import Convenors from './convenors';
import Gs from './gs';
import Tech from './tech';
import SocialMedia from './socialmedia';
import Secrataries from './secrataries';
import Pr from './publicrelations';
import Publicity from './publicity';
import Mktg from './marketing';
import Event from './event';
import Design from './design';
import Content from './content'; 
import Header from '../landingpage/Header';
import Sidenav from './sidenav';
import Animation from './animation';
import Advisors from './advisors';
import Footer from '../landingpage/Footer'




const Index = () => {
  const scrollToSection = () => {
    const section = document.getElementById('conv');
    section.scrollIntoView({ behavior: 'smooth'});
   };
  return (
    <>
    <div>
    <Header />
    <Sidenav  />
        <Convenors ref={Convenors}  />
        <Gs ref={Gs} />
        <Content ref={Content} />
        <Design ref={Design}/>
        <Event ref={Event}/>
        <Mktg ref={Mktg}/>
        <Publicity ref={Publicity} />
        <Pr ref={Pr}/>
        <SocialMedia ref={SocialMedia}/>
        <Tech ref={Tech} />
        <Secrataries ref={Secrataries}/>
        <Animation ref={Animation} />
        <Advisors ref={Advisors} />
        <div id="abcd" >
          </div>
        < Footer />
        {/* <footer /> */}
        </div>
    </>
  )
}

export default Index
