'use client'
import {useState} from "react";
import {Input} from "@/components/ui/input"


// Common Typographic Scale Ratios:
// 1.200 — Minor Third
// 1.067 — Minor Second
// 1.125 — Major Second
// 1.200 — Minor Third
// 1.250 — Major Third
// 1.333 — Perfect Fourth
// 1.414 — Augmented Fourth
// 1.500 — Perfect Fifth
// 1.618 — The Golden Ratio

const scaleValues = [
    {id: 1, label: "Minor second", value: "1.067"},
    {id: 2, label: "Major second", value: "1.125"},
    {id: 3, label: "Minor third", value: "1.200"},
    {id: 4, label: "Major third", value: "1.250"},
    {id: 5, label: "Perfect fourth", value: "1.333"},
    {id: 6, label: "Augmented fourth", value: "1.414"},
    {id: 7, label: "Perfect Fifth", value: "1.500 "},
    {id: 8, label: "Minor Sixth", value: "minorSixth"},
    {id: 9, label: "Golden Ratio", value: "1.618"},
    {id: 10, label: "Major sixth", value: "majorSixth"},
    {id: 11, label: "Minor seventh", value: "minorSeventh"},
    {id: 12, label: "Major seventh", value: "majorSeventh"},
    {id: 13, label: "Octave", value: "octave"},
    {id: 14, label: "Custom", value: "custom"},
];

//  Resource https://medium.com/sketch-app-sources/exploring-responsive-type-scales-cf1da541be54
export default function Home() {
    const [form, setForm] = useState({
        base: 16,
    });

    // @ts-ignore
    const handleFormChange = (event) => {
        // Clone form because we need to modify it
        const updatedForm = {...form};

        // Get the name of the field that caused this change event
        // Get the new value of this field
        // Assign new value to the appropriate form field
        // @ts-ignore
        updatedForm[event.target.name] = event.target.value;

        console.log('Form changed: ', updatedForm);

        // Update state
        setForm(updatedForm);
    };

    return (
        <main className="grid grid-cols-12 gap-4 m-4">
            <div className="col-span-12 p-4">
                <h1>TypeClamp</h1>
            </div>
            <div className="col-span-12 md:col-span-3 p-4">
                <form className="flex flex-col gap-4">
                    {/*// @ts-ignore*/}
                    <Input id="base" label="Last Name"
                           name="lastName"
                           value={form.base}
                           onChange={handleFormChange} />
                </form>
            </div>

            <div className="col-span-12 md:col-span-6">
                Typography Scale Goes Here
            </div>

            <div className="col-span-12 md:col-span-3">
                <code>
                    Some code stuffs goes here
                </code>
            </div>
        </main>
    )
}

