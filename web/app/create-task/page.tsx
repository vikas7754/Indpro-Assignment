import Layout from "@/UI/layout";
import TaskForm from "@/UI/TaskForm";
import React from "react";

const Page = () => {
  const breadcrumbs = [
    {
      label: "Create Task",
      href: "/create-task",
    },
  ];

  return (
    <Layout breadcrumbs={breadcrumbs}>
      <TaskForm />
    </Layout>
  );
};

export default Page;
