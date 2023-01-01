import React, { useState } from "react";
import {questions} from "./api";
import MyAccordion from "./MyAccordion";

const Accordion = () => {
    const [data, setData] = useState(questions);
  return(
<>
<section className="main_div">
    <h1>React Interview Questions</h1>
{
    data.map((curElem) => {
        // return curElem.question;
        const {id} = curElem;
        return <MyAccordion key={id} {...curElem}/>
    })
}
    </section>
</>
  );
}

export default Accordion;
