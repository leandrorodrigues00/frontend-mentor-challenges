'use client'

import { TaskConfig } from '@/types'
import { cn } from '@/lib/utils'
import { useStore } from '@/store'
import { Checkbox } from '@/components/ui/checkbox'
import { CrossIcon } from '@/components/icons'

interface TasksProps {
  task: TaskConfig
}

export function Tasks({ task }: TasksProps) {
  const { toggleTaskCompletion, deleteTask } = useStore((store) => {
    return {
      toggleTaskCompletion: store.toggleTaskCompletion,
      deleteTask: store.deleteTask,
    }
  })

  return (
    <div className="dark:bg-dark-200  flex justify-between bg-white p-5 font-medium text-gray-600">
      <div className="flex items-center space-x-3">
        <Checkbox
          id={task.id}
          checked={task.isCompleted}
          onCheckedChange={() => toggleTaskCompletion(task.id)}
        />

        <label
          htmlFor={task.id}
          className={cn(
            'cursor-pointer text-sm dark:text-white sm:text-base',
            task.isCompleted && 'text-gray-400 line-through dark:text-gray-400',
          )}
        >
          {task.title}
        </label>
      </div>
      <button onClick={() => deleteTask(task.id)}>
        <CrossIcon className="h-3 w-3 fill-current sm:h-4 sm:w-4" />
        <span className="sr-only">end task button</span>
      </button>
    </div>
  )
}
