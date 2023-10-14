import Image from "next/image";
import React, { Dispatch, SetStateAction } from "react";
import down from "../public/down.svg";
import Accordion from "./Accordion";
import Classes from "./layoutstyle.module.css";
type Props = {
    question :string,
    answer: string,
    idx: number
}

interface LayoutProps {
    handleClick: React.MouseEventHandler<HTMLButtonElement>,
    isSomeActive: any,
    turn: boolean[],
    setTurn: Dispatch<SetStateAction<boolean[]>>,
    data: Props[]
}

const Layout = ({handleClick, isSomeActive, data, turn, setTurn}:LayoutProps) => {
  return (
    <div className={Classes.main}>
        <span className={Classes.heading}>
            Frequently Asked Questions
        </span>
      <div className={Classes.qna}>
          <button
              className={Classes.cardi}
              onClick={handleClick}
            >
              <span className={Classes.div1}> {!isSomeActive ? "Open All" : "Close All"}</span>
              {/* <div className={Classes.div2}> */}
              <div
                className={
                  (isSomeActive ? " rotate-180" : "rotate-0")
                }
              >
               <Image src={down} alt="" width={20} height={20}/>
              </div>
              {/* </div> */}
            </button>
      </div>

      {data.map((el,i)=>{
        return (
            <div className={Classes.wid} key={"questions"+i}>
                <Accordion
                question={el.question}
                answer={el.answer}
                turn={turn}
                setTurn={setTurn}
                idx={el.idx}
                />
            </div>
        )
      })}
    </div>
  )
}

export default Layout