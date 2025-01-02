import axiosInstance from "@/lib/AxiosInstance";

export const getAllBlogs = async () => {
  try {
    const response = await axiosInstance.get(`/blogs`);
    return response.data.data;
  } catch (error) {
    throw error;
  }
};

export const getSingleBlog = async (id: string) => {
  try {
    const response = await axiosInstance.delete(`/blogs/${id}`);
    if (!response.data.success) {
      throw new Error(response.data.message || "Failed to delete blogs.");
    }
    return response.data.data;
  } catch (error) {
    throw error;
  }
};
