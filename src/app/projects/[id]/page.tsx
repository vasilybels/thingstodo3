"use client"

import { useParams } from "next/navigation"
import { useState, useEffect } from 'react';
import ContentCard from '@components/ContentCard';
import Button from '@components/Button';
import Input from '@components/Input';
import { useRouter } from 'next/navigation';
import { SquarePen, Check } from 'lucide-react';

export default function ProjectPage () {
    const r = useRouter();

    type Project = {
        id: string;
        title: string;
        author: string;
        contentPreview: string[] | string;
    };

    const [project, setProject] = useState<Project | null>(null);
    const [isEditing, setIsEditing] = useState(false);
    const [editedTitle, setEditedTitle] = useState("");

    const params = useParams();
    const { id } = params;

    useEffect(() => {
        async function fetchProject() {
            const res = await fetch(`http://localhost:4000/projects/${id}`);
            const data = await res.json();
            setProject(data);
        }
        fetchProject();
    }, [id]);

    if (!project) {
        return;
    }

    const handleSave = async () => {
        const res = await fetch(`http://localhost:4000/projects/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ title: editedTitle }),
        });

        if (res.ok) {
            // Optimistically update local state
            setProject(prev => prev ? { ...prev, title: editedTitle } : prev);
            setIsEditing(false);
        } else {
            console.error("Failed to update project title.");
        }
    };

    const handleCancel = () => {
        setIsEditing(false);
    }

    return (
        <div className="flex flex-col items-start min-h-screen max-w-[70rem] w-full m-auto">
            <div className="flex mb-5">
                <Button intent="edit" onClick={r.back}>Back</Button>
            </div>
            <div className="flex w-full items-center justify-between">
                
                    {isEditing ? (
                        <>
                            <Input 
                                id="project-title-input"
                                defaultValue={editedTitle}
                                onChange={e => {
                                    setEditedTitle(e.target.value);
                                    console.log("Edited title:", e.target.value);
                                }}
                                onKeyDown={(e) => {
                                    if (e.key == "Enter") {
                                        setIsEditing(false);
                                        e.preventDefault();
                                        e.stopPropagation();
                                        setTimeout(() => {
                                            handleSave();
                                        }, 0);
                                    }
                                }}
                                style="mknewtitle"
                            />
                                <div className="flex gap-1">
                                <Button intent="edit" onClick={() => handleSave()}>
                                    <Check className="h-5 w-5 mr-1"/>Save
                                </Button>
                                <Button intent="edit">Clear</Button>
                                <Button intent="editdestructive" onClick={handleCancel}>Cancel</Button>
                            </div>
                        </>
                    ) : (
                        <>
                            <h1 className="text-4xl font-bold uppercase">{project.title}</h1>
                            <div className="flex gap-1">
                                <Button intent="edit" onClick={() => {
                                    setEditedTitle(project.title);
                                    setIsEditing(true);
                                }}>
                                    <SquarePen className="h-5 w-5 mr-1"/>Edit
                                </Button>
                                <Button intent="edit">Archive</Button>
                                <Button intent="edit">Share</Button>
                            </div>
                        </>
                    )}
                
            </div>

            <div className="flex gap-5 flex-wrap">
                {Array.isArray(project.contentPreview) &&
                project.contentPreview.map((note) => <ContentCard key={note} note={note}/>)}
                {typeof project.contentPreview == "string" &&
                <p>{project.contentPreview}</p>}
            </div>
        </div>
    );
}
