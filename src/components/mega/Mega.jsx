import React, { useState } from "react";

export default (props) => {

    const [number, setNumber] = useState(Array(props.megaValue).fill(0))

    function generateUncontainedNumbers(array) {
        const min = 1
        const max = 60
        const newNumber = parseInt(Math.random() * (max - min)) + min

        return array.includes(newNumber) ? generateUncontainedNumbers(array) : newNumber
    }

    function generateNumbers() {
        const newArray = Array(props.megaValue)
            .fill(0)
            .reduce(a => {
                return [...a, generateUncontainedNumbers(a)]
            }, [])
            .sort((a, b) => a - b)
        setNumber(newArray)
    }

    return (
        <>
            <h3>Mega</h3>
            <h4>{number.join(' ')}</h4>
            <button className="btn" onClick={generateNumbers}>Generate Numbers</button>
        </>
    );
};
