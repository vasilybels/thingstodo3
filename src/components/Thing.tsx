import * as React from "react";
import "../app/globals.css";

type ThingProps = {
    id: number;
    title: string;
    author: string;
    lastEdited?: Date;
    contentPreview?:string[];
    onClick?: () => void; 
}

export default function ThingCard({ id, title, author, contentPreview, onClick } : ThingProps) {
    return (
        <div className="flex-col w-70 h-110 p-5 rounded-2xl items-start bg-muted/15 backdrop-blur-lg ">
            <h1 className="font-bold text-2xl hover:underline hover:cursor-default" onClick={onClick} >{title}</h1>
            <p className="font-regular rounded-2xl bg-primary/10 px-2 py-1 text-sm w-fit mt-1 hover:bg-primary/20 transition-color duration-100 hover:cursor-default">By {author}</p>
            {(Array.isArray(contentPreview) && contentPreview.length != 1) && (
                <p className="mt-5"> {contentPreview[0]}</p>
            )}
        </div>
    )
}
