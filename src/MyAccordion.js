import React, { useState } from "react";

const MyAccordion = ({question, answer}) => {
    const [show, setShow] = useState(false);
    const showAns = () => {
        setShow(!show);
    }
  return(
<>
{/* <h1>{question}</h1>
<p>{answer}</p> */}
<div className="main_heading">
    <p onClick={showAns}>{show ?"➖": "➕"}</p>
    <h3>{question}</h3>
</div>
{/* <p>{answer}</p> */}
{show && <p className="answers">{answer}</p>}
</>
  );
}

export default MyAccordion;
