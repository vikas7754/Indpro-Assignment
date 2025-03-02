export const metadata = {
  title: "Dashboard",
  description: "Overview of your activities and tasks",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
