import {
  deleteMultipleTasks,
  deleteTask,
  updateMultipleTasksPriority,
  updateMultipleTasksStatus,
  updateTaskPriorityById,
  updateTaskStatusById,
} from "@/APIs/task";
import { Data } from "@/types/data";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [] as Data[],
  categories: [] as string[],
};

export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    addData: (state, action) => {
      state.data = [...state.data, action.payload];
    },
    addCategory: (state, action) => {
      state.categories = [...state.categories, action.payload];
    },
    initializeData: (state, action) => {
      state.data = action.payload;
    },
    initializeCategories: (state, action) => {
      state.categories = action.payload;
    },
    deleteData: (state, action) => {
      state.data = state.data.filter((data) => data._id !== action.payload);
      deleteTask(action.payload).catch((err) => {
        console.log(err);
      });
    },
    deleteCategory: (state, action) => {
      state.categories = state.categories.filter(
        (category) => category !== action.payload
      );
    },
    updateTaskPriority: (state, action) => {
      const index = state.data.findIndex(
        (data) => data._id === action.payload._id
      );
      state.data[index].priority = action.payload.priority;
      updateTaskPriorityById(action.payload._id, action.payload.priority).catch(
        (err) => {
          console.log(err);
        }
      );
    },
    updateTaskStatus: (state, action) => {
      const index = state.data.findIndex(
        (data) => data._id === action.payload._id
      );
      state.data[index].status = action.payload.status;
      updateTaskStatusById(action.payload._id, action.payload.status).catch(
        (err) => {
          console.log(err);
        }
      );
    },
    updateSelectedTasksStatus: (state, action) => {
      const { ids, status } = action.payload;
      ids.forEach((id: string) => {
        const index = state.data.findIndex((data) => data._id === id);
        state.data[index].status = status;
      });
      updateMultipleTasksStatus(ids, status).catch((err) => {
        console.log(err);
      });
    },
    updateSelectedTasksPriority: (state, action) => {
      const { ids, priority } = action.payload;
      ids.forEach((id: string) => {
        const index = state.data.findIndex((data) => data._id === id);
        state.data[index].priority = priority;
      });
      updateMultipleTasksPriority(ids, priority).catch((err) => {
        console.log(err);
      });
    },
    updateTask: (state, action) => {
      const index = state.data.findIndex(
        (data) => data._id === action.payload._id
      );
      state.data[index] = action.payload;
    },
    deleteSelectedTasks: (state, action) => {
      const ids = action.payload;
      ids.forEach((id: string) => {
        state.data = state.data.filter((data) => data._id !== id);
      });
      deleteMultipleTasks(ids).catch((err) => {
        console.log(err);
      });
    },
  },
});

export const {
  addData,
  initializeData,
  deleteData,
  updateTaskPriority,
  updateTaskStatus,
  updateTask,
  addCategory,
  initializeCategories,
  deleteCategory,
  updateSelectedTasksStatus,
  updateSelectedTasksPriority,
  deleteSelectedTasks,
} = dataSlice.actions;
export default dataSlice.reducer;
