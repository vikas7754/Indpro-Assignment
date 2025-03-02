"use client";
import React from "react";
import DataTable from "../data-table";
import { columns } from "../data-table/columns";
import useData from "@/redux/hooks/useData";

const HomePage = () => {
  const { data } = useData();

  return (
    <>
      <h1 className="h3">All tasks</h1>
      <DataTable columns={columns} data={data} />
    </>
  );
};

export default HomePage;
