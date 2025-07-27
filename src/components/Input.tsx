import * as React from 'react';
import "../app/globals.css";
import { cva } from "class-variance-authority";

type InputProps = {
    placeholder: string;
    style?: string;
}

export default function Input({ placeholder, style, ...props }: InputProps) {
    return (
        <input placeholder={placeholder} className={style}></input>
    )
}