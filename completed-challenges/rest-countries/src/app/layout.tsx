import { ReactNode } from 'react'
import { Nunito } from 'next/font/google'

import { Header } from '@/components/Header'
import '../styles/global.css'

const nunito = Nunito({ subsets: ['latin'] })

export const metadata = {
  title: 'Countries API',
  description: 'Page for country API',
}

async function getTheme() {
  const responseApiCountries = await fetch(
    `${process.env.NEXT_PUBLIC_URL}/api/themes`,
    {
      cache: 'no-store',
    },
  )
  const theme = await responseApiCountries.json()
  return theme
}

export default async function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  const theme = await getTheme()

  return (
    <html lang="en" className={`${nunito.className} ${theme ? 'dark' : ''}`}>
      <body className="bg-[#fafafa] dark:bg-[#202c37] dark:text-white	">
        <Header />
        {children}
      </body>
    </html>
  )
}
