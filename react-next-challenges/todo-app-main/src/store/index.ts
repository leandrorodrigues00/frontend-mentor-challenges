import { create } from 'zustand'

import { TaskConfig } from '@/types'

interface TasksStore {
  tasks: Array<TaskConfig>

  addTask: (newTask: TaskConfig) => void
  toggleTaskCompletion: (taskId: string) => void
  deleteTask: (taskId: string) => void
  clearCompletedTasks: () => void
}

export const useStore = create<TasksStore>((set, get) => {
  return {
    tasks: [],

    addTask: (newTask: TaskConfig) =>
      set((state) => ({
        tasks: [...state.tasks, newTask],
      })),

    toggleTaskCompletion: (taskId: string) => {
      set((state) => ({
        tasks: state.tasks.map((task) =>
          task.id === taskId
            ? { ...task, isCompleted: !task.isCompleted }
            : task,
        ),
      }))
    },

    deleteTask: (taskId: string) => {
      set((state) => ({
        tasks: state.tasks.filter((task) => task.id !== taskId),
      }))
    },

    clearCompletedTasks: () => {
      set((state) => ({
        tasks: state.tasks.filter((task) => !task.isCompleted),
      }))
    },
    
  }
})
