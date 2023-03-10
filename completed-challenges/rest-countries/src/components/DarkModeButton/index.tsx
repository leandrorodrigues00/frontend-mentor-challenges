'use client'
import { Moon, Sun } from 'phosphor-react'
import { useState, useTransition } from 'react'
import { useRouter } from 'next/navigation'

export function DarkModeButton() {
  const router = useRouter()
  const [isPending, startTransition] = useTransition()
  const [isFetching, setIsFetching] = useState(false)
  const isMutating = isFetching || isPending

  const [darkMode, setDarkMode] = useState(false)

  async function handleChange() {
    setIsFetching(true)

    setDarkMode((prevDarkMode) => !prevDarkMode)

    await fetch('/api/themes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: String(!darkMode),
    })
    setIsFetching(false)

    startTransition(() => {
      router.refresh()
    })
  }

  const icon = darkMode ? (
    <Moon size={25} weight="thin" />
  ) : (
    <Sun size={25} weight="thin" />
  )

  const text = darkMode ? 'Light Mode' : 'Dark Mode'

  return (
    <button
      className={`flex font-semibold items-center gap-2 hover:cursor-pointer ${
        isMutating ? 'opacity-20' : 'opacity-100'
      }`}
      onClick={handleChange}
      disabled={isPending}
    >
      {icon}
      {text}
    </button>
  )
}
