import Layout from "@/UI/layout";
import React from "react";
import CategorizedTasks from "./CategorizedTasks";

const page = () => {
  return (
    <Layout breadcrumbs={[]}>
      <CategorizedTasks />
    </Layout>
  );
};

export default page;
