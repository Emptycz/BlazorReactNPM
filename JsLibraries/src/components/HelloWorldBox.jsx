import React, { useState } from "react";

const HelloWorldBox = () => {
    const [currentCounter, setCurrentCounter] = useState(0);

    return (
        <>
            <div>
                <h1> Hello Blazor world! </h1>
                <h2> This is react speaking! </h2>
            </div>
            <div>
                <p> useState counter: {currentCounter} </p>
                <button onClick={() => setCurrentCounter(currentCounter + 1)}> Press me! </button>
            </div>
        </>
    );
};

export default HelloWorldBox;