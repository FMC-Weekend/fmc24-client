import React from "react";
import Header from "../../landingpage/Header";
import Footer from "../../landingpage/Footer";
import Link from "next/link";
import Image from "next/image";
import Classes from "../indexe.module.css";
import { useAuth } from "../../../context/auth";
import { useEffect } from "react";

const divStyle = {
  minHeight: "100px",
};

const Index = () => {
  const { state } = useAuth();
  const { isAuthenticated } = state;
  const [isLoggedin, setIsLoggedin] = React.useState(false);
  useEffect(() => {
    if (isAuthenticated) {
      setIsLoggedin(true);
    }
  }, [state]);
  return (
    <div className={Classes.FullPage}>
      <Header />
      <div>
        <div className="mt-[80px]">
          <h1 hidden>Hello</h1>
        </div>
        <div className={Classes.showMobile}>
          <div className="w-[300px]  h-[125px] flex justify-center items-center">
            <Link href="../workshops">
              <button className={Classes.backButton}>Back</button>
            </Link>
          </div>
        </div>
        <div className={Classes.MainArea}>
          <div className={Classes.TopBar}>
            <div className={Classes.BarIn}>
              <div className="w-[275px]  h-[125px] flex justify-center items-center glow-effect-blue">
                <Link
                  href="../WorkshopPages/Photography"
                  className="text-[20px] hover:text-[36px] hover:font-semibold transition-all duration-5000 ease-in-out"
                >
                  Photography
                </Link>
              </div>
              <div className="w-[275px]  h-[125px] flex justify-center items-center glow-effect-green">
                <Link
                  href="../WorkshopPages/Design"
                  className="text-[20px] hover:text-[36px] hover:font-semibold transition-all duration-5000 ease-in-out"
                >
                  Design
                </Link>
              </div>
              <div className="w-[275px]  h-[125px] flex justify-center items-center glow-effect-red">
                <Link
                  href="../WorkshopPages/Animation"
                  className="text-[20px] hover:text-[36px] hover:font-semibold transition-all duration-5000 ease-in-out"
                >
                  Animation
                </Link>
              </div>
              <div className="w-[275px]  h-[125px] flex justify-center items-center glow-effect-yellow">
                <Link
                  href="../WorkshopPages/Cinematography"
                  className="text-[20px] hover:text-[36px] hover:font-semibold transition-all duration-5000 ease-in-out"
                >
                  Cinematography
                </Link>
              </div>
              <div className="w-[275px]  h-[125px] flex justify-center items-center glow-effect-orange">
                <Link
                  href="../WorkshopPages/Media"
                  className="text-[20px] hover:text-[36px] hover:font-semibold transition-all duration-5000 ease-in-out"
                >
                  Media
                </Link>
              </div>
              <div className="w-[275px]  h-[125px] flex justify-center items-center glow-effect-purple">
             <Link href="../WorkshopPages/Outreach" className="text-[20px] hover:text-[36px] hover:font-semibold transition-all duration-5000 ease-in-out">Outreach</Link> 
             </div>
            </div>
          </div>
          <div className={Classes.MajorBod}>
            <div className={Classes.CardDe}>
              <div class="flex flex-col text-center justify-center items-center">
                <Image
                  src={"/Ankur2.jpg"}
                  width={387}
                  height={350}
                  className="rounded-tr-[25px] rounded-tl-[25px]"
                  alt="null"
                ></Image>
                <div class=" flex flex-rows h-[30px] justify-center font-bold text-3xl">
                  <div className="ml-4 mt-5 font-bold text-[30px] p-[10px]">
                    Doodling Workshop
                  </div>
                </div>
                <a
                  href="https://www.instagram.com/doodle_nath/"
                  className="text-black mt-10 italic hover:underline text-[20px]  px-8 p-1"
                >
                  -by Ankur Debnath{" "}
                </a>
                <p class="text-justify mt-4 mx-2  w-[290px]">
                Ankur Debnath, a.k.a. Doodlenath, is a versatile Kolkata-based Illustrator and Doodle Artist. His creative prowess spans Doodle art, Caricature Illustrations, and Concept Art. With a quest for self-improvement and an innate ability to experiment, Ankur forges a path toward his imaginative dreams through art.
                </p>

                <div className="my-4 align-middle justify-evenly">
                  {isLoggedin ? (
                    <a>
                      <Link href="../cart">
                        <button className="border mb-10 px-6 py-2 border-black rounded-[20px] hover:text-[15px] hover:font-semibold transition-all duration-5000 ease-in-out text-black">
                          Go to Cart
                        </button>
                      </Link>
                    </a>
                  ) : (
                    <a>
                      <Link href="../login">
                        <button className="border mb-10 px-6 py-2 border-black rounded-[20px] hover:text-[15px] hover:font-semibold transition-all duration-5000 ease-in-out text-black">
                          Login
                        </button>
                      </Link>
                    </a>
                  )}
                </div>
              </div>
            </div>

            <div className={Classes.Ghost}></div>
            <div className={Classes.Ghost}></div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Index;
