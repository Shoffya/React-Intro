import React from "react";

export default (props) => {

    function action() {
        props.toClick(Math.random(), 'Other generated value');
    }

    return (
        <div>
            <button className="btn" onClick={action}>Change</button>
        </div>
    );
};