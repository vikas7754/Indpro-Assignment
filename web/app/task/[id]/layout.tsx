type Params = Promise<{ id: string }>;

export const generateMetadata = async ({ params }: { params: Params }) => {
  const { id } = await params;

  return {
    title: `Task ${id}`,
    description: "Task details",
  };
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
