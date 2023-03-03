import { ReactNode } from 'react'
import { Nunito } from 'next/font/google'

import { Header } from '@/components/Header'
import '../styles/global.css'

const nunito = Nunito({ subsets: ['latin'] })

export const metadata = {
  title: 'Countries API',
  description: 'Page for country API',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={nunito.className}>
      <body className="bg-[#fafafa]">
        <Header />
        {children}
      </body>
    </html>
  )
}
