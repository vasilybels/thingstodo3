import * as React from "react";
import "../app/globals.css";

type ThingProps = {
    id: number;
    title: string;
    author: string;
    lastEdited?: Date;
    contentPreview?:string;
    onClick?: () => void; 
}

export default function ThingCard({ id, title, author, contentPreview, ...props} : ThingProps) {
    return (
        <div id="main-thing-card-div" className="flex-col w-80 h-100 items-start border-1 border-primary shadow-sm">
            <p className="font-bold">{title}</p>
            <p className="font-medium">By {author}</p>
            {contentPreview && (
                <p className="font-light"> {contentPreview}</p>
            )}
        </div>
    )
}