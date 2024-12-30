"use client";

import { motion } from "framer-motion";

export default function SkillsShowcase() {
  const skillsLeft = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Next.js",
    "Zustand",
    "Tailwind CSS",
    "Framer Motion",
    "DOM",
    "Unit Test",
    "Performance Optimize",
    "SSR",
  ];

  const skillsRight = [
    "Node",
    "Express",
    "REST API",
    "SQL",
    "Postgres",
    "JWT/OAuth",
    "Prisma ORM",
    "DB Modeling",
    "Stripe Payments",
    "Bun",
    "Zod Validation",
  ];

  return (
    <section className="h-[80vh] py-16 px-8">
      <div className="container mx-auto flex flex-col items-center">
        {/* Title */}
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative flex items-center justify-center mb-12"
        >
          <div className="bg-gray-800 px-8 py-4 rounded-md shadow-lg text-center">
            <h2 className="text-xl text-white font-bold tracking-wide">
              MY SKILLS
            </h2>
          </div>
          {/* Vertical Lines */}
          <div className="absolute w-1 bg-gray-700 h-12 -bottom-12"></div>
        </motion.div>

        {/* Horizontal Lines */}
        <motion.div
          initial={{ opacity: 0, width: 0 }}
          animate={{ opacity: 1, width: "100%" }}
          transition={{ duration: 3.2, ease: "easeOut" }}
          className="relative flex w-full justify-center mb-2"
        >
          <div className="w-1 bg-gray-700 h-16"></div>
          <div className="h-1 bg-gray-700 w-full max-w-4xl"></div>
          <div className="w-1 bg-gray-700 h-16"></div>
        </motion.div>

        {/* Skill Groups */}
        <div className="grid grid-cols-2 gap-12 w-full max-w-6xl">
          {/* Left Side Skills */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="flex flex-wrap justify-center gap-4"
          >
            {skillsLeft.map((skill, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="bg-gray-800 text-white text-center px-4 py-2 rounded-md shadow-md hover:bg-gray-700 transition"
              >
                {skill}
              </motion.div>
            ))}
          </motion.div>

          {/* Right Side Skills */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="flex flex-wrap justify-center gap-4"
          >
            {skillsRight.map((skill, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="bg-gray-800 text-white text-center px-4 py-2 rounded-md shadow-md hover:bg-gray-700 transition"
              >
                {skill}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
