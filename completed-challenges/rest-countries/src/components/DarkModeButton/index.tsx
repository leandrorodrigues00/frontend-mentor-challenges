'use client'
import { Moon, Sun } from 'phosphor-react'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

export function DarkModeButton() {
  const [darkMode, setDarkMode] = useState(false)

  const router = useRouter()

  function toggleDarkMode() {
    setDarkMode((prevDarkMode) => !prevDarkMode)
  }

  useEffect(() => {
    async function updateMessage() {
      const message = darkMode
      await fetch('/api/themes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: String(message),
      })
      router.refresh()
    }
    updateMessage()
  }, [darkMode, router])

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
