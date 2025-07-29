"use client"

import * as React from "react";
import "./globals.css"
import ThingCard from "../components/Thing";
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {

  const router = useRouter();

  type Project = {
    id: number;
    title: string;
    author: string;
    contentPreview: string;
  };

  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
        async function fetchProjects() {
          const res = await fetch('/mocks/projects.json');
          const data = await res.json();
          setProjects(data);
        }
        fetchProjects();
      }, []);

  const handleClick = ( id : number ) => {
    router.push(`/projects/${id}`)
  }

  return (
    <div className="flex flex-wrap justify-center items-start gap-7 max-w-9/10 m-auto min-h-screen">
        {projects.map((project) => (
          <ThingCard
            key={project.id}
            id={project.id}
            title={project.title}
            author={project.author}
            contentPreview={project.contentPreview}
            onClick={() => handleClick(project.id)}
          />
        ))}

    </div>
  
  );
}
