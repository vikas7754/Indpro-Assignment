import React, { FC } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import useData from "@/redux/hooks/useData";

interface Props {
  selected: any[];
}

const ActionsOnSelected: FC<Props> = ({ selected }) => {
  const {
    deleteSelectedTasks,
    updateSelectedTasksStatus,
    // updateSelectedTasksPriority,
  } = useData();

  if (selected.length === 0) {
    return null;
  }

  const handleDelete = () => {
    deleteSelectedTasks(selected.map((task) => task._id));
  };

  const updateStatus = (status: string) => {
    updateSelectedTasksStatus(
      selected.map((task) => task._id),
      status
    );
  };

  // const updatePriority = (priority: string) => {
  //   updateSelectedTasksPriority(
  //     selected.map((task) => task._id),
  //     priority
  //   );
  // };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Actions</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Actions on selected</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem onClick={() => updateStatus("completed")}>
            Mark as completed
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => updateStatus("in-progress")}>
            Mark as in-progress
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => updateStatus("pending")}>
            Mark as pending
          </DropdownMenuItem>
          <DropdownMenuItem onClick={handleDelete} className="text-red-500">
            Delete
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ActionsOnSelected;
