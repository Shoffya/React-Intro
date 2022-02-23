import React from "react";
import Sons from "./Sons";

export default props =>

    //Ways to pass parent components to children
    <div>
        <Sons {...props}><strong>Larisa</strong></Sons>
        <Sons lastName={props.lastName}><strong>Thomas</strong></Sons>
        <Sons lastName="Gomes"><strong>Pedro</strong></Sons>
    </div>