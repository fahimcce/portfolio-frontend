"use client";

import { getAllProjects } from "@/services/ProjectServices";
import { TProject } from "@/types";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "sonner";

export default function DetailsProject() {
  const [loading, setLoading] = useState(true);
  const [project, setProject] = useState<TProject | null>(null);
  const params = useParams();
  const projectId = params?.id as string;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const projects: TProject[] = await getAllProjects();
        const currentProject = projects.find((proj) => proj.id === projectId);

        if (currentProject) {
          setProject(currentProject);
        } else {
          toast.error("Project not found");
        }
      } catch {
        toast.error("Failed to fetch project details");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [projectId]);

  //   if (loading) {
  //     return ;
  //   }

  if (!project) {
    return <p className="text-center text-red-500">Project not found.</p>;
  }

  return (
    <div className="bg-gray-900 text-white min-h-screen py-10 px-6">
      <div className="container mx-auto max-w-5xl bg-gray-800 rounded-lg shadow-lg p-6">
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Project Image */}
          <img
            src={project.photo}
            alt={project.name}
            className="w-full md:w-1/2 rounded-lg object-cover shadow-lg"
          />

          {/* Project Details */}
          <div className="flex-1">
            <h1 className="text-4xl font-bold mb-4">{project.name}</h1>
            <p className="text-sm text-gray-400 bg-gray-700 px-2 py-1 rounded-full inline-block mb-4">
              {project.category}
            </p>

            {/* Links */}
            <div className="flex flex-wrap gap-4">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded shadow-lg transition"
              >
                GitHub
              </a>
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded shadow-lg transition"
              >
                Live Demo
              </a>
            </div>
          </div>
        </div>
        <p className="text-gray-300 text-lg leading-relaxed mt-6">
          Details : {project.description}
        </p>
      </div>
    </div>
  );
}
