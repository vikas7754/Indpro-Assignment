import { searchTasksByQuery } from "@/actions/task";
import DataTable from "@/UI/data-table";
import { columns } from "@/UI/data-table/columns";
import Layout from "@/UI/layout";
import React, { FC } from "react";

type Params = Promise<{ query: string }>;

interface Props {
  params: Params;
}

export const generateMetadata = async ({ params }: { params: Params }) => {
  const { query } = await params;

  return {
    title: `Search: ${query}`,
    description: `Search results for ${query}`,
  };
};

const Page: FC<Props> = async ({ params }) => {
  const { query } = await params;
  const tasks = await searchTasksByQuery(query);

  if (!tasks || tasks.length === 0) {
    return <div>No tasks found</div>;
  }

  const breadcrumbs = [
    {
      label: "Search",
      href: `/search/${query}`,
    },
  ];
  return (
    <Layout breadcrumbs={breadcrumbs}>
      <DataTable data={tasks} columns={columns} />
    </Layout>
  );
};

export default Page;
