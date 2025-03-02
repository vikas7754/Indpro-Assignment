"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { format } from "date-fns";
import {
  CalendarIcon,
  CheckIcon,
  ChevronDown,
  LoaderCircleIcon,
  X,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import taskResolver from "@/utils/taskResolver";
import { Data } from "@/types/data";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Badge } from "@/components/ui/badge";
import { createTask, updateTask } from "@/APIs/task";
import { createCategory } from "@/APIs/category";
import { useState } from "react";
import { toast } from "sonner";
import useData from "@/redux/hooks/useData";

interface TaskFormProps {
  task?: Data;
}

export default function TaskForm({ task }: TaskFormProps) {
  // Initialize the form
  const form = useForm<z.infer<typeof taskResolver>>({
    resolver: zodResolver(taskResolver),
    defaultValues: {
      title: task?.title || "",
      description: task?.description || "",
      status: task?.status || "",
      priority: task?.priority || "",
      dueDate: task?.dueDate ? new Date(task.dueDate) : undefined,
      categories: task?.categories || [],
    },
  });

  const [loading, setLoading] = useState(false);
  const [newCategory, setNewCategory] = useState("");

  const { addData, updateData, categories, addCategory } = useData();

  // Define form submission handler
  async function onSubmit(values: z.infer<typeof taskResolver>) {
    try {
      setLoading(true);
      if (task) {
        const res = await updateTask(task._id, values);
        toast.success("Task updated successfully!");
        updateData(res.data);
      } else {
        const res = await createTask(values);
        toast.success("Task created successfully!");
        addData(res.data);
        form.reset();
      }
    } catch (error) {
      console.log(error);
      toast.error("An error occurred. Please try again later.");
    } finally {
      setLoading(false);
    }
  }

  async function handleCreateCategory(category: string) {
    try {
      const { data } = await createCategory({ name: category });
      addCategory(data.name);
      return data.name;
    } catch (error) {
      console.log(error);
      toast.error("An error occurred while creating the category.");
      return null;
    }
  }

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>{task ? "Update Task" : "Create New Task"}</CardTitle>
        <CardDescription>
          {task
            ? "Update the details of your task."
            : "Add a new task to your project. Fill in all the required fields."}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter task title" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Enter task details"
                      className="min-h-[120px]"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="status"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Status</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a status" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="pending">Pending</SelectItem>
                        <SelectItem value="in-progress">In Progress</SelectItem>
                        <SelectItem value="completed">Completed</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="priority"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Priority</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select priority level" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="low">Low</SelectItem>
                        <SelectItem value="medium">Medium</SelectItem>
                        <SelectItem value="high">High</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="dueDate"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel>Due Date</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant={"outline"}
                          className={cn(
                            "w-full pl-3 text-left font-normal",
                            !field.value && "text-muted-foreground"
                          )}
                        >
                          {field.value ? (
                            format(field.value, "PPP")
                          ) : (
                            <span>Select a date</span>
                          )}
                          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={field.onChange}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="categories"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel>Categories</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant="outline"
                          role="combobox"
                          className={cn(
                            "w-full justify-between",
                            !field.value.length && "text-muted-foreground"
                          )}
                        >
                          {field.value.length > 0
                            ? `${field.value.length} categories selected`
                            : "Select categories"}
                          <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-full p-0">
                      <Command>
                        <CommandInput
                          placeholder="Search categories..."
                          value={newCategory}
                          onValueChange={(value) => {
                            setNewCategory(value);
                          }}
                        />
                        <CommandList>
                          <CommandEmpty>
                            {/* No category found.{" "} */}
                            <Button
                              variant="link"
                              onClick={async () => {
                                const createdCategory =
                                  await handleCreateCategory(newCategory);
                                if (createdCategory) {
                                  field.onChange([
                                    ...field.value,
                                    createdCategory,
                                  ]);
                                  setNewCategory("");
                                  toast.success(
                                    "Category created successfully!"
                                  );
                                }
                              }}
                            >
                              Create "{newCategory}"
                            </Button>
                          </CommandEmpty>
                          <CommandGroup className="max-h-64 overflow-auto">
                            {categories.map((category, i) => (
                              <CommandItem
                                key={i}
                                onSelect={() => {
                                  const isSelected =
                                    field.value.includes(category);
                                  const newValue = isSelected
                                    ? field.value.filter(
                                        (value) => value !== category
                                      )
                                    : [...field.value, category];
                                  field.onChange(newValue);
                                }}
                              >
                                <CheckIcon
                                  className={cn(
                                    "mr-2 h-4 w-4",
                                    field.value.includes(category)
                                      ? "opacity-100"
                                      : "opacity-0"
                                  )}
                                />
                                {category}
                              </CommandItem>
                            ))}
                          </CommandGroup>
                        </CommandList>
                      </Command>
                    </PopoverContent>
                  </Popover>
                  {field.value.length > 0 && (
                    <div className="flex flex-wrap gap-1 mt-2">
                      {field.value.map((category) => {
                        const categoryLabel =
                          categories.find((c) => c === category) || category;
                        return (
                          <Badge
                            key={category}
                            variant="secondary"
                            className="mr-1 mb-1"
                          >
                            {categoryLabel}
                            <button
                              type="button"
                              className="ml-1 rounded-full outline-none ring-offset-background focus:ring-2 focus:ring-ring focus:ring-offset-2"
                              onClick={() => {
                                field.onChange(
                                  field.value.filter(
                                    (value) => value !== category
                                  )
                                );
                              }}
                            >
                              <X className="h-3 w-3" />
                              <span className="sr-only">
                                Remove {categoryLabel}
                              </span>
                            </button>
                          </Badge>
                        );
                      })}
                    </div>
                  )}
                  <FormDescription>
                    Select at least one category for this task.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <CardFooter className="px-0 pt-6">
              <Button type="submit" className="ml-auto" disabled={loading}>
                {loading ? (
                  <LoaderCircleIcon className="animate-spin" />
                ) : task ? (
                  "Update Task"
                ) : (
                  "Create Task"
                )}
              </Button>
            </CardFooter>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
