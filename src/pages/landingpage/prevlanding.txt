// //This page is just for reference. DO NOT CHANGE OR DELETE THIS PAGE.

// <div id="header" ref_container={useRef}>
// <div className={Classes.div1}>
//   <Fade bottom>
//     <Image src="/fmctextlogo.png" alt="logo" className={Classes.div1_logo} objectFit='cover' width={500} height={50}/>
//     <h1 className={Classes.div1_heading}>A Fest for </h1>
//     <h1 className={Classes.div1_headanime}>
     
//     </h1>
//     {/* <Link to='/authentication'>  */}
//     {/* <Link to="/authentication">  */}
//     <Link href="/authentication">
//       <button className={Classes.register_button}>
//         <p>Register</p>
//       </button>
//     </Link>
   
//   </Fade>
// </div>

// <div className={Classes.anim}>
//   <Marquee gradient={false} speed={50}>
//     <h2>FMC WEEKEND</h2>
//     <h2>HUES IN HARMONY</h2>
//     <h2>9TH EDITION</h2>
//     <h2>IIT (BHU) VARANASI</h2>
//     <h2>10TH-12TH FEBRUARY</h2>
//   </Marquee>
// </div>
// <div className={Classes.div2}>
//   <Fade right>
//     <h1>FOR CREATIVE ENTHUSIASTS</h1>
//     <h2>FROM FIELDS OF</h2>
//     <section className={Classes.button_1}>
//       <Link href="/events/#vertical-tabpanel-4">
//         <button className={Classes.design}>
//           <p>Design</p>
//         </button>
//       </Link>
//       <Link href="/events/#photog">
//         <button className={Classes.photography}>
//           <p>Photography</p>
//         </button>
//       </Link>
//       <Link href="/events/#vertical-tab-3">
//         <button className={Classes.media}>
//           <p>Media</p>
//         </button>
//       </Link>
//     </section>
//     <section className={Classes.button_2}>
//       <Link href="/events/#vertical-tab-1">
//         <button className={Classes.cine}>
//           <p>Cinematography</p>
//         </button>
//       </Link>
//       <Link href="/events/#vertical-tab-5">
//         <button className={Classes.animation}>
//           <p>Animation</p>
//         </button>
//       </Link>
//       <Link href="/events/#vertical-tab-2">
//         <button className={Classes.outreach}>
//           <p>Outreach</p>
//         </button>
//       </Link>
//     </section>
//   </Fade>
// </div>
// <div className={Classes.eventBox}>
//   <div className={Classes.div3}>
//     <div className={Classes.banner1}>
//       <Image src={winner1} alt="" />
//     </div>
//     <Fade bottom>
//       <h1 className={Classes.events}>COMPETITIONS</h1>
//       <p className={Classes.events}>
//         Do you fancy yourself as a flawless reporter, or are you someone who can put all
//         your imagination to produce artistic designs? Do you think that you can perfectly
//         integrate the choice of lighting, lenses and special effects or is photography your
//         thing? Then what are you waiting for? The ninth edition of FMC weekend brings to you
//         an opportunity to compete in the largest digital arts festival in India and also get
//         a chance to win exciting prizes!!{' '}
//       </p>
//       <Link href="/events">
//         <button place>Explore</button>
//       </Link>
//     </Fade>
//   </div>
//   <div className={Classes.div4}>
//     <div className={Classes.banner2}>
//       <Image src={briefing} alt="" width={100} height={50}/>
//     </div>
//     <Fade bottom>
//       <h1 className={Classes.events}>WORKSHOPS</h1>
//       <p className={Classes.events}>
//         The glorious ninth edition of FMC Weekend brings you an opportunity to learn & dive
//         into the world of magical creativity and lively imagination. Attend the most
//         insightful workshop on creative writing, photography, cinematography, design, and
//         animation from the masters in the respective domain, and witness the transition from
//         amateur to apprentice.{' '}
//       </p>
//       <Link href="/events">
//         <button place>Explore</button>
//       </Link>
//     </Fade>
//   </div>
// </div>
// {/* FOR DYNAMIC DIGITS ON SCROLLING */}

// <div className={Classes.eventBox}>
//   <div className={Classes.div5}>
//     <div className={Classes.banner3}>
//       <Image src={redcarpet} alt="" width={100} height={50}/>
//     </div>

//     <Fade bottom>
//       <h1 className={Classes.events}>COMIC EVE</h1>
//       <p className={Classes.events}>
//       We present to you our most entertaining reprieve, Comic eve! Where jokes meet the humour-lover, and entertainment meets all! Hold on to your seats as world-famous performers come to amuse you, and leave your minds in wonder in your very own FMC Weekend’s Comic Eve!{' '}
//       </p>

//       <button place id="myBtn" onClick={modalState}>
//         Explore
//       </button>

//       <div className={Classes.modal} onClick={modalState} style={{ display: isShown ? 'block' : 'none' }}>
//         <div className={Classes.modalContent} >
//           <Image className={Classes.modalImage} src="/comiceve.webp" width={100} height={50}/>
//         </div>
//       </div>
//     </Fade>
//   </div>
//   <div className={Classes.div6}>
//     <div className={Classes.banner4}>
//       <Image src={banner4} alt="" />
//     </div>
//     <Fade bottom>
//       <h1 className={Classes.events}>OPEN AIR THEATRES</h1>
//       <p className={Classes.events}>
//         Gone are the days when the cinema would be just confined to 4 walls. Unconventional
//         ways or Open-Air Theatres have made their way to us under the stars, cool breezes,
//         and an undefined sense of freedom. Bringing you a step closer to these
//         unconventional experiences, FMC Weekend presents to you a blockbuster screening
//         event beneath the night sky.{' '}
//       </p>

//       <button place id="myBtn" onClick={modalState2}>
//         Explore
//       </button>

//       <div className={Classes.modal2} onClick={modalState2} style={{ display: isShown2 ? 'block' : 'none' }}>
//         <div className={Classes.modalContent2} >
     
//         </div>
//       </div>
//     </Fade>
//   </div>
// </div>
// <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
//   <div className={Classes.div7}>
//     <Fade right>
//       <h3>Over</h3>
//       <h1 id="visits"></h1>
//       <h2>
//         Creative enthusiasts visiting the fest, building a culture and community of digital
//         art
//       </h2>
//     </Fade>
//   </div>
// </ScrollTrigger>
// </div>