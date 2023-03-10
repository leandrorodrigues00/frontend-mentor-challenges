import { ReactNode } from 'react'
import { Nunito } from 'next/font/google'

import { Header } from '@/components/Header'
import '../styles/global.css'

const nunito = Nunito({ subsets: ['latin'] })

export const metadata = {
  title: 'Countries API',
  description: 'Page for country API',
}

export default async function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  const responseApiCountries = await fetch(
    `${process.env.NEXT_PUBLIC_URL}/api/themes?t=${Date.now()}`,
    {
      cache: 'no-store',
    },
  )
  const response = await responseApiCountries.json()

  return (
    <html lang="en" className={`${nunito.className} ${response ? 'dark' : ''}`}>
      <body className="bg-[#fafafa] dark:bg-[#202c37] dark:text-white	">
        {`darkmode? ${response}`}
        <Header />
        {children}
      </body>
    </html>
  )
}
