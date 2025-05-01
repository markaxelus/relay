import React from "react";
import { Task as TaskType } from "@/state/api";
import { useDrop, useDrag } from "react-dnd";

type BoardColumnProps = {
  status: string;
  tasks: TaskType[];
  moveTask: (taskId: number, newStatus: string) => void;
  setIsModalNewTaskOpen: (isOpen: boolean) => void;
};

const BoardColumn = ({
  tasks,
  status,
  moveTask,
  setIsModalNewTaskOpen,
}: BoardColumnProps) => {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: "task",
    drop: (item: { id: number }) => {
      console.log("Moved task", item.id, "into", status);
      moveTask(item.id, status);
    },
    collect: (m) => ({ isOver: !!m.isOver() }),
  }))
};

export default BoardColumn;
