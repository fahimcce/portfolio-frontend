import axiosInstance from "@/lib/AxiosInstance";

export const getAllProjects = async () => {
  try {
    const response = await axiosInstance.get(`/project`);
    return response.data.data;
  } catch (error) {
    throw error;
  }
};

export const getSingleProject = async (id: string) => {
  try {
    const response = await axiosInstance.get(`/project/${id}`);
    if (!response.data.success) {
      throw new Error(response.data.message || "Failed to get product.");
    }
    return response.data.data;
  } catch (error) {
    throw error;
  }
};
