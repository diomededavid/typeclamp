// context/MyContext.tsx
"use client";
import React, {createContext, ReactNode, useContext, useState} from "react";

interface MyContextType {
    inputValue: string;
    updateInputValue: (value: string) => void;
}

const MyContext = createContext<MyContextType | undefined>(undefined);

interface MyProviderProps {
    children: ReactNode;
}

export function MyProvider({ children }: MyProviderProps) {
    const [inputValue, setInputValue] = useState("");

    const updateInputValue = (newValue: string) => {
        setInputValue(newValue);
    };

    return (
        <>
            <MyContext.Provider value={{ inputValue, updateInputValue }}>
                {children}
            </MyContext.Provider>
        </>
    );
}

export function useMyContext() {
    const context = useContext(MyContext);
    if (!context) {
        throw new Error("useMyContext must be used within a MyProvider");
    }
    return context;
}
