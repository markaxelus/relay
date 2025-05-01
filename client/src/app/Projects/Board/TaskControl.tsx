import { Task as TaskType } from "@/state/api"
import { useDrag } from "react-dnd"
import { format } from "date-fns"

type TaskProps = {
  task: TaskType;
}

const TaskControl = ({ task }: TaskProps) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "task",
    item: { id: task.id },
    collect: ( m: any ) => ({
      isDragging: !!m.isDragging(),
    })
  }));

  const taskTagsSplit = task.tags 
                        ? task.tags.split(",") 
                        : [];

  const formatStartDate = task.startDate
                        ? format(new Date(task.startDate), "P")
                        : ""
  const formatDueDate = task.dueDate
                        ? format(new Date(task.dueDate), "P")
                        : ""

  const commentsAmount = task.comments 
                        ? task.comments.length
                        : 0

  const PriorityTag = ({ priority }: { priority: TaskType["priority"] }) => (
    <div className={`rounded-full px-2 py-1 text-xs font-semibold`}>
      {priority}
    </div>
  );
}

export default TaskControl