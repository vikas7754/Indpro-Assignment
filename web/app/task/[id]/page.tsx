import { getTaskById } from "@/actions/task";
import TaskDetail from "@/UI/DaskDetail";
import Layout from "@/UI/layout";
import React, { FC } from "react";

type Params = Promise<{ id: string }>;

interface Props {
  params: Params;
}

export const generateMetadata = async ({ params }: { params: Params }) => {
  const { id } = await params;

  return {
    title: `Task ${id}`,
    description: "Task details",
  };
};

const Page: FC<Props> = async ({ params }) => {
  const { id: taskId } = await params;
  const task = await getTaskById(taskId);

  if (!task) {
    return <div>Task not found</div>;
  }

  const breadcrumbs = [
    {
      label: task.title,
      href: `/task/${task._id}`,
    },
  ];
  return (
    <Layout breadcrumbs={breadcrumbs}>
      <TaskDetail task={task} />
    </Layout>
  );
};

export default Page;
