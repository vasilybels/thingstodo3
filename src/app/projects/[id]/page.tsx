"use client"

import { useParams } from "next/navigation"
import { useState, useEffect } from 'react';

import ContentCard from '../../../components/ContentCard';

export default function ProjectPage () {

    type Project = {
        id: number;
        title: string;
        author: string;
        contentPreview: string;
    };

    const [project, setProject] = useState<Project | null>(null);

    const params = useParams();
    const { id } = params;

    useEffect(() => {
        async function fetchProject() {
            const res = await fetch('/mocks/projects.json');
            const data: Project[] = await res.json();
            const found = data.find(p => p.id === Number(id));
            setProject(found || null);
        }
        fetchProject();
    }, [id]);

    if (!project) {
        return <p>Project not found</p>;
    }

    return (
        <div>
            {typeof project.title == "string" && 
            <ContentCard note={project.contentPreview} />}
        </div>
    );
}