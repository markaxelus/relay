import { Task as TaskType } from "@/state/api";
import { EllipsisVertical, Plus } from "lucide-react";
import { useDrop } from "react-dnd";
import TaskControl from "./TaskControl";

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
  }));
  /* DEBUG STMTS
  console.log("Rendering column:", status);
  console.log(
  tasks.map((t) => ({ id: t.id, status: t.status })) 
);*/
  const tasksCount = tasks.filter((task) => task.status === status).length;

  const statusColor: any = {
    "To Do": "#2563EB",
    "Work In Progress": "#059669",
    "Under Review": "#D97706",
    "Completed": "#000000",
  };

  return (
    <div
    ref={(instance) => {
      drop(instance);
    }}
    className={`sl:py-4 rounded-lg py-2 xl:px-2 ${isOver ? "bg-blue-100 dark:bg-neutral-950" : ""}`}
    >
      
      <div className="mb-3 flex w-full">
        <div
          className={`w-2 !bg-[${statusColor[status]}] rounded-s-lg`}
          style={{ backgroundColor: statusColor[status] }}
        />
        <div className="a">
          <h3 className="a">
            {status}
            <span className="a">
              {tasksCount}
            </span>
          </h3>
        </div>

        
      </div>

      {tasks
        .filter((task) => task.status === status)
        .map((task) => (
          <TaskControl key={task.id} task={task} />
        ))}
    </div>
  );
};

export default BoardColumn;
