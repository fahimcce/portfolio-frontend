"use client";

import { getAllBlogs } from "@/services/BlogServices";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { motion } from "framer-motion";
import BlogCard from "./blogCard";
import CardLoader from "../shared/CardLoader";

export default function FetchBlogs() {
  const [blogs, setBlogs] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const fetchedBlogs = await getAllBlogs();
        setBlogs(fetchedBlogs);
      } catch (err: any) {
        toast.error("Failed to load Blogs. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (loading) {
    return <CardLoader />;
  }

  if (error) {
    return <p className="text-center text-red-500">{error}</p>;
  }

  return (
    <section className="bg-gray-900 min-h-screen ">
      <div className="mx-auto w-5/6">
        <div className="container mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-4xl font-bold text-center mb-12 flex justify-center items-center relative w-full z-[10]"
          >
            <span
              className="absolute inset-0 bg-white"
              style={{
                clipPath: "polygon(10% 0, 90% 0, 100% 100%, 0 100%)",
              }}
            ></span>
            <span className="z-20 text-gray-900">Explore My Blogs..</span>
          </motion.h1>

          {blogs.length > 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-8"
            >
              {blogs.map((blog, index) => (
                <motion.div
                  key={blog.id}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <BlogCard blog={blog} />
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <p className="text-center text-gray-500">No Blogs found.</p>
          )}
        </div>
      </div>
    </section>
  );
}
