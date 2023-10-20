import React from "react";
import Header from "../landingpage/Header";
import Footer from "../landingpage/Footer";
import Classes from "./aboutus.module.css";
import Image from "next/image";
// Base styles for media player and provider (~400B).
import '@vidstack/react/player/styles/base.css';
import { MediaPlayer, MediaProvider } from '@vidstack/react';
import Link from "next/link";

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
      <div className={Classes.headerimg}>
        {/* <Image className={Classes.img1} alt="" src='/1.jpg'  height={720} width={480}/> */}
        
      </div>
      {/* <video src="https://scontent.cdninstagram.com/o1/v/t16/f1/m82/9F4638772D7997139531B4C4C0F98289_video_dashinit.mp4?efg=eyJxZV9ncm91cHMiOiJbXCJpZ193ZWJfZGVsaXZlcnlfdnRzX290ZlwiXSIsInZlbmNvZGVfdGFnIjoidnRzX3ZvZF91cmxnZW4uY2xpcHMuYzIuMTA4MC5iYXNlbGluZSJ9&_nc_ht=scontent.cdninstagram.com&_nc_cat=102&vs=903954610945567_3854666974&_nc_vs=HBksFQIYT2lnX3hwdl9yZWVsc19wZXJtYW5lbnRfcHJvZC85RjQ2Mzg3NzJENzk5NzEzOTUzMUI0QzRDMEY5ODI4OV92aWRlb19kYXNoaW5pdC5tcDQVAALIAQAVABgkR0FCbnd4TjZheE1Eb1FFRkFLd1AtRjh0WDk5SmJxX0VBQUFGFQICyAEAKAAYABsAFQAAJtDZoaj4%2FO4%2FFQIoAkMzLBdAYozMzMzMzRgSZGFzaF9iYXNlbGluZV8xX3YxEQB1%2FgcA&_nc_rid=16aaf98e63&ccb=9-4&oh=00_AfCNqnjQBRnqD0Vf0i1JHBofIAP37GUkyt6nro7i11h1QQ&oe=65321D26&_nc_sid=10d13b&dl=1" autoPlay loop  className=" mt-16 md:mt-5 w-full"/> */}
      {/* <ReactPlayer url='https://scontent.cdninstagram.com/o1/v/t16/f1/m82/9F4638772D7997139531B4C4C0F98289_video_dashinit.mp4?efg=eyJxZV9ncm91cHMiOiJbXCJpZ193ZWJfZGVsaXZlcnlfdnRzX290ZlwiXSIsInZlbmNvZGVfdGFnIjoidnRzX3ZvZF91cmxnZW4uY2xpcHMuYzIuMTA4MC5iYXNlbGluZSJ9&_nc_ht=scontent.cdninstagram.com&_nc_cat=102&vs=903954610945567_3854666974&_nc_vs=HBksFQIYT2lnX3hwdl9yZWVsc19wZXJtYW5lbnRfcHJvZC85RjQ2Mzg3NzJENzk5NzEzOTUzMUI0QzRDMEY5ODI4OV92aWRlb19kYXNoaW5pdC5tcDQVAALIAQAVABgkR0FCbnd4TjZheE1Eb1FFRkFLd1AtRjh0WDk5SmJxX0VBQUFGFQICyAEAKAAYABsAFQAAJtDZoaj4%2FO4%2FFQIoAkMzLBdAYozMzMzMzRgSZGFzaF9iYXNlbGluZV8xX3YxEQB1%2FgcA&_nc_rid=16aaf98e63&ccb=9-4&oh=00_AfCNqnjQBRnqD0Vf0i1JHBofIAP37GUkyt6nro7i11h1QQ&oe=65321D26&_nc_sid=10d13b&dl=1' loop={true}  playing={true}  width={"100%"} height={"100%"} /> */}
    
      <MediaPlayer title="Sprite Fight" autoplay={true} controls={true} loop={true} className=" mt-16 md:mt-5 w-full" src="https://res.cloudinary.com/shubhamiitbhu/video/upload/v1697696533/fmc/fvfsisuaazyrsor6ebab.mp4">
      
      
<MediaProvider />
      
