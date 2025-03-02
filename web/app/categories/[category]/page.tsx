import Layout from "@/UI/layout";
import React, { FC } from "react";
import TasksByCategory from "./TasksByCategory";

type Params = Promise<{ category: string }>;

interface Props {
  params: Params;
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
