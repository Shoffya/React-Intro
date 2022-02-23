import React from "react";

export default props => {

    return (
        <div>
            <h2>The number {props.number} is </h2>
            {props.number % 2 === 0 ?
                <span>even</span> :
                <span>odd</span>}
        </div>
    )
}