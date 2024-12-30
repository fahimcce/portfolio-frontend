"use client";

import { TProject } from "@/types";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import React from "react";

const ProjectCard = ({ project }: { project: TProject }) => {
  const { id, name, photo, category, github, live } = project;
  const router = useRouter();

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="bg-gray-900 h-[450px] rounded-lg shadow-md overflow-hidden hover:shadow-2xl transition-shadow duration-300 shadow-lg flex flex-col"
    >
      <img src={photo} alt={name} className="w-full h-64 object-cover" />

      <div className="p-4 flex-grow">
        <h3 className="text-xl text-white font-bold mb-2">{name}</h3>

        <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
          {category}
        </span>
      </div>

      <div className="p-4 flex  text-white justify-between items-center mt-auto">
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:font-bold hover:underline"
        >
          GitHub
        </a>

        <a
          href={live}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:font-bold hover:underline"
        >
          Live Demo
        </a>

        <a
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => router.push(`/projects/${id}`)}
          className="hover:font-bold cursor-pointer hover:underline"
        >
          Details
        </a>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
