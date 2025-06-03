import { Dispatch, SetStateAction } from 'react'

import { TaskConfig } from '@/types'
import { cn } from '@/lib/utils'
import { useStore } from '@/store'

interface TasksListFooter {
  tasks: TaskConfig[]
  currentFilter: string
  onFilterChange: Dispatch<SetStateAction<string>>
}

export function TasksListFooter({
  tasks,
  currentFilter,
  onFilterChange,
}: TasksListFooter) {
  const clearCompleted = useStore((store) => store.clearCompletedTasks)

  function ActionsButtons() {
    return (
      <>
        <button
          onClick={() => onFilterChange('all')}
          className={cn(
            currentFilter === 'all' && 'font-semibold text-blue-500',
            'hover:text-gray-600 dark:hover:text-white',
          )}
        >
          All
        </button>
        <button
          onClick={() => onFilterChange('active')}
          className={cn(
            currentFilter === 'active' && 'font-semibold text-blue-500',
            'hover:text-gray-600 dark:hover:text-white',
          )}
        >
          Active
        </button>
        <button
          onClick={() => onFilterChange('complete')}
          className={cn(
            currentFilter === 'complete' && 'font-semibold text-blue-500',
            'hover:text-gray-600 dark:hover:text-white',
          )}
        >
          Completed
        </button>
      </>
    )
  }

  return (
    <>
      <footer className="dark:bg-dark-200 flex justify-between rounded-b-xl bg-white p-5 text-gray-400">
        <span>{tasks?.length} items left</span>

        <div className="hidden space-x-5 font-semibold sm:flex">
          <ActionsButtons />
        </div>

        <div>
          <button onClick={clearCompleted} className="hover:text-gray-600">
            Clear Completed
          </button>
        </div>
      </footer>

      <div className="dark:bg-dark-200 mt-4 flex justify-center space-x-5 rounded-lg bg-white py-5 font-semibold text-gray-400 sm:hidden">
        <ActionsButtons />
      </div>
    </>
  )
}
