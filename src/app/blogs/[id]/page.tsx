"use client";

import CardLoader from "@/components/shared/CardLoader";
import { getAllBlogs } from "@/services/BlogServices";
import { TBlog } from "@/types";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import DOMPurify from "dompurify";
import Head from "next/head";

export default function BlogsDetails() {
  const [loading, setLoading] = useState(true);
  const [blog, setBlog] = useState<TBlog | null>(null);
  const params = useParams();
  const blogId = params?.id as string;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const blogs: TBlog[] = await getAllBlogs();
        const currentBlog = blogs.find((blog) => blog.id === blogId);

        if (currentBlog) {
          setBlog(currentBlog);
        } else {
          toast.error("Blog not found");
        }
      } catch {
        toast.error("Failed to fetch Blog details");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [blogId]);

  if (loading) {
    return <CardLoader />;
  }

  if (!blog) {
    return <div className="text-center text-red-500">Blog not found.</div>;
  }

  return (
    <div className="bg-gray-900 text-white md:w-2/3 mx-auto w-5/6">
      {/* Meta Tags for SEO */}
      <Head>
        <title>{blog.title}</title>
        <meta name="description" content={blog.subtitle} />
      </Head>

      {/* Banner Image */}
      <div className="w-full h-64 md:h-96">
        <img
          src={blog.photo || "/placeholder-image.jpg"}
          alt={blog.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Blog Details */}
      <div className="container mx-auto p-8">
        {/* Title, Subtitle, and Category */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">{blog.title}</h1>
          <h2 className="text-xl text-gray-400 mb-4">{blog.subtitle}</h2>
          <span className="px-3 py-1 bg-blue-600 text-xs rounded-full">
            {blog.category}
          </span>
        </div>

        {/* Blog Content */}
        <div
          className="text-white"
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(blog.content, {
              FORBID_ATTR: ["style"],
            }), // Removes inline styles
          }}
        ></div>
      </div>
    </div>
  );
}
