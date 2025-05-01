import { Task as TaskType } from "@/state/api";
import { useDrop } from "react-dnd";

/* Contains logic for dropping items into the board and the board itself */
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
