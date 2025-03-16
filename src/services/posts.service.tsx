import { environment } from "../environments";
import axios from "axios";

export const usePostsAPI = () => {
  const getPosts = async (endpoint: string) => {
    const url = `${environment.BACKEND_API}/api/${endpoint}`;
    const response = await axios.get(url);
    return response.data;
  };

  return {
    getPosts,
  };
};
