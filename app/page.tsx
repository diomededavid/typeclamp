"use client";
import React from "react";
import {MyProvider} from "@/context/MyContext";
import TextInput from "@/components/TextInput";
import DisplayComponent from "@/components/DisplayComponent";

function Home() {
    return (
        <div>
        <MyProvider>
            <div className="App">
                <TextInput />
                <DisplayComponent />
            </div>
        </MyProvider>

            <MyProvider>
                <div className="App">

                    <TextInput />
                    <DisplayComponent />
                </div>
            </MyProvider>
        </div>
    );
}

export default Home;
