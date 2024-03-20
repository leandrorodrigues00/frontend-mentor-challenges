'use client'

import { usePathname } from 'next/navigation'

import { docsConfig } from '@/config/docs'
import { cn } from '@/lib/utils'

export function Aside() {
  const pathname = usePathname()

  return (
    <aside className="absolute left-0 right-0 top-0 z-0 h-[10.75rem] max-h-full bg-aside-mobile bg-cover p-8 xs:relative xs:h-[35.5rem] xs:w-[17.125rem] xs:rounded-lg xs:bg-aside-desktop">
      <ul className="flex justify-center  gap-8 xs:flex-col  ">
        {docsConfig.sidebarNav.map((data, index) => (
          <li key={index} className="flex items-center gap-4">
            <div
              className={cn(
                'flex h-9 w-9 items-center justify-center rounded-full',
                pathname === data.path || pathname === data.altPath
                  ? 'bg-light-blue '
                  : 'border text-white',
              )}
            >
              {data.id}
            </div>
            <div>
              <span className="hidden text-xs text-pastel-blue xs:block">
                STEP {data.id}
              </span>
              <p className="hidden text-sm leading-4 text-white xs:block">
                {data.description}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </aside>
  )
}
