import React from "react";
import Header from "../landingpage/Header";
import Footer from "../landingpage/Footer";
import Classes from "./aboutus.module.css";
import Image from 'next/image';
import Link from 'next/link';


// const textStyleBold = {
//   backdropFilter: "blur(9px) saturate(100%)",
//   WebkitBackdropFilter: "blur(9px) saturate(100%)",
//   backgroundColor: "rgba(39, 39, 39, 0)",
//     fontSize: "4rem",
//   fontWeight: "bold",
//   textAlign: "center",
//   marginTop: "20rem",
//   minHeight: "520px",
// };
// const divStyle = {
//   minHeight: "100px",
// };

const About = () => {
  return (
    <>
    <Header />
    <div  className={Classes.headerimg} >
    <Image src='/aboutuspic.png' alt="" height={100} width={100}/>
    </div>


    <div className={Classes.div1}>
    <Image className={Classes.img} alt="" src='/about1.svg'   height={1148.83} width={667.22} />
    <div className={Classes.div1in}>
    <div className={Classes.imgdiv1}>
    <Image  src='/Group 198.png' alt="" height={100} width={100} />
    </div>
    <h1>A One of its Kind</h1>
    <p>Film and Media Council is the youngest council of IIT BHU where imagination sprouts into reality. FMC stands high with its six clubs streaming with artistry - The Animation Club, The Cine Club, The Design Club, The Media Club, The Outreach Club and The Photography Club. The realms of digital art open through these clubs where different hues of talents are nurtured, presenting a variety of art - ranging from extra-cool designs to mind blowing animations, from voicing out one’s thoughts through expressions to storing memories in forms of polaroids - we have got all covered. Our aim remains to invoke that inner artist hidden in everyone and produce a work of magic blended with touch of reality!
</p>
    </div>
    </div>
    



    <div className={Classes.div2}>
   
    <div className={Classes.div2in}>
    <div className={Classes.imgdiv2}>
    <Image  src='/Rectangle 64.png' alt="" height={100} width={100} />
    </div>
    <h1>Inception of Film and Media Council</h1>
    <p>Established in 2012, FMC has always been the birthplace of fantastic ideas. A group of visionary individuals and stalwarts comprising KT bhaiya, Laxman Teja bhaiya, Jatin bhaiya led to its conception. FMC Weekend is the flagship fest of the FMC. Its foundation was led by our alumni who believed that our Council wasn’t just for the event coverage, in fact, we ourselves deserved an event, rather a fest at a broader level to showcase that our clubs work hard to produce some of the best pieces one had ever witnessed! Imagine having a fest of your own, to represent your clubs, your art on such a big platform. And that’s how FMC Weekend was conceived.
</p>
    </div>
    <Image className={Classes.img2} src='/about2.svg'  alt=""   height={1148.83} width={667.22} />
    </div>




    <div className={Classes.div3}>
    <Image className={Classes.img3} src='/about3.svg'  alt=""   height={1148.83} width={667.22} />
    <div className={Classes.div3in}>
    <div className={Classes.imgdiv3}>
    <Image src='/Group199.png'  alt=""  height={100} width={100} />
    </div>
    <h1 className="font-sans">The one where it all began…</h1>
    <p className="font-sans">With the first edition of FMC Weekend hosted in 2014, we have come a long way with various flavors of experiences - sweet and wholesome! Even Covid couldn’t kill our enthusiasm to make our online editions of FMC Weekend a big hit! Our alumni and seniors worked day and night from their houses, sitting in front of the laptop screen, conducting competitions, events and coordinating the entire fest! That is a feat which we beat drums of. Our guests have included notable personalities like comedian Shashwat Maheshwari, the inspiring poet Atmandeep Khyal and mentalist Preveen Pandita who enamored everyone with their magic.
</p>
    </div>
    </div>

    

    <div className={Classes.div4}>
    <div className={Classes.div4in}>
    <div className={Classes.imgdiv4}>
    <Image  src='/Group201.png'  alt=""  height={100} width={100} />
    </div>
    <h1>Unfolding further expeditions
</h1>
    <p>Our 9th edition witnessed a series of innovative workshops like one on doodling by acclaimed doodling artist Santanu Hazarika, storytelling by renowned entrepreneur Rashmi Chadha along with an NFT and digital 3D art workshop by Shubhangi Raheja, a film-making workshop by Abhijeet Singh Parmar. With years passing to create a shining image of our fest, we introduced Strillion and Meraki. While Strillion is a pre-event where we invite an esteemed guest to unveil the theme of the new edition of FMC Weekend, Meraki focuses on interacting with amazing creators and knowing their journey to success. </p>
    </div>
    <Image className={Classes.img4} src='/about4.svg'  alt=""   height={1148.83} width={667.22} />
    </div>
    

    <Footer />
    </>
  )
};

export default About;
