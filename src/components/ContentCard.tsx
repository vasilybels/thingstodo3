"use client"

import * as React from 'react';
import '../app/globals.css';

type ContentCardProps = {
    note: string;
};

export default function ContentCard ({ note } : ContentCardProps ) {
    return(
        <div className="flex-col w-40 h-40 p-3 text-xl rounded-2xl items-start bg-muted/15 backdrop-blur-lg">
            <p>{note}</p>
        </div>
    )
}