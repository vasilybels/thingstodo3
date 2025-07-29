import * as React from "react";
import "../app/globals.css";
import Image from "next/image";

type ThingProps = {
    id: number;
    title: string;
    author: string;
    lastEdited?: Date;
    contentPreview?:string;
    contentImagePreview?: string;
    onClick?: () => void; 
}

export default function ThingCard({ id, title, author, contentPreview, contentImagePreview, onClick } : ThingProps) {
    return (
        <div onClick={onClick} className="flex-col w-70 h-110 p-5 rounded-2xl items-start border-1 border-primary/10 shadow-lg shadow-primary/10 hover:shadow-primary/20 transition-shadow duration-300">
            <p className="font-bold text-2xl">{title}</p>
            <p className="font-regular rounded-2xl bg-primary/10 px-2 py-1 text-sm w-fit mt-1 hover:bg-primary/20 transition-color duration-100">By {author}</p>
            {contentPreview && (
                <p className="mt-5"> {contentPreview}</p>
            )}
            {contentImagePreview && (
                <div className="mt-5">
                    <Image src={contentImagePreview} alt={title} width={100} height={100} />
                </div>
            )}
        </div>
    )
}
