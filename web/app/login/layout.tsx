export const metadata = {
  title: "Login",
  description: "Login to Task Manager",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
