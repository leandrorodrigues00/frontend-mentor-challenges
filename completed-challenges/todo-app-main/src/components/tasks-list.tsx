'use client'

import { useState } from 'react'
import {
  DragDropContext,
  Draggable,
  Droppable,
  DropResult,
} from 'react-beautiful-dnd'

import { useStore } from '@/store'
import { Tasks } from '@/components/tasks'
import { TasksListFooter } from '@/components/tasks-list-footer'

export function TasksList() {
  const tasksList = useStore((store) => store.tasks)
  const [currentFilter, setCurrentFilter] = useState('all')

  let filteredTasks = tasksList.filter((task) => {
    if (currentFilter === 'complete') {
      return task.isCompleted
    } else if (currentFilter === 'active') {
      return !task.isCompleted
    }
    return true
  })

  function handleOnDragEnd(result: DropResult) {
    if (!result.destination) {
      return
    }

    const reorderedItem = tasksList.splice(result.source.index, 1)[0]
    tasksList.splice(result.destination.index, 0, reorderedItem)

    filteredTasks = tasksList
  }

  return (
    <div className="dark:divide-dark-700 relative -top-7 mx-auto max-w-app divide-y divide-gray-100 overflow-hidden rounded-t-xl">
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId="droppable">
          {(provided) => (
            <ul
              className="dark:divide-dark-700 divide-y  divide-gray-100"
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {filteredTasks.map((task, index) => (
                <Draggable
                  key={task.id}
                  draggableId={task.id}
                  index={index}
                  isDragDisabled={currentFilter !== 'all'}
                >
                  {(provided) => (
                    <li
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <Tasks task={task} />
                    </li>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </ul>
          )}
        </Droppable>
      </DragDropContext>

      <TasksListFooter
        tasks={tasksList}
        currentFilter={currentFilter}
        onFilterChange={setCurrentFilter}
      />
    </div>
  )
}
