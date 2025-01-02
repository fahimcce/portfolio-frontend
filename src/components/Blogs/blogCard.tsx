import { TBlog } from "@/types";
import Link from "next/link";

export default function BlogCard({ blog }: { blog: TBlog }) {
  const { id, title, subtitle, content, photo, category } = blog;

  return (
    <div className="flex flex-col md:flex-row bg-gray-800 text-white shadow-lg rounded-lg overflow-hidden md:h-[250px]">
      {/* Left: Image Section */}
      <div className="md:w-1/3">
        <img
          src={photo}
          alt={title}
          className="w-full h-48 md:h-full object-cover"
        />
      </div>

      {/* Right: Content Section */}
      <div className="md:w-2/3 p-4 flex flex-col justify-between">
        <div>
          <h2 className="text-xl font-bold mb-2">{title}</h2>
          <h3 className="text-md font-semibold text-gray-400 mb-4">
            {subtitle}
          </h3>
          <div
            className="text-white mt-2"
            dangerouslySetInnerHTML={{ __html: content.slice(0, 100) }}
          ></div>
        </div>
        <div className="mt-4 flex items-center justify-between">
          <span className="px-3 py-1 bg-blue-600 text-xs rounded-full">
            {category}
          </span>
          <Link
            href={`/blogs/${id}`}
            className="text-sm text-blue-400 hover:underline"
          >
            See More
          </Link>
        </div>
      </div>
    </div>
  );
}
