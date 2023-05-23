import axios from "axios";
import { config } from "../../auth/CSRFToken";
import { CategoryGet, FormConnect } from "../models/Category.interface";

const getCategorys = async () => {
  const response = await axios.get<CategoryGet[]>(`/category/`, config);
  return response;
};

const getCategoryDepth = async () => {
  const response = await axios.get<CategoryGet[]>(`/categorydepth/`, config);
  return response;
};

const getCategory = async (slug: string | undefined) => {
  const response = await axios.get<CategoryGet | null>(
    `/category/${slug}`,
    config
  );
  return response;
};

const getCategorySlug = async (slug: string | undefined) => {
  const response = await axios.get<CategoryGet | null>(
    `/categoryslug/${slug}`,
    config
  );
  return response;
};

const updateCategory = async (
  form: FormConnect
): Promise<{ category: CategoryGet | null }> => {
  const response = await axios.put(`/category/${form["id"]}/`, form, config);
  return response.data;
};

const createCategory = async (
  form: FormConnect
): Promise<{ category: CategoryGet | null }> => {
  const response = await axios.post(`/category/`, form, config);
  console.log(form);
  return response.data;
};

const deleteCategory = async (id: string | undefined) => {
  const response = await axios.delete(
    `/category/${id}`,

    config
  );
  return response.data;
};

const authService = {
  getCategorys,
  getCategoryDepth,
  getCategory,
  getCategorySlug,
  updateCategory,
  createCategory,
  deleteCategory,
};

export default authService;
