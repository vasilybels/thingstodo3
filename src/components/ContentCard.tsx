"use client"

import * as React from 'react';
import '../app/globals.css';

type ContentCardProps = {
    note: string;
};

export default function ContentCard ({ note } : ContentCardProps ) {
    return(
        <div className="flex-col w-50 h-50 p-5 text-5xl rounded-2xl items-start border-1 border-primary/10 shadow-lg shadow-primary/10 hover:shadow-primary/20 transition-shadow duration-300">
            <p>{note}</p>
        </div>
    )
}