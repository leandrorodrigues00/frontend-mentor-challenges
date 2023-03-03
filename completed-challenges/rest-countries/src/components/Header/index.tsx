import Link from 'next/link'
import { DarkModeButton } from '../DarkModeButton'

export function Header() {
  return (
    <header className="flex justify-between py-7 px-[4.68rem] shadow-md bg-white">
      <h1 className="text-xl font-extrabold">
        <Link href="/">Where in the world?</Link>
      </h1>

      <DarkModeButton />
    </header>
  )
}
