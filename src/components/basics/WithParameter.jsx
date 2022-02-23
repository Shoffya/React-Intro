import React from "react";

export default props => {
    //props it's read only!
    //props.title = "Another title" -> An error will occur!
    return (
        <>
            <h3>{props.title}</h3>
            <p>{props.subtitle}</p>
        </>
    );
};
