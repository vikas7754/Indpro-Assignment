import { Data, Status } from "@/types/data";
import React, { FC } from "react";
import useData from "@/redux/hooks/useData";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const statuses: Status[] = ["pending", "in-progress", "completed"];

const statusStyles = {
  pending: "border-yellow-500 text-yellow-500 hover:bg-yellow-50 capitalize",
  "in-progress": "border-blue-500 text-blue-500 hover:bg-blue-50 capitalize",
  completed: "border-green-500 text-green-500 hover:bg-green-50 capitalize",
};

interface Props {
  task: Data;
}

const UpdateStatus: FC<Props> = ({ task }) => {
  const { updateTaskStatus } = useData();

  const handleUpdateStatus = (status: Status) => {
    updateTaskStatus({ ...task, status });
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className={
            statusStyles[task.status] ||
            "border-gray-500 text-gray-500 hover:bg-gray-50"
          }
        >
          {task.status}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Update Status</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {statuses.map((status) => (
          <DropdownMenuCheckboxItem
            key={status}
            checked={task.status === status}
            onCheckedChange={() => handleUpdateStatus(status)}
            className={statusStyles[status]}
          >
            {status}
          </DropdownMenuCheckboxItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UpdateStatus;
