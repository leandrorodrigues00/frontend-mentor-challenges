'use client'
import { Sun } from 'phosphor-react'

export function DarkModeButton() {
  return (
    <div className="flex font-semibold items-center gap-2">
      <Sun size={25} weight="thin" />
      Dark Mode
    </div>
  )
}
