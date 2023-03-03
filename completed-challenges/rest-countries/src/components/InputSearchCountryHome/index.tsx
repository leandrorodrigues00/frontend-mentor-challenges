'use client'
import { MagnifyingGlass } from 'phosphor-react'

export function InputSearchCountryHome() {
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
      />
    </label>
  )
}
