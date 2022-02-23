import React, { useState } from "react";
import Sub from "./Sub";

export default props => {

    const [text, setText] = useState('Value')
    const [num, setNum] = useState(0)

    function whenToClick(generatedValue, text) {
        setNum(generatedValue)
        setText(text)
    }

    return (
        //Ways to pass child components to parent
        <div>
            <h4>{text}: {num}</h4>
            <Sub toClick={whenToClick}></Sub>
        </div>
    );
};