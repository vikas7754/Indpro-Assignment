import axios from "axios";
axios.defaults.withCredentials = true;
const URL = "/api/user";

export const signupUser = async (userData: any) => {
  return await axios.post(`${URL}/signup`, userData);
};

export const loginUser = async (credentials: any) => {
  return await axios.post(`${URL}/login`, credentials);
};

export const logoutUser = async () => {
  return await axios.post(`${URL}/logout`);
};

export const getProfile = async () => {
  return await axios.get(`${URL}/me`);
};
