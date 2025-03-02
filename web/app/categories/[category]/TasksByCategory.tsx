"use client";
import useData from "@/redux/hooks/useData";
import { Data } from "@/types/data";
import DataTable from "@/UI/data-table";
import { columns } from "@/UI/data-table/columns";
import React, { useEffect } from "react";

const TasksByCategory = ({ category }: { category: string }) => {
  const { data } = useData();

  const [categorizedTasks, setCategorizedTasks] = React.useState<Data[]>([]);

  useEffect(() => {
    if (category && data) {
      const filteredTasks = data.filter((task: Data) =>
        task.categories.includes(category)
      );
      setCategorizedTasks(filteredTasks);
    }
  }, [data, category]);

  return (
    <div>
      <h1 className="text-xl font-bold capitalize">{category}</h1>
      <DataTable data={categorizedTasks} columns={columns} />
    </div>
  );
};

export default TasksByCategory;
