import { useDispatch, useSelector } from "react-redux";
import {
  addCategory,
  addData,
  deleteCategory,
  deleteData,
  deleteSelectedTasks,
  initializeCategories,
  initializeData,
  updateSelectedTasksPriority,
  updateSelectedTasksStatus,
  updateTask,
  updateTaskPriority,
  updateTaskStatus,
} from "../states/data";
import { Data } from "@/types/data";

type State = {
  data: {
    data: Data[];
    categories: string[];
  };
};

export const useData = () => {
  const data = useSelector((state: State) => state.data.data);
  const categories = useSelector((state: State) => state.data.categories);

  const dispatch = useDispatch();

  const addDataFn = (data: Data) => {
    dispatch(addData(data));
  };

  const initializeDataFn = (data: Data[]) => {
    dispatch(initializeData(data));
  };

  const deleteDataFn = (id: string) => {
    dispatch(deleteData(id));
  };

  const updateTaskPriorityFn = (data: Data) => {
    dispatch(updateTaskPriority(data));
  };

  const updateTaskStatusFn = (data: Data) => {
    dispatch(updateTaskStatus(data));
  };

  const updateTaskFn = (data: Data) => {
    dispatch(updateTask(data));
  };

  const updateSelectedTasksStatusFn = (ids: string[], status: string) => {
    dispatch(updateSelectedTasksStatus({ ids, status }));
  };

  const updateSelectedTasksPriorityFn = (ids: string[], priority: string) => {
    dispatch(updateSelectedTasksPriority({ ids, priority }));
  };

  const deleteSelectedTasksFn = (ids: string[]) => {
    dispatch(deleteSelectedTasks(ids));
  };

  const addCategoryFn = (category: string) => {
    dispatch(addCategory(category));
  };

  const initializeCategoriesFn = (categories: string[]) => {
    dispatch(initializeCategories(categories));
  };

  const deleteCategoryFn = (category: string) => {
    dispatch(deleteCategory(category));
  };

  return {
    data,
    categories,
    addData: addDataFn,
    initializeData: initializeDataFn,
    deleteData: deleteDataFn,
    updateTaskPriority: updateTaskPriorityFn,
    updateTaskStatus: updateTaskStatusFn,
    updateData: updateTaskFn,
    addCategory: addCategoryFn,
    initializeCategories: initializeCategoriesFn,
    deleteCategory: deleteCategoryFn,
    updateSelectedTasksStatus: updateSelectedTasksStatusFn,
    updateSelectedTasksPriority: updateSelectedTasksPriorityFn,
    deleteSelectedTasks: deleteSelectedTasksFn,
  };
};

export default useData;
