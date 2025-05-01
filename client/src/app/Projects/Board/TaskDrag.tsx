import { Task as TaskType } from "@/state/api"
import { useDrag } from "react-dnd"

type TaskProps = {
  task: TaskType;
}

const TaskDrag = ({ task }: TaskProps) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "task",
    item: { id: task.id },
    collect: ( m: any ) => ({
      isDragging: !!m.isDragging(),
    })
  }));
  
}

export default TaskDrag