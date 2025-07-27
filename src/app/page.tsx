import * as React from "react";
import Button from "../components/Button";
import "./globals.css"
import ThingCard from "../components/Thing";

export default function Home() {
  return (
    <div className="flex p-5 gap-10">
      <ThingCard id={1} title="Test Thing" author="Author Name" />
      <ThingCard id={2} title="Another Thing" author="Another Author" contentPreview="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae error sapiente dolorum nostrum nulla eveniet, aliquam in vitae vero commodi laborum dolore, eos par" />
    </div>
  );
}
