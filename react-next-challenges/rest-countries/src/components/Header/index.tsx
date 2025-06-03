import Link from 'next/link'
import { DarkModeButton } from '../DarkModeButton'

export function Header() {
  return (
    <header className="flex justify-between py-7 px-[4.68rem] shadow-md bg-white max-[580px]:px-3   dark:bg-[#202c37]">
      <h1 className="text-xl font-extrabold max-[580px]:text-base">
        <Link href="/">Where in the world?</Link>
      </h1>

      <DarkModeButton />
    </header>
  )
}
