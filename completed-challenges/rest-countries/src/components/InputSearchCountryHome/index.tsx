'use client'
import { MagnifyingGlass } from 'phosphor-react'
import { useRouter } from 'next/navigation'
import { ChangeEvent, useEffect, useState } from 'react'

export function InputSearchCountryHome() {
  const [searchTerm, setSearchTerm] = useState('')
  const router = useRouter()

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    setSearchTerm(event.target.value)
  }

  useEffect(() => {
    async function SearchCountries() {
      const message = {
        source: 'InputSearch',
        region: searchTerm,
      }
      await fetch('/api/countries', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(message),
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
      className="flex bg-white items-center gap-4 max-w-[27.5rem] w-full py-3 pl-7 rounded-lg s border focus-within:border-neutral-800"
    >
      <MagnifyingGlass size={20} weight="thin" />
      <input
        type="text"
        placeholder="Search for a country..."
        className="w-full h-full outline-none"
        id="search-input"
        value={searchTerm}
        onChange={handleInputChange}
      />
    </label>
  )
}
