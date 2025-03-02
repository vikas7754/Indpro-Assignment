import axios from "axios";
axios.defaults.withCredentials = true;
const URL = "/api/task";

export const createTask = async (taskData: any) => {
  return await axios.post(URL, taskData);
};

export const getTask = async (id: string) => {
  return await axios.get(`${URL}/${id}`);
};

export const getTasks = async () => {
  return await axios.get(URL);
};

export const deleteTask = async (id: string) => {
  return await axios.delete(`${URL}/${id}`);
};

export const updateTask = async (id: string, taskData: any) => {
  return await axios.put(`${URL}/${id}`, taskData);
};

export const updateTaskStatusById = async (id: string, status: string) => {
  return await axios.patch(`${URL}/${id}/status`, { status });
};

export const updateTaskPriorityById = async (id: string, priority: string) => {
  return await axios.patch(`${URL}/${id}/priority`, { priority });
};

export const updateMultipleTasksStatus = async (
  ids: string[],
  status: string
) => {
  return await axios.patch(`${URL}/status`, { ids, status });
};

export const updateMultipleTasksPriority = async (
  ids: string[],
  priority: string
) => {
  return await axios.patch(`${URL}/priority`, { ids, priority });
};

export const deleteMultipleTasks = async (ids: string[]) => {
  return await axios.delete(`${URL}`, { data: { ids } });
};

export const searchTasks = async (query: string) => {
  return await axios.get(`${URL}/search`, { params: { query } });
};
