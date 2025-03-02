export type Priority = "high" | "medium" | "low";
export type Status = "completed" | "in-progress" | "pending";

export interface Data {
  _id: string;
  title: string;
  description: string;
  status: Status;
  priority: Priority;
  dueDate: string;
  categories: string[];
}
