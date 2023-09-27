"use client"
import {useContext} from "react";
import {UserContext} from "@/components/ui/form";


function App() {
    const user = useContext(UserContext);

    // @ts-ignore
    return (
        <div className="grid grid-cols-12 gap-4 m-4">
            <div className="col-span-12 p-4">
                <h1>TypeClamp</h1>
            </div>
            <div className="col-span-12 md:col-span-3">
                {/*@ts-ignore*/}
                
                <h1>COmponent 5</h1>
                <h2>{`Hello ${user} again!`}</h2>
            </div>
            <div className="col-span-12 md:col-span-6">
                Typography Scale Goes Here
            </div>
            <div className="col-span-12 md:col-span-3">
                <code>
                    Some code stuffs goes here
                </code>
            </div>
        </div>
    )
}

export default App;
