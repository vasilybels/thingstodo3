import * as React from 'react';
import "../app/globals.css";
import { cva } from "class-variance-authority";

const inputStyles = cva(
    "flex w-full justify-between items-center field-sizing-content text-primary focus:outline-none transition-ring duration-200",
    {
        variants: {
            style: {
                search: "px-3 py-3 h-fit font-medium bg-primary/5 rounded-md hover:ring-1 hover:ring-primary/40 focus:ring-1 focus:ring-primary/50",
                mknew: "font-medium h-fit ",
                mknewtitle: "text-4xl font-bold h-fit uppercase ring-1 ring-primary mr-5 rounded-md",
                editor: "rounded-md hover:ring-1 hover:ring-primary/40 focus:ring-1 focus:ring-primary/40 min-h-[50%] bg-base-light p-3"
            }
        }
    }
)

type InputProps = {
    placeholder?: string;
    style: "search" | "mknew" | "mknewtitle" | "editor";
    defaultValue?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
    id?: string;
}

export default function Input({ placeholder, style, defaultValue, onChange, id, ...props }: InputProps) {
    return (
        <input id={id} placeholder={placeholder} defaultValue={defaultValue} className={inputStyles({ style })} onChange={onChange}></input>
    )
}