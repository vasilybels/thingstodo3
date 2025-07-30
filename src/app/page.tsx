"use client"

import * as React from "react";
import "./globals.css"
import ThingCard from "@components/Thing";
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {

  const router = useRouter();

  type Project = {
    id: number;
    title: string;
    author: string;
    contentPreview: string[];
  };

  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    async function fetchProjects() {
      try {
        const res = await fetch('http://localhost:4000/projects');
        if (!res.ok) {
          throw new Error(`HTTP error status: ${res.status}`);
        }
        const contentType = res.headers.get("content-type");
        if (!contentType || !contentType.includes("application/json")) {
          throw new Error("Received non-JSON response");
        }
        const data = await res.json();
        setProjects(data);
        console.log(data);
      } catch (e) {
        console.error("Failed to fetch:", e);
        setProjects([]);
      }
    }
    fetchProjects();
  }, []);


  const handleClick = (id: number) => {
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
