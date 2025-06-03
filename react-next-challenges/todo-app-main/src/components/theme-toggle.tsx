'use client'

import { useTheme } from 'next-themes'

import { cn } from '@/lib/utils'
import { MoonIcon, SunIcon } from '@/components/icons'

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  // useEffect only runs on the client, so now we can safely show the UI

  return (
    <button
      onClick={() => {
        setTheme(theme === 'light' ? 'dark' : 'light')
      }}
    >
      <span className="sr-only">Switch between light and dark themes</span>

      <MoonIcon
        className={cn(
          'h-10 w-5 fill-current text-white',
          theme === 'dark' && 'hidden',
        )}
      />

      <SunIcon
        className={cn(
          'hidden h-10 w-5 fill-current text-white',
          theme === 'dark' && 'block',
        )}
      />
    </button>
  )
}
