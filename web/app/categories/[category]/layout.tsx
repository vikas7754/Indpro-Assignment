type Params = Promise<{ category: string }>;

export const generateMetadata = async ({ params }: { params: Params }) => {
  const { category } = await params;

  return {
    title: category,
    description: `Tasks related to ${category}`,
  };
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
