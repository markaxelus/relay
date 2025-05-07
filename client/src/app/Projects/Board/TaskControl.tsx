import { Task as TaskType } from "@/state/api"
import { useDrag } from "react-dnd"
import { format } from "date-fns"
import Image from "next/image";
import { EllipsisVertical, MessageSquareMore } from "lucide-react";

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
    <div className={`rounded-full px-2 py-1 text-xs font-semibold
                      ${priority === "Urgent"
                        ? "bg-red-200 text-red-700"
                        : priority === "High"
                          ? "bg-yellow-200 text-yellow-700"
                          : priority === "Medium"
                            ? "bg-green-200 text-green-700"
                            : priority === "Low"
                              ? "bg-blue-200 text-blue-700"
                              : "bg-gray-200 text-gray-700"
                      }`}>
      {priority}
    </div>
  );

  return (
    <div
      ref={(instance) => {
        drag(instance);
      }}
      className={`dark:bg-dark-secondary mb-4 rounded-md bg-white shadow-md
                ${isDragging ? "opacity-50" : "opacity-100"}`}
    >

      <div className=" p-4 md:p-6">
        {/* Task Image */}
        {task.attachments && task.attachments.length > 0 && (
          <Image
            src={`/${task.attachments[0].fileURL}`}
            alt={task.attachments[0].fileName}
            width={400}
            height={200}
            className="h-auto w-full rounded-t-md pb-4"
          />
        )}

        {/* Task Info Container */}
        <div className="flex items-start justify-between">
          
          {/* Task Title */}
          <h4 className="text-md font-bold dark:text-white">
            {task.title}
          </h4>
          <button className="flex h-6 w-6 flex-shrink-0 items-center justify-center dark:text-neutral-500">
            <EllipsisVertical size={30} />
          </button>
        </div>

        <div className="my-3 flex justify-between">
          {/* Task Points */}
          <p className="text-sm text-gray-600 dark:text-neutral-500">
            {task.description}
          </p>
          {typeof task.points === "number" && (
            <div className="text-xs font-semibold dark:text-white">
              {task.points} pts
            </div>
          )}
          {/* Task Date */}
          {/* <div className="text-xs text-gray-500 dark:text-neutral-500">
            {formatStartDate && <span>{formatStartDate} - </span>}
            {formatDueDate && <span>{formatDueDate}</span>}
          </div> */}
        </div>

        {/* Task Priority Tags */}
        <div>
          <div className="flex flex-1 flex-wrap items-center gap-2">
            {task.priority && <PriorityTag priority={task.priority} />}
            <div className="flex gap-2">
              {taskTagsSplit.map((tag) => (
                <div
                  key={tag}
                  className="rounded-full bg-blue-100 px-2 py-1 text-xs"
                >
                  {" "} 
                  {tag}
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Users */}
        <div className="flex mt-3 items-center justify-between">
          <div className="flex -space-x-[6px] overflow-hidden">
            {task.assignee && (
              <Image
                key={task.assignedUserId}
                src={`/${task.assignee.profilePictureUrl!}`}
                alt={task.assignee.username}
                width={30}
                height={30}
                className="dark:border-dark-secondary h-8 w-8 rounded-full border-2 border-white object-cover"
              />
            )}
            {task.author && (
              <Image
              key={task.author.userId}
              src={`/${task.author.profilePictureUrl!}`}
              alt={task.author.username}
              width={30}
              height={30}
              className="dark:border-dark-secondary h-8 w-8 rounded-full border-2 border-white object-cover"
            />
            )}
          </div>
          <div className="a">
            <MessageSquareMore size={20} />
            <span className="ml-1 text-sm dark:text-neutral-400">
              {commentsAmount}
            </span>
          </div>
        </div>

      </div>

    </div>
  )
}

export default TaskControl