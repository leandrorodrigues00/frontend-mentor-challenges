import { TasksList } from '@/components/tasks-list'

export default function Home() {
  return (
    <div className="dark:bg-dark-100 min-h-screen bg-gray-100 px-6">
      <TasksList />

      <p className="mt-6 text-center text-gray-400">
        Drag and drop to reorder list
      </p>
    </div>
  )
}
