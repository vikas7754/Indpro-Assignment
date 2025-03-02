type Params = Promise<{ query: string }>;

export const generateMetadata = async ({ params }: { params: Params }) => {
  const { query } = await params;

  return {
    title: `Search: ${query}`,
    description: `Search results for ${query}`,
  };
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
