import * as React from "react";
import "../app/globals.css"
import { Button } from "./Button";

export default function Footer( ) {
    return (
        <div className="flex sticky bottom-0 min-w-screen justify-center gap-10 p-5 mt-5 mx-auto text-sm">
            <p><a href="https://tailwindcss.com/docs/max-width">Footer</a></p>
            <p>More text.</p>

        </div>
    )
}
