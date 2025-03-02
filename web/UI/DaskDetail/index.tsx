"use client";
import { Badge } from "@/components/ui/badge";
import { Data } from "@/types/data";
import { format } from "date-fns";
import React, { FC } from "react";
import UpdatePriority from "../data-table/update-priority";
import UpdateStatus from "../data-table/update-status";

interface Props {
  task: Data;
}

const TaskDetail: FC<Props> = ({ task }) => {
  return (
    <div className="flex flex-col space-y-4">
      <h1 className="text-xl font-bold">{task.title}</h1>
      <p>{task.description}</p>
      <div>
        Priority: <UpdatePriority task={task} />
      </div>
      <div>Due date: {format(new Date(task.dueDate), "dd/MM/yyyy")}</div>
      <div>
        Status: <UpdateStatus task={task} />
      </div>
      <div>
        <div className="mb-2">Categories: </div>
        <div className="flex space-x-2">
          {task.categories.map((category) => (
            <Badge key={category} title={category}>
              <span className="ml-1 rounded-full outline-none ring-offset-background focus:ring-2 focus:ring-ring focus:ring-offset-2">
                {category}
              </span>
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TaskDetail;
