'use client'
import { MagnifyingGlass } from 'phosphor-react'
import { useRouter } from 'next/navigation'
import { ChangeEvent, useEffect, useState } from 'react'
import { setCookie } from 'nookies'

export function InputSearchCountryHome() {
  const [searchTerm, setSearchTerm] = useState('')
  const router = useRouter()

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    setSearchTerm(event.target.value)
  }

  useEffect(() => {
    async function SearchCountries() {
      // const message = {
      //   source: 'InputSearch',
      //   region: searchTerm,
      // }
      // await fetch('/api/countries', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify(message),
      // })

      setCookie(null, 'CountryNameCookie', searchTerm, {
        maxAge: 30 * 24 * 60 * 60,
        path: '/',
      })
      router.refresh()
    }

    const debounceTimer: NodeJS.Timeout = setTimeout(() => {
      SearchCountries()
    }, 500)

    return () => {
      clearTimeout(debounceTimer)
    }
  }, [searchTerm, router])

  return (
    <label
      htmlFor="search-input"
      className="flex bg-white items-center gap-4 max-w-[27.5rem] w-full py-3 pl-7 rounded-lg border focus-within:border-neutral-800 dark:bg-[#2b3945] dark:border-none dark:shadow-3xl"
    >
      <MagnifyingGlass size={20} weight="thin" />
      <input
        type="text"
        placeholder="Search for a country..."
        className="w-full h-full outline-none dark:bg-[#2b3945]"
        id="search-input"
        value={searchTerm}
        onChange={handleInputChange}
      />
    </label>
  )
}
