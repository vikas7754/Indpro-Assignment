import Layout from "@/UI/layout";
import React, { FC } from "react";
import TaskForm from "@/UI/TaskForm";
import { getTaskById } from "@/actions/task";

type Params = Promise<{ id: string }>;

interface Props {
  params: Params;
}

const Page: FC<Props> = async ({ params }) => {
  const { id: taskId } = await params;
  const task = await getTaskById(taskId);

  if (!task) {
    return <div>Task not found</div>;
  }

  const breadcrumbs = [
    {
      label: "Update Task",
      href: "/update-task",
    },
  ];

  return (
    <Layout breadcrumbs={breadcrumbs}>
      <TaskForm task={task} />
    </Layout>
  );
};

export default Page;
