import React from "react";
import {useMyContext} from "@/context/MyContext";

function DisplayComponent() {
    const { inputValue } = useMyContext();

    return (
        <div>
            <p>Value from input: {inputValue}</p>
        </div>
    );
}

export default DisplayComponent;
