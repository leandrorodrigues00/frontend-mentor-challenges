import { ReactNode } from 'react'
import { Nunito } from 'next/font/google'
import { cookies } from 'next/headers'

import { Header } from '@/components/Header'
import '../styles/global.css'

const nunito = Nunito({ subsets: ['latin'] })

export const metadata = {
  title: 'Countries API',
  description: 'Page for country API',
}

// async function getTheme() {
//   const responseApiCountries = await fetch(
//     `${process.env.NEXT_PUBLIC_URL}/api/themes`,
//     {
//       cache: 'no-store',
//     },
//   )

//   return responseApiCountries.json()
// }

export default async function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  // const theme = await getTheme()

  const { value: cookieValue } = cookies().get('darkModeCookie') ?? {}
  const darkModeEnabled = cookieValue === 'true'

  return (
    <html
      lang="en"
      className={`${nunito.className} ${darkModeEnabled ? 'dark' : ''}`}
    >
      <body className="bg-[#fafafa] dark:bg-[#202c37] dark:text-white	">
        <Header />
        {children}
      </body>
    </html>
  )
}
