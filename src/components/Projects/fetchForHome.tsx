"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { getAllProjects } from "@/services/ProjectServices";
import ProjectCard from "./projectCard";
import { useRouter } from "next/navigation";
import CardLoader from "../shared/CardLoader";

export default function FetchForHome() {
  const [projects, setProjects] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const fetchedProjects = await getAllProjects();
        setProjects(fetchedProjects);
      } catch (err: any) {
        setError("Failed to load projects. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (loading) {
    return <CardLoader />;
  }

  if (error) {
    return <p className="text-center text-red-500">{error}</p>;
  }

  return (
    <section className="bg-gray-800 px-8 min-h-screen">
      <div className="container mx-auto">
        {/* Section Header */}
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-2xl font-bold text-center mb-12 flex justify-center items-center relative w-full"
        >
          <span
            className="absolute inset-0 bg-white"
            style={{
              clipPath:
                "polygon(0 50%, 100% 49%, 100% 49%, 79% 26%, 18% 27%, 0% 50%))",
            }}
          ></span>
          <span className="relative z-10 text-gray-900">Projects</span>
        </motion.h1>

        {/* Project Grid */}
        {projects.length > 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {projects.slice(0, 3).map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <p className="text-center text-gray-500">No projects found.</p>
        )}
      </div>

      {/* Explore Button */}
      <div className="flex justify-center mt-12">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="bg-gray-800 text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-gray-700 transition focus:outline-none"
          onClick={() => router.push("/projects")}
        >
          Explore All Projects
        </motion.button>
      </div>
    </section>
  );
}
