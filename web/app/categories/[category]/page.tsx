import Layout from "@/UI/layout";
import React, { FC } from "react";
import TasksByCategory from "./TasksByCategory";

interface Props {
  params: {
    category: string;
  };
}

const Page: FC<Props> = async ({ params }) => {
  const { category } = await params;

  const breadcrumbs = [
    {
      label: category,
      href: `/categories/${category}`,
    },
  ];

  return (
    <Layout breadcrumbs={breadcrumbs}>
      <TasksByCategory category={category} />
    </Layout>
  );
};

export default Page;
