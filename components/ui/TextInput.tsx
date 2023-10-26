import React from "react";
import {useMyContext} from "@/context/MyContext";

function TextInput() {
    const { inputValue, updateInputValue } = useMyContext();

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        updateInputValue(e.target.value);
    };

    return (
        <div>
            <input type="text" value={inputValue} onChange={handleInputChange} className="text-black"/>
        </div>
    );
}

export default TextInput;
