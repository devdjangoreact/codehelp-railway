import axios from "axios";
import Cookies from "js-cookie";
import { PostGet, FormConnect } from "../models/Post.interface";
import { config } from "../../auth/CSRFToken";

const getPosts = async (categorySlug: string) => {
  const response = await axios.get<PostGet[]>(
    `${process.env.REACT_APP_BASE_API}/${categorySlug}/posts/`,
    config
  );

  return response;
};

const getPost = async (id: string | undefined) => {
  const response = await axios.get<PostGet>(
    `${process.env.REACT_APP_BASE_API}/post/${id}/`
  );

  return response;
};

const updatePost = async (
  form: FormConnect
): Promise<{ post: PostGet | undefined }> => {
  const response = await axios.put(
    `${process.env.REACT_APP_BASE_API}/post/${form["id"]}/`,
    form,
    config
  );

  return response.data;
};

const createPost = async (
  form: FormConnect
): Promise<{ post: PostGet | undefined }> => {
  console.log(form);
  const response = await axios.post(
    `${process.env.REACT_APP_BASE_API}/posts/`,
    form,
    config
  );

  return response.data;
};

const deletePost = async (id: string | undefined) => {
  const response = await axios.delete(
    `${process.env.REACT_APP_BASE_API}/post/${id}/`,

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
