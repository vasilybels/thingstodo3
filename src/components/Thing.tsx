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
        <div className="flex-col w-70 h-90 p-5 rounded-2xl items-start justify-start bg-muted/15 backdrop-blur-lg transition-ring duration-200 hover:ring-1 hover:ring-primary/20" onClick={onClick}>
            <h1 className="font-bold text-2xl hover:underline hover:cursor-default">{title}</h1>
            <p className="font-regular mt-1 rounded-2xl bg-primary/10 px-2 py-1 text-sm w-fit hover:bg-primary/15 transition-color duration-200 hover:cursor-default">By {author}</p>
            <div className="flex flex-wrap w-full p-3 items-start justify-center">
                {Array.isArray(contentPreview) && (
                    contentPreview.map((note, idx) =>
                        <p className="font-regular rounded-2xl bg-primary/10 px-2 py-1 mx-1 my-0.5 text-sm w-fit hover:bg-primary/15 transition-color duration-200 hover:cursor-default" key={idx}>{note}</p>
                ))}
            </div>
        </div>
    )
}
