import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import Classes from "./styles/Guests.module.css";
import Link from "next/link";
import Image from "next/image";
const textStyleBold = {
  textAlign: "center",
  color: "#FFF",
  fontFamily: "'Work Sans', sans-serif",
  fontSize: "72px",
  fontStyle: "normal",
  fontWeight: "700",
};
const textStyleBoldMobile = {
  textAlign: "center",
  color: "#FFF",
  fontFamily: "'Work Sans', sans-serif",
  fontSize: "32px",
  padding: "24px 20px",
  paddingTop: "32px",
  fontStyle: "normal",
  fontWeight: "700",
};
const textStyle = {
  textAlign: "center",
  color: "#FFF",
  fontFamily: "'Work Sans', sans-serif",
  fontSize: "24px",
  fontStyle: "normal",
  fontWeight: "400",
};
const textStyleMobile = {
  textAlign: "center",
  color: "#FFF",
  fontFamily: "'Work Sans', sans-serif",
  fontSize: "18px",
  padding: "24px 20px",
  fontStyle: "normal",
  fontWeight: "400",
};
const cardStyle = {
  width: "395.25px",
  height: "460px",
  background: "radial-gradient(circle, #ffffff, #dea4f6, #af61cd, #4d275c)",
  borderRadius: "42px",
  boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
  border: "4px solid transparent",
  margin: "0 35px",
};
const spanStyle = {
  width: "395.25px", 
  height: "460px", 
  marginLeft: "0px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-end",
  alignItems: "flex-start",
}
const imageStyle = {
  width: '395.25px',
  height: '460px',
  margin: 0,
  padding: 0, 
  objectFit: "cover"
}
const Guests = ({ imageSrc }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", checkIsMobile);
    checkIsMobile();
    return () => {
      window.removeEventListener("resize", checkIsMobile);
    };
  }, []);

  const text1 = "Explore, Learn, and Grow";
  const text2 = " in Our Workshops!";
  const text3 =
    "Discover Innovative Techniques and Gain Valuable Insights in Our";
  const text4 = "Inspiring and Interactive Workshops Today!";
  const text5 = "Click to know more!";
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 681 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 680, min: 0 },
      items: 1,
    },
  };
  return (
    <>
      {isMobile ? (
        <>
          <center>
            <div style={textStyleBoldMobile}>
              {text1}

              {text2}
            </div>
            <div style={textStyleMobile}>
              {text3}

              {text4}
            </div>
            <br />
          </center>
          <section className={Classes.sponsor} id="sponsors">
            <Container>
              <div className={Classes.sponsor_bx}>
                <h2 className={Classes.heading} style={{ fontSize: "32px" }}>
                  Our Previous Guest
                </h2>
                <Carousel
                  responsive={responsive}
                  infinite={true}
                  autoPlay={true}
                  autoPlaySpeed={2000}
                  className="slider"
                >
                  <div className={Classes.guest}>
                    <Image
                      src="https://lh4.googleusercontent.com/AwvHtx6Fz7TRjb085rYP_kZPKty8S-bh0D8n4UUYW4VYemB04nmM4bbfMx0BvynD4awDbju7LNjpNp8FdYJkZP40S_vsO-1Wjg3OLMsqwZBL0OHZUU8DxANroLc4nrYnE1aIoTv3Fp5QDy49VxkPhiQ=s320"
                      alt="Rectangle"
                      width={100}
                      height={150}
                    />
                    <div className={Classes.overlayText}>
                      <span style={{ alignContent: "start" }}>
                        PRIYANKA DEO JAIN
                      </span>
                      {/* <br/> */}
                      <p>
                        {
                          "  An alum of Harvard and LSE incumbent, as an editor at Times of India, she is a  household name in the world of Journalism, and has impacted the lives of youth around the country."
                        }
                      </p>
                    </div>
                  </div>

                  <div className={Classes.guest}>
                    <Image
                      src="https://lh4.googleusercontent.com/kmbXTwrzpbp6pXCw16elSr-hH_tKdFmXuhlXcB5mGPs4ySInqalAcNbt_v2NhyL9sED3ELfNtOCNtzacvpHoJKieSHkRos2goZJTPyk8Ss4mdYLzk2dA_2STNBiMkZS1DACtgIGQwQKexuJaYS4YkJc=s320"
                      alt="Rectangle"
                      width={100}
                      height={100}
                    />
                    <div className={Classes.overlayText}>
                      <span>ABHIJEET SINGH PARAMAR</span>
                      {/* <br/> */}
                      <p> 
                        {
                          "An alumnus of IIT (BHU), he is the mind behind renowned and critically acclaimed series like Rocket Boys, Panchayat, Gullak and Cheesecake!. Having experience working as a writer, director and producer at renowned names such as TVF, he has begun his own venture Feel Good Films."
                        }{" "}
                      </p>
                    </div>
                  </div>

                  <div className={Classes.guest}>
                    <Image
                      src="https://lh6.googleusercontent.com/X1YPPXySU-zL50153rU63fqJMy1khtIEnuErUw_5PQf4Bpvuw40cjw4ZpUn2Ywably-S4ah_YugXwhE4rPw2Rv3JyXR-u0OJULj7qhOSpoJlrO2HPGf7fW1YfbqnXCLoQeIOCkvNbmWhOsbt-sCG2XI=s320"
                      alt="Rectangle"
                      width={100}
                      height={100}
                    />
                    <div className={Classes.overlayText}>
                      <span>SANTANU HAZARIKA</span>
                      {/* <br/> */}
                      <p>
                        {
                          "A self taught multidisciplinary visual artist, Santanu Hazarika is 2014 winner of Red Bull  World Doodle Art Championship. With his electric art talent encompassing genres such as graphic novels, urban art, sci-fi, fantasy and many more, he has partnered with numerous brands such as Adidas, Reebok and RedBull"
                        }{" "}
                      </p>
                    </div>
                  </div>
                  <div className={Classes.guest}>
                    <Image
                      src="https://lh4.googleusercontent.com/OLOi2_Fz0deAoxU4EMSQswX7IBOlrS9-JOh-OK5boRTKwuTfSALeyxchQCVIx62sBcDaBu3y4sDSOAdxyk_4IF8eok_3B7KqP1nr8WeVu6GlIgMOBeRC4flM2UeD340dk98-FWO85G_Y0rsT3DJfZNQ=s320"
                      alt="Rectangle"
                      width={100}
                      height={100}
                    />
                    <div className={Classes.overlayText}>
                      <span>SARVAPRIYA SANGWAN</span>
                      {/* <br/> */}
                      <p>
                        {
                          "Ramnath Goenka Awards winner, incumbent BBC youtube India Head, Sarvapriya Sangwan is a renowned name in the field of Hindi journalism. Initially a student of dentistry, her passion for journalism led her to work for NDTV and later join BBC Hindi, she is an inspiration for many."
                        }{" "}
                      </p>
                    </div>
                  </div>
                  <div className={Classes.guest}>
                    <Image
                      src="https://lh6.googleusercontent.com/7MtJeZ1u5vGFxY6d6Ewqe1-iUlKQ4ae8RrpZcZ1kM8RUhPoKLK7A_cnqMpaZD-N0xKRSvfV1OYJc5FsLIOJQeNm3zdNABW19HxUffbVFWyserV1eVwkFw6rMfleVWt3BPmOdzWIZfiJHN2vl0JM3pCM=s320"
                      alt="Rectangle"
                      width={100}
                      height={100}
                    />
                    <div className={Classes.overlayText}>
                      <span>AMBRISH VERMA</span>
                      {/* <br/> */}
                      <p>
                        {
                          "NCR days fame, Ambrish Verma is an actor, writer, and director hailing from gurgaon. He wrote, directed, and starred in the detective-drama series DUDE (2021) and the drama series NCR Days (2022). As an actor, he has starred in rom-com series Wrong Number (2020)."
                        }{" "}
                      </p>
                    </div>
                  </div>
                  <div className={Classes.guest}>
                    <Image
                      src="https://lh4.googleusercontent.com/fDcya8oQIy3EJfmau4PvVqGENP0J-JPO4uQqnxXaNRCKcvhIqp_Q6TYKV77mVjQi1QtNgtnu_MZQXqBTMm4dLY8itMvWEu5rWvYYNN8_GAnwT1z-2me-9gTBc8-mHRRCf-TyLB8JFm9EuyAFYqi8UcM=s320"
                      alt="Rectangle"
                      width={100}
                      height={100}
                    />
                    <div className={Classes.overlayText}>
                      <span>SUNDEEP SHARMA</span>
                      {/* <br/> */}
                      <p>
                        {
                          "Sandeep Sharma, a comedic virtuoso, shines on multiple fronts. Best known for his uproarious stand-up acts, he's also a versatile actor featured in Bollywood's Ludo. Whether commanding the stage with corporate humor or bringing characters to life on screen, Sandeep's comedic charm captivates audiences worldwide"
                        }{" "}
                      </p>
                    </div>
                  </div>
                  <div className={Classes.guest}>
                    <Image
                      src="https://lh3.googleusercontent.com/urEVL1Xw8Zt6NTdipoCMhTB93eQIzx9c2GptLZzAVEtI_OsMYtjZ61PSdWebTuiycdCC0bHJzRJ2UeTpwKydKZ24U41_cuisEHSJZv8V3pXq0XkwbUh0iRKM0y5I4YiNB8yrqdVkhN07sLbOi0UiHTo=s320"
                      alt="Rectangle"
                      width={100}
                      height={100}
                    />
                    <div className={Classes.overlayText}>
                      <span>RASHMI CHADHA</span>
                      {/* <br/> */}
                      <p>
                        {
                          " Rashmi Chadha, a captivating storyteller and TEDx speaker, is not just a travel maven but also a cultural ambassador of India. Through her brainchild, Wovoyage, she empowers women travelers worldwide, offering safe accommodations, transport, and tours. Rashmi's innovative initiatives, like the Wovoyage Audio Tour Guide, blend artistry and exploration, making travel in India smarter, budget-friendly, and deeply cultural."
                        }{" "}
                      </p>
                    </div>
                  </div>
                  <div className={Classes.guest}>
                    <Image
                      src="https://lh5.googleusercontent.com/Hxq16HZVDbmlH1cQBDjmlLMD07em9UzdflMVJ3VnUWcqT-GZL6tRudF6BNW238iJEs1plnvh88XtJLZPYe-C1xMvVcCV45vZAaJjrPpHt6rqFdmplfmH-P5ciCzlSiG2aKvUK55TxxJOFY063yemkhs=s320"
                      alt="Rectangle"
                      width={100}
                      height={100}
                    />
                    <div className={Classes.overlayText}>
                      <span>MANISH DEO</span>
                      {/* <br/> */}
                      <p>
                        {
                          "Manish Deo, a pioneering photographer and influencer, turned his passion into an extraordinary five-year journey. His captivating visuals have earned accolades, including the Indonesia Sustainable Tourism Award, and collaborations with tourism boards, showcasing global beauty.s. His self-taught artistry, dedication, and experimentation shine through, presenting the world's beauty one frame at a time."
                        }{" "}
                      </p>
                    </div>
                  </div>
                  <div className={Classes.guest}>
                    <Image
                      src="https://lh5.googleusercontent.com/W2n7NqxH1Rx5ruLkAF3CTOHcD_lFdiZb_GHXJ-3_VjvfrYn3GZVSdvhi3-eYIeFA_BI11FJ1ndWDjnmwSH4Vj6GI7wGVg3v6ibGaUaQ20dWbu7o7jH7lZUwfZKjnXFKmWT2Etg6wjU_QalOuSl12tmM=s320"
                      alt="Rectangle"
                      width={100}
                      height={100}
                    />
                    <div className={Classes.overlayText}>
                      <span>ARVIND PATWAL</span>
                      {/* <br/> */}
                      <p>
                        {
                          "Arvind Patwal, a visionary hailing from New Delhi, India, embarks on a captivating journey to document stories worldwide. His multifaceted talents encompass travel, aerial, films, photography, and lifestyle. With a lens that transcends borders, Arvind weaves narratives that resonate with audiences globally, capturing the essence of our diverse planet."
                        }{" "}
                      </p>
                    </div>
                  </div>
                  <div className={Classes.guest}>
                    <Image
                      src="https://lh6.googleusercontent.com/2-5QuEXJtUpCGE1PY6rgd46GTMh6WpkHKmsuxTvHNu27TcZyHu-sFZ0TJ3pGOTzn9t1qEpoO2AoyzWrlKjF1R0JUAkQFHmASg9Jy-g1LRaiNXsf2Mufw28Jo0byPvXm7_NHUE6ucGEtGgfK-5JJYZvM=s320"
                      alt="Rectangle"
                      width={100}
                      height={100}
                    />
                    <div className={Classes.overlayText}>
                      <span>SHUBHAM SHARMA</span>
                      {/* <br/> */}
                      <p>
                        {
                          "Meet Shubham Sharma, the lens maestro that captures life's essence through his photography. From vibrant streets to captivating portraits, he breathes life into every frame. As a photographer and influencer, his artistry transcends boundaries, making him a sought-after visual storyteller for any project"
                        }{" "}
                      </p>
                    </div>
                  </div>
                </Carousel>
                <Link href="/comingsoon">
                  <button className="border-solid border-2 mt-6 text-white rounded-3xl h-10 w-60 text-lg transition duration-300 transform  hover:shadow-xl hover:text-blue-950 bg-transparent hover:bg-white">
                    {text5}
                  </button>
                </Link>
              </div>
            </Container>
          </section>
        </>
      ) : (
        <>
          <center>
            <div style={textStyleBold}>
              {text1}
              <br />
              {text2}
            </div>
            <div style={textStyle}>
              {text3}
              <br />
              {text4}
            </div>
            <br />
          </center>
          <section className={Classes.sponsor} id="sponsors">
            <Container>
              <div className={Classes.sponsor_bx}>
                <h2 className={Classes.heading} style={{ fontSize: "32px" }}>
                  Our Previous Guests
                </h2>
                <Carousel
                  responsive={responsive}
                  infinite={true}
                  autoPlay={true}
                  autoPlaySpeed={2000}
                  className="slider mt-[40px]"
                >
                  <div className={Classes.guest} style={cardStyle}>
                    <Image
                        src="https://lh4.googleusercontent.com/AwvHtx6Fz7TRjb085rYP_kZPKty8S-bh0D8n4UUYW4VYemB04nmM4bbfMx0BvynD4awDbju7LNjpNp8FdYJkZP40S_vsO-1Wjg3OLMsqwZBL0OHZUU8DxANroLc4nrYnE1aIoTv3Fp5QDy49VxkPhiQ=s320"
                        alt="Rectangle"
                        width={1000}
                        height={1500}
                        style={imageStyle}
                    />
                    <div className={Classes.overlayText} style={spanStyle}>
                        <span className="font-work-sans font-semibold text-left pl-6" style={{fontSize: "32px"}}>PRIYANKA DEO JAIN</span>
                        {/* <br/> */}
                        <p className="text-left font-semibold font-work-sans pl-6 pr-8 pb-8" style={{fontSize: "16px"}}>
                            {
                                "  An alum of Harvard and LSE incumbent, as an editor at Times of India, she is a  household name in the world of Journalism, and has impacted the lives of youth around the country."
                            }
                        </p>
                    </div>
                  </div>


                  <div className={Classes.guest} style={cardStyle}>
                    <Image
                      src="https://lh4.googleusercontent.com/kmbXTwrzpbp6pXCw16elSr-hH_tKdFmXuhlXcB5mGPs4ySInqalAcNbt_v2NhyL9sED3ELfNtOCNtzacvpHoJKieSHkRos2goZJTPyk8Ss4mdYLzk2dA_2STNBiMkZS1DACtgIGQwQKexuJaYS4YkJc=s320"
                      alt="Rectangle"
                      width={1000}
                      height={1000}
                      style={imageStyle}
                    />
                    <div className={Classes.overlayText} style={spanStyle}>
                      <span className="font-work-sans font-semibold text-left pl-6" style={{fontSize: "32px"}}>ABHIJEET SINGH PARAMAR</span>
                      {/* <br/> */}
                      <p className="text-left font-semibold font-work-sans pl-6 pr-8 pb-8" style={{fontSize: "16px"}}>
                        {
                          "An alumnus of IIT (BHU), he is the mind behind renowned and critically acclaimed series like Rocket Boys, Panchayat, Gullak and Cheesecake!. Having experience working as a writer, director and producer at renowned names such as TVF, he has begun his own venture Feel Good Films."
                        }{" "}
                      </p>
                    </div>
                  </div>

                  <div className={Classes.guest} style={cardStyle}>
                    <Image
                      src="https://lh6.googleusercontent.com/X1YPPXySU-zL50153rU63fqJMy1khtIEnuErUw_5PQf4Bpvuw40cjw4ZpUn2Ywably-S4ah_YugXwhE4rPw2Rv3JyXR-u0OJULj7qhOSpoJlrO2HPGf7fW1YfbqnXCLoQeIOCkvNbmWhOsbt-sCG2XI=s320"
                      alt="Rectangle"
                      width={1000}
                      height={1000}
                      style={imageStyle}
                    />
                    <div className={Classes.overlayText} style={spanStyle}>
                      <span className="font-work-sans font-semibold text-left pl-6" style={{fontSize: "32px"}}>SANTANU HAZARIKA</span>
                      {/* <br/> */}
                      <p className="text-left font-semibold font-work-sans pl-6 pr-8 pb-8" style={{fontSize: "16px"}}>
                        {
                          "A self taught multidisciplinary visual artist, Santanu Hazarika is 2014 winner of Red Bull  World Doodle Art Championship. With his electric art talent encompassing genres such as graphic novels, urban art, sci-fi, fantasy and many more, he has partnered with numerous brands such as Adidas, Reebok and RedBull"
                        }{" "}
                      </p>
                    </div>
                  </div>
                  <div className={Classes.guest} style={cardStyle}>
                    <Image
                      src="https://lh4.googleusercontent.com/OLOi2_Fz0deAoxU4EMSQswX7IBOlrS9-JOh-OK5boRTKwuTfSALeyxchQCVIx62sBcDaBu3y4sDSOAdxyk_4IF8eok_3B7KqP1nr8WeVu6GlIgMOBeRC4flM2UeD340dk98-FWO85G_Y0rsT3DJfZNQ=s320"
                      alt="Rectangle"
                      width={1000}
                      height={2000}
                      style={imageStyle}
                    />
                    <div className={Classes.overlayText} style={spanStyle}>
                      <span className="font-work-sans font-semibold text-left pl-6" style={{fontSize: "32px"}}>SARVAPRIYA SANGWAN</span>
                      {/* <br/> */}
                      <p className="text-left font-semibold font-work-sans pl-6 pr-8 pb-8" style={{fontSize: "16px"}}>
                        {
                          "Ramnath Goenka Awards winner, incumbent BBC youtube India Head, Sarvapriya Sangwan is a renowned name in the field of Hindi journalism. Initially a student of dentistry, her passion for journalism led her to work for NDTV and later join BBC Hindi, she is an inspiration for many."
                        }{" "}
                      </p>
                    </div>
                  </div>
                  <div className={Classes.guest} style={cardStyle}>
                    <Image
                      src="https://lh6.googleusercontent.com/7MtJeZ1u5vGFxY6d6Ewqe1-iUlKQ4ae8RrpZcZ1kM8RUhPoKLK7A_cnqMpaZD-N0xKRSvfV1OYJc5FsLIOJQeNm3zdNABW19HxUffbVFWyserV1eVwkFw6rMfleVWt3BPmOdzWIZfiJHN2vl0JM3pCM=s320"
                      alt="Rectangle"
                      width={1000}
                      height={1000}
                      style={imageStyle}
                    />
                    <div className={Classes.overlayText} style={spanStyle}>
                      <span className="font-work-sans font-semibold text-left pl-6" style={{fontSize: "32px"}}>AMBRISH VERMA</span>
                      {/* <br/> */}
                      <p className="text-left font-semibold font-work-sans pl-6 pr-8 pb-8" style={{fontSize: "16px"}}>
                        {
                          "NCR days fame, Ambrish Verma is an actor, writer, and director hailing from gurgaon. He wrote, directed, and starred in the detective-drama series DUDE (2021) and the drama series NCR Days (2022). As an actor, he has starred in rom-com series Wrong Number (2020)."
                        }{" "}
                      </p>
                    </div>
                  </div>
                  <div className={Classes.guest} style={cardStyle}>
                    <Image
                      src="https://lh4.googleusercontent.com/fDcya8oQIy3EJfmau4PvVqGENP0J-JPO4uQqnxXaNRCKcvhIqp_Q6TYKV77mVjQi1QtNgtnu_MZQXqBTMm4dLY8itMvWEu5rWvYYNN8_GAnwT1z-2me-9gTBc8-mHRRCf-TyLB8JFm9EuyAFYqi8UcM=s320"
                      alt="Rectangle"
                      width={1000}
                      height={1000}
                      style={imageStyle}
                    />
                    <div className={Classes.overlayText} style={spanStyle}>
                      <span className="font-work-sans font-semibold text-left pl-6" style={{fontSize: "32px"}}>SUNDEEP SHARMA</span>
                      {/* <br/> */}
                      <p className="text-left font-semibold font-work-sans pl-6 pr-8 pb-8" style={{fontSize: "16px"}}>
                        {
                          "Sandeep Sharma, a comedic virtuoso, shines on multiple fronts. Best known for his uproarious stand-up acts, he's also a versatile actor featured in Bollywood's Ludo. Whether commanding the stage with corporate humor or bringing characters to life on screen, Sandeep's comedic charm captivates audiences worldwide"
                        }{" "}
                      </p>
                    </div>
                  </div>
                  <div className={Classes.guest} style={cardStyle}>
                    <Image
                      src="https://lh3.googleusercontent.com/urEVL1Xw8Zt6NTdipoCMhTB93eQIzx9c2GptLZzAVEtI_OsMYtjZ61PSdWebTuiycdCC0bHJzRJ2UeTpwKydKZ24U41_cuisEHSJZv8V3pXq0XkwbUh0iRKM0y5I4YiNB8yrqdVkhN07sLbOi0UiHTo=s320"
                      alt="Rectangle"
                      width={1000}
                      height={1000}
                      style={imageStyle}
                    />
                    <div className={Classes.overlayText} style={spanStyle}>
                      <span className="font-work-sans font-semibold text-left pl-6" style={{fontSize: "32px"}}>RASHMI CHADHA</span>
                      {/* <br/> */}
                      <p className="text-left font-semibold font-work-sans pl-6 pr-8 pb-8" style={{fontSize: "16px"}}>
                        {
                          " Rashmi Chadha, a captivating storyteller and TEDx speaker, is not just a travel maven but also a cultural ambassador of India. Through her brainchild, Wovoyage, she empowers women travelers worldwide, offering safe accommodations, transport, and tours. Rashmi's innovative initiatives, like the Wovoyage Audio Tour Guide, blend artistry and exploration, making travel in India smarter, budget-friendly, and deeply cultural."
                        }{" "}
                      </p>
                    </div>
                  </div>
                  <div className={Classes.guest} style={cardStyle}>
                    <Image
                      src="https://lh5.googleusercontent.com/Hxq16HZVDbmlH1cQBDjmlLMD07em9UzdflMVJ3VnUWcqT-GZL6tRudF6BNW238iJEs1plnvh88XtJLZPYe-C1xMvVcCV45vZAaJjrPpHt6rqFdmplfmH-P5ciCzlSiG2aKvUK55TxxJOFY063yemkhs=s320"
                      alt="Rectangle"
                      width={1000}
                      height={1000}
                      style={imageStyle}
                    />
                    <div className={Classes.overlayText} style={spanStyle}>
                      <span className="font-work-sans font-semibold text-left pl-6" style={{fontSize: "32px"}}>MANISH DEO</span>
                      {/* <br/> */}
                      <p className="text-left font-semibold font-work-sans pl-6 pr-8 pb-8" style={{fontSize: "16px"}}>
                        {
                          "Manish Deo, a pioneering photographer and influencer, turned his passion into an extraordinary five-year journey. His captivating visuals have earned accolades, including the Indonesia Sustainable Tourism Award, and collaborations with tourism boards, showcasing global beauty.s. His self-taught artistry, dedication, and experimentation shine through, presenting the world's beauty one frame at a time."
                        }{" "}
                      </p>
                    </div>
                  </div>
                  <div className={Classes.guest} style={cardStyle}>
                    <Image
                      src="https://lh5.googleusercontent.com/W2n7NqxH1Rx5ruLkAF3CTOHcD_lFdiZb_GHXJ-3_VjvfrYn3GZVSdvhi3-eYIeFA_BI11FJ1ndWDjnmwSH4Vj6GI7wGVg3v6ibGaUaQ20dWbu7o7jH7lZUwfZKjnXFKmWT2Etg6wjU_QalOuSl12tmM=s320"
                      alt="Rectangle"
                      width={2000}
                      height={2000}
                      style={imageStyle}
                    />
                    <div className={Classes.overlayText} style={spanStyle}>
                      <span className="font-work-sans font-semibold text-left pl-6" style={{fontSize: "32px"}}>ARVIND PATWAL</span>
                      {/* <br/> */}
                      <p className="text-left font-semibold font-work-sans pl-6 pr-8 pb-8" style={{fontSize: "16px"}}>
                        {
                          "Arvind Patwal, a visionary hailing from New Delhi, India, embarks on a captivating journey to document stories worldwide. His multifaceted talents encompass travel, aerial, films, photography, and lifestyle. With a lens that transcends borders, Arvind weaves narratives that resonate with audiences globally, capturing the essence of our diverse planet."
                        }{" "}
                      </p>
                    </div>
                  </div>
                  <div className={Classes.guest} style={cardStyle}>
                    <Image
                      src="https://lh6.googleusercontent.com/2-5QuEXJtUpCGE1PY6rgd46GTMh6WpkHKmsuxTvHNu27TcZyHu-sFZ0TJ3pGOTzn9t1qEpoO2AoyzWrlKjF1R0JUAkQFHmASg9Jy-g1LRaiNXsf2Mufw28Jo0byPvXm7_NHUE6ucGEtGgfK-5JJYZvM=s320"
                      alt="Rectangle"
                      width={3000}
                      height={2000}
                      style={imageStyle}
                    />
                    <div className={Classes.overlayText} style={spanStyle}>
                      <span className="font-work-sans font-semibold text-left pl-6" style={{fontSize: "32px"}}>SHUBHAM SHARMA</span>
                      {/* <br/> */}
                      <p className="text-left font-semibold font-work-sans pl-6 pr-8 pb-8" style={{fontSize: "16px"}}>
                        {
                          "Meet Shubham Sharma, the lens maestro that captures life's essence through his photography. From vibrant streets to captivating portraits, he breathes life into every frame. As a photographer and influencer, his artistry transcends boundaries, making him a sought-after visual storyteller for any project"
                        }{" "}
                      </p>
                    </div>
                  </div>
                </Carousel>
                <Link href="/comingsoon">
                  <button className="border-solid border-2 mt-6 text-white rounded-3xl h-10 w-60 text-lg transition duration-300 transform  hover:shadow-xl hover:text-blue-950 bg-transparent hover:bg-white">
                    {text5}
                  </button>
                </Link>
              </div>
            </Container>
          </section>
        </>
      )}
    </>
  );
};

export default Guests;
