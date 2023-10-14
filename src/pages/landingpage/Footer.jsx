import React, { useState, useEffect } from "react";
import Classes from "./styles/Footer.module.css";
import { ClassNames } from "@emotion/react";
import Image from "next/image";
// import axios from "axios";
import getConfig from 'next/config';
const Footer = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isMobile, setIsMobile] = useState(false);
  const { publicRuntimeConfig } = getConfig();
  // const clientId = publicRuntimeConfig.GOOGLE_CLIENT_ID;
  const backendURL = publicRuntimeConfig.NEXT_PUBLIC_REACT_APP_BACKEND_URI;
  const contactUs = () => {
    axios.post(backendURL+"/api/contact-us");
    alert("Thank you for contacting us. We will get back to you soon.")
  }
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

  function IconButton({ src, alt, iconClassName }) {
    const [isHovered, setIsHovered] = useState(false);
    const [isClicked, setIsClicked] = useState(false);
    const [textt, setTextt] = useState("");

    const handleMouseEnter = () => {
      setIsHovered(true);
    };

    const handleMouseLeave = () => {
      setIsHovered(false);
    };

    const handleClick = () => {
      setIsClicked(!isClicked);
    };
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target[0].value;
    const email = e.target[1].value;
    const message = e.target[2].value;
    var raw = JSON.stringify({
      "name": name,
      "email": email,
      "message": message
    });
    axios.post(backendURL+"/api/contact-us", {
      "name": name,
      "email": email,
      "message": message
    });
    alert(`Thanks ${name}  for contacting us. We will get back to you soon.`)
    setName("");
    setEmail("");
    setMessage("");
  };
  // const backgroundColor = isClicked
  //   ? "#A782FF"
  //   : isHovered
  //   ? "#A782FF"
  //   : "#E4B5FF";

  return (
    <>
      <div className={Classes.index}>
        <footer className={Classes.footer}>
          <div className={Classes.overlap_2}>
            <div className={Classes.footer_left}>
              <div className={Classes.group_12}>
                <Image
                  className={Classes.group_13}
                  alt="Group"
                  src="https://cdn.animaapp.com/projects/651db41e9d5ee0411eebfadc/releases/651db45865a8ebc228c37369/img/group-7198@2x.png"
                  width={100}
                  height={100}
                />
                <Image
                  className={Classes.line}
                  alt="Line"
                  src="https://cdn.animaapp.com/projects/651db41e9d5ee0411eebfadc/releases/651db45865a8ebc228c37369/img/line-58.png"
                  width={100}
                  height={100}></Image>

                <Image
                  className={Classes.FMC_WEEKEND}
                  alt="Fmc WEEKEND"
                  src="https://cdn.animaapp.com/projects/651db41e9d5ee0411eebfadc/releases/651db45865a8ebc228c37369/img/fmc-weekend.png"
                  width={100}
                  height={100}></Image>

                <Image
                  className={Classes.the_euphoria_of}
                  alt="The euphoria of"
                  src="https://cdn.animaapp.com/projects/651db41e9d5ee0411eebfadc/releases/651db45865a8ebc228c37369/img/the-euphoria-of-expression.png"
                  width={100}
                  height={100}
                ></Image>
                <Image
                  className={Classes.element_november}
                  alt="Element november"
                  src="https://cdn.animaapp.com/projects/651db41e9d5ee0411eebfadc/releases/651db45865a8ebc228c37369/img/3-5-november-2023.png"
                  width={100}
                  height={100}
                ></Image>
              </div>

              <div className={Classes.footer_flex_row}>
                <div className={Classes.group_col}>
                  <div className={Classes.text_wrapper_bold}>Home</div>
                  <div className={Classes.text_wrapper}>About Us</div>
                  <div className={Classes.text_wrapper}>Events</div>
                  <div className={Classes.text_wrapper}>Workshop</div>
                </div>
                <div className={Classes.group_col}>
                  <div className={Classes.text_wrapper_bold}>Terms of Use</div>
                  <div className={Classes.text_wrapper}>Privacy and Policy</div>
                  <div className={Classes.text_wrapper}>Accessibility</div>
                  <div className={Classes.text_wrapper}>Features</div>
                </div>
              </div>

              <div className={Classes.footer_flex_col}>
                <a href="https://www.youtube.com/@FilmMediaCouncilIITBHUVaranasi" target="_blank" rel="noopener noreferrer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="44"
                    height="44"
                    viewBox="0 0 44 44"
                    fill="none"
                    className={Classes.svg}
                  >
                    <circle
                      cx="21.9203"
                      cy="21.9203"
                      r="21.9203"
                      fill="#1A1938"
                    />
                    <path
                      d="M32.6794 15.1192C32.39 14.1063 31.6665 13.3827 30.6535 13.0933C27.6148 12.8039 24.576 12.5145 21.5372 12.6592C18.4984 12.6592 15.4597 12.8039 12.4209 13.0933C11.5527 13.3827 10.6845 14.251 10.395 15.1192C10.1056 17.4344 9.96094 19.605 9.96094 21.9202C9.96094 24.2355 10.1056 26.4061 10.395 28.7213C10.6845 29.7342 11.408 30.4578 12.4209 30.7472C15.4597 31.0366 18.4984 31.326 21.5372 31.1813C24.576 31.1813 27.6148 31.0366 30.6535 30.7472C31.6665 30.4578 32.39 29.7342 32.6794 28.7213C32.9688 26.5508 33.1135 24.2355 33.1135 21.9202C33.1135 19.605 32.9688 17.4344 32.6794 15.1192ZM18.6432 26.2614V17.5791L26.1677 21.9202L18.6432 26.2614Z"
                      fill="#6454E6"
                    />
                  </svg>
                </a>

                <a href="https://twitter.com/fmc_weekend" target="_blank" rel="noopener noreferrer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="45"
                    height="44"
                    viewBox="0 0 45 44"
                    fill="none"
                    className={Classes.svg}
                  >
                    <circle
                      cx="22.7601"
                      cy="21.9203"
                      r="21.9203"
                      fill="#1A1938"
                    />
                    <path
                      d="M34.3559 14.8224C33.7287 15.7568 32.9351 16.5889 32.0135 17.2545C32.0263 17.4465 32.0263 17.6513 32.0263 17.8561C32.0263 24.0643 27.3029 31.2198 18.6754 31.2198C16.0257 31.2198 13.5552 30.4389 11.4688 29.1077C11.84 29.1461 12.2112 29.1717 12.5952 29.1717C14.7969 29.1717 16.8193 28.4165 18.4194 27.162C16.3713 27.1236 14.6433 25.7668 14.0416 23.8979C14.3232 23.9491 14.6177 23.9875 14.9249 23.9875C15.3473 23.9875 15.7697 23.9235 16.1537 23.8211C14.016 23.3859 12.3904 21.4914 12.3904 19.213V19.1617C13.0304 19.5074 13.7472 19.725 14.5153 19.7506C13.2608 18.9057 12.4288 17.4721 12.4288 15.8336C12.4288 14.976 12.6592 14.1696 13.0688 13.4784C15.3857 16.3201 18.8418 18.1889 22.7459 18.3809C22.6691 18.0353 22.6179 17.6769 22.6179 17.3057C22.6179 14.72 24.73 12.6207 27.3157 12.6207C28.6725 12.6207 29.8886 13.1839 30.7462 14.1056C31.8086 13.888 32.8199 13.504 33.7287 12.9663C33.3703 14.0544 32.6279 14.976 31.655 15.552C32.6151 15.4496 33.5111 15.1936 34.3559 14.8224Z"
                      fill="#6454E6"
                    />
                  </svg>
                </a>


                <a href="#" target="_blank" rel="noopener noreferrer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="45"
                    height="44"
                    viewBox="0 0 45 44"
                    fill="none"
                    className={Classes.svg}
                  >
                    <circle cx="22.6" cy="21.9203" r="21.9203" fill="#1A1938" />
                    <path
                      d="M30.5564 16.9216C27.7665 12.6206 22.0705 11.3419 17.6532 14.0155C13.3522 16.6892 11.9572 22.5014 14.7471 26.8025L14.9796 27.1512L14.0496 30.6385L17.537 29.7086L17.8857 29.9411C19.3969 30.7548 21.0243 31.2198 22.6518 31.2198C24.3954 31.2198 26.1391 30.7548 27.6503 29.8248C31.9514 27.0349 33.23 21.3389 30.5564 16.9216ZM28.1153 25.8725C27.6503 26.57 27.0691 27.0349 26.2554 27.1512C25.7904 27.1512 25.2092 27.3837 22.8843 26.4537C20.9081 25.5238 19.2807 24.0126 18.1182 22.2689C17.4207 21.4552 17.072 20.409 16.9558 19.3628C16.9558 18.4328 17.3045 17.6191 17.8857 17.0379C18.1182 16.8054 18.3507 16.6892 18.5832 16.6892H19.1644C19.3969 16.6892 19.6294 16.6892 19.7456 17.1541C19.9781 17.7354 20.5594 19.1303 20.5594 19.2465C20.6756 19.3628 20.6756 19.5953 20.5594 19.7115C20.6756 19.944 20.5594 20.1765 20.4431 20.2927C20.3269 20.409 20.2106 20.6415 20.0944 20.7577C19.8619 20.874 19.7456 21.1065 19.8619 21.3389C20.3269 22.0364 20.9081 22.7339 21.4893 23.3151C22.1868 23.8963 22.8843 24.3613 23.698 24.71C23.9305 24.8263 24.1629 24.8263 24.2792 24.5938C24.3954 24.3613 24.9767 23.7801 25.2092 23.5476C25.4416 23.3151 25.5579 23.3151 25.7904 23.4314L27.6503 24.3613C27.8828 24.4776 28.1153 24.5938 28.2315 24.71C28.3478 25.0588 28.3478 25.5238 28.1153 25.8725Z"
                      fill="#6454E6"
                    />
                  </svg>
                </a>

                <a href="https://www.instagram.com/fmc_weekend/" target="_blank" rel="noopener noreferrer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="45"
                    height="44"
                    viewBox="0 0 45 44"
                    fill="none"
                    className={Classes.svg}
                  >
                    <circle
                      cx="22.4437"
                      cy="21.9203"
                      r="21.9203"
                      fill="#1A1938"
                    />
                    <path
                      d="M25.3795 21.7203C25.3795 19.9766 23.9846 18.5817 22.2409 18.5817C20.4973 18.5817 19.1023 19.9766 19.1023 21.7203C19.1023 23.464 20.4973 24.8589 22.2409 24.8589C23.9846 24.8589 25.3795 23.464 25.3795 21.7203ZM27.0069 21.7203C27.0069 24.3939 24.9145 26.4863 22.2409 26.4863C19.5673 26.4863 17.4749 24.3939 17.4749 21.7203C17.4749 19.0467 19.5673 16.9543 22.2409 16.9543C24.9145 16.9543 27.0069 19.0467 27.0069 21.7203ZM28.2856 16.7218C28.2856 17.4193 27.8206 17.8842 27.1232 17.8842C26.4257 17.8842 25.9607 17.4193 25.9607 16.7218C25.9607 16.0243 26.4257 15.5594 27.1232 15.5594C27.8206 15.5594 28.2856 16.1406 28.2856 16.7218ZM22.2409 14.0482C20.846 14.0482 17.9399 13.9319 16.7775 14.3969C15.9637 14.7457 15.2663 15.4431 15.0338 16.2568C14.5688 17.4193 14.6851 20.3254 14.6851 21.7203C14.6851 23.1152 14.5688 26.0213 15.0338 27.1838C15.2663 27.9975 15.9637 28.6949 16.7775 28.9274C17.9399 29.3924 20.9622 29.2761 22.2409 29.2761C23.5196 29.2761 26.5419 29.3924 27.7044 28.9274C28.5181 28.5787 29.0993 27.9975 29.448 27.1838C29.913 25.9051 29.7968 22.999 29.7968 21.7203C29.7968 20.4416 29.913 17.4193 29.448 16.2568C29.2156 15.4431 28.5181 14.7457 27.7044 14.5132C26.5419 13.9319 23.6359 14.0482 22.2409 14.0482ZM31.5404 21.7203V25.5563C31.5404 26.9513 31.0755 28.3462 30.0293 29.5086C28.9831 30.5548 27.5881 31.0198 26.077 31.0198H18.4049C17.0099 31.0198 15.615 30.5548 14.4526 29.5086C13.5226 28.4624 12.9414 27.0675 12.9414 25.5563V21.7203V17.8842C12.9414 16.3731 13.5226 14.9781 14.4526 13.9319C15.615 13.002 17.0099 12.4208 18.4049 12.4208H26.077C27.4719 12.4208 28.8668 12.8858 30.0293 13.9319C30.9592 14.9781 31.5404 16.3731 31.5404 17.8842V21.7203Z"
                      fill="#6454E6"
                    />
                  </svg>
                </a>
              </div>
            </div>
            <div className={Classes.footer_right}>
              <div className={Classes.contact_us}>CONTACT US</div>
              <form className={Classes.container} onSubmit={handleSubmit}>
                <label>
                  <input
                    type="text"
                    placeholder="Your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className={Classes.input_name}
                    required
                  />
                  <input
                    type="text"
                    placeholder="example@gmail.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={Classes.input_mail}

                    required
                  />
                  <input
                    type="text"
                    value={message}
                    placeholder="Tell us about anything and everything"
                    onChange={(e) => setMessage(e.target.value)}
                    className={Classes.input}
                    required
                  />
                </label>
                <button type="submit" className={Classes.button}
                // onClick={contactUs}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="33"
                    height="34"
                    viewBox="0 0 33 34"
                    fill="none"

                  >
                    <path
                      d="M1.79297 31.5817L30.2794 3.09534"
                      stroke="#4F44A7"
                      stroke-width="3"
                      stroke-linecap="round"
                    />
                    <path
                      d="M11.4961 2.15625H28.9044C30.009 2.15625 30.9044 3.05168 30.9044 4.15625V20.3124"
                      stroke="#4F44A7"
                      stroke-width="3"
                      stroke-linecap="round"
                    />
                  </svg>
                </button>
              </form>
              <div className={Classes.contact_info}>
                <div className={Classes.contact_pr}>
                  <div className={Classes.text_wrapper_head}>
                    Ritesh Soni
                  </div>

                  <div className={Classes.text_wrapper_phn}>+91 8905322603</div>
                </div>
                <div className={Classes.contact_pr}>
                  <div className={Classes.text_wrapper_head}>
                    Sundeep
                  </div>
                  <div className={Classes.text_wrapper_phn}>+91 6281536456</div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;

{
  /* <div className={Classes.group_12}>
                <img
                  className={Classes.group_13}
                  alt="Group"
                  src="https://cdn.animaapp.com/projects/651db41e9d5ee0411eebfadc/releases/651db45865a8ebc228c37369/img/group-7198@2x.png"
                />
                <img
                  className={Classes.line}
                  alt="Line"
                  src="https://cdn.animaapp.com/projects/651db41e9d5ee0411eebfadc/releases/651db45865a8ebc228c37369/img/line-58.png"
                />
                <img
                  className={Classes.FMC_WEEKEND}
                  alt="Fmc WEEKEND"
                  src="https://cdn.animaapp.com/projects/651db41e9d5ee0411eebfadc/releases/651db45865a8ebc228c37369/img/fmc-weekend.png"
                />
                <img
                  className={Classes.the_euphoria_of}
                  alt="The euphoria of"
                  src="https://cdn.animaapp.com/projects/651db41e9d5ee0411eebfadc/releases/651db45865a8ebc228c37369/img/the-euphoria-of-expression.png"
                />
                <img
                  className={Classes.element_november}
                  alt="Element november"
                  src="https://cdn.animaapp.com/projects/651db41e9d5ee0411eebfadc/releases/651db45865a8ebc228c37369/img/3-5-november-2023.png"
                />
              </div> */
}
//               <div className={Classes.frame_3}>
//                 <div className={Classes.div_wrapper}>
//                   <div className={Classes.img_wrapper}>
//                     <img
//                       className={Classes.group_14}
//                       alt="Group"
//                       src="https://cdn.animaapp.com/projects/651db41e9d5ee0411eebfadc/releases/651db45865a8ebc228c37369/img/group-7203@2x.png"
//                     />
//                   </div>
//                 </div>
//                 <div className={Classes.group_15}>
//                   <img
//                     className={Classes.group_16}
//                     alt="Group"
//                     src="https://cdn.animaapp.com/projects/651db41e9d5ee0411eebfadc/releases/651db45865a8ebc228c37369/img/group-7201@2x.png"
//                   />
//                 </div>
//                 <div className={Classes.group_15}>
//                   <img
//                     className={Classes.group_17}
//                     alt="Group"
//                     src="https://cdn.animaapp.com/projects/651db41e9d5ee0411eebfadc/releases/651db45865a8ebc228c37369/img/group-7202@2x.png"
//                   />
//                 </div>
//                 <div className={Classes.group_15}>
//                   <img
//                     className={Classes.icon_instagram}
//                     alt="Icon instagram"
//                     src="https://cdn.animaapp.com/projects/651db41e9d5ee0411eebfadc/releases/651db45865a8ebc228c37369/img/---icon--instagram-@2x.png"
//                   />
//                 </div>
//               </div>
// <div className={Classes.group_18}>
//   <div className={Classes.text_wrapper_16}>Home</div>
//   <div className={Classes.text_wrapper_17}>About Us</div>
//   <div className={Classes.text_wrapper_18}>Events</div>
//   <div className={Classes.text_wrapper_19}>Workshop</div>
// </div>
// <div className={Classes.group_19}>
//   <div className={Classes.text_wrapper_17}>Terms of Use</div>
//   <div className={Classes.text_wrapper_18}>
//     Privacy and Policy
//   </div>
//   <div className={Classes.text_wrapper_19}>Accessibility</div>
//   <div className={Classes.text_wrapper_16}>Features</div>
// </div>
//             </div>
//             <div>
// <div className={Classes.contact_us}>CONTACT US</div>
// <div className={Classes.text_wrapper_20}>Publicity Head 1</div>
// <div className={Classes.text_wrapper_21}>Publicity Head 2</div>
// <div className={Classes.text_wrapper_22}>1234567891</div>
// <div className={Classes.text_wrapper_23}>1234567891</div>
//               <div className={Classes.group_20}>
//                 <div className={Classes.overlap_group_2}>
//                   <img
//                     className={Classes.group_21}
//                     alt="Group"
//                     src="https://cdn.animaapp.com/projects/651db41e9d5ee0411eebfadc/releases/651db45865a8ebc228c37369/img/group-7210@2x.png"
//                   />
//                 </div>
//               </div>
//               <div className={Classes.group_22}>
//                 <div className={Classes.overlap_3}>
//                   <p className={Classes.p}>
//                     Tell us about anything and everything
//                   </p>
//                 </div>
