import Layout from "@/UI/layout";
import React from "react";
import CategorizedTasks from "./CategorizedTasks";

export const metadata = {
  title: "Categories",
  description: "Browse through various categories of tasks",
};

const page = () => {
  return (
    <Layout breadcrumbs={[]}>
      <CategorizedTasks />
    </Layout>
  );
};

export default page;
