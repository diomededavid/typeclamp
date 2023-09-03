'use client'
import {cn} from "@/lib/utils";
import {Label} from "@/components/ui/label";


// @ts-ignore
export default function Input(props) {
    // const [value, setValue] = useState('');
    const {
        id,
        label,
        type = 'text',
        name,
        value,
        onChange,
        className
    } = props;



    return (
        <>
            <Label htmlFor={id}>{label}</Label>
            <input
                id={id}
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                className={cn(
                    "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
                    className
                )}
            />
            {/*<p>Input Value: {inputValue}</p>*/}
        </>
    )
}


export {Input};
Input.displayName = "Input"
