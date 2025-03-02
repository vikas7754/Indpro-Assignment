import HomePage from "@/UI/home";
import Layout from "@/UI/layout";

export default function Home() {
  return (
    <Layout breadcrumbs={[]}>
      <HomePage />
    </Layout>
  );
}
