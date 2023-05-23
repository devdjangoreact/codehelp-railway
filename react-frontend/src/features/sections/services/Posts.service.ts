import axios from "axios";
import Cookies from "js-cookie";
import { PostGet, FormConnect } from "../models/Post.interface";
import { config } from "../../auth/CSRFToken";

const getPosts = async (categorySlug: string) => {
  const response = await axios.get<PostGet[]>(
    `/${categorySlug}/posts/`,
    config
  );

  return response;
};

const getPost = async (id: string | undefined) => {
  const response = await axios.get<PostGet>(`/post/${id}/`);

  return response;
};

const updatePost = async (
  form: FormConnect
): Promise<{ post: PostGet | undefined }> => {
  const response = await axios.put(`/post/${form["id"]}/`, form, config);

  return response.data;
};

const createPost = async (
  form: FormConnect
): Promise<{ post: PostGet | undefined }> => {
  const response = await axios.post(`/posts/`, form, config);

  return response.data;
};

const deletePost = async (id: string | undefined) => {
  const response = await axios.delete(
    `/post/${id}/`,

    config
  );

  return response.data;
};

const authService = {
  getPosts,
  getPost,
  updatePost,
  createPost,
  deletePost,
};

export default authService;