</MediaPlayer>
      <div className={Classes.div1}>
    
        <Image
          className={Classes.img}
          alt=""
          src="/about1.svg"
          height={1148.83}
          width={667.22}
        />
        <div className={Classes.div1in}>
          <div className={Classes.imgdiv1}>
            <Image
              className={Classes.img1}
              alt=""
              src="/2.jpg"
              height={720}
              width={479}
            />
          </div>
          <h1>A One of its Kind</h1>
          <p>
            Film and Media Council is the youngest council of IIT BHU where
            imagination sprouts into reality. FMC stands high with its six clubs
            streaming with artistry - The Animation Club, The Cine Club, The
            Design Club, The Media Club, The Outreach Club and The Photography
            Club. The realms of digital art open through these clubs where
            different hues of talents are nurtured, presenting a variety of art
            - ranging from extra-cool designs to mind blowing animations, from
            voicing out one’s thoughts through expressions to storing memories
            in forms of polaroids - we have got all covered. Our aim remains to
            invoke that inner artist hidden in everyone and produce a work of
            magic blended with touch of reality!
          </p>
        </div>
      </div>

      <div className={Classes.div2}>
        <div className={Classes.div2in}>
          <div className={Classes.imgdiv2}>
            <Image
              className={Classes.img1}
              alt=""
              src="/3.jpg"
              height={1148.83}
          width={667.22}
            />
          </div>
          <h1 className="">Inception of Film and Media Council</h1>
          <p>
            Established in 2012, FMC has always been the birthplace of fantastic
            ideas. A group of visionary individuals and stalwarts comprising KT
            bhaiya, Laxman Teja bhaiya, Jatin bhaiya led to its conception. FMC
            Weekend is the flagship fest of the FMC. Its foundation was led by
            our alumni who believed that our Council wasn’t just for the event
            coverage, in fact, we ourselves deserved an event, rather a fest at
            a broader level to showcase that our clubs work hard to produce some
            of the best pieces one had ever witnessed! Imagine having a fest of
            your own, to represent your clubs, your art on such a big platform.
            And that’s how FMC Weekend was conceived.
          </p>
        </div>
        <Image
          className={Classes.img2}
          src="/about2.svg"
          alt=""
          height={1148.83}
          width={667.22}
        />
      </div>

      <div className={Classes.div3}>
        <Image
          className={Classes.img3}
          src="/about3.svg"
          alt=""
          height={1148.83}
          width={667.22}
        />
        <div className={Classes.div3in}>
          <div className={Classes.imgdiv3}>
            <Image
              className={Classes.img1}
              alt=""
              src="/4.jpg"
              height={720}
              width={480}
            />
          </div>
          <h1 className="font-sans">The one where it all began…</h1>
          <p className="font-sans">
            With the first edition of FMC Weekend hosted in 2014, we have come a
            long way with various flavors of experiences - sweet and wholesome!
            Even Covid couldn’t kill our enthusiasm to make our online editions
            of FMC Weekend a big hit! Our alumni and seniors worked day and
            night from their houses, sitting in front of the laptop screen,
            conducting competitions, events and coordinating the entire fest!
            That is a feat which we beat drums of. Our guests have included
            notable personalities like comedian Shashwat Maheshwari, the
            inspiring poet Atmandeep Khyal and mentalist Preveen Pandita who
            enamored everyone with their magic.
          </p>
        </div>
      </div>

      <div className={Classes.div4}>
        <div className={Classes.div4in}>
          <div className={Classes.imgdiv4}>
            <Image
              className={Classes.img1}
              alt=""
              src="/5.jpg"
              height={828}
              width={552}
            />
          </div>
          <h1>Unfolding further expeditions</h1>
          <p>
            Our 9th edition witnessed a series of innovative workshops like one
            on doodling by acclaimed doodling artist Santanu Hazarika,
            storytelling by renowned entrepreneur Rashmi Chadha along with an
            NFT and digital 3D art workshop by Shubhangi Raheja, a film-making
            workshop by Abhijeet Singh Parmar. With years passing to create a
            shining image of our fest, we introduced Strillion and Meraki. While
            Strillion is a pre-event where we invite an esteemed guest to unveil
            the theme of the new edition of FMC Weekend, Meraki focuses on
            interacting with amazing creators and knowing their
            journey to success.{" "}
          </p>
        </div>
        <Image
          className={Classes.img4}
          src="/about4.svg"
          alt=""
          height={1148.83}
          width={667.22}
        />
      </div>

      <Footer />
    </>
  );
};

export default About;
