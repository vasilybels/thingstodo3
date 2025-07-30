import * as React from 'react';
import { Button } from '@components/Button';
import { cva } from 'class-variance-authority';
import SaveButton from '@components/custom-buttons/SaveButton'
import "../app/globals.css"

type TextAreaProps = {
    defaultValue?: string;
    placeholder: string;
    id?: string,
    name?: string,
    value?: string,
    style: "notes" | "describe";
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const textAreaStyles = cva(

    "flex justify-between rounded-md items-start w-[100%] text-primary p-3 transition-ring duration-200 outline-none",
    {
        variants: {
            style: {
                notes: "min-h-50 bg-base-light hover:ring-1 hover:ring-primary/40 focus:ring-1 focus:ring-primary/50",
                describe: "text-sm bg-transparent hover-ring-1 hover-ring-primary/40 focus:ring-1"
            }
        }
    }   
)

export default function TextArea ({defaultValue, placeholder, style, onChange }: TextAreaProps) {
    return(
        <div className="flex flex-col w-[100%] gap-2">
            <div>
                <textarea defaultValue={defaultValue} placeholder={placeholder} onChange={() => onChange} className={textAreaStyles({ style })} ></textarea>
            </div>
            <div className="flex justify-end">
                <SaveButton />
            </div>
        </div>
    )
}