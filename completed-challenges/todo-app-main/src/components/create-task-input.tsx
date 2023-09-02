'use client'

import { ChangeEvent, useState } from 'react'
import { z } from 'zod'

import { cn } from '@/lib/utils'
import { useStore } from '@/store'
import { Checkbox } from '@/components/ui/checkbox'
import { Input, InputPrefix, InputRoot } from '@/components/ui/input'

const taskSchema = z.object({
  taskText: z.string().min(1),
})

export function CreateTaskInput() {
  const addTask = useStore((store) => store.addTask)
  const [taskText, setTaskText] = useState('')
  const [error, setError] = useState(false)

  function handleCreateTaskText(event: ChangeEvent<HTMLInputElement>) {
    setTaskText(event.target.value)
    setError(false)
  }

  function handleCreateNewTask(event: ChangeEvent<HTMLFormElement>) {
    event.preventDefault()
    try {
      taskSchema.parse({ taskText })
      addTask({
        id: crypto.randomUUID(),
        title: taskText,
        isCompleted: false,
      })
      setTaskText('')
    } catch (error) {
      setError(true)
    }
  }

  return (
    <form onSubmit={handleCreateNewTask}>
      <InputRoot
        className={cn('mt-5', error && 'border-red-500 dark:border-red-500')}
      >
        <InputPrefix className="flex">
          <Checkbox
            checked={false}
            className={cn(error && 'border-red-500 dark:border-red-500')}
          />
        </InputPrefix>
        <Input
          id="todo"
          value={taskText}
          onChange={handleCreateTaskText}
          type="text"
          placeholder="Create a new todo..."
          className={cn(
            error && 'placeholder-red-500 dark:placeholder-red-500',
          )}
        />
      </InputRoot>
    </form>
  )
}
