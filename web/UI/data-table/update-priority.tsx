import { Data, Priority } from "@/types/data";
import React, { FC } from "react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import useData from "@/redux/hooks/useData";

const priorities: Priority[] = ["low", "medium", "high"];

const priorityStyles = {
  low: "border-gray-500 text-gray-500 hover:bg-gray-50 capitalize",
  medium: "border-blue-500 text-blue-500 hover:bg-blue-50 capitalize",
  high: "border-red-500 text-red-500 hover:bg-red-50 capitalize",
};

interface Props {
  task: Data;
}

const UpdatePriority: FC<Props> = ({ task }) => {
  const { updateTaskPriority } = useData();

  const handleUpdatePriority = (priority: Priority) => {
    updateTaskPriority({ ...task, priority });
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className={priorityStyles[task.priority]}
        >
          {task.priority}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Update Priority</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {priorities.map((priority) => (
          <DropdownMenuCheckboxItem
            key={priority}
            checked={task.priority === priority}
            onCheckedChange={() => handleUpdatePriority(priority)}
            className={priorityStyles[priority]}
          >
            {priority}
          </DropdownMenuCheckboxItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UpdatePriority;
