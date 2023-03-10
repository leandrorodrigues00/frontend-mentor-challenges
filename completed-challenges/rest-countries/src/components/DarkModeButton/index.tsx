'use client'
import { Moon, Sun } from 'phosphor-react'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

async function updateMessage(darkMode: boolean) {
  const message = darkMode
  await fetch('/api/themes', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: String(message),
  })
}

export function DarkModeButton() {
  const [darkMode, setDarkMode] = useState(false)
  const router = useRouter()

  function toggleDarkMode() {
    setDarkMode((prevDarkMode) => !prevDarkMode)
    updateMessage(darkMode)
    router.refresh()
  }

  return (
    <div
      className="flex font-semibold items-center gap-2 hover:cursor-pointer"
      onClick={toggleDarkMode}
    >
      {darkMode ? (
        <>
          <Moon size={25} weight="thin" />
          Light Mode
        </>
      ) : (
        <>
          <Sun size={25} weight="thin" />
          Dark Mode
        </>
      )}
    </div>
  )
}
