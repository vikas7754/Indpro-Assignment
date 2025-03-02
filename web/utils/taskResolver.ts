import { z } from "zod";

// Define the form schema with Zod
const taskResolver = z.object({
  title: z.string().min(2, {
    message: "Title must be at least 2 characters.",
  }),
  description: z.string().min(1, {
    message: "Please provide a short description.",
  }),
  status: z.string().nonempty({
    message: "Please select a status.",
  }),
  priority: z.string().nonempty({
    message: "Please select a priority level.",
  }),
  dueDate: z.date({
    required_error: "Please select a due date.",
  }),
  categories: z.array(z.string()).nonempty({
    message: "Please select at least one category.",
  }),
});

export default taskResolver;
