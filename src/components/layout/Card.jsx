import './Card.css'
import React from "react";

export default props =>
    <div className="Card" style={{
        borderColor: props.color || 'black'
    }}>
        <div className="Content">
            {props.children}
        </div>
        <div className="Footer" style={{
            backgroundColor: props.color || 'black'
        }}>
            {props.title}
        </div>
    </div>