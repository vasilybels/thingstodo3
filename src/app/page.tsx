"use client"

import * as React from "react";
import "./globals.css"
import ThingCard from "../components/Thing";

export default function Home() {

  const thingsList = [
    {
      id: 1,
      title: "Dinner party on Saturday",
      author: "me",
      contentPreview: "1. Buy groceries\n2. Cook food\n3. Invite friends\n4. Enjoy the evening"
    }
    ,
    {
      id: 2,
      title: "Japan trip that may happen in 2025",
      author: "Strange Individuals",
      contentPreview: "Flights -- Vasily\n Hotels -- Malu\n Itinerary -- Angela\n Budget -- Edward\n"
    },
    {
      id: 3,
      title: "Building a React app from scratch",
      author: "Vasily Bels",
      
    },
    {
      id: 4,
      title: "Read 'Clean Code'",
      author: "Vasily Bels",
      contentPreview: "Chapters 1-3: Principles\nChapters 4-6: Patterns\nTake notes and summarize"
    },
    {
      id: 5,
      title: "Organize workspace",
      author: "me",
      contentPreview: "Declutter desk\nSort cables\nSet up monitor stand\nClean keyboard"
    },
    {
      id: 6,
      title: "Plan weekend hike",
      author: "Angela",
      contentPreview: "Choose trail\nPack snacks\nInvite friends\nCheck weather forecast"
    },
  ]
  return (
    <div className="flex flex-wrap justify-center items-start gap-7 max-w-9/10 m-auto min-h-screen">
        {thingsList.map((thing) => (
          <ThingCard
            key={thing.id}
            id={thing.id}
            title={thing.title}
            author={thing.author}
            contentPreview={thing.contentPreview}
          />
        ))}

    </div>
  
  );
}
