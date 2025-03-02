"use client";
import useData from "@/redux/hooks/useData";
import { Data } from "@/types/data";
import DataTable from "@/UI/data-table";
import { columns } from "@/UI/data-table/columns";
import React, { useEffect, useState } from "react";

const CategorizedTasks = () => {
  const { data, categories } = useData();
  const [categorizedData, setCategorizedData] = useState<any[]>([]);

  useEffect(() => {
    if (data.length > 0 && categories.length > 0) {
      const sortedCategories = [...categories].sort();

      const categorizedData = sortedCategories.map((category: string) => {
        return {
          category,
          data: data.filter((item: Data) => item.categories.includes(category)),
        };
      });

      const dataWithTasks = categorizedData.filter(
        (item) => item.data.length > 0
      );

      setCategorizedData(dataWithTasks);
    }
  }, [data]);

  return (
    <div>
      {categories.length === 0 && <p>No tasks found</p>}
      {categorizedData.map((item, i: number) => (
        <div key={i}>
          <h3 className="text-xl font-bold capitalize">{item.category}</h3>
          <DataTable data={item.data} columns={columns} />
        </div>
      ))}
    </div>
  );
};

export default CategorizedTasks;
