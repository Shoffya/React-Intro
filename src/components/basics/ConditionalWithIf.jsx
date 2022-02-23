import React from "react";
import If from './If'

export default props => {

    return (
        <div>
            <h2>The number {props.number} is </h2>
            <If test={props.number % 2 === 0}>
                <span>even</span>
            </If>
            <If test={props.number % 2 === 1}>
                <span>odd</span>
            </If>
        </div>
    )
}