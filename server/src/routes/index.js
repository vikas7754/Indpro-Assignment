import userRoutes from "./user";
import taskRoutes from "./task";
import categoryRoutes from "./category";

const routes = (app) => {
  app.use("/api/user", userRoutes);
  app.use("/api/task", taskRoutes);
  app.use("/api/category", categoryRoutes);
};

export default routes;
