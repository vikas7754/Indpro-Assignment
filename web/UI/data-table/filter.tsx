"use client";
import React, { FC } from "react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import useData from "@/redux/hooks/useData";

const status = ["Completed", "Pending", "In-Progress"];
const priorities = ["High", "Low", "Medium"];

interface Props {
  handleFilterChange: (key: string, value: string) => void;
  handleReset: () => void;
}

const Filter: FC<Props> = ({ handleFilterChange, handleReset }) => {
  const { categories } = useData();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Filter</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Filter By Status</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {status.map((s) => (
          <DropdownMenuItem
            key={s}
            onSelect={() => handleFilterChange("status", s)}
          >
            {s}
          </DropdownMenuItem>
        ))}
        <DropdownMenuSeparator />
        <DropdownMenuLabel>Filter By Priority</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {priorities.map((p) => (
          <DropdownMenuItem
            key={p}
            onSelect={() => handleFilterChange("priority", p)}
          >
            {p}
          </DropdownMenuItem>
        ))}
        <DropdownMenuSeparator />
        <DropdownMenuItem onSelect={handleReset} className="text-red-500">
          Reset Filters
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Filter;
