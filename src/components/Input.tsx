import * as React from 'react';
import "../app/globals.css";
import { cva } from "class-variance-authority";

const inputStyles = cva(
    "flex justify-between items-center text-primary font-medium focus:outline-none transition-ring duration-200",
    {
        variants: {
            style: {
                search: "px-3 py-3 bg-primary/5 rounded-md hover:ring-1 hover:ring-primary/40 focus:ring-1 focus:ring-primary/50",
                mknew: "",
                mknewtitle: "placeholder-primary text-2xl",
            }
        }
    }
)

type InputProps = {
    placeholder: string;
    style?: "search" | "mknew" | "mknewtitle";
}

export default function Input({ placeholder, style, ...props }: InputProps) {
    return (
        <input placeholder={placeholder} className={inputStyles({ style })}></input>
    )
}