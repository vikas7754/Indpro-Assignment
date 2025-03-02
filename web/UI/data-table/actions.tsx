import React, { FC } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MoreHorizontal } from "lucide-react";
import { Data } from "@/types/data";
import useData from "@/redux/hooks/useData";
import Link from "next/link";

interface Props {
  task: Data;
}

const Actions: FC<Props> = ({ task }) => {
  const { deleteData } = useData();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="h-8 w-8 p-0">
          <span className="sr-only">Open menu</span>
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>Actions</DropdownMenuLabel>
        <DropdownMenuItem
          onClick={() => navigator.clipboard.writeText(task._id)}
        >
          Copy task ID
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <Link href={`/task/${task._id}`}>View task</Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href={`/update-task/${task._id}`}>Update task</Link>
        </DropdownMenuItem>
        <DropdownMenuItem
          className="text-red-500"
          onClick={() => deleteData(task._id)}
        >
          Delete Task
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Actions;
