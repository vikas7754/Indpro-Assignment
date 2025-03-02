"use client";
import React, { useEffect, useState } from "react";
import Layout from "../layout";
import useData from "@/redux/hooks/useData";
import DataTable from "../data-table";
import { columns } from "../data-table/columns";

const Dashboard = () => {
  const breadcrumbs = [{ label: "Dashboard", href: "/dashboard" }];

  const [stats, setStats] = useState({ total: 0, pending: 0, completed: 0 });

  const { data } = useData();

  useEffect(() => {
    if (data) {
      const total = data.length;
      const pending = data.filter((item) => item.status === "pending").length;
      const completed = data.filter(
        (item) => item.status === "completed"
      ).length;
      setStats({ total, pending, completed });
    }
  }, [data]);

  return (
    <Layout breadcrumbs={breadcrumbs}>
      <div className="grid auto-rows-min gap-4 md:grid-cols-3">
        <div className="bg-muted/50 aspect-video rounded-xl">
          <div className="flex items-center justify-center h-full text-center">
            <div>
              <h2 className="text-2xl font-semibold">{stats.total}</h2>
              <p>Total</p>
            </div>
          </div>
        </div>
        <div className="bg-muted/50 aspect-video rounded-xl">
          <div className="flex items-center justify-center h-full text-center">
            <div>
              <h2 className="text-2xl font-semibold">{stats.pending}</h2>
              <p>Pending</p>
            </div>
          </div>
        </div>
        <div className="bg-muted/50 aspect-video rounded-xl">
          <div className="flex items-center justify-center h-full text-center">
            <div>
              <h2 className="text-2xl font-semibold">{stats.completed}</h2>
              <p>Completed</p>
            </div>
          </div>
        </div>
      </div>
      <DataTable data={data} columns={columns} />
    </Layout>
  );
};

export default Dashboard;
