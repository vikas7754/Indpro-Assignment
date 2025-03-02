import axios from "axios";
axios.defaults.withCredentials = true;
const URL = "/api/category";

export const createCategory = async (categoryData: any) => {
  return await axios.post(URL, categoryData);
};

export const getCategory = async (id: string) => {
  return await axios.get(`${URL}/${id}`);
};

export const getCategories = async () => {
  return await axios.get(URL);
};

export const deleteCategory = async (id: string) => {
  return await axios.delete(`${URL}/${id}`);
};

export const updateCategory = async (id: string, categoryData: any) => {
  return await axios.put(`${URL}/${id}`, categoryData);
};
