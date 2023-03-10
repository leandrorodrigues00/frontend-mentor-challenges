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

  async function toggleDarkMode() {
    setDarkMode((prevDarkMode) => !prevDarkMode)
    await updateMessage(!darkMode)
    router.refresh()
  }

  const icon = darkMode ? (
    <Moon size={25} weight="thin" />
  ) : (
    <Sun size={25} weight="thin" />
  )

  const text = darkMode ? 'Light Mode' : 'Dark Mode'

  return (
    <div
      className="flex font-semibold items-center gap-2 hover:cursor-pointer"
      onClick={toggleDarkMode}
    >
      {icon}
      {text}
    </div>
  )
}
