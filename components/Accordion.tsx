import Image from 'next/image'
import React, { Dispatch, SetStateAction, useEffect, useRef } from 'react'
import minus from "../public/minus.svg";
import plus from "../public/plus.svg";
import Classes from "./accordion.module.css";

type Props = {
    question: string,
    answer: string,
    turn: boolean[],
    setTurn: Dispatch<SetStateAction<boolean[]>>,
    idx: number
}

const Accordion = ({question, answer, turn, setTurn, idx}: Props) => {

    const contentRef = useRef<HTMLDivElement>(null);

    useEffect(()=>{
        if(contentRef.current){
            contentRef.current.style.maxHeight = turn![idx] ? `${contentRef.current.scrollHeight}px`:"0px"
        }

    },[contentRef, turn, idx])

    const toggleAccordion = () => {
        let newTurn = [...turn!]
        newTurn[idx] = !newTurn[idx]
        setTurn!(newTurn)
    }
  return (
    <div className={Classes.main}>
      <button onClick={toggleAccordion}
       className={Classes.div1}>
        <div className={Classes.div2}>
           <div className={Classes.div3}>
              <span className={Classes.ques}>{question}</span>
              <div>
               { turn![idx] ? <Image src={minus} alt="" width={20} height={20}/> :
                <Image src={plus} alt="" width={20} height={20}/>}

              </div>
           </div>
           <div ref={contentRef} className={Classes.ans}>
              <p className={Classes.divend}>
                {answer}
              </p>
           </div>
        </div>
      </button>
    </div>
  )
}

export default Accordion
