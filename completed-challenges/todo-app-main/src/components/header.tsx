import { CreateTaskInput } from '@/components/create-task-input'

import { ThemeToggle } from './theme-toggle'

export function Header() {
  return (
    <header className="min-h-[200px] bg-header-mob-light bg-center px-6 pt-12 dark:bg-header-mob-dark sm:bg-header-desk-light sm:dark:bg-header-desk-dark">
      <div className="mx-auto max-w-app">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold tracking-[12px] text-white">
            TODO
          </h1>
          <ThemeToggle />
        </div>
        <CreateTaskInput />
      </div>
    </header>
  )
}
