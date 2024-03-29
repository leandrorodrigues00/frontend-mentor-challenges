'use client'
import { Moon, Sun } from 'phosphor-react'
import { useEffect, useState, useTransition } from 'react'
import { useRouter } from 'next/navigation'
import { parseCookies, setCookie } from 'nookies'

// async function fetchTheme(darkMode: boolean) {
//   await fetch('/api/themes', {
//     method: 'POST',
//     body: String(darkMode),
//   })
// }

export function DarkModeButton() {
  const router = useRouter()
  const [isPending, startTransition] = useTransition()
  const [isFetching, setIsFetching] = useState(false)
  const isMutating = isFetching || isPending

  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    const cookies = parseCookies()
    const darkModeCookie = cookies.darkModeCookie
    if (darkModeCookie) {
      setDarkMode(darkModeCookie === 'true')
    }
  }, [])

  async function handleChange() {
    setIsFetching(true)

    const newDarkMode = !darkMode

    setDarkMode(newDarkMode)

    setDarkModeCookie(newDarkMode)
    // fetchTheme(newDarkMode)
    setIsFetching(false)

    startTransition(() => {
      router.refresh()
    })
  }

  function setDarkModeCookie(darkMode: boolean) {
    setCookie(null, 'darkModeCookie', darkMode.toString(), {
      maxAge: 30 * 24 * 60 * 60,
      path: '/',
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
